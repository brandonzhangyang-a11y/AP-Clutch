// Question bank assembly, full-length exam blueprints, scoring, and curriculum building.
(() => {
  const PREP = window.PREP || {};
  const R0 = () => AP.rng;

  /* ---------- Lookup helpers ---------- */
  AP.exams = Object.keys(PREP);
  AP.getCat = (exam, catId) => (PREP[exam] ? PREP[exam].categories.find((c) => c.id === catId) : null);
  AP.getSkill = (exam, catId, skillId) => {
    const cat = AP.getCat(exam, catId);
    return cat ? cat.skills.find((s) => s.id === skillId) || null : null;
  };
  AP.skillName = (exam, catId, skillId) => (AP.getSkill(exam, catId, skillId) || { name: skillId }).name;
  AP.skillKey = (catId, skillId) => `${catId}:${skillId}`;

  /* ---------- Build the bank ---------- */
  const norm = (row, id, exam, cat) => ({ id, exam, cat, skill: row[0], q: row[1], choices: row[2], answer: row[3], why: row[4], passage: row[5], pid: null });

  Object.entries(PREP).forEach(([exam, data]) => {
    data.categories.forEach((cat) => {
      cat.exam = exam;
      cat.questions = cat.placement.map((row, i) => norm(row, `${cat.id}-p${i}`, exam, cat.id));
      cat.practiceQuestions = cat.practice.map((row, i) => norm(row, `${cat.id}-x${i}`, exam, cat.id));
      cat.bank = [...cat.questions, ...cat.practiceQuestions];
    });
  });

  AP.bankWarnings = [];
  const counters = {};
  (window.PREP_BANK || []).forEach((block) => {
    const passages = block.passages || {};
    (block.questions || []).forEach((r, i) => {
      const cat = AP.getCat(r.exam, r.cat);
      const problems = [];
      if (!cat) problems.push("unknown category");
      else if (!cat.skills.some((s) => s.id === r.skill)) problems.push("unknown skill");
      if (!Array.isArray(r.c) || r.c.length !== 4 || new Set(r.c).size !== 4) problems.push("choices must be 4 distinct");
      if (!Number.isInteger(r.a) || r.a < 0 || r.a > 3) problems.push("bad answer index");
      if (!r.q || !r.why) problems.push("missing q/why");
      const passage = r.p || (r.pid ? passages[r.pid] : undefined);
      if (r.pid && !passage) problems.push("missing passage " + r.pid);
      if (problems.length) {
        AP.bankWarnings.push(`${r.cat}#${i}: ${problems.join(", ")}`);
        return;
      }
      counters[cat.id] = (counters[cat.id] || 0) + 1;
      cat.bank.push({
        id: `${cat.id}-b${counters[cat.id]}`, exam: r.exam, cat: cat.id, skill: r.skill, q: r.q, choices: r.c, answer: r.a, why: r.why,
        passage, pid: r.pid || null, d: r.d || 2,
      });
    });
  });

  /* ---------- Exam blueprints (formats confirmed against current official structures) ---------- */
  AP.blueprints = {
    SAT: {
      title: "Digital SAT practice test",
      summary: "98 questions · 134 minutes · Reading & Writing + Math",
      scale: "400–1600",
      breakMinutes: 10,
      sections: [
        {
          id: "rw", name: "Reading & Writing",
          modules: [
            { minutes: 32, parts: [{ cat: "sat-craft", n: 7 }, { cat: "sat-info", n: 7 }, { cat: "sat-conventions", n: 7 }, { cat: "sat-expression", n: 6 }] },
            { minutes: 32, parts: [{ cat: "sat-craft", n: 7 }, { cat: "sat-info", n: 6 }, { cat: "sat-conventions", n: 7 }, { cat: "sat-expression", n: 7 }] },
          ],
        },
        {
          id: "math", name: "Math",
          modules: [
            { minutes: 35, parts: [{ cat: "sat-algebra", n: 8 }, { cat: "sat-advanced", n: 7 }, { cat: "sat-data", n: 4 }, { cat: "sat-geometry", n: 3 }] },
            { minutes: 35, parts: [{ cat: "sat-algebra", n: 7 }, { cat: "sat-advanced", n: 8 }, { cat: "sat-data", n: 3 }, { cat: "sat-geometry", n: 4 }] },
          ],
        },
      ],
    },
    ACT: {
      title: "ACT practice test",
      summary: "English 50 · Math 45 · Reading 36 · optional Science 40",
      scale: "1–36",
      breakMinutes: 10,
      sections: [
        { id: "english", name: "English", modules: [{ minutes: 35, parts: [{ cat: "act-english", n: 50, skills: { gram: 25, style: 25 } }] }] },
        { id: "math", name: "Math", modules: [{ minutes: 50, parts: [{ cat: "act-math", n: 45, skills: { alg: 20, geo: 15, prob: 10 } }] }] },
        { id: "reading", name: "Reading", modules: [{ minutes: 40, parts: [{ cat: "act-reading", n: 36, passages: true }] }] },
        { id: "science", name: "Science", optional: true, modules: [{ minutes: 40, parts: [{ cat: "act-science", n: 40, passages: true }] }] },
      ],
    },
  };

  AP.blueprintTotals = (exam, includeScience = true) => {
    const bp = AP.blueprints[exam];
    let questions = 0;
    let minutes = 0;
    bp.sections.forEach((s) => {
      if (s.optional && !includeScience) return;
      s.modules.forEach((m) => {
        minutes += m.minutes;
        m.parts.forEach((p) => (questions += p.n));
      });
    });
    return { questions, minutes };
  };

  /* ---------- Attempt storage ---------- */
  const EXAMS_KEY = "apclutch-exams-v1";
  AP.examStore = load(EXAMS_KEY, { attempts: {}, current: {} });
  AP.examStore.attempts = AP.examStore.attempts || {};
  AP.examStore.current = AP.examStore.current || {};

  AP.saveExams = () => {
    if (store(EXAMS_KEY, AP.examStore)) return true;
    // Storage full: drop the oldest finished attempts and try again.
    Object.values(AP.examStore.attempts).forEach((list) => list.splice(2));
    return store(EXAMS_KEY, AP.examStore);
  };

  AP.attemptsFor = (exam) => AP.examStore.attempts[exam] || [];
  AP.latestAttempt = (exam) => AP.attemptsFor(exam)[0] || null;

  AP.seenIds = (exam) => {
    const ids = new Set();
    const all = [...AP.attemptsFor(exam)];
    if (AP.examStore.current[exam]) all.push(AP.examStore.current[exam]);
    all.forEach((att) => att.sections.forEach((s) => s.modules.forEach((m) => m.questions.forEach((q) => ids.add(q.id)))));
    return ids;
  };

  // Questions inside saved attempts keep only a passage id; this restores the text.
  AP.passageOf = (att, q) => (q.pid ? att.passages[q.pid] : q.passage) || "";

  /* ---------- Assemble a full-length test ---------- */
  function evenSplit(n, keys, flip) {
    const base = Math.floor(n / keys.length);
    let extra = n - base * keys.length;
    const order = flip ? [...keys].reverse() : keys;
    const out = {};
    order.forEach((k) => {
      out[k] = base + (extra > 0 ? 1 : 0);
      extra -= extra > 0 ? 1 : 0;
    });
    return out;
  }

  const snapshotOf = (q) => ({ id: q.id, cat: q.cat, skill: q.skill, q: q.q, choices: q.choices, answer: q.answer, why: q.why, pid: q.pid || null, passage: q.pid ? undefined : q.passage });
  // Many questions share a stem ("Which choice completes the text..."), so de-duplicate on stem + passage.
  const keyOf = (q) => `${q.q}||${q.passage || ""}`;

  function takeSkill(exam, cat, skill, n, ctx) {
    const out = [];
    const isMath = Boolean((AP.mathPools[exam] || {})[skill]);
    const pool = cat.bank.filter((q) => q.skill === skill && !ctx.used.has(keyOf(q)));
    const unseen = ctx.R.shuffle(pool.filter((q) => !ctx.seen.has(q.id)));
    const seenBefore = ctx.R.shuffle(pool.filter((q) => ctx.seen.has(q.id)));
    const staticWanted = isMath ? Math.min(Math.ceil(n / 3), unseen.length) : n;
    [...unseen, ...seenBefore].slice(0, staticWanted).forEach((q) => {
      ctx.used.add(keyOf(q));
      out.push(q);
    });
    for (let tries = 0; isMath && out.length < n && tries < n * 30; tries++) {
      const made = AP.generateMath(exam, skill, ctx.R);
      if (!made || ctx.used.has(keyOf(made))) continue;
      ctx.used.add(keyOf(made));
      out.push({ id: `g-${skill}-${newId()}`, exam, cat: cat.id, skill, q: made.q, choices: made.choices, answer: made.answer, why: made.why, pid: null, passage: undefined });
    }
    return out;
  }

  function takePassageSet(cat, n, ctx) {
    const groups = [];
    const seenPid = new Map();
    cat.bank.filter((q) => q.pid).forEach((q) => {
      if (!seenPid.has(q.pid)) {
        seenPid.set(q.pid, []);
        groups.push(seenPid.get(q.pid));
      }
      seenPid.get(q.pid).push(q);
    });
    let out = [];
    if (groups.length) groups.forEach((g) => out.length < n && (out = out.concat(g)));
    else out = ctx.R.shuffle(cat.bank);
    out = out.slice(0, n);
    out.forEach((q) => ctx.used.add(keyOf(q)));
    return out;
  }

  function takePart(exam, part, flip, ctx) {
    const cat = AP.getCat(exam, part.cat);
    if (part.passages) return takePassageSet(cat, part.n, ctx);
    const split = part.skills || evenSplit(part.n, cat.skills.map((s) => s.id), flip);
    const list = [];
    Object.entries(split).forEach(([skill, n]) => list.push(...takeSkill(exam, cat, skill, n, ctx)));
    return ctx.R.shuffle(list);
  }

  AP.assembleExam = (exam, { timed = true, includeScience = false } = {}) => {
    const bp = AP.blueprints[exam];
    const ctx = { R: makeRng(), seen: AP.seenIds(exam), used: new Set() };
    const passages = {};
    const sections = bp.sections
      .filter((s) => !s.optional || includeScience)
      .map((sec) => ({
        id: sec.id,
        name: sec.name,
        modules: sec.modules.map((mod, mi) => {
          const questions = [];
          mod.parts.forEach((p) => questions.push(...takePart(exam, p, mi % 2 === 1, ctx)));
          questions.forEach((q) => q.pid && (passages[q.pid] = q.passage));
          return { minutes: mod.minutes, secondsLeft: mod.minutes * 60, status: "pending", questions: questions.map(snapshotOf), answers: {}, flags: {} };
        }),
      }));
    return { id: newId(), exam, startedAt: Date.now(), finishedAt: null, timed, includeScience, passages, sections, cursor: { s: 0, m: 0, i: 0 }, result: null };
  };

  /* ---------- Scoring ---------- */
  const scaleSAT = (ratio) => Math.max(200, Math.min(800, Math.round((200 + 600 * ratio) / 10) * 10));
  const scaleACT = (ratio) => Math.max(1, Math.min(36, Math.round(1 + 35 * ratio)));
  const levelOf = (ratio) => (ratio >= 0.8 ? "strong" : ratio >= 0.6 ? "developing" : "needs");
  AP.levelOf = levelOf;

  AP.scoreAttempt = (att) => {
    const skillMap = new Map();
    const sections = att.sections.map((sec) => {
      let correct = 0;
      let total = 0;
      sec.modules.forEach((m) =>
        m.questions.forEach((q) => {
          total += 1;
          const given = m.answers[q.id];
          const ok = given === q.answer;
          if (ok) correct += 1;
          const key = AP.skillKey(q.cat, q.skill);
          if (!skillMap.has(key)) skillMap.set(key, { key, cat: q.cat, skill: q.skill, section: sec.id, correct: 0, total: 0, missed: [] });
          const s = skillMap.get(key);
          s.total += 1;
          if (ok) s.correct += 1;
          else s.missed.push({ id: q.id, skipped: !Number.isInteger(given) });
        }),
      );
      const ratio = total ? correct / total : 0;
      return { id: sec.id, name: sec.name, correct, total, ratio, scaled: att.exam === "SAT" ? scaleSAT(ratio) : scaleACT(ratio) };
    });
    const skills = Array.from(skillMap.values()).map((s) => ({ ...s, ratio: s.total ? s.correct / s.total : 0, level: levelOf(s.total ? s.correct / s.total : 0) }));
    const totalCorrect = sections.reduce((a, s) => a + s.correct, 0);
    const totalQuestions = sections.reduce((a, s) => a + s.total, 0);
    const by = Object.fromEntries(sections.map((s) => [s.id, s]));
    const result = { sections, skills, totalCorrect, totalQuestions };
    if (att.exam === "SAT") {
      const total = by.rw.scaled + by.math.scaled;
      result.headline = { label: "Estimated total score", value: total, range: [Math.max(400, total - 50), Math.min(1600, total + 50)], scale: "400–1600" };
    } else {
      const composite = Math.round((by.english.scaled + by.math.scaled + by.reading.scaled) / 3);
      result.headline = { label: "Estimated composite score", value: composite, range: [Math.max(1, composite - 1), Math.min(36, composite + 1)], scale: "1–36" };
      if (by.science) result.stem = Math.round((by.math.scaled + by.science.scaled) / 2);
    }
    result.curriculum = AP.buildCurriculum(att.exam, skills);
    return result;
  };

  /* ---------- Curriculum ---------- */
  AP.buildCurriculum = (exam, skills) => {
    const sorted = [...skills].sort((a, b) => a.ratio - b.ratio || b.total - a.total);
    let focus = sorted.filter((s) => s.level !== "strong");
    const allStrong = focus.length === 0;
    if (allStrong) focus = sorted.slice(0, 2);
    const chosen = focus.slice(0, 6);
    const later = focus.slice(6);
    const weeks = [];
    for (let i = 0; i < chosen.length; i += 2) {
      const group = chosen.slice(i, i + 2);
      const tasks = [];
      group.forEach((s) => {
        const ref = { exam, cat: s.cat, skill: s.skill };
        const name = AP.skillName(exam, s.cat, s.skill);
        tasks.push({ kind: "doc", text: `Open the study doc for ${name}. Read it and rewrite the cheat sheet in your own words.`, minutes: 20, ref });
        tasks.push({ kind: "review", text: `Redo the ${s.missed.length || "missed"} question${s.missed.length === 1 ? "" : "s"} you missed and write one sentence on why each answer is right.`, minutes: 15, ref });
        tasks.push({ kind: "practice", text: `Do 10 fresh practice problems for ${name} (aim for 80% or better).`, minutes: 25, ref });
        tasks.push({ kind: "video", text: `Watch one tutorial video on ${name}, then add three notes to your doc.`, minutes: 15, ref });
      });
      weeks.push({ title: `Week ${weeks.length + 1}`, focus: group, tasks, minutes: tasks.reduce((a, t) => a + t.minutes, 0) });
    }
    weeks.push({
      title: `Week ${weeks.length + 1}: Retest`,
      focus: [],
      tasks: [
        { kind: "practice", text: "Mixed review: 5 problems from each skill you studied.", minutes: 30, ref: null },
        { kind: "review", text: "Reread your edited study docs and note anything that still feels shaky.", minutes: 20, ref: null },
        { kind: "retest", text: `Take another full ${exam} practice test (new questions are chosen automatically) and compare your score and skill levels.`, minutes: exam === "SAT" ? 134 : 125, ref: null },
      ],
      minutes: 30 + 20 + (exam === "SAT" ? 134 : 125),
    });
    return {
      allStrong,
      weeks,
      later: later.map((s) => ({ exam, cat: s.cat, skill: s.skill })),
      pace: "Plan for 4–5 sessions a week of 30–45 minutes. Short, regular practice works better than one long cram.",
    };
  };
})();
