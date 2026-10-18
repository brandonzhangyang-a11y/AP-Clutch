window.PREP_DOCS = window.PREP_DOCS || {};
Object.assign(PREP_DOCS, {
  "sat-algebra:lin": {
    "deep": [
      "Every linear equation question is a balance puzzle: whatever you do to one side, you must do to the other. Start by clearing parentheses with the distributive property, then combine like terms on each side separately, then gather variable terms on one side and constants on the other. Divide by the coefficient last. On the SAT, resist doing three steps in your head; writing one line per move prevents sign errors. If the answer choices are numbers, you can substitute them back in, but algebra is usually faster once you are practiced.",
      "Many questions are really about meaning, not solving. In y = mx + b, m is the rate of change (how much y changes for each one-unit increase in x) and b is the starting value. When a word problem says \"a $25 fee plus $18 per month,\" the fee is b and the monthly charge is m. If a question asks what a number \"represents,\" tie it to its units. Parallel lines share a slope; perpendicular lines have slopes that are negative reciprocals. Slope between two points is rise over run: (y2 − y1) ÷ (x2 − x1).",
      "Inequalities follow the same steps with one extra rule: multiplying or dividing by a negative number flips the inequality sign. Read the wording closely: \"at most\" means ≤, \"at least\" means ≥, and \"fewer than\" means <. When the problem asks for a count of whole items, solve for the boundary and then round in the direction that keeps the statement true, not the direction that looks nearest. Watch for special structure too: if both sides simplify to the same expression there are infinitely many solutions, and if the variable cancels and leaves a false statement there are none."
    ],
    "examples": [
      {
        "p": "If 3(2x − 5) = 4x + 9, what is the value of x?",
        "steps": [
          "Distribute the 3 on the left: 6x − 15 = 4x + 9.",
          "Subtract 4x from both sides to collect the variable terms: 2x − 15 = 9.",
          "Add 15 to both sides: 2x = 24.",
          "Divide by 2: x = 12. Check: 3(2·12 − 5) = 3(19) = 57 and 4·12 + 9 = 57, so both sides match."
        ],
        "a": "x = 12"
      },
      {
        "p": "A gym charges a one-time $25 joining fee plus $18 per month. Maria can spend at most $300 in total. What is the greatest whole number of months she can pay for?",
        "steps": [
          "Write the cost as an inequality: 25 + 18m ≤ 300, where m is the number of months.",
          "Subtract 25 from both sides: 18m ≤ 275.",
          "Divide by 18: m ≤ 15.28 (rounded). Months must be whole, so m can be at most 15.",
          "Check the boundary: 15 months costs 25 + 270 = 295, which is within $300; 16 months costs 25 + 288 = 313, which is over."
        ],
        "a": "15 months"
      }
    ],
    "cheat": [
      "Slope = (y2 − y1) ÷ (x2 − x1); slope-intercept form is y = mx + b.",
      "Parallel lines: equal slopes. Perpendicular lines: slopes multiply to −1.",
      "Multiply or divide an inequality by a negative number and the sign flips.",
      "\"At most\" is ≤, \"at least\" is ≥, \"no more than\" is ≤, \"more than\" is >.",
      "Same expression on both sides means infinitely many solutions; a false statement like 3 = 5 means no solution.",
      "In a word problem, the number attached to \"per\" is the slope and the one-time amount is the intercept."
    ],
    "mistakes": [
      "Forgetting to distribute a number to every term inside parentheses; rewrite the expression fully before moving on.",
      "Not flipping the inequality sign when dividing by a negative; circle any negative coefficient before you divide.",
      "Rounding a word-problem answer the wrong way; test the whole numbers on each side of the boundary."
    ]
  },
  "sat-algebra:sys": {
    "deep": [
      "A system of two linear equations asks for the point where two lines meet. You have two reliable tools. Substitution works best when one equation already has a variable alone, such as x = y + 2: plug that expression into the other equation and solve. Elimination works best when the equations are stacked and the coefficients can be matched: multiply one or both equations so a variable has opposite coefficients, add the equations, and that variable disappears. Always find both variables if the question asks for something like x + y, and always read exactly what the question wants before you stop.",
      "Word problems build the system for you. Define one variable for each unknown quantity, then turn each fact into an equation: one for the total number of items, and one for the total value or cost. For example, adult and child tickets give a count equation (a + c = total) and a money equation (price·a + price·c = revenue). Sometimes the SAT asks for a shortcut: the sum or difference of the variables may be obtainable by simply adding or subtracting the two equations without solving for either one.",
      "The number of solutions is also tested. Two lines with different slopes intersect once. Two lines with the same slope and different intercepts are parallel, so there is no solution. Two lines that are really the same line have infinitely many solutions. When an equation contains an unknown constant k and the question says \"no solution,\" make the x and y coefficients proportional but keep the constants out of proportion. If a graph is shown, the solution is simply the coordinates of the intersection."
    ],
    "examples": [
      {
        "p": "If 2x + 3y = 19 and x − y = 2, what is the value of x + y?",
        "steps": [
          "Multiply the second equation by 3 so the y terms are opposites: 3x − 3y = 6.",
          "Add it to the first equation: (2x + 3y) + (3x − 3y) = 19 + 6, which gives 5x = 25, so x = 5.",
          "Substitute into x − y = 2: 5 − y = 2, so y = 3.",
          "Check in the first equation: 2(5) + 3(3) = 10 + 9 = 19. Then x + y = 5 + 3 = 8."
        ],
        "a": "8"
      },
      {
        "p": "The system 6x + ky = 9 and 2x + 4y = 5 has no solution. What is the value of k?",
        "steps": [
          "No solution means the lines are parallel: the x and y coefficients are proportional but the constants are not.",
          "Compare x coefficients: 6 is 3 times 2, so the multiplier is 3.",
          "The y coefficients must have the same ratio: k = 3 · 4 = 12.",
          "Confirm the constants do not match that ratio: 3 · 5 = 15, but the constant is 9, so the lines are parallel and distinct."
        ],
        "a": "k = 12"
      }
    ],
    "cheat": [
      "Substitution when a variable is already isolated; elimination when the equations line up.",
      "To eliminate a variable, make its coefficients opposites, then add the equations.",
      "Different slopes: exactly one solution. Same slope, different intercepts: none. Same line: infinitely many.",
      "Word-problem pair: one equation for counts, one for money (or another total).",
      "If the question asks for x + y or x − y, try adding or subtracting the equations first.",
      "Always substitute your answer back into both equations to check."
    ],
    "mistakes": [
      "Multiplying only one term when scaling an equation; multiply every term, including the constant.",
      "Solving for x and forgetting the question asks for y or for x + y; underline the target before you start.",
      "Mixing up what each variable stands for in word problems; write a short definition like \"a = adult tickets\" first."
    ]
  },
  "sat-advanced:quad": {
    "deep": [
      "A quadratic equation has the form ax² + bx + c = 0, and your first job is to choose the fastest solving method. If the numbers are friendly, factor: find two numbers that multiply to c and add to b (when a = 1), then set each factor equal to zero. If it will not factor quickly, use the quadratic formula, x = (−b ± √(b² − 4ac)) ÷ 2a. Always move everything to one side so the other side is zero before factoring, since the zero-product rule only works when the product equals zero.",
      "The graph of a quadratic is a parabola, and the SAT loves to connect its three forms. Standard form ax² + bx + c shows the y-intercept c. Factored form a(x − r)(x − s) shows the x-intercepts r and s. Vertex form a(x − h)² + k shows the vertex (h, k), which is the maximum or minimum value. The axis of symmetry is x = −b ÷ 2a, and it sits exactly halfway between the two x-intercepts. If a is positive the parabola opens upward and has a minimum; if a is negative it opens downward and has a maximum.",
      "The discriminant, b² − 4ac, tells you how many real solutions exist without solving: positive means two, zero means one (the parabola just touches the x-axis), and negative means none. Questions about \"how many times does the graph cross the x-axis\" or \"for what value of c is there exactly one solution\" are discriminant questions. Also remember special patterns such as the difference of squares, a² − b² = (a − b)(a + b), and perfect squares, (a ± b)² = a² ± 2ab + b², which let you factor in seconds."
    ],
    "examples": [
      {
        "p": "What is the positive solution of x² − 5x − 14 = 0?",
        "steps": [
          "The equation is already set to zero. Look for two numbers that multiply to −14 and add to −5.",
          "The numbers are −7 and 2, since (−7)(2) = −14 and −7 + 2 = −5.",
          "Factor: (x − 7)(x + 2) = 0, so x = 7 or x = −2.",
          "Check x = 7: 49 − 35 − 14 = 0. The positive solution is 7."
        ],
        "a": "x = 7"
      },
      {
        "p": "What is the minimum value of f(x) = x² − 6x + 5, and at what x-value does it occur?",
        "steps": [
          "Since a = 1 is positive, the parabola opens upward and the vertex is the minimum.",
          "The axis of symmetry is x = −b ÷ 2a = 6 ÷ 2 = 3.",
          "Substitute x = 3: f(3) = 9 − 18 + 5 = −4.",
          "Cross-check with factoring: f(x) = (x − 1)(x − 5) has intercepts 1 and 5, whose midpoint is 3, and completing the square gives (x − 3)² − 4."
        ],
        "a": "Minimum value −4, at x = 3"
      }
    ],
    "cheat": [
      "Quadratic formula: x = (−b ± √(b² − 4ac)) ÷ 2a.",
      "Discriminant b² − 4ac: positive means 2 real solutions, zero means 1, negative means 0.",
      "Vertex form a(x − h)² + k has vertex (h, k); axis of symmetry is x = −b ÷ 2a.",
      "Difference of squares: a² − b² = (a − b)(a + b).",
      "Perfect squares: (a + b)² = a² + 2ab + b² and (a − b)² = a² − 2ab + b².",
      "Sum of roots = −b ÷ a and product of roots = c ÷ a."
    ],
    "mistakes": [
      "Factoring before setting the equation equal to zero; move all terms to one side first.",
      "Mixing up the sign inside vertex form: (x − 3)² has its vertex at x = +3, not −3.",
      "Reporting the vertex's x-value when the question asks for the maximum or minimum value (the y-value); reread the question."
    ]
  },
  "sat-advanced:expo": {
    "deep": [
      "Exponent questions are about applying a small set of rules without hesitation. When you multiply powers of the same base, add the exponents (x³ · x⁴ = x⁷). When you divide, subtract. When you raise a power to a power, multiply (x³)⁴ = x¹². A negative exponent means reciprocal (x⁻² = 1 ÷ x²), a zero exponent gives 1, and a fractional exponent means a root (x^(1/2) = √x). If bases differ, rewrite them as powers of a common base, such as 4 = 2² and 8 = 2³, before comparing exponents.",
      "Exponential functions have the form f(x) = a · bˣ, where a is the starting value (the value at x = 0) and b is the growth or decay factor each step. If b > 1 the quantity grows; if 0 < b < 1 it decays. Percent change converts to a factor: 8% growth means b = 1.08, and 20% decay means b = 0.80. When something doubles every 3 hours, the exponent is t ÷ 3, because the exponent counts how many full doubling periods have passed. Compare this with linear growth, which adds the same amount each step.",
      "Other non-linear functions appear too. To find where a function crosses the axes, set x or f(x) to zero. To evaluate, substitute carefully and use parentheses around negative inputs, since (−3)² = 9 but −3² = −9. For equations like 2^(x + 1) = 32, rewrite both sides with the same base (32 = 2⁵), then set the exponents equal. For radical or rational equations, always check your answers in the original equation, because squaring both sides or clearing denominators can create extraneous solutions."
    ],
    "examples": [
      {
        "p": "A bacteria culture starts with 500 cells and doubles every 3 hours. If P(t) = 500 · 2^(t/3) models the number of cells after t hours, how many cells are there after 12 hours?",
        "steps": [
          "Substitute t = 12: P(12) = 500 · 2^(12/3).",
          "Simplify the exponent: 12 ÷ 3 = 4, so P(12) = 500 · 2⁴.",
          "Compute 2⁴ = 16, then 500 · 16 = 8000.",
          "Sanity check: 12 hours is four doubling periods, and 500 doubled four times is 1000, 2000, 4000, 8000."
        ],
        "a": "8000 cells"
      },
      {
        "p": "The function f(x) = a · bˣ, where b > 0, has f(0) = 6 and f(2) = 54. What is f(3)?",
        "steps": [
          "Use f(0) = a · b⁰ = a, so a = 6.",
          "Use f(2) = 6 · b² = 54, so b² = 9.",
          "Since b > 0, b = 3. The function is f(x) = 6 · 3ˣ.",
          "Evaluate f(3) = 6 · 27 = 162. Check: f(2) = 6 · 9 = 54, so multiplying by 3 gives 162."
        ],
        "a": "162"
      }
    ],
    "cheat": [
      "Same base: add exponents to multiply, subtract to divide, multiply for power of a power.",
      "x⁻ⁿ = 1 ÷ xⁿ, x⁰ = 1, and x^(1/n) is the nth root of x.",
      "Exponential model: f(x) = a · bˣ, where a is the initial value and b is the factor per step.",
      "Percent growth r gives b = 1 + r; percent decay r gives b = 1 − r.",
      "To solve bˣ = c, rewrite both sides with the same base and equate exponents.",
      "Always check radical and rational equations for extraneous solutions."
    ],
    "mistakes": [
      "Adding exponents when you should multiply, such as (x³)⁴: that is x¹², not x⁷.",
      "Using 0.08 as the growth factor instead of 1.08; the factor includes the original 100%.",
      "Evaluating −3² as 9; put parentheses around negative inputs and remember the exponent applies first."
    ]
  },
  "sat-data:ratio": {
    "deep": [
      "Percent, ratio, and rate problems all come down to one idea: translate words into multiplication. \"Percent\" means per 100, so 35% of 80 is 0.35 × 80. \"Is\" means equals, and \"of\" means multiply. For percent change, always divide the difference by the original value: (new − old) ÷ old. Increasing a number by 20% means multiplying by 1.20; decreasing by 25% means multiplying by 0.75. When a problem applies two percent changes in a row, multiply the factors rather than adding the percents, because the second change applies to a new base.",
      "Ratios compare parts, and the key move is to find the total number of parts. If apples to oranges is 3 : 5 and there are 64 fruits, there are 8 parts, each worth 8 fruits, giving 24 apples and 40 oranges. Rates such as miles per hour or pages per second work the same way: find the unit rate first, then scale. Be careful with units. If the rate is per second and the question gives minutes, convert before multiplying. Writing the units next to every number and watching them cancel is the best way to catch mistakes.",
      "Many questions combine these ideas with tables and context, such as unit conversions, density, or interest. For simple growth by a percentage each year, use a repeated multiplication model. For problems that ask \"what percent of X is Y,\" divide Y by X and multiply by 100. If the answer choices are percents, estimate first: knowing that 10% of a quantity is easy to find helps you eliminate choices that are far off. Finally, when a table or graph is given, locate exactly which row or column answers the question before computing."
    ],
    "examples": [
      {
        "p": "A store raises the price of a jacket that originally costs $60 by 20%. Later, it offers 25% off the new price. What is the final price?",
        "steps": [
          "Apply the 20% increase: 60 × 1.20 = 72.",
          "Apply the 25% discount to the new price, multiplying by 0.75: 72 × 0.75 = 54.",
          "Final price is $54. Note that this is not the original $60, because the discount applies to a larger base than the increase did.",
          "Check using factors: 1.20 × 0.75 = 0.90, and 0.90 × 60 = 54, a net decrease of 10%."
        ],
        "a": "$54"
      },
      {
        "p": "A printer prints 45 pages in 90 seconds. At this rate, how many pages does it print in 8 minutes?",
        "steps": [
          "Find the unit rate: 45 pages ÷ 90 seconds = 0.5 pages per second.",
          "Convert the time to seconds: 8 minutes × 60 = 480 seconds.",
          "Multiply: 0.5 × 480 = 240 pages.",
          "Check with a different path: 8 minutes is 480 seconds, which is 480 ÷ 90 = 5⅓ blocks of 90 seconds, and 5⅓ × 45 = 240."
        ],
        "a": "240 pages"
      }
    ],
    "cheat": [
      "Percent change = (new − old) ÷ old × 100.",
      "Increase by r% means multiply by (1 + r/100); decrease by r% means multiply by (1 − r/100).",
      "Successive percent changes multiply; they do not add.",
      "Ratio a : b has (a + b) parts; each part = total ÷ (a + b).",
      "Unit rate first, then scale: rate × amount of time = amount produced.",
      "\"Of\" means multiply, \"is\" means equals, \"per\" means divide."
    ],
    "mistakes": [
      "Dividing percent change by the new value instead of the original; the denominator is always the starting amount.",
      "Adding two successive percents (like +20% then −25% = −5%); multiply the factors instead.",
      "Ignoring unit conversions (minutes versus seconds); write units beside each number and cancel them."
    ]
  },
  "sat-data:stats": {
    "deep": [
      "Statistics questions test whether you understand what each measure tells you. The mean is the sum divided by the count, and it is pulled toward extreme values. The median is the middle value of an ordered list (or the average of the two middle values) and barely moves when one outlier appears. The mode is the most frequent value, and the range is the maximum minus the minimum. Standard deviation measures spread: a data set whose values cluster tightly has a small standard deviation, while a set with values far from the mean has a large one. You rarely need to calculate it, only compare it.",
      "A common question gives a data set, adds or removes a value, and asks which measure changes the most or what the new mean is. For the new mean, work with totals: multiply the old mean by the old count to get the old sum, adjust the sum, then divide by the new count. For the median, re-sort the list and find the new middle. Also practice reading tables, histograms, dot plots, and scatterplots. For a scatterplot, a line of best fit gives predictions; its slope is the predicted change in y per unit increase in x.",
      "Study-design questions ask what conclusion a study supports. A random sample from a population lets you generalize to that population, with a margin of error that tells you how far the estimate might be from the true value. A random assignment of subjects to groups is what allows a cause-and-effect conclusion; without it, you can only say two things are associated. To estimate a population count, multiply the sample proportion by the population size. Avoid conclusions about groups outside the one sampled."
    ],
    "examples": [
      {
        "p": "Five quiz scores are 12, 15, 15, 18, and 20. A sixth score of 50 is added. By how much does the mean increase, and by how much does the median increase?",
        "steps": [
          "Original mean: (12 + 15 + 15 + 18 + 20) ÷ 5 = 80 ÷ 5 = 16. Original median: the middle value, 15.",
          "New sum: 80 + 50 = 130, so the new mean is 130 ÷ 6 ≈ 21.67. The mean increases by about 5.67.",
          "New ordered list: 12, 15, 15, 18, 20, 50. The median is the average of the middle two values: (15 + 18) ÷ 2 = 16.5.",
          "The median increases by 16.5 − 15 = 1.5, so the outlier affected the mean much more."
        ],
        "a": "Mean increases by about 5.67; median increases by 1.5"
      },
      {
        "p": "A school has 1,800 students. A random sample of 200 students is surveyed, and 45 of them say they prefer a later start time. About how many students in the whole school would be expected to prefer a later start time?",
        "steps": [
          "Find the sample proportion: 45 ÷ 200 = 0.225, or 22.5%.",
          "Because the sample is random, the proportion can be applied to the whole population.",
          "Multiply by the population size: 0.225 × 1,800 = 405.",
          "Check by scaling: 1,800 ÷ 200 = 9, and 45 × 9 = 405."
        ],
        "a": "About 405 students"
      }
    ],
    "cheat": [
      "Mean = sum ÷ count; sum = mean × count.",
      "Median is the middle value of the sorted list; with an even count, average the middle two.",
      "Outliers change the mean a lot and the median very little.",
      "Range = maximum − minimum; larger standard deviation means more spread.",
      "Random sample: generalize to the population. Random assignment: cause and effect.",
      "Population estimate = sample proportion × population size."
    ],
    "mistakes": [
      "Finding the median without sorting the list first; always order the data.",
      "Dividing by the wrong count after adding or removing a value; recompute the number of items.",
      "Claiming causation from an observational study or generalizing beyond the group that was sampled."
    ]
  },
  "sat-geometry:area": {
    "deep": [
      "Area, perimeter, and volume questions reward a calm, organized method. First, identify the shapes involved and write down the matching formula; the SAT provides many formulas in a reference sheet, but you save time by knowing them. Second, label every given length and check whether you have a radius or a diameter, since mixing them up is the most common error. Third, check units: area is in square units, volume in cubic units, and converting a length by a factor of k changes area by k² and volume by k³.",
      "Composite figures are solved by adding or subtracting simple shapes. For a shaded region, compute the area of the whole shape and subtract the unshaded part. For an L-shaped region, split it into rectangles. Keep answers in terms of π unless the question asks for a decimal, because that avoids rounding errors and matches the answer choices. Similar figures have equal angles and proportional sides; if the scale factor of lengths is k, then areas scale by k² and volumes by k³. Circles also include arc length and sector area, each equal to a fraction of the whole: central angle ÷ 360.",
      "Three-dimensional problems usually give a volume or surface area and ask for a missing dimension. Set up the formula with the unknown, then solve like any equation. For a rectangular prism V = lwh; for a cylinder V = πr²h; for a cone V = (1/3)πr²h; for a sphere V = (4/3)πr³. If a container is filled or emptied, think about how the height changes with the rate. When a problem describes a shape without a picture, sketch one. Labeling a quick drawing often reveals the missing step immediately."
    ],
    "examples": [
      {
        "p": "A cylindrical tank has a diameter of 10 centimeters and a height of 12 centimeters. What is its volume, in cubic centimeters, in terms of π?",
        "steps": [
          "The formula is V = πr²h. The diameter is 10, so the radius is 10 ÷ 2 = 5.",
          "Substitute: V = π · 5² · 12.",
          "Compute 5² = 25, then 25 · 12 = 300.",
          "So V = 300π cubic centimeters (about 942 if π is approximated as 3.14)."
        ],
        "a": "300π cubic centimeters"
      },
      {
        "p": "A circle is inscribed in a square with side length 10, so the circle touches all four sides. What is the area of the region inside the square but outside the circle?",
        "steps": [
          "The area of the square is 10² = 100.",
          "The circle touches opposite sides, so its diameter is 10 and its radius is 5.",
          "The area of the circle is πr² = π · 25 = 25π.",
          "Subtract: 100 − 25π, which is about 100 − 78.54 = 21.46, a reasonable value because the four corners are small."
        ],
        "a": "100 − 25π (about 21.46)"
      }
    ],
    "cheat": [
      "Rectangle A = lw; triangle A = (1/2)bh; trapezoid A = (1/2)(b₁ + b₂)h.",
      "Circle: A = πr², C = 2πr; arc length = (θ ÷ 360) · 2πr; sector area = (θ ÷ 360) · πr².",
      "Prism V = (base area)(height); cylinder V = πr²h; cone V = (1/3)πr²h; sphere V = (4/3)πr³.",
      "Scale factor k: lengths × k, areas × k², volumes × k³.",
      "Shaded area = whole shape minus the unshaded part.",
      "Radius is half the diameter; always check which one is given."
    ],
    "mistakes": [
      "Using the diameter in a formula that needs the radius; halve it before substituting.",
      "Scaling area or volume by the same factor as length; use k² for area and k³ for volume.",
      "Rounding π too early or switching to decimals when the choices are in terms of π."
    ]
  },
  "sat-geometry:trig": {
    "deep": [
      "Right-triangle questions begin with the Pythagorean theorem, a² + b² = c², where c is the hypotenuse, the side opposite the right angle. Memorize common triples, such as 3-4-5, 5-12-13, 8-15-17, and 7-24-25, and their multiples; spotting one saves time. For similar triangles, corresponding sides are proportional, so you can set up a proportion and solve for a missing side. If two triangles share an angle and both have a right angle, they are similar. Always draw and label the triangle before computing.",
      "Trigonometric ratios compare sides relative to a chosen acute angle. Use the mnemonic SOH-CAH-TOA: sine = opposite ÷ hypotenuse, cosine = adjacent ÷ hypotenuse, tangent = opposite ÷ adjacent. The words opposite and adjacent depend on which angle you are using, so identify the angle first. In a right triangle, the two acute angles add to 90°, which means sin(x°) = cos(90° − x°). The SAT often asks for a ratio like sin A or cos B as a fraction, so you need the side lengths, which you usually find with the Pythagorean theorem.",
      "Special right triangles allow exact answers without a calculator. In a 45°-45°-90° triangle the legs are equal and the hypotenuse is a leg times √2. In a 30°-60°-90° triangle, the side opposite 30° is the shortest, the side opposite 60° is that length times √3, and the hypotenuse is twice the shortest side. Some questions also use radians; remember that 180° = π radians, so convert with a factor of π ÷ 180. For circle problems in the coordinate plane, the equation (x − h)² + (y − k)² = r² gives the center and radius."
    ],
    "examples": [
      {
        "p": "In right triangle ABC, the right angle is at C, AC = 8, and BC = 15. What is cos B?",
        "steps": [
          "Find the hypotenuse: AB² = 8² + 15² = 64 + 225 = 289, so AB = 17.",
          "Cosine is adjacent ÷ hypotenuse. For angle B, the side adjacent to B (other than the hypotenuse) is BC = 15.",
          "So cos B = 15 ÷ 17.",
          "Cross-check: the side opposite angle A is also BC = 15, so sin A = 15 ÷ 17, matching sin A = cos(90° − A) = cos B."
        ],
        "a": "15/17"
      },
      {
        "p": "In right triangle PQR, the right angle is at Q, angle P measures 30°, and the hypotenuse PR = 14. What is the length of PQ?",
        "steps": [
          "This is a 30°-60°-90° triangle. The side opposite the 30° angle is QR, the shortest side, equal to half the hypotenuse: QR = 7.",
          "The side opposite the 60° angle is PQ, which equals the short side times √3: PQ = 7√3.",
          "Check using trigonometry: PQ is adjacent to P, so PQ = 14 · cos 30° = 14 · (√3 ÷ 2) = 7√3.",
          "Check with the Pythagorean theorem: 7² + (7√3)² = 49 + 147 = 196 = 14²."
        ],
        "a": "7√3"
      }
    ],
    "cheat": [
      "Pythagorean theorem: a² + b² = c², with c the hypotenuse.",
      "Common triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25 (and multiples).",
      "SOH-CAH-TOA: sin = opp/hyp, cos = adj/hyp, tan = opp/adj.",
      "sin(x°) = cos(90° − x°); the acute angles of a right triangle sum to 90°.",
      "45°-45°-90°: sides in ratio 1 : 1 : √2. 30°-60°-90°: sides in ratio 1 : √3 : 2.",
      "180° = π radians; degrees × π/180 = radians."
    ],
    "mistakes": [
      "Mislabeling opposite and adjacent; always decide which angle you are using before naming the sides.",
      "Treating a leg as the hypotenuse in the Pythagorean theorem; the hypotenuse is always the longest side.",
      "Confusing the side ratios of the two special triangles; √2 belongs to 45°-45°-90° and √3 to 30°-60°-90°."
    ]
  },
  "sat-craft:vocab": {
    "deep": [
      "Words-in-context questions are not vocabulary quizzes. They test whether you can use the clues in the sentence to decide what meaning the author needs. Before you read the choices, cover them and predict a word or short phrase for the blank, using contrast signals (although, but, despite, rather than) and support signals (because, so, for example, since). Then find the choice closest to your prediction. A strong prediction protects you from attractive wrong answers that sound sophisticated but do not fit the logic of the sentence.",
      "Some questions ask what a familiar word \"most nearly means\" as used in the text. Here the trap is the everyday meaning. Words like sound, address, plain, or tender have several meanings, and the right one depends entirely on the context. Substitute each choice back into the sentence in place of the word and check whether the sentence still says the same thing. If a choice is a correct meaning of the word in general but changes what the sentence communicates, eliminate it.",
      "Pay attention to tone and degree. Choices can be close in meaning yet differ in strength, such as \"critical\" versus \"hostile,\" or \"cautious\" versus \"fearful.\" The clue words usually tell you whether the author is being mild or extreme. If you do not know a word, use roots, prefixes, and positive or negative charge: a word with a negative feel will not fit a sentence praising something. When two choices both fit, the correct one is the one fully supported by the sentence's evidence, not just partly."
    ],
    "examples": [
      {
        "p": "Although the mayor's early speeches were famously ______, filled with vague promises and careful hedging, her final address stated each policy position plainly.\n(A) lucid (B) evasive (C) jubilant (D) thorough",
        "steps": [
          "Predict the blank first. \"Although\" signals a contrast with the final address, which stated positions plainly.",
          "The clue \"vague promises and careful hedging\" describes the early speeches, so the blank should mean avoiding a direct answer.",
          "Eliminate (A) lucid, which means clear and is the opposite of the clue; (C) jubilant, which means joyful and has no support; and (D) thorough, which suggests complete detail, not vagueness.",
          "(B) evasive fits both the contrast and the supporting description."
        ],
        "a": "(B) evasive"
      },
      {
        "p": "The engineer insisted that the bridge design was sound, pointing to years of load tests and independent inspections. As used in the text, what does \"sound\" most nearly mean?\n(A) noisy (B) reliable (C) healthy (D) audible",
        "steps": [
          "Notice that \"sound\" has several meanings, so the sentence context decides.",
          "The evidence for the engineer's claim is \"load tests and independent inspections,\" which show the design can be trusted.",
          "Test the choices: noisy and audible refer to hearing, and healthy describes living things, so none fits a bridge design.",
          "Substituting (B) gives \"the bridge design was reliable,\" which matches the evidence."
        ],
        "a": "(B) reliable"
      }
    ],
    "cheat": [
      "Cover the choices and predict a word before reading them.",
      "Contrast signals: although, but, yet, despite, rather than, however.",
      "Support signals: because, so, since, for example, thus, in fact.",
      "Test each choice by plugging it back into the sentence.",
      "Tricky multi-meaning words: the common meaning is usually the trap.",
      "Match the tone and the strength (positive or negative, mild or extreme) of the clues."
    ],
    "mistakes": [
      "Choosing the fanciest word instead of the one the clues support; always justify with a phrase from the sentence.",
      "Picking the everyday meaning of a multi-meaning word; check the context.",
      "Ignoring a contrast signal like \"although\" and choosing a word that agrees with the clue instead of opposing it."
    ]
  },
  "sat-craft:struct": {
    "deep": [
      "Text structure and purpose questions ask what a passage or sentence is doing, not what it says. Think of every sentence as having a job: introducing a claim, giving an example, offering a counterargument, presenting evidence, qualifying a point, or concluding. When you read, jot a few words for each sentence's job. For a question about a single underlined sentence, ask what would be missing if it were removed. The answer choices usually begin with action verbs such as \"presents,\" \"challenges,\" \"illustrates,\" or \"qualifies,\" so predict the verb that matches the job.",
      "Overall-structure questions summarize the whole passage in order. Look for signals: \"many people believe\" followed by \"however\" typically sets up a common view and then complicates it. A word like \"for instance\" marks an example. \"Researchers hypothesized\" followed by results marks a study. When the question asks for the main purpose, choose the answer that covers the entire passage, not just one part. Wrong answers often describe something that happens in only one sentence, or use a strong verb such as \"refutes\" when the author merely suggests something.",
      "Some questions pair two texts and ask how the second responds to the first. In that case, identify each author's claim in a short phrase, then check whether the second author agrees, adds to, qualifies, or disputes the first. Also watch for scope: if the choice says the author \"proves,\" \"rejects,\" or \"ridicules,\" make sure the text supports that degree. If it only says \"suggests\" or \"questions,\" the stronger choice is wrong. Use the exact wording in the text as your final check."
    ],
    "examples": [
      {
        "p": "Octopuses are often described as strictly solitary animals, but that picture is incomplete. At one bay surveyed by a research team, up to fifteen octopuses were found sharing a small area, and the team recorded them signaling to one another and competing over dens. These findings suggest that octopus social behavior is more varied than researchers have assumed.\nWhich choice best describes the function of the first sentence?\n(A) It states a common belief that the rest of the passage complicates. (B) It summarizes the results of an experiment. (C) It defines a technical term used later in the passage. (D) It presents a counterargument that the author fully endorses.",
        "steps": [
          "Ask what job the sentence does: it describes how octopuses are \"often described\" and then says that picture \"is incomplete.\"",
          "The rest of the passage gives evidence that octopuses can be social, which complicates the opening belief.",
          "Eliminate (B), since the results appear later; (C), since no term is defined; and (D), since the author does not endorse the solitary view.",
          "(A) matches the sentence's job."
        ],
        "a": "(A) It states a common belief that the rest of the passage complicates."
      },
      {
        "p": "A town's historic mill is often called a failure because it closed within a decade of opening. Historian Ana Ruiz argues that this judgment overlooks what the mill accomplished: it trained hundreds of workers who later founded the region's other factories. On her view, the mill's value lies not in its profits but in its legacy.\nWhich choice best describes the overall structure of the text?\n(A) It presents a common assessment and then a historian's alternative interpretation. (B) It describes a problem and tests several solutions. (C) It narrates events in strict chronological order without taking a position. (D) It contrasts the views of two historians who disagree.",
        "steps": [
          "Summarize in order: first a common view (the mill failed), then Ruiz's argument against it, then her conclusion about legacy.",
          "Eliminate (B), because no problem is tested; (C), because the text argues a position and is not a strict chronology; and (D), because only one historian is named.",
          "(A) matches the order: a common assessment, then an alternative interpretation.",
          "Check the verb \"presents\": the text does present both ideas in that sequence."
        ],
        "a": "(A) It presents a common assessment and then a historian's alternative interpretation."
      }
    ],
    "cheat": [
      "Ask: what job does this sentence do?",
      "\"Many believe... however...\" usually means a common view is being complicated.",
      "\"For instance\" or \"such as\" signals an example; \"thus\" signals a result.",
      "Main-purpose answers must cover the whole text, not one detail.",
      "Watch the strength of verbs: suggests and challenges are not the same as proves and refutes.",
      "For two texts, state each author's claim in a few words, then compare."
    ],
    "mistakes": [
      "Picking an answer that describes content instead of function; look for verbs like presents or illustrates.",
      "Choosing an answer that is true of only one sentence when asked about the whole passage.",
      "Overlooking exaggerated verbs such as \"ridicules\" or \"proves\" that go beyond the text."
    ]
  },
  "sat-info:central": {
    "deep": [
      "A central-idea question asks for the single point that ties the whole passage together. Read the passage first for its direction: what is introduced, what is developed, and where it ends up. Then put the main point into your own words before reading the choices, in a form like \"X does Y, which means Z.\" The right answer will be broad enough to include the key ideas yet precise enough to avoid inventing claims. Pay close attention to the last sentence, which often states the conclusion or the significance of the finding.",
      "Wrong answers have recognizable patterns. Some are too narrow, focusing on one example or detail instead of the main point. Some are too broad or extreme, claiming more than the passage says, for example by using words like \"always,\" \"all,\" or \"proves.\" Some are true in real life but not stated in the passage. Others distort a detail by changing a word or reversing a relationship. If you can underline the exact words in the passage that support your choice, you have probably found the right answer.",
      "Detail questions work differently: they ask for a specific fact, and the text gives it directly. Go back to the passage and find the matching sentence; do not rely on memory. The correct answer is often a paraphrase of the sentence, using different words but the same meaning. Be careful with qualifiers like \"most,\" \"some,\" and \"mostly,\" since they change meaning. For paired texts, state each author's claim in a sentence first. Also, for graph-based questions, verify the data points to which the question refers before choosing a claim."
    ],
    "examples": [
      {
        "p": "Rooftop gardens were once seen mainly as decoration. Recent measurements show, however, that a vegetated roof can lower a building's summer cooling costs and absorb much of the rain that would otherwise overload storm drains. Some city planners now treat green roofs as infrastructure rather than ornament.\nWhich choice best states the main idea of the text?\n(A) Green roofs are attractive but too costly for most cities. (B) Green roofs provide practical benefits that are leading some planners to view them as infrastructure. (C) Storm drains are the most serious problem facing city planners. (D) Buildings with gardens always have lower cooling costs than those without.",
        "steps": [
          "Summarize: green roofs used to be viewed as decoration, but they have practical benefits, so some planners see them as infrastructure.",
          "Eliminate (A), because cost is never mentioned; (C), because the text does not rank storm drains as the biggest problem; and (D), because \"always\" overstates the claim, which says a roof \"can\" lower costs.",
          "(B) matches the summary and keeps the qualifier \"some planners.\"",
          "Verify with the text: \"practical benefits\" are cooling and rain absorption, and \"infrastructure rather than ornament\" is the shift."
        ],
        "a": "(B) Green roofs provide practical benefits that are leading some planners to view them as infrastructure."
      },
      {
        "p": "Linguist Dara Nwosu recorded forty hours of conversation among bilingual teenagers. She found that they switched languages mostly when quoting someone, and far more often at the start of a clause than in the middle of one. Nwosu concludes that such switching follows consistent patterns rather than reflecting confusion.\nAccording to the text, the bilingual teenagers switched languages most often when they were\n(A) confused about vocabulary. (B) quoting someone. (C) speaking with adults. (D) feeling tired.",
        "steps": [
          "This is a detail question, so return to the text and find the matching sentence.",
          "The text says the teenagers \"switched languages mostly when quoting someone.\"",
          "Eliminate (A), which the final sentence contradicts (the switching does not reflect confusion); (C) and (D), which are never mentioned.",
          "(B) paraphrases the text directly."
        ],
        "a": "(B) quoting someone"
      }
    ],
    "cheat": [
      "Restate the main idea in your own words before looking at the choices.",
      "The last sentence often gives the conclusion or significance.",
      "Too narrow: only one example. Too broad: claims more than the text says.",
      "Extreme words (always, never, all, proves) are red flags.",
      "Detail questions: find the exact sentence and match its paraphrase.",
      "Qualifiers (some, can, mostly) must be preserved in the right answer."
    ],
    "mistakes": [
      "Choosing an answer that is true in real life but not in the passage; stay inside the text.",
      "Picking a detail as the main idea; ask whether it covers the whole passage.",
      "Answering a detail question from memory; return to the text and confirm."
    ]
  },
  "sat-info:infer": {
    "deep": [
      "An inference question asks what must be true, or what would be the most logical completion, based on the information given. The key rule is that the correct answer is strongly supported by the text, and often follows by simple logic. Read the passage carefully and mark the facts and relationships it states: who did what, what is compared, and what caused what. Then predict a conclusion that follows directly, before looking at the choices. If a choice requires an assumption that the text does not state, it is almost certainly wrong.",
      "Evidence questions ask which finding or quotation would support or weaken a claim. First identify the exact claim and its key terms. For a support question, choose the answer that directly links the cause and the effect in the claim, or fits the claim's group and condition. For a weaken question, look for an alternative explanation, a difference between the groups, or evidence that contradicts the link. Be alert to confounding factors: if something else changed at the same time, a causal claim is weaker. Always match scope: the evidence must address the same group or condition that the claim does.",
      "Data-based questions, with a table or graph, are the same skill: the correct answer accurately describes the numbers and supports the stated claim. Check the title, the axis labels, and units, then look at exactly the values the claim names. Wrong answers often misread a column, compare the wrong categories, or make a claim that goes beyond what the data show. As a last step, test the chosen answer by asking, \"Does this follow from the text alone, without help from outside knowledge?\" If yes, you have your answer."
    ],
    "examples": [
      {
        "p": "A bakery tracked its sales for six weeks. In the three weeks when it displayed a daily-special sign on the sidewalk, average daily sales were $1,450. In the three weeks without the sign, average daily sales were $1,180. The owner concludes that the sign increases sales.\nWhich finding, if true, would most weaken the owner's conclusion?\n(A) The weeks with the sign coincided with a nearby street festival that brought large crowds. (B) The sign was handwritten rather than printed. (C) The bakery's sales are highest on weekends. (D) The owner has run the bakery for ten years.",
        "steps": [
          "The claim is causal: the sign causes higher sales. To weaken it, find another explanation for the higher sales.",
          "(A) offers one: a street festival increased foot traffic exactly during the sign weeks, so the sign may not be the cause.",
          "(B) and (D) are irrelevant to whether the sign works, and (C) does not distinguish the sign weeks from the non-sign weeks.",
          "(A) is the only choice that undermines the link between the sign and the sales."
        ],
        "a": "(A) The weeks with the sign coincided with a nearby street festival that brought large crowds."
      },
      {
        "p": "A librarian noticed that each time the library extended its weekend hours, the number of books borrowed rose the following month. Surveys show that most borrowers say they come on weekends because their jobs keep them busy on weekdays.\nWhich choice most logically completes the text? The extended weekend hours most likely increased borrowing because they\n(A) made it possible for people with weekday jobs to visit. (B) lowered the price of borrowing books. (C) caused the library to buy more books. (D) helped weekend borrowers read faster.",
        "steps": [
          "List the facts: longer weekend hours came before more borrowing, and borrowers say they come on weekends because of weekday jobs.",
          "The logical link is that weekday workers gained more chances to visit on weekends.",
          "(B), (C), and (D) each introduce something the text never mentions (price, purchases, reading speed).",
          "(A) follows directly from the stated facts."
        ],
        "a": "(A) made it possible for people with weekday jobs to visit."
      }
    ],
    "cheat": [
      "The right answer must be strongly supported by the text alone.",
      "Predict the conclusion before reading the choices.",
      "To weaken a causal claim, look for another cause or a difference between groups.",
      "To strengthen, find the choice that directly links the claim's cause and effect.",
      "For data questions, check titles, labels, units, and the exact values named in the claim.",
      "Reject any choice that needs outside knowledge or an unstated assumption."
    ],
    "mistakes": [
      "Choosing an answer that sounds reasonable but is not stated or implied; require textual support.",
      "Ignoring the scope of the claim, so the evidence covers a different group or condition.",
      "Misreading a graph or table by comparing the wrong rows, columns, or units."
    ]
  },
  "sat-conventions:punct": {
    "deep": [
      "Most punctuation questions are really about sentence boundaries. First, decide whether each side of the mark is an independent clause, one that has its own subject and verb and could stand alone. Two independent clauses can be joined only with a period, a semicolon, a colon (when the second explains the first), or a comma plus a coordinating conjunction (for, and, nor, but, or, yet, so). A comma alone between them creates a comma splice, and nothing at all creates a run-on. Eliminate any answer that makes either error.",
      "Commas are used for specific jobs: after introductory elements, between items in a list, and around nonessential information. Test nonessential information by removing it; if the sentence still makes sense and the meaning is the same, set it off with a pair of commas, dashes, or parentheses, and use the same type of mark on both sides. Never place a single comma between a subject and its verb, and do not add commas around essential information that identifies a noun. Words like \"which\" usually introduce nonessential clauses, while \"that\" introduces essential ones.",
      "Colons need a complete sentence before them and introduce a list, an example, or an explanation. A dash can do a similar job but must also follow a complete sentence if it introduces something, and dashes in pairs must surround an interruption. Apostrophes show possession (the dog's bone, the dogs' bones) and contractions (it's means it is), while its is the possessive pronoun. When you are choosing between options that are all grammatically valid, take the simplest, with the fewest marks and the clearest meaning."
    ],
    "examples": [
      {
        "p": "The committee reviewed three proposals ______ each one addressed the budget shortfall in a different way.\n(A) proposals, each (B) proposals each (C) proposals; each (D) proposals; and each",
        "steps": [
          "Check both sides of the blank: \"The committee reviewed three proposals\" is a complete sentence, and \"each one addressed the budget shortfall in a different way\" is also a complete sentence.",
          "Two independent clauses need a period, a semicolon, or a comma with a conjunction.",
          "(A) is a comma splice and (B) is a run-on; (D) mixes a semicolon with a conjunction, which is incorrect.",
          "(C) joins the two clauses with a semicolon correctly."
        ],
        "a": "(C) proposals; each"
      },
      {
        "p": "Her debut novel ______ became a bestseller.\n(A) novel, which took her nine years to finish, became (B) novel, which took her nine years to finish became (C) novel which took her nine years to finish, became (D) novel which, took her nine years to finish became",
        "steps": [
          "The clause \"which took her nine years to finish\" can be removed and the sentence still works (\"Her debut novel became a bestseller\"), so it is nonessential.",
          "Nonessential information must be set off on both sides with matching marks, in this case a pair of commas.",
          "(B) and (C) use only one comma, and (D) puts the comma in the wrong place, breaking the clause.",
          "(A) has the correct pair of commas."
        ],
        "a": "(A) novel, which took her nine years to finish, became"
      }
    ],
    "cheat": [
      "Independent clause + independent clause: period, semicolon, or comma + FANBOYS conjunction.",
      "FANBOYS: for, and, nor, but, or, yet, so.",
      "A colon must follow a complete sentence.",
      "Nonessential info takes a pair of commas, dashes, or parentheses, never just one.",
      "Never put a single comma between a subject and its verb.",
      "its = belongs to it; it's = it is; the dog's bone (one dog), the dogs' bones (many dogs)."
    ],
    "mistakes": [
      "Joining two full sentences with only a comma; look for a period, semicolon, or conjunction.",
      "Using one comma where a pair is needed to set off an interruption.",
      "Placing a colon after an incomplete phrase such as \"The ingredients are:\"; make sure a full sentence comes first."
    ]
  },
  "sat-conventions:agree": {
    "deep": [
      "Subject-verb agreement means that a singular subject takes a singular verb and a plural subject takes a plural verb. The trick is finding the true subject. Cross out any phrase between the subject and the verb, especially prepositional phrases beginning with \"of,\" \"in,\" or \"with,\" and any nonessential clause set off by commas. In \"The collection of rare coins is on display,\" the subject is \"collection,\" not \"coins.\" Also remember that in inverted sentences, such as \"There are three reasons,\" the subject comes after the verb.",
      "Certain subjects trip students up. Words like each, every, either, neither, one, and everyone are singular. Subjects joined by \"and\" are plural, while with \"or\" and \"nor\" the verb agrees with the subject closest to it. Collective nouns, such as committee, team, and group, are singular when acting as a unit. Titles of works and phrases such as \"the number of\" are singular, while \"a number of\" is plural. Pronoun-antecedent agreement works the same way: the pronoun must match its antecedent in number, so a single company uses \"its,\" not \"their.\"",
      "Verb-form questions test tense and form. Keep tenses consistent with time clues in the sentence, such as \"yesterday,\" \"by the time,\" or \"since 2010.\" Use the past perfect (had + past participle) for an action completed before another past action. The present perfect (has/have + past participle) links the past to the present. Watch for forms like \"had went\" (wrong) versus \"had gone\" (correct), and for parallel structure in lists, where every verb should have the same form. When two answers seem alike, read the whole sentence for its time sequence."
    ],
    "examples": [
      {
        "p": "The collection of rare coins, which includes several from the 1700s, ______ displayed in the museum lobby.\n(A) are (B) were (C) is (D) have been",
        "steps": [
          "Find the subject by crossing out interrupters: remove \"of rare coins\" and \"which includes several from the 1700s.\"",
          "What remains is \"The collection ______ displayed,\" so the subject is the singular noun \"collection.\"",
          "A singular subject needs a singular verb, which eliminates (A) are, (B) were, and (D) have been.",
          "(C) is agrees with \"collection.\""
        ],
        "a": "(C) is"
      },
      {
        "p": "By the time the rescue team arrived, the hikers ______ already left the cave.\n(A) have (B) had (C) will have (D) are",
        "steps": [
          "Identify the time sequence: the team arrived (a past event), and the hikers left earlier than that.",
          "An action completed before another past action takes the past perfect (had + past participle).",
          "(A) have already left is present perfect and does not fit \"arrived\"; (C) is a future form; (D) are left is not a correct verb form here.",
          "(B) had already left is correct."
        ],
        "a": "(B) had"
      }
    ],
    "cheat": [
      "Cross out prepositional phrases and commas-set-off clauses to find the subject.",
      "Each, every, either, neither, one, everyone: singular.",
      "Subjects joined by \"and\": plural. Joined by \"or\"/\"nor\": match the closer subject.",
      "Collective nouns (team, committee, group) are usually singular.",
      "Past perfect (had + past participle) shows the earlier of two past events.",
      "Inverted sentences (there is/are): the subject follows the verb."
    ],
    "mistakes": [
      "Matching the verb to the noun right before it instead of the true subject.",
      "Mixing tenses without a time clue that justifies the shift.",
      "Using a plural pronoun (they, their) for a singular antecedent like \"the company\" or \"everyone.\""
    ]
  },
  "sat-expression:trans": {
    "deep": [
      "A transition question asks how two ideas relate, and the answer must match that relationship exactly. Read the sentence before the blank and the sentence after it, then name the relationship in a plain word before looking at the choices: contrast, addition, cause and effect, example, or sequence. Only then choose the transition that matches. Each type has a set of common words. Contrast: however, nevertheless, but, in contrast. Addition: moreover, furthermore, also, in addition. Result: therefore, thus, consequently, as a result. Example: for instance, for example. Sequence: first, then, finally, afterward.",
      "The most important step is to decide how the second sentence connects to the first idea, not to the one before it. Ask whether the second sentence agrees with, adds to, opposes, or results from the first. If it opposes, you need a contrast word; if it follows logically, you need a result word. Be careful with words that sound alike. \"Similarly\" signals a comparison, \"for example\" signals a specific case, and \"in fact\" intensifies or corrects a point. Ignoring the relationship and picking a word that merely sounds academic is the main cause of errors.",
      "Some questions place the transition mid-sentence or at the start of a sentence, where punctuation also matters: a transition that begins a sentence is followed by a comma. If two choices are synonyms, such as \"however\" and \"nevertheless,\" they cannot both be right, so the answer is usually not either of them unless the others are clearly worse. Test your choice by reading the two sentences aloud with the transition inserted. If the relationship still feels natural and logical, you have the answer."
    ],
    "examples": [
      {
        "p": "The new bus route cuts the average commute by fifteen minutes. ______ ridership on the line has risen steadily since it opened.\n(A) However, (B) For instance, (C) As a result, (D) Nevertheless,",
        "steps": [
          "State the relationship: a shorter commute is a reason people would ride more, so the second sentence is a result of the first.",
          "Eliminate (A) However and (D) Nevertheless, which signal contrast, and (B) For instance, which introduces an example (rising ridership is not an example of a shorter commute).",
          "(C) As a result signals a consequence.",
          "Read it aloud: \"...cuts the commute by fifteen minutes. As a result, ridership has risen,\" which makes sense."
        ],
        "a": "(C) As a result,"
      },
      {
        "p": "Many gardeners assume that more water always produces healthier plants. ______ overwatering is one of the most common ways houseplants die.\n(A) Similarly, (B) Therefore, (C) For example, (D) However,",
        "steps": [
          "Compare the ideas: the first sentence states an assumption that more water is better, and the second says overwatering kills plants.",
          "The second sentence opposes the assumption, so a contrast word is needed.",
          "(A) Similarly signals agreement, (B) Therefore signals a result, and (C) For example signals a specific case; none fits an opposing idea.",
          "(D) However signals the contrast."
        ],
        "a": "(D) However,"
      }
    ],
    "cheat": [
      "Name the relationship first: contrast, addition, result, example, or sequence.",
      "Contrast: however, nevertheless, yet, in contrast, on the other hand.",
      "Addition: moreover, furthermore, also, in addition, similarly.",
      "Result: therefore, thus, consequently, as a result, so.",
      "Example: for instance, for example, specifically.",
      "A sentence-opening transition is followed by a comma."
    ],
    "mistakes": [
      "Choosing a transition by sound rather than the relationship between ideas.",
      "Linking the second sentence to the wrong earlier sentence; focus on the sentences immediately around the blank.",
      "Treating \"similarly\" and \"for example\" as interchangeable; one compares and the other gives a specific case."
    ]
  },
  "sat-expression:synth": {
    "deep": [
      "Rhetorical synthesis questions give you a set of bullet-point notes and a specific goal, such as introducing a topic, emphasizing a contrast, or explaining a finding to a particular audience. Your job is to find the single sentence that uses the notes to accomplish that goal. Begin by reading the goal and underlining its key requirement: Who is the audience? Is the purpose to compare, to explain, to persuade, or to introduce? Then scan the notes for only the information that serves that purpose, and ignore the rest.",
      "Every wrong answer is usually accurate to the notes but serves a different goal. One may state a true fact that is irrelevant to the goal. Another may include the right information but omit a necessary piece, like one side of a comparison. A third may add details that the notes do not support. The correct choice must do three things: accomplish the stated goal, use only information from the notes, and include the details needed to make the point. Check each choice against all three requirements, not just the first one that looks good.",
      "Watch for goals with specific verbs. \"Emphasize the similarity\" needs both items and a shared feature. \"Contrast\" needs two sides with a differing quality. \"Introduce to an audience unfamiliar with the subject\" needs a clear, general statement rather than technical details. \"Explain the significance\" needs a result or implication. Also notice how concise and clear a choice is; when two choices both work, the one that is more direct and avoids extra unrelated details is typically correct. Do not choose a sentence just because it is longer."
    ],
    "examples": [
      {
        "p": "A student is writing about a forest study and has taken these notes:\n- Researchers at Lakeview University studied cork oak forests.\n- Cork oaks can live more than 200 years.\n- Cork is harvested from the bark every nine years without killing the tree.\n- The researchers found that harvested trees stored more carbon than unharvested trees.\nThe student wants to emphasize a surprising finding of the study. Which choice best accomplishes this goal?\n(A) Cork oaks can live more than 200 years. (B) Cork is harvested from the bark every nine years. (C) The Lakeview University researchers found that harvested cork oaks stored more carbon than unharvested ones. (D) Cork oak forests were the subject of a university study.",
        "steps": [
          "The goal is to emphasize a surprising finding, so the sentence must report the study's result.",
          "Scan the notes: the only result is the last note (harvested trees stored more carbon), which is surprising because harvesting might be expected to reduce carbon storage.",
          "(A) and (B) are background facts and (D) only names the topic, so none reports a finding.",
          "(C) states the finding and credits the researchers."
        ],
        "a": "(C) The Lakeview University researchers found that harvested cork oaks stored more carbon than unharvested ones."
      },
      {
        "p": "A student has taken these notes about two hiking trails:\n- The Ridge Trail is 4 miles round trip and gains 300 feet of elevation.\n- The Canyon Trail is 9 miles round trip and gains 1,800 feet of elevation.\n- Both trails start at the same parking lot.\nThe student wants to help beginner hikers see how the two trails differ in difficulty. Which choice best accomplishes this goal?\n(A) Both trails begin at the same parking lot. (B) The Ridge Trail is 4 miles round trip with a 300-foot gain, while the Canyon Trail is 9 miles with an 1,800-foot gain, making it much harder. (C) The Canyon Trail gains 1,800 feet of elevation. (D) The Ridge Trail is 4 miles long.",
        "steps": [
          "The goal is to contrast difficulty for beginners, so the sentence needs both trails and the features that affect difficulty (distance and elevation gain).",
          "(A) states a similarity, not a difference; (C) and (D) each describe only one trail, so no comparison is possible.",
          "(B) gives distance and elevation gain for both trails and states the contrast.",
          "All numbers match the notes: 4 and 300 for the Ridge Trail, and 9 and 1,800 for the Canyon Trail."
        ],
        "a": "(B) The Ridge Trail is 4 miles round trip with a 300-foot gain, while the Canyon Trail is 9 miles with an 1,800-foot gain, making it much harder."
      }
    ],
    "cheat": [
      "Underline the goal's purpose and audience before reading the notes.",
      "The right answer accomplishes the goal, uses only the notes, and includes the needed details.",
      "Comparison goals need both items; contrast goals need a difference.",
      "Wrong answers are often true but serve a different goal.",
      "Reject any choice with details not found in the notes.",
      "When two choices work, pick the clearer and more direct one."
    ],
    "mistakes": [
      "Choosing a true sentence that does not match the goal; reread the goal before you decide.",
      "Selecting a sentence that covers only one side of a comparison.",
      "Picking the longest or most detailed sentence instead of the one that best fits the purpose."
    ]
  }
});
