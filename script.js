const PROGRESS_KEY = "apclutch-prep-v1";
const NOTEBOOK_KEY = "apclutch-workspace-v1";
const EXAMS = ["SAT", "ACT", "AP"];
const LEVELS = { strong: "Strong", developing: "Developing", needs: "Needs work" };

/* ---------- State ---------- */
const progress = load(PROGRESS_KEY, {}); // quick checks: progress[exam][categoryId] = { answers, takenAt }
AP.progress = progress;
const notebook = {};
(function initNotebook() {
  const saved = load(NOTEBOOK_KEY, {});
  EXAMS.forEach((exam) => {
    const s = saved[exam] || {};
    notebook[exam] = {
      materials: Array.isArray(s.materials) ? s.materials : [],
      notes: Array.isArray(s.notes) ? s.notes : [],
      activeNote: typeof s.activeNote === "string" ? s.activeNote : null,
    };
  });
})();

const ui = { exam: "SAT", mode: "prep", view: "categories", catId: null, qIndex: 0, draft: {}, attemptId: null };

// Full-length tests run on their own page so they can lock into full screen.
const openTestPage = (exam) => {
  location.href = `test.html?exam=${encodeURIComponent(exam)}`;
};

const saveProgress = () => store(PROGRESS_KEY, progress);
const saveNotebook = () => {
  store(NOTEBOOK_KEY, notebook);
  updateNoteStatus();
};

const examData = () => (window.PREP || {})[ui.exam];
const currentCat = () => examData().categories.find((c) => c.id === ui.catId);

function savedResult(exam, cat) {
  const r = progress[exam] && progress[exam][cat.id];
  if (!r || !r.answers) return null;
  return cat.questions.every((q) => Number.isInteger(r.answers[q.id])) ? r : null;
}

function analyze(cat, answers) {
  const skills = cat.skills.map((skill) => {
    const qs = cat.questions.filter((q) => q.skill === skill.id);
    const missed = qs.filter((q) => answers[q.id] !== q.answer);
    const correct = qs.length - missed.length;
    const ratio = qs.length ? correct / qs.length : 0;
    const level = ratio === 1 ? "strong" : ratio >= 0.5 ? "developing" : "needs";
    return { skill, qs, missed, correct, total: qs.length, ratio, level };
  });
  const correct = skills.reduce((sum, s) => sum + s.correct, 0);
  const total = skills.reduce((sum, s) => sum + s.total, 0);
  const ordered = [...skills].sort((a, b) => a.ratio - b.ratio);
  return { skills, ordered, correct, total };
}

/* ---------- Shared UI pieces ---------- */
function revealHub() {
  const top = $(".hub-card").getBoundingClientRect().top;
  if (top < 0 || top > window.innerHeight * 0.6) {
    window.scrollTo({ top: window.scrollY + top - 90, behavior: "smooth" });
  }
}

function go(view, extra = {}) {
  Object.assign(ui, { view }, extra);
  renderPrep();
  revealHub();
}

function backButton(label, onClick) {
  const b = el("button", "back-button", `← ${label}`);
  b.type = "button";
  b.addEventListener("click", onClick);
  return b;
}

/* ---------- Prep: router ---------- */
function renderPrep() {
  const root = $("#prep-root");
  root.replaceChildren();
  if (ui.exam === "AP") {
    if (ui.view === "test") return root.append(renderTest());
    if (ui.view === "results") return root.append(renderResults());
    if (ui.view === "course") return root.append(renderCourse());
    return root.append(renderAP());
  }
  if (ui.view === "test") return root.append(renderTest());
  if (ui.view === "results") return root.append(renderResults());
  if (ui.view === "examResults") return root.append(renderFullResults());
  root.append(renderCategories());
}

// "All subjects" for SAT/ACT, back to the course page for AP.
function leaveQuickCheck(cat) {
  if (ui.exam === "AP") go("course", { catId: cat.id });
  else go("categories", { catId: null });
}

/* ---------- AP: course browser and course pages ---------- */
const AP_BASE = "https://apstudents.collegeboard.org";
const apCourseUrl = (cat) => safeUrl(cat.info && cat.info.official ? cat.info.official : null);

function renderAP() {
  const data = examData();
  const view = el("div", "categories-view ap-hub");
  const head = el("div", "view-head");
  const count = data.categories.length;
  head.append(
    el("h3", "", "AP courses"),
    el("p", "", `Choose a course to see its units, official College Board links, study docs for each skill area, and a quick check. ${count} course${count === 1 ? "" : "s"} listed.`),
  );
  view.append(head);

  const search = document.createElement("input");
  search.type = "search";
  search.className = "course-search";
  search.placeholder = "Search AP courses…";
  search.setAttribute("aria-label", "Search AP courses");
  view.append(search);

  const host = el("div", "course-groups");
  view.append(host);
  const draw = () => {
    host.replaceChildren();
    const term = search.value.trim().toLowerCase();
    let shown = 0;
    data.sections.forEach((section) => {
      const cats = data.categories.filter((c) => c.section === section && (!term || c.name.toLowerCase().includes(term) || (c.blurb || "").toLowerCase().includes(term)));
      if (!cats.length) return;
      shown += cats.length;
      host.append(el("h5", "group-title", section));
      const grid = el("div", "course-grid");
      cats.forEach((cat) => grid.append(courseCard(cat)));
      host.append(grid);
    });
    if (!shown) host.append(el("p", "empty-state", "No AP courses match your search."));
  };
  search.addEventListener("input", draw);
  draw();

  const foot = el("div", "ap-actions");
  const open = el("button", "ws-button ws-button-ghost", "Open my notebook");
  open.type = "button";
  open.addEventListener("click", () => setMode("notebook"));
  const link = el("a", "ws-button ws-button-ghost", "College Board AP Students ↗");
  link.href = `${AP_BASE}/`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  foot.append(open, link);
  view.append(foot);
  return view;
}

function courseCard(cat) {
  const result = savedResult("AP", cat);
  const card = el("button", "course-card");
  card.type = "button";
  card.append(el("strong", "", cat.name), el("span", "course-blurb", cat.blurb || ""));
  const meta = el("div", "course-meta");
  if (result) {
    const a = analyze(cat, result.answers);
    meta.append(el("span", `status-pill level-${a.ordered[0].level}`, `${a.correct}/${a.total} on quick check`));
  } else {
    meta.append(el("span", "status-pill", "Not started"));
  }
  meta.append(el("span", "course-go", "Open →"));
  card.append(meta);
  card.addEventListener("click", () => go("course", { catId: cat.id }));
  return card;
}

function renderCourse() {
  const cat = examData().categories.find((c) => c.id === ui.catId);
  if (!cat) {
    ui.view = "categories";
    return renderAP();
  }
  const info = cat.info || {};
  const view = el("div", "course-view");
  view.append(backButton("All AP courses", () => go("categories", { catId: null })));

  const head = el("div", "view-head");
  head.append(el("span", "eyebrow-small", `AP · ${cat.section}`), el("h3", "", cat.name), el("p", "", info.about || cat.blurb || ""));
  view.append(head);

  const links = el("div", "course-links");
  const official = externalLink("Official College Board course page ↗", info.official, "ws-button");
  if (official) links.append(official);
  (info.links || []).forEach(([label, href]) => {
    const a = externalLink(`${label} ↗`, href, "ws-button ws-button-ghost");
    if (a) links.append(a);
  });
  view.append(links);

  if ((info.units || []).length) {
    view.append(el("h4", "section-title", "Main topics"));
    view.append(el("p", "results-sub", "A summary of what the course covers. The official course page has the current unit list and details."));
    const ol = el("ol", "unit-list");
    info.units.forEach((u) => ol.append(el("li", "", u)));
    view.append(ol);
  }

  view.append(el("h4", "section-title", "How the exam works"));
  view.append(el("p", "course-format", info.format || "See the official College Board course page for the current exam format, question counts, timing, and scoring. College Board updates these details, so check there before test day."));

  view.append(el("h4", "section-title", "Skill areas and study docs"));
  view.append(el("p", "results-sub", "Open a skill area for a lesson, tips, practice problems, video links, and a doc you can edit."));
  const grid = el("div", "skill-doc-grid");
  cat.skills.forEach((skill) => {
    const row = el("button", "skill-doc-card");
    row.type = "button";
    const status = AP.skillStatus("AP", cat.id, skill.id);
    row.append(el("strong", "", skill.name));
    row.append(el("span", "", status ? `${status.correct} of ${status.total} correct on your quick check` : "Open study doc"));
    if (status) row.classList.add(`level-${status.level}`);
    row.addEventListener("click", () => AP.openDoc("AP", cat.id, skill.id));
    grid.append(row);
  });
  view.append(grid);

  if ((info.tips || []).length) {
    view.append(el("h4", "section-title", "Study tips"));
    const ul = el("ul", "course-tips");
    info.tips.forEach((t) => ul.append(el("li", "", t)));
    view.append(ul);
  }

  view.append(el("h4", "section-title", "Quick check"));
  if (cat.questions.length) {
    const box = el("div", "fulltest-card");
    const result = savedResult("AP", cat);
    const copy = el("div", "fulltest-copy");
    copy.append(el("h4", "", `${cat.name} quick check`), el("p", "", `${cat.questions.length} original practice question${cat.questions.length === 1 ? "" : "s"}, one or more per skill area. A starter diagnostic, not a full practice exam.`));
    box.append(copy);
    const actions = el("div", "fulltest-actions");
    const b = el("button", "ws-button", result ? "View results" : "Take quick check");
    b.type = "button";
    b.addEventListener("click", () => (result ? go("results", { catId: cat.id }) : startTest(cat.id)));
    actions.append(b);
    box.append(actions);
    view.append(box);
  } else {
    view.append(el("p", "empty-state", "A quick check for this course isn't available yet. The study docs above are ready."));
  }
  return view;
}

/* ---------- Subjects, full test, library ---------- */
function renderCategories() {
  const data = examData();
  const exam = ui.exam;
  const view = el("div", "categories-view");
  const head = el("div", "view-head");
  head.append(el("h3", "", `${data.name} prep`), el("p", "", "Take a full-length practice test to find your gaps, or check one subject at a time. Every result links to an editable study doc."));
  view.append(head);

  view.append(fullTestCard(exam));

  // Priorities across every completed quick check
  const priorities = [];
  let takenCount = 0;
  data.categories.forEach((cat) => {
    const r = savedResult(exam, cat);
    if (!r) return;
    takenCount += 1;
    analyze(cat, r.answers).skills.forEach((s) => {
      if (s.level !== "strong") priorities.push({ cat, ...s });
    });
  });
  if (takenCount) {
    priorities.sort((a, b) => a.ratio - b.ratio);
    const panel = el("div", "priority-panel");
    panel.append(el("h4", "", priorities.length ? "Your top priorities from quick checks" : "No gaps found in your quick checks"));
    if (priorities.length) {
      const chips = el("div", "priority-chips");
      priorities.slice(0, 4).forEach((p) => {
        const chip = el("button", `priority-chip level-${p.level}`);
        chip.type = "button";
        chip.append(el("strong", "", p.skill.name), el("span", "", `${p.cat.name} · ${p.correct}/${p.total} correct`));
        chip.addEventListener("click", () => AP.openDoc(exam, p.cat.id, p.skill.id));
        chips.append(chip);
      });
      panel.append(chips);
    } else {
      panel.append(el("p", "", "You answered everything correctly on the subjects you've taken. Try the full practice test next."));
    }
    view.append(panel);
  }

  view.append(el("h4", "section-title", "Quick subject checks"));
  view.append(el("p", "results-sub", "A short placement quiz for one subject (about 10 minutes)."));
  const singleGrid = data.categories.length === data.sections.length;
  const groups = singleGrid ? [data.categories] : data.sections.map((s) => data.categories.filter((c) => c.section === s));
  groups.forEach((cats, i) => {
    if (!cats.length) return;
    if (!singleGrid) view.append(el("h5", "group-title", data.sections[i]));
    const grid = el("div", "category-grid");
    cats.forEach((cat) => grid.append(categoryCard(cat)));
    view.append(grid);
  });

  view.append(el("h4", "section-title", "Study library"));
  view.append(el("p", "results-sub", "Open any skill's study doc: lesson, worked examples, offline cheat sheet, practice problems, and video links. You can edit every doc."));
  const lib = el("div", "library-grid");
  data.categories.forEach((cat) => {
    const card = el("div", "library-card");
    card.append(el("h5", "", cat.name));
    const row = el("div", "library-skills");
    cat.skills.forEach((s) => {
      const b = el("button", "doc-chip", s.name);
      b.type = "button";
      b.addEventListener("click", () => AP.openDoc(exam, cat.id, s.id));
      row.append(b);
    });
    card.append(row);
    lib.append(card);
  });
  view.append(lib);

  if (takenCount) {
    const reset = el("button", "ws-link", `Reset my ${data.name} quick-check results`);
    reset.type = "button";
    reset.addEventListener("click", () => {
      if (!confirm(`Reset all of your ${data.name} quick-check results? This can't be undone.`)) return;
      delete progress[exam];
      saveProgress();
      renderPrep();
    });
    view.append(reset);
  }
  return view;
}

function fullTestCard(exam) {
  const plan = AP.blueprints[exam];
  const card = el("div", "fulltest-card");
  const copy = el("div", "fulltest-copy");
  copy.append(el("span", "eyebrow-small", "Full-length practice test"), el("h4", "", plan.title), el("p", "", `${plan.summary}. Opens on its own page in locked full screen. Scored when you finish, with a skill report and study plan.`));
  card.append(copy);

  const actions = el("div", "fulltest-actions");
  const current = AP.examStore.current[exam];
  const attempts = AP.attemptsFor(exam);
  const start = el("button", "ws-button", current ? "Resume or restart test" : "Start full test");
  start.type = "button";
  start.addEventListener("click", () => openTestPage(exam));
  actions.append(start);
  card.append(actions);

  if (attempts.length) {
    const past = el("div", "past-tests");
    past.append(el("strong", "", "Your past tests"));
    attempts.forEach((att) => {
      const row = el("button", "past-row");
      row.type = "button";
      const h = att.result.headline;
      row.append(el("span", "", new Date(att.finishedAt).toLocaleDateString()), el("strong", "", `${h.value} (${h.scale})`), el("span", "", `${att.result.totalCorrect}/${att.result.totalQuestions} correct`), el("span", "past-go", "View results →"));
      row.addEventListener("click", () => go("examResults", { attemptId: att.id }));
      past.append(row);
    });
    card.append(past);
  }
  return card;
}

function renderFullResults() {
  const att = AP.attemptsFor(ui.exam).find((a) => a.id === ui.attemptId);
  if (!att) {
    ui.view = "categories";
    return renderCategories();
  }
  return AP.renderExamResults(att, { onBack: () => go("categories"), onRetake: () => openTestPage(ui.exam) });
}

function categoryCard(cat) {
  const result = savedResult(ui.exam, cat);
  const card = el("article", "category-card");
  card.append(el("h4", "", cat.name), el("p", "category-blurb", cat.blurb));

  const skills = el("div", "skill-tags");
  cat.skills.forEach((s) => skills.append(el("span", "", s.name)));
  card.append(skills);

  const meta = el("div", "category-meta");
  meta.append(el("span", "", `${cat.questions.length} questions · ~${Math.ceil(cat.questions.length * 1.5)} min`));

  const button = el("button", "ws-button");
  button.type = "button";
  if (result) {
    const a = analyze(cat, result.answers);
    const weakest = a.ordered[0];
    meta.append(el("span", `status-pill level-${weakest.level}`, `${a.correct}/${a.total} correct`));
    button.textContent = "View results";
    button.addEventListener("click", () => go("results", { catId: cat.id }));
  } else {
    meta.append(el("span", "status-pill", "Not taken yet"));
    button.textContent = "Take quick check";
    button.addEventListener("click", () => startTest(cat.id));
  }
  card.append(meta, button);
  return card;
}

function startTest(catId) {
  go("test", { catId, qIndex: 0, draft: {} });
}

/* ---------- Quick check: test ---------- */
function renderTest() {
  const cat = currentCat();
  const qs = cat.questions;
  const view = el("div", "test-view");

  view.append(backButton(ui.exam === "AP" ? `Back to ${cat.name}` : "All subjects", () => leaveQuickCheck(cat)));
  const title = el("div", "view-head");
  title.append(el("span", "eyebrow-small", `${examData().name} · ${cat.section}`), el("h3", "", `${cat.name} quick check`));
  view.append(title);

  const q = qs[ui.qIndex];
  const progressRow = el("div", "test-progress");
  const label = el("span", "", `Question ${ui.qIndex + 1} of ${qs.length}`);
  const bar = el("div", "progress-bar");
  const fill = el("span");
  fill.style.width = `${((ui.qIndex + 1) / qs.length) * 100}%`;
  bar.append(fill);
  progressRow.append(label, bar);
  view.append(progressRow);

  const dots = el("div", "question-dots", "");
  const dotButtons = qs.map((item, i) => {
    const d = el("button", "dot", String(i + 1));
    d.type = "button";
    d.setAttribute("aria-label", `Go to question ${i + 1}`);
    if (i === ui.qIndex) d.setAttribute("aria-current", "step");
    d.addEventListener("click", () => go("test", { qIndex: i }));
    dots.append(d);
    return d;
  });
  view.append(dots);

  const card = el("div", "question-card");
  card.tabIndex = -1;
  if (q.passage) card.append(passageEl(q.passage));
  card.append(el("p", "question-text", q.q));

  const choices = el("div", "choices");
  choices.setAttribute("role", "radiogroup");
  choices.setAttribute("aria-label", `Answers for question ${ui.qIndex + 1}`);
  const labels = q.choices.map((text, i) => {
    const row = el("label", "choice");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = String(i);
    input.checked = ui.draft[q.id] === i;
    input.addEventListener("change", () => {
      ui.draft[q.id] = i;
      sync();
    });
    row.append(input, el("span", "choice-letter", LETTERS[i]), el("span", "choice-text", text));
    choices.append(row);
    return { row, input };
  });
  card.append(choices);
  view.append(card);

  const nav = el("div", "test-nav");
  const prev = el("button", "ws-button ws-button-ghost", "Previous");
  prev.type = "button";
  prev.disabled = ui.qIndex === 0;
  prev.addEventListener("click", () => go("test", { qIndex: ui.qIndex - 1 }));
  const hint = el("span", "test-hint");
  hint.setAttribute("aria-live", "polite");
  const isLast = ui.qIndex === qs.length - 1;
  const next = el("button", "ws-button", isLast ? "Finish & see results" : "Next");
  next.type = "button";
  next.addEventListener("click", () => {
    if (!isLast) return go("test", { qIndex: ui.qIndex + 1 });
    progress[ui.exam] = progress[ui.exam] || {};
    progress[ui.exam][cat.id] = { answers: { ...ui.draft }, takenAt: Date.now() };
    saveProgress();
    go("results");
  });
  nav.append(prev, hint, next);
  view.append(nav);

  function sync() {
    labels.forEach(({ row, input }) => row.classList.toggle("selected", input.checked));
    dotButtons.forEach((d, i) => d.classList.toggle("answered", Number.isInteger(ui.draft[qs[i].id])));
    const left = qs.filter((item) => !Number.isInteger(ui.draft[item.id])).length;
    if (isLast) next.disabled = left > 0;
    hint.textContent = left ? `${left} unanswered` : "All questions answered";
  }
  sync();
  return view;
}

/* ---------- Quick check: results ---------- */
function renderResults() {
  const cat = currentCat();
  const result = savedResult(ui.exam, cat);
  if (!result) {
    ui.view = "categories";
    return renderCategories();
  }
  const analysis = analyze(cat, result.answers);
  const view = el("div", "results-view");

  const top = el("div", "results-top");
  top.append(backButton(ui.exam === "AP" ? `Back to ${cat.name}` : "All subjects", () => leaveQuickCheck(cat)));
  const retake = el("button", "ws-button ws-button-ghost", "Retake quick check");
  retake.type = "button";
  retake.addEventListener("click", () => startTest(cat.id));
  top.append(retake);
  view.append(top);

  const pct = analysis.correct / analysis.total;
  const summary = el("div", "score-card");
  const score = el("div", "score-big");
  score.append(el("strong", "", `${analysis.correct}/${analysis.total}`), el("span", "", "correct"));
  const msg = el("div", "score-copy");
  msg.append(
    el("span", "eyebrow-small", `${examData().name} · ${cat.name}`),
    el("h3", "", pct >= 0.84 ? "Strong start — you're in good shape here." : pct >= 0.5 ? "Solid base. A few skills to sharpen." : "Great place to focus. Your plan is below."),
  );
  const weak = analysis.ordered.filter((s) => s.level !== "strong");
  msg.append(
    el("p", "", weak.length
      ? `Start with ${weak.map((s) => s.skill.name).slice(0, 2).join(" and ")}. Open a skill below to see its study doc.`
      : "You got every question right. Open any skill below for extra practice to stay sharp."),
  );
  summary.append(score, msg);
  view.append(summary);

  view.append(el("h4", "section-title", "Your skills"));
  view.append(el("p", "results-sub", "Click a skill to open its study doc: your mistakes explained, practice problems, lessons, and video links."));
  const list = el("div", "skill-report");
  analysis.ordered.forEach((s) => list.append(AP.skillRow(ui.exam, { cat: cat.id, skill: s.skill.id, ratio: s.ratio, correct: s.correct, total: s.total, level: s.level })));
  view.append(list);

  const missedAll = analysis.skills.flatMap((s) => s.missed);
  if (missedAll.length) {
    const details = el("details", "review-section");
    details.append(el("summary", "", `Review the ${missedAll.length} question${missedAll.length === 1 ? "" : "s"} you missed`));
    missedAll.forEach((q) => {
      const box = el("div", "review-item");
      if (q.passage) box.append(passageEl(q.passage));
      const given = result.answers[q.id];
      box.append(
        el("p", "question-text", q.q),
        el("p", "review-line wrong", `Your answer: ${LETTERS[given]}. ${q.choices[given]}`),
        el("p", "review-line right", `Correct answer: ${LETTERS[q.answer]}. ${q.choices[q.answer]}`),
        el("p", "review-why", q.why),
      );
      details.append(box);
    });
    view.append(details);
  }

  const more = el("div", "results-more");
  if (ui.exam === "AP") {
    const back = el("button", "ws-button", `Back to ${cat.name}`);
    back.type = "button";
    back.addEventListener("click", () => leaveQuickCheck(cat));
    more.append(back);
    view.append(more);
    return view;
  }
  const remaining = examData().categories.find((c) => c.id !== cat.id && !savedResult(ui.exam, c));
  if (remaining) {
    const b = el("button", "ws-button", `Next: ${remaining.name} quick check`);
    b.type = "button";
    b.addEventListener("click", () => startTest(remaining.id));
    more.append(b);
  }
  const full = el("button", "ws-button ws-button-ghost", "Take the full practice test");
  full.type = "button";
  full.addEventListener("click", () => openTestPage(ui.exam));
  more.append(full);
  view.append(more);
  return view;
}

/* ---------- Notebook: materials ---------- */
function renderMaterials() {
  const list = $("#material-list");
  list.replaceChildren();
  const { materials } = notebook[ui.exam];

  if (!materials.length) {
    list.append(el("p", "empty-state", "Nothing saved yet. Add a book, video, worksheet, or link above."));
    return;
  }

  materials.forEach((item) => {
    const card = el("article", "material-card");
    const topRow = el("div", "material-top");
    topRow.append(el("span", "material-type", item.type));
    const remove = el("button", "item-remove", "×");
    remove.type = "button";
    remove.setAttribute("aria-label", `Remove material: ${item.title}`);
    remove.addEventListener("click", () => {
      notebook[ui.exam].materials = materials.filter((m) => m.id !== item.id);
      saveNotebook();
      renderMaterials();
    });
    topRow.append(remove);

    const url = safeUrl(item.url);
    const title = url ? el("a", "material-title", `${item.title} ↗`) : el("span", "material-title", item.title);
    if (url) {
      title.href = url;
      title.target = "_blank";
      title.rel = "noopener noreferrer";
    }
    card.append(topRow, title);
    if (item.details) card.append(el("p", "material-details", item.details));
    list.append(card);
  });
}

$("#material-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const title = $("#material-title").value.trim();
  if (!title) return;
  const rawUrl = $("#material-url").value.trim();
  const url = safeUrl(rawUrl);
  const urlField = $("#material-url");
  if (rawUrl && !url) {
    urlField.setCustomValidity("Enter a full link starting with http:// or https://");
    urlField.reportValidity();
    return;
  }
  urlField.setCustomValidity("");
  notebook[ui.exam].materials.unshift({
    id: newId(),
    title,
    type: $("#material-type").value,
    url: url || "",
    details: $("#material-details").value.trim(),
  });
  event.target.reset();
  saveNotebook();
  renderMaterials();
});
$("#material-url").addEventListener("input", (event) => event.target.setCustomValidity(""));

/* ---------- Notebook: notes ---------- */
let noteTimer;
let editingNoteId = null; // the note currently loaded in the editor fields

function activeNote() {
  const { notes, activeNote: id } = notebook[ui.exam];
  return notes.find((n) => n.id === id) || null;
}

function renderNotes() {
  const data = notebook[ui.exam];
  if (!activeNote() && data.notes.length) data.activeNote = data.notes[0].id;

  const chips = $("#note-chips");
  chips.replaceChildren();
  data.notes.forEach((note) => {
    const chip = el("button", "note-chip" + (note.id === data.activeNote ? " active" : ""), note.title || "Untitled");
    chip.type = "button";
    chip.setAttribute("role", "listitem");
    chip.addEventListener("click", () => {
      flushNote();
      data.activeNote = note.id;
      saveNotebook();
      renderNotes();
    });
    chips.append(chip);
  });

  const note = activeNote();
  $("#note-editor").hidden = !note;
  $("#notes-empty").hidden = Boolean(note);
  if (note) {
    $("#note-title").value = note.title;
    $("#note-body").value = note.body;
  }
  editingNoteId = note ? note.id : null;
  updateNoteStatus();
}

function updateNoteStatus() {
  const status = $("#note-status");
  if (!status) return;
  const note = activeNote();
  const words = note && note.body.trim() ? note.body.trim().split(/\s+/).length : 0;
  status.textContent = AP.storageFailed
    ? "Couldn't save — browser storage is unavailable"
    : `Saved · ${words} word${words === 1 ? "" : "s"}`;
}

function flushNote() {
  clearTimeout(noteTimer);
  const note = activeNote();
  if (!note || note.id !== editingNoteId) return;
  note.title = $("#note-title").value;
  note.body = $("#note-body").value;
  saveNotebook();
}

function onNoteInput() {
  const note = activeNote();
  if (!note) return;
  note.title = $("#note-title").value;
  note.body = $("#note-body").value;
  $("#note-status").textContent = "Saving…";
  clearTimeout(noteTimer);
  noteTimer = setTimeout(() => {
    saveNotebook();
    const chip = $("#note-chips .active");
    if (chip) chip.textContent = note.title.trim() || "Untitled";
  }, 400);
}
$("#note-title").addEventListener("input", onNoteInput);
$("#note-body").addEventListener("input", onNoteInput);
window.addEventListener("beforeunload", flushNote);

$("#new-note").addEventListener("click", () => {
  flushNote();
  const note = { id: newId(), title: "", body: "" };
  const data = notebook[ui.exam];
  data.notes.push(note);
  data.activeNote = note.id;
  saveNotebook();
  renderNotes();
  $("#note-title").focus();
});

$("#delete-note").addEventListener("click", () => {
  const note = activeNote();
  if (!note) return;
  if (!confirm(`Delete "${note.title.trim() || "this note"}"? This can't be undone.`)) return;
  clearTimeout(noteTimer);
  const data = notebook[ui.exam];
  data.notes = data.notes.filter((n) => n.id !== note.id);
  data.activeNote = data.notes.length ? data.notes[0].id : null;
  saveNotebook();
  renderNotes();
});

/* ---------- Notebook tabs, modes, exam switching ---------- */
const workspaceTabs = document.querySelectorAll(".workspace-tab");

function showPanel(name) {
  workspaceTabs.forEach((tab) => {
    const active = tab.dataset.panel === name;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    $(`#panel-${tab.dataset.panel}`).hidden = !active;
  });
}
workspaceTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => showPanel(tab.dataset.panel));
  tab.addEventListener("keydown", (event) => {
    const offset = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
    if (!offset) return;
    const next = workspaceTabs[(index + offset + workspaceTabs.length) % workspaceTabs.length];
    next.focus();
    showPanel(next.dataset.panel);
  });
});

function setMode(mode) {
  if (mode !== "notebook") flushNote();
  ui.mode = mode;
  document.querySelectorAll(".hub-mode").forEach((b) => {
    const active = b.dataset.mode === mode;
    b.classList.toggle("active", active);
    b.setAttribute("aria-pressed", String(active));
  });
  $("#prep-root").hidden = mode !== "prep";
  $("#notebook-root").hidden = mode !== "notebook";
}
document.querySelectorAll(".hub-mode").forEach((b) => b.addEventListener("click", () => setMode(b.dataset.mode)));

const examTabs = document.querySelectorAll(".exam-tab");

function selectExam(exam) {
  flushNote();
  ui.exam = exam;
  ui.view = "categories";
  ui.catId = null;
  examTabs.forEach((tab) => {
    const active = tab.dataset.exam === exam;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-pressed", String(active));
  });
  renderPrep();
  renderMaterials();
  renderNotes();
}

examTabs.forEach((tab) => tab.addEventListener("click", () => selectExam(tab.dataset.exam)));
document.querySelectorAll("[data-select-exam]").forEach((link) => {
  link.addEventListener("click", () => {
    setMode("prep");
    selectExam(link.dataset.selectExam);
  });
});

/* ---------- Navigation ---------- */
const menuToggle = $(".menu-toggle");
const mainNav = $(".main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

$("#year").textContent = new Date().getFullYear();
showPanel("materials");
setMode("prep");
selectExam("SAT");

// Coming back from the test page: #exam-results/SAT/<attempt id> opens the results.
function routeExamResults() {
  const m = location.hash.match(/^#exam-results\/([^/]+)\/([^/]+)$/);
  if (!m) return false;
  const [, exam, id] = m.map(decodeURIComponent);
  history.replaceState(null, "", "#plan");
  if (!EXAMS.includes(exam) || !AP.attemptsFor(exam).some((a) => a.id === id)) return false;
  setMode("prep");
  selectExam(exam);
  go("examResults", { attemptId: id });
  return true;
}
window.addEventListener("hashchange", routeExamResults);
if (!routeExamResults()) AP.routeDocHash();
