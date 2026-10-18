// Shared helpers used by every module. Loaded before bank.js, docs.js, exam.js and script.js.
window.AP = window.AP || {};

const LETTERS = ["A", "B", "C", "D"];
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function load(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

AP.storageFailed = false;
function store(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    AP.storageFailed = false;
    return true;
  } catch {
    AP.storageFailed = true;
    return false;
  }
}

// Only http(s) links are allowed so saved text can never become a script link.
function safeUrl(value) {
  if (!value) return null;
  try {
    const url = new URL(String(value).trim());
    return url.protocol === "http:" || url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function externalLink(text, href, className = "study-link") {
  const url = safeUrl(href);
  if (!url) return null;
  const a = el("a", className, text);
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}

/*
  Passage markup: blocks are separated by a blank line.
  - A block whose lines contain " | " is a table (optional caption on the first line).
  - A block starting with "Notes:" is a bullet list (bullets separated by •).
  - Anything else is paragraph text (one paragraph per line).
*/
function passageEl(text) {
  const box = el("div", "passage");
  String(text)
    .split("\n\n")
    .forEach((block) => {
      const lines = block.split("\n").filter((l) => l.trim() !== "");
      if (!lines.length) return;
      const hasCaption = !lines[0].includes("|");
      const rows = hasCaption ? lines.slice(1) : lines;
      if (rows.length >= 2 && rows.every((l) => l.includes("|"))) {
        const wrap = el("div", "passage-table");
        if (hasCaption) wrap.append(el("p", "table-caption", lines[0]));
        const table = el("table");
        rows.forEach((line, i) => {
          const tr = el("tr");
          line.split("|").forEach((cell) => tr.append(el(i === 0 ? "th" : "td", "", cell.trim())));
          table.append(tr);
        });
        wrap.append(table);
        box.append(wrap);
      } else if (block.startsWith("Notes:")) {
        const parts = block.split("•").map((p) => p.trim()).filter(Boolean);
        box.append(el("p", "notes-label", "Student's notes"));
        const list = el("ul");
        parts.slice(1).forEach((p) => list.append(el("li", "", p)));
        box.append(list);
      } else {
        lines.forEach((line) => box.append(el("p", "", line)));
      }
    });
  return box;
}

// Seeded random numbers so generated questions are reproducible within a test.
function makeRng(seed = (Date.now() ^ (Math.random() * 4294967296)) >>> 0) {
  let a = seed >>> 0;
  const next = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const rng = {
    next,
    int: (lo, hi) => lo + Math.floor(next() * (hi - lo + 1)),
    pick: (list) => list[Math.floor(next() * list.length)],
    chance: (p = 0.5) => next() < p,
    shuffle(list) {
      const out = list.slice();
      for (let i = out.length - 1; i > 0; i--) {
        const j = Math.floor(next() * (i + 1));
        [out[i], out[j]] = [out[j], out[i]];
      }
      return out;
    },
  };
  return rng;
}
AP.rng = makeRng();
