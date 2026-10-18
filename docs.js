// Study docs: an editable, linkable document for every skill.
(() => {
  const EDITS_KEY = "apclutch-docs-v1";
  const edits = load(EDITS_KEY, {});
  const saveEdits = () => store(EDITS_KEY, edits);
  const docKey = (exam, cat, skill) => `${exam}|${cat}|${skill}`;
  const hashFor = (exam, cat, skill) => `#doc/${exam}/${cat}/${skill}`;

  const state = { exam: null, cat: null, skill: null, practice: [], shown: new Set(), answered: {}, opener: null, editing: false };
  let root = null;
  let saveTimer = null;

  /* ---------- Sanitizer for user-editable HTML ---------- */
  const ALLOWED = new Set(["P", "BR", "B", "STRONG", "I", "EM", "U", "UL", "OL", "LI", "H2", "H3", "H4", "DIV", "SPAN", "A", "BLOCKQUOTE", "CODE", "SUP", "SUB"]);
  const DROP = new Set(["SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "LINK", "META", "FORM", "INPUT", "BUTTON", "TEXTAREA", "SELECT", "SVG", "MATH", "IMG", "VIDEO", "AUDIO"]);

  function clean(node) {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === 3) return;
      if (child.nodeType !== 1) {
        child.remove();
        return;
      }
      if (DROP.has(child.tagName)) {
        child.remove();
        return;
      }
      if (!ALLOWED.has(child.tagName)) {
        clean(child);
        child.replaceWith(...child.childNodes);
        return;
      }
      Array.from(child.attributes).forEach((a) => {
        if (!(child.tagName === "A" && a.name === "href")) child.removeAttribute(a.name);
      });
      if (child.tagName === "A") {
        const url = safeUrl(child.getAttribute("href"));
        if (!url) {
          clean(child);
          child.replaceWith(...child.childNodes);
          return;
        }
        child.setAttribute("href", url);
        child.setAttribute("target", "_blank");
        child.setAttribute("rel", "noopener noreferrer");
      }
      clean(child);
    });
  }

  function sanitize(html) {
    const parsed = new DOMParser().parseFromString(`<div>${html}</div>`, "text/html");
    const rootDiv = parsed.body.firstChild;
    clean(rootDiv);
    return rootDiv.innerHTML;
  }

  /* ---------- Default document content ---------- */
  const list = (items, tag = "ul") => `<${tag}>${items.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</${tag}>`;

  function defaultBody(cat, skill, extra) {
    let html = `<h2>Overview</h2><p>${escapeHtml(skill.lesson)}</p>`;
    (extra.deep || []).forEach((para) => (html += `<p>${escapeHtml(para)}</p>`));
    if ((skill.points || []).length) html += `<h2>Key ideas to remember</h2>${list(skill.points)}`;
    html += `<h2>Key tips</h2>${list(skill.tips)}`;
    if ((extra.examples || []).length) {
      html += "<h2>Worked examples</h2>";
      extra.examples.forEach((ex, i) => {
        html += `<h3>Example ${i + 1}</h3><p><strong>Problem:</strong> ${escapeHtml(ex.p)}</p><p><strong>Solution:</strong></p>${list(ex.steps, "ol")}<p><strong>Answer:</strong> ${escapeHtml(ex.a)}</p>`;
      });
    }
    if ((extra.cheat || []).length) html += `<h2>Offline cheat sheet</h2><p>Everything worth memorizing, saved right here so you can study without internet access.</p>${list(extra.cheat)}`;
    if ((extra.mistakes || []).length) html += `<h2>Common mistakes</h2>${list(extra.mistakes)}`;
    return html;
  }

  /* ---------- Performance & missed questions ---------- */
  function latestFull(exam) {
    return AP.latestAttempt(exam);
  }

  AP.skillStatus = (exam, catId, skillId) => {
    const att = latestFull(exam);
    if (att && att.result) {
      const s = att.result.skills.find((x) => x.cat === catId && x.skill === skillId);
      if (s) return { source: "Latest full practice test", correct: s.correct, total: s.total, level: s.level };
    }
    const cat = AP.getCat(exam, catId);
    const saved = AP.progress && AP.progress[exam] && AP.progress[exam][catId];
    if (saved && saved.answers) {
      const qs = cat.questions.filter((q) => q.skill === skillId);
      if (qs.length && qs.every((q) => Number.isInteger(saved.answers[q.id]))) {
        const correct = qs.filter((q) => saved.answers[q.id] === q.answer).length;
        return { source: "Quick subject check", correct, total: qs.length, level: AP.levelOf(correct / qs.length) };
      }
    }
    return null;
  };

  function missedFor(exam, catId, skillId) {
    const out = [];
    const att = latestFull(exam);
    if (att) {
      const when = new Date(att.finishedAt || att.startedAt).toLocaleDateString();
      att.sections.forEach((sec) =>
        sec.modules.forEach((m) =>
          m.questions.forEach((q) => {
            if (q.cat !== catId || q.skill !== skillId || m.answers[q.id] === q.answer) return;
            out.push({ source: `Full practice test, ${when}`, q: { ...q, passage: AP.passageOf(att, q) }, given: m.answers[q.id] });
          }),
        ),
      );
    }
    const cat = AP.getCat(exam, catId);
    const saved = AP.progress && AP.progress[exam] && AP.progress[exam][catId];
    if (saved && saved.answers) {
      cat.questions.forEach((q) => {
        if (q.skill === skillId && Number.isInteger(saved.answers[q.id]) && saved.answers[q.id] !== q.answer) {
          out.push({ source: "Quick subject check", q, given: saved.answers[q.id] });
        }
      });
    }
    return out;
  }

  /* ---------- Practice problems ---------- */
  function pickPractice(exam, cat, skillId, n = 5) {
    const R = makeRng();
    const seen = AP.seenIds(exam);
    const key = (q) => `${q.q}||${q.passage || ""}`;
    const used = new Set();
    const out = [];
    const add = (q) => {
      if (out.length >= n || used.has(key(q)) || state.shown.has(q.id)) return;
      used.add(key(q));
      out.push(q);
    };
    const pool = R.shuffle(cat.bank.filter((q) => q.skill === skillId));
    pool.filter((q) => !seen.has(q.id)).forEach(add);
    const isMath = Boolean((AP.mathPools[exam] || {})[skillId]);
    for (let tries = 0; isMath && out.length < n && tries < 80; tries++) {
      const made = AP.generateMath(exam, skillId, R);
      if (made) add({ id: `g-${skillId}-${newId()}`, exam, cat: cat.id, skill: skillId, q: made.q, choices: made.choices, answer: made.answer, why: made.why });
    }
    pool.forEach(add);
    return out;
  }

  /* ---------- Resources ---------- */
  const ytSearch = (query) => `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

  function videoLinks(exam, rawCat, skill) {
    const cat = { ...rawCat, name: rawCat.name.replace(/\s*\(pilot\)/i, "") };
    const subject = exam === "AP" ? cat.name : `${exam} ${skill.name}`;
    return [
      [`Search YouTube: “${subject} explained”`, ytSearch(`${subject} explained`), "Step-by-step lessons from tutors and teachers."],
      [`Search YouTube: “${exam === "AP" ? `${cat.name} ${skill.name}` : skill.name} practice problems with solutions”`, ytSearch(`${exam === "AP" ? `${cat.name} ${skill.name}` : skill.name} practice problems with solutions`), "Watch someone work through problems like yours."],
      [`Search YouTube: “${exam === "AP" ? `${cat.name} exam review` : `${exam} ${cat.name} strategies and tips`}”`, ytSearch(exam === "AP" ? `${cat.name} exam review` : `${exam} ${cat.name} strategies and tips`), "Test-day strategies and pacing."],
      ["Khan Academy on YouTube", "https://www.youtube.com/@khanacademy", "Free video lessons on math, grammar, and reading."],
    ];
  }

  /* ---------- Rendering ---------- */
  function buildShell() {
    root = el("div", "doc-viewer");
    root.id = "doc-viewer";
    root.hidden = true;
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-label", "Study document");
    document.body.append(root);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !root.hidden) closeDoc();
    });
  }

  function toolbarButton(label, title, onClick, className = "doc-tool") {
    const b = el("button", className, label);
    b.type = "button";
    b.title = title;
    b.setAttribute("aria-label", title);
    b.addEventListener("click", onClick);
    return b;
  }

  function formatButton(label, title, command, arg) {
    const b = el("button", "fmt-btn", label);
    b.type = "button";
    b.title = title;
    b.setAttribute("aria-label", title);
    // mousedown + preventDefault keeps the text selection while formatting
    b.addEventListener("mousedown", (e) => e.preventDefault());
    b.addEventListener("click", () => {
      if (command === "createLink") {
        const url = safeUrl(prompt("Link address (starting with https://)"));
        if (url) document.execCommand("createLink", false, url);
        else return;
      } else {
        document.execCommand(command, false, arg);
      }
      queueSave();
    });
    return b;
  }

  function render() {
    const { exam, cat: catId, skill: skillId } = state;
    const cat = AP.getCat(exam, catId);
    const skill = AP.getSkill(exam, catId, skillId);
    const extra = (window.PREP_DOCS || {})[`${catId}:${skillId}`] || {};
    const saved = edits[docKey(exam, catId, skillId)] || {};
    root.replaceChildren();
    state.editing = false;

    /* top bar */
    const top = el("div", "doc-top");
    top.append(toolbarButton("← Back", "Close document", closeDoc, "doc-back"));
    const crumbs = el("div", "doc-crumbs");
    crumbs.append(el("span", "", `${exam} · ${cat.name}`), el("strong", "", skill.name));
    top.append(crumbs);
    const actions = el("div", "doc-actions");
    const editBtn = toolbarButton("Edit doc", "Turn editing on or off", () => setEditing(!state.editing), "doc-tool doc-edit-toggle");
    editBtn.setAttribute("aria-pressed", "false");
    actions.append(
      editBtn,
      toolbarButton("Copy link", "Copy a link to this document", copyLink),
      toolbarButton("Download", "Download an offline copy", downloadDoc),
      toolbarButton("Print", "Print this document", () => window.print()),
    );
    top.append(actions);
    root.append(top);

    /* formatting bar (only visible while editing) */
    const fmt = el("div", "doc-format");
    fmt.hidden = true;
    fmt.id = "doc-format";
    fmt.append(
      formatButton("B", "Bold", "bold"),
      formatButton("I", "Italic", "italic"),
      formatButton("U", "Underline", "underline"),
      formatButton("H", "Heading", "formatBlock", "H3"),
      formatButton("¶", "Normal text", "formatBlock", "P"),
      formatButton("• List", "Bulleted list", "insertUnorderedList"),
      formatButton("1. List", "Numbered list", "insertOrderedList"),
      formatButton("🔗", "Add link", "createLink"),
      formatButton("↶", "Undo", "undo"),
      formatButton("↷", "Redo", "redo"),
    );
    const reset = el("button", "fmt-reset", "Reset doc to original");
    reset.type = "button";
    reset.addEventListener("click", () => {
      if (!confirm("Reset the main document text to the original? Your notes at the bottom are kept.")) return;
      const e = edits[docKey(exam, catId, skillId)];
      if (e) delete e.body;
      saveEdits();
      $("#doc-body").innerHTML = defaultBody(cat, skill, extra);
      setSaveStatus("Reset to original");
    });
    fmt.append(reset);
    root.append(fmt);

    const scroller = el("div", "doc-scroll");
    const paper = el("article", "doc-paper");
    scroller.append(paper);
    root.append(scroller);

    /* header */
    const head = el("header", "doc-head");
    head.append(el("span", "eyebrow-small", `${exam} · ${cat.section} · ${cat.name}`));
    const h1 = el("h1", "", skill.name);
    h1.tabIndex = -1;
    h1.id = "doc-title";
    head.append(h1);
    const meta = el("div", "doc-meta");
    const status = AP.skillStatus(exam, catId, skillId);
    if (status) {
      meta.append(el("span", `level-badge level-${status.level}`, { strong: "Strong", developing: "Developing", needs: "Needs work" }[status.level]));
      meta.append(el("span", "doc-meta-text", `${status.source}: ${status.correct} of ${status.total} correct`));
    } else {
      meta.append(el("span", "doc-meta-text", "Take a practice test or quick check and your results for this skill will appear here."));
    }
    const saveStatus = el("span", "doc-save-status", saved.updated ? `Edited ${new Date(saved.updated).toLocaleDateString()}` : "");
    saveStatus.id = "doc-save-status";
    saveStatus.setAttribute("aria-live", "polite");
    meta.append(saveStatus);
    head.append(meta);
    const toc = el("nav", "doc-toc");
    toc.setAttribute("aria-label", "On this page");
    [["Your mistakes", "doc-missed"], ["Practice", "doc-practice"], ["Videos & websites", "doc-resources"], ["My notes", "doc-notes"]].forEach(([label, id]) => {
      const a = el("a", "", label);
      a.href = `#${id}`;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      toc.append(a);
    });
    head.append(toc);
    paper.append(head);

    /* editable body */
    const body = el("div", "doc-editable");
    body.id = "doc-body";
    body.innerHTML = sanitize(saved.body || defaultBody(cat, skill, extra));
    body.addEventListener("input", queueSave);
    paper.append(body);

    /* missed questions */
    const missedSection = el("section", "doc-section");
    missedSection.id = "doc-missed";
    missedSection.append(el("h2", "", "Why you got these wrong"));
    const missed = missedFor(exam, catId, skillId);
    if (!missed.length) {
      missedSection.append(el("p", "doc-empty", "No mistakes recorded for this skill yet. Take the full practice test or a quick subject check and any questions you miss will be explained here."));
    } else {
      missedSection.append(el("p", "doc-lead", "Read each explanation, then try to say the reasoning out loud in your own words."));
      missed.forEach(({ source, q, given }) => missedSection.append(reviewCard(source, q, given)));
    }
    paper.append(missedSection);

    /* practice */
    const practiceSection = el("section", "doc-section");
    practiceSection.id = "doc-practice";
    practiceSection.append(el("h2", "", "Practice problems"));
    const practiceHost = el("div", "doc-practice-list");
    practiceSection.append(practiceHost);
    const more = el("button", "ws-button ws-button-ghost", "More problems");
    more.type = "button";
    more.addEventListener("click", () => {
      state.practice.forEach((q) => state.shown.add(q.id));
      let next = pickPractice(exam, cat, skillId);
      if (!next.length) {
        state.shown.clear();
        next = pickPractice(exam, cat, skillId);
      }
      state.practice = next;
      drawPractice(practiceHost);
    });
    practiceSection.append(more);
    paper.append(practiceSection);

    /* resources */
    const res = el("section", "doc-section");
    res.id = "doc-resources";
    res.append(el("h2", "", "Videos & websites"));
    res.append(el("p", "doc-lead", "These open in a new tab. No internet? Everything you need to remember is in the cheat sheet above, and you can use Download to save an offline copy."));
    res.append(el("h3", "", "Watch & learn"));
    const videos = el("ul", "resource-list");
    videoLinks(exam, cat, skill).forEach(([label, href, note]) => {
      const li = el("li");
      const a = externalLink(label, href);
      if (a) li.append(a, el("span", "resource-note", note));
      videos.append(li);
    });
    res.append(videos);
    res.append(el("h3", "", "Read & practice"));
    const sites = el("ul", "resource-list");
    skill.links.forEach(([label, href]) => {
      const a = externalLink(`${label} ↗`, href);
      if (!a) return;
      const li = el("li");
      li.append(a);
      sites.append(li);
    });
    res.append(sites);
    paper.append(res);

    /* notes */
    const notes = el("section", "doc-section");
    notes.id = "doc-notes";
    notes.append(el("h2", "", "My notes"));
    const notesBox = el("div", "doc-editable doc-notes-box");
    notesBox.id = "doc-notes-box";
    notesBox.dataset.placeholder = "Click “Edit doc” to write your own notes, formulas, and reminders here.";
    notesBox.innerHTML = sanitize(saved.notes || "");
    notesBox.addEventListener("input", queueSave);
    notes.append(notesBox);
    paper.append(notes);

    state.practice = pickPractice(exam, cat, skillId);
    drawPractice(practiceHost);
  }

  function reviewCard(source, q, given) {
    const box = el("div", "review-item");
    box.append(el("p", "review-source", source));
    if (q.passage) box.append(passageEl(q.passage));
    box.append(el("p", "question-text", q.q));
    box.append(
      el("p", "review-line wrong", Number.isInteger(given) ? `Your answer: ${LETTERS[given]}. ${q.choices[given]}` : "You skipped this question."),
      el("p", "review-line right", `Correct answer: ${LETTERS[q.answer]}. ${q.choices[q.answer]}`),
      el("p", "review-why", q.why),
    );
    return box;
  }

  function drawPractice(host) {
    host.replaceChildren();
    if (!state.practice.length) {
      host.append(el("p", "doc-empty", "No practice problems are available for this skill yet."));
      return;
    }
    state.practice.forEach((q, index) => host.append(practiceCard(q, index)));
  }

  function practiceCard(q, index) {
    const box = el("div", "practice-q");
    const draw = () => {
      box.replaceChildren();
      box.append(el("p", "practice-num", `Problem ${index + 1}`));
      if (q.passage) box.append(passageEl(q.passage));
      box.append(el("p", "question-text", q.q));
      const picked = state.answered[q.id];
      const revealed = picked !== undefined;
      const choices = el("div", "choices");
      q.choices.forEach((text, i) => {
        const b = el("button", "choice choice-button");
        b.type = "button";
        b.append(el("span", "choice-letter", LETTERS[i]), el("span", "choice-text", text));
        if (revealed) {
          b.disabled = true;
          if (i === q.answer) b.classList.add("correct");
          else if (i === picked) b.classList.add("incorrect");
        } else {
          b.addEventListener("click", () => {
            state.answered[q.id] = i;
            draw();
            const fb = box.querySelector(".practice-feedback");
            if (fb) fb.focus();
          });
        }
        choices.append(b);
      });
      box.append(choices);
      if (revealed) {
        const right = picked === q.answer;
        const fb = el("div", `practice-feedback ${right ? "right" : "wrong"}`);
        fb.tabIndex = -1;
        const label = picked === -1 ? `The answer is ${LETTERS[q.answer]}.` : right ? "Correct!" : `Not quite. The answer is ${LETTERS[q.answer]}.`;
        fb.append(el("strong", "", label), el("p", "", q.why));
        const again = el("button", "ws-link", "Try again");
        again.type = "button";
        again.addEventListener("click", () => {
          delete state.answered[q.id];
          draw();
        });
        fb.append(again);
        box.append(fb);
      } else {
        const show = el("button", "ws-link", "Show answer and explanation");
        show.type = "button";
        show.addEventListener("click", () => {
          state.answered[q.id] = -1;
          draw();
        });
        box.append(show);
      }
    };
    draw();
    return box;
  }

  /* ---------- Editing ---------- */
  function setEditing(on) {
    state.editing = on;
    $$(".doc-editable", root).forEach((node) => {
      node.contentEditable = on ? "true" : "false";
      node.classList.toggle("is-editing", on);
    });
    $("#doc-format").hidden = !on;
    const btn = $(".doc-edit-toggle", root);
    btn.setAttribute("aria-pressed", String(on));
    btn.textContent = on ? "Done editing" : "Edit doc";
    if (on) $("#doc-body").focus();
  }

  function setSaveStatus(text) {
    const s = $("#doc-save-status");
    if (s) s.textContent = text;
  }

  function queueSave() {
    setSaveStatus("Saving…");
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveNow, 500);
  }

  function saveNow() {
    clearTimeout(saveTimer);
    if (!root || root.hidden || !$("#doc-body")) return;
    const key = docKey(state.exam, state.cat, state.skill);
    edits[key] = { body: sanitize($("#doc-body").innerHTML), notes: sanitize($("#doc-notes-box").innerHTML), updated: Date.now() };
    saveEdits();
    setSaveStatus(AP.storageFailed ? "Couldn't save (browser storage unavailable)" : "Saved");
  }

  /* ---------- Share & download ---------- */
  function docUrl() {
    return `${location.href.split("#")[0]}${hashFor(state.exam, state.cat, state.skill)}`;
  }

  function copyLink() {
    const url = docUrl();
    const done = () => setSaveStatus("Link copied");
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, () => prompt("Copy this link:", url));
    else prompt("Copy this link:", url);
  }

  function downloadDoc() {
    saveNow();
    const { exam, cat: catId, skill: skillId } = state;
    const cat = AP.getCat(exam, catId);
    const skill = AP.getSkill(exam, catId, skillId);
    const parts = [];
    parts.push(`<h1>${escapeHtml(skill.name)}</h1><p><em>${escapeHtml(exam)} · ${escapeHtml(cat.name)} · downloaded from AP Clutch</em></p>`);
    parts.push($("#doc-body").innerHTML);
    const missed = missedFor(exam, catId, skillId);
    if (missed.length) {
      parts.push("<h2>Why you got these wrong</h2>");
      missed.forEach(({ q, given }) => {
        parts.push(`<div class="q">${q.passage ? `<blockquote>${escapeHtml(q.passage).replace(/\n/g, "<br>")}</blockquote>` : ""}<p><strong>${escapeHtml(q.q)}</strong></p><p>Your answer: ${Number.isInteger(given) ? `${LETTERS[given]}. ${escapeHtml(q.choices[given])}` : "skipped"}</p><p>Correct answer: ${LETTERS[q.answer]}. ${escapeHtml(q.choices[q.answer])}</p><p>${escapeHtml(q.why)}</p></div>`);
      });
    }
    parts.push("<h2>Practice problems (with answers)</h2>");
    state.practice.forEach((q, i) => {
      parts.push(`<div class="q"><p><strong>${i + 1}. ${escapeHtml(q.q)}</strong></p>${q.passage ? `<blockquote>${escapeHtml(q.passage).replace(/\n/g, "<br>")}</blockquote>` : ""}<ol type="A">${q.choices.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}</ol><p><em>Answer: ${LETTERS[q.answer]}. ${escapeHtml(q.why)}</em></p></div>`);
    });
    parts.push("<h2>Links</h2><ul>");
    videoLinks(exam, cat, skill).concat(skill.links.map(([l, h]) => [l, h])).forEach(([l, h]) => parts.push(`<li>${escapeHtml(l)}: ${escapeHtml(h)}</li>`));
    parts.push("</ul><h2>My notes</h2>", $("#doc-notes-box").innerHTML);
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${escapeHtml(skill.name)} — AP Clutch</title><style>body{font:16px/1.7 system-ui,sans-serif;max-width:760px;margin:40px auto;padding:0 20px;color:#17241f}h1,h2,h3{font-family:Georgia,serif}blockquote{border-left:4px solid #b9cf8f;margin:12px 0;padding:6px 14px;background:#f4f6ea}.q{border:1px solid #e3e5d9;border-radius:10px;padding:6px 16px;margin:12px 0}</style></head><body>${parts.join("")}</body></html>`;
    const blob = new Blob([html], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `AP-Clutch-${skill.name.replace(/[^a-z0-9]+/gi, "-")}.html`;
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    setSaveStatus("Downloaded");
  }

  /* ---------- Open / close / routing ---------- */
  function showDoc(exam, cat, skill) {
    if (!AP.getSkill(exam, cat, skill)) return false;
    if (!root) buildShell();
    if (!root.hidden) saveNow();
    Object.assign(state, { exam, cat, skill, shown: new Set(), answered: {} });
    render();
    root.hidden = false;
    document.body.classList.add("doc-open");
    $("#doc-title").focus();
    $(".doc-scroll", root).scrollTop = 0;
    return true;
  }

  function closeDoc() {
    if (!root || root.hidden) return;
    saveNow();
    root.hidden = true;
    document.body.classList.remove("doc-open");
    if (location.hash.startsWith("#doc/")) history.replaceState(null, "", "#plan");
    if (state.opener && document.contains(state.opener)) state.opener.focus();
    state.opener = null;
  }

  AP.openDoc = (exam, cat, skill) => {
    state.opener = document.activeElement;
    const hash = hashFor(exam, cat, skill);
    if (location.hash === hash) showDoc(exam, cat, skill);
    else location.hash = hash;
  };
  AP.closeDoc = closeDoc;

  AP.routeDocHash = () => {
    const m = location.hash.match(/^#doc\/([^/]+)\/([^/]+)\/([^/]+)$/);
    if (m) {
      if (!showDoc(decodeURIComponent(m[1]), decodeURIComponent(m[2]), decodeURIComponent(m[3]))) history.replaceState(null, "", "#plan");
    } else if (root && !root.hidden) {
      closeDoc();
    }
  };
  window.addEventListener("hashchange", AP.routeDocHash);
  window.addEventListener("beforeunload", () => root && !root.hidden && saveNow());
})();
