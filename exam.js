// Full-length practice tests: intro, timed runner, results, and curriculum display.
(() => {
  const bp = (exam) => AP.blueprints[exam];
  const run = { att: null, view: "question", timer: null, saveTimer: null, root: null, hideTimer: false, notice: "", breakLeft: 0, breakTimer: null };

  const fmtClock = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  const moduleLabel = (att, s, m) => {
    const sec = att.sections[s];
    return `${sec.name}${sec.modules.length > 1 ? ` · Module ${m + 1} of ${sec.modules.length}` : ""}`;
  };
  const curModule = () => run.att.sections[run.att.cursor.s].modules[run.att.cursor.m];
  const curQuestion = () => curModule().questions[run.att.cursor.i];

  function persist(now = false) {
    clearTimeout(run.saveTimer);
    const go = () => AP.saveExams();
    if (now) go();
    else run.saveTimer = setTimeout(go, 600);
  }

  /* ---------- Intro (rendered inside the hub) ---------- */
  AP.renderExamIntro = (exam, { onBack, onStart }) => {
    const plan = bp(exam);
    const view = el("div", "exam-intro");
    const back = el("button", "back-button", "← Back to AP Clutch");
    back.type = "button";
    back.addEventListener("click", onBack);
    view.append(back);

    const head = el("div", "view-head");
    head.append(el("span", "eyebrow-small", "Full-length practice test"), el("h3", "", plan.title), el("p", "", `${plan.summary}. When you finish you'll get an estimated score, a skill-by-skill report, and a personalized study plan.`));
    view.append(head);

    const current = AP.examStore.current[exam];
    if (current) {
      const answered = current.sections.reduce((a, s) => a + s.modules.reduce((b, m) => b + Object.keys(m.answers).length, 0), 0);
      const total = current.sections.reduce((a, s) => a + s.modules.reduce((b, m) => b + m.questions.length, 0), 0);
      const resume = el("div", "resume-card");
      resume.append(el("strong", "", "You have a test in progress"), el("p", "", `${answered} of ${total} questions answered. Your time and answers were saved.`));
      const row = el("div", "results-more");
      const r = el("button", "ws-button", "Resume test");
      r.type = "button";
      r.addEventListener("click", () => AP.resumeExam(exam));
      const d = el("button", "ws-button ws-button-ghost", "Discard and start over");
      d.type = "button";
      d.addEventListener("click", () => {
        if (!confirm("Discard your test in progress? This can't be undone.")) return;
        AP.examStore.current[exam] = null;
        AP.saveExams();
        onBack(true);
      });
      row.append(r, d);
      resume.append(row);
      view.append(resume);
    }

    const table = el("div", "structure");
    plan.sections.forEach((sec) => {
      const questions = sec.modules.reduce((a, m) => a + m.parts.reduce((b, p) => b + p.n, 0), 0);
      const minutes = sec.modules.reduce((a, m) => a + m.minutes, 0);
      const row = el("div", "structure-row");
      row.append(el("strong", "", sec.name + (sec.optional ? " (optional)" : "")), el("span", "", `${questions} questions`), el("span", "", `${minutes} minutes${sec.modules.length > 1 ? `, in ${sec.modules.length} timed modules` : ""}`));
      table.append(row);
    });
    view.append(table);

    const opts = el("div", "exam-options");
    const timed = el("label", "option-row");
    const timedInput = document.createElement("input");
    timedInput.type = "checkbox";
    timedInput.checked = true;
    timed.append(timedInput, el("span", "", "Timed (recommended). Turn off for untimed practice."));
    opts.append(timed);
    let scienceInput = null;
    if (exam === "ACT") {
      const sci = el("label", "option-row");
      scienceInput = document.createElement("input");
      scienceInput.type = "checkbox";
      scienceInput.checked = true;
      sci.append(scienceInput, el("span", "", "Include the optional Science section (+40 questions, +40 minutes)."));
      opts.append(sci);
    }
    view.append(opts);

    const notes = el("ul", "exam-notes");
    [
      exam === "SAT"
        ? "The real digital SAT adapts the second module of each section to how you did on the first. This practice test does not adapt, and its score is an estimate."
        : "The ACT is not adaptive. The composite is the average of English, Math, and Reading; Science is optional and reported separately.",
      "Questions are original practice questions written for AP Clutch, not official College Board or ACT items. Treat scores as a guide, not a prediction.",
      "You can mark questions for review, move around inside a module, and exit to save your place. Once you submit a module you can't go back to it.",
      "Find a quiet spot and keep scratch paper nearby. A calculator is allowed on SAT Math and ACT Math.",
      "When you press Start, the test opens in locked full screen. If you leave full screen your test is hidden until you return, the clock keeps running, and the exit is recorded. Switching tabs is recorded too. Right-click and copy are turned off.",
    ].forEach((t) => notes.append(el("li", "", t)));
    view.append(notes);

    const start = el("button", "ws-button start-exam", current ? "Start a new test" : "Start test");
    start.type = "button";
    start.addEventListener("click", () => {
      if (current && !confirm("Starting a new test will replace the one in progress. Continue?")) return;
      onStart({ timed: timedInput.checked, includeScience: scienceInput ? scienceInput.checked : false });
    });
    view.append(start);
    return view;
  };

  /* ---------- Screen lock: full screen, leave warnings, integrity log ---------- */
  const isRunning = () => Boolean(run.root && !run.root.hidden && run.att);
  const canFullscreen = () => Boolean(document.documentElement.requestFullscreen);

  // Must be called straight from a click so the browser allows full screen.
  AP.requestLock = () => {
    run.lockOn = canFullscreen();
    run.leaving = false;
    run.fsGrace = Date.now() + 1500;
    if (run.lockOn) document.documentElement.requestFullscreen().catch(() => {});
  };

  function releaseLock() {
    run.leaving = true;
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(() => {});
  }

  function hideFsLock() {
    const l = $(".fs-lock", run.root);
    if (l) l.remove();
  }

  function showFsLock() {
    if (!run.root || $(".fs-lock", run.root)) return;
    const wrap = el("div", "fs-lock");
    wrap.setAttribute("role", "alertdialog");
    wrap.setAttribute("aria-label", "Full screen required");
    const card = el("div", "exam-card-center");
    card.append(
      el("h2", "", "Full screen required"),
      el("p", "", "Your test is hidden until you return to full screen. The clock keeps running, and leaving full screen is recorded."),
    );
    const msg = el("p", "exam-notice", "");
    msg.hidden = true;
    const back = el("button", "ws-button", "Return to full screen");
    back.type = "button";
    back.addEventListener("click", () => {
      document.documentElement.requestFullscreen().then(hideFsLock, () => {
        msg.textContent = "Your browser blocked full screen. Try again, or use Save & exit to leave the test.";
        msg.hidden = false;
      });
    });
    const leave = el("button", "ws-button ws-button-ghost", "Save & exit");
    leave.type = "button";
    leave.addEventListener("click", () => exitRunner());
    const row = el("div", "results-more");
    row.append(back, leave);
    card.append(msg, row);
    wrap.append(card);
    run.root.append(wrap);
    back.focus();
  }

  function checkLock() {
    if (!isRunning() || !run.lockOn || run.leaving) return;
    if (document.fullscreenElement) hideFsLock();
    else if (Date.now() >= run.fsGrace) showFsLock();
  }

  function toast(text) {
    const t = el("div", "exam-toast", text);
    t.setAttribute("role", "status");
    document.body.append(t);
    setTimeout(() => t.remove(), 6000);
  }

  // confirm() can drop full screen in some browsers, so don't count it as leaving.
  function askInTest(message) {
    run.leaving = true;
    const ok = confirm(message);
    run.leaving = false;
    setTimeout(checkLock, 300);
    return ok;
  }

  let wired = false;
  function wireLock() {
    if (wired) return;
    wired = true;
    document.addEventListener("fullscreenchange", () => {
      if (!isRunning() || !run.lockOn || run.leaving) return;
      if (document.fullscreenElement) return hideFsLock();
      run.att.integrity.fsExits += 1;
      persist();
      showFsLock();
    });
    document.addEventListener("visibilitychange", () => {
      if (!isRunning() || run.leaving) return;
      if (document.hidden && run.view === "question") {
        run.att.integrity.tabSwitches += 1;
        run.awayFlag = true;
        persist();
      } else if (!document.hidden && run.awayFlag) {
        run.awayFlag = false;
        toast("You left the test window. This was recorded.");
      }
    });
    window.addEventListener("beforeunload", (event) => {
      if (isRunning() && !run.leaving) {
        persist(true);
        event.preventDefault();
        event.returnValue = "";
      }
    });
    ["contextmenu", "copy", "cut", "dragstart"].forEach((name) => document.addEventListener(name, (event) => isRunning() && event.preventDefault()));
  }

  /* ---------- Runner lifecycle ---------- */
  AP.startExam = (exam, opts) => {
    AP.requestLock();
    const att = AP.assembleExam(exam, opts);
    AP.examStore.current[exam] = att;
    AP.saveExams();
    openRunner(att);
  };

  AP.resumeExam = (exam) => {
    const att = AP.examStore.current[exam];
    if (!att) return;
    AP.requestLock();
    openRunner(att);
  };

  function firstOpenModule(att) {
    for (let s = 0; s < att.sections.length; s++) {
      for (let m = 0; m < att.sections[s].modules.length; m++) {
        if (att.sections[s].modules[m].status !== "done") return { s, m };
      }
    }
    return null;
  }

  function openRunner(att) {
    run.att = att;
    att.integrity = att.integrity || { locked: false, fsExits: 0, tabSwitches: 0 };
    if (run.lockOn) att.integrity.locked = true;
    wireLock();
    if (!run.root) {
      run.root = el("div", "exam-overlay");
      run.root.setAttribute("role", "dialog");
      run.root.setAttribute("aria-modal", "true");
      run.root.setAttribute("aria-label", "Practice test");
      document.body.append(run.root);
    }
    run.root.hidden = false;
    document.body.classList.add("exam-open");
    const pos = firstOpenModule(att);
    if (!pos) return finishExam();
    att.cursor = { s: pos.s, m: pos.m, i: att.cursor.s === pos.s && att.cursor.m === pos.m ? att.cursor.i : 0 };
    run.view = curModule().status === "active" ? "question" : "start";
    run.notice = "";
    if (run.view === "question") startTimer();
    renderRunner();
    setTimeout(checkLock, 1600);
  }

  function stopTimers() {
    clearInterval(run.timer);
    clearInterval(run.breakTimer);
    run.timer = null;
    run.breakTimer = null;
  }

  function exitRunner() {
    stopTimers();
    persist(true);
    releaseLock();
    run.root.hidden = true;
    document.body.classList.remove("exam-open");
    if (AP.onRunnerClosed) AP.onRunnerClosed(run.att.exam);
  }

  function startTimer() {
    stopTimers();
    if (!run.att.timed) return;
    let ticks = 0;
    run.timer = setInterval(() => {
      const m = curModule();
      m.secondsLeft = Math.max(0, m.secondsLeft - 1);
      const clock = $(".exam-clock", run.root);
      if (clock) {
        clock.textContent = fmtClock(m.secondsLeft);
        clock.classList.toggle("low", m.secondsLeft <= 300);
      }
      if (++ticks % 10 === 0) persist(true);
      if (m.secondsLeft === 0) submitModule(true);
    }, 1000);
  }

  /* ---------- Module / section flow ---------- */
  function beginModule() {
    const m = curModule();
    m.status = "active";
    run.view = "question";
    run.notice = "";
    startTimer();
    persist(true);
    renderRunner();
  }

  function submitModule(timeUp = false) {
    const m = curModule();
    stopTimers();
    m.status = "done";
    const { s, m: mi } = run.att.cursor;
    const pos = firstOpenModule(run.att);
    persist(true);
    if (!pos) return finishExam();
    run.att.cursor = { s: pos.s, m: pos.m, i: 0 };
    run.notice = timeUp ? "Time was up, so your answers for that module were submitted automatically." : "";
    if (pos.s !== s) {
      run.view = "break";
      run.breakLeft = run.att.timed ? bp(run.att.exam).breakMinutes * 60 : 0;
      if (run.breakLeft) {
        run.breakTimer = setInterval(() => {
          run.breakLeft = Math.max(0, run.breakLeft - 1);
          const c = $(".break-clock", run.root);
          if (c) c.textContent = fmtClock(run.breakLeft);
          if (!run.breakLeft) clearInterval(run.breakTimer);
        }, 1000);
      }
    } else {
      run.view = "start";
    }
    renderRunner();
  }

  function finishExam() {
    stopTimers();
    const att = run.att;
    att.finishedAt = Date.now();
    att.result = AP.scoreAttempt(att);
    const list = AP.examStore.attempts[att.exam] || (AP.examStore.attempts[att.exam] = []);
    list.unshift(att);
    list.splice(4);
    AP.examStore.current[att.exam] = null;
    AP.saveExams();
    releaseLock();
    run.root.hidden = true;
    document.body.classList.remove("exam-open");
    if (AP.onExamFinished) AP.onExamFinished(att);
  }

  /* ---------- Runner rendering ---------- */
  function renderRunner() {
    run.root.replaceChildren();
    const att = run.att;
    const { s, m } = att.cursor;

    const top = el("header", "exam-top");
    top.append(el("strong", "exam-title", bp(att.exam).title));
    top.append(el("span", "exam-where", moduleLabel(att, s, m)));
    const right = el("div", "exam-top-right");
    if (att.timed && run.view === "question") {
      const clock = el("span", "exam-clock", run.hideTimer ? "" : fmtClock(curModule().secondsLeft));
      clock.classList.toggle("low", curModule().secondsLeft <= 300);
      clock.hidden = run.hideTimer;
      const toggle = el("button", "exam-link", run.hideTimer ? "Show time" : "Hide time");
      toggle.type = "button";
      toggle.addEventListener("click", () => {
        run.hideTimer = !run.hideTimer;
        renderRunner();
      });
      right.append(clock, toggle);
    }
    const exit = el("button", "exam-link", "Save & exit");
    exit.type = "button";
    exit.addEventListener("click", () => {
      if (askInTest("Exit the test? Your answers and remaining time are saved so you can resume later.")) exitRunner();
    });
    right.append(exit);
    top.append(right);
    run.root.append(top);

    if (run.view === "question") renderQuestion();
    else if (run.view === "review") renderReview();
    else if (run.view === "break") renderBreak();
    else renderStart();
    checkLock();
  }

  function interstitial(title, lines, buttonLabel, onClick, extra) {
    const wrap = el("main", "exam-center");
    const card = el("div", "exam-card-center");
    card.append(el("h2", "", title));
    if (run.notice) card.append(el("p", "exam-notice", run.notice));
    lines.forEach((t) => card.append(el("p", "", t)));
    if (extra) card.append(extra);
    const b = el("button", "ws-button", buttonLabel);
    b.type = "button";
    b.addEventListener("click", onClick);
    card.append(b);
    wrap.append(card);
    run.root.append(wrap);
    b.focus();
  }

  function renderStart() {
    const att = run.att;
    const { s, m } = att.cursor;
    const mod = curModule();
    const first = s === 0 && m === 0 && mod.status === "pending" && !Object.keys(mod.answers).length;
    interstitial(
      first ? "Ready to begin?" : moduleLabel(att, s, m),
      [`${mod.questions.length} questions${att.timed ? ` · ${mod.minutes} minutes` : " · untimed"}.`, att.timed ? "The timer starts when you press Start." : "Take as long as you need."],
      "Start",
      beginModule,
    );
  }

  function renderBreak() {
    const att = run.att;
    const extra = att.timed ? el("p", "break-clock", fmtClock(run.breakLeft)) : null;
    interstitial(
      "Section complete",
      [`Take a short break if you need one. Next up: ${moduleLabel(att, att.cursor.s, att.cursor.m)}.`],
      "Start next section",
      () => {
        clearInterval(run.breakTimer);
        run.view = "start";
        run.notice = "";
        renderRunner();
      },
      extra,
    );
  }

  function renderQuestion() {
    const att = run.att;
    const mod = curModule();
    const q = curQuestion();
    const i = att.cursor.i;
    const passage = AP.passageOf(att, q);

    const main = el("main", "exam-main" + (passage ? " has-passage" : ""));
    if (passage) {
      const left = el("div", "exam-passage");
      left.append(passageEl(passage));
      main.append(left);
    }
    const panel = el("div", "exam-qpanel");
    const qhead = el("div", "q-head");
    qhead.append(el("span", "q-num", String(i + 1)));
    const flag = el("button", "flag-btn" + (mod.flags[q.id] ? " on" : ""), mod.flags[q.id] ? "⚑ Marked for review" : "⚐ Mark for review");
    flag.type = "button";
    flag.setAttribute("aria-pressed", String(Boolean(mod.flags[q.id])));
    flag.addEventListener("click", () => {
      if (mod.flags[q.id]) delete mod.flags[q.id];
      else mod.flags[q.id] = true;
      persist();
      renderRunner();
    });
    qhead.append(flag);
    panel.append(qhead, el("p", "question-text", q.q));

    const choices = el("div", "choices");
    choices.setAttribute("role", "radiogroup");
    choices.setAttribute("aria-label", `Answers for question ${i + 1}`);
    const rows = q.choices.map((text, k) => {
      const row = el("label", "choice" + (mod.answers[q.id] === k ? " selected" : ""));
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "exam-answer";
      input.checked = mod.answers[q.id] === k;
      input.addEventListener("change", () => {
        mod.answers[q.id] = k;
        rows.forEach((r, n) => r.classList.toggle("selected", n === k));
        persist();
      });
      row.append(input, el("span", "choice-letter", LETTERS[k]), el("span", "choice-text", text));
      choices.append(row);
      return row;
    });
    panel.append(choices);
    const clear = el("button", "ws-link", "Clear my answer");
    clear.type = "button";
    clear.addEventListener("click", () => {
      delete mod.answers[q.id];
      persist();
      renderRunner();
    });
    panel.append(clear);
    main.append(panel);
    run.root.append(main);

    const foot = el("footer", "exam-bottom");
    foot.append(el("span", "exam-pos", `Question ${i + 1} of ${mod.questions.length}`));
    const review = el("button", "ws-button ws-button-ghost", "Review all");
    review.type = "button";
    review.addEventListener("click", () => {
      run.view = "review";
      renderRunner();
    });
    const nav = el("div", "exam-nav");
    const back = el("button", "ws-button ws-button-ghost", "Back");
    back.type = "button";
    back.disabled = i === 0;
    back.addEventListener("click", () => moveTo(i - 1));
    const last = i === mod.questions.length - 1;
    const next = el("button", "ws-button", last ? "Review & submit" : "Next");
    next.type = "button";
    next.addEventListener("click", () => {
      if (last) {
        run.view = "review";
        renderRunner();
      } else moveTo(i + 1);
    });
    nav.append(back, next);
    foot.append(review, nav);
    run.root.append(foot);
  }

  function moveTo(i) {
    run.att.cursor.i = i;
    run.view = "question";
    persist();
    renderRunner();
  }

  function renderReview() {
    const mod = curModule();
    const main = el("main", "exam-center");
    const card = el("div", "exam-card-center wide");
    card.append(el("h2", "", "Review your answers"));
    const unanswered = mod.questions.filter((q) => !Number.isInteger(mod.answers[q.id])).length;
    const flagged = mod.questions.filter((q) => mod.flags[q.id]).length;
    card.append(el("p", "", `${mod.questions.length - unanswered} answered · ${unanswered} unanswered · ${flagged} marked for review`));
    const grid = el("div", "review-grid");
    mod.questions.forEach((q, i) => {
      const b = el("button", "review-cell", String(i + 1));
      b.type = "button";
      if (Number.isInteger(mod.answers[q.id])) b.classList.add("answered");
      if (mod.flags[q.id]) b.classList.add("flagged");
      b.setAttribute("aria-label", `Question ${i + 1}, ${Number.isInteger(mod.answers[q.id]) ? "answered" : "unanswered"}${mod.flags[q.id] ? ", marked for review" : ""}`);
      b.addEventListener("click", () => moveTo(i));
      grid.append(b);
    });
    card.append(grid, el("p", "legend", "Green = answered · Outlined = unanswered · ⚑ = marked for review"));
    const row = el("div", "results-more");
    const back = el("button", "ws-button ws-button-ghost", "Back to questions");
    back.type = "button";
    back.addEventListener("click", () => moveTo(Math.min(run.att.cursor.i, mod.questions.length - 1)));
    const submit = el("button", "ws-button", "Submit module");
    submit.type = "button";
    submit.addEventListener("click", () => {
      const msg = unanswered ? `You have ${unanswered} unanswered question${unanswered === 1 ? "" : "s"}. Submit this module anyway? You can't come back to it.` : "Submit this module? You can't come back to it.";
      if (askInTest(msg)) submitModule(false);
    });
    row.append(back, submit);
    card.append(row);
    main.append(card);
    run.root.append(main);
  }

  /* ---------- Results ---------- */
  const LEVEL_LABEL = { strong: "Strong", developing: "Developing", needs: "Needs work" };

  AP.renderExamResults = (att, { onBack, onRetake }) => {
    const result = att.result || (att.result = AP.scoreAttempt(att));
    const exam = att.exam;
    const view = el("div", "exam-results");

    const top = el("div", "results-top");
    const back = el("button", "back-button", "← All subjects");
    back.type = "button";
    back.addEventListener("click", onBack);
    const retake = el("button", "ws-button ws-button-ghost", "Take another test");
    retake.type = "button";
    retake.addEventListener("click", onRetake);
    top.append(back, retake);
    view.append(top);

    /* score */
    const score = el("div", "score-card exam-score");
    const big = el("div", "score-big big-score");
    big.append(el("strong", "", String(result.headline.value)), el("span", "", result.headline.scale));
    const copy = el("div", "score-copy");
    copy.append(el("span", "eyebrow-small", `${bp(exam).title} · ${new Date(att.finishedAt).toLocaleDateString()}`), el("h3", "", result.headline.label));
    copy.append(el("p", "", `Likely range: ${result.headline.range[0]}–${result.headline.range[1]}. You answered ${result.totalCorrect} of ${result.totalQuestions} questions correctly.`));
    if (result.stem) copy.append(el("p", "", `STEM score (Math + Science average): ${result.stem}.`));
    const ig = att.integrity;
    if (ig && ig.locked) {
      copy.append(el("p", "integrity-note", `Test conditions: locked full screen. Left full screen ${ig.fsExits} time${ig.fsExits === 1 ? "" : "s"} · switched away from the tab ${ig.tabSwitches} time${ig.tabSwitches === 1 ? "" : "s"}.`));
    }
    score.append(big, copy);
    view.append(score);

    const secRow = el("div", "section-scores");
    result.sections.forEach((s) => {
      const c = el("div", "section-score");
      c.append(el("span", "", s.name), el("strong", "", String(s.scaled)), el("span", "", `${s.correct}/${s.total} correct`));
      secRow.append(c);
    });
    view.append(secRow);
    view.append(el("p", "disclaimer", exam === "SAT"
      ? "Estimated score: the real digital SAT is adaptive and uses a proprietary scale, so your official score will differ. Use this to track progress and find weak spots."
      : "Estimated score: the official ACT uses its own conversion tables that change from test to test. Use this to track progress and find weak spots. Science is optional and is not part of the composite."));

    /* skills */
    view.append(el("h4", "section-title", "Your skill report"));
    view.append(el("p", "results-sub", "Click a skill to open its study doc with your mistakes explained, practice problems, lessons, and videos."));
    const skillList = el("div", "skill-report");
    [...result.skills].sort((a, b) => a.ratio - b.ratio || b.total - a.total).forEach((s) => skillList.append(skillRow(exam, s)));
    view.append(skillList);

    /* curriculum */
    view.append(renderCurriculum(exam, result.curriculum));

    /* review */
    view.append(el("h4", "section-title", "Review every question"));
    att.sections.forEach((sec) => view.append(reviewSection(att, sec)));

    const more = el("div", "results-more");
    const again = el("button", "ws-button", "Take another test");
    again.type = "button";
    again.addEventListener("click", onRetake);
    const all = el("button", "ws-button ws-button-ghost", "See all subjects");
    all.type = "button";
    all.addEventListener("click", onBack);
    more.append(again, all);
    view.append(more);
    return view;
  };

  function skillRow(exam, s) {
    const name = AP.skillName(exam, s.cat, s.skill);
    const cat = AP.getCat(exam, s.cat);
    const row = el("button", `skill-row level-${s.level}`);
    row.type = "button";
    const left = el("div", "skill-row-main");
    left.append(el("strong", "", name), el("span", "", cat.name));
    const bar = el("div", "progress-bar skill-bar");
    const fill = el("span");
    fill.style.width = `${s.ratio * 100}%`;
    bar.append(fill);
    left.append(bar);
    row.append(left, el("span", "skill-row-score", `${s.correct}/${s.total}`), el("span", `level-badge level-${s.level}`, LEVEL_LABEL[s.level]), el("span", "skill-row-go", "Open doc →"));
    row.addEventListener("click", () => AP.openDoc(exam, s.cat, s.skill));
    return row;
  }

  AP.skillRow = skillRow;

  function docChip(exam, ref) {
    const b = el("button", "doc-chip", AP.skillName(exam, ref.cat, ref.skill));
    b.type = "button";
    b.addEventListener("click", () => AP.openDoc(exam, ref.cat, ref.skill));
    return b;
  }

  function renderCurriculum(exam, plan) {
    const box = el("section", "curriculum");
    box.append(el("h4", "section-title", "Your study plan"));
    box.append(el("p", "results-sub", plan.allStrong
      ? "No major gaps showed up. This plan keeps your strongest skills sharp and checks the two closest to slipping."
      : "Built from your results: biggest gaps first. Every task links to a study doc you can edit."));
    box.append(el("p", "plan-pace", plan.pace));
    const grid = el("div", "week-grid");
    plan.weeks.forEach((w) => {
      const card = el("article", "week-card");
      card.append(el("h5", "", w.title));
      if (w.focus.length) {
        const chips = el("div", "week-chips");
        w.focus.forEach((f) => chips.append(docChip(exam, f)));
        card.append(chips);
      }
      const ul = el("ul", "task-list-plain");
      w.tasks.forEach((t) => {
        const li = el("li");
        li.append(el("span", "task-text", t.text), el("span", "task-min", `${t.minutes} min`));
        if (t.ref) {
          const open = el("button", "ws-link", "Open doc");
          open.type = "button";
          open.addEventListener("click", () => AP.openDoc(exam, t.ref.cat, t.ref.skill));
          li.append(open);
        }
        ul.append(li);
      });
      card.append(ul, el("p", "week-total", `About ${Math.round(w.minutes / 60 * 10) / 10} hours total`));
      grid.append(card);
    });
    box.append(grid);
    if (plan.later.length) {
      const later = el("div", "later");
      later.append(el("strong", "", "After that, work on: "));
      plan.later.forEach((f) => later.append(docChip(exam, f)));
      box.append(later);
    }
    return box;
  }

  function reviewSection(att, sec) {
    const details = el("details", "review-section");
    const total = sec.modules.reduce((a, m) => a + m.questions.length, 0);
    const wrong = sec.modules.reduce((a, m) => a + m.questions.filter((q) => m.answers[q.id] !== q.answer).length, 0);
    details.append(el("summary", "", `${sec.name} · ${total - wrong} of ${total} correct`));
    let drawn = false;
    details.addEventListener("toggle", () => {
      if (!details.open || drawn) return;
      drawn = true;
      const filter = el("label", "option-row");
      const only = document.createElement("input");
      only.type = "checkbox";
      filter.append(only, el("span", "", "Show only questions I missed"));
      const host = el("div", "review-list");
      const draw = () => {
        host.replaceChildren();
        let n = 0;
        sec.modules.forEach((m) =>
          m.questions.forEach((q) => {
            n += 1;
            const given = m.answers[q.id];
            const ok = given === q.answer;
            if (only.checked && ok) return;
            const item = el("div", "review-item " + (ok ? "ok" : "miss"));
            item.append(el("p", "review-source", `${n}. ${AP.skillName(att.exam, q.cat, q.skill)} · ${ok ? "Correct" : Number.isInteger(given) ? "Incorrect" : "Skipped"}`));
            const passage = AP.passageOf(att, q);
            if (passage) item.append(passageEl(passage));
            item.append(el("p", "question-text", q.q));
            if (!ok) item.append(el("p", "review-line wrong", Number.isInteger(given) ? `Your answer: ${LETTERS[given]}. ${q.choices[given]}` : "You skipped this question."));
            item.append(el("p", "review-line right", `Correct answer: ${LETTERS[q.answer]}. ${q.choices[q.answer]}`), el("p", "review-why", q.why));
            if (!ok) {
              const open = el("button", "ws-link", "Open study doc for this skill");
              open.type = "button";
              open.addEventListener("click", () => AP.openDoc(att.exam, q.cat, q.skill));
              item.append(open);
            }
            host.append(item);
          }),
        );
        if (!host.childNodes.length) host.append(el("p", "doc-empty", "Nothing missed in this section. Nice work."));
      };
      only.addEventListener("change", draw);
      draw();
      details.append(filter, host);
    });
    return details;
  }
})();
