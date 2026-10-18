(() => {
  const S = "World Languages";
  const themes = ["Families and communities", "Global challenges", "Beauty and aesthetics", "Contemporary life", "Personal and public identities", "Science and technology"];
  const langTips = [
    "Practice speaking and writing a little every day, not just reading.",
    "Use a variety of tenses and connecting words so your language sounds natural.",
    "Check the official page for the current exam format and sections.",
  ];

  const langCourse = ({ id, name, slug, blurb, about, vocab, grammar, reading, writing, placement, practice, extra = {} }) =>
    apAdd({
      id, name, section: S, slug, blurb, about,
      units: themes,
      format: "The exam tests listening, reading, speaking, and writing in the language. See the official course page for the current sections, timing, and weighting.",
      tips: langTips,
      links: extra.links || [],
      skills: [
        { id: "vocab", name: "Vocabulary and culture", lesson: vocab.lesson, points: vocab.points, tips: vocab.tips },
        { id: "grammar", name: "Grammar in context", lesson: grammar.lesson, points: grammar.points, tips: grammar.tips },
        { id: "reading", name: "Reading comprehension", lesson: reading.lesson, points: reading.points, tips: reading.tips },
        { id: "writing", name: "Writing and register", lesson: writing.lesson, points: writing.points, tips: writing.tips },
      ],
      placement,
      practice,
    });

  /* ---------- AP Spanish Language and Culture ---------- */
  const esLetter = "Querida Ana: Te escribo desde Madrid, donde estudio este verano. Todos los días camino por el parque del Retiro y practico mi español con mis amigos. ¡Ojalá puedas visitarme pronto! Un abrazo, Luis";
  langCourse({
    id: "ap-spanlang", name: "AP Spanish Language and Culture", slug: "ap-spanish-language-and-culture",
    blurb: "Communicate in Spanish: listening, reading, speaking, and writing.",
    about: "A course in which you build proficiency in Spanish across interpersonal, interpretive, and presentational communication, and explore the cultures of the Spanish-speaking world through six themes.",
    vocab: { lesson: "Build vocabulary by theme, such as environment, technology, and identity, and learn connecting words like sin embargo (however) and por lo tanto (therefore). Knowing cultural contexts helps you interpret what you read and hear.", points: ["el medio ambiente = the environment", "sin embargo = however, nevertheless", "por lo tanto = therefore", "Learn words in families (nouns, verbs, adjectives)."], tips: ["Study words in context sentences.", "Learn connectors to build longer sentences."] },
    grammar: { lesson: "Choose the correct tense and mood for the situation. The preterite describes completed past actions, and the present subjunctive follows expressions of necessity or doubt, such as es importante que.", points: ["Preterite: completed actions in the past.", "Imperfect: ongoing or habitual past actions.", "Subjunctive follows es importante que, quiero que, and similar triggers.", "Check adjective and noun agreement."], tips: ["Look for time clues such as ayer or siempre.", "Identify the trigger phrase before choosing the mood."] },
    reading: { lesson: "Read for the main idea first, then for details. In a personal letter, look for the writer's location, activities, and purpose, which are often signaled near the beginning and end.", points: ["Identify the main idea before answering detail questions.", "Use context to guess unknown words.", "Notice the closing: it often states the purpose.", "Watch for cognates (words that look like English)."], tips: ["Skim the questions before reading.", "Return to the text to confirm each answer."] },
    writing: { lesson: "Use the right register for your audience. A formal email uses usted and a formal closing such as Atentamente, while a note to a friend can use tú and an informal closing.", points: ["Formal 'you' is usted; informal is tú.", "Formal closings: Atentamente, Cordialmente.", "Informal closings: Un abrazo, Besos.", "Organize your writing with an introduction and a conclusion."], tips: ["Decide on formal or informal before writing.", "Proofread for accents and agreement."] },
    placement: [
      ["vocab", "What does 'el medio ambiente' mean?", ["The middle ground", "The environment", "The weather", "The media"], 1, "'El medio ambiente' means the environment."],
      ["grammar", "Choose the correct verb form.", ["vamos", "fuimos", "iremos", "voy"], 1, "'Ayer por la noche' signals a completed past action, so the preterite fuimos is correct.", "Ayer por la noche nosotros ____ al cine y vimos una película."],
      ["reading", "According to the letter, where is Luis?", ["In Mexico", "In Madrid", "In Ana's town", "At home"], 1, "Luis writes 'desde Madrid, donde estudio este verano' (from Madrid, where I am studying this summer).", esLetter],
      ["writing", "Which closing is most appropriate for a formal email?", ["Chao", "Atentamente", "Besos", "Nos vemos"], 1, "'Atentamente' (sincerely) is a standard formal closing."],
    ],
    practice: [
      ["vocab", "What does 'sin embargo' mean?", ["Without a bag", "However", "Therefore", "Besides"], 1, "'Sin embargo' is a connector meaning however or nevertheless."],
      ["grammar", "Choose the correct verb form.", ["haces", "hagas", "hiciste", "harás"], 1, "'Es importante que' triggers the present subjunctive, so hagas is correct.", "Es importante que tú ____ la tarea todos los días."],
      ["reading", "What is Luis's main purpose in writing the letter?", ["To ask for money", "To share what he is doing and invite Ana to visit", "To complain about the weather", "To cancel a trip"], 1, "He describes his summer and ends with '¡Ojalá puedas visitarme pronto!'.", esLetter],
      ["writing", "Which pronoun is used for the formal 'you' in Spanish?", ["tú", "usted", "vosotros", "yo"], 1, "'Usted' is the formal singular 'you'."],
    ],
  });

  /* ---------- AP French Language and Culture ---------- */
  const frLetter = "Chère Marie, Je t'écris de Québec, où j'étudie cet été. Chaque matin, je marche le long du fleuve et je parle français avec mes amis. J'espère que tu pourras me rendre visite bientôt ! Bises, Paul";
  langCourse({
    id: "ap-french", name: "AP French Language and Culture", slug: "ap-french-language-and-culture",
    blurb: "Communicate in French: listening, reading, speaking, and writing.",
    about: "A course in which you build proficiency in French across interpersonal, interpretive, and presentational communication, and explore Francophone cultures through six themes.",
    vocab: { lesson: "Learn vocabulary by theme and use connectors such as pourtant (yet, however) and donc (so). Remember that many French words look like English words but differ in meaning (false cognates).", points: ["l'environnement = the environment", "pourtant = however, yet", "donc = so, therefore", "Beware false cognates, such as actuellement (currently)."], tips: ["Learn words with their articles.", "Practice connectors in complete sentences."] },
    grammar: { lesson: "Many verbs form the passé composé with être, especially verbs of movement such as aller. After expressions of necessity like il faut que, use the subjunctive.", points: ["Aller uses être in the passé composé: nous sommes allés.", "Past participles agree with the subject when être is used.", "Il faut que + subjunctive: il faut que tu fasses.", "The imparfait describes background and habits."], tips: ["Memorize the verbs that take être.", "Check agreement of the participle."] },
    reading: { lesson: "Read for the main idea, then for details. In personal letters, the location and purpose usually appear at the beginning and end.", points: ["Identify the main idea first.", "Look for the sender's location and activities.", "The closing often states the purpose.", "Guess unknown words from context."], tips: ["Read the questions first.", "Verify each answer in the text."] },
    writing: { lesson: "Choose your register. A formal letter uses vous and a formal closing such as Veuillez agréer mes salutations distinguées, while a note to a friend uses tu and a closing such as Bises.", points: ["Formal 'you' is vous; informal is tu.", "Formal closing: Veuillez agréer mes salutations distinguées.", "Informal closings: Bises, À bientôt.", "Organize ideas with clear paragraphs."], tips: ["Pick the register before you write.", "Proofread accents and agreement."] },
    placement: [
      ["vocab", "What does 'l'environnement' mean?", ["The entourage", "The environment", "The surroundings of a house only", "The weather"], 1, "'L'environnement' means the environment."],
      ["grammar", "Choose the correct form.", ["allons", "sommes allés", "irons", "allions"], 1, "Aller takes être in the passé composé, so 'nous sommes allés' is correct for a completed past action.", "Hier, nous ____ au cinéma."],
      ["reading", "According to the letter, where is Paul?", ["In Paris", "In Québec", "In Marie's house", "At school in France"], 1, "Paul writes 'Je t'écris de Québec'.", frLetter],
      ["writing", "Which closing is appropriate for a formal letter?", ["Bises", "À plus", "Veuillez agréer mes salutations distinguées", "Salut tout le monde"], 2, "This is the standard formal closing."],
    ],
    practice: [
      ["vocab", "What does 'pourtant' mean?", ["Because", "However, yet", "Therefore", "Always"], 1, "'Pourtant' expresses contrast: however or yet."],
      ["grammar", "Choose the correct form.", ["fais", "fasses", "feras", "as fait"], 1, "'Il faut que' is followed by the subjunctive: fasses.", "Il faut que tu ____ tes devoirs avant de sortir."],
      ["reading", "What is Paul's main purpose in writing?", ["To ask for help with homework", "To describe his summer and invite Marie to visit", "To announce he is moving", "To complain about Québec"], 1, "He describes his routine and ends with 'J'espère que tu pourras me rendre visite bientôt !'.", frLetter],
      ["writing", "Which pronoun is used for the formal 'you' in French?", ["tu", "vous", "il", "nous"], 1, "'Vous' is used for formal singular and for plural 'you'."],
    ],
  });

  /* ---------- AP German Language and Culture ---------- */
  const deLetter = "Liebe Anna, ich schreibe dir aus Berlin, wo ich diesen Sommer studiere. Jeden Morgen gehe ich im Park spazieren und spreche Deutsch mit meinen Freunden. Hoffentlich kannst du mich bald besuchen! Viele Grüße, Lukas";
  langCourse({
    id: "ap-german", name: "AP German Language and Culture", slug: "ap-german-language-and-culture",
    blurb: "Communicate in German: listening, reading, speaking, and writing.",
    about: "A course in which you build proficiency in German across interpersonal, interpretive, and presentational communication, and explore the cultures of German-speaking countries through six themes.",
    vocab: { lesson: "Learn vocabulary by theme and use connecting words such as trotzdem (nevertheless) and deshalb (therefore). Remember that German nouns are capitalized and have a gender.", points: ["die Umwelt = the environment", "trotzdem = nevertheless, anyway", "deshalb = therefore", "Learn each noun with its article (der, die, das)."], tips: ["Learn nouns with their gender and plural.", "Use connectors to build longer sentences."] },
    grammar: { lesson: "German verbs of movement form the perfect tense with sein. The preposition für always takes the accusative case, and the masculine article changes from der to den in the accusative.", points: ["Verbs of movement use sein: wir sind gegangen.", "Für takes the accusative.", "Masculine accusative: den (definite), einen (indefinite).", "Verb is second in a main clause."], tips: ["Memorize prepositions that take the accusative.", "Check the case of each noun phrase."] },
    reading: { lesson: "Read for the main idea, then for details. In personal letters, the location and purpose are usually near the beginning and end.", points: ["Identify the main idea first.", "Look for where the writer is and what they do.", "Closings often state a hope or request.", "Use cognates to guess meanings."], tips: ["Read the questions first.", "Check each answer against the text."] },
    writing: { lesson: "Choose the right register. A formal letter uses Sie and a closing such as Mit freundlichen Grüßen, while a note to a friend uses du and Viele Grüße.", points: ["Formal 'you' is Sie (capitalized); informal is du.", "Formal closing: Mit freundlichen Grüßen.", "Informal closing: Viele Grüße.", "Capitalize all nouns."], tips: ["Decide on formal or informal first.", "Proofread noun capitalization and umlauts."] },
    placement: [
      ["vocab", "What does 'die Umwelt' mean?", ["The world war", "The environment", "The weather", "The city"], 1, "'Die Umwelt' means the environment."],
      ["grammar", "Choose the correct form.", ["haben", "sind", "werden", "bin"], 1, "Gehen is a verb of motion and forms the perfect tense with sein: 'wir sind ... gegangen'.", "Gestern ____ wir ins Kino gegangen."],
      ["reading", "According to the letter, where is Lukas?", ["In Vienna", "In Berlin", "In Munich", "At home"], 1, "Lukas writes 'ich schreibe dir aus Berlin'.", deLetter],
      ["writing", "Which closing is appropriate for a formal letter?", ["Tschüss", "Mit freundlichen Grüßen", "Bis später", "Alles Gute, dein Freund"], 1, "'Mit freundlichen Grüßen' is the standard formal closing."],
    ],
    practice: [
      ["vocab", "What does 'trotzdem' mean?", ["Because of this", "Nevertheless", "Always", "Together"], 1, "'Trotzdem' means nevertheless or anyway."],
      ["grammar", "Choose the correct article.", ["der", "dem", "den", "des"], 2, "'Für' takes the accusative, and the masculine accusative article is 'den'.", "Das Geschenk ist für ____ Lehrer."],
      ["reading", "What is Lukas's purpose in writing?", ["To ask for money", "To share his summer and hope that Anna will visit", "To cancel a trip", "To complain about Berlin"], 1, "He describes his routine and says 'Hoffentlich kannst du mich bald besuchen!'.", deLetter],
      ["writing", "Which pronoun is the formal 'you' in German?", ["du", "Sie", "ihr", "er"], 1, "'Sie' (capitalized) is the formal 'you'."],
    ],
  });

  /* ---------- AP Italian Language and Culture ---------- */
  const itLetter = "Cara Anna, ti scrivo da Roma, dove studio quest'estate. Ogni mattina cammino nel parco e parlo italiano con i miei amici. Spero che tu possa venirmi a trovare presto! Un abbraccio, Luca";
  langCourse({
    id: "ap-italian", name: "AP Italian Language and Culture", slug: "ap-italian-language-and-culture",
    blurb: "Communicate in Italian: listening, reading, speaking, and writing.",
    about: "A course in which you build proficiency in Italian across interpersonal, interpretive, and presentational communication, and explore Italian-speaking cultures through six themes.",
    vocab: { lesson: "Learn vocabulary by theme and use connectors such as tuttavia (however) and quindi (therefore). Notice that many Italian words are related to English through Latin.", points: ["l'ambiente = the environment", "tuttavia = however", "quindi = therefore", "Learn nouns with their gender (il, la)."], tips: ["Study words in sentences.", "Use connectors in your writing."] },
    grammar: { lesson: "The passato prossimo of verbs of movement, such as andare, uses essere and the participle agrees with the subject. After expressions like è importante che, use the subjunctive.", points: ["Andare uses essere: siamo andati.", "Participle agrees with the subject when essere is used.", "È importante che + subjunctive: faccia.", "Use the imperfetto for habitual past actions."], tips: ["Memorize verbs that take essere.", "Identify the trigger for the subjunctive."] },
    reading: { lesson: "Read for the main idea first and then for details. In personal letters, location and purpose are usually near the beginning and end.", points: ["Find the main idea first.", "Look for the writer's location and activities.", "Closings often state a hope.", "Use context and cognates to guess meanings."], tips: ["Read the questions before the text.", "Verify answers in the text."] },
    writing: { lesson: "Choose the right register. A formal letter uses Lei and a closing such as Distinti saluti, while a note to a friend uses tu and Un abbraccio.", points: ["Formal 'you' is Lei; informal is tu.", "Formal closing: Distinti saluti, Cordiali saluti.", "Informal closing: Un abbraccio, Ciao.", "Organize ideas with clear paragraphs."], tips: ["Choose the register first.", "Proofread accents and agreement."] },
    placement: [
      ["vocab", "What does 'l'ambiente' mean?", ["The ambience of a restaurant only", "The environment", "The weather", "The apartment"], 1, "'L'ambiente' means the environment."],
      ["grammar", "Choose the correct form.", ["andiamo", "siamo andati", "andremo", "andiamo stati"], 1, "Andare takes essere in the passato prossimo: 'siamo andati'.", "Ieri sera noi ____ al cinema e abbiamo visto un film."],
      ["reading", "According to the letter, where is Luca?", ["In Milan", "In Rome", "In Florence", "At home"], 1, "Luca writes 'ti scrivo da Roma'.", itLetter],
      ["writing", "Which closing is appropriate for a formal letter?", ["Ciao ciao", "Distinti saluti", "Baci", "A dopo"], 1, "'Distinti saluti' is a standard formal closing."],
    ],
    practice: [
      ["vocab", "What does 'tuttavia' mean?", ["Always", "However", "Therefore", "Together"], 1, "'Tuttavia' expresses contrast: however, nevertheless."],
      ["grammar", "Choose the correct form.", ["fai", "faccia", "farai", "hai fatto"], 1, "'È importante che' is followed by the subjunctive: faccia.", "È importante che tu ____ i compiti ogni giorno."],
      ["reading", "What is Luca's main purpose in writing?", ["To ask for help", "To describe his summer and invite Anna to visit", "To announce a move", "To complain about Rome"], 1, "He describes his routine and ends with 'Spero che tu possa venirmi a trovare presto!'.", itLetter],
      ["writing", "Which pronoun is the formal 'you' in Italian?", ["tu", "Lei", "voi", "lui"], 1, "'Lei' is the formal singular 'you'."],
    ],
  });

  /* ---------- AP Chinese Language and Culture ---------- */
  const zhLetter = "小明:你好!我现在在北京学习汉语。每天早上我在公园散步,还跟朋友们说中文。希望你很快来看我!你的朋友,大卫\n(Xiǎomíng: Nǐ hǎo! Wǒ xiànzài zài Běijīng xuéxí Hànyǔ. Měitiān zǎoshang wǒ zài gōngyuán sànbù, hái gēn péngyǒumen shuō Zhōngwén. Xīwàng nǐ hěn kuài lái kàn wǒ! Nǐ de péngyǒu, Dàwèi)";
  langCourse({
    id: "ap-chinese", name: "AP Chinese Language and Culture", slug: "ap-chinese-language-and-culture",
    blurb: "Communicate in Mandarin Chinese: listening, reading, speaking, and writing.",
    about: "A course in which you build proficiency in Mandarin Chinese across interpersonal, interpretive, and presentational communication, and explore Chinese-speaking cultures through six themes. Questions here use simplified characters with pinyin.",
    vocab: { lesson: "Learn characters together with their pinyin and tones. Common connectors include 但是 (dànshì, but) and 所以 (suǒyǐ, so). Learning the components of characters helps you remember and guess meanings.", points: ["环境 (huánjìng) = environment", "但是 (dànshì) = but, however", "所以 (suǒyǐ) = so, therefore", "Tones change meaning: mā, má, mǎ, mà."], tips: ["Practice writing characters by hand.", "Learn the radicals (character components)."] },
    grammar: { lesson: "Chinese uses measure words between a number and a noun, such as 本 (běn) for books. Word order is typically subject, time, place, verb, object, and the particle 了 (le) marks completed actions or a change of state.", points: ["本 (běn) is the measure word for books.", "个 (gè) is a general measure word.", "Time words come before the verb: 我已经吃饭了。", "No verb conjugation: tense comes from context and particles."], tips: ["Learn each noun with its measure word.", "Use time words to show tense."] },
    reading: { lesson: "Read for the main idea first and use characters you know to guess unfamiliar words. In a personal letter, the writer's location, activities, and hopes are usually near the start and end.", points: ["Find the main idea first.", "Look for place words such as 在 (zài).", "The closing often states a wish or request.", "Use pinyin support when provided."], tips: ["Read the questions first.", "Check each answer against the text."] },
    writing: { lesson: "Choose the right level of politeness. 您 (nín) is the polite form of 'you', used for elders and in formal settings, while 你 (nǐ) is used with friends and peers.", points: ["您 (nín) is the polite 'you'; 你 (nǐ) is informal.", "新年快乐 (Xīnnián kuàilè) = Happy New Year.", "Use 请 (qǐng) for polite requests.", "Organize writing with clear sequence words."], tips: ["Choose polite or informal forms for your audience.", "Proofread characters and tones."] },
    placement: [
      ["vocab", "What does 环境 (huánjìng) mean?", ["Environment", "Hospital", "Weather forecast", "Neighborhood only"], 0, "环境 (huánjìng) means environment."],
      ["grammar", "Which measure word is used with 书 (shū, book)?", ["个 (gè)", "本 (běn)", "张 (zhāng)", "条 (tiáo)"], 1, "本 (běn) is the measure word for books."],
      ["reading", "According to the letter, where is David?", ["In Taiwan", "In Beijing", "In Shanghai", "At home"], 1, "The letter says 我现在在北京学习汉语 (Wǒ xiànzài zài Běijīng xuéxí Hànyǔ): I am now studying Chinese in Beijing.", zhLetter],
      ["writing", "Which pronoun is the polite form of 'you'?", ["你 (nǐ)", "您 (nín)", "他 (tā)", "我们 (wǒmen)"], 1, "您 (nín) is the polite form of 'you'."],
    ],
    practice: [
      ["vocab", "What does 但是 (dànshì) mean?", ["Because", "But, however", "Also", "Always"], 1, "但是 (dànshì) means but or however."],
      ["grammar", "Which sentence correctly says 'I have already eaten'?", ["我吃已经饭了。", "我已经吃饭了。(Wǒ yǐjīng chīfàn le.)", "我饭吃已经了。", "已经我吃饭了。"], 1, "The time word 已经 comes before the verb, and 了 marks the completed action."],
      ["reading", "What is David's purpose in writing?", ["To borrow money", "To share what he is doing and hope that Xiaoming visits soon", "To cancel a trip", "To complain about Beijing"], 1, "He describes his activities and ends with 希望你很快来看我 (I hope you come see me soon).", zhLetter],
      ["writing", "What does 新年快乐 (Xīnnián kuàilè) mean?", ["Happy birthday", "Happy New Year", "Good night", "Thank you"], 1, "新年快乐 is the common greeting for the New Year."],
    ],
  });

  /* ---------- AP Japanese Language and Culture ---------- */
  const jaLetter = "アンナさんへ。私は今、東京で勉強しています。毎朝、公園を散歩して、友達と日本語を話しています。すぐに来てくださいね。ルーカス\n(Anna-san e. Watashi wa ima, Tōkyō de benkyō shite imasu. Maiasa, kōen o sanpo shite, tomodachi to Nihongo o hanashite imasu. Sugu ni kite kudasai ne. Rūkasu)";
  langCourse({
    id: "ap-japanese", name: "AP Japanese Language and Culture", slug: "ap-japanese-language-and-culture",
    blurb: "Communicate in Japanese: listening, reading, speaking, and writing.",
    about: "A course in which you build proficiency in Japanese across interpersonal, interpretive, and presentational communication, and explore Japanese culture through six themes. Questions here show Japanese script with romaji where helpful.",
    vocab: { lesson: "Learn vocabulary together with its reading, in kana and kanji. Common connectors include しかし (shikashi, however) and だから (dakara, so). Many kanji have both Chinese-derived and native readings.", points: ["環境 (kankyō) = environment", "しかし (shikashi) = however", "だから (dakara) = so, therefore", "Learn hiragana, katakana, and common kanji."], tips: ["Practice reading and writing kana quickly.", "Learn kanji in compound words."] },
    grammar: { lesson: "Particles mark the role of words. The particle で (de) marks the place where an action happens, and を (o) marks the direct object. Verbs change form for tense and politeness; the polite past of 食べます (tabemasu) is 食べました (tabemashita).", points: ["で marks the place of an action.", "を marks the direct object.", "Polite past: ます → ました.", "Polite negative: ます → ません."], tips: ["Say the particle's job in the sentence.", "Learn verb forms in groups."] },
    reading: { lesson: "Read for the main idea first, then for details. In personal letters, look for the writer's location, activities, and request, often marked by てください (please do).", points: ["Find the main idea first.", "Place words use で and に.", "〜てください is a polite request.", "Use furigana and romaji support when provided."], tips: ["Read the questions first.", "Check each answer against the text."] },
    writing: { lesson: "Japanese has levels of politeness. The です/ます style is polite and appropriate for most school and formal settings, while the plain form is used with close friends and family.", points: ["Polite style uses です/ます.", "Plain style (like 行く) is casual.", "ありがとうございます = thank you (polite).", "Use appropriate greetings for the situation."], tips: ["Match politeness to your audience.", "Use consistent style throughout."] },
    placement: [
      ["vocab", "What does 環境 (kankyō) mean?", ["Environment", "Neighborhood", "Weather", "Culture"], 0, "環境 (kankyō) means environment."],
      ["grammar", "Which particle completes the sentence? 私は毎日図書館____勉強します。", ["を", "で", "の", "と"], 1, "で marks the place where an action occurs: 図書館で勉強します (I study at the library).", "私は毎日図書館____勉強します。(Watashi wa mainichi toshokan ____ benkyō shimasu.)"],
      ["reading", "According to the letter, where is Lucas?", ["In Osaka", "In Tokyo", "In Kyoto", "At home"], 1, "The letter says 東京で勉強しています (Tōkyō de benkyō shite imasu): I am studying in Tokyo.", jaLetter],
      ["writing", "Which sentence uses the polite style?", ["行く (iku)", "行きます (ikimasu)", "行った (itta)", "行こう (ikō)"], 1, "行きます is the polite (ます) form of 'go'."],
    ],
    practice: [
      ["vocab", "What does しかし (shikashi) mean?", ["Because", "However", "Always", "Together"], 1, "しかし means however or but."],
      ["grammar", "What is the polite past form of 食べます (tabemasu)?", ["食べます", "食べました (tabemashita)", "食べません", "食べて"], 1, "Replace ます with ました for the polite past: 食べました."],
      ["reading", "What does Lucas ask Anna to do at the end of the letter?", ["Send money", "Come soon", "Call him", "Stay home"], 1, "すぐに来てくださいね means 'please come soon'.", jaLetter],
      ["writing", "What does ありがとうございます mean?", ["Good night", "Thank you (polite)", "I'm sorry", "Excuse me"], 1, "ありがとうございます is the polite way of saying thank you."],
    ],
  });

  /* ---------- AP Latin ---------- */
  apAdd({
    id: "ap-latin", name: "AP Latin", section: S, slug: "ap-latin",
    blurb: "Read and translate Latin, with selections from Vergil's Aeneid and Caesar's Gallic War.",
    about: "A course that develops your ability to read, translate, and analyze Latin prose and poetry. You study selections from Vergil's Aeneid and Caesar's Gallic War and the Roman world they reflect.",
    units: ["Vergil, Aeneid selections", "Caesar, Gallic War selections", "Latin vocabulary, grammar, and syntax", "Translation and literary analysis"],
    format: "The exam tests reading and translating Latin and analyzing the required authors. See the official course page for the current sections, required selections, and timing.",
    tips: ["Learn vocabulary steadily and look for English derivatives.", "Identify the case, number, and function of each noun before translating.", "Check the official page for the required reading list."],
    links: [["Perseus Digital Library (Latin texts)", "https://www.perseus.tufts.edu/hopper/"]],
    skills: [
      { id: "vocab", name: "Vocabulary and word study", lesson: "Latin vocabulary is the base of translation. Many English words come from Latin: aqua (water) gives us aquatic, and amare (to love) gives us amateur. Learn the principal parts of verbs (for amo: amo, amare, amavi, amatus).", points: ["aqua = water; amo, amare = to love.", "Learn principal parts of verbs.", "Learn the genitive of nouns to find the declension.", "Use English derivatives to remember words."], tips: ["Review vocabulary a little every day.", "Group words by root."] },
      { id: "grammar", name: "Cases, verbs, and syntax", lesson: "Latin uses case endings to show a noun's function. The nominative marks the subject, the accusative marks the direct object, and verbs agree with their subjects in person and number. Word order is flexible, so endings matter most.",
        points: ["Nominative: subject.", "Accusative: direct object.", "Genitive: possession (of).", "Verbs agree with their subjects in person and number."], tips: ["Find the verb first, then its subject.", "Identify cases by endings, not position."] },
      { id: "translation", name: "Translation", lesson: "Translate by finding the verb, then the subject and object, then other phrases. In 'Romani urbem vident', Romani (nominative plural) is the subject, urbem (accusative singular) is the object, and vident (third person plural) is the verb: 'The Romans see the city.'",
        points: ["Find the verb, subject, then object.", "Check agreement of adjectives with nouns.", "Translate literally first, then smooth into English.", "Watch tense: present, imperfect, perfect."], tips: ["Parse each word before translating.", "Reread your translation for sense."] },
      { id: "authors", name: "Vergil and Caesar", lesson: "Vergil's Aeneid is an epic poem about Aeneas, a Trojan hero who escapes Troy and travels to Italy, becoming an ancestor of the Romans. Caesar's Gallic War is a prose account of his campaigns in Gaul, beginning 'Gallia est omnis divisa in partes tres' (All Gaul is divided into three parts).",
        points: ["Aeneid: epic of Aeneas, ancestor of the Romans.", "Caesar's Gallic War: campaigns in Gaul.", "'Gallia est omnis divisa in partes tres' = All Gaul is divided into three parts.", "Know the required selections listed on AP Central."], tips: ["Learn the context of each passage.", "Be ready to analyze stylistic choices."] },
    ],
    placement: [
      ["vocab", "The Latin verb 'amo, amare' means", ["To walk", "To love", "To see", "To give"], 1, "'Amo, amare' means to love, and gives English amateur and amorous."],
      ["grammar", "In the sentence 'puella rosam amat,' which word is the direct object?", ["puella", "rosam", "amat", "There is none"], 1, "'Rosam' has the accusative ending -am, marking it as the direct object: the girl loves the rose."],
      ["translation", "What is the best translation of 'Romani urbem vident'?", ["The city sees the Romans", "The Romans see the city", "The Romans saw cities", "The cities are seen by Romans"], 1, "Romani (nominative plural) is the subject, urbem (accusative singular) the object, vident is present third plural."],
      ["authors", "Vergil's Aeneid is an epic poem about", ["Julius Caesar's wars in Gaul", "Aeneas, a Trojan hero who travels to Italy", "The founding of Athens", "The life of Augustus"], 1, "The Aeneid follows Aeneas from the fall of Troy to Italy."],
    ],
    practice: [
      ["vocab", "The English word 'aquatic' comes from the Latin 'aqua,' which means", ["Fire", "Water", "Earth", "Air"], 1, "'Aqua' means water."],
      ["grammar", "Which case is used for the subject of a sentence in Latin?", ["Accusative", "Nominative", "Genitive", "Dative"], 1, "The nominative case marks the subject."],
      ["translation", "What is the best translation of 'Caesar milites laudat'?", ["The soldiers praise Caesar", "Caesar praises the soldiers", "Caesar is praised by soldiers", "The soldiers are Caesar"], 1, "Caesar (nominative singular) is the subject, milites (accusative plural) the object, and laudat (third singular) the verb."],
      ["authors", "What does the opening line 'Gallia est omnis divisa in partes tres' mean?", ["Gaul has three kings", "All Gaul is divided into three parts", "Gaul is at war with three tribes", "The Gauls have three rivers"], 1, "This famous first sentence of Caesar's Gallic War describes Gaul as divided into three parts."],
    ],
  });

  /* ---------- AP Spanish Literature and Culture ---------- */
  apAdd({
    id: "ap-spanlit", name: "AP Spanish Literature and Culture", section: S, slug: "ap-spanish-literature-and-culture",
    blurb: "Read and analyze literature from Spain and Latin America, in Spanish.",
    about: "A college-level course in which you read and analyze literature written in Spanish from Spain and Latin America, across genres and periods, and write about it in Spanish. A reading list of required works and authors guides the course.",
    units: ["Literary analysis in Spanish", "Literary periods and movements", "Poetry, prose, and drama", "Writing about literature"],
    format: "The exam tests reading comprehension, literary analysis, and writing in Spanish. See the official course page for the current sections, reading list, and timing.",
    tips: ["Read the required works closely and take notes on themes and style.", "Learn the vocabulary for literary analysis in Spanish.", "Check the official page for the required reading list."],
    links: [["Biblioteca Virtual Miguel de Cervantes", "https://www.cervantesvirtual.com/"]],
    skills: [
      { id: "authors", name: "Authors and works", lesson: "Spanish-language literature includes authors from Spain and Latin America. Miguel de Cervantes wrote Don Quijote de la Mancha, an early and influential novel, and Pablo Neruda, a Chilean poet, won the Nobel Prize in Literature in 1971.",
        points: ["Cervantes wrote Don Quijote.", "Neruda was a Chilean poet who won the Nobel Prize in 1971.", "García Lorca was a Spanish poet and playwright.", "Always check the required list on AP Central."], tips: ["Learn each author's country and period.", "Link works to their historical context."] },
      { id: "analysis", name: "Literary devices and tone", lesson: "Writers use devices such as personificación (personification), metáfora, and símil. Tone (el tono) is the author's attitude toward the subject. In 'La luna, pálida y sola, miraba la ciudad dormida', the moon 'looks', which gives it a human action.",
        points: ["Personificación gives human traits to nonhuman things.", "Metáfora: direct comparison.", "Tono: the author's attitude.", "Imagery appeals to the senses."], tips: ["Name the device and explain its effect.", "Quote the Spanish text in your analysis."] },
      { id: "periods", name: "Periods, movements, and genres", lesson: "Magical realism (realismo mágico) blends realistic narrative with magical elements and is associated with Latin American writers such as Gabriel García Márquez. A sonnet (soneto) has 14 lines, and poems are organized in stanzas and verses.",
        points: ["Realismo mágico blends reality and fantasy.", "A soneto has 14 lines.", "Genres: poesía, narrativa, teatro.", "Place each work in its period."], tips: ["Connect a movement to its features.", "Compare works across periods."] },
      { id: "writing", name: "Writing about literature", lesson: "A strong literary essay in Spanish has a thesis that presents an arguable interpretation supported by evidence from the text. Use the present tense to discuss events in a work (the literary present).",
        points: ["Thesis: an arguable interpretation.", "Support claims with quotations and analysis.", "Use the present tense to describe the work.", "Organize with an introduction, body, and conclusion."], tips: ["Explain how each quote supports your thesis.", "Proofread accents and agreement."] },
    ],
    placement: [
      ["authors", "Who wrote 'Don Quijote de la Mancha'?", ["Miguel de Cervantes", "Federico García Lorca", "Pablo Neruda", "Gabriel García Márquez"], 0, "Miguel de Cervantes published Don Quijote in the early seventeenth century."],
      ["analysis", "Which literary device is used in the sentence?", ["Símil", "Personificación", "Hipérbole", "Ironía"], 1, "The moon is given a human action ('miraba'), which is personification.", "La luna, pálida y sola, miraba la ciudad dormida."],
      ["periods", "'Realismo mágico' is a literary style that", ["Rejects all fantasy", "Blends realistic narration with magical elements", "Uses only poetry", "Comes from ancient Rome"], 1, "Magical realism presents magical events as an ordinary part of a realistic world."],
      ["writing", "A strong thesis for a literary essay should", ["Summarize the plot", "Present an arguable interpretation of the work", "List the characters", "Only state the title"], 1, "An arguable interpretation can be supported with evidence from the text."],
    ],
    practice: [
      ["authors", "Pablo Neruda, who won the Nobel Prize in Literature in 1971, was from which country?", ["Spain", "Chile", "Mexico", "Argentina"], 1, "Neruda was a Chilean poet."],
      ["analysis", "In literary analysis, 'el tono' refers to", ["The author's attitude toward the subject", "The number of pages", "The rhyme scheme only", "The title"], 0, "Tone is the attitude the author or speaker conveys toward the subject."],
      ["periods", "A 'soneto' is a poem with", ["Eight lines", "Fourteen lines", "Twenty lines", "No set length"], 1, "A sonnet has 14 lines."],
      ["writing", "Which tense is usually used in Spanish to discuss events that happen in a work of literature (the literary present)?", ["Preterite", "Present", "Future", "Pluperfect"], 1, "Literary analysis typically describes the events of a work in the present tense."],
    ],
  });
})();
