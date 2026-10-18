// AP base: course groups and the apAdd helper. Each content-ap-*.js file registers courses with apAdd({...}).
window.PREP = window.PREP || {};
PREP.AP = {
  name: "AP",
  sections: ["Arts", "English", "History & Social Sciences", "Math & Computer Science", "Sciences", "World Languages", "AP Capstone", "AP Career Kickstart"],
  categories: [],
};

/*
  apAdd({ id, name, section, slug, blurb, about, units: [string], format, tips: [string], links: [[label, url]],
          skills: [{ id, name, lesson, points: [string], tips: [string], links? }],
          placement: [[skillId, question, [4 choices], correctIndex, explanation, optionalStimulus]],
          practice:  [same shape] })
  slug is the course page on apstudents.collegeboard.org, which is verified for every course that has a page.
*/
// Deterministic shuffle: the same question always gets the same choice order, so saved results stay valid
// and correct answers are spread across A-D instead of following the order they were written in.
function apHash(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function apShuffleRow(row) {
  const [skill, q, choices, answer, why, stimulus] = row;
  let a = apHash(`${q}|${choices.join("|")}`);
  const next = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const order = choices.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const out = [skill, q, order.map((i) => choices[i]), order.indexOf(answer), why];
  if (stimulus !== undefined) out.push(stimulus);
  return out;
}

window.apAdd = (def) => {
  const official = `https://apstudents.collegeboard.org/courses/${def.slug}`;
  const links = def.links || [];
  PREP.AP.categories.push({
    id: def.id,
    section: def.section,
    name: def.name,
    blurb: def.blurb,
    info: { about: def.about, units: def.units || [], format: def.format || "", tips: def.tips || [], official, links },
    skills: def.skills.map((s) => ({
      id: s.id,
      name: s.name,
      lesson: s.lesson,
      points: s.points || [],
      tips: s.tips || [],
      links: s.links && s.links.length ? s.links : [["Official College Board course page", official], ...links.slice(0, 2)],
    })),
    placement: (def.placement || []).map(apShuffleRow),
    practice: (def.practice || []).map(apShuffleRow),
  });
};
