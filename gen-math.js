// Parameterized math question generators for the full-length tests and unlimited practice.
// Every generator computes its answer from the same numbers it puts in the question,
// and returns { q, choices, answer, why }.
(() => {
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const fmt = (n) => String(Number.isInteger(n) ? n : +n.toFixed(2)).replace("-", "−");
  const frac = (n, d) => {
    const g = gcd(n, d) || 1;
    n /= g;
    d /= g;
    if (d < 0) {
      n = -n;
      d = -d;
    }
    return d === 1 ? fmt(n) : `${fmt(n)}/${d}`;
  };
  const sg = (n) => (n < 0 ? `− ${-n}` : `+ ${n}`);
  const SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
  const sup = (n) => String(n).split("").map((d) => SUP[d]).join("");
  const coef = (c, v) => (c === 1 ? v : c === -1 ? `−${v}` : `${fmt(c)}${v}`);
  const linStr = (a, b) => `${coef(a, "x")}${b ? " " + sg(b) : ""}`;
  const poly = (a, b, c) => {
    let s = coef(a, "x²");
    if (b) s += ` ${b < 0 ? "−" : "+"} ${Math.abs(b) === 1 ? "" : Math.abs(b)}x`;
    if (c) s += ` ${sg(c)}`;
    return s;
  };
  const money = (n) => `$${fmt(n)}`;

  // Build a 4-choice question: the correct answer plus 3 distinct distractors.
  function build(R, q, correct, wrongs, why) {
    const c = String(correct);
    const seen = new Set([c]);
    const w = [];
    wrongs.forEach((x) => {
      const s = String(x);
      if (!seen.has(s) && !/NaN|Infinity|undefined/.test(s)) {
        seen.add(s);
        w.push(s);
      }
    });
    const m = c.replace("−", "-").match(/^(\D*?)(-?\d+(?:\.\d+)?)(\D*)$/);
    if (w.length < 3 && m) {
      const [, pre, digits, post] = m;
      const num = Number(digits);
      const fix = (v) => `${pre.replace("-", "−")}${fmt(v)}${post}`;
      for (let k = 1; w.length < 3 && k < 30; k++) {
        [k, -k].forEach((d) => {
          const s = fix(num + d);
          if (w.length < 3 && !seen.has(s)) {
            seen.add(s);
            w.push(s);
          }
        });
      }
    }
    if (w.length < 3) return null;
    const choices = R.shuffle([c, ...w.slice(0, 3)]);
    return { q, choices, answer: choices.indexOf(c), why };
  }

  function buildFixed(q, choices, answer, why) {
    return { q, choices, answer, why };
  }

  const G = {};

  /* ----- Linear equations & inequalities ----- */
  G.lin1 = (R) => {
    const x = R.int(-6, 12);
    const a = R.int(2, 9);
    let b = R.int(-12, 15);
    if (!b) b = 5;
    const c = a * x + b;
    return build(R, `If ${a}x ${sg(b)} = ${fmt(c)}, what is the value of x?`, fmt(x),
      [x + 1, x - 1, (c + b) / a, c - b, -x].map(fmt),
      `${b > 0 ? `Subtract ${b} from` : `Add ${-b} to`} both sides: ${a}x = ${fmt(c - b)}. Divide by ${a}: x = ${fmt(x)}.`);
  };
  G.lin2 = (R) => {
    const k = R.int(2, 7);
    let x0 = R.int(-8, 8);
    if (!x0) x0 = 3;
    let m = R.int(-10, 10);
    if (!m) m = 4;
    const op = R.pick(["<", ">", "≤", "≥"]);
    const flip = { "<": ">", ">": "<", "≤": "≥", "≥": "≤" }[op];
    const n = -k * x0 + m;
    return build(R, `Which of the following is the solution set of −${k}x ${sg(m)} ${op} ${fmt(n)}?`, `x ${flip} ${fmt(x0)}`,
      [`x ${op} ${fmt(x0)}`, `x ${flip} ${fmt(-x0)}`, `x ${op} ${fmt(-x0)}`],
      `${m > 0 ? `Subtract ${m}` : `Add ${-m}`} on both sides: −${k}x ${op} ${fmt(n - m)}. Divide both sides by −${k} and reverse the inequality sign: x ${flip} ${fmt(x0)}.`);
  };
  G.lin3 = (R) => {
    const f = R.pick([20, 25, 30, 35, 40, 45, 50, 60]);
    const r = R.pick([8, 10, 12, 15, 18, 20, 25, 30]);
    const h = R.int(2, 9);
    const T = f + r * h;
    const [intro, unit] = R.pick([
      [`A tutor charges a $${f} fee plus $${r} per hour.`, "hours"],
      [`A rental shop charges a $${f} deposit plus $${r} per day.`, "days"],
      [`A gym charges a $${f} sign-up fee plus $${r} per month.`, "months"],
    ]);
    return build(R, `${intro} For how many ${unit} would the total charge be $${T}?`, h, [h + 1, h - 1, Math.round(T / r), h + 2],
      `Write ${r}t + ${f} = ${T}. Subtract ${f} to get ${r}t = ${T - f}, so t = ${h}.`);
  };
  G.lin4 = (R) => {
    for (let tries = 0; tries < 50; tries++) {
      const x = R.int(-5, 9);
      const a = R.int(2, 6);
      const c = R.int(1, 5);
      const b = R.int(-5, 6);
      if (a === c || !b) continue;
      const d = a * (x + b) - c * x;
      if (!d) continue;
      return build(R, `What is the solution to ${a}(x ${sg(b)}) = ${coef(c, "x")} ${sg(d)}?`, fmt(x),
        [x + 1, -x, x - 2, (d + a * b) / (a - c)].map(fmt),
        `Distribute: ${a}x ${sg(a * b)} = ${coef(c, "x")} ${sg(d)}. Collect the x-terms and constants: ${fmt(a - c)}x = ${fmt(d - a * b)}. So x = ${fmt(x)}.`);
    }
    return null;
  };
  G.lin5 = (R) => {
    let m = R.int(-5, 6);
    if (!m) m = 3;
    let p = R.int(-4, 6);
    if (!p) p = 2;
    const q = R.int(-9, 12);
    const b = q - m * p;
    return build(R, `A line has a slope of ${fmt(m)} and passes through the point (${fmt(p)}, ${fmt(q)}). What is the y-intercept of the line?`, fmt(b),
      [q + m * p, -b, q, m * p].map(fmt),
      `Use y = mx + b: ${fmt(q)} = ${fmt(m)}(${fmt(p)}) + b. So b = ${fmt(q)} − (${fmt(m * p)}) = ${fmt(b)}.`);
  };

  /* ----- Systems of equations ----- */
  G.sys1 = (R) => {
    const x = R.int(2, 12);
    const y = R.int(-3, 9);
    const S = x + y;
    const D = x - y;
    const ask = R.pick(["x", "y"]);
    const ans = ask === "x" ? x : y;
    return build(R, `If x + y = ${S} and x − y = ${fmt(D)}, what is the value of ${ask}?`, fmt(ans),
      [ask === "x" ? y : x, S, D, ans + 1].map(fmt),
      ask === "x" ? `Add the two equations: 2x = ${S + D}, so x = ${x}.` : `Subtract the second equation from the first: 2y = ${S - D}, so y = ${y}.`);
  };
  G.sys2 = (R) => {
    for (let tries = 0; tries < 50; tries++) {
      const x = R.int(-4, 7);
      const a = R.int(-3, 5);
      const c = R.int(-3, 5);
      const b = R.int(-6, 8);
      if (!a || !c || a === c) continue;
      const d = b + (a - c) * x;
      const y = a * x + b;
      const ask = R.pick(["x", "y"]);
      const ans = ask === "x" ? x : y;
      return build(R, `The graphs of y = ${linStr(a, b)} and y = ${linStr(c, d)} intersect at the point (x, y). What is the value of ${ask}?`, fmt(ans),
        [ask === "x" ? y : x, -ans, ans + 1, b].map(fmt),
        `Set the expressions equal: ${linStr(a, b)} = ${linStr(c, d)}. Solving gives x = ${fmt(x)}. Substituting back into y = ${linStr(a, b)} gives y = ${fmt(y)}.`);
    }
    return null;
  };
  G.sys3 = (R) => {
    const p1 = R.pick([6, 7, 8, 9, 10, 12]);
    const p2 = R.pick([3, 4, 5]);
    const u = R.int(4, 14);
    const v = R.int(4, 14);
    const n = u + v;
    const C = p1 * u + p2 * v;
    const [A, B] = R.pick([["adult", "student"], ["senior", "child"], ["member", "guest"]]);
    return build(R, `Tickets cost $${p1} for each ${A} and $${p2} for each ${B}. A total of ${n} tickets were sold for $${C}. How many ${A} tickets were sold?`, u,
      [v, u + 1, u - 1, Math.round(C / p1)],
      `Let a = number of ${A} tickets. Then a + b = ${n} and ${p1}a + ${p2}b = ${C}. Substitute b = ${n} − a: ${p1}a + ${p2}(${n} − a) = ${C}, so ${p1 - p2}a = ${C - p2 * n} and a = ${u}.`);
  };
  G.sys4 = (R) => {
    const a = R.int(1, 5);
    const b = R.int(2, 6);
    const c = R.int(3, 20);
    const m = R.int(2, 4);
    if (R.chance()) {
      const d = m * c + R.int(1, 6);
      return build(R, `The system ${coef(a, "x")} + ${b}y = ${c} and kx + ${m * b}y = ${d} has no solution. What is the value of k?`, m * a,
        [a, m, m * a + m, 2 * m * a],
        `For no solution the lines must be parallel but not identical, so the coefficients are proportional. The y-coefficient is multiplied by ${m} (${b} → ${m * b}), so k = ${m} × ${a} = ${m * a}.`);
    }
    return build(R, `The system ${coef(a, "x")} + ${b}y = ${c} and ${coef(m * a, "x")} + ${m * b}y = k has infinitely many solutions. What is the value of k?`, m * c,
      [c, m + c, m * c + a, 2 * m * c],
      `For infinitely many solutions the second equation must be a multiple of the first. Multiplying the first equation by ${m} gives ${coef(m * a, "x")} + ${m * b}y = ${m * c}, so k = ${m * c}.`);
  };

  /* ----- Quadratics & factoring ----- */
  G.quad1 = (R) => {
    for (let tries = 0; tries < 50; tries++) {
      const r = R.int(-7, 7);
      const s = R.int(-7, 7);
      if (!r || !s || r === s || r + s === 0) continue;
      const show = (u, v) => `x = ${fmt(Math.min(u, v))} or x = ${fmt(Math.max(u, v))}`;
      return build(R, `What are the solutions of the equation ${poly(1, -(r + s), r * s)} = 0?`, show(r, s),
        [show(-r, -s), show(r, -s), show(-r, s), show(r + s, r * s)],
        `Factor as (x ${sg(-r)})(x ${sg(-s)}) = 0. Setting each factor equal to zero gives x = ${fmt(r)} or x = ${fmt(s)}.`);
    }
    return null;
  };
  G.quad2 = (R) => {
    let b = R.int(-5, 5) * 2;
    if (!b) b = 6;
    const c = R.int(-10, 12);
    const eq = `y = ${poly(1, b, c)}`;
    if (R.chance()) {
      return build(R, `What is the x-coordinate of the vertex of the parabola ${eq}?`, fmt(-b / 2), [b / 2, -b, b, c].map(fmt),
        `The vertex is at x = −b / (2a) = −(${fmt(b)}) / 2 = ${fmt(-b / 2)}.`);
    }
    const minV = c - (b * b) / 4;
    return build(R, `What is the minimum value of y for ${eq}?`, fmt(minV), [c, c + (b * b) / 4, -b / 2, c - (b * b) / 2].map(fmt),
      `The minimum occurs at x = ${fmt(-b / 2)}. Substituting gives y = ${fmt(minV)}.`);
  };
  G.quad3 = (R) => {
    const kind = R.int(0, 2);
    let a;
    let b;
    let c;
    if (kind === 1) {
      const p = R.int(1, 3);
      const q = R.pick([-4, -3, -2, -1, 1, 2, 3, 4]);
      a = p * p;
      b = 2 * p * q;
      c = q * q;
    } else if (kind === 2) {
      const r = R.int(-5, 5);
      let s = R.int(-5, 5);
      if (r === s) s = r + 3;
      const A = R.int(1, 2);
      a = A;
      b = -A * (r + s);
      c = A * r * s;
    } else {
      const bb = R.int(-3, 3) * 2;
      a = 1;
      b = bb;
      c = (bb * bb) / 4 + R.int(1, 6);
    }
    const D = b * b - 4 * a * c;
    const words = ["no real solutions (the discriminant is negative)", "exactly one real solution (the discriminant is zero)", "two real solutions (the discriminant is positive)"];
    return buildFixed(`How many real solutions does the equation ${poly(a, b, c)} = 0 have?`, ["0", "1", "2", "Infinitely many"], kind === 0 ? 0 : kind === 1 ? 1 : 2,
      `The discriminant is b² − 4ac = (${fmt(b)})² − 4(${a})(${fmt(c)}) = ${fmt(D)}, so the equation has ${words[kind === 0 ? 0 : kind === 1 ? 1 : 2]}.`);
  };
  G.quad4 = (R) => {
    const p = R.int(1, 8);
    const q = R.int(1, 8);
    return build(R, `If (x ${sg(p)})(x ${sg(-q)}) = 0 and x > 0, what is the value of x?`, fmt(q), [p, -p, p + q, Math.abs(q - p) + 1].map(fmt),
      `Setting each factor to zero gives x = ${fmt(-p)} or x = ${fmt(q)}. Only ${fmt(q)} is greater than 0.`);
  };
  G.quad5 = (R) => {
    const k = R.int(2, 9);
    return build(R, `Which expression is equivalent to x² − ${k * k}?`, `(x − ${k})(x + ${k})`,
      [`(x − ${k})²`, `(x + ${k})²`, `x(x − ${k * k})`],
      `This is a difference of squares: a² − b² = (a − b)(a + b). With a = x and b = ${k}, x² − ${k * k} = (x − ${k})(x + ${k}).`);
  };

  /* ----- Exponents & non-linear functions ----- */
  G.expo1 = (R) => {
    const a = R.int(2, 7);
    const b = R.int(2, 6);
    const c = R.int(2, a + b - 2);
    const n = a + b - c;
    const X = (e) => `x${sup(e)}`;
    return build(R, `Which expression is equivalent to (x${sup(a)} · x${sup(b)}) / x${sup(c)}, where x > 0?`, X(n),
      [X(a + b + c), X(a + b), X(a * b - c), X(n + 1)],
      `Add the exponents in the numerator: x${sup(a + b)}. Then subtract the exponent in the denominator: x${sup(a + b)} / x${sup(c)} = x${sup(n)}.`);
  };
  G.expo2 = (R) => {
    const k = R.int(2, 5);
    const b = R.int(2, 4);
    const n = R.int(2, 4);
    return build(R, `If f(x) = ${k} · ${b}ˣ, what is the value of f(${n})?`, k * b ** n,
      [(k * b) ** n, k * b * n, k + b ** n, b ** n],
      `${b}${sup(n)} = ${b ** n}, and ${k} × ${b ** n} = ${k * b ** n}. (Evaluate the power first, then multiply by ${k}.)`);
  };
  G.expo3 = (R) => {
    const P = R.pick([100, 200, 250, 400, 500, 800]);
    const f = R.pick([2, 3]);
    const d = R.pick([2, 3, 4, 5, 6]);
    return build(R, `A culture starts with ${P} bacteria, and the population ${f === 2 ? "doubles" : "triples"} every ${d} hours. Which expression gives the number of bacteria after t hours?`,
      `${P} · ${f}^(t/${d})`,
      [`${P} · ${f}^(${d}t)`, `${P} · (t/${d})^${f}`, `${P} + ${f}t/${d}`],
      `The population is multiplied by ${f} once every ${d} hours, so after t hours it has been multiplied by ${f} a total of t/${d} times: ${P} · ${f}^(t/${d}).`);
  };
  G.expo4 = (R) => {
    const b = R.int(2, 5);
    const n = R.int(2, 4);
    return build(R, `If ${b}ˣ = ${b ** n}, what is the value of x?`, n, [n + 1, n - 1, b, 2 * n],
      `${b ** n} = ${b}${sup(n)}. When the bases match, the exponents must be equal, so x = ${n}.`);
  };
  G.expo5 = (R) => {
    let p = R.int(-6, 6);
    if (!p) p = 4;
    const q = R.int(-8, 9);
    const n = R.int(1, 4);
    const v = n * n - p * n + q;
    return build(R, `If f(x) = ${poly(1, p, q)}, what is the value of f(−${n})?`, fmt(v),
      [-n * n - p * n + q, n * n + p * n + q, -v, p * n + q].map(fmt),
      `f(−${n}) = (−${n})² ${p < 0 ? "−" : "+"} ${Math.abs(p)}(−${n}) ${sg(q)} = ${n * n} ${sg(-p * n)} ${sg(q)} = ${fmt(v)}.`);
  };

  /* ----- Ratios, percents & rates ----- */
  G.ratio1 = (R) => {
    const P = R.pick([40, 60, 80, 100, 120, 140, 160, 200]);
    const d = R.pick([10, 20, 25, 30, 40, 50]);
    const sale = (P * (100 - d)) / 100;
    const item = R.pick(["jacket", "backpack", "pair of shoes"]);
    return build(R, `A ${item} regularly priced at $${P} is on sale for ${d}% off. What is the sale price?`, money(sale),
      [P - d, (P * d) / 100, (P * (100 + d)) / 100, P - d / 2].map(money),
      `${d}% of $${P} is $${fmt((P * d) / 100)}, so the sale price is $${P} − $${fmt((P * d) / 100)} = $${fmt(sale)}. (Or multiply by ${fmt((100 - d) / 100)}.)`);
  };
  G.ratio2 = (R) => {
    const a = R.int(1, 6);
    let b = R.int(1, 6);
    if (a === b) b = a + 1;
    const k = R.int(3, 12);
    const T = (a + b) * k;
    const [A, B] = R.pick([["cats", "dogs"], ["red marbles", "blue marbles"], ["fiction books", "nonfiction books"]]);
    const askB = R.chance();
    const part = askB ? b : a;
    return build(R, `The ratio of ${A} to ${B} in a collection is ${a} : ${b}. If there are ${T} items in all, how many are ${askB ? B : A}?`, part * k,
      [(askB ? a : b) * k, k, T - part, Math.round(T / part)],
      `The ratio has ${a} + ${b} = ${a + b} equal parts, and each part is ${T} ÷ ${a + b} = ${k}. ${askB ? B : A} make up ${part} parts: ${part} × ${k} = ${part * k}.`);
  };
  G.ratio3 = (R) => {
    const r = R.pick([30, 35, 40, 45, 50, 55, 60, 65]);
    const t1 = R.int(2, 5);
    let t2 = R.int(6, 9);
    if (t2 === t1) t2 += 1;
    return build(R, `A train travels ${r * t1} miles in ${t1} hours. At the same rate, how many miles will it travel in ${t2} hours?`, r * t2,
      [r * t1 + t2, r * t2 + r, (r * t1) / t2, r * (t2 - t1)].map(fmt),
      `The rate is ${r * t1} ÷ ${t1} = ${r} miles per hour. In ${t2} hours the train travels ${r} × ${t2} = ${r * t2} miles.`);
  };
  G.ratio4 = (R) => {
    const old = R.pick([40, 60, 80, 100, 120, 160, 200]);
    const up = R.chance();
    const pct = up ? R.pick([10, 20, 25, 30, 40, 50, 60, 75]) : R.pick([10, 20, 25, 30, 40, 50]);
    const nw = (old * (up ? 100 + pct : 100 - pct)) / 100;
    return build(R, `A quantity changes from ${old} to ${nw}. What is the percent ${up ? "increase" : "decrease"}?`, `${pct}%`,
      [`${pct / 2}%`, `${up ? 100 + pct : 100 - pct}%`, `${Math.abs(nw - old)}%`, `${pct + 5}%`],
      `Percent change = (change ÷ original) × 100 = (${Math.abs(nw - old)} ÷ ${old}) × 100 = ${pct}%. Always divide by the original amount.`);
  };

  /* ----- Data & statistics ----- */
  G.stats1 = (R) => {
    for (let tries = 0; tries < 50; tries++) {
      const nums = Array.from({ length: 4 }, () => R.int(3, 20));
      const m = R.int(6, 16);
      const last = 5 * m - nums.reduce((s, v) => s + v, 0);
      if (last < 1 || last > 25) continue;
      nums.push(last);
      const sorted = nums.slice().sort((x, y) => x - y);
      return build(R, `What is the mean of the numbers ${R.shuffle(nums).join(", ")}?`, m,
        [sorted[2], m + 1, m - 1, (5 * m) / 4].map(fmt),
        `The sum is ${5 * m}, and ${5 * m} ÷ 5 = ${m}.`);
    }
    return null;
  };
  G.stats2 = (R) => {
    const n = R.pick([5, 6, 7]);
    const nums = Array.from({ length: n }, () => R.int(2, 30));
    const s = nums.slice().sort((x, y) => x - y);
    const med = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
    const mean = nums.reduce((a, b) => a + b, 0) / n;
    return build(R, `What is the median of the data set ${nums.join(", ")}?`, fmt(med),
      [mean, s[Math.floor(n / 2) + 1 < n ? Math.floor(n / 2) + 1 : n - 1], s[n - 1], nums[Math.floor(n / 2)]].map(fmt),
      `Sort the values: ${s.join(", ")}. ${n % 2 ? `The middle value is ${fmt(med)}.` : `Average the two middle values: (${s[n / 2 - 1]} + ${s[n / 2]}) ÷ 2 = ${fmt(med)}.`}`);
  };
  G.stats3 = (R) => {
    const n = R.pick([4, 5, 6]);
    const m = R.int(10, 30);
    const last = R.int(3, 35);
    const S = n * m - last;
    return build(R, `The mean of ${n} numbers is ${m}. If the sum of ${n - 1} of the numbers is ${S}, what is the remaining number?`, last,
      [m, S - n * m, n * m, m - last],
      `The total of all ${n} numbers is ${n} × ${m} = ${n * m}. The remaining number is ${n * m} − ${S} = ${last}.`);
  };
  G.stats4 = (R) => {
    const n = R.pick([100, 200, 250, 400]);
    const N = n * R.int(5, 12);
    const k = Math.round((R.int(20, 70) * n) / 100);
    const est = (k * N) / n;
    return build(R, `A random sample of ${n} students from a school of ${N} found that ${k} prefer digital textbooks. Which is the best estimate of the number of students in the school who prefer digital textbooks?`, est,
      [k, N - est, est + n, Math.round(N / k)].map(fmt),
      `${k} of ${n} is ${fmt((k / n) * 100)}%. Applying that proportion to the whole school: ${fmt(k / n)} × ${N} = ${est}.`);
  };

  /* ----- Area, perimeter & volume ----- */
  G.area1 = (R) => {
    const L = R.int(5, 14);
    const W = R.int(3, L - 1);
    const P = 2 * (L + W);
    return build(R, `A rectangle has a perimeter of ${P} and a length of ${L}. What is its area?`, L * W,
      [L * L, L * (L + W), 2 * L * W, L * W - L],
      `The length and width add up to ${P} ÷ 2 = ${L + W}, so the width is ${L + W} − ${L} = ${W}. Area = ${L} × ${W} = ${L * W}.`);
  };
  G.area2 = (R) => {
    const r = R.int(2, 12);
    return build(R, `A circle has a diameter of ${2 * r}. What is its area?`, `${r * r}π`, [`${4 * r * r}π`, `${2 * r}π`, `${2 * r * r}π`, `${r}π`],
      `The radius is ${2 * r} ÷ 2 = ${r}, so the area is πr² = π(${r})² = ${r * r}π.`);
  };
  G.area3 = (R) => {
    const r = R.int(2, 6);
    const h = R.int(3, 12);
    return build(R, `A cylinder has a radius of ${r} and a height of ${h}. What is its volume?`, `${r * r * h}π`,
      [`${2 * r * h}π`, `${r * h}π`, `${r * r * h * 3}π`, `${r * h * h}π`],
      `Volume = πr²h = π(${r}²)(${h}) = ${r * r * h}π.`);
  };
  G.area4 = (R) => {
    const s = R.int(3, 12);
    return build(R, `The diagonal of a square is ${s}√2. What is the area of the square?`, s * s, [2 * s * s, s, 2 * s, s * s * s],
      `A square's diagonal is its side times √2, so the side is ${s}. Area = ${s}² = ${s * s}.`);
  };
  G.area5 = (R) => {
    const V = R.int(6, 60);
    const k = R.pick([2, 3]);
    return build(R, `A rectangular box has a volume of ${V}. If each of its three dimensions is multiplied by ${k}, what is the volume of the new box?`, V * k ** 3,
      [V * k, V * k * k, V * 3 * k, V + k ** 3],
      `Multiplying every dimension by ${k} multiplies the volume by ${k}³ = ${k ** 3}. So the new volume is ${V} × ${k ** 3} = ${V * k ** 3}.`);
  };

  /* ----- Right triangles & trigonometry ----- */
  const TRIPLES = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25]];
  G.trig1 = (R) => {
    const [p, q, r] = R.pick(TRIPLES);
    const k = R.pick([1, 1, 2]);
    const [a, b, c] = [p * k, q * k, r * k];
    if (R.chance()) {
      return build(R, `A right triangle has legs of length ${a} and ${b}. What is the length of its hypotenuse?`, c, [a + b, c + 2, c - 1, b - a + c],
        `By the Pythagorean theorem, ${a}² + ${b}² = ${a * a} + ${b * b} = ${c * c}, so the hypotenuse is √${c * c} = ${c}.`);
    }
    return build(R, `A right triangle has a hypotenuse of ${c} and one leg of ${a}. What is the length of the other leg?`, b, [c - a, c + a, b + 1, b - 1],
      `${c}² − ${a}² = ${c * c} − ${a * a} = ${b * b}, so the other leg is √${b * b} = ${b}.`);
  };
  G.trig2 = (R) => {
    const [p, q, r] = R.pick(TRIPLES);
    const k = R.pick([1, 2, 3]);
    const fn = R.pick(["sin", "cos", "tan"]);
    const vals = { sin: frac(p, r), cos: frac(q, r), tan: frac(p, q) };
    const wrongs = Object.entries(vals).filter(([f]) => f !== fn).map(([, v]) => v);
    wrongs.push(frac(r, p));
    const rule = { sin: "opposite ÷ hypotenuse", cos: "adjacent ÷ hypotenuse", tan: "opposite ÷ adjacent" }[fn];
    return build(R, `In right triangle ABC, the right angle is at C, AC = ${q * k}, BC = ${p * k}, and AB = ${r * k}. What is ${fn} A?`, vals[fn], wrongs,
      `Side BC is opposite angle A, AC is adjacent to it, and AB is the hypotenuse. ${fn} A = ${rule} = ${fn === "sin" ? `${p * k}/${r * k}` : fn === "cos" ? `${q * k}/${r * k}` : `${p * k}/${q * k}`} = ${vals[fn]}.`);
  };
  G.trig3 = (R) => {
    let y = R.int(2, 16) * 5;
    if (y === 45) y = 40;
    const x = 90 - y;
    return build(R, `If sin(x°) = cos(${y}°) and 0 < x < 90, what is the value of x?`, x, [y, 90 + y > 90 ? 180 - y : 45, y + 10, x - 10].map(fmt),
      `Sine and cosine of complementary angles are equal, so x + ${y} = 90 and x = ${x}.`);
  };
  G.trig4 = (R) => {
    const kind = R.int(0, 2);
    if (kind === 0) {
      const L = R.int(3, 12);
      return build(R, `A 45-45-90 right triangle has legs of length ${L}. What is the length of its hypotenuse?`, `${L}√2`, [`${L}`, `${2 * L}`, `${L}√3`],
        `In a 45-45-90 triangle the hypotenuse is a leg times √2, so ${L}√2.`);
    }
    if (kind === 1) {
      const L = R.int(3, 12);
      return build(R, `A 45-45-90 right triangle has a hypotenuse of ${L}√2. What is the length of each leg?`, `${L}`, [`${L}√2`, `${2 * L}`, `${L / 2}`],
        `The hypotenuse is a leg times √2, so each leg is ${L}√2 ÷ √2 = ${L}.`);
    }
    const s = R.int(2, 10);
    return build(R, `In a 30-60-90 right triangle the shorter leg is ${s}. What is the length of the longer leg?`, `${s}√3`, [`${s}√2`, `${2 * s}`, `${s}`],
      `In a 30-60-90 triangle the sides are in the ratio 1 : √3 : 2, so the longer leg is ${s}√3.`);
  };
  G.trig5 = (R) => {
    if (R.chance()) {
      const a = R.int(30, 80);
      const b = R.int(30, 90);
      return build(R, `Two angles of a triangle measure ${a}° and ${b}°. What is the measure of the third angle?`, `${180 - a - b}°`, [`${360 - a - b}°`, `${90 - a}°`, `${180 - a}°`],
        `The angles of a triangle add to 180°, so the third angle is 180° − ${a}° − ${b}° = ${180 - a - b}°.`);
    }
    const A = R.pick([20, 30, 40, 50, 60, 80, 100, 120]);
    return build(R, `An isosceles triangle has a vertex angle of ${A}°. What is the measure of each base angle?`, `${(180 - A) / 2}°`, [`${180 - A}°`, `${A}°`, `${(180 - A) / 3}°`],
      `The base angles are equal and the three angles add to 180°, so each base angle is (180° − ${A}°) ÷ 2 = ${(180 - A) / 2}°.`);
  };

  /* ----- ACT-specific math ----- */
  G.actA1 = (R) => {
    for (let tries = 0; tries < 50; tries++) {
      const x = R.int(-5, 9);
      const a = R.int(3, 9);
      const c = R.int(1, a - 1);
      const b = R.int(-9, 9);
      if (!b) continue;
      const d = a * x + b - c * x;
      if (!d) continue;
      return build(R, `What is the solution to ${linStr(a, b)} = ${coef(c, "x")} ${sg(d)}?`, fmt(x), [x + 1, -x, x - 1, (d + b) / (a - c)].map(fmt),
        `Subtract ${coef(c, "x")} from both sides: ${fmt(a - c)}x ${sg(b)} = ${fmt(d)}. Then ${b > 0 ? `subtract ${b}` : `add ${-b}`}: ${fmt(a - c)}x = ${fmt(d - b)}, so x = ${fmt(x)}.`);
    }
    return null;
  };
  G.actA2 = (R) => {
    let p = R.int(-5, 6);
    if (!p) p = 3;
    const q = R.int(-9, 9);
    const n = R.int(2, 5);
    const v = n * n + p * n + q;
    return build(R, `If f(x) = ${poly(1, p, q)}, what is f(${n})?`, fmt(v), [n * n - p * n + q, n * n + p + q, n + p * n + q, v + n].map(fmt),
      `f(${n}) = ${n}² ${p < 0 ? "−" : "+"} ${Math.abs(p)}(${n}) ${sg(q)} = ${n * n} ${sg(p * n)} ${sg(q)} = ${fmt(v)}.`);
  };
  G.actA3 = (R) => {
    for (let tries = 0; tries < 50; tries++) {
      const x1 = R.int(-4, 4);
      const y1 = R.int(-5, 5);
      const dx = R.int(1, 6);
      const dy = R.int(-8, 8);
      if (!dy) continue;
      const ans = frac(dy, dx);
      return build(R, `What is the slope of the line through the points (${fmt(x1)}, ${fmt(y1)}) and (${fmt(x1 + dx)}, ${fmt(y1 + dy)})?`, ans,
        [frac(dx, dy), frac(-dy, dx), frac(dy, dx + 1), frac(dy + 1, dx)],
        `Slope = (change in y) ÷ (change in x) = (${fmt(y1 + dy)} − (${fmt(y1)})) ÷ (${fmt(x1 + dx)} − (${fmt(x1)})) = ${fmt(dy)}/${dx}${ans !== `${fmt(dy)}/${dx}` ? ` = ${ans}` : ""}.`);
    }
    return null;
  };
  G.actA4 = (R) => {
    for (let tries = 0; tries < 50; tries++) {
      const a = R.int(2, 5);
      const b = R.int(2, 6);
      const c = R.int(1, 8);
      const d = R.int(2, 5);
      const e = R.int(1, 8);
      const A = a * b - d;
      const B = d * e - a * c;
      if (!A || !B) continue;
      return build(R, `Which expression is equal to ${a}(${b}x − ${c}) − ${d}(x − ${e})?`, linStr(A, B),
        [linStr(a * b + d, -a * c - d * e), linStr(A, -a * c - d * e), linStr(a * b + d, B), linStr(A, -B)],
        `Distribute: ${a * b}x − ${a * c} − ${d}x + ${d * e}. Combine like terms: ${linStr(A, B)}.`);
    }
    return null;
  };
  G.actA5 = (R) => {
    const a = R.int(1, 9);
    const b = R.int(1, 8);
    return build(R, `What is the greater of the two solutions of |x ${sg(-a)}| = ${b}?`, fmt(a + b), [a - b, a, b, -a + b].map(fmt),
      `|x − ${a}| = ${b} means x − ${a} = ${b} or x − ${a} = −${b}, so x = ${a + b} or x = ${a - b}. The greater solution is ${a + b}.`);
  };
  G.actA6 = (R) => {
    const base = R.int(2, 4);
    const m = R.int(2, 4);
    const n = R.int(2, 4);
    const p = R.int(1, m + n - 1);
    const e = m + n - p;
    return build(R, `What is the value of (${base}${sup(m)} · ${base}${sup(n)}) / ${base}${sup(p)}?`, base ** e, [base ** (m + n + p), base ** (m * n - p), base ** (e + 1), base * e],
      `Add exponents in the numerator and subtract the denominator's: ${base}${sup(m + n - p)} = ${base ** e}.`);
  };
  G.actG1 = (R) => {
    const [p, q, r] = R.pick(TRIPLES.slice(0, 2));
    const k = R.pick([1, 2]);
    const x1 = R.int(-3, 3);
    const y1 = R.int(-3, 3);
    return build(R, `What is the distance between the points (${fmt(x1)}, ${fmt(y1)}) and (${fmt(x1 + p * k)}, ${fmt(y1 + q * k)})?`, r * k,
      [(p + q) * k, r * k + 1, q * k, (r - 1) * k],
      `The horizontal change is ${p * k} and the vertical change is ${q * k}. Distance = √(${p * k}² + ${q * k}²) = √${(r * k) ** 2} = ${r * k}.`);
  };
  G.actG2 = (R) => {
    const x1 = R.int(-8, 8) * 2;
    const x2 = R.int(-8, 8) * 2;
    const y1 = R.int(-8, 8) * 2;
    const y2 = R.int(-8, 8) * 2;
    const mid = `(${fmt((x1 + x2) / 2)}, ${fmt((y1 + y2) / 2)})`;
    return build(R, `What is the midpoint of the line segment with endpoints (${fmt(x1)}, ${fmt(y1)}) and (${fmt(x2)}, ${fmt(y2)})?`, mid,
      [`(${fmt(x1 + x2)}, ${fmt(y1 + y2)})`, `(${fmt((x2 - x1) / 2)}, ${fmt((y2 - y1) / 2)})`, `(${fmt((y1 + y2) / 2)}, ${fmt((x1 + x2) / 2)})`, `(${fmt((x1 + x2) / 2 + 1)}, ${fmt((y1 + y2) / 2)})`],
      `Average the coordinates: ((${fmt(x1)} + ${fmt(x2)}) ÷ 2, (${fmt(y1)} + ${fmt(y2)}) ÷ 2) = ${mid}.`);
  };
  G.actG3 = (R) => {
    const table = {
      "sin 30°": "1/2", "sin 45°": "√2/2", "sin 60°": "√3/2",
      "cos 30°": "√3/2", "cos 45°": "√2/2", "cos 60°": "1/2",
      "tan 30°": "√3/3", "tan 45°": "1", "tan 60°": "√3",
    };
    const key = R.pick(Object.keys(table));
    const pool = Array.from(new Set(Object.values(table)));
    return build(R, `What is the value of ${key}?`, table[key], pool.filter((v) => v !== table[key]),
      `Memorize the special-angle values: ${key} = ${table[key]}. (Sketch the 30-60-90 or 45-45-90 triangle and use SOH-CAH-TOA.)`);
  };
  G.actG4 = (R) => {
    for (let tries = 0; tries < 50; tries++) {
      const b1 = R.int(4, 12);
      const b2 = R.int(b1 + 1, 16);
      const h = R.int(3, 10);
      if (((b1 + b2) * h) % 2) continue;
      const A = ((b1 + b2) * h) / 2;
      return build(R, `A trapezoid has parallel sides of length ${b1} and ${b2} and a height of ${h}. What is its area?`, A, [b1 * b2 * h / 2, (b1 + b2) * h, b1 * h, A + h].map(fmt),
        `Area = ½(b₁ + b₂)h = ½(${b1} + ${b2})(${h}) = ${A}.`);
    }
    return null;
  };
  G.actG5 = (R) => {
    const sets = [[1, 2, 3], [2, 3, 4], [1, 3, 5], [2, 3, 5], [1, 2, 6], [3, 4, 5]];
    const [a, b, c] = R.pick(sets);
    const unit = 180 / (a + b + c);
    return build(R, `The measures of the angles of a triangle are in the ratio ${a} : ${b} : ${c}. What is the measure of the largest angle?`, `${c * unit}°`,
      [`${b * unit}°`, `${(c * 180) / (a + b)}°`.replace(/(\.\d)\d+/, "$1"), `${c * 30}°`, `${a * unit}°`],
      `The ratio has ${a + b + c} parts and the angles total 180°, so each part is ${unit}°. The largest angle is ${c} × ${unit}° = ${c * unit}°.`);
  };
  G.actG6 = (R) => {
    const r = R.int(2, 9);
    return build(R, `A circle has a circumference of ${2 * r}π. What is the area of the circle?`, `${r * r}π`, [`${2 * r}π`, `${4 * r * r}π`, `${r}π`, `${2 * r * r}π`],
      `Circumference = 2πr, so r = ${r}. Area = πr² = ${r * r}π.`);
  };
  G.actP1 = (R) => {
    const r = R.int(2, 8);
    const b = R.int(2, 8);
    const g = R.int(2, 8);
    const T = r + b + g;
    const [name, n] = R.pick([["red", r], ["blue", b], ["green", g]]);
    return build(R, `A bag contains ${r} red, ${b} blue, and ${g} green marbles. If one marble is chosen at random, what is the probability that it is ${name}?`, frac(n, T),
      [frac(n, T - n), frac(T - n, T), frac(1, 3), frac(n, T + 1)],
      `There are ${r} + ${b} + ${g} = ${T} marbles and ${n} of them are ${name}, so the probability is ${n}/${T}${frac(n, T) !== `${n}/${T}` ? ` = ${frac(n, T)}` : ""}.`);
  };
  G.actP2 = (R) => {
    const s = R.int(2, 6);
    const p = R.int(2, 6);
    const h = R.int(2, 5);
    return build(R, `A store sells ${s} styles of shirts, ${p} styles of pants, and ${h} kinds of hats. How many different outfits of one shirt, one pair of pants, and one hat are possible?`, s * p * h,
      [s + p + h, s * p, s * p * h + s, (s + p) * h],
      `Use the counting principle and multiply the number of choices: ${s} × ${p} × ${h} = ${s * p * h}.`);
  };
  G.actP3 = (R) => {
    const n1 = R.int(4, 9);
    const n2 = R.int(4, 9);
    const r1 = R.int(1, n1 - 1);
    const r2 = R.int(1, n2 - 1);
    return build(R, `Bag A has ${r1} red marbles out of ${n1} marbles, and Bag B has ${r2} red marbles out of ${n2} marbles. If one marble is drawn at random from each bag, what is the probability that both are red?`, frac(r1 * r2, n1 * n2),
      [frac(r1 + r2, n1 + n2), frac(r1, n1), frac(r2, n2), frac(r1 * r2, n1 * n2 + n1)],
      `The draws are independent, so multiply: (${r1}/${n1}) × (${r2}/${n2}) = ${r1 * r2}/${n1 * n2}${frac(r1 * r2, n1 * n2) !== `${r1 * r2}/${n1 * n2}` ? ` = ${frac(r1 * r2, n1 * n2)}` : ""}.`);
  };
  G.actP4 = (R) => {
    if (R.chance()) {
      const n = R.int(4, 6);
      const f = Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a * b, 1);
      return build(R, `In how many different orders can ${n} students stand in a line?`, f, [n * n, n * (n - 1), f / n, f * n],
        `There are ${Array.from({ length: n }, (_, i) => n - i).join(" × ")} = ${f} arrangements.`);
    }
    const n = R.int(5, 8);
    const c = (n * (n - 1)) / 2;
    return build(R, `A club of ${n} members will choose a committee of 2 members. How many different committees are possible?`, c, [n * (n - 1), n * 2, n * n, c + n],
      `The order does not matter, so use combinations: ${n} × ${n - 1} ÷ 2 = ${c}.`);
  };
  G.actP5 = (R) => {
    const d = R.pick([5, 8, 10, 12]);
    const n = R.int(1, d - 1);
    return build(R, `A spinner has ${d} equal sections. The probability that it lands on blue is ${frac(n, d)}. What is the probability that it does NOT land on blue?`, frac(d - n, d),
      [frac(n, d), frac(1, d), frac(d - n, d + 1), frac(n + 1, d)],
      `The probabilities of an event and its complement add to 1, so P(not blue) = 1 − ${frac(n, d)} = ${frac(d - n, d)}.`);
  };

  const SAT_POOLS = {
    lin: [G.lin1, G.lin2, G.lin3, G.lin4, G.lin5],
    sys: [G.sys1, G.sys2, G.sys3, G.sys4],
    quad: [G.quad1, G.quad2, G.quad3, G.quad4, G.quad5],
    expo: [G.expo1, G.expo2, G.expo3, G.expo4, G.expo5],
    ratio: [G.ratio1, G.ratio2, G.ratio3, G.ratio4],
    stats: [G.stats1, G.stats2, G.stats3, G.stats4],
    area: [G.area1, G.area2, G.area3, G.area4, G.area5],
    trig: [G.trig1, G.trig2, G.trig3, G.trig4, G.trig5],
  };
  const ACT_POOLS = {
    alg: [G.actA1, G.actA2, G.actA3, G.actA4, G.actA5, G.actA6, G.lin1, G.lin3, G.lin5, G.sys1, G.sys2, G.sys3, G.quad1, G.quad4, G.ratio1, G.ratio4, G.expo2],
    geo: [G.area1, G.area2, G.area3, G.area5, G.trig1, G.trig2, G.trig4, G.trig5, G.actG1, G.actG2, G.actG3, G.actG4, G.actG5, G.actG6],
    prob: [G.stats1, G.stats2, G.stats3, G.stats4, G.actP1, G.actP2, G.actP3, G.actP4, G.actP5],
  };
  AP.mathPools = { SAT: SAT_POOLS, ACT: ACT_POOLS };
  AP.mathGenerators = G;

  // Returns a generated question for the skill, or null when the skill has no generator.
  AP.generateMath = (exam, skill, R = AP.rng) => {
    const pool = (AP.mathPools[exam] || {})[skill];
    if (!pool) return null;
    for (let tries = 0; tries < 20; tries++) {
      const made = R.pick(pool)(R);
      if (made && made.choices.length === 4) return made;
    }
    return null;
  };
})();
