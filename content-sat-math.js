(() => {
  window.PREP = window.PREP || {};
  const SAT = (PREP.SAT = PREP.SAT || { name: "SAT", sections: ["Math", "Reading & Writing"], categories: [] });

  const KA = ["Khan Academy: Digital SAT Math", "https://www.khanacademy.org/test-prep/v2-sat-math"];
  const CB = ["College Board: free official practice", "https://satsuite.collegeboard.org/practice"];
  const BB = ["Bluebook: full-length practice tests", "https://bluebook.collegeboard.org/"];

  // Question format: [skillId, question, [choices], correctIndex, explanation, passage?]
  SAT.categories.push(
    {
      id: "sat-algebra",
      section: "Math",
      name: "Algebra",
      blurb: "Linear equations, inequalities, and systems — about a third of the Math section.",
      skills: [
        {
          id: "lin",
          name: "Linear equations & inequalities",
          lesson:
            "Most algebra questions ask you to isolate a variable. Do the same thing to both sides of the equation, undo addition and subtraction first, then multiplication and division. For word problems, a fixed fee is the constant (the +number) and a per-unit rate is the coefficient of the variable.",
          tips: [
            "When you multiply or divide both sides of an inequality by a negative number, flip the inequality sign.",
            "Plug your answer back into the original equation to check it in seconds.",
            "In 'a fee plus a rate per hour', write: total = rate × hours + fee.",
          ],
          links: [["Khan Academy: Algebra basics", "https://www.khanacademy.org/math/algebra"], KA, CB],
        },
        {
          id: "sys",
          name: "Systems of equations",
          lesson:
            "A system is two equations that share the same variables. Solve it by substitution (replace a variable with an expression) or elimination (add or subtract the equations so one variable cancels). A system has infinitely many solutions when the equations describe the same line, and no solution when the lines are parallel.",
          tips: [
            "Elimination is fastest when the equations line up like x + y = 10 and x − y = 4.",
            "If both sides of one equation are a multiple of the other, there are infinitely many solutions.",
            "For word problems, define one variable per unknown and write one equation per fact.",
          ],
          links: [["Khan Academy: Systems of equations", "https://www.khanacademy.org/math/algebra"], KA, CB],
        },
      ],
      placement: [
        ["lin", "If 3x + 7 = 25, what is the value of x?", ["4", "5", "6", "7"], 2, "Subtract 7 from both sides to get 3x = 18, then divide by 3: x = 6."],
        ["lin", "Which of the following is the solution set of 2(x − 3) ≥ 10?", ["x ≥ 8", "x ≤ 8", "x ≥ 2", "x ≥ 13"], 0, "Divide both sides by 2: x − 3 ≥ 5. Add 3: x ≥ 8. Dividing by a positive number does not flip the sign."],
        ["lin", "A plumber charges a $45 fee plus $30 per hour. If a job cost $165, how many hours did it take?", ["3", "4", "5", "6"], 1, "The cost equation is 30h + 45 = 165. Subtract 45 to get 30h = 120, so h = 4."],
        ["sys", "If x + y = 10 and x − y = 4, what is the value of x?", ["3", "6", "7", "10"], 2, "Add the equations: 2x = 14, so x = 7. (Then y = 3.)"],
        ["sys", "The equations y = 2x + 1 and y = 3x − 4 are graphed. What is the x-coordinate of their intersection?", ["3", "5", "−5", "9"], 1, "Set the expressions equal: 2x + 1 = 3x − 4. Subtract 2x and add 4: x = 5."],
        ["sys", "The system 2x + 3y = 12 and 4x + 6y = k has infinitely many solutions. What is the value of k?", ["6", "12", "24", "48"], 2, "For infinitely many solutions the second equation must be a multiple of the first. Multiplying the first by 2 gives 4x + 6y = 24, so k = 24."],
      ],
      practice: [
        ["lin", "What is the solution to 5(x − 2) = 3x + 8?", ["5", "9", "14", "18"], 1, "Distribute: 5x − 10 = 3x + 8. Subtract 3x and add 10: 2x = 18, so x = 9."],
        ["lin", "Which of the following is the solution to −3x + 4 < 19?", ["x < −5", "x > −5", "x > 5", "x < 5"], 1, "Subtract 4: −3x < 15. Divide by −3 and flip the sign: x > −5."],
        ["sys", "Adult tickets cost $8 and child tickets cost $5. A total of 20 tickets were sold for $136. How many adult tickets were sold?", ["8", "10", "12", "14"], 2, "Let a + c = 20 and 8a + 5c = 136. Substitute c = 20 − a: 8a + 100 − 5a = 136, so 3a = 36 and a = 12."],
        ["sys", "If 3x + y = 11 and x − y = 1, what is the value of y?", ["1", "2", "3", "5"], 1, "Add the equations: 4x = 12, so x = 3. Then y = x − 1 = 2."],
      ],
    },
    {
      id: "sat-advanced",
      section: "Math",
      name: "Advanced Math",
      blurb: "Quadratics, exponents, and non-linear functions.",
      skills: [
        {
          id: "quad",
          name: "Quadratics & factoring",
          lesson:
            "A quadratic equation has the form ax² + bx + c = 0. Try to factor it first: find two numbers that multiply to c and add to b. The discriminant b² − 4ac tells you how many real solutions exist: positive means two, zero means one, negative means none. The vertex of y = ax² + bx + c sits at x = −b / 2a.",
          tips: [
            "Set the equation equal to zero before factoring.",
            "If b² − 4ac < 0, the parabola never touches the x-axis, so there are no real solutions.",
            "The graph's vertex is the maximum or minimum value — the SAT often asks for it.",
          ],
          links: [["Khan Academy: Quadratics", "https://www.khanacademy.org/math/algebra"], KA, CB],
        },
        {
          id: "expo",
          name: "Exponents & non-linear functions",
          lesson:
            "When you multiply powers with the same base, add the exponents; when you divide, subtract them. Exponential growth has the form y = a · b^t: a is the starting amount and b is the growth factor. If something doubles every 5 years, the exponent is t / 5, not 5t.",
          tips: [
            "Rewrite both sides with the same base to solve equations like 4^x = 64.",
            "For f(−2), put parentheses around the negative number before squaring.",
            "'Doubles every k units' means the exponent is (time ÷ k).",
          ],
          links: [["Khan Academy: Exponents & Algebra 2", "https://www.khanacademy.org/math/algebra2"], KA, CB],
        },
      ],
      placement: [
        ["quad", "What are the solutions of x² − 5x + 6 = 0?", ["x = −2 or x = −3", "x = 2 or x = 3", "x = 1 or x = 6", "x = −1 or x = −6"], 1, "Factor into (x − 2)(x − 3) = 0, since 2 × 3 = 6 and 2 + 3 = 5. The solutions are x = 2 and x = 3."],
        ["quad", "What is the x-coordinate of the vertex of y = x² − 6x + 5?", ["−3", "3", "5", "6"], 1, "Use x = −b / 2a = 6 / 2 = 3."],
        ["quad", "How many real solutions does x² + 4x + 9 = 0 have?", ["0", "1", "2", "Infinitely many"], 0, "The discriminant is 4² − 4(1)(9) = 16 − 36 = −20, which is negative, so there are no real solutions."],
        ["expo", "Which expression is equivalent to (x³ · x⁴) / x² ?", ["x⁵", "x⁹", "x⁶", "x¹⁴"], 0, "Add exponents in the numerator: x⁷. Then subtract the denominator's exponent: x⁷⁻² = x⁵."],
        ["expo", "If f(x) = 2 · 3ˣ, what is f(3)?", ["18", "54", "81", "216"], 1, "3³ = 27, and 2 × 27 = 54."],
        ["expo", "A population of 400 doubles every 5 years. Which expression gives the population after t years?", ["400 · 2^(5t)", "400 · 2^(t/5)", "400 · 5^(t/2)", "400 + 2t/5"], 1, "It doubles once per 5 years, so the number of doublings is t / 5. The population is 400 · 2^(t/5)."],
      ],
      practice: [
        ["quad", "If 2x² = 32, what are all possible values of x?", ["4 only", "−4 and 4", "−16 and 16", "−8 and 8"], 1, "Divide by 2: x² = 16. Taking the square root gives both x = 4 and x = −4."],
        ["quad", "If (x + 3)(x − 4) = 0 and x > 0, what is x?", ["−3", "3", "4", "12"], 2, "The solutions are x = −3 and x = 4. Only 4 is greater than 0."],
        ["expo", "If 4ˣ = 64, what is x?", ["2", "3", "4", "16"], 1, "64 = 4³, so x = 3."],
        ["expo", "If f(x) = x² − 3x, what is f(−2)?", ["−10", "−2", "2", "10"], 3, "f(−2) = (−2)² − 3(−2) = 4 + 6 = 10."],
      ],
    },
    {
      id: "sat-data",
      section: "Math",
      name: "Problem-Solving & Data Analysis",
      blurb: "Ratios, percentages, rates, and statistics.",
      skills: [
        {
          id: "ratio",
          name: "Ratios, percents & rates",
          lesson:
            "Percent change = (new − old) ÷ old × 100. A ratio of a:b splits a total into a + b equal parts. Rates like miles per hour let you scale up or down: find the unit rate first, then multiply.",
          tips: [
            "A 25% discount means you pay 75% of the original price — multiply by 0.75.",
            "For ratio totals, add the parts first: a 3:5 ratio has 8 parts.",
            "Always divide by the original amount when finding percent increase or decrease.",
          ],
          links: [["Khan Academy: Ratios & percents", "https://www.khanacademy.org/math/algebra"], KA, CB],
        },
        {
          id: "stats",
          name: "Data & statistics",
          lesson:
            "The mean is the sum divided by the count. The median is the middle value of the sorted list (average the two middle values if there is an even count). The mean is pulled toward extreme values (outliers), while the median is not. A random sample can be used to estimate a population percentage.",
          tips: [
            "Mean × count = sum. This trick solves most 'missing value' problems.",
            "Sort the data before finding the median.",
            "To estimate a population total, multiply the sample percentage by the population size.",
          ],
          links: [["Khan Academy: Statistics", "https://www.khanacademy.org/math/statistics-probability"], KA, CB],
        },
      ],
      placement: [
        ["ratio", "A shirt originally priced at $40 is on sale for 25% off. What is the sale price?", ["$10", "$30", "$35", "$50"], 1, "25% of $40 is $10, so the sale price is $40 − $10 = $30."],
        ["ratio", "The ratio of boys to girls in a club is 3 : 5. If there are 40 students in the club, how many are girls?", ["15", "20", "24", "25"], 3, "The ratio has 3 + 5 = 8 parts. Each part is 40 ÷ 8 = 5 students, so girls = 5 × 5 = 25."],
        ["ratio", "A car travels 150 miles in 2.5 hours. At the same rate, how many miles will it travel in 4 hours?", ["210", "240", "250", "375"], 1, "The rate is 150 ÷ 2.5 = 60 mph. In 4 hours: 60 × 4 = 240 miles."],
        ["stats", "What is the mean of the numbers 4, 8, 9, 11, and 18?", ["8", "9", "10", "11"], 2, "The sum is 50, and 50 ÷ 5 = 10."],
        ["stats", "What is the median of the data set 3, 7, 7, 10, 12, 20?", ["7", "8.5", "9.8", "10"], 1, "There are six values, so average the two middle values: (7 + 10) ÷ 2 = 8.5."],
        ["stats", "A random sample of 200 students from a school of 2,000 found that 60 prefer digital textbooks. Which is the best estimate of the number of students in the school who prefer digital textbooks?", ["60", "300", "600", "1,400"], 2, "60 of 200 is 30%. Applying 30% to the whole school: 0.30 × 2,000 = 600."],
      ],
      practice: [
        ["ratio", "A price rises from $50 to $65. What is the percent increase?", ["15%", "23%", "30%", "130%"], 2, "The change is $15. Divide by the original: 15 ÷ 50 = 0.30, or 30%."],
        ["ratio", "A recipe uses 3 cups of flour for every 2 cups of sugar. How many cups of flour are needed for 10 cups of sugar?", ["12", "15", "20", "30"], 1, "10 cups of sugar is 5 times the recipe's 2 cups, so flour is 5 × 3 = 15 cups."],
        ["stats", "The mean of five numbers is 12. Four of the numbers add up to 44. What is the fifth number?", ["8", "12", "14", "16"], 3, "The total of all five is 5 × 12 = 60. The fifth number is 60 − 44 = 16."],
        ["stats", "Which of the following is least affected by a single extreme outlier in a data set?", ["Mean", "Range", "Median", "Standard deviation"], 2, "The median depends only on the middle value, so one very large or small value barely changes it."],
      ],
    },
    {
      id: "sat-geometry",
      section: "Math",
      name: "Geometry & Trigonometry",
      blurb: "Area, volume, right triangles, and trig ratios.",
      skills: [
        {
          id: "area",
          name: "Area, perimeter & volume",
          lesson:
            "The SAT gives a reference sheet, but you should know these by heart: rectangle area = l × w, circle area = πr², cylinder volume = πr²h. Scaling every dimension of a 3-D shape by k multiplies its volume by k³.",
          tips: [
            "Use the perimeter to find a missing side first, then compute the area.",
            "Circle questions: check whether you're given the radius or the diameter.",
            "Doubling every length multiplies area by 4 and volume by 8.",
          ],
          links: [["Khan Academy: Geometry", "https://www.khanacademy.org/math/geometry"], KA, CB],
        },
        {
          id: "trig",
          name: "Right triangles & trigonometry",
          lesson:
            "Use the Pythagorean theorem (a² + b² = c²) for right triangles. Sine = opposite ÷ hypotenuse, cosine = adjacent ÷ hypotenuse, tangent = opposite ÷ adjacent (SOH-CAH-TOA). For complementary angles, sin(x°) = cos(90° − x°). The angles of a triangle always add to 180°.",
          tips: [
            "Memorize common triples: 3-4-5, 5-12-13, 8-15-17.",
            "A 45-45-90 triangle has sides in the ratio 1 : 1 : √2.",
            "If sin(x°) = cos(y°), then x + y = 90.",
          ],
          links: [["Khan Academy: Trigonometry", "https://www.khanacademy.org/math/trigonometry"], KA, CB],
        },
      ],
      placement: [
        ["area", "A rectangle has a perimeter of 30 and a length of 9. What is its area?", ["45", "54", "81", "135"], 1, "Two lengths use 18 of the perimeter, so the two widths total 12 and the width is 6. Area = 9 × 6 = 54."],
        ["area", "What is the area of a circle with a radius of 5?", ["10π", "25π", "50π", "100π"], 1, "Area = πr² = π(5)² = 25π."],
        ["area", "A cylinder has a radius of 3 and a height of 10. What is its volume?", ["30π", "60π", "90π", "300π"], 2, "Volume = πr²h = π(3²)(10) = 90π."],
        ["trig", "A right triangle has legs of length 6 and 8. What is the length of its hypotenuse?", ["10", "12", "14", "48"], 0, "6² + 8² = 36 + 64 = 100, so the hypotenuse is √100 = 10."],
        ["trig", "In right triangle ABC, the side opposite angle A is 5 and the hypotenuse is 13. What is sin A?", ["5/12", "5/13", "12/13", "13/5"], 1, "Sine is opposite ÷ hypotenuse = 5/13."],
        ["trig", "If sin(x°) = cos(40°) and 0 < x < 90, what is x?", ["20", "40", "50", "80"], 2, "Sine and cosine of complementary angles are equal, so x + 40 = 90 and x = 50."],
      ],
      practice: [
        ["area", "The diagonal of a square is 8√2. What is the area of the square?", ["32", "64", "128", "256"], 1, "A square's diagonal is side × √2, so the side is 8. Area = 8² = 64."],
        ["area", "A rectangular box has volume 24. If each of its three dimensions is doubled, what is the new volume?", ["48", "96", "192", "384"], 2, "Doubling each dimension multiplies volume by 2³ = 8. So 24 × 8 = 192."],
        ["trig", "A 45-45-90 right triangle has legs of length 7. What is the length of its hypotenuse?", ["7", "7√2", "7√3", "14"], 1, "In a 45-45-90 triangle the hypotenuse is a leg times √2, so 7√2."],
        ["trig", "In a right triangle, the side opposite angle A is 9 and the side adjacent to A is 12. What is tan A?", ["3/5", "3/4", "4/3", "5/4"], 1, "Tangent is opposite ÷ adjacent = 9/12 = 3/4."],
      ],
    }
  );

  SAT.links = [BB];
})();
