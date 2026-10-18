(() => {
  const S = "History & Social Sciences";
  const KA = (label, path) => [label, `https://www.khanacademy.org${path}`];
  const LOC = ["Library of Congress", "https://www.loc.gov/"];
  const NARA = ["National Archives: documents and records", "https://www.archives.gov/"];

  /* ---------- AP African American Studies ---------- */
  apAdd({
    id: "ap-aaas", name: "AP African American Studies", section: S, slug: "ap-african-american-studies",
    blurb: "An interdisciplinary look at African American history, culture, and ideas.",
    about: "An interdisciplinary course that draws on history, literature, the arts, geography, and social science to study the African diaspora and the experiences, contributions, and debates of African Americans.",
    units: ["Origins of the African diaspora", "Freedom, enslavement, and resistance", "The practice of freedom", "Movements and debates"],
    tips: ["Practice analyzing primary sources, including text, art, music, and data.", "Connect events across time instead of treating them in isolation.", "Check the official page for the current course framework and exam details."],
    links: [LOC],
    skills: [
      { id: "origins", name: "African origins and the diaspora", lesson: "Powerful African states and empires, such as Mali, Songhai, and Benin, had complex trade, learning, and political systems before the transatlantic slave trade. The forced migration of millions of Africans created the African diaspora across the Atlantic world.",
        points: ["Mali's Mansa Musa made a famous pilgrimage to Mecca in 1324.", "Timbuktu was a center of learning and trade.", "The transatlantic slave trade forcibly moved millions of Africans to the Americas.", "African cultural traditions shaped language, music, religion, and food in the diaspora."], tips: ["Connect African societies to later diaspora communities.", "Remember that Africa's history did not begin with slavery."] },
      { id: "resist", name: "Enslavement, resistance, and abolition", lesson: "Enslaved people resisted in many ways, from everyday acts to escape and rebellion. Networks such as the Underground Railroad helped people reach freedom, and the Haitian Revolution created the first Black-led republic in the Americas. The Thirteenth Amendment ended slavery in the United States in 1865.",
        points: ["The Haitian Revolution (1791–1804) led to independence from France.", "The Underground Railroad was a network of routes and safe houses.", "The Thirteenth Amendment (1865) abolished slavery.", "Black abolitionists such as Frederick Douglass and Harriet Tubman were central to the movement."], tips: ["Include both individual and collective forms of resistance.", "Link abolition to wider Atlantic events."] },
      { id: "freedom", name: "The practice of freedom", lesson: "After emancipation, African Americans built institutions such as churches, schools, and organizations while facing segregation and violence. In the early twentieth century the Harlem Renaissance was a flowering of Black art, literature, and music, and groups such as the NAACP (founded 1909) fought discrimination.",
        points: ["The NAACP was founded in 1909.", "The Harlem Renaissance flourished in the 1920s.", "The Great Migration moved millions of Black Americans from the South to northern and western cities.", "Historically Black colleges and universities expanded educational opportunity."], tips: ["Connect culture and politics.", "Show how communities created institutions for themselves."] },
      { id: "move", name: "Movements and debates", lesson: "The civil rights movement used courts, boycotts, and protest to challenge segregation. In Brown v. Board of Education (1954) the Supreme Court ruled that segregated public schools are unconstitutional, and the Montgomery bus boycott followed Rosa Parks's arrest in 1955.",
        points: ["Brown v. Board of Education (1954) ruled school segregation unconstitutional.", "The Montgomery bus boycott began in 1955 after Rosa Parks was arrested.", "The Civil Rights Act (1964) and Voting Rights Act (1965) were major legislative victories.", "Black Power and later movements raised new debates about strategy and identity."], tips: ["Compare different strategies and leaders.", "Use specific cases and dates as evidence."] },
    ],
    placement: [
      ["origins", "Which West African empire's ruler, Mansa Musa, became famous for his pilgrimage to Mecca in 1324?", ["Songhai", "Ghana", "Mali", "Benin"], 2, "Mansa Musa ruled the Mali Empire, and his lavish pilgrimage made Mali widely known."],
      ["resist", "The Underground Railroad is best described as", ["A literal subway line", "A network of routes and safe houses that helped enslaved people escape to freedom", "A Union Army supply line", "A government program of the Reconstruction era"], 1, "It was a secret network of people and places that helped enslaved people escape, mostly to the North and Canada."],
      ["freedom", "The Harlem Renaissance of the 1920s is best known as", ["A political party", "A flowering of African American art, literature, and music centered in Harlem", "A major labor strike", "An expedition to Africa"], 1, "The Harlem Renaissance was a cultural movement that produced important Black writers, artists, and musicians."],
      ["move", "In Brown v. Board of Education (1954), the Supreme Court ruled that", ["Poll taxes were illegal", "Racial segregation in public schools is unconstitutional", "Interracial marriage was legal", "Federal troops must protect voters"], 1, "The Court held that separate educational facilities are inherently unequal."],
    ],
    practice: [
      ["origins", "The Haitian Revolution (1791–1804) is significant because it", ["Ended the transatlantic slave trade immediately", "Created the first independent nation in the Americas led by formerly enslaved people", "Was a war between Spain and Britain", "Established a British colony"], 1, "Enslaved people in Saint-Domingue overthrew French rule and founded Haiti in 1804."],
      ["resist", "The Thirteenth Amendment to the U.S. Constitution", ["Granted women the vote", "Abolished slavery", "Guaranteed equal protection of the laws", "Gave citizenship to all people born in the U.S."], 1, "Ratified in 1865, it abolished slavery and involuntary servitude except as punishment for a crime."],
      ["freedom", "The NAACP, founded in 1909, was established mainly to", ["Organize a Black political party", "Fight racial discrimination and promote civil rights", "Send settlers to Liberia", "Run public schools"], 1, "The National Association for the Advancement of Colored People worked through the courts and advocacy against discrimination."],
      ["move", "The Montgomery bus boycott began in 1955 after the arrest of", ["Frederick Douglass", "Rosa Parks", "Thurgood Marshall", "Malcolm X"], 1, "Rosa Parks's arrest for refusing to give up her seat launched the year-long boycott."],
    ],
  });

  /* ---------- AP Comparative Government and Politics ---------- */
  apAdd({
    id: "ap-compgov", name: "AP Comparative Government and Politics", section: S, slug: "ap-comparative-government-and-politics",
    blurb: "How governments work in six countries and how they compare.",
    about: "A comparison of political systems and institutions using the United Kingdom, Russia, China, Mexico, Iran, and Nigeria as case studies, along with the concepts of sovereignty, authority, and power.",
    units: ["Political systems, regimes, and change", "Political institutions", "Political culture and participation", "Party systems and citizen engagement", "Economic and political change and development"],
    tips: ["Compare countries on the same criteria, such as institutions, regime type, and participation.", "Know the vocabulary precisely and use it in your writing.", "Check the official page for the current list of required countries."],
    links: [["CIA World Factbook", "https://www.cia.gov/the-world-factbook/"]],
    skills: [
      { id: "systems", name: "Political systems and regimes", lesson: "States differ in regime type. Democracies hold competitive elections and protect rights, while authoritarian regimes restrict competition. A parliamentary system chooses the prime minister from the legislature, and a presidential system elects the executive separately.",
        points: ["Sovereignty is the supreme authority within a territory.", "In a parliamentary system the legislature selects the prime minister.", "The UK is a parliamentary democracy with a monarch as ceremonial head of state.", "Authoritarian regimes limit political competition."], tips: ["Classify each country by regime type and give a reason.", "Distinguish the head of state from the head of government."] },
      { id: "inst", name: "Political institutions", lesson: "Institutions include legislatures, executives, courts, and electoral systems. Proportional representation allocates seats by each party's share of the vote and tends to produce multiparty systems, while single-member districts tend toward two major parties. A unitary state concentrates power in the national government.",
        points: ["Proportional representation tends to produce more parties.", "Single-member plurality systems favor two-party competition.", "A unitary state concentrates authority centrally; a federal state divides it.", "Judicial independence varies across countries."], tips: ["Link electoral rules to party systems.", "Compare how power is divided in each state."] },
      { id: "culture", name: "Political culture and participation", lesson: "Civil society includes organizations outside the government, such as unions and NGOs. Citizens participate through voting, parties, interest groups, and protest, and the space for these activities depends on the regime.",
        points: ["Civil society consists of groups outside state control.", "Iran combines elected bodies with unelected religious authority, such as the Supreme Leader.", "Social cleavages (ethnic, religious, class) shape politics.", "Free media and open elections are signs of democratic participation."], tips: ["Give a concrete example for each concept.", "Compare participation across regime types."] },
      { id: "econ", name: "Economic and political change", lesson: "Governments shape economies through policies such as privatization, which transfers state-owned enterprises to private owners. China has been governed by the Chinese Communist Party since 1949 and combined one-party rule with market-oriented reforms.",
        points: ["Privatization moves state-owned assets to private owners.", "The Chinese Communist Party has governed China since 1949.", "Democratization is movement toward democratic rule.", "Economic liberalization does not always bring political liberalization."], tips: ["Connect economic policies to political outcomes.", "Use country-specific examples."] },
    ],
    placement: [
      ["systems", "Which of the following countries is a parliamentary democracy with a monarch as head of state?", ["Russia", "The United Kingdom", "Mexico", "Nigeria"], 1, "The UK has a monarch as ceremonial head of state and a prime minister as head of government chosen from Parliament."],
      ["inst", "Compared with single-member plurality systems, proportional representation tends to produce", ["Fewer parties", "More parties in the legislature", "No political parties", "A directly elected judiciary"], 1, "Proportional representation gives smaller parties seats in proportion to their votes, so more parties are represented."],
      ["culture", "'Civil society' in comparative politics refers to", ["The military", "Voluntary organizations and groups independent of the government", "The civil service bureaucracy", "Courts"], 1, "Civil society includes groups such as unions, advocacy organizations, and associations outside direct state control."],
      ["econ", "Privatization is best defined as", ["Government taking over private companies", "Transfer of state-owned enterprises to private ownership", "Raising taxes on businesses", "Printing more money"], 1, "Privatization means moving ownership of state-owned firms into private hands."],
    ],
    practice: [
      ["systems", "In a parliamentary system, the prime minister is typically chosen by", ["Direct national vote", "The legislature, usually the majority party or coalition", "The courts", "The military"], 1, "In a parliamentary system the executive depends on the support of the legislature."],
      ["inst", "A unitary state is one in which", ["Power is divided equally among regions", "Power is concentrated in the central government", "There is no government", "The executive is the monarch only"], 1, "In a unitary state, subnational governments exist at the discretion of the national government."],
      ["culture", "Iran's political system is distinctive because it combines elected institutions with", ["A hereditary monarch", "Unelected religious authorities such as the Supreme Leader", "A one-party communist system", "Military rule"], 1, "Iran has elections but also powerful unelected religious institutions, including the Supreme Leader and the Guardian Council."],
      ["econ", "Which party has governed China since 1949?", ["The Kuomintang", "The Chinese Communist Party", "The Liberal Democratic Party", "The Social Democratic Party"], 1, "The Chinese Communist Party has been in power since the founding of the People's Republic of China in 1949."],
    ],
  });

  /* ---------- AP European History ---------- */
  apAdd({
    id: "ap-euro", name: "AP European History", section: S, slug: "ap-european-history",
    blurb: "Europe from about 1450 to the present: ideas, politics, economies, and society.",
    about: "A survey of European history from the Renaissance to the present. You analyze primary and secondary sources and develop arguments about continuity and change, causation, and comparison.",
    units: ["Renaissance and exploration (c. 1450–1648)", "Religious Reformation and conflict", "Absolutism, constitutionalism, and the Scientific Revolution", "Enlightenment and the French Revolution", "Industrialization and nineteenth-century politics", "Nationalism, imperialism, and the world wars", "The Cold War and contemporary Europe"],
    tips: ["Practice making a historical argument with a clear thesis and evidence.", "Know the causes and consequences of major events, not only the dates.", "Check the official page for the current time frame and exam format."],
    links: [KA("Khan Academy: AP European History", "/humanities/ap-european-history"), LOC],
    skills: [
      { id: "ren", name: "Renaissance and Reformation", lesson: "The Renaissance revived classical learning and stressed humanism. The printing press, developed around 1450, spread ideas quickly. In 1517 Martin Luther challenged the Catholic Church, especially the sale of indulgences, which began the Protestant Reformation.",
        points: ["Humanism emphasized human potential and classical texts.", "Gutenberg's printing press (c. 1450) spread ideas and literacy.", "Luther's 95 Theses (1517) criticized the sale of indulgences.", "The Reformation divided Western Christendom."], tips: ["Link new technology to the spread of new ideas.", "Explain both religious and political causes of the Reformation."] },
      { id: "abs", name: "Absolutism, science, and Enlightenment", lesson: "In the seventeenth century monarchs such as Louis XIV of France claimed absolute authority and built Versailles. The Scientific Revolution, beginning with Copernicus's heliocentric theory (1543), changed how people understood nature, and Enlightenment thinkers applied reason to politics and society.",
        points: ["Louis XIV is the model of absolutism.", "Copernicus proposed a sun-centered model of the universe in 1543.", "Enlightenment thinkers stressed reason, natural rights, and progress.", "Constitutionalism, as in England, limited royal power."], tips: ["Compare absolutist and constitutional states.", "Connect the Scientific Revolution to the Enlightenment."] },
      { id: "rev", name: "Revolutions and industrialization", lesson: "The French Revolution began in 1789 and spread ideas of liberty and equality. The Industrial Revolution began in Great Britain in the late eighteenth century and transformed work, cities, and society.",
        points: ["The French Revolution began in 1789.", "Industrialization started in Great Britain.", "Industrial cities grew quickly and created new social classes.", "Nationalism reshaped Europe in the nineteenth century."], tips: ["Explain why Britain industrialized first.", "Connect economic change to political and social change."] },
      { id: "modern", name: "Twentieth-century Europe", lesson: "World War I ended with the Treaty of Versailles (1919), which held Germany responsible and required reparations. After World War II, Europe was divided by the Cold War until the Berlin Wall fell in 1989.",
        points: ["The Treaty of Versailles required Germany to accept blame and pay reparations.", "The Cold War divided Europe between East and West.", "The Berlin Wall fell in 1989.", "European integration began with economic cooperation after World War II."], tips: ["Link the peace settlement to later developments.", "Identify causes of the end of the Cold War."] },
    ],
    placement: [
      ["ren", "Martin Luther's 95 Theses (1517) were primarily a protest against", ["The Spanish Inquisition", "The sale of indulgences by the Catholic Church", "The divine right of kings", "The printing press"], 1, "Luther objected to the sale of indulgences, which promised reduced punishment for sins in exchange for money."],
      ["abs", "Which French king is most closely associated with absolutism and the palace at Versailles?", ["Louis XIV", "Henry IV", "Charles V", "Napoleon"], 0, "Louis XIV, the 'Sun King', ruled as an absolute monarch and built Versailles."],
      ["rev", "The French Revolution began in which year?", ["1776", "1789", "1815", "1848"], 1, "The Revolution began in 1789 with the meeting of the Estates-General and the storming of the Bastille."],
      ["modern", "The Treaty of Versailles (1919) required Germany to", ["Join the League of Nations immediately", "Accept responsibility for the war and pay reparations", "Annex Austria", "Rebuild its army"], 1, "The treaty's war guilt clause and reparations were central terms that burdened Germany."],
    ],
    practice: [
      ["ren", "How did the printing press developed by Johannes Gutenberg (c. 1450) most affect Europe?", ["It reduced literacy", "It helped spread ideas quickly, including Renaissance and Reformation ideas", "It ended the Catholic Church", "It slowed trade"], 1, "Printing made books cheaper and more widely available, speeding the spread of new ideas."],
      ["abs", "Who proposed the heliocentric (sun-centered) model of the universe in a book published in 1543?", ["Galileo", "Copernicus", "Newton", "Ptolemy"], 1, "Nicolaus Copernicus published On the Revolutions of the Heavenly Spheres in 1543."],
      ["rev", "In which country did the Industrial Revolution begin?", ["France", "Russia", "Great Britain", "Spain"], 2, "Great Britain industrialized first, helped by coal, capital, colonial markets, and technological innovation."],
      ["modern", "The fall of the Berlin Wall in 1989 is most closely associated with", ["The start of World War I", "The end of the Cold War division of Europe", "The French Revolution", "The founding of NATO"], 1, "The fall of the Wall marked a turning point in the collapse of Soviet-dominated communism in Europe."],
    ],
  });

  /* ---------- AP Human Geography ---------- */
  apAdd({
    id: "ap-humangeo", name: "AP Human Geography", section: S, slug: "ap-human-geography",
    blurb: "How people, places, and cultures are organized across Earth's surface.",
    about: "A study of the patterns and processes that shape human understanding, use, and alteration of Earth's surface. You analyze maps and data on population, culture, politics, urban areas, agriculture, and development.",
    units: ["Thinking geographically", "Population and migration", "Cultural patterns and processes", "Political patterns and processes", "Agriculture and rural land use", "Cities and urban land use", "Industrial and economic development"],
    tips: ["Practice reading maps, graphs, and models.", "Learn the key models (demographic transition, von Thünen, central place theory) and when to apply them.", "Use specific examples to support geographic concepts."],
    links: [KA("Khan Academy: AP Human Geography", "/humanities/ap-human-geography")],
    skills: [
      { id: "pop", name: "Population and migration", lesson: "Geographers study where people live and why they move. Push factors (such as war or lack of jobs) drive people away from a place, and pull factors attract them. The demographic transition model describes how birth and death rates change as a country develops.",
        points: ["Push factors drive migration from a place; pull factors attract.", "Stage 2 of the demographic transition has high birth rates and falling death rates, causing rapid growth.", "Population pyramids show age and sex structure.", "Total fertility rate is the average number of children per woman."], tips: ["Name the stage and explain the birth and death rates.", "Relate migration to economic and political causes."] },
      { id: "culture", name: "Cultural patterns and processes", lesson: "Culture spreads in different ways. Relocation diffusion occurs when people move and bring culture with them, and expansion diffusion spreads ideas while the source stays in place. A lingua franca is a common language used between speakers of different languages.",
        points: ["Relocation diffusion happens through the movement of people.", "Expansion diffusion includes contagious, hierarchical, and stimulus types.", "A lingua franca allows communication across language groups.", "Religions and languages have distinct distributions."], tips: ["Choose the correct diffusion type and justify it.", "Use maps of languages and religions as evidence."] },
      { id: "politics", name: "Political and urban patterns", lesson: "Gerrymandering draws electoral district boundaries to favor one party or group. Central place theory explains the size and spacing of settlements by the goods and services they provide.",
        points: ["Gerrymandering manipulates district boundaries for advantage.", "Central place theory explains hierarchical settlement patterns.", "A nation-state has a population with a shared identity within a state's borders.", "Urban models such as the concentric zone model describe city structure."], tips: ["Name the model before you describe it.", "Link political boundaries to representation and conflict."] },
      { id: "econ", name: "Agriculture and economic development", lesson: "The Green Revolution used high-yield crop varieties, fertilizers, and irrigation to increase food production. The von Thünen model explains that the most perishable and intensive farming happens closest to the market.",
        points: ["The Green Revolution raised yields through new crop varieties and inputs.", "In von Thünen's model, intensive and perishable products are near the market.", "Industrial location depends on costs such as transportation and labor.", "Development indicators include GDP per capita and the Human Development Index."], tips: ["Use the model's assumptions in your explanation.", "Consider both benefits and drawbacks of agricultural change."] },
    ],
    placement: [
      ["pop", "Which is an example of a push factor in migration?", ["Job opportunities in another country", "War or conflict in the origin country", "A better climate elsewhere", "Family already living in another place"], 1, "A push factor drives people away from where they live. War or conflict is a classic example."],
      ["culture", "A lingua franca is", ["A dead language", "A common language used for communication between speakers of different native languages", "A language spoken by only a few people", "A written alphabet"], 1, "A lingua franca, such as English in international business, bridges communication across language groups."],
      ["politics", "Gerrymandering is", ["Moving a capital city", "Drawing electoral district boundaries to favor a particular party or group", "Counting a population", "A type of trade agreement"], 1, "Gerrymandering manipulates district lines to give one party or group an electoral advantage."],
      ["econ", "The Green Revolution mainly refers to", ["A movement to protect forests", "The introduction of high-yield crop varieties and modern farming inputs to increase food production", "A shift to organic farming", "The growth of urban gardens"], 1, "The Green Revolution used high-yield seeds, fertilizers, and irrigation to boost crop yields, especially in the mid-twentieth century."],
    ],
    practice: [
      ["pop", "A country in Stage 2 of the demographic transition model has", ["Low birth and death rates", "High birth rates and falling death rates, leading to rapid growth", "High death rates and low birth rates", "Declining population"], 1, "In Stage 2, death rates fall because of improved health and food supply while birth rates remain high."],
      ["culture", "The spread of a cultural trait when people migrate and carry it with them is called", ["Relocation diffusion", "Contagious diffusion", "Hierarchical diffusion", "Stimulus diffusion"], 0, "Relocation diffusion occurs when people move and bring their culture to a new place."],
      ["politics", "Central place theory attempts to explain", ["Climate patterns", "The size, number, and spacing of settlements based on services they provide", "Migration flows", "Agricultural yields"], 1, "Central place theory describes how settlements of different sizes provide goods and services to surrounding areas."],
      ["econ", "In the von Thünen model, the most intensive, perishable agriculture is located", ["Farthest from the market", "Closest to the market", "Only along rivers", "At random"], 1, "Perishable and high-value products are produced closest to the market because transport costs matter most."],
    ],
  });

  /* ---------- AP Macroeconomics ---------- */
  apAdd({
    id: "ap-macro", name: "AP Macroeconomics", section: S, slug: "ap-macroeconomics",
    blurb: "The economy as a whole: output, jobs, prices, money, and policy.",
    about: "An introduction to the principles that apply to an economic system as a whole. You study measures such as GDP, unemployment, and inflation, along with aggregate demand and supply, money, and fiscal and monetary policy.",
    units: ["Basic economic concepts", "Economic indicators and the business cycle", "National income and price determination", "Financial sector", "Long-run consequences of stabilization policies", "Open economy: international trade and finance"],
    tips: ["Practice drawing and shifting the AD-AS and money market graphs and labeling them fully.", "Be able to explain the cause of each shift in words.", "Know the formulas: GDP, unemployment rate, and the multiplier."],
    links: [KA("Khan Academy: AP Macroeconomics", "/economics-finance-domain/ap-macroeconomics")],
    skills: [
      { id: "measure", name: "Measuring the economy", lesson: "GDP measures the market value of final goods and services produced in a country in a year. By the expenditure approach, GDP = C + I + G + (X − M). The unemployment rate is unemployed workers divided by the labor force.",
        points: ["GDP = C + I + G + (X − M).", "Unemployment rate = unemployed ÷ labor force × 100.", "Inflation is a sustained rise in the general price level.", "Real GDP adjusts for price changes."], tips: ["Include net exports as exports minus imports.", "Divide by the labor force, not the whole population."] },
      { id: "adas", name: "Aggregate demand and supply", lesson: "The AD-AS model shows how the price level and real output are determined. An increase in government spending shifts aggregate demand right. A negative supply shock, such as higher oil prices, shifts aggregate supply left, producing both a higher price level and lower output (stagflation).",
        points: ["Higher government spending shifts AD right.", "A negative supply shock shifts SRAS left, causing stagflation.", "The long-run aggregate supply curve is vertical at potential output.", "Recessionary and inflationary gaps are differences from potential output."], tips: ["Say which curve shifts, in which direction, and why.", "Describe the effect on both price level and output."] },
      { id: "money", name: "Money, banking, and monetary policy", lesson: "With a required reserve ratio, the simple money multiplier is 1 divided by that ratio. To fight inflation the central bank can contract the money supply by selling government bonds, which raises interest rates and reduces spending.",
        points: ["Money multiplier = 1 ÷ required reserve ratio.", "Selling bonds reduces the money supply.", "Buying bonds increases the money supply.", "Higher interest rates reduce investment and consumption."], tips: ["Trace the chain from the policy action to AD.", "Distinguish contractionary from expansionary policy."] },
      { id: "fiscal", name: "Fiscal policy and international trade", lesson: "Expansionary fiscal policy means raising government spending or cutting taxes to boost output. When the domestic currency appreciates, exports become more expensive for foreigners and net exports fall.",
        points: ["Expansionary fiscal policy: more spending or lower taxes.", "Contractionary fiscal policy: less spending or higher taxes.", "Currency appreciation lowers net exports.", "The spending multiplier amplifies initial changes in spending."], tips: ["Connect exchange rates to prices of imports and exports.", "Note the trade-off between unemployment and inflation."] },
    ],
    placement: [
      ["measure", "An economy has C = 600, I = 200, G = 300, exports = 100, and imports = 150. What is GDP?", ["1,100", "1,050", "1,250", "1,350"], 1, "GDP = C + I + G + (X − M) = 600 + 200 + 300 + (100 − 150) = 1,050."],
      ["adas", "An increase in government spending, all else equal, will shift", ["Aggregate demand to the right", "Aggregate demand to the left", "Long-run aggregate supply to the right", "Short-run aggregate supply to the left"], 0, "Government spending is a component of aggregate demand, so more spending shifts AD right."],
      ["money", "If the required reserve ratio is 10%, what is the simple money multiplier?", ["1", "5", "10", "100"], 2, "The money multiplier is 1/0.10 = 10."],
      ["fiscal", "Which of the following is an example of expansionary fiscal policy?", ["Raising taxes", "Cutting government spending", "Cutting taxes or increasing government spending", "Selling government bonds"], 2, "Expansionary fiscal policy increases aggregate demand through lower taxes or higher government spending."],
    ],
    practice: [
      ["measure", "In an economy the labor force is 200 million and 10 million are unemployed. What is the unemployment rate?", ["2%", "5%", "10%", "20%"], 1, "Unemployment rate = 10 ÷ 200 = 5%."],
      ["adas", "A sharp rise in oil prices shifts short-run aggregate supply to the left. The likely result is", ["Lower price level and higher output", "Higher price level and lower output", "Higher price level and higher output", "No change in the price level"], 1, "A negative supply shock raises the price level and reduces real output, which is called stagflation."],
      ["money", "To reduce inflation, a central bank would most likely", ["Buy government bonds", "Sell government bonds", "Lower the reserve requirement", "Lower the discount rate"], 1, "Selling bonds removes reserves from banks, reduces the money supply, and raises interest rates, which lowers inflation pressure."],
      ["fiscal", "If a country's currency appreciates, its exports will become", ["Cheaper for foreign buyers", "More expensive for foreign buyers, tending to reduce net exports", "Unaffected", "Free of tariffs"], 1, "A stronger currency makes the country's goods more expensive abroad, reducing exports."],
    ],
  });

  /* ---------- AP Microeconomics ---------- */
  apAdd({
    id: "ap-micro", name: "AP Microeconomics", section: S, slug: "ap-microeconomics",
    blurb: "How individuals and firms make decisions and how markets work.",
    about: "An introduction to the behavior of individual economic agents. You study supply and demand, consumer and producer choice, market structures, factor markets, and market failure.",
    units: ["Basic economic concepts", "Supply and demand", "Production, cost, and the perfect competition model", "Imperfect competition", "Factor markets", "Market failure and the role of government"],
    tips: ["Practice drawing and labeling graphs, including cost curves and market diagrams.", "Know how to calculate elasticity and compute profit.", "Be ready to explain the effect of a change in words and on a graph."],
    links: [KA("Khan Academy: AP Microeconomics", "/economics-finance-domain/ap-microeconomics")],
    skills: [
      { id: "market", name: "Supply, demand, and market interventions", lesson: "The equilibrium price is where quantity supplied equals quantity demanded. A price ceiling set below equilibrium causes a shortage, and a price floor set above equilibrium causes a surplus. An increase in demand raises both the equilibrium price and quantity.",
        points: ["Price ceiling below equilibrium causes a shortage.", "Price floor above equilibrium causes a surplus.", "Increase in demand with fixed supply raises price and quantity.", "Distinguish a shift of a curve from a movement along it."], tips: ["Draw the graph before answering.", "Note whether the price control is binding."] },
      { id: "elastic", name: "Elasticity and consumer choice", lesson: "Price elasticity of demand equals the percent change in quantity demanded divided by the percent change in price. If it is greater than 1, demand is elastic, and raising price reduces total revenue.",
        points: ["Elasticity = %ΔQd ÷ %ΔP.", "Elastic demand: |E| > 1; inelastic: |E| < 1.", "If demand is elastic, raising price lowers total revenue.", "Substitutes make demand more elastic."], tips: ["Use absolute values for elasticity.", "Think about the availability of substitutes."] },
      { id: "firms", name: "Costs and market structures", lesson: "A profit-maximizing firm produces the quantity where marginal revenue equals marginal cost. Monopolistic competition has many firms, differentiated products, and free entry, while a monopoly has a single seller.",
        points: ["Profit is maximized where MR = MC.", "Perfect competition: many firms, identical products, price takers.", "Monopolistic competition: many firms, differentiated products.", "Monopoly: one seller with barriers to entry."], tips: ["Identify the market structure before analyzing.", "Find quantity using MR = MC, then price from demand."] },
      { id: "fail", name: "Market failure", lesson: "A negative externality, such as pollution, means that the private market produces more than is socially optimal. A public good is nonrival and nonexcludable, so private markets tend to underprovide it (the free-rider problem).",
        points: ["Negative externality: overproduction compared with the social optimum.", "Positive externality: underproduction.", "Public goods are nonrival and nonexcludable.", "Governments may use taxes, subsidies, or regulation to correct failures."], tips: ["Compare private and social costs.", "Explain a policy's effect on the quantity."] },
    ],
    placement: [
      ["market", "A binding price ceiling set below the equilibrium price will cause", ["A surplus", "A shortage", "No change", "An increase in supply"], 1, "At a price below equilibrium, quantity demanded exceeds quantity supplied, creating a shortage."],
      ["elastic", "When the price of a good rises by 10% and the quantity demanded falls by 20%, the price elasticity of demand (in absolute value) is", ["0.5", "1", "2", "10"], 2, "Elasticity = 20% ÷ 10% = 2, so demand is elastic."],
      ["firms", "A profit-maximizing firm will produce the quantity where", ["Price equals average cost", "Marginal revenue equals marginal cost", "Total revenue is highest", "Marginal cost is lowest"], 1, "Profit is maximized at the output where MR = MC."],
      ["fail", "A negative externality in production typically leads to", ["Underproduction compared with the social optimum", "Overproduction compared with the social optimum", "A perfectly efficient outcome", "Higher prices for all goods"], 1, "The firm ignores the external cost, so more is produced than is socially optimal."],
    ],
    practice: [
      ["market", "If demand for a good increases while supply stays the same, equilibrium price and quantity will", ["Both fall", "Both rise", "Price rises and quantity falls", "Price falls and quantity rises"], 1, "A rightward shift of demand along an upward-sloping supply curve raises both price and quantity."],
      ["elastic", "If demand for a product is elastic and the firm raises its price, total revenue will", ["Rise", "Fall", "Stay the same", "Become zero"], 1, "With elastic demand, the percentage fall in quantity is larger than the percentage rise in price, so revenue falls."],
      ["firms", "Which market structure has many firms, differentiated products, and easy entry and exit?", ["Perfect competition", "Monopolistic competition", "Monopoly", "Oligopoly"], 1, "Monopolistic competition combines many sellers and free entry with product differentiation."],
      ["fail", "A public good is best described as a good that is", ["Rival and excludable", "Nonrival and nonexcludable", "Provided only by private firms", "Always free to produce"], 1, "Public goods, such as national defense, can be used by many people at once and nonpayers can't easily be excluded."],
    ],
  });

  /* ---------- AP Psychology ---------- */
  apAdd({
    id: "ap-psych", name: "AP Psychology", section: S, slug: "ap-psychology",
    blurb: "The science of behavior and mental processes.",
    about: "An introduction to the systematic and scientific study of behavior and mental processes. You study the biology of behavior, learning and cognition, development, personality, mental health, social psychology, and research methods.",
    units: ["Scientific foundations of psychology", "Biological bases of behavior", "Sensation and perception", "Learning", "Cognitive psychology", "Developmental psychology", "Motivation, emotion, and personality", "Clinical psychology", "Social psychology"],
    tips: ["Learn the key terms precisely and apply them to examples.", "Know how to identify variables and design of a study.", "Practice matching a scenario to the correct concept."],
    links: [["American Psychological Association: Psychology topics", "https://www.apa.org/topics"]],
    skills: [
      { id: "bio", name: "Biological bases and the brain", lesson: "Neurons communicate with neurotransmitters. The hippocampus is essential for forming new long-term memories, and the neurotransmitter serotonin is involved in regulating mood. Low serotonin activity is linked with depression.",
        points: ["The hippocampus is key to forming new explicit memories.", "Serotonin affects mood, sleep, and appetite.", "The amygdala is involved in emotion, especially fear.", "The brain's frontal lobes handle planning and decision making."], tips: ["Match each brain region with a function.", "Link neurotransmitters to behavior and disorders."] },
      { id: "learn", name: "Learning and cognition", lesson: "In classical conditioning, a neutral stimulus paired with an unconditioned stimulus becomes a conditioned stimulus that triggers a conditioned response. In operant conditioning, reinforcement strengthens behavior; negative reinforcement strengthens it by removing an unpleasant stimulus.",
        points: ["Pavlov: the bell became a conditioned stimulus.", "Positive reinforcement adds something pleasant; negative reinforcement removes something unpleasant.", "Punishment decreases behavior.", "Memory involves encoding, storage, and retrieval."], tips: ["Label the UCS, UCR, CS, and CR in a scenario.", "Don't confuse negative reinforcement with punishment."] },
      { id: "dev", name: "Development and personality", lesson: "Piaget described four stages of cognitive development, and the formal operational stage (from about age 12) involves abstract and hypothetical thinking. Erikson proposed that adolescents face the crisis of identity versus role confusion.",
        points: ["Piaget's stages: sensorimotor, preoperational, concrete operational, formal operational.", "Erikson's adolescent stage: identity vs. role confusion.", "Attachment forms early between infants and caregivers.", "Personality theories include trait, psychodynamic, humanistic, and social-cognitive."], tips: ["Learn the stages in order.", "Match a behavior to a stage."] },
      { id: "clinical", name: "Mental health and research methods", lesson: "In an experiment, the independent variable is the one the researcher manipulates and the dependent variable is what is measured. Major depressive disorder involves persistent low mood and loss of interest.",
        points: ["Independent variable: manipulated; dependent variable: measured.", "Random assignment helps establish cause and effect.", "Major depressive disorder: persistent sadness and loss of interest.", "Correlation does not prove causation."], tips: ["Identify the variables in any study description.", "Use the DSM criteria language carefully."] },
    ],
    placement: [
      ["bio", "Which brain structure is most important for forming new long-term memories?", ["Cerebellum", "Hippocampus", "Medulla", "Thalamus"], 1, "The hippocampus is essential for consolidating new explicit memories."],
      ["learn", "In Pavlov's experiments, the bell that was paired with food and later made the dog salivate was the", ["Unconditioned stimulus", "Unconditioned response", "Conditioned stimulus", "Conditioned response"], 2, "The bell started as neutral and, after pairing with food, became a conditioned stimulus."],
      ["dev", "According to Piaget, abstract and hypothetical thinking develops in the", ["Sensorimotor stage", "Preoperational stage", "Concrete operational stage", "Formal operational stage"], 3, "The formal operational stage, beginning around age 12, is marked by abstract and hypothetical reasoning."],
      ["clinical", "In an experiment, the variable that the researcher manipulates is the", ["Dependent variable", "Independent variable", "Confounding variable", "Control group"], 1, "The researcher manipulates the independent variable and measures its effect on the dependent variable."],
    ],
    practice: [
      ["bio", "Low activity of which neurotransmitter is most closely linked to depression?", ["Serotonin", "Insulin", "Adrenaline", "Melatonin only"], 0, "Serotonin is associated with mood regulation, and low levels are linked to depression."],
      ["learn", "Negative reinforcement involves", ["Adding an unpleasant stimulus to decrease behavior", "Removing an unpleasant stimulus to increase behavior", "Removing a pleasant stimulus", "Pairing two stimuli"], 1, "Negative reinforcement strengthens a behavior by taking away something aversive."],
      ["dev", "According to Erikson, the main psychosocial crisis of adolescence is", ["Trust vs. mistrust", "Identity vs. role confusion", "Integrity vs. despair", "Industry vs. inferiority"], 1, "Adolescents work on forming a stable sense of self, which Erikson called identity versus role confusion."],
      ["clinical", "A disorder characterized by persistent low mood and loss of interest in activities is", ["Generalized anxiety disorder", "Major depressive disorder", "Schizophrenia", "Obsessive-compulsive disorder"], 1, "These are the core symptoms of major depressive disorder."],
    ],
  });

  /* ---------- AP United States Government and Politics ---------- */
  apAdd({
    id: "ap-usgov", name: "AP United States Government and Politics", section: S, slug: "ap-united-states-government-and-politics",
    blurb: "The U.S. Constitution, institutions, civil liberties, and political participation.",
    about: "A study of the structure and function of American government. You analyze the Constitution, the three branches, federalism, civil liberties and rights, political ideologies, parties, elections, and key Supreme Court cases and foundational documents.",
    units: ["Foundations of American democracy", "Interactions among branches of government", "Civil liberties and civil rights", "American political ideologies and beliefs", "Political participation"],
    tips: ["Know the required Supreme Court cases and foundational documents and how they connect to the Constitution.", "Practice explaining how an institution or case relates to a principle.", "Check the official page for the current list of required cases and documents."],
    links: [["Oyez: Supreme Court case summaries", "https://www.oyez.org/"], NARA, KA("Khan Academy: AP U.S. Government and Politics", "/humanities/ap-us-government-and-politics")],
    skills: [
      { id: "found", name: "Foundations and federalism", lesson: "The Constitution divides power between the national government and the states (federalism). In Federalist No. 10, James Madison argued that a large republic can control the dangers of factions.",
        points: ["Federalism divides power between national and state governments.", "Federalist No. 10: a large republic can check the effects of factions.", "The Constitution separates powers into three branches.", "The Bill of Rights is the first ten amendments."], tips: ["Link ideas in the foundational documents to constitutional structure.", "Know the Articles of Confederation's weaknesses."] },
      { id: "branches", name: "Branches and checks and balances", lesson: "Each branch can check the others. A president's veto can be overridden by a two-thirds vote of both houses of Congress. The Supreme Court established the power of judicial review in Marbury v. Madison (1803).",
        points: ["Veto override requires a two-thirds vote in both chambers.", "Judicial review comes from Marbury v. Madison (1803).", "The Senate confirms judges and ratifies treaties.", "The House has the power to initiate revenue bills."], tips: ["Give a specific check for each branch.", "Use the case name as evidence."] },
      { id: "rights", name: "Civil liberties and civil rights", lesson: "The First Amendment protects freedom of religion, speech, press, assembly, and petition. In Gideon v. Wainwright (1963) the Supreme Court held that states must provide an attorney to defendants who cannot afford one.",
        points: ["First Amendment: religion, speech, press, assembly, petition.", "Gideon v. Wainwright (1963): right to counsel for the poor.", "The Fourteenth Amendment's due process and equal protection clauses apply rights to the states.", "Civil liberties limit government; civil rights protect against discrimination."], tips: ["Match a case with the right it established.", "Identify the amendment at the heart of each case."] },
      { id: "particip", name: "Political participation and parties", lesson: "Political parties recruit and nominate candidates and mobilize voters. Primary elections are used to choose a party's nominee for the general election.",
        points: ["Parties recruit candidates and help organize government.", "Primaries select party nominees.", "Interest groups influence policy but do not run candidates.", "Voter turnout is affected by laws, demographics, and interest."], tips: ["Distinguish parties from interest groups.", "Explain how election rules affect participation."] },
    ],
    placement: [
      ["found", "Federalism in the United States refers to", ["The division of power between the national government and state governments", "Rule by a single party", "The separation of church and state", "The Senate's power to confirm judges"], 0, "Federalism divides sovereignty between the national government and the states."],
      ["branches", "How can Congress override a presidential veto?", ["A simple majority in the Senate", "A two-thirds vote in both the House and the Senate", "A three-fourths vote of the states", "A ruling by the Supreme Court"], 1, "Overriding a veto requires a two-thirds vote in both chambers."],
      ["rights", "Which Supreme Court case established that states must provide an attorney to defendants who cannot afford one?", ["Gideon v. Wainwright", "Miranda v. Arizona", "Mapp v. Ohio", "Tinker v. Des Moines"], 0, "Gideon v. Wainwright (1963) applied the Sixth Amendment right to counsel to the states."],
      ["particip", "The primary purpose of a primary election is to", ["Elect the president directly", "Select a party's nominee for the general election", "Choose members of the Supreme Court", "Repeal a law"], 1, "Primaries allow voters to choose which candidates will represent each party in the general election."],
    ],
    practice: [
      ["found", "In Federalist No. 10, James Madison argued that", ["A large republic can help control the effects of factions", "Political parties should be banned", "The states should be sovereign", "The president should serve for life"], 0, "Madison believed a large republic with many competing interests makes it harder for one faction to dominate."],
      ["branches", "The power of judicial review was established in", ["McCulloch v. Maryland", "Marbury v. Madison", "Brown v. Board of Education", "Plessy v. Ferguson"], 1, "In Marbury v. Madison (1803) the Court asserted the power to strike down laws that conflict with the Constitution."],
      ["rights", "Which of the following is protected by the First Amendment?", ["The right to bear arms", "Freedom of speech", "Protection against unreasonable searches", "The right to a speedy trial"], 1, "The First Amendment protects speech, religion, press, assembly, and petition."],
      ["particip", "Which of the following is a main function of political parties?", ["Interpreting the Constitution", "Recruiting and nominating candidates", "Enforcing laws", "Declaring war"], 1, "Parties recruit, nominate, and support candidates and help organize voters."],
    ],
  });

  /* ---------- AP United States History ---------- */
  apAdd({
    id: "ap-ush", name: "AP United States History", section: S, slug: "ap-united-states-history",
    blurb: "American history from about 1491 to the present.",
    about: "A survey of U.S. history from the pre-Columbian era to the present. You analyze primary and secondary sources and write arguments about continuity and change, causation, and comparison.",
    units: ["Period 1: 1491–1607", "Period 2: 1607–1754", "Period 3: 1754–1800", "Period 4: 1800–1848", "Period 5: 1844–1877", "Period 6: 1865–1898", "Period 7: 1890–1945", "Period 8: 1945–1980", "Period 9: 1980–present"],
    tips: ["Practice writing a thesis that makes a defensible argument.", "Use specific evidence (names, events, laws) in every essay.", "Know the causes and effects of major events, not only the dates."],
    links: [KA("Khan Academy: AP U.S. History", "/humanities/ap-us-history"), LOC, NARA],
    skills: [
      { id: "found", name: "Colonial era and the founding", lesson: "Thirteen British colonies developed distinct regional economies and societies. The Declaration of Independence (1776), written mainly by Thomas Jefferson, declared independence, and the Articles of Confederation created a weak national government that could not tax.",
        points: ["Jefferson was the main author of the Declaration of Independence.", "The Articles of Confederation gave the national government no power to tax.", "The Constitution (1787) created a stronger federal government.", "The Bill of Rights (1791) protected individual liberties."], tips: ["Explain why the Articles failed and the Constitution was written.", "Link Enlightenment ideas to the Revolution."] },
      { id: "civilwar", name: "Expansion, slavery, and the Civil War", lesson: "The Louisiana Purchase (1803) from France doubled the size of the country. Debates over slavery's expansion led to the Civil War, and Lincoln's Emancipation Proclamation (1863) declared enslaved people free in Confederate states in rebellion.",
        points: ["The Louisiana Purchase (1803) was acquired from France.", "The Emancipation Proclamation (1863) applied to Confederate areas in rebellion.", "The Thirteenth Amendment (1865) ended slavery nationwide.", "Reconstruction (1865–1877) tried to rebuild the South and protect freedpeople."], tips: ["Link westward expansion to the slavery debate.", "Know the difference between the Proclamation and the Thirteenth Amendment."] },
      { id: "gilded", name: "Gilded Age to the Great Depression", lesson: "After the Civil War, industrialization, immigration, and urban growth transformed the country. The Chinese Exclusion Act (1882) restricted Chinese immigration, and the New Deal of the 1930s was a set of programs under Franklin Roosevelt responding to the Great Depression.",
        points: ["The Chinese Exclusion Act (1882) restricted Chinese immigration.", "The New Deal aimed at relief, recovery, and reform during the Depression.", "Progressive reformers addressed industrial and urban problems.", "World War I expanded the role of the federal government."], tips: ["Connect reform movements to the problems they addressed.", "Compare the Progressive Era and the New Deal."] },
      { id: "postwar", name: "Postwar America", lesson: "The policy of containment aimed to prevent the spread of communism during the Cold War. The Civil Rights Act of 1964 outlawed discrimination based on race, color, religion, sex, or national origin.",
        points: ["Containment was the central Cold War strategy of the U.S.", "The Civil Rights Act of 1964 banned discrimination in public places and employment.", "The Voting Rights Act of 1965 protected voting rights.", "The Vietnam War divided American society."], tips: ["Link domestic movements to Cold War context.", "Use the correct year for each law."] },
    ],
    placement: [
      ["found", "Who was the principal author of the Declaration of Independence?", ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"], 2, "Thomas Jefferson drafted the Declaration of Independence in 1776."],
      ["civilwar", "The Louisiana Purchase of 1803 was a land acquisition from", ["Spain", "France", "Britain", "Mexico"], 1, "President Jefferson bought the Louisiana Territory from France."],
      ["gilded", "The New Deal of the 1930s was", ["A treaty ending World War I", "A set of federal programs and reforms responding to the Great Depression", "A plan to colonize the West", "A law banning alcohol"], 1, "Franklin D. Roosevelt's New Deal aimed at relief, recovery, and reform during the Depression."],
      ["postwar", "The U.S. policy of containment during the Cold War aimed to", ["Expand the American empire", "Prevent the spread of communism", "End the arms race through disarmament", "Withdraw from world affairs"], 1, "Containment sought to stop the spread of communism beyond where it already existed."],
    ],
    practice: [
      ["found", "A major weakness of the Articles of Confederation was that the national government", ["Had too many powers", "Could not levy taxes", "Controlled the states' militias", "Was led by a king"], 1, "Without the power to tax, the national government struggled to pay its debts and operate."],
      ["civilwar", "The Emancipation Proclamation (1863) declared free the enslaved people in", ["All of the United States", "Confederate states still in rebellion", "Border states loyal to the Union", "Only the District of Columbia"], 1, "The Proclamation applied to areas in rebellion. The Thirteenth Amendment later ended slavery everywhere."],
      ["gilded", "The Chinese Exclusion Act of 1882", ["Welcomed Chinese immigrants", "Restricted Chinese immigration to the United States", "Established a quota for all nations", "Granted citizenship to Chinese immigrants"], 1, "It was the first major federal law to restrict immigration based on nationality."],
      ["postwar", "The Civil Rights Act of 1964", ["Created Social Security", "Banned discrimination based on race, color, religion, sex, or national origin", "Gave women the right to vote", "Ended the draft"], 1, "The law outlawed discrimination in public accommodations and employment, among other areas."],
    ],
  });

  /* ---------- AP World History: Modern ---------- */
  apAdd({
    id: "ap-worldhist", name: "AP World History: Modern", section: S, slug: "ap-world-history-modern",
    blurb: "Global history from about 1200 to the present.",
    about: "A survey of global history from c. 1200 to the present. You compare societies, study connections across regions, and use historical thinking skills such as causation, comparison, and continuity and change over time.",
    units: ["The global tapestry (c. 1200–1450)", "Networks of exchange (c. 1200–1450)", "Land-based empires (c. 1450–1750)", "Transoceanic interconnections (c. 1450–1750)", "Revolutions (c. 1750–1900)", "Consequences of industrialization (c. 1750–1900)", "Global conflict (c. 1900–present)", "Cold War and decolonization (c. 1900–present)", "Globalization (c. 1900–present)"],
    tips: ["Practice writing a thesis that answers the question and a line of reasoning.", "Make comparisons across regions and across time.", "Use specific evidence in every essay."],
    links: [KA("Khan Academy: AP World History", "/humanities/ap-world-history"), LOC],
    skills: [
      { id: "networks", name: "Networks of exchange (c. 1200–1450)", lesson: "The Mongol Empire connected much of Eurasia and protected trade along the Silk Roads (the Pax Mongolica). The same networks helped spread the Black Death in the fourteenth century.",
        points: ["The Mongols connected East Asia, Central Asia, and Europe.", "The Silk Roads carried goods, technology, and ideas.", "The Black Death spread along trade routes.", "Indian Ocean trade linked East Africa, Arabia, India, and Southeast Asia."], tips: ["Link trade networks to the spread of disease and ideas.", "Consider both benefits and costs of connection."] },
      { id: "empires", name: "Empires and transoceanic connections", lesson: "After 1450, large land-based empires such as the Ottomans, Mughals, and Safavids expanded. The Ottomans captured Constantinople in 1453. European voyages created the Columbian Exchange, the transfer of plants, animals, and diseases between the Eastern and Western Hemispheres.",
        points: ["The Ottomans captured Constantinople in 1453.", "The Columbian Exchange moved crops, animals, and diseases between hemispheres.", "Silver from the Americas became central to world trade.", "Gunpowder empires used firearms to expand."], tips: ["Compare how different empires governed.", "Show effects of the Columbian Exchange on both hemispheres."] },
      { id: "revolutions", name: "Revolutions and industrialization", lesson: "The Industrial Revolution began in Great Britain and spread, transforming economies and societies. The Haitian Revolution (1791–1804) was a successful rebellion of enslaved people that led to independence from France.",
        points: ["Industrialization began in Great Britain.", "The Haitian Revolution led to independence in 1804.", "Revolutions in America, France, and Latin America spread ideas of liberty.", "Industrialization led to new imperialism and global migration."], tips: ["Explain why industrialization began where it did.", "Connect revolutions to Enlightenment ideas."] },
      { id: "global", name: "Global conflict and globalization", lesson: "The Cold War was a rivalry between the United States and the Soviet Union. After World War II, many colonies in Asia and Africa gained independence through decolonization.",
        points: ["The Cold War was a rivalry between the U.S. and the USSR.", "Decolonization created many new nation-states after 1945.", "Two world wars reshaped global power.", "Globalization has increased trade, communication, and migration."], tips: ["Link the world wars to decolonization.", "Use specific examples for each region."] },
    ],
    placement: [
      ["networks", "The Black Death in the fourteenth century spread mainly along", ["Trade routes such as the Silk Roads", "Military roads built by Rome", "Only maritime routes in the Pacific", "The Atlantic slave trade"], 0, "The plague traveled with merchants and armies along Eurasian trade routes."],
      ["empires", "The Columbian Exchange refers to", ["The trade of silk for silver", "The transfer of plants, animals, and diseases between the Eastern and Western Hemispheres", "An alliance between Spain and Portugal", "A treaty dividing Africa"], 1, "After 1492 crops, livestock, and diseases moved between the Americas and the rest of the world."],
      ["revolutions", "In which country did the Industrial Revolution begin?", ["France", "Great Britain", "Germany", "Japan"], 1, "Great Britain industrialized first in the late 1700s."],
      ["global", "The Cold War was primarily a rivalry between", ["Britain and France", "The United States and the Soviet Union", "China and India", "Germany and Japan"], 1, "The two superpowers competed through alliances, arms races, and proxy conflicts without direct war between them."],
    ],
    practice: [
      ["networks", "The 'Pax Mongolica' refers to", ["A peace treaty with China", "A period of relative peace and secure trade across the Mongol-controlled Eurasian lands", "A Mongol religion", "The Mongol conquest of Japan"], 1, "Mongol rule protected travelers and merchants along the Silk Roads."],
      ["empires", "The Ottoman Empire captured Constantinople in which year?", ["1066", "1453", "1492", "1648"], 1, "The Ottomans under Mehmed II captured Constantinople in 1453, ending the Byzantine Empire."],
      ["revolutions", "The Haitian Revolution (1791–1804) resulted in", ["A French victory", "The independence of Haiti, led by formerly enslaved people", "A Spanish colony", "A British protectorate"], 1, "Enslaved people overthrew French colonial rule and established an independent Haiti in 1804."],
      ["global", "Decolonization after World War II refers to", ["European colonies in Asia and Africa gaining independence", "The creation of new European colonies", "The end of the Cold War", "Trade agreements among industrial nations"], 0, "Many colonies, including India (1947) and numerous African nations, became independent in the decades after 1945."],
    ],
  });
})();
