(() => {
  const S = "Math & Computer Science";
  const KA = (label, path) => [label, `https://www.khanacademy.org${path}`];

  /* ---------- AP Calculus AB ---------- */
  apAdd({
    id: "ap-calcab", name: "AP Calculus AB", section: S, slug: "ap-calculus-ab",
    blurb: "Limits, derivatives, integrals, and their applications.",
    about: "A first-year college calculus course on limits, differentiation, integration, and how rates of change and accumulation model the real world. You'll justify answers with clear mathematical reasoning, not just compute them.",
    units: ["Limits and continuity", "Differentiation: definition and basic rules", "Differentiation: composite, implicit, and inverse functions", "Contextual applications of differentiation", "Analytical applications of differentiation", "Integration and accumulation of change", "Differential equations", "Applications of integration"],
    tips: ["Show the setup and the theorem you are using when a free-response question asks you to justify.", "Always include units in answers to word problems.", "Know the Fundamental Theorem of Calculus in both of its forms."],
    links: [KA("Khan Academy: AP Calculus AB", "/math/ap-calculus-ab")],
    skills: [
      { id: "limits", name: "Limits and continuity", lesson: "A limit describes the value a function approaches as x gets close to a point. Many limits come from direct substitution, factoring, or simplifying. A function is continuous at a point when the limit exists, the function is defined there, and the two are equal.",
        points: ["If substitution gives 0/0, factor or simplify and try again.", "A limit exists only if the left-hand and right-hand limits agree.", "Continuity needs three things: f(a) exists, the limit exists, and they match.", "lim x→0 of sin(x)/x = 1."], tips: ["Try substitution first, then algebra.", "Check both one-sided limits for piecewise functions."] },
      { id: "deriv", name: "Differentiation rules", lesson: "The derivative gives the instantaneous rate of change and the slope of the tangent line. Use the power, product, quotient, and chain rules to differentiate, and implicit differentiation when y is not isolated.",
        points: ["Power rule: d/dx xⁿ = n·xⁿ⁻¹.", "Product rule: (fg)′ = f′g + fg′.", "Chain rule: d/dx f(g(x)) = f′(g(x))·g′(x).", "d/dx eˣ = eˣ, d/dx ln x = 1/x, d/dx sin x = cos x."], tips: ["Name the rule you are using before you differentiate.", "Don't forget the inner derivative in the chain rule."] },
      { id: "apps", name: "Applications of derivatives", lesson: "Derivatives tell you where a function increases or decreases (sign of f′), where it is concave up or down (sign of f″), and where it has extrema. In motion problems velocity is the derivative of position and acceleration is the derivative of velocity.",
        points: ["f′ > 0 means increasing; f′ < 0 means decreasing.", "A local extremum can occur where f′ = 0 or is undefined and the sign changes.", "Concavity changes where f″ changes sign (inflection point).", "A particle is at rest when velocity = 0."], tips: ["Make a sign chart for f′ and f″.", "Justify extrema using the sign change, not just f′ = 0."] },
      { id: "integ", name: "Integration and accumulation", lesson: "The definite integral measures net accumulation and area under a curve. The Fundamental Theorem of Calculus links derivatives and integrals: the integral of a rate of change over an interval is the net change.",
        points: ["∫ xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ −1.", "FTC Part 2: ∫ from a to b of f(x) dx = F(b) − F(a).", "FTC Part 1: d/dx of ∫ from a to x of f(t) dt = f(x).", "Don't forget + C on indefinite integrals."], tips: ["Check by differentiating your antiderivative.", "Area between curves = top − bottom."] },
    ],
    placement: [
      ["limits", "What is the limit as x approaches 2 of (x² − 4)/(x − 2)?", ["0", "2", "4", "The limit does not exist"], 2, "Factor the numerator: (x − 2)(x + 2)/(x − 2) = x + 2 for x ≠ 2, so the limit is 2 + 2 = 4."],
      ["deriv", "What is the derivative of f(x) = x² sin x?", ["2x cos x", "2x sin x + x² cos x", "x² cos x", "2x sin x − x² cos x"], 1, "Use the product rule: (x²)(sin x)′ + (sin x)(x²)′ = x² cos x + 2x sin x."],
      ["apps", "Let f(x) = x³ − 3x. On which interval is f decreasing?", ["x < −1", "−1 < x < 1", "x > 1", "All real numbers"], 1, "f′(x) = 3x² − 3 = 3(x − 1)(x + 1), which is negative between −1 and 1."],
      ["integ", "What is the value of the integral from 0 to 2 of 3x² dx?", ["4", "6", "8", "12"], 2, "An antiderivative is x³. Evaluate: 2³ − 0³ = 8."],
    ],
    practice: [
      ["limits", "What is the limit as x approaches 0 of sin(3x)/x?", ["0", "1", "3", "1/3"], 2, "Rewrite as 3·sin(3x)/(3x). Since sin(u)/u → 1, the limit is 3."],
      ["deriv", "What is the slope of the tangent line to y = e^(2x) at x = 0?", ["0", "1", "2", "e²"], 2, "dy/dx = 2e^(2x) by the chain rule. At x = 0 this is 2."],
      ["apps", "A particle's position is s(t) = t³ − 6t² + 9t. At what times is its velocity zero?", ["t = 1 only", "t = 1 and t = 3", "t = 3 only", "t = 0 and t = 3"], 1, "v(t) = 3t² − 12t + 9 = 3(t − 1)(t − 3), which is zero at t = 1 and t = 3."],
      ["integ", "What is d/dx of the integral from 1 to x of t² dt?", ["x³/3", "x²", "2x", "x² − 1"], 1, "By the first part of the Fundamental Theorem of Calculus, the derivative of ∫ from 1 to x of f(t) dt is f(x) = x²."],
    ],
  });

  /* ---------- AP Calculus BC ---------- */
  apAdd({
    id: "ap-calcbc", name: "AP Calculus BC", section: S, slug: "ap-calculus-bc",
    blurb: "All of Calculus AB plus series, parametric, polar, and more integration techniques.",
    about: "A more extensive course than Calculus AB. It covers all AB topics and adds infinite series, parametric and polar functions, vector-valued functions, and additional integration techniques.",
    units: ["Limits and continuity", "Differentiation (basic, composite, implicit, inverse)", "Applications of differentiation", "Integration and accumulation of change", "Differential equations", "Applications of integration", "Parametric equations, polar coordinates, and vector-valued functions", "Infinite sequences and series"],
    tips: ["Know the convergence tests and what each one needs.", "Practice integration by parts and partial fractions until they feel automatic.", "Memorize the Maclaurin series for eˣ, sin x, cos x, and 1/(1 − x)."],
    links: [KA("Khan Academy: AP Calculus BC", "/math/ap-calculus-bc")],
    skills: [
      { id: "diff", name: "Limits and differentiation", lesson: "BC builds on AB: limits, continuity, and every derivative rule apply. You also use L'Hôpital's rule for indeterminate forms and work with implicit and inverse-function derivatives.",
        points: ["L'Hôpital's rule applies to 0/0 or ∞/∞ forms.", "Chain rule: d/dx ln(g(x)) = g′(x)/g(x).", "Limits at infinity compare the leading terms."], tips: ["Check that the form is indeterminate before using L'Hôpital.", "Simplify before differentiating when you can."] },
      { id: "techniques", name: "Integration techniques", lesson: "Beyond substitution, BC uses integration by parts, partial fractions, and improper integrals. Integration by parts reverses the product rule and works well when one factor gets simpler when differentiated.",
        points: ["Integration by parts: ∫ u dv = uv − ∫ v du.", "u-substitution reverses the chain rule.", "Partial fractions split a rational function into simpler terms.", "Improper integrals are evaluated as limits."], tips: ["Choose u so that du is simpler (LIATE is a handy guide).", "Write the substitution and change the limits of integration."] },
      { id: "series", name: "Infinite series", lesson: "A series converges when its partial sums approach a finite value. Use the p-series, geometric, ratio, comparison, integral, and alternating series tests, and use Taylor and Maclaurin polynomials to approximate functions.",
        points: ["A p-series Σ 1/nᵖ converges if p > 1.", "A geometric series Σ arⁿ converges if |r| < 1, to a/(1 − r).", "Maclaurin series for eˣ = 1 + x + x²/2! + x³/3! + …", "If terms don't approach 0, the series diverges."], tips: ["State the test you use and check its conditions.", "Learn the common series so you can build new ones."] },
      { id: "param", name: "Parametric, polar, and vector functions", lesson: "For parametric curves x(t), y(t), the slope is (dy/dt)/(dx/dt). For vector-valued motion, velocity is the derivative of position and speed is the magnitude of the velocity vector.",
        points: ["dy/dx = (dy/dt)/(dx/dt).", "Speed = √((dx/dt)² + (dy/dt)²).", "Polar area = ½ ∫ r² dθ.", "Arc length (parametric) = ∫ √((dx/dt)² + (dy/dt)²) dt."], tips: ["Keep dx/dt and dy/dt organized in a small table.", "Speed is a magnitude, so it is never negative."] },
    ],
    placement: [
      ["diff", "What is the derivative of ln(x² + 1)?", ["1/(x² + 1)", "2x/(x² + 1)", "2x·ln(x² + 1)", "(x² + 1)/2x"], 1, "By the chain rule the derivative is (1/(x² + 1))·2x = 2x/(x² + 1)."],
      ["techniques", "What is ∫ x eˣ dx?", ["x eˣ + C", "x eˣ − eˣ + C", "eˣ + C", "x²eˣ/2 + C"], 1, "Use integration by parts with u = x and dv = eˣ dx: x eˣ − ∫ eˣ dx = x eˣ − eˣ + C."],
      ["series", "Which of the following series converges?", ["Σ 1/n", "Σ 1/√n", "Σ 1/n²", "Σ n/(n + 1)"], 2, "Σ 1/n² is a p-series with p = 2 > 1, so it converges. Σ 1/n and Σ 1/√n have p ≤ 1 and diverge, and the terms of Σ n/(n + 1) approach 1, not 0."],
      ["param", "A curve is given by x = t² and y = t³. What is dy/dx at t = 1?", ["2/3", "3/2", "1", "6"], 1, "dy/dt = 3t² = 3 and dx/dt = 2t = 2 at t = 1, so dy/dx = 3/2."],
    ],
    practice: [
      ["diff", "What is the limit as x → ∞ of (3x² + 1)/(x² − 5)?", ["0", "1", "3", "∞"], 2, "Divide the numerator and denominator by x²: the limit is 3/1 = 3."],
      ["techniques", "What is the value of the integral from 0 to 1 of 2x/(x² + 1) dx?", ["ln 2", "1", "2 ln 2", "π/4"], 0, "Let u = x² + 1, du = 2x dx. The integral is ln(x² + 1) from 0 to 1 = ln 2 − ln 1 = ln 2."],
      ["series", "In the Maclaurin series for eˣ, what is the coefficient of x³?", ["1/3", "1/6", "1/2", "6"], 1, "The coefficient of xⁿ in the series for eˣ is 1/n!, so for n = 3 it is 1/6."],
      ["param", "A particle moves with x(t) = 3t and y(t) = 4t. What is its speed?", ["3", "4", "5", "7"], 2, "Speed = √((3)² + (4)²) = √25 = 5."],
    ],
  });

  /* ---------- AP Precalculus ---------- */
  apAdd({
    id: "ap-precalc", name: "AP Precalculus", section: S, slug: "ap-precalculus",
    blurb: "Functions and modeling: polynomial, rational, exponential, logarithmic, and trigonometric.",
    about: "A course on the functions that prepare you for calculus. You study how polynomial, rational, exponential, logarithmic, trigonometric, and polar functions behave and use them to model real situations.",
    units: ["Polynomial and rational functions", "Exponential and logarithmic functions", "Trigonometric and polar functions", "Functions involving parameters, vectors, and matrices (check the official page for what the AP Exam assesses)"],
    tips: ["Know how a graph changes when you transform the equation.", "Practice moving between a table, a graph, and an equation.", "Be comfortable with radians and the unit circle."],
    links: [KA("Khan Academy: Precalculus", "/math/precalculus")],
    skills: [
      { id: "poly", name: "Polynomial and rational functions", lesson: "The zeros of a polynomial are where its graph crosses the x-axis, and its degree and leading coefficient determine end behavior. Rational functions can have vertical asymptotes (where the denominator is zero) and horizontal asymptotes (from comparing degrees).",
        points: ["Zeros come from factoring.", "Odd degree: the ends go in opposite directions.", "Rational: equal degrees give horizontal asymptote y = (leading coefficient ratio).", "A vertical asymptote occurs where only the denominator is zero."], tips: ["Factor completely before reading zeros and holes.", "Check end behavior with the leading term."] },
      { id: "exp", name: "Exponential and logarithmic functions", lesson: "Exponential functions model constant percent growth or decay, written f(t) = a·bᵗ. A logarithm is the inverse: log_b(x) is the exponent you put on b to get x.",
        points: ["log_b(x) = y means bʸ = x.", "log(ab) = log a + log b, log(a/b) = log a − log b, log(aⁿ) = n·log a.", "f(t) = a(1 + r)ᵗ has growth rate r per period.", "Use logs to solve for an unknown exponent."], tips: ["Rewrite a log equation as an exponential and vice versa.", "Read the base b to find the growth or decay rate."] },
      { id: "trig", name: "Trigonometric and polar functions", lesson: "Angles are measured in radians as well as degrees; π radians equals 180°. For y = a·sin(bx + c) + d, |a| is the amplitude, 2π/b is the period, and d is the midline.",
        points: ["Convert degrees to radians by multiplying by π/180.", "Period of sin(bx) = 2π/|b|.", "sin²x + cos²x = 1.", "Polar coordinates (r, θ) describe a point by distance and angle."], tips: ["Memorize the unit circle values for 0, π/6, π/4, π/3, π/2.", "Sketch one period when you analyze a sinusoid."] },
      { id: "transform", name: "Transformations and modeling", lesson: "Transformations move and reshape graphs. g(x) = f(x − h) + k shifts the graph of f right h and up k, a negative sign outside reflects across the x-axis, and one inside reflects across the y-axis. Modeling means choosing a function family that fits data.",
        points: ["f(x − h) shifts right; f(x + h) shifts left.", "−f(x) reflects over the x-axis; f(−x) reflects over the y-axis.", "a·f(x) stretches vertically by a factor of |a|.", "Match the function family to the data pattern."], tips: ["Do horizontal changes in the opposite direction of the sign.", "Test a model against a data point."] },
    ],
    placement: [
      ["poly", "What are the zeros of f(x) = x² − 5x + 6?", ["x = −2 and x = −3", "x = 2 and x = 3", "x = 1 and x = 6", "x = −1 and x = −6"], 1, "Factor: (x − 2)(x − 3) = 0, so x = 2 or x = 3."],
      ["exp", "What is the value of log₂ 32?", ["4", "5", "16", "30"], 1, "2⁵ = 32, so log₂ 32 = 5."],
      ["trig", "What is 150° expressed in radians?", ["5π/6", "2π/3", "3π/4", "7π/6"], 0, "150 × π/180 = 5π/6."],
      ["transform", "The graph of g(x) = f(x − 3) + 2 is the graph of f shifted how?", ["Left 3 and up 2", "Right 3 and up 2", "Right 3 and down 2", "Left 3 and down 2"], 1, "Replacing x with x − 3 shifts the graph right 3, and adding 2 shifts it up 2."],
    ],
    practice: [
      ["poly", "What is the horizontal asymptote of f(x) = (3x² + 1)/(x² − 4)?", ["y = 0", "y = 1", "y = 3", "There is none"], 2, "The degrees match, so the horizontal asymptote is the ratio of leading coefficients: 3/1 = 3."],
      ["exp", "The function f(t) = 500(1.04)ᵗ models a quantity over t years. What is the annual growth rate?", ["1.04%", "4%", "40%", "104%"], 1, "A factor of 1.04 per year means a 4% increase each year."],
      ["trig", "What is the period of y = 3 sin(2x)?", ["2π", "π", "π/2", "3"], 1, "Period = 2π/b = 2π/2 = π."],
      ["transform", "How does the graph of g(x) = f(−x) compare with the graph of f?", ["Reflected over the x-axis", "Reflected over the y-axis", "Shifted left", "Stretched vertically"], 1, "Replacing x with −x reflects the graph across the y-axis."],
    ],
  });

  /* ---------- AP Statistics ---------- */
  apAdd({
    id: "ap-stats", name: "AP Statistics", section: S, slug: "ap-statistics",
    blurb: "Collecting, describing, and drawing conclusions from data.",
    about: "An introduction to the major concepts and tools for collecting, analyzing, and drawing conclusions from data. You explore data, plan studies, work with probability and distributions, and perform inference.",
    units: ["Exploring one-variable data", "Exploring two-variable data", "Collecting data", "Probability, random variables, and probability distributions", "Sampling distributions", "Inference for proportions", "Inference for means", "Chi-square tests", "Inference for slopes"],
    tips: ["Write conclusions in context, not just in statistical language.", "Always check the conditions for a procedure before using it.", "Name your procedure, state hypotheses, check conditions, compute, and conclude."],
    links: [KA("Khan Academy: AP Statistics", "/math/ap-statistics")],
    skills: [
      { id: "explore", name: "Exploring data", lesson: "Describe distributions by their shape, center, spread, and unusual features. The median and IQR resist outliers, while the mean and standard deviation do not. For two quantitative variables, use scatterplots, correlation, and regression.",
        points: ["Use median and IQR for skewed data or outliers.", "Correlation r is between −1 and 1 and measures linear strength only.", "Correlation does not imply causation.", "A residual = actual y − predicted y."], tips: ["Always describe shape, center, spread, and outliers.", "Interpret slope and intercept in context."] },
      { id: "collect", name: "Collecting data", lesson: "How data are collected determines what conclusions you can draw. Random sampling allows you to generalize to a population, and random assignment in an experiment allows cause-and-effect conclusions.",
        points: ["Observational studies show association, not causation.", "Experiments impose treatments and use random assignment.", "Sampling methods: simple random, stratified, cluster, systematic.", "Bias comes from poor sampling or poorly worded questions."], tips: ["Say whether the study is an experiment or an observational study.", "Use a control group or placebo when appropriate."] },
      { id: "prob", name: "Probability and distributions", lesson: "Probability is a long-run relative frequency. For independent events, P(A and B) = P(A)·P(B). A z-score tells how many standard deviations a value is from the mean, which lets you use the normal distribution.",
        points: ["z = (x − mean)/standard deviation.", "Independent: P(A and B) = P(A)·P(B).", "P(not A) = 1 − P(A).", "Empirical rule: about 68%, 95%, 99.7% within 1, 2, 3 SD."], tips: ["Sketch and shade the normal curve.", "State which probability rule you are using."] },
      { id: "infer", name: "Statistical inference", lesson: "Confidence intervals estimate a population parameter, and significance tests assess evidence against a claim. A small p-value (less than the significance level) gives evidence against the null hypothesis.",
        points: ["A 95% CI means the method captures the true value in about 95% of samples.", "Reject H₀ if p-value < α.", "Fail to reject does not prove H₀ is true.", "Check conditions: random, independent (10% rule), large counts or normality."], tips: ["Write conclusions in context and link them to the p-value.", "Never say 'accept the null'."] },
    ],
    placement: [
      ["explore", "For the data set 2, 4, 6, 8, 100, which measure of center is least affected by the outlier?", ["Mean", "Median", "Range", "Standard deviation"], 1, "The median is resistant to extreme values. The mean, range, and standard deviation are all pulled by the 100."],
      ["collect", "A researcher randomly assigns 40 patients to receive either a new drug or a placebo and compares results. This is best described as", ["An observational study", "A sample survey", "A randomized experiment", "A census"], 2, "The researcher imposes treatments and assigns them at random, which is a randomized experiment."],
      ["prob", "Test scores are approximately normal with mean 70 and standard deviation 5. What is the z-score for a score of 80?", ["1", "2", "5", "10"], 1, "z = (80 − 70)/5 = 2."],
      ["infer", "A 95% confidence interval for a population mean is (12, 18). Which statement is the best interpretation?", ["95% of the data lie between 12 and 18", "We are 95% confident that the true population mean is between 12 and 18", "There is a 95% chance the sample mean is between 12 and 18", "The mean is exactly 15"], 1, "A confidence interval is an interval estimate for the population parameter. It makes no claim about 95% of the individual data values."],
    ],
    practice: [
      ["explore", "A correlation coefficient of r = −0.9 indicates", ["A weak negative linear relationship", "A strong negative linear relationship", "A strong positive linear relationship", "No relationship of any kind"], 1, "The sign is negative and the magnitude 0.9 is close to 1, so the linear relationship is strong and negative."],
      ["collect", "A pollster selects a random starting point on a list of voters, then surveys every 10th voter. This is a", ["Simple random sample", "Stratified sample", "Systematic sample", "Cluster sample"], 2, "Selecting every kth individual after a random start is a systematic sample."],
      ["prob", "Events A and B are independent with P(A) = 0.4 and P(B) = 0.5. What is P(A and B)?", ["0.9", "0.20", "0.10", "0.45"], 1, "For independent events multiply: 0.4 × 0.5 = 0.20."],
      ["infer", "A test of H₀: p = 0.5 gives a p-value of 0.03. At a significance level of α = 0.05, the correct conclusion is to", ["Fail to reject H₀", "Reject H₀ and conclude there is evidence against it", "Accept H₀ as true", "Conclude p equals 0.03"], 1, "Since 0.03 < 0.05, reject H₀. This gives convincing evidence against the null hypothesis."],
    ],
  });

  /* ---------- AP Computer Science A ---------- */
  apAdd({
    id: "ap-csa", name: "AP Computer Science A", section: S, slug: "ap-computer-science-a",
    blurb: "Programming in Java: objects, classes, control flow, and data collections.",
    about: "An introductory college-level course in computer science focused on object-oriented programming in Java. You design, write, trace, and analyze programs.",
    units: ["Using objects and methods", "Selection and iteration", "Class creation", "Data collections (arrays, ArrayList, and more)"],
    tips: ["Practice tracing code by hand and write the value of each variable as it changes.", "Know integer division and the modulus operator cold.", "Check the official page for the current topic list, since the course framework has been updated."],
    links: [],
    skills: [
      { id: "basics", name: "Primitive types and control flow", lesson: "Java has primitive types such as int, double, and boolean. Integer division discards the remainder, and % gives the remainder. Selection (if/else) and iteration (for/while) control the flow of a program.",
        points: ["int / int is integer division (7 / 2 is 3).", "7 % 3 is 1, the remainder.", "Mixing int and double produces a double.", "&& is 'and', || is 'or', ! is 'not'."], tips: ["Trace loops with a table of variable values.", "Watch for off-by-one errors in loop bounds."] },
      { id: "classes", name: "Classes and objects", lesson: "A class defines the data (instance variables) and behavior (methods) of objects. Instance variables are usually private (encapsulation), and constructors initialize new objects. String objects are immutable, and + concatenates strings.",
        points: ["Make instance variables private and provide accessor/mutator methods.", "A constructor has the same name as the class and no return type.", "Strings are immutable; methods return new strings.", "\"AP\" + 1 + 2 is \"AP12\" because + concatenates left to right."], tips: ["Distinguish a class from an object.", "Remember that static methods belong to the class."] },
      { id: "collections", name: "Arrays and ArrayLists", lesson: "An array has a fixed size and zero-based indexes. An ArrayList can grow and shrink, with methods like add, get, set, remove, and size. Traverse either with a for loop or an enhanced for loop.",
        points: ["Array indexes run from 0 to length − 1.", "add(index, value) inserts and shifts later elements right.", "ArrayList uses size(), arrays use length.", "Going past the last index causes an ArrayIndexOutOfBoundsException."], tips: ["Check loop start and end values against the indexes.", "Be careful removing items while looping."] },
      { id: "inherit", name: "Inheritance, recursion, and algorithms", lesson: "A subclass inherits from a superclass and can override its methods. With polymorphism, the version of a method that runs depends on the actual object type. A recursive method calls itself with a smaller problem and needs a base case.",
        points: ["Overridden methods use the runtime (actual) type.", "Every recursive method needs a base case.", "Binary search needs a sorted array and halves the range each step.", "Selection and insertion sort are common sorting algorithms."], tips: ["Identify the base case first when tracing recursion.", "Draw the call stack for small inputs."] },
    ],
    placement: [
      ["basics", "What is printed by the following code?", ["3", "3.5", "4", "3.0"], 0, "Both operands are ints, so 7 / 2 is integer division and evaluates to 3.", "int x = 7;\nint y = 2;\nSystem.out.println(x / y);"],
      ["classes", "What is printed by the following code?", ["AP3", "AP12", "AP 12", "It does not compile"], 1, "The + operator concatenates strings from left to right, so \"AP\" + 1 gives \"AP1\" and then + 2 gives \"AP12\".", "String s = \"AP\";\ns = s + 1 + 2;\nSystem.out.println(s);"],
      ["collections", "What is the value of sum after the code runs?", ["12", "14", "18", "20"], 2, "The loop starts at index 1, so it adds 4 + 6 + 8 = 18. The first element 2 is skipped.", "int[] a = {2, 4, 6, 8};\nint sum = 0;\nfor (int i = 1; i < a.length; i++) {\n  sum += a[i];\n}"],
      ["inherit", "What is the value of f(4)?", ["10", "16", "24", "120"], 2, "f(4) = 4 · f(3) = 4 · 3 · f(2) = 4 · 3 · 2 · f(1) = 4 · 3 · 2 · 1 = 24.", "public static int f(int n) {\n  if (n <= 1) return 1;\n  return n * f(n - 1);\n}"],
    ],
    practice: [
      ["basics", "What is printed by the following statement?", ["1", "3", "3.5", "4"], 1, "7 % 3 is 1 (the remainder) and 10 / 4 is 2 (integer division), so the sum is 3.", "System.out.println(7 % 3 + 10 / 4);"],
      ["classes", "Which design principle is followed when the instance variables of a class are declared private?", ["Inheritance", "Encapsulation", "Recursion", "Polymorphism"], 1, "Hiding data behind private variables and exposing it only through methods is encapsulation."],
      ["collections", "What is printed by the following code?", ["[5, 7, 9]", "[5, 9, 7]", "[9, 5, 7]", "[5, 7]"], 1, "add(1, 9) inserts 9 at index 1 and shifts 7 to index 2, giving [5, 9, 7].", "ArrayList<Integer> list = new ArrayList<Integer>();\nlist.add(5);\nlist.add(7);\nlist.add(1, 9);\nSystem.out.println(list);"],
      ["inherit", "What is printed by the following code?", ["A", "B", "AB", "It does not compile"], 1, "The object is actually a B, so the overridden show method in B runs (runtime polymorphism).", "class A { void show() { System.out.println(\"A\"); } }\nclass B extends A { void show() { System.out.println(\"B\"); } }\n// elsewhere:\nA obj = new B();\nobj.show();"],
    ],
  });

  /* ---------- AP Computer Science Principles ---------- */
  apAdd({
    id: "ap-csp", name: "AP Computer Science Principles", section: S, slug: "ap-computer-science-principles",
    blurb: "The big ideas of computing: creativity, data, algorithms, the Internet, and impact.",
    about: "A broad introduction to computer science that covers the big ideas of computing and how it affects the world. You build programs, work with data, and study the Internet and the social impact of computing.",
    units: ["Creative development", "Data", "Algorithms and programming", "Computer systems and networks", "Impact of computing"],
    tips: ["The Create performance task is a program you design and write, so start early and document your process.", "Know how to read and trace the exam's pseudocode.", "Be ready to explain the impact of computing on society."],
    links: [KA("Khan Academy: AP Computer Science Principles", "/computing/ap-computer-science-principles")],
    skills: [
      { id: "create", name: "Creative development", lesson: "Programs are built through an iterative process of designing, prototyping, testing, and refining, often with collaboration. Abstraction, such as procedures, reduces complexity by hiding details.",
        points: ["Iterative development repeats design, build, test, and refine.", "Procedures reduce repetition and manage complexity.", "Testing uses a variety of inputs, including edge cases.", "Collaboration brings in different perspectives."], tips: ["Document the purpose and function of your program.", "Test with both normal and unexpected inputs."] },
      { id: "data", name: "Data and information", lesson: "Computers store information as bits (0 or 1). With n bits you can represent 2ⁿ different values. Lossless compression lets you rebuild the original exactly, while lossy compression discards some data to save more space.",
        points: ["n bits can represent 2ⁿ values.", "Lossless: the original data can be fully recovered.", "Lossy: some data is permanently lost.", "Metadata is data about data."], tips: ["For 'how many bits' questions find the smallest n with 2ⁿ ≥ the number of values.", "Match the compression type to whether exactness matters."] },
      { id: "algo", name: "Algorithms and programming", lesson: "An algorithm is a step-by-step procedure. Linear search checks each item in order, while binary search needs a sorted list and halves the search range each time. Some problems are too hard to solve exactly, so a heuristic gives a good-enough answer.",
        points: ["Linear search worst case checks every item.", "Binary search requires sorted data.", "A heuristic is an approximate approach when exact is impractical.", "Sequencing, selection, and iteration are the building blocks of algorithms."], tips: ["Trace the pseudocode with a small example.", "Know the difference between an algorithm and a program."] },
      { id: "systems", name: "Systems, networks, and impact", lesson: "The Internet is a network of networks that uses open protocols such as TCP/IP. TCP provides reliable delivery by breaking data into packets and resending lost ones. Computing also raises issues such as the digital divide, privacy, and bias.",
        points: ["Data travels in packets that may take different routes.", "TCP provides reliable delivery; IP handles addressing and routing.", "The digital divide is the gap in access to technology.", "Cybersecurity uses encryption and multi-factor authentication."], tips: ["Connect each concept to a real-world example.", "Know both the benefits and harms of a technology."] },
    ],
    placement: [
      ["create", "Which of the following is the main benefit of using procedures in a program?", ["They make the program run faster in every case", "They reduce repetition and help manage complexity", "They remove the need for testing", "They guarantee the program has no errors"], 1, "A procedure is an abstraction that lets you reuse code and hide details, which reduces repeated code and complexity. It does not remove the need for testing."],
      ["data", "A program must assign a different binary code to each of 20 items. What is the minimum number of bits needed?", ["4", "5", "10", "20"], 1, "4 bits give only 16 values, but 5 bits give 32, which is enough for 20."],
      ["algo", "A list contains 1000 unsorted items. In the worst case, how many items must a linear search check to find a value or decide it is absent?", ["10", "500", "1000", "1,000,000"], 2, "A linear search may have to check every item, so the worst case is 1000."],
      ["systems", "Which protocol is designed to provide reliable delivery of data across the Internet by resending lost packets?", ["TCP", "HTML", "HTTP", "DNS"], 0, "TCP breaks data into packets and uses acknowledgments to resend any that are lost."],
    ],
    practice: [
      ["create", "Which best describes an iterative development process?", ["Writing the whole program once and never changing it", "Repeating cycles of designing, building, testing, and refining", "Testing only after the program is finished", "Copying another person's code"], 1, "Iterative development moves through repeated cycles of design, prototype, test, and improvement."],
      ["data", "Which statement describes lossy compression?", ["It can always rebuild the original data exactly", "It reduces file size by permanently discarding some data", "It increases the file size", "It encrypts the data"], 1, "Lossy compression saves space by discarding information that can't be recovered, as in a JPEG or MP3."],
      ["algo", "A heuristic is most useful when", ["An exact solution is easy to find quickly", "An exact solution would take an unreasonable amount of time", "The data is already sorted", "The algorithm has no loops"], 1, "A heuristic finds a good-enough answer when the exact solution is impractical to compute."],
      ["systems", "The 'digital divide' refers to", ["The difference between binary and decimal numbers", "The gap between people who do and do not have access to computing and the Internet", "Splitting a program into procedures", "A type of network error"], 1, "The digital divide describes unequal access to computers and the Internet across groups and regions."],
    ],
  });
})();
