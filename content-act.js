(() => {
  window.PREP = window.PREP || {};
  const ACT = (PREP.ACT = { name: "ACT", sections: ["English", "Math", "Reading", "Science"], categories: [] });

  const PREPPAGE = ["ACT: Official test preparation", "https://www.act.org/content/act/en/products-and-services/the-act/test-preparation.html"];
  const FREE = ["ACT: Free test prep & practice questions", "https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/free-act-test-prep.html"];
  const GR = ["Khan Academy: Grammar", "https://www.khanacademy.org/humanities/grammar"];
  const OWL = ["Purdue OWL: Writing & grammar guides", "https://owl.purdue.edu/owl/general_writing/index.html"];

  const LIGHTHOUSE =
    "For forty years, Marta Reyes rose before dawn to tend the lighthouse on Cutter Point. Ships she never met passed safely each night because of her patient attention to a lamp few people ever saw. When automation ended her job, the town gathered on the shore to thank her, and she was surprised to learn how many sailors knew her name.";
  const GARDENS =
    "In many cities, vacant lots once seen as eyesores are being turned into community gardens. Residents who grow vegetables there report not only fresher food but also stronger ties with neighbors, and some gardens now donate part of each harvest to local food pantries.";

  // Question format: [skillId, question, [choices], correctIndex, explanation, passage?]
  ACT.categories.push(
    {
      id: "act-english",
      section: "English",
      name: "English",
      blurb: "Grammar, punctuation, and writing style.",
      skills: [
        {
          id: "gram",
          name: "Punctuation & grammar",
          lesson:
            "ACT English rewards knowing a handful of rules well: pronoun case (between you and me), subject–verb agreement, commas versus semicolons, apostrophes, and verb tense. Look at the underlined part, say it quietly, and test each answer in the full sentence.",
          tips: [
            "A comma plus a conjunction (and, but, so) can join two complete sentences; a comma alone cannot.",
            "Use 'its' for possession and 'it's' only for 'it is' or 'it has'.",
            "After prepositions like 'between', use object pronouns (me, him, her).",
          ],
          links: [GR, OWL, PREPPAGE, FREE],
        },
        {
          id: "style",
          name: "Style, concision & organization",
          lesson:
            "When several answers are grammatically correct, the ACT usually wants the shortest one that keeps the full meaning. Cut redundancy ('each and every', 'happy and glad') and wordy phrases ('due to the fact that' → 'because'). Keep the tone consistent: formal passages need formal wording.",
          tips: [
            "If two choices say the same thing, the shorter one is usually right.",
            "Watch for pairs of words that repeat the same idea.",
            "Match the passage's tone — avoid slang in formal writing.",
          ],
          links: [OWL, PREPPAGE, FREE],
        },
      ],
      placement: [
        ["gram", "Which choice is correct?", ["I", "me", "myself", "mine"], 1, "'Between' is a preposition, so it takes an object pronoun: 'between you and me'.", "Between you and ____, the plan seems risky."],
        ["gram", "Which choice is correct?", [",", "; and", ", and", "(no punctuation)"], 2, "Two complete sentences joined by 'and' need a comma before the conjunction. A semicolon doesn't combine with 'and', and no punctuation creates a run-on.", "The storm knocked out power across the county ____ schools closed for two days."],
        ["gram", "Which choice is correct?", ["school's", "schools", "schools'", "schools's"], 0, "A single school owns the gym, so the singular possessive 'school's' is correct.", "The ____ new gym opens Monday."],
        ["style", "Which choice is most concise while keeping the meaning?", ["Because it was raining, the game was postponed.", "The game was postponed due to the fact that it was raining outside.", "The game, due to the fact of rain, was postponed.", "Owing to the circumstance of rain, the game was postponed."], 0, "'Because' replaces the wordy 'due to the fact that', and the sentence loses nothing.", "Due to the fact that it was raining, the game was postponed."],
        ["style", "Which choice best maintains the formal tone of the essay?", ["blown away", "astonished", "freaked out", "totally stoked"], 1, "'Astonished' is formal; the other choices are slang.", "The scientists were ____ by the results of the experiment."],
        ["style", "Which choice eliminates the redundancy?", ["The reason the road closed was because of flooding.", "The road closed because of flooding.", "The reason being the road closed due to flooding.", "Because of the reason of flooding, the road closed."], 1, "'The reason … was because' says the same thing twice. 'The road closed because of flooding' is clear and concise.", "The reason the road closed was because of flooding."],
      ],
      practice: [
        ["gram", "Which choice is correct?", ["I", "me", "myself", "mine"], 0, "The sentence means 'than I did', so the subject pronoun 'I' is correct.", "Lena ran faster than ____ in the relay."],
        ["gram", "Which choice is correct?", ["it's", "its", "its'", "their"], 1, "'Its' is the possessive for 'the dog's tail'. 'It's' means 'it is'.", "The dog wagged ____ tail."],
        ["style", "Which revision eliminates the redundancy?", ["Each student must sign in.", "Each and every single student must sign in.", "Every student each must sign in.", "Each single student, each, must sign in."], 0, "'Each', 'every', and 'single' all mean the same thing here — one word is enough.", "Each and every single student must sign in."],
        ["style", "Which choice is the most concise?", ["She was glad when she heard the news.", "She was happy and glad when she heard the news.", "She was happy and also glad on hearing news.", "She felt happy and glad when she heard news."], 0, "'Happy' and 'glad' mean the same, so keep only one.", "She was happy and glad when she heard the news."],
      ],
    },
    {
      id: "act-math",
      section: "Math",
      name: "Math",
      blurb: "Algebra, geometry, functions, and trigonometry.",
      skills: [
        {
          id: "alg",
          name: "Algebra & functions",
          lesson:
            "Most ACT algebra comes down to solving equations step by step, evaluating functions by substitution, and understanding slope. To evaluate f(a), replace every x with a. Slope between two points = (change in y) ÷ (change in x).",
          tips: [
            "Distribute carefully, especially with a negative sign in front of a parentheses.",
            "Plug the answer choices back into the equation when you're unsure.",
            "To compare powers, rewrite both sides with the same base.",
          ],
          links: [["Khan Academy: Algebra", "https://www.khanacademy.org/math/algebra"], PREPPAGE, FREE],
        },
        {
          id: "geo",
          name: "Geometry & trigonometry",
          lesson:
            "Know the Pythagorean triples (3-4-5, 5-12-13), the formulas for area and circumference, the angle sum of a triangle (180°), the distance formula, and the basic trig values for 30°, 45°, and 60°. Draw a quick sketch whenever a problem describes a shape.",
          tips: [
            "A triangle with sides 5, 12, 13 is a right triangle, so area = ½ · 5 · 12.",
            "Circumference = π × diameter.",
            "sin 30° = ½, and sin 60° = √3/2.",
          ],
          links: [["Khan Academy: Geometry", "https://www.khanacademy.org/math/geometry"], ["Khan Academy: Trigonometry", "https://www.khanacademy.org/math/trigonometry"], PREPPAGE, FREE],
        },
        {
          id: "prob",
          name: "Probability, counting & statistics",
          lesson:
            "Probability = favorable outcomes ÷ total outcomes. For independent events multiply the probabilities. To count combined choices, multiply the number of options at each step (the counting principle). Mean, median, and mode summarize a data set: the median is the middle value after sorting.",
          tips: [
            "Simplify probabilities as fractions and make sure they are between 0 and 1.",
            "'And' between independent events means multiply; 'not' means 1 − P(event).",
            "Sort a list before finding the median.",
          ],
          links: [["Khan Academy: Statistics & probability", "https://www.khanacademy.org/math/statistics-probability"], PREPPAGE, FREE],
        },
      ],
      placement: [
        ["alg", "What is the solution to 4x − 7 = 2x + 9?", ["2", "6", "8", "16"], 2, "Subtract 2x from both sides: 2x − 7 = 9. Add 7: 2x = 16. Divide by 2: x = 8."],
        ["alg", "If f(x) = x² + 3x − 4, what is f(2)?", ["2", "6", "10", "14"], 1, "f(2) = 2² + 3(2) − 4 = 4 + 6 − 4 = 6."],
        ["alg", "What is the slope of the line through (1, 2) and (5, 10)?", ["1/2", "2", "4", "8"], 1, "Slope = (10 − 2) ÷ (5 − 1) = 8 ÷ 4 = 2."],
        ["geo", "A triangle has sides of 5, 12, and 13. What is its area?", ["30", "32.5", "60", "65"], 0, "5² + 12² = 13², so it is a right triangle with legs 5 and 12. Area = ½ × 5 × 12 = 30."],
        ["geo", "What is the circumference of a circle with a diameter of 10?", ["5π", "10π", "20π", "100π"], 1, "Circumference = π × diameter = 10π."],
        ["geo", "What is the value of sin 30°?", ["√3/2", "√2/2", "1/2", "1"], 2, "sin 30° = 1/2, a basic value to memorize."],
        ["prob", "A bag holds 3 red, 5 blue, and 2 green marbles. If one marble is chosen at random, what is the probability that it is blue?", ["1/5", "1/2", "1/3", "5/8"], 1, "There are 10 marbles in total and 5 are blue, so P(blue) = 5/10 = 1/2."],
        ["prob", "A restaurant offers 4 appetizers, 5 entrees, and 3 desserts. How many different meals can be made with one of each?", ["12", "47", "60", "120"], 2, "By the counting principle, multiply the choices: 4 × 5 × 3 = 60."],
        ["prob", "What is the median of the numbers 3, 9, 4, 12, and 8?", ["4", "8", "9", "7.2"], 1, "Sorted, the numbers are 3, 4, 8, 9, 12. The middle value is 8. (7.2 is the mean.)"],
      ],
      practice: [
        ["prob", "A fair coin is flipped twice. What is the probability of getting two heads?", ["1/2", "1/3", "1/4", "1/8"], 2, "The flips are independent, so multiply: 1/2 × 1/2 = 1/4."],
        ["prob", "In how many different orders can 4 students stand in a line?", ["8", "12", "16", "24"], 3, "There are 4 × 3 × 2 × 1 = 24 arrangements."],
        ["alg", "Which expression is equal to 3(2x − 4) − 2(x − 5)?", ["4x − 22", "4x − 2", "8x − 2", "4x + 22"], 1, "Distribute: 6x − 12 − 2x + 10. Combine like terms: 4x − 2."],
        ["alg", "If 2ˣ = 32, what is x?", ["5", "4", "6", "16"], 0, "32 = 2⁵, so x = 5."],
        ["geo", "The angles of a triangle are in the ratio 1 : 2 : 3. What is the measure of the largest angle?", ["60°", "90°", "108°", "120°"], 1, "The ratio has 6 parts and the angles sum to 180°, so each part is 30°. The largest angle is 3 × 30° = 90°."],
        ["geo", "What is the distance between the points (0, 0) and (6, 8)?", ["10", "14", "12", "√14"], 0, "Distance = √(6² + 8²) = √100 = 10."],
      ],
    },
    {
      id: "act-reading",
      section: "Reading",
      name: "Reading",
      blurb: "Understanding passages, inferences, and vocabulary in context.",
      skills: [
        {
          id: "main",
          name: "Main idea & details",
          lesson:
            "The main idea is the author's overall point; details are the facts that support it. For detail questions the answer is stated directly in the passage — find the line and match it. Beware of choices that are true in real life but not in the passage.",
          tips: [
            "Read the first and last sentences of each paragraph to find the main idea quickly.",
            "For detail questions, locate the exact line before choosing.",
            "Wrong answers often use words from the passage but change the meaning.",
          ],
          links: [PREPPAGE, FREE, ["Khan Academy: Reading comprehension", "https://www.khanacademy.org/ela/cc-6th-reading-vocab"]],
        },
        {
          id: "infer",
          name: "Inference & vocabulary in context",
          lesson:
            "An inference is something the passage strongly implies without saying outright. For vocabulary-in-context questions, ignore the word's most common meaning and ask what it means in this sentence. Substitute each answer into the sentence to see which fits.",
          tips: [
            "Look for clues in the surrounding sentences before choosing a meaning.",
            "The right inference is always supported by the text — avoid answers that go too far.",
            "Test each answer by plugging it in for the word.",
          ],
          links: [PREPPAGE, FREE],
        },
      ],
      placement: [
        ["main", "Which choice best states the main idea of the passage?", ["Lighthouses are no longer needed", "A lighthouse keeper's unseen work earned lasting appreciation", "Marta Reyes disliked her job", "Sailors rarely rely on lighthouses"], 1, "The passage describes Marta's quiet, unseen work and the gratitude she received when it ended.", LIGHTHOUSE],
        ["main", "According to the passage, what ended Marta's job?", ["A storm", "Her retirement", "Automation", "A lack of funding"], 2, "The passage says 'When automation ended her job'.", LIGHTHOUSE],
        ["main", "Which choice best states the main idea of the passage?", ["Vacant lots are best left empty", "Community gardens in vacant lots provide food and strengthen neighborhoods", "Gardens are too expensive for cities", "Food pantries refuse donated vegetables"], 1, "The passage mentions fresher food, stronger ties between neighbors, and donations to pantries.", GARDENS],
        ["infer", "It can reasonably be inferred that Marta was surprised because she", ["had expected to be forgotten", "had believed her work went unnoticed", "disliked the town", "never wanted to leave her job"], 1, "She was surprised at how many sailors 'knew her name', which suggests she thought almost no one knew her.", LIGHTHOUSE],
        ["infer", "The detail about Elena's hands suggests that she", ["was more shaken than she let on", "had forgotten the music", "was angry at the audience", "planned to stop playing"], 0, "She kept playing perfectly, but her hands trembled slightly — she was nervous even though she appeared calm.", "When the lights flickered during the recital, pianist Elena kept playing without missing a note, though her hands, resting a moment longer than usual on the final chord, trembled slightly."],
        ["infer", "As used in the passage, 'ties' most nearly means", ["ropes", "connections", "scores", "obligations"], 1, "'Stronger ties with neighbors' means stronger connections or relationships.", GARDENS],
      ],
      practice: [
        ["main", "According to the passage, how often does a snake plant need water?", ["Daily", "Weekly", "Every few weeks", "Only in winter"], 2, "The passage says it 'needs water only every few weeks'.", "Because it takes so little care, the snake plant is a favorite of beginners. It tolerates dim light, needs water only every few weeks, and rarely suffers from pests."],
        ["main", "Which choice best states the main idea of the passage?", ["Beginners should avoid houseplants", "The snake plant is popular with beginners because it requires little care", "Pests are a serious problem for houseplants", "Dim light is harmful to plants"], 1, "Everything in the passage supports the idea that the plant is easy to care for.", "Because it takes so little care, the snake plant is a favorite of beginners. It tolerates dim light, needs water only every few weeks, and rarely suffers from pests."],
        ["infer", "The passage suggests that Daniel", ["was more interested in the contest than he admitted", "had won the contest", "forgot about the contest", "disliked his friends"], 0, "He said he didn't care but checked the results board three times — his actions show real interest.", "Though Daniel claimed he had no interest in the contest, he checked the results board three times before lunch."],
        ["infer", "As used in the passage, 'candid' most nearly means", ["secretive", "lengthy", "frank", "angry"], 2, "The mayor's remarks surprised reporters used to carefully worded statements, so 'candid' means honest and direct (frank).", "The mayor's candid remarks surprised reporters, who were used to carefully worded statements."],
      ],
    },
    {
      id: "act-science",
      section: "Science",
      name: "Science",
      blurb: "Interpreting data, tables, and experiments.",
      skills: [
        {
          id: "data",
          name: "Reading graphs & tables",
          lesson:
            "The ACT Science test is mostly about reading data, not memorizing science facts. Find the correct row and column, compare values, and describe the trend: increasing, decreasing, or leveling off. Pay attention to units and to how much the values change between points.",
          tips: [
            "Underline what each axis or column measures before answering.",
            "To describe a trend, compare consecutive values.",
            "Predictions should follow the pattern in the data, not outside knowledge.",
          ],
          links: [["Khan Academy: Science", "https://www.khanacademy.org/science"], PREPPAGE, FREE],
        },
        {
          id: "exp",
          name: "Experiments & hypotheses",
          lesson:
            "The independent variable is the one the experimenter changes; the dependent variable is what's measured; controls are kept the same. A good experiment changes only one thing at a time and repeats trials. In 'conflicting viewpoints' passages, find what each scientist claims and which evidence supports or weakens each.",
          tips: [
            "Ask: 'What did the experimenter change on purpose?' That's the independent variable.",
            "Evidence that matches a scientist's claim supports it; evidence that contradicts it weakens it.",
            "Repeating trials improves reliability.",
          ],
          links: [["Khan Academy: Science", "https://www.khanacademy.org/science"], PREPPAGE, FREE],
        },
      ],
      placement: [
        ["data", "According to the table, how tall were plants that received 8 hours of light per day?", ["6 cm", "11 cm", "15 cm", "18 cm"], 1, "Find 8 in the first column; the matching height is 11 cm.", "Plant height after 4 weeks\nLight (hrs/day) | Height (cm)\n4 | 6\n8 | 11\n12 | 15\n16 | 18"],
        ["data", "Based on the table, as the hours of light increased, the plants' height:", ["Decreased", "Increased", "Stayed the same", "Increased then decreased"], 1, "Height rose from 6 to 11 to 15 to 18 cm — it increased with more light.", "Plant height after 4 weeks\nLight (hrs/day) | Height (cm)\n4 | 6\n8 | 11\n12 | 15\n16 | 18"],
        ["data", "How did the increase in height between consecutive light levels change as hours of light increased?", ["It stayed constant", "It decreased", "It increased", "It cannot be determined"], 1, "The gains were 5 cm, then 4 cm, then 3 cm — each increase was smaller than the last.", "Plant height after 4 weeks\nLight (hrs/day) | Height (cm)\n4 | 6\n8 | 11\n12 | 15\n16 | 18"],
        ["exp", "In this experiment, which is the independent variable?", ["The time the water took to boil", "The amount of salt added", "The volume of water in each pot", "The type of burner"], 1, "The student changed the amount of salt on purpose, so it is the independent variable. The boiling time is what is measured.", "A student tested whether salt affects how quickly water boils. She heated 500 mL of water in each of three pots. Pot A had no salt, Pot B had 10 g of salt, and Pot C had 30 g of salt. All pots were heated on identical burners."],
        ["exp", "Which of the following was held constant in the experiment?", ["The amount of salt", "The volume of water (500 mL)", "The boiling time", "Which pot was used"], 1, "Every pot had 500 mL of water, so the volume was a control. Salt amount changed, and boiling time was measured.", "A student tested whether salt affects how quickly water boils. She heated 500 mL of water in each of three pots. Pot A had no salt, Pot B had 10 g of salt, and Pot C had 30 g of salt. All pots were heated on identical burners."],
        ["exp", "Which step would best improve the reliability of the results?", ["Using only one pot", "Repeating each trial several times and averaging the results", "Using a different amount of water for each pot", "Changing the burner for each pot"], 1, "Repeating trials and averaging reduces the effect of random error.", "A student tested whether salt affects how quickly water boils. She heated 500 mL of water in each of three pots. Pot A had no salt, Pot B had 10 g of salt, and Pot C had 30 g of salt. All pots were heated on identical burners."],
      ],
      practice: [
        ["data", "What was the temperature of the water at 10 minutes?", ["46 °C", "56 °C", "70 °C", "90 °C"], 1, "At Time = 10, the table lists 56 °C.", "Water temperature over time\nTime (min) | Temp (°C)\n0 | 90\n5 | 70\n10 | 56\n15 | 46"],
        ["data", "During which time interval did the temperature fall the most?", ["5–10 minutes", "0–5 minutes", "10–15 minutes", "They fell the same amount"], 1, "The drops were 20 °C (0–5), 14 °C (5–10), and 10 °C (10–15). The largest drop was from 0 to 5 minutes.", "Water temperature over time\nTime (min) | Temp (°C)\n0 | 90\n5 | 70\n10 | 56\n15 | 46"],
        ["exp", "Which observation would best support Student 1's explanation?", ["Ice is colder than liquid water", "Ice has a lower mass per unit of volume than liquid water", "Ice melts at room temperature", "Ice is clear"], 1, "Student 1 claims density causes floating. Lower mass per volume means lower density, which supports it.", "Student 1: Ice floats because it is less dense than liquid water.\nStudent 2: Ice floats because it is colder than the water."],
        ["exp", "Which observation would most weaken Student 2's explanation?", ["Ice floats in a bath of water that is at the same temperature as the ice", "Ice melts faster in warm water", "Ice cubes come in many shapes", "Colder objects are always heavier"], 0, "If ice floats even when the water is at the same temperature, being colder can't be the reason it floats.", "Student 1: Ice floats because it is less dense than liquid water.\nStudent 2: Ice floats because it is colder than the water."],
      ],
    }
  );
})();
