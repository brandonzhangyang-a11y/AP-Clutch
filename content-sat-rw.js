(() => {
  const SAT = (PREP.SAT = PREP.SAT || { name: "SAT", sections: ["Math", "Reading & Writing"], categories: [] });

  const KA = ["Khan Academy: Digital SAT Reading & Writing", "https://www.khanacademy.org/test-prep/v2-sat-reading-and-writing"];
  const CB = ["College Board: free official practice", "https://satsuite.collegeboard.org/practice"];
  const GR = ["Khan Academy: Grammar", "https://www.khanacademy.org/humanities/grammar"];
  const OWL = ["Purdue OWL: Writing & grammar guides", "https://owl.purdue.edu/owl/general_writing/index.html"];

  // Question format: [skillId, question, [choices], correctIndex, explanation, passage?]
  SAT.categories.push(
    {
      id: "sat-craft",
      section: "Reading & Writing",
      name: "Craft & Structure",
      blurb: "Vocabulary in context and how texts are built.",
      skills: [
        {
          id: "vocab",
          name: "Words in context",
          lesson:
            "These questions test whether you can pick the word that best fits the meaning and tone of the sentence — not the word you know best. Read the sentence, predict your own word for the blank, then find the choice closest to your prediction. Clue words like 'although', 'rather than', and 'because' reveal whether the blank should agree with or contrast with the context.",
          tips: [
            "Cover the choices and predict a word before you look at them.",
            "Look for contrast clues (although, but, rather than) and support clues (because, so, since).",
            "Eliminate words that are too extreme or have the wrong tone.",
          ],
          links: [KA, CB, ["Khan Academy: Vocabulary practice", "https://www.khanacademy.org/ela/cc-6th-reading-vocab"]],
        },
        {
          id: "struct",
          name: "Text structure & purpose",
          lesson:
            "Ask yourself what job each sentence does: does it introduce a claim, give evidence, offer a counterexample, or propose an alternative? The overall purpose is usually found by combining those jobs. Transitions like 'But', 'In fact', and 'Yet' mark a shift in the argument.",
          tips: [
            "Summarize each sentence's job in 2–3 words before choosing an answer.",
            "A 'But' or 'Yet' usually signals the author's real point.",
            "Wrong answers often describe details instead of the function of the sentence or passage.",
          ],
          links: [KA, CB],
        },
      ],
      placement: [
        ["vocab", "As used in the text, what does the word 'convoluted' most nearly mean?", ["Complicated and hard to follow", "Brief and direct", "Enthusiastic", "Outdated"], 0, "The employees needed a guide to complete one form, so the requirements were complicated and hard to follow.", "Although the new policy was intended to simplify the process, many employees found its requirements so convoluted that they needed a guide to complete a single form."],
        ["vocab", "Which choice completes the text with the most logical and precise word?", ["dubious", "robust", "trivial", "ambiguous"], 1, "The results held up when other teams repeated the work, so even critics had to concede the data were strong and reliable — 'robust'.", "The scientist's findings were initially met with skepticism, but after three independent teams replicated her results, even her harshest critics had to concede that the data were ______."],
        ["vocab", "Which choice completes the text with the most logical and precise word?", ["abrupt", "unforeseen", "gradual", "spectacular"], 2, "The text contrasts a 'sudden collapse' with decline that unfolded 'in small steps over two decades' — that describes a gradual decline.", "Rather than a sudden collapse, the town's decline was ______, unfolding in small steps over two decades."],
        ["struct", "Which choice best describes the function of the second sentence in the text?", ["It restates the critics' argument in different words", "It presents evidence that complicates the claim in the first sentence", "It introduces an example unrelated to the argument", "It provides a definition of company culture"], 1, "The first sentence gives the critics' claim. The second begins with 'But' and offers survey evidence that challenges it.", "Critics argue that remote work erodes company culture. But a recent survey of 500 firms found that teams meeting in person only once a quarter reported culture scores equal to those of teams that met weekly. This suggests that the frequency of contact may matter less than the quality of the interaction."],
        ["struct", "What is the main purpose of the text?", ["To criticize a museum's choice of artifacts", "To compare two pottery traditions", "To describe how an exhibit uses an ordinary object to reveal a hidden history", "To explain how clay pots are made"], 2, "The passage walks through an exhibit that starts with a simple pot and ends up revealing the forgotten maker who shaped a regional tradition.", "The museum's new exhibit begins with a single clay pot, unremarkable at first glance. But as visitors move through the galleries, they learn that the pot's maker, a woman whose name was lost for centuries, quietly shaped an entire region's pottery tradition."],
        ["struct", "Which choice best describes the overall structure of the text?", ["It describes a problem and then a solution that has been put in place", "It presents a common explanation, offers evidence against it, then proposes an alternative", "It compares two species of frogs", "It narrates events in chronological order"], 1, "The text begins with habitat loss (the common explanation), then notes frogs vanished from protected wetlands (evidence against it), and finally suggests a fungal disease (the alternative).", "A common explanation for the decline of a local frog species is habitat loss. Yet researchers observed that frogs vanished even from protected wetlands. They now suspect a fungal disease."],
      ],
      practice: [
        ["vocab", "Which choice completes the text with the most logical and precise word?", ["impartial", "hostile", "nostalgic", "jubilant"], 0, "She praises neither side and offers only facts, which describes an impartial (neutral) tone.", "The author's tone is ______: she praises neither side and offers only facts."],
        ["vocab", "Which choice completes the text with the most logical and precise word?", ["conclusive", "scant", "abundant", "unanimous"], 1, "The committee wanted more data, so the existing evidence must have been scant (too little to decide).", "Because the evidence was so ______, the committee decided to gather more data before reaching a conclusion."],
        ["struct", "Which choice best states the author's primary purpose?", ["To summarize the novel's plot", "To argue the novel has no real ending", "To suggest the ending can support more than one reading", "To criticize the narrator's choices"], 2, "The author acknowledges the common 'tragic' reading but says the ending 'can just as easily be read as hopeful' — more than one reading.", "Though many consider the novel's ending tragic, the final chapter, in which the narrator finally forgives her sister, can just as easily be read as hopeful."],
        ["struct", "Which choice best describes the structure of the text?", ["It defines a term and then gives its cause", "It describes a behavior and then notes a change in that behavior", "It argues against a scientific theory", "It compares two kinds of plants"], 1, "The first sentence describes young sunflowers following the sun. The second says the behavior stops once the flowers mature.", "Sunflowers turn to follow the sun across the sky when they are young. This behavior, called heliotropism, stops once the flowers mature and face east permanently."],
      ],
    },
    {
      id: "sat-info",
      section: "Reading & Writing",
      name: "Information & Ideas",
      blurb: "Finding the main idea, key details, and what a text supports.",
      skills: [
        {
          id: "central",
          name: "Central ideas & details",
          lesson:
            "The central idea is the point that ties the whole passage together, while details are the specific facts that support it. For 'main idea' questions, avoid answers that mention only one detail or go beyond what the text says. For detail questions, go back to the passage and match the exact wording.",
          tips: [
            "Underline the sentence with the author's conclusion (often starting with 'This suggests' or 'In fact').",
            "Wrong answers are often true but too narrow, or not supported by the text at all.",
            "For detail questions, quote the line that proves your answer.",
          ],
          links: [KA, CB],
        },
        {
          id: "infer",
          name: "Inferences & evidence",
          lesson:
            "An inference is a conclusion the text strongly supports without stating it directly. For 'which finding would support or weaken a claim' questions, pick the choice that directly connects to the claim and keeps all other conditions fair. Avoid answers that bring in opinions or unrelated facts.",
          tips: [
            "The correct inference is the one you can prove using the text — not the most interesting one.",
            "To strengthen a claim, find evidence that links cause and result directly.",
            "In experiments, a fair test changes only one thing at a time.",
          ],
          links: [KA, CB],
        },
      ],
      placement: [
        ["central", "Which choice best states the main idea of the text?", ["Octopuses prefer coconut shells over all other shelters", "Octopuses are the only animals that use tools", "Octopus tool use suggests planning abilities once thought limited to vertebrates", "Biologists have stopped studying vertebrates"], 2, "The last sentence gives the main idea: the behavior suggests planning abilities biologists once thought limited to vertebrates.", "Octopuses have been observed using coconut shells as portable shelters, carrying them across the seafloor and assembling them when threatened. Such behavior suggests a capacity for planning that biologists once thought limited to vertebrates."],
        ["central", "According to the text, what happened after the library extended its weekend hours?", ["Saturday visits rose while weekday visits stayed about the same", "Weekday visits rose while Saturday visits fell", "Total visits fell by 40%", "The library closed on weekdays"], 0, "The text says Saturday visits rose by 40% while weekday visits stayed about the same.", "After the library extended its weekend hours, visits on Saturdays rose by 40%, while weekday visits stayed about the same. Librarians concluded that many patrons had previously been unable to visit during weekday hours."],
        ["central", "Which choice best states the main idea of the text?", ["Volcanoes are too dangerous for farming", "Despite the dangers of eruptions, volcanic ash benefits nearby farmland", "Farmers should avoid mineral-rich soil", "Ash from volcanoes harms crops"], 1, "The text says eruptions can be devastating but the ash enriches soil, which is why farmers cultivate land near volcanoes.", "Although volcanic eruptions can devastate nearby communities, the ash they release enriches soil with minerals, which is one reason farmers have long cultivated land near volcanoes."],
        ["infer", "Which choice can most reasonably be inferred from the text?", ["Customers never accepted the paper bags", "Customers' initial dissatisfaction faded as they adjusted to the change", "The bakery should return to plastic bags", "Paper bags made the bread taste better"], 1, "Sales dropped at first, complaints came mostly in the first two weeks, and sales fully recovered — suggesting customers adjusted.", "When the bakery switched from plastic to paper bags, sales of its bread dropped 10% in the first month, then recovered fully by month three. The owner noted that most complaints came in the first two weeks."],
        ["infer", "Which finding, if true, would most directly support the farmers' claim?", ["Plot A was larger than Plot B", "Farmers enjoyed applying the fertilizer", "Plot A produced more tomatoes per plant than Plot B under identical soil and watering conditions", "The fertilizer was cheaper than other brands"], 2, "Only the correct choice shows higher yield from the fertilizer while keeping other conditions the same.", "Farmers claim a new fertilizer increases tomato yield. In a study, Plot A received the fertilizer and Plot B did not."],
        ["infer", "Which finding, if true, would most strengthen the researchers' hypothesis?", ["Cave beetles are smaller than surface beetles", "Beetles that keep their eyes in dark caves have fewer offspring than eyeless beetles", "Cave temperatures are cooler than the surface", "Some surface beetles also have small eyes"], 1, "If keeping eyes in the dark costs offspring, eyes are a disadvantage there — which directly supports the energy-cost idea.", "Researchers hypothesize that the cave beetle has lost its eyes because, in total darkness, eyes offer no survival advantage and growing them costs energy."],
      ],
      practice: [
        ["central", "Which choice best states the main idea of the text?", ["Driving always takes less time than walking", "Commuters should quit their jobs to reduce stress", "Active commuting was linked to lower stress, even when it took longer", "Long commutes cause the most stress"], 2, "The text compares groups and finds that active commuters reported lower stress even with longer commutes.", "Researchers tracked 300 commuters for a year. Those who walked or cycled part of their commute reported lower stress levels than those who drove the entire way, even when their commute took longer."],
        ["central", "According to the text, which is true of the Arctic tern?", ["Its yearly round trip can exceed 40,000 kilometers", "It migrates only within the Arctic", "It does not migrate", "It travels shorter distances than most animals"], 0, "The text states the round trip can exceed 40,000 kilometers and is the longest known migration of any animal.", "The Arctic tern migrates from the Arctic to Antarctica and back each year, a round trip that can exceed 40,000 kilometers, the longest known migration of any animal."],
        ["infer", "Which choice can most reasonably be inferred from the text?", ["Drivers prefer the alternate route to the bridge", "The alternate route has limited capacity to absorb extra traffic", "The bridge repairs were unnecessary", "Commutes are always 20 minutes longer"], 1, "Traffic doubled and commutes got longer, suggesting the alternate route can't handle the extra drivers well.", "Every time the bridge closed for repairs, traffic on the alternate route doubled, and the average commute lengthened by 20 minutes."],
        ["infer", "Which result would best support the student's claim?", ["Both groups recalled about the same number of words", "The silent group recalled more words", "The classical-music group recalled significantly more words than the silent group", "Volunteers reported liking the music"], 2, "To support the claim that music improves memory, the music group must remember more than the silent group.", "A student claims that listening to classical music improves memory. In her experiment, 30 volunteers memorized a word list while listening to classical music, and 30 memorized the list in silence."],
      ],
    },
    {
      id: "sat-conventions",
      section: "Reading & Writing",
      name: "Standard English Conventions",
      blurb: "Punctuation, sentence boundaries, and grammar.",
      skills: [
        {
          id: "punct",
          name: "Punctuation & sentence boundaries",
          lesson:
            "A full sentence (independent clause) can be joined to another with a semicolon or a comma plus a conjunction — never with only a comma (a comma splice). A colon must follow a complete sentence. Extra information in the middle of a sentence needs a pair of commas (or dashes/parentheses): never just one.",
          tips: [
            "Test it: if you can remove the extra phrase and the sentence still works, set it off with a pair of commas.",
            "A semicolon needs a complete sentence on both sides.",
            "A colon needs a complete sentence before it, then a list or explanation after.",
          ],
          links: [GR, OWL, KA],
        },
        {
          id: "agree",
          name: "Subject–verb agreement & verb forms",
          lesson:
            "The verb must match its true subject, not the noun closest to it. 'The collection of coins' takes a singular verb because the subject is 'collection'. With 'neither … nor' the verb agrees with the nearer subject. Past-perfect (had + verb) shows an earlier action; 'were' is used for hypothetical statements.",
          tips: [
            "Cross out prepositional phrases (of …, in …) to find the real subject.",
            "'Each', 'every', 'either', and 'neither' on their own are singular.",
            "For 'If I ___ you,' use 'were' — it's a hypothetical.",
          ],
          links: [GR, OWL, KA],
        },
      ],
      placement: [
        ["punct", "Which choice completes the text so that it conforms to the conventions of Standard English?", [",", ";", ":", "(no punctuation)"], 0, "'Which opened in 1998' is extra information, so it needs a comma on both sides. The opening comma is already there, so a closing comma is needed.", "The museum, which opened in 1998 ____ attracts over a million visitors a year."],
        ["punct", "Which choice completes the text so that it conforms to the conventions of Standard English?", [",", ";", ":", "(no punctuation)"], 1, "Two complete sentences joined with only a comma is a comma splice, and no punctuation creates a run-on. A semicolon correctly joins them.", "The team practiced every day ____ they won the championship."],
        ["punct", "Which choice completes the text so that it conforms to the conventions of Standard English?", [";", ",", "(no punctuation)", ":"], 3, "A colon can follow a complete sentence to introduce a list. A semicolon needs a complete sentence after it, and a comma alone would be incorrect here.", "She packed three items for the trip ____ a map, a flashlight, and a compass."],
        ["agree", "Which choice completes the text so that it conforms to the conventions of Standard English?", ["are", "were", "is", "have been"], 2, "The subject is 'collection' (singular), not 'coins', so the verb is 'is'.", "The collection of rare coins ____ displayed in the lobby."],
        ["agree", "Which choice completes the text so that it conforms to the conventions of Standard English?", ["was", "is", "has been", "were"], 3, "With 'neither … nor', the verb agrees with the nearer subject — 'players' is plural, so 'were'.", "Neither the coach nor the players ____ ready for the early game."],
        ["agree", "Which choice completes the text so that it conforms to the conventions of Standard English?", ["reached", "had reached", "have reached", "reach"], 1, "The hikers reached the summit before the sun set, so use past perfect to show the earlier action: 'had reached'.", "By the time the sun set, the hikers ____ the summit."],
      ],
      practice: [
        ["punct", "Which choice completes the text so that it conforms to the conventions of Standard English?", [";", ":", ",", "(no punctuation)"], 2, "'Which was released last spring' is extra information that needs commas on both sides.", "The author's latest novel, which was released last spring ____ has already sold a million copies."],
        ["punct", "Which choice completes the text so that it conforms to the conventions of Standard English?", [",", ";", ":", "(no punctuation)"], 1, "'However' joining two complete sentences needs a semicolon before it and a comma after it.", "I wanted to go to the concert ____ however, I had too much homework."],
        ["agree", "Which choice completes the text so that it conforms to the conventions of Standard English?", ["are", "were", "is", "have been"], 2, "'Each' is singular, so the verb is 'is'.", "Each of the students ____ required to submit a project."],
        ["agree", "Which choice completes the text so that it conforms to the conventions of Standard English?", ["was", "am", "were", "be"], 2, "A hypothetical statement ('If I ____ you') uses 'were'.", "If I ____ you, I would start the essay early."],
      ],
    },
    {
      id: "sat-expression",
      section: "Reading & Writing",
      name: "Expression of Ideas",
      blurb: "Transitions and combining notes into effective sentences.",
      skills: [
        {
          id: "trans",
          name: "Transitions",
          lesson:
            "A transition tells the reader how two ideas relate. Decide the relationship first — contrast (however, nevertheless), cause/effect (therefore, as a result), addition (moreover, similarly), or example (for instance) — then pick the word that matches.",
          tips: [
            "Read the sentence before and after the blank and ask: do these agree, disagree, or does one cause the other?",
            "'However' and 'In contrast' flip the direction of the argument.",
            "'Therefore' and 'As a result' show the second idea is a consequence of the first.",
          ],
          links: [KA, CB],
        },
        {
          id: "synth",
          name: "Rhetorical synthesis",
          lesson:
            "You'll be given bullet-point notes and a goal. Pick the sentence that uses the right notes and fulfills the goal exactly — emphasizing what the goal asks for, and not adding facts that aren't relevant. Wrong answers often use correct facts that serve a different goal.",
          tips: [
            "Underline the goal before reading the choices.",
            "Check that every fact in your chosen sentence actually appears in the notes.",
            "Choose the sentence that best matches the audience and purpose, not the longest one.",
          ],
          links: [KA, CB],
        },
      ],
      placement: [
        ["trans", "Which choice completes the text with the most logical transition?", ["Therefore,", "Moreover,", "However,", "For example,"], 2, "The first sentence is positive (thorough) and the second is a drawback (too long). That contrast calls for 'However'.", "The first draft of the report was thorough. ____ it was far too long for most readers to finish."],
        ["trans", "Which choice completes the text with the most logical transition?", ["Instead,", "As a result,", "Nevertheless,", "Similarly,"], 1, "Panels got cheaper, so more homeowners now consider them — a cause-and-effect relationship.", "Solar panels have become far cheaper over the past decade. ____ many homeowners who once dismissed them now consider them a smart investment."],
        ["trans", "Which choice completes the text with the most logical transition?", ["Likewise,", "In contrast,", "Therefore,", "Finally,"], 1, "Ocean-dwelling whales are set against flying bats, which is a contrast.", "Some mammals, like whales, live in the ocean. ____ others, like bats, fly."],
        ["synth", "The student wants to emphasize the lake's depth. Which choice most effectively does this?", ["Lake Marlow, which covers 12 square kilometers, is home to three endangered fish species.", "At 80 meters, Lake Marlow is the deepest lake in the region.", "Lake Marlow is a large lake with many fish.", "Lake Marlow covers 12 square kilometers and has deep water."], 1, "Only the second choice highlights the depth — 80 meters, the deepest in the region.", "Notes: • Lake Marlow covers 12 square kilometers. • It is the deepest lake in the region, at 80 meters. • It is home to three endangered fish species."],
        ["synth", "The student wants to introduce Dr. Chen's finding to readers unfamiliar with her work. Which choice most effectively does this?", ["Coral reefs are bleaching in warm water.", "Dr. Chen studies coral reefs and suspects warm shallow water.", "Reefs near shore bleach faster than those offshore.", "Dr. Chen, who studies coral reefs, led a team that found reefs near shore bleaching faster than those offshore."], 3, "The correct choice both identifies Dr. Chen's work for new readers and states the finding.", "Notes: • Dr. Chen studies coral reefs. • Her team found that reefs near shore were bleaching faster than those offshore. • They suspect warmer shallow water is the cause."],
        ["synth", "The student wants to present a contrast between initial and long-term costs. Which choice most effectively does this?", ["Electric buses and diesel buses both cost money to run.", "Although electric buses cost more to buy than diesel buses, they cost less to fuel and maintain over time.", "Electric buses cost less to fuel and maintain over time.", "Diesel buses cost less to buy, and many cities use them."], 1, "The second choice sets the higher purchase price against the lower long-term costs, matching the goal.", "Notes: • Electric buses cost more to buy than diesel buses. • They cost less to fuel and maintain over time."],
      ],
      practice: [
        ["trans", "Which choice completes the text with the most logical transition?", ["Alternatively,", "Consequently,", "Previously,", "Specifically,"], 0, "Margarine is offered as another option to butter — 'Alternatively'.", "The recipe calls for butter. ____ margarine can be substituted for those who avoid dairy."],
        ["trans", "Which choice completes the text with the most logical transition?", ["Otherwise,", "For instance,", "As a result,", "Meanwhile,"], 2, "Studying for weeks led to the high score — cause and effect.", "Maya studied for weeks. ____ she earned the highest score in her class."],
        ["synth", "The student wants to emphasize that attendance is affordable. Which choice most effectively does this?", ["The festival runs July 4–7.", "Over 50 local bands will play at the July 4–7 festival.", "Admission to the July 4–7 festival, which features over 50 local bands, is free.", "The festival has bands and runs for a few days."], 2, "The correct choice highlights that admission is free while still giving the key details.", "Notes: • The festival runs July 4–7. • It features over 50 local bands. • Admission is free."],
        ["synth", "The student wants to describe the sequence of how plants make food. Which choice most effectively does this?", ["Water absorbed by a plant's roots travels up the stem to the leaves, where it is used with sunlight to make food.", "Plants absorb water, and leaves are green.", "Sunlight is important for plants.", "Leaves make food, and stems are long."], 0, "Only the first choice puts the steps in order: roots, stem, then leaves.", "Notes: • Plants absorb water through roots. • The water travels up through the stem to the leaves. • Leaves use it, with sunlight, to make food."],
      ],
    }
  );
})();
