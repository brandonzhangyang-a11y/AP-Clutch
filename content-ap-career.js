(() => {
  const S = "AP Career Kickstart";
  const pilotNote = "College Board lists this course as part of AP Career Kickstart. Pilot courses are offered at limited schools and their details can change, so check the official AP Career Kickstart page for the current status, exam details, and credential information.";

  /* ---------- AP Cybersecurity ---------- */
  apAdd({
    id: "ap-cyber", name: "AP Cybersecurity", section: S, slug: "ap-cybersecurity",
    blurb: "Protecting data and systems: threats, defenses, authentication, and risk.",
    about: "A course in the fundamentals of cybersecurity: how data and systems are protected, the threats they face, and how organizations assess and manage risk. It is part of AP Career Kickstart, which connects AP courses to high-demand careers.",
    units: ["Security fundamentals", "Threats and attacks", "Authentication and encryption", "Risk and defense"],
    format: "See the official AP Cybersecurity page for the current exam format, timing, and credential information.",
    tips: ["Learn the vocabulary precisely: confidentiality, integrity, availability, and common attack types.", "Apply concepts to realistic scenarios, such as a phishing email.", "Check the official page for the current exam details."],
    links: [["OWASP: Open Worldwide Application Security Project", "https://owasp.org/"], ["CISA: Cybersecurity and Infrastructure Security Agency", "https://www.cisa.gov/"]],
    skills: [
      { id: "fund", name: "Security fundamentals", lesson: "The CIA triad is the core model of information security: confidentiality (only authorized people can see data), integrity (data is accurate and not altered without permission), and availability (systems and data are accessible when needed).",
        points: ["Confidentiality: protect data from unauthorized access.", "Integrity: protect data from unauthorized change.", "Availability: keep systems and data usable.", "Defense in depth uses multiple layers of protection."], tips: ["Name which part of the CIA triad an attack affects.", "Use layered defenses."] },
      { id: "threats", name: "Threats and attacks", lesson: "Phishing uses deceptive messages to trick people into revealing information or installing malware. A distributed denial-of-service (DDoS) attack overwhelms a service with traffic so legitimate users cannot reach it, which attacks availability.",
        points: ["Phishing is social engineering by deceptive messages.", "Malware includes viruses, ransomware, and spyware.", "A DDoS attack targets availability.", "Social engineering exploits human trust."], tips: ["Look for urgency and suspicious links in messages.", "Match each attack to the property it threatens."] },
      { id: "auth", name: "Authentication and encryption", lesson: "Multi-factor authentication requires two or more types of evidence: something you know (password), something you have (phone or token), and something you are (fingerprint). Symmetric encryption uses the same key to encrypt and decrypt, while asymmetric encryption uses a public and private key pair.",
        points: ["MFA combines different factor types.", "Symmetric encryption: one shared key.", "Asymmetric encryption: public and private keys.", "Hashing produces a fixed-length fingerprint of data."], tips: ["Use long, unique passwords and a password manager.", "Know when to use symmetric vs. asymmetric encryption."] },
      { id: "risk", name: "Risk and defense", lesson: "The principle of least privilege says that users and programs should have only the access they need. Firewalls filter network traffic according to rules, and risk management weighs the likelihood and impact of threats.",
        points: ["Least privilege limits access to what's necessary.", "A firewall filters traffic based on rules.", "Risk = likelihood × impact.", "Keep software updated and patched."], tips: ["Prioritize high-likelihood, high-impact risks.", "Apply the principle of least privilege."] },
    ],
    placement: [
      ["fund", "In information security, the CIA triad stands for", ["Control, Inspection, Authorization", "Confidentiality, Integrity, Availability", "Cryptography, Identity, Access", "Compliance, Insurance, Audit"], 1, "The CIA triad is confidentiality, integrity, and availability."],
      ["threats", "Phishing is best described as", ["A way to speed up a network", "A deceptive message that tricks people into revealing information or taking harmful actions", "A type of encryption", "A hardware failure"], 1, "Phishing uses fake messages, often by email, to trick people."],
      ["auth", "Multi-factor authentication requires", ["A longer password", "Two or more different types of evidence, such as a password and a code from a phone", "The same password twice", "Only a fingerprint"], 1, "MFA combines different factor types: something you know, have, or are."],
      ["risk", "The principle of least privilege means that users should", ["Have administrator access", "Have only the access needed to do their job", "Share passwords", "Have no access at all"], 1, "Limiting access reduces the damage from mistakes or compromised accounts."],
    ],
    practice: [
      ["fund", "Which property of the CIA triad is violated when data is changed without authorization?", ["Confidentiality", "Integrity", "Availability", "Authenticity only"], 1, "Unauthorized alteration violates data integrity."],
      ["threats", "A DDoS attack mainly threatens which property?", ["Confidentiality", "Integrity", "Availability", "Authentication"], 2, "A DDoS attack floods a service so legitimate users can't access it."],
      ["auth", "Symmetric encryption uses", ["Two different keys", "The same key for encrypting and decrypting", "No key", "A public key only"], 1, "In symmetric encryption both sides share a single secret key."],
      ["risk", "What does a network firewall mainly do?", ["Stores backups", "Filters network traffic according to rules", "Encrypts all files", "Speeds up the Internet"], 1, "A firewall allows or blocks traffic based on a set of rules."],
    ],
  });

  /* ---------- AP Business with Personal Finance ---------- */
  apAdd({
    id: "ap-bizfin", name: "AP Business with Personal Finance", section: S, slug: "ap-business-personal-finance",
    blurb: "How businesses operate and how to manage your own money.",
    about: "A course that combines business fundamentals, such as business structures, marketing, and operations, with personal finance skills, such as budgeting, saving, credit, and investing. It is part of AP Career Kickstart.",
    units: ["Personal finance: budgeting, saving, and credit", "Interest, investing, and taxes", "Business fundamentals and structures", "Marketing and operations"],
    format: "See the official AP Business with Personal Finance page for the current exam format, timing, and credential information.",
    tips: ["Practice the basic calculations: interest, profit, and percent change.", "Apply each concept to a realistic example, such as a student budget or small business.", "Check the official page for the current exam details."],
    links: [["Consumer Financial Protection Bureau: Money as You Grow", "https://www.consumerfinance.gov/consumer-tools/educator-tools/youth-financial-education/"], ["Investor.gov: Investing basics", "https://www.investor.gov/"]],
    skills: [
      { id: "budget", name: "Budgeting, saving, and credit", lesson: "A budget plans how income is spent and saved. The 50/30/20 guideline suggests about 50% of income for needs, 30% for wants, and 20% for savings and debt repayment. A credit score reflects your history of borrowing and repaying, especially on-time payments.",
        points: ["50/30/20: needs, wants, savings and debt.", "Payment history is the biggest factor in a credit score.", "An emergency fund covers unexpected expenses.", "Credit utilization is how much of your available credit you use."], tips: ["Track spending to see where your money goes.", "Pay bills on time and keep balances low."] },
      { id: "invest", name: "Interest, investing, and taxes", lesson: "Compound interest earns interest on both the original amount and past interest: the future value is P(1 + r)ⁿ. For example, $1,000 at 5% for 2 years is 1,000 × 1.05² = $1,102.50. Diversification spreads investments to reduce risk.",
        points: ["Compound interest: A = P(1 + r)ⁿ.", "Simple interest: I = Prt.", "Diversification reduces risk.", "Taxes are paid on income, and withholding is taken from paychecks."], tips: ["Start saving early to benefit from compounding.", "Spread investments across different assets."] },
      { id: "structures", name: "Business structures and entrepreneurship", lesson: "A sole proprietorship is owned by one person who has unlimited personal liability for business debts. A limited liability company (LLC) protects owners' personal assets from business liabilities. Entrepreneurs identify a need and organize resources to meet it.",
        points: ["Sole proprietorship: one owner, unlimited liability.", "LLC: limited liability for owners.", "Corporations are separate legal entities.", "A business plan describes goals, market, and finances."], tips: ["Compare structures by liability, taxes, and complexity.", "Know the advantages and drawbacks of each."] },
      { id: "marketing", name: "Marketing and operations", lesson: "The marketing mix (the four Ps) consists of product, price, place, and promotion. Profit equals revenue minus expenses, so a business with $50,000 in revenue and $42,000 in expenses earns $8,000 in profit.",
        points: ["The four Ps: product, price, place, promotion.", "Profit = revenue − expenses.", "Operations turn inputs into goods and services.", "Market research identifies customer needs."], tips: ["Identify the target market first.", "Check whether profit calculations include all costs."] },
    ],
    placement: [
      ["budget", "Under the 50/30/20 budgeting guideline, about what share of after-tax income goes to savings and debt repayment?", ["10%", "20%", "30%", "50%"], 1, "50% for needs, 30% for wants, and 20% for savings and debt repayment."],
      ["invest", "If you invest $1,000 at 5% annual interest compounded yearly, how much will you have after 2 years?", ["$1,050.00", "$1,100.00", "$1,102.50", "$1,125.00"], 2, "1,000 × 1.05² = $1,102.50."],
      ["structures", "Which business structure has a single owner who is personally responsible for all business debts?", ["Corporation", "LLC", "Sole proprietorship", "Nonprofit"], 2, "A sole proprietor has unlimited personal liability."],
      ["marketing", "The four Ps of the marketing mix are", ["Profit, people, plan, price", "Product, price, place, promotion", "Planning, production, packaging, profit", "Price, payment, policy, product"], 1, "The marketing mix consists of product, price, place, and promotion."],
    ],
    practice: [
      ["budget", "Which factor most strongly influences a credit score?", ["Your age", "Your payment history", "Your zip code", "Your job title"], 1, "Paying on time is the largest single factor in most credit scores."],
      ["invest", "Diversification in investing means", ["Putting all your money in one stock", "Spreading investments across different assets to reduce risk", "Avoiding investments", "Investing only in bonds"], 1, "Diversification lowers risk because the poor performance of one asset can be offset by others."],
      ["structures", "A key advantage of a limited liability company (LLC) is that", ["It pays no taxes", "Owners' personal assets are generally protected from business debts", "It needs no owners", "It cannot make a profit"], 1, "Limited liability separates the owners' personal assets from the company's liabilities."],
      ["marketing", "A business has revenue of $50,000 and expenses of $42,000. What is its profit?", ["$8,000", "$92,000", "$42,000", "$50,000"], 0, "Profit = revenue − expenses = 50,000 − 42,000 = $8,000."],
    ],
  });

  /* ---------- AP Networking (pilot) ---------- */
  apAdd({
    id: "ap-networking", name: "AP Networking (pilot)", section: S, slug: "ap-career-kickstart",
    blurb: "How computer networks work: protocols, addressing, devices, and troubleshooting.",
    about: `A pilot course in computer networking within AP Career Kickstart. ${pilotNote}`,
    units: ["Network models and protocols", "Addressing and routing", "Devices and infrastructure", "Troubleshooting and security"],
    format: "Exam details for pilot courses may not be final. See the official AP Career Kickstart page for the latest information.",
    tips: ["Learn the layers of the OSI and TCP/IP models and the job of each layer.", "Practice IP addressing and subnet basics.", "Check the official page, since pilot course details can change."],
    links: [["Cisco Networking Academy: free courses", "https://www.netacad.com/"]],
    skills: [
      { id: "models", name: "Network models and protocols", lesson: "The OSI model describes seven layers of networking. The network layer (layer 3) handles logical addressing and routing of packets, and the physical layer sends bits over a medium. The Domain Name System (DNS) translates domain names such as example.com into IP addresses.",
        points: ["OSI layers: physical, data link, network, transport, session, presentation, application.", "Layer 3 (network) handles IP addressing and routing.", "DNS translates names to IP addresses.", "TCP provides reliable delivery; UDP is faster but unreliable."], tips: ["Memorize the order of the layers with a mnemonic.", "Link each protocol to its layer."] },
      { id: "addr", name: "Addressing and subnets", lesson: "An IPv4 address is 32 bits long, usually written as four decimal numbers (for example 192.168.1.10). In CIDR notation, 192.168.1.0/24 means the first 24 bits identify the network and the remaining bits identify hosts.",
        points: ["IPv4 addresses are 32 bits; IPv6 addresses are 128 bits.", "/24 means 24 network bits.", "Private ranges include 192.168.0.0/16.", "DHCP assigns IP addresses automatically."], tips: ["Convert prefix length to the number of host bits.", "Know the private address ranges."] },
      { id: "devices", name: "Devices and infrastructure", lesson: "A router forwards packets between different networks using IP addresses. A switch connects devices within a network and forwards frames using MAC addresses. Wireless access points connect Wi-Fi devices to a wired network.",
        points: ["A router connects networks using IP addresses.", "A switch uses MAC addresses within a LAN.", "An access point provides Wi-Fi.", "A modem connects a network to an Internet service provider."], tips: ["Match each device to its layer.", "Trace how a packet travels between two networks."] },
      { id: "trouble", name: "Troubleshooting and security", lesson: "The ping command tests whether another device can be reached across a network. DHCP automatically assigns IP addresses to devices. A systematic troubleshooting approach checks cables and physical connections first, then addressing, then higher layers.",
        points: ["Ping tests connectivity.", "DHCP automatically assigns addresses.", "Troubleshoot from the physical layer upward.", "Firewalls and encryption protect network traffic."], tips: ["Change one thing at a time when troubleshooting.", "Document what you test."] },
    ],
    placement: [
      ["models", "Which layer of the OSI model is mainly responsible for routing packets between networks using IP addresses?", ["Physical layer", "Data link layer", "Network layer", "Transport layer"], 2, "The network layer (layer 3) handles logical addressing and routing."],
      ["addr", "How many bits are in an IPv4 address?", ["16", "32", "64", "128"], 1, "An IPv4 address is 32 bits long."],
      ["devices", "What is the main job of a router?", ["Convert text to speech", "Forward packets between different networks", "Store web pages", "Provide electricity"], 1, "Routers connect networks and forward packets based on IP addresses."],
      ["trouble", "Which command is commonly used to test whether another device on a network can be reached?", ["ping", "print", "save", "scroll"], 0, "Ping sends test messages to a device and reports whether it responds."],
    ],
    practice: [
      ["models", "What does the Domain Name System (DNS) do?", ["Encrypts web traffic", "Translates domain names into IP addresses", "Assigns MAC addresses", "Blocks malware"], 1, "DNS maps human-readable names to IP addresses."],
      ["addr", "In the notation 192.168.1.0/24, the '/24' means", ["24 hosts are allowed", "The first 24 bits identify the network", "The address is IPv6", "24 devices are connected"], 1, "The prefix length shows how many leading bits are the network portion."],
      ["devices", "A network switch primarily forwards data using", ["MAC addresses", "Domain names", "Email addresses", "Passwords"], 0, "Switches operate at the data link layer and use MAC addresses to forward frames."],
      ["trouble", "What does DHCP do?", ["Stores websites", "Automatically assigns IP addresses to devices", "Encrypts passwords", "Translates names to addresses"], 1, "A DHCP server hands out IP addresses and related settings to devices when they join a network."],
    ],
  });

  /* ---------- AP Anatomy and Physiology (pilot) ---------- */
  apAdd({
    id: "ap-anatomy", name: "AP Anatomy and Physiology (pilot)", section: S, slug: "ap-career-kickstart",
    blurb: "The structure and function of the human body.",
    about: `A pilot course on the structure and function of the human body within AP Career Kickstart. ${pilotNote}`,
    units: ["Body organization and homeostasis", "Tissues and the skeletal and muscular systems", "Nervous and endocrine systems", "Cardiovascular and respiratory systems"],
    format: "Exam details for pilot courses may not be final. See the official AP Career Kickstart page for the latest information.",
    tips: ["Learn structure and function together for every system.", "Use diagrams and flashcards for anatomical terms.", "Check the official page, since pilot course details can change."],
    links: [["OpenStax: Anatomy and Physiology 2e", "https://openstax.org/details/books/anatomy-and-physiology-2e"]],
    skills: [
      { id: "homeo", name: "Body organization and homeostasis", lesson: "Homeostasis is the maintenance of stable internal conditions, such as body temperature and blood glucose. Most regulation uses negative feedback, in which a change triggers a response that reverses the change and returns the variable toward its set point.",
        points: ["Levels of organization: cell, tissue, organ, organ system, organism.", "Homeostasis maintains stable internal conditions.", "Negative feedback reverses a change (for example, sweating when body temperature rises).", "Positive feedback amplifies a change (for example, during childbirth)."], tips: ["Identify the sensor, control center, and effector.", "Distinguish negative from positive feedback."] },
      { id: "tissues", name: "Tissues, bones, and muscles", lesson: "Epithelial tissue covers body surfaces and lines cavities and organs. Muscle contraction is explained by the sliding filament model, in which thin actin filaments slide past thick myosin filaments, shortening the sarcomere.",
        points: ["Four tissue types: epithelial, connective, muscle, nervous.", "Epithelial tissue covers surfaces and lines cavities.", "Sliding filament model: actin slides past myosin.", "Bones provide support, protection, movement, and mineral storage."], tips: ["Link each tissue type to its function.", "Trace the steps of muscle contraction."] },
      { id: "nerve", name: "Nervous and endocrine systems", lesson: "The neuron is the basic functional unit of nervous tissue. Neurons send electrical signals and release neurotransmitters. The endocrine system uses hormones: the pancreas releases insulin, which lowers blood glucose.",
        points: ["The neuron is the basic unit of nervous tissue.", "The nervous system is fast; the endocrine system is slower and longer-lasting.", "Insulin from the pancreas lowers blood glucose.", "Hormones travel in the blood to target cells."], tips: ["Compare nervous and endocrine control.", "Link each gland to its hormones."] },
      { id: "cardio", name: "Cardiovascular and respiratory systems", lesson: "The left ventricle pumps oxygenated blood through the aorta to the body. Gas exchange in the lungs occurs across the thin walls of the alveoli, where oxygen enters the blood and carbon dioxide leaves it.",
        points: ["The left ventricle pumps blood to the body.", "The right ventricle pumps blood to the lungs.", "Gas exchange happens in the alveoli.", "Arteries carry blood away from the heart; veins carry it toward the heart."], tips: ["Trace blood flow through the heart in order.", "Explain why alveoli are well suited to gas exchange."] },
    ],
    placement: [
      ["homeo", "Homeostasis is best defined as", ["The growth of tissues", "The maintenance of a stable internal environment", "The breakdown of food", "The movement of muscles"], 1, "Homeostasis keeps internal conditions such as temperature and glucose within a stable range."],
      ["tissues", "Which type of tissue covers body surfaces and lines body cavities and organs?", ["Muscle tissue", "Nervous tissue", "Epithelial tissue", "Connective tissue"], 2, "Epithelial tissue forms coverings and linings."],
      ["nerve", "What is the basic functional unit of nervous tissue?", ["Nephron", "Neuron", "Alveolus", "Sarcomere"], 1, "The neuron transmits electrical and chemical signals."],
      ["cardio", "Which heart chamber pumps oxygenated blood out to the body?", ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"], 3, "The left ventricle pumps oxygen-rich blood into the aorta."],
    ],
    practice: [
      ["homeo", "A negative feedback mechanism", ["Amplifies a change in the body", "Reverses a change to return a variable to its set point", "Has no effect", "Only occurs in muscles"], 1, "Negative feedback counteracts a change, as when sweating cools the body."],
      ["tissues", "Muscle contraction is explained by the", ["Sliding filament model", "Fluid mosaic model", "Germ theory", "Cell theory"], 0, "Actin filaments slide past myosin filaments, shortening the sarcomere."],
      ["nerve", "Which organ releases insulin to lower blood glucose?", ["Liver", "Pancreas", "Kidney", "Thyroid"], 1, "Beta cells in the pancreas secrete insulin."],
      ["cardio", "In the lungs, gas exchange takes place in the", ["Bronchi", "Trachea", "Alveoli", "Diaphragm"], 2, "Oxygen and carbon dioxide are exchanged across the thin walls of the alveoli."],
    ],
  });
})();
