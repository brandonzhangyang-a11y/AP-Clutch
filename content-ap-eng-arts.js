(() => {
  const KA = (label, path) => [label, `https://www.khanacademy.org${path}`];
  const OWL = ["Purdue OWL: writing and grammar guides", "https://owl.purdue.edu/owl/general_writing/index.html"];
  const SMART = ["Google Arts & Culture: museum collections", "https://artsandculture.google.com/"];

  /* ---------- AP English Language and Composition ---------- */
  apAdd({
    id: "ap-englang", name: "AP English Language and Composition", section: "English", slug: "ap-english-language-and-composition",
    blurb: "Rhetoric, argument, and nonfiction analysis and writing.",
    about: "A college-level course in reading and writing nonfiction. You analyze how writers make rhetorical choices and write arguments, syntheses, and rhetorical analyses of your own.",
    units: ["Rhetorical situation and claims", "Evidence, reasoning, and organization", "Style, tone, and rhetorical choices", "Argument writing", "Synthesis of sources", "Revision and sophistication in writing"],
    tips: ["Write a thesis that takes a defensible position instead of restating the prompt.", "Explain how evidence supports your claim rather than just quoting it.", "Check the official page for the current exam format and essay types."],
    links: [OWL, KA("Khan Academy: AP English Language and Composition", "/ela/ap-english-language-and-composition")],
    skills: [
      { id: "situation", name: "The rhetorical situation", lesson: "Every text is shaped by its rhetorical situation: the speaker, audience, purpose, context, and exigence. The exigence is the issue or event that prompts the writing. Analyzing the situation helps you explain why a writer makes particular choices.",
        points: ["Exigence is the issue or occasion that prompts the writing.", "Purpose is what the writer wants the audience to think, feel, or do.", "Audience shapes word choice, evidence, and tone.", "Context includes time, place, and culture."], tips: ["Describe the situation before analyzing choices.", "Tie each choice back to purpose and audience."] },
      { id: "argument", name: "Claims, evidence, and reasoning", lesson: "A claim is a statement that takes a position and needs support. Strong evidence is relevant, credible, and sufficient, such as research findings or expert testimony, and the writer's reasoning explains how the evidence supports the claim.",
        points: ["A claim takes a position that can be argued.", "Strong evidence is relevant, credible, and sufficient.", "Commentary connects evidence to the claim.", "A counterargument and rebuttal show fair-mindedness."], tips: ["Always add commentary after evidence.", "Choose evidence that directly supports the claim."] },
      { id: "devices", name: "Rhetorical devices and appeals", lesson: "Writers persuade through ethos (credibility), pathos (emotion), and logos (logic). They also use devices such as metaphor, parallelism, and repetition, and choices of diction and syntax shape tone.",
        points: ["Ethos appeals to credibility and character.", "Pathos appeals to emotion; logos appeals to logic.", "A metaphor compares two things without using like or as.", "Syntax is sentence structure; diction is word choice."], tips: ["Name the device, quote it, and explain its effect.", "Avoid just listing devices without analysis."] },
      { id: "writing", name: "Argument and synthesis writing", lesson: "An argument essay needs a defensible thesis, evidence, and a clear line of reasoning. A synthesis essay combines your own argument with evidence from provided sources rather than merely summarizing them.",
        points: ["A strong thesis takes a defensible position.", "Develop a line of reasoning that links your claims.", "In synthesis, use sources to support your argument and cite them.", "Sophistication means addressing complexity and tension."], tips: ["Plan your line of reasoning before you write.", "Keep your own voice in charge of the essay."] },
    ],
    placement: [
      ["situation", "In rhetoric, the 'exigence' of a text is", ["The writer's tone", "The issue or occasion that prompts the writing", "The text's organization", "The length of the text"], 1, "Exigence is the problem, need, or event that calls for a response and so prompts the text."],
      ["argument", "In an argument, a claim is", ["A fact everyone accepts", "A statement that takes a position and needs support", "A summary of a source", "A rhetorical question"], 1, "A claim asserts a position that the writer must support with evidence and reasoning."],
      ["devices", "A writer says: 'Our schools are not just buildings; they are the engines of tomorrow.' Which device is this?", ["Simile", "Metaphor", "Irony", "Understatement"], 1, "Schools are directly described as engines without 'like' or 'as', which is a metaphor."],
      ["writing", "Which of the following is the best description of an effective argumentative thesis?", ["A statement of fact", "A defensible position that previews the argument's reasoning", "A question for the reader", "A summary of the sources"], 1, "A strong thesis takes a position that people could disagree with and signals how it will be supported."],
    ],
    practice: [
      ["situation", "A writer's 'purpose' refers to", ["The text's topic only", "What the writer wants the audience to think, feel, or do", "The number of sources used", "The type of paper used"], 1, "Purpose is the writer's goal in addressing the audience."],
      ["argument", "A writer argues that high schools should start later. Which evidence would be strongest?", ["A friend's opinion", "Results of a published study comparing student performance under different start times", "A slogan about sleep", "A rhetorical question"], 1, "Research findings from a credible study are relevant, specific, and verifiable."],
      ["devices", "An appeal to ethos primarily relies on", ["The writer's credibility or character", "Statistics", "Emotional stories", "Rhyme"], 0, "Ethos persuades by establishing the speaker's trustworthiness and authority."],
      ["writing", "A synthesis essay requires you to", ["Summarize each source in order", "Combine your own argument with evidence from the provided sources", "Ignore the sources", "Write only about one source"], 1, "Synthesis means using sources to support a position of your own."],
    ],
  });

  /* ---------- AP English Literature and Composition ---------- */
  apAdd({
    id: "ap-englit", name: "AP English Literature and Composition", section: "English", slug: "ap-english-literature-and-composition",
    blurb: "Close reading and analysis of fiction, poetry, and drama.",
    about: "A college-level course in the close reading and analysis of imaginative literature. You study how writers use character, setting, structure, and language to create meaning, and you write literary analysis.",
    units: ["Short fiction and character", "Poetry and figurative language", "Longer fiction and drama", "Narration, structure, and perspective", "Literary argumentation and thematic analysis"],
    tips: ["Quote specific words and phrases, then explain their effect.", "Focus on how the text creates meaning, not just on plot summary.", "Check the official page for the current exam format."],
    links: [KA("Khan Academy: AP English Literature and Composition", "/ela/ap-english-literature-and-composition"), OWL],
    skills: [
      { id: "figurative", name: "Figurative language and imagery", lesson: "Writers use figurative language to create meaning beyond the literal. Personification gives human qualities to nonhuman things, and a metaphor says one thing is another. Imagery appeals to the senses and builds mood.",
        points: ["Personification gives human traits to nonhuman things.", "Metaphor: direct comparison; simile: comparison using like or as.", "Imagery appeals to the five senses.", "Symbolism uses objects or images to represent ideas."], tips: ["Explain the effect of a device, not only its name.", "Look for patterns of imagery across a text."] },
      { id: "poetry", name: "Poetry and form", lesson: "Poetry uses sound, rhythm, line, and form to create meaning. A Shakespearean sonnet has 14 lines written in iambic pentameter, usually with a turn (volta) near the end. Reading for meter and rhyme scheme helps you see how form supports content.",
        points: ["A sonnet has 14 lines.", "Iambic pentameter: five pairs of unstressed and stressed syllables per line.", "A volta is a turn in thought or argument.", "Enjambment continues a sentence past the end of a line."], tips: ["Notice where the poem changes direction.", "Connect form to meaning."] },
      { id: "narrative", name: "Narration, point of view, and tone", lesson: "A first-person narrator uses 'I' and tells the story from inside the events. Tone is the writer's or speaker's attitude toward a subject. Irony, including dramatic irony, creates meaning through contrast between expectation and reality.",
        points: ["First-person narrators use 'I'.", "Tone is the attitude toward the subject.", "Dramatic irony: the audience knows something a character does not.", "Unreliable narrators may mislead readers."], tips: ["Ask how the narrator's perspective shapes the reader's understanding.", "Use precise adjectives to describe tone."] },
      { id: "drama", name: "Drama and thematic analysis", lesson: "A theme is a central idea a work explores, usually stated as a complete idea. In drama, a soliloquy lets a character speak their thoughts aloud, alone on stage. Literary arguments connect specific details to a theme.",
        points: ["A theme is a central idea the work explores.", "A soliloquy is a speech alone on stage that reveals thoughts.", "Setting and structure shape meaning.", "Support a thesis with specific textual evidence."], tips: ["State theme as a full sentence, not a single word.", "Link each piece of evidence to your thesis."] },
    ],
    placement: [
      ["figurative", "Which literary device is used in the sentence?", ["Simile", "Personification", "Alliteration", "Hyperbole"], 1, "The house is described as 'listening', which gives a human action to a nonhuman object.", "The old house leaned toward the road as though it were listening for footsteps that had long since stopped coming."],
      ["poetry", "A Shakespearean sonnet consists of", ["Twelve lines", "Fourteen lines", "Sixteen lines", "Eighteen lines"], 1, "Sonnets have 14 lines; the Shakespearean form uses three quatrains and a couplet."],
      ["narrative", "The narrator of the following sentence is best described as", ["Third-person omniscient", "First-person", "Second-person", "An objective observer"], 1, "The pronoun 'I' shows the story is told from the narrator's own perspective.", "I never told anyone what I saw that night, and I still don't know why."],
      ["drama", "A soliloquy in a play is", ["A conversation between two characters", "A speech in which a character, alone, speaks thoughts aloud", "A summary of the previous act", "A stage direction"], 1, "A soliloquy reveals a character's private thoughts to the audience."],
    ],
    practice: [
      ["figurative", "In the line below, the figure of speech is a", ["Simile", "Metaphor", "Oxymoron", "Understatement"], 1, "Words are directly called knives with no 'like' or 'as', so it is a metaphor.", "Her words were knives; each one found its mark."],
      ["poetry", "A 'volta' in a sonnet is", ["The rhyme scheme", "A turn in the poem's thought or argument", "The last word of the poem", "The title"], 1, "The volta marks a shift in perspective, argument, or tone."],
      ["narrative", "Dramatic irony occurs when", ["A character says the opposite of what they mean", "The audience knows something that a character does not", "A writer uses exaggeration", "A narrator is dishonest"], 1, "In dramatic irony the audience's knowledge exceeds that of the character."],
      ["drama", "Which statement is written as a theme rather than a topic?", ["Ambition", "The pursuit of power can destroy a person's moral judgment", "Macbeth", "The play's setting"], 1, "A theme is a complete idea about the subject, while the other options are topics or labels."],
    ],
  });

  /* ---------- AP Seminar ---------- */
  apAdd({
    id: "ap-seminar", name: "AP Seminar", section: "AP Capstone", slug: "ap-seminar",
    blurb: "Investigate real-world issues from multiple perspectives and build evidence-based arguments.",
    about: "The first course in the AP Capstone program. You investigate real-world issues from multiple perspectives, evaluate sources, build and communicate evidence-based arguments, and work as part of a team. Assessment includes performance tasks and an end-of-course exam.",
    units: ["Understanding and analyzing arguments", "Evaluating sources and evidence", "Perspectives and connections", "Developing and communicating an argument", "Collaboration and presentation"],
    tips: ["Keep a record of your sources and notes as you research.", "Present more than one perspective fairly before you take a position.", "Check the official page for the current performance-task and exam requirements."],
    links: [],
    skills: [
      { id: "arguments", name: "Understanding arguments", lesson: "An argument has a claim supported by reasons and evidence. The line of reasoning is the logical sequence of claims that connects the evidence to the conclusion. Analyzing an argument means evaluating whether the evidence supports the claims.",
        points: ["Identify the claim, reasoning, and evidence.", "A line of reasoning links claims logically to a conclusion.", "Look for assumptions and limitations.", "Evaluate whether evidence is sufficient and relevant."], tips: ["Map an argument as a diagram of claims and evidence.", "Ask what the author assumes."] },
      { id: "sources", name: "Evaluating sources and evidence", lesson: "Credibility depends on the author's expertise, the publisher, evidence, bias, and purpose. For a scientific claim, a peer-reviewed article by qualified researchers is usually more credible than an anonymous post.",
        points: ["Peer-reviewed research is generally highly credible.", "Check author expertise and possible bias.", "Consider the date and relevance.", "Use multiple sources to confirm information."], tips: ["Evaluate the source, not only the claim.", "Cite every source you use."] },
      { id: "perspective", name: "Perspectives and synthesis", lesson: "A perspective is a point of view shaped by experience, discipline, culture, or values. Considering multiple perspectives leads to a more complete understanding of an issue, and synthesis connects ideas from different sources into your own argument.",
        points: ["Perspectives come from different disciplines, cultures, and experiences.", "Synthesis combines ideas into a new argument.", "Address the strongest opposing viewpoint.", "Connect your evidence to a clear conclusion."], tips: ["Identify who is affected by an issue.", "Explain how different views lead to different conclusions."] },
      { id: "communicate", name: "Communication and academic integrity", lesson: "Academic integrity means giving credit to sources and presenting your own work honestly. Good communication adjusts to the audience and purpose and uses clear organization, evidence, and delivery.",
        points: ["Cite sources and avoid plagiarism.", "Adapt style to audience and purpose.", "Use visuals and delivery to support your message.", "Collaboration requires clear roles and shared responsibility."], tips: ["Practice presenting your argument aloud.", "Keep your drafts and research notes."] },
    ],
    placement: [
      ["arguments", "In an argument, the 'line of reasoning' is", ["A list of sources", "The logical sequence of claims connecting evidence to the conclusion", "The title of the paper", "A set of statistics"], 1, "A line of reasoning shows how each claim and piece of evidence leads to the conclusion."],
      ["sources", "Which source is generally the most credible for a claim about a scientific topic?", ["An anonymous blog post", "A peer-reviewed journal article by researchers in the field", "A social media comment", "An advertisement"], 1, "Peer review and expert authorship make journal articles more reliable."],
      ["perspective", "A 'perspective' on an issue is best described as", ["A proven fact", "A point of view shaped by experience, discipline, or values", "A statistic", "A type of source"], 1, "Perspectives reflect the standpoint of the person or group, such as a scientist, an economist, or a community member."],
      ["communicate", "Academic integrity requires that you", ["Copy sources without changes", "Give credit to the sources you use", "Avoid research", "Work only alone"], 1, "Citing your sources and presenting your own work honestly are the core of academic integrity."],
    ],
    practice: [
      ["arguments", "When analyzing an argument, which question is most useful?", ["How long is the argument?", "Does the evidence actually support the claim?", "Who printed the paper?", "What font is used?"], 1, "Evaluating whether the evidence supports the claim is central to analyzing an argument."],
      ["sources", "Which feature most reduces a source's credibility?", ["It was written by a recognized expert", "It has an undisclosed bias and no evidence", "It cites its sources", "It is recent"], 1, "Hidden bias and a lack of evidence make a source less reliable."],
      ["perspective", "Why is it important to consider multiple perspectives on an issue?", ["It makes writing longer", "It leads to a fuller and fairer understanding of the issue", "It avoids the need for evidence", "It guarantees agreement"], 1, "Different viewpoints reveal assumptions, trade-offs, and effects that one view may miss."],
      ["communicate", "Which of the following is plagiarism?", ["Quoting a source with a citation", "Paraphrasing a source and citing it", "Using another person's words as your own without credit", "Summarizing a source with attribution"], 2, "Presenting someone else's words or ideas as your own without credit is plagiarism."],
    ],
  });

  /* ---------- AP Research ---------- */
  apAdd({
    id: "ap-research", name: "AP Research", section: "AP Capstone", slug: "ap-research",
    blurb: "Design and carry out your own independent research project.",
    about: "The second course in the AP Capstone program. You plan and conduct an in-depth, independent investigation of a topic you choose, and you present your findings in an academic paper and a presentation.",
    units: ["Developing a research question", "Reviewing the literature", "Choosing methods", "Analyzing data and drawing conclusions", "Writing, presenting, and defending your work"],
    tips: ["Choose a topic you care about and that you can realistically study.", "Keep a process log of your decisions and sources.", "Check the official page for the current requirements and deadlines."],
    links: [],
    skills: [
      { id: "question", name: "Research questions and inquiry", lesson: "A strong research question is focused, researchable, and open to inquiry, so it cannot be answered with a simple yes or no. It should address a gap in the existing knowledge.",
        points: ["Good questions are focused and researchable.", "Avoid yes/no questions.", "A gap is something existing research has not yet answered.", "Refine the question as you learn more."], tips: ["Test your question: can you collect evidence to answer it?", "Narrow a broad topic."] },
      { id: "lit", name: "Literature review", lesson: "A literature review summarizes and synthesizes existing research on a topic. It shows what is known, how researchers disagree, and where gaps remain, which helps justify your own study.",
        points: ["A literature review synthesizes, not just lists, sources.", "It identifies gaps and debates.", "Use credible scholarly sources.", "Cite every source."], tips: ["Group sources by theme.", "Explain how your project builds on prior work."] },
      { id: "methods", name: "Research methods", lesson: "Qualitative research collects non-numerical data such as interviews and observations, while quantitative research collects numerical data that can be analyzed statistically. Validity means a measure actually measures what it claims to measure.",
        points: ["Qualitative: interviews, observations, open responses.", "Quantitative: surveys, experiments, numerical data.", "Validity: does it measure what it claims to?", "Reliability: are results consistent?"], tips: ["Match the method to the question.", "Describe how you will reduce bias."] },
      { id: "report", name: "Analysis, limitations, and communication", lesson: "Findings should be analyzed honestly and tied back to the research question. Limitations, such as a small sample, explain what the study cannot show. Ethics, including informed consent and privacy, apply whenever people take part in research.",
        points: ["Tie findings to the research question.", "State limitations openly.", "Informed consent protects participants.", "Suggest implications and next steps."], tips: ["Don't claim more than your data supports.", "Prepare for questions in your oral defense."] },
    ],
    placement: [
      ["question", "Which of the following is the strongest research question?", ["Is social media bad?", "How does daily social media use relate to sleep duration among high school students?", "What is social media?", "Social media is bad for teens."], 1, "It is focused, researchable, and open to inquiry. The others are vague, factual, or statements."],
      ["lit", "A literature review is best described as", ["A list of every source you read", "A synthesis of existing research that shows what is known and what gaps remain", "The conclusion of your paper", "A description of your results"], 1, "It organizes and synthesizes prior research to show the context for your study."],
      ["methods", "Which is an example of qualitative data?", ["Test scores", "Interview transcripts", "Heights in centimeters", "Counts of attendance"], 1, "Qualitative data are non-numerical, such as interview responses and observations."],
      ["report", "A 'limitation' of a study is", ["A reason the study is invalid", "A factor, such as a small sample, that restricts how far the results can be generalized", "The final conclusion", "A type of source"], 1, "Limitations describe constraints on the findings and are an honest part of reporting research."],
    ],
    practice: [
      ["question", "A research question should be", ["Answerable with a single word", "Focused, researchable, and open to inquiry", "Based only on opinion", "As broad as possible"], 1, "Strong research questions can be investigated with evidence and lead to analysis."],
      ["lit", "Why do researchers review existing literature before designing a study?", ["To avoid needing a method", "To learn what is already known and identify a gap", "To lengthen the paper", "To find a conclusion to copy"], 1, "Reviewing prior work shows where a new study can contribute."],
      ["methods", "The 'validity' of a survey question means that it", ["Is short", "Measures what it is intended to measure", "Produces the same result every time", "Is easy to answer"], 1, "Validity concerns whether an instrument measures the intended concept. Consistency is reliability."],
      ["report", "Which practice protects participants in research with people?", ["Informed consent", "Keeping the topic secret from everyone", "Using only friends", "Skipping a review of ethics"], 0, "Informed consent ensures participants understand the study and agree to take part."],
    ],
  });

  /* ---------- AP 2-D Art and Design ---------- */
  const portfolioTips = ["Document your process as you go, with notes, sketches, and test pieces.", "Focus on a question that interests you and let it guide your experimentation.", "Check the official page for the current portfolio requirements and deadlines."];
  apAdd({
    id: "ap-2d", name: "AP 2-D Art and Design", section: "Arts", slug: "ap-2-d-art-and-design",
    blurb: "A portfolio course in two-dimensional design: photography, graphic design, collage, painting, and more.",
    about: "A portfolio-based course in which you create work that shows skill and inquiry in two-dimensional art and design. There is no multiple-choice exam: you submit a portfolio of your own work and written information about your process.",
    units: ["Elements and principles of art and design", "Sustained investigation (inquiry through practice, experimentation, and revision)", "Selected works (skillful synthesis of materials, processes, and ideas)", "Documentation, writing, and academic integrity"],
    tips: portfolioTips,
    links: [SMART],
    skills: [
      { id: "elements", name: "Elements and principles of design", lesson: "The elements of art and design include line, shape, color, value, texture, and space. The principles, such as balance, contrast, emphasis, rhythm, and unity, describe how the elements are organized. Emphasis creates a focal point that draws the viewer's eye.",
        points: ["Elements: line, shape, form, color, value, texture, space.", "Principles: balance, contrast, emphasis, rhythm, movement, unity.", "Emphasis creates a focal point.", "Value is the lightness or darkness of a color."], tips: ["Name which element or principle you are using and why.", "Use contrast to make an idea clear."] },
      { id: "sustained", name: "Sustained investigation", lesson: "A sustained investigation is an in-depth exploration of a question or idea through practice, experimentation, and revision. It shows how your ideas and works develop over time, not just a series of finished pieces.",
        points: ["Guided by a question or idea.", "Shows experimentation with materials and processes.", "Shows revision based on what you learn.", "Documents how ideas develop."], tips: ["Write about what you tried and what changed.", "Let each work respond to the one before."] },
      { id: "selected", name: "Selected works and synthesis", lesson: "Synthesis in art-making means combining materials, processes, and ideas to create works that communicate. Selected works show your skill and your ability to use ideas and materials purposefully.",
        points: ["Synthesis combines materials, processes, and ideas.", "Choose works that show your strongest skill and ideas.", "Materials and processes should serve the idea.", "Be able to explain your choices."], tips: ["Choose quality over quantity.", "Connect materials to meaning."] },
      { id: "integrity", name: "Documentation and academic integrity", lesson: "Academic integrity means submitting your own original work and crediting any sources you use. Work that relies on someone else's image or idea must be clearly credited and meaningfully developed into something of your own.",
        points: ["Submit your own original work.", "Credit any source images or ideas.", "Show meaningful development, not copying.", "Keep records of your process."], tips: ["Cite sources in your written evidence.", "Ask your teacher if you are unsure about using references."] },
    ],
    placement: [
      ["elements", "Which of the following is an element of art and design (not a principle)?", ["Balance", "Line", "Emphasis", "Rhythm"], 1, "Line is an element. Balance, emphasis, and rhythm are principles that describe how elements are organized."],
      ["sustained", "A sustained investigation in an art portfolio is best described as", ["A single finished artwork", "An in-depth exploration of a question through practice, experimentation, and revision", "A copy of a master painting", "A collection of unrelated pieces"], 1, "It shows inquiry guided by a question and how the work develops through experimentation and revision."],
      ["selected", "In art-making, 'synthesis' means", ["Copying a style exactly", "Combining materials, processes, and ideas to create works that communicate", "Using only one material", "Avoiding experimentation"], 1, "Synthesis brings together materials, processes, and ideas into a purposeful whole."],
      ["integrity", "Which approach reflects academic integrity when using a reference photograph?", ["Trace it and submit it as entirely your own", "Credit the source and transform it meaningfully into your own work", "Hide the source", "Submit the photo unchanged"], 1, "Credit the source and develop the idea in a way that is clearly your own."],
    ],
    practice: [
      ["elements", "The principle of design that creates a focal point is", ["Emphasis", "Texture", "Line", "Space"], 0, "Emphasis directs attention to the most important part of a composition."],
      ["sustained", "Which best shows revision in a sustained investigation?", ["Making ten identical pieces", "Showing how ideas and works changed in response to experiments and reflection", "Keeping only the final piece", "Changing the topic each week"], 1, "Revision means evolving ideas and works through testing and reflection."],
      ["selected", "Which is the best reason to choose a particular material for a work?", ["It was the cheapest", "It supports the idea you want to communicate", "It is popular", "It was suggested by a friend"], 1, "Materials and processes should be chosen to serve the idea."],
      ["integrity", "Which of the following demonstrates good documentation of your process?", ["Throwing away early sketches", "Keeping dated sketches, notes, and test pieces", "Writing the notes after finishing everything", "Relying on memory"], 1, "Records made during the process provide evidence of how the work developed."],
    ],
  });

  /* ---------- AP 3-D Art and Design ---------- */
  apAdd({
    id: "ap-3d", name: "AP 3-D Art and Design", section: "Arts", slug: "ap-3-d-art-and-design",
    blurb: "A portfolio course in three-dimensional design: sculpture, ceramics, architecture, and more.",
    about: "A portfolio-based course in which you create work that demonstrates skill and inquiry in three-dimensional art and design, using the way mass, volume, and space occupy a physical environment. You submit a portfolio with written information about your process.",
    units: ["Elements and principles in three dimensions (mass, volume, space, texture)", "Sustained investigation (inquiry through practice, experimentation, and revision)", "Selected works (skillful synthesis of materials, processes, and ideas)", "Documentation, writing, and academic integrity"],
    tips: [...portfolioTips, "Photograph your work from several views, since viewers need to understand its three-dimensional form."],
    links: [SMART],
    skills: [
      { id: "elements", name: "Elements and principles in 3-D", lesson: "In three dimensions, form, mass, volume, space, and texture are central. Sculptors work with positive space (the solid material) and negative space (the empty space around and through the work).",
        points: ["Positive space is the solid form; negative space is the empty space around or through it.", "Form is a three-dimensional shape with height, width, and depth.", "Texture affects both how a work looks and how it feels.", "Balance in 3-D concerns physical stability and visual weight."], tips: ["View your work from all sides.", "Use negative space intentionally."] },
      { id: "sustained", name: "Sustained investigation", lesson: "A sustained investigation explores a question through practice, experimentation, and revision. In 3-D work, this might involve test models, material studies, and refinements of structure.",
        points: ["Guided by a question or idea.", "Includes material and process experiments (maquettes, tests).", "Shows revision and growth.", "Documents development over time."], tips: ["Build small test models before large works.", "Record what you learned from failures."] },
      { id: "selected", name: "Materials, processes, and synthesis", lesson: "Sculptors choose materials such as clay, wood, metal, fiber, or found objects and use processes such as carving, casting, modeling, and assembly. An armature is a supporting framework inside a sculpture that holds its form while it is built.",
        points: ["An armature is an internal support framework.", "Additive processes build up; subtractive processes carve away.", "Materials carry meaning as well as structure.", "Craftsmanship affects how the work is read."], tips: ["Choose materials that support your idea.", "Plan for structure and stability."] },
      { id: "integrity", name: "Documentation and academic integrity", lesson: "Document each work with clear images from several views and details. Academic integrity means the work is your own and any sources are credited.",
        points: ["Photograph work from multiple angles.", "Submit only your own work.", "Credit sources and references.", "Keep notes on materials and processes."], tips: ["Use good lighting and a clean background.", "Describe your process honestly."] },
    ],
    placement: [
      ["elements", "In sculpture, 'negative space' refers to", ["The solid material of the work", "The empty space around and through the work", "A dark color", "A mistake in the work"], 1, "Negative space is the open or empty area surrounding or within a form, while positive space is the solid mass."],
      ["sustained", "Which is a good way to explore ideas in a 3-D sustained investigation?", ["Make only one large piece", "Build small test models and material studies, then revise", "Avoid experimenting", "Copy a famous sculpture"], 1, "Testing small models lets you explore ideas and solve problems before committing to the final form."],
      ["selected", "An armature in sculpture is", ["A type of glaze", "A supporting framework inside a sculpture", "A viewing platform", "A signature"], 1, "An armature gives structural support to a form, especially in clay or plaster."],
      ["integrity", "Why should 3-D work be photographed from several views?", ["To make the portfolio longer", "Because viewers need to understand its three-dimensional form", "To avoid describing it", "To hide flaws"], 1, "A single view can't show the full form, so multiple views document the work."],
    ],
    practice: [
      ["elements", "Which statement describes 'form' in 3-D design?", ["A flat shape", "A three-dimensional shape with height, width, and depth", "A color scheme", "A drawing technique"], 1, "Form is three-dimensional and occupies space."],
      ["sustained", "A 'maquette' is", ["A small preliminary model", "A kiln", "A painting medium", "A type of clay"], 0, "A maquette is a small-scale model used to plan a larger work."],
      ["selected", "A subtractive sculpting process is", ["Modeling clay by adding pieces", "Carving stone or wood", "Casting bronze", "Assembling found objects"], 1, "Subtractive processes remove material, as in carving."],
      ["integrity", "Which is an example of academic integrity in a 3-D portfolio?", ["Submitting a classmate's sculpture", "Crediting a source of inspiration and developing the idea into your own work", "Hiding your process", "Copying an image exactly"], 1, "Honest credit and your own development of the idea reflect academic integrity."],
    ],
  });

  /* ---------- AP Drawing ---------- */
  apAdd({
    id: "ap-drawing", name: "AP Drawing", section: "Arts", slug: "ap-drawing",
    blurb: "A portfolio course in drawing: mark-making, composition, and drawing processes.",
    about: "A portfolio-based course that focuses on drawing skills, including mark-making, line, surface, space, light and shade, and composition. You create a portfolio of drawings and written information about your process; there is no multiple-choice exam.",
    units: ["Mark-making, line, surface, and space", "Sustained investigation (inquiry through practice, experimentation, and revision)", "Selected works (skillful synthesis of materials, processes, and ideas)", "Documentation, writing, and academic integrity"],
    tips: portfolioTips,
    links: [SMART],
    skills: [
      { id: "marks", name: "Mark-making and drawing techniques", lesson: "Drawing builds form and tone through marks. Hatching uses parallel lines to build tone, cross-hatching layers lines in different directions, and stippling uses dots. Gesture drawing captures movement and energy quickly.",
        points: ["Hatching: parallel lines to build tone.", "Cross-hatching: layered lines in different directions.", "Stippling: tone built from dots.", "Gesture drawing captures movement quickly."], tips: ["Vary line weight to create depth and emphasis.", "Practice a range of marks and tools."] },
      { id: "sustained", name: "Sustained investigation", lesson: "A sustained investigation in drawing explores a question or idea through a series of works that develop through practice, experimentation, and revision.",
        points: ["Guided by an idea or question.", "Experiments with materials (graphite, charcoal, ink, mixed media).", "Shows revision and growth.", "Documents the process."], tips: ["Try different surfaces and tools.", "Reflect in writing on what each drawing taught you."] },
      { id: "composition", name: "Composition, space, and light", lesson: "Composition is the arrangement of elements within a work. Value (light and dark) creates the illusion of form, and linear perspective uses converging lines to suggest depth. Contrast and emphasis guide the viewer's eye.",
        points: ["Value creates the illusion of form.", "Linear perspective uses converging lines toward a vanishing point.", "Overlap and scale also suggest depth.", "Contrast creates emphasis."], tips: ["Do thumbnail sketches to plan composition.", "Squint to check the value structure."] },
      { id: "integrity", name: "Documentation and academic integrity", lesson: "Academic integrity means the work is your own and any source images are credited and meaningfully transformed. Drawing from observation is a good way to develop original work.",
        points: ["Submit only your own work.", "Credit any reference images.", "Show your process through sketches and notes.", "Draw from observation when possible."], tips: ["Keep a sketchbook of ideas and tests.", "Be honest about your references."] },
    ],
    placement: [
      ["marks", "Which drawing technique uses closely spaced parallel lines to build tone?", ["Stippling", "Hatching", "Gesture", "Blending"], 1, "Hatching builds value with parallel lines. Stippling uses dots, and gesture drawing is quick and expressive."],
      ["sustained", "A sustained investigation in drawing is best described as", ["One polished drawing", "A series of works exploring a question through practice, experimentation, and revision", "A set of copied images", "A single technique study"], 1, "It demonstrates inquiry that develops over a series of works."],
      ["composition", "Which technique uses converging lines toward a vanishing point to suggest depth?", ["Hatching", "Linear perspective", "Stippling", "Gesture"], 1, "Linear perspective creates the illusion of depth with lines that converge at a vanishing point."],
      ["integrity", "Which of the following shows good academic integrity in a drawing portfolio?", ["Tracing someone else's drawing and claiming it", "Crediting reference images and transforming them into your own work", "Hiding your sources", "Submitting a photograph as a drawing"], 1, "Honest credit and your own development of ideas are expected."],
    ],
    practice: [
      ["marks", "The main goal of a gesture drawing is to", ["Capture movement and energy quickly", "Show fine detail", "Match a photograph exactly", "Fill the page with dots"], 0, "Gesture drawings quickly record the movement and structure of a pose."],
      ["sustained", "Which practice best supports a sustained investigation?", ["Switching topics for each work", "Keeping notes and sketches that show how ideas evolve", "Making one drawing", "Avoiding revision"], 1, "Documenting the evolution of ideas demonstrates sustained inquiry."],
      ["composition", "In drawing, 'value' refers to", ["The cost of the artwork", "The lightness or darkness of tones", "The size of the paper", "The speed of drawing"], 1, "Value describes how light or dark a mark or area is, and it creates the illusion of form."],
      ["integrity", "Drawing from direct observation helps students", ["Avoid practicing", "Develop original work and their own visual vocabulary", "Copy photographs more exactly", "Skip composition"], 1, "Observation builds original perception and skills rather than reliance on another's image."],
    ],
  });

  /* ---------- AP Art History ---------- */
  apAdd({
    id: "ap-arthistory", name: "AP Art History", section: "Arts", slug: "ap-art-history",
    blurb: "Art, architecture, and visual culture from around the world and across time.",
    about: "A survey of art and architecture from around the world and across history. You learn to analyze works through their form, function, content, and context, and to compare works and traditions.",
    units: ["Global prehistory and the ancient Mediterranean", "Medieval and Renaissance Europe", "Baroque through modern art", "Contemporary art and global traditions", "Visual analysis and contextual analysis skills"],
    tips: ["Practice describing a work's form first, then its function, content, and context.", "Learn the specific works on the official required list.", "Compare works across cultures and time periods."],
    links: [SMART, KA("Khan Academy: AP Art History", "/humanities/ap-art-history")],
    skills: [
      { id: "ancient", name: "Ancient art and architecture", lesson: "Ancient cultures made art with religious, political, and funerary purposes. The pyramids at Giza were tombs for Egyptian pharaohs, and the Parthenon in Athens was a temple dedicated to the goddess Athena.",
        points: ["The Great Pyramids of Giza were royal tombs.", "The Parthenon was dedicated to Athena.", "Greek art emphasized idealized human form and proportion.", "Roman architecture used the arch, vault, and concrete."], tips: ["Connect each work to its function and culture.", "Note materials and techniques."] },
      { id: "medren", name: "Medieval and Renaissance art", lesson: "The Hagia Sophia in Constantinople was built under Emperor Justinian in the sixth century as a Christian church. In early fifteenth-century Florence, Filippo Brunelleschi developed linear perspective, which Renaissance artists used to create realistic depth.",
        points: ["Hagia Sophia (6th century) was built under Justinian.", "Brunelleschi formalized linear perspective in Florence.", "Renaissance art revived classical ideals and humanism.", "Gothic cathedrals used pointed arches and flying buttresses."], tips: ["Link innovations to patrons and ideas of the time.", "Describe how perspective creates depth."] },
      { id: "modern", name: "Baroque to modern art", lesson: "Baroque art is known for drama, movement, and strong contrasts of light and dark. Impressionist painters such as Claude Monet tried to capture the fleeting effects of light and atmosphere, and Picasso and Braque developed Cubism.",
        points: ["Baroque: drama, movement, strong light and dark.", "Impressionism captures fleeting effects of light.", "Cubism, developed by Picasso and Braque, shows multiple viewpoints at once.", "Modern art often broke with traditional representation."], tips: ["Describe visual features that support your label.", "Place each style in its historical context."] },
      { id: "analysis", name: "Analyzing and comparing artworks", lesson: "Formal analysis examines visual elements such as line, color, composition, and form. Contextual analysis considers the function, patron, culture, and meaning of a work. Comparing two works helps you see similarities and differences in form and purpose.",
        points: ["Formal analysis: line, color, composition, form.", "Contextual analysis: function, patron, culture, history.", "Compare form, function, content, and context.", "Use precise art-historical vocabulary."], tips: ["Move from what you see to what it means.", "Support every claim with visual evidence."] },
    ],
    placement: [
      ["ancient", "The Great Pyramids of Giza were built primarily as", ["Temples to Athena", "Tombs for Egyptian pharaohs", "Marketplaces", "Defensive fortresses"], 1, "The pyramids at Giza were royal funerary monuments."],
      ["medren", "Who is credited with developing linear perspective in early fifteenth-century Florence?", ["Filippo Brunelleschi", "Giotto", "Donatello", "Leonardo da Vinci"], 0, "Brunelleschi demonstrated the principles of linear perspective, which later artists like Masaccio and Alberti used and described."],
      ["modern", "Baroque art is best characterized by", ["Calm symmetry and balance", "Drama, movement, and strong contrasts of light and dark", "Geometric abstraction", "Flat, decorative patterns"], 1, "Baroque artists used dynamic compositions and dramatic light to convey emotion and energy."],
      ["analysis", "A 'formal analysis' of an artwork focuses on", ["The artist's biography only", "Visual elements such as line, color, composition, and form", "The artwork's price", "The date it was sold"], 1, "Formal analysis describes what you can see and how the visual elements are organized."],
    ],
    practice: [
      ["ancient", "The Parthenon in Athens was dedicated to which goddess?", ["Hera", "Athena", "Artemis", "Aphrodite"], 1, "The Parthenon was a temple to Athena Parthenos, patron goddess of Athens."],
      ["medren", "Hagia Sophia in Constantinople was originally built as", ["A Roman bath", "A Christian church under Emperor Justinian", "A mosque", "A palace"], 1, "It was completed in 537 as a Byzantine church and later converted into a mosque."],
      ["modern", "Impressionist painters such as Claude Monet were mainly interested in", ["Precise, detailed drawings of historical scenes", "Capturing the changing effects of light and atmosphere", "Religious allegory", "Geometric abstraction"], 1, "Impressionists painted quickly to record fleeting impressions of light and color."],
      ["analysis", "Pablo Picasso and Georges Braque are credited with developing which movement?", ["Impressionism", "Cubism", "Surrealism", "Baroque"], 1, "Cubism broke objects into geometric forms and showed multiple viewpoints at once."],
    ],
  });

  /* ---------- AP Music Theory ---------- */
  apAdd({
    id: "ap-musictheory", name: "AP Music Theory", section: "Arts", slug: "ap-music-theory",
    blurb: "Pitch, rhythm, harmony, notation, and musical analysis and listening.",
    about: "A course in the fundamentals of music: notation, scales and key signatures, intervals, chords, rhythm and meter, harmony, and form. You learn to read, write, hear, and analyze music, including sight-singing.",
    units: ["Pitch, scales, and key signatures", "Intervals and chords", "Rhythm and meter", "Harmony and cadences", "Form, melody, and aural skills"],
    tips: ["Practice ear training every day, even for a few minutes.", "Memorize key signatures and the circle of fifths.", "Check the official page for the current exam sections."],
    links: [["musictheory.net lessons and exercises", "https://www.musictheory.net/"]],
    skills: [
      { id: "pitch", name: "Pitch, scales, and key signatures", lesson: "A major scale follows the pattern whole, whole, half, whole, whole, whole, half. Key signatures show which notes are sharp or flat. G major has one sharp (F♯), and every major key has a relative minor that shares its key signature, found a minor third below.",
        points: ["Major scale step pattern: W-W-H-W-W-W-H.", "G major has one sharp (F♯).", "The relative minor of C major is A minor.", "The circle of fifths organizes keys by sharps and flats."], tips: ["Learn the order of sharps: F C G D A E B.", "Find the relative minor by going down a minor third."] },
      { id: "intervals", name: "Intervals and chords", lesson: "An interval is the distance between two pitches. C to G is a perfect fifth. A triad has a root, third, and fifth; a major triad has a major third and a minor triad has a minor third above the root.",
        points: ["C up to G is a perfect fifth.", "Major triad: root, major third, perfect fifth.", "Minor triad: root, minor third, perfect fifth.", "Diminished triad: two minor thirds."], tips: ["Count letter names first, then adjust for quality.", "Check the third to find triad quality."] },
      { id: "rhythm", name: "Rhythm and meter", lesson: "Meter groups beats into measures. In 4/4 time a dotted half note lasts three beats. In compound meters such as 6/8, the beat is a dotted quarter note, so the measure is felt in two beats, each divided into three eighth notes.",
        points: ["A dot adds half the note's value.", "A dotted half note equals three quarter notes.", "6/8 is a compound duple meter.", "Simple meters divide the beat into two."], tips: ["Count the beat unit first.", "Learn to tell simple from compound meters."] },
      { id: "harmony", name: "Harmony and cadences", lesson: "Chords are labeled with Roman numerals according to the scale degree of their root. The chord on the fifth scale degree is V, the dominant. An authentic cadence moves from V to I and gives a strong sense of closure.",
        points: ["The dominant chord is built on scale degree 5 (V).", "Authentic cadence: V to I.", "Half cadence: ends on V.", "Plagal cadence: IV to I."], tips: ["Practice identifying cadences by ear.", "Memorize the common progressions."] },
    ],
    placement: [
      ["pitch", "How many sharps are in the key signature of G major?", ["0", "1", "2", "3"], 1, "G major has one sharp, F♯."],
      ["intervals", "What is the interval from C up to G?", ["Perfect fourth", "Perfect fifth", "Major sixth", "Major third"], 1, "C to G spans five letter names (C, D, E, F, G) and is a perfect fifth."],
      ["rhythm", "In 4/4 time, how many beats does a dotted half note receive?", ["2", "3", "4", "1.5"], 1, "A half note is 2 beats and the dot adds half of that, so 3 beats."],
      ["harmony", "An authentic cadence consists of which chord progression?", ["IV to I", "V to I", "I to IV", "ii to V"], 1, "An authentic cadence moves from the dominant (V) to the tonic (I)."],
    ],
    practice: [
      ["pitch", "What is the relative minor of C major?", ["D minor", "E minor", "A minor", "G minor"], 2, "The relative minor is three half steps below the tonic, so A minor."],
      ["intervals", "What is the quality of the triad C–E♭–G?", ["Major", "Minor", "Diminished", "Augmented"], 1, "C to E♭ is a minor third and C to G is a perfect fifth, so the triad is minor."],
      ["rhythm", "In 6/8 meter, the beat is usually felt as", ["Six beats per measure", "Two beats per measure, each a dotted quarter note", "Four beats per measure", "Three beats per measure"], 1, "6/8 is compound duple: two main beats, each divided into three eighth notes."],
      ["harmony", "What Roman numeral represents the chord built on the fifth scale degree?", ["I", "IV", "V", "vi"], 2, "The chord built on scale degree 5 is V, the dominant."],
    ],
  });
})();
