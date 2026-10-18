(() => {
  const S = "Sciences";
  const KA = (label, path) => [label, `https://www.khanacademy.org${path}`];
  const PHET = ["PhET Interactive Simulations", "https://phet.colorado.edu/"];
  const OPENSTAX = ["OpenStax free textbooks", "https://openstax.org/subjects"];

  /* ---------- AP Biology ---------- */
  apAdd({
    id: "ap-bio", name: "AP Biology", section: S, slug: "ap-biology",
    blurb: "Cells, energy, genetics, evolution, and ecology.",
    about: "A college-level biology course built around big ideas such as evolution, energy and matter, information storage, and interactions. You also design experiments and analyze data.",
    units: ["Chemistry of life", "Cell structure and function", "Cellular energetics", "Cell communication and the cell cycle", "Heredity", "Gene expression and regulation", "Natural selection", "Ecology"],
    tips: ["Practice reading graphs and designing experiments, not only memorizing facts.", "When you write a free response, make a claim and support it with evidence and reasoning.", "Know the difference between the independent variable, dependent variable, and control."],
    links: [KA("Khan Academy: AP Biology", "/science/ap-biology"), OPENSTAX],
    skills: [
      { id: "cells", name: "Chemistry of life and cell structure", lesson: "Life depends on water's properties and four classes of macromolecules: carbohydrates, lipids, proteins, and nucleic acids. Cell membranes are phospholipid bilayers with embedded proteins that control what moves in and out.",
        points: ["Phospholipids form the bilayer of the plasma membrane.", "Passive transport needs no energy; active transport does.", "Osmosis is the diffusion of water across a selectively permeable membrane.", "Eukaryotic cells have membrane-bound organelles; prokaryotic cells do not."], tips: ["Link structure to function for each organelle.", "Predict the direction of water movement using solute concentration."] },
      { id: "energy", name: "Cellular energetics", lesson: "Enzymes speed reactions by lowering activation energy. Cells harvest energy through cellular respiration (glycolysis, the Krebs cycle, and the electron transport chain) and plants capture it through photosynthesis (light reactions and the Calvin cycle).",
        points: ["Most ATP in respiration is made by oxidative phosphorylation.", "The Calvin cycle occurs in the chloroplast stroma.", "Light reactions occur in the thylakoid membranes.", "Enzymes are not used up in reactions."], tips: ["Track where each reaction happens and what goes in and out.", "Explain how temperature and pH change enzyme activity."] },
      { id: "genetics", name: "Heredity and gene expression", lesson: "Mendelian genetics predicts offspring from parent genotypes using Punnett squares. DNA is transcribed into mRNA and translated into protein on ribosomes, with tRNA bringing the amino acids.",
        points: ["An Aa × Aa cross gives about 1/4 aa offspring.", "Transcription makes RNA from DNA; translation makes protein from mRNA.", "tRNA carries amino acids to the ribosome.", "Mutations change DNA and may change proteins."], tips: ["Write genotypes before computing ratios.", "Use chi-square to compare observed and expected results."] },
      { id: "evoeco", name: "Evolution and ecology", lesson: "Natural selection requires heritable variation: individuals with advantageous traits leave more offspring. In ecology, populations grow until limited by resources, with a carrying capacity set by the environment.",
        points: ["Evolution is change in allele frequencies in a population over time.", "Natural selection needs heritable variation.", "Carrying capacity is the maximum population an environment can sustain.", "Energy flows through ecosystems; matter cycles."], tips: ["Use evidence such as fossils, DNA, and anatomy to support evolution.", "Distinguish density-dependent from density-independent factors."] },
    ],
    placement: [
      ["cells", "Which molecule forms the basic structure of the plasma membrane?", ["Proteins", "Nucleic acids", "Carbohydrates", "Phospholipids"], 3, "The plasma membrane is built on a bilayer of phospholipids, which have hydrophilic heads and hydrophobic tails."],
      ["energy", "In which part of the chloroplast does the Calvin cycle take place?", ["Thylakoid membrane", "Stroma", "Outer membrane", "Cytosol"], 1, "The Calvin cycle occurs in the stroma, the fluid around the thylakoids."],
      ["genetics", "In a cross between two heterozygous (Aa) parents, what fraction of offspring is expected to show the recessive phenotype?", ["0", "1/4", "1/2", "3/4"], 1, "Aa × Aa gives 1 AA : 2 Aa : 1 aa, so 1/4 are aa."],
      ["evoeco", "Which of the following is required for natural selection to change a population over generations?", ["Traits acquired during an individual's life are passed on", "All individuals are identical", "Heritable variation among individuals", "A very small population"], 2, "Natural selection acts on traits that vary and are heritable. Acquired traits are not inherited."],
    ],
    practice: [
      ["cells", "What is the diffusion of water across a selectively permeable membrane called?", ["Active transport", "Osmosis", "Exocytosis", "Phagocytosis"], 1, "Osmosis is the movement of water across a selectively permeable membrane."],
      ["energy", "Which stage of cellular respiration produces the most ATP?", ["Glycolysis", "The Krebs cycle", "Oxidative phosphorylation", "Fermentation"], 2, "The electron transport chain and chemiosmosis (oxidative phosphorylation) make most of the ATP."],
      ["genetics", "Which molecule delivers amino acids to the ribosome during translation?", ["mRNA", "tRNA", "DNA polymerase", "Ribose"], 1, "Transfer RNA (tRNA) carries specific amino acids and matches its anticodon to the mRNA codon."],
      ["evoeco", "What does the carrying capacity of an environment represent?", ["The maximum population size the environment can sustain", "The fastest possible growth rate", "The number of species present", "The minimum population needed to survive"], 0, "Carrying capacity (K) is the largest population an environment can support given its resources."],
    ],
  });

  /* ---------- AP Chemistry ---------- */
  apAdd({
    id: "ap-chem", name: "AP Chemistry", section: S, slug: "ap-chemistry",
    blurb: "Atomic structure, bonding, reactions, thermodynamics, equilibrium, acids, and electrochemistry.",
    about: "A college-level general chemistry course. You study the structure of matter, chemical reactions and energy, rates and equilibrium, and acids, bases, and electrochemistry, along with lab and quantitative skills.",
    units: ["Atomic structure and properties", "Molecular and ionic bonding", "Intermolecular forces and properties", "Chemical reactions", "Kinetics", "Thermodynamics", "Equilibrium", "Acids and bases", "Applications of thermodynamics (including electrochemistry)"],
    tips: ["Show units and significant figures in every calculation.", "Practice writing explanations in terms of particles and forces.", "Use the provided data sheet to see which equations and constants you need."],
    links: [KA("Khan Academy: AP Chemistry", "/science/ap-chemistry"), OPENSTAX],
    skills: [
      { id: "atoms", name: "Atomic structure and bonding", lesson: "Periodic trends follow from electron structure: atomic radius decreases across a period and increases down a group. Bonding and VSEPR theory predict molecular shapes from electron-pair repulsion.",
        points: ["Radius increases down a group and decreases across a period.", "Electronegativity increases across a period and up a group.", "CH₄ is tetrahedral; H₂O is bent; CO₂ is linear.", "Ionic bonds transfer electrons; covalent bonds share them."], tips: ["Explain trends using effective nuclear charge and shielding.", "Count bonding and lone pairs to find the shape."] },
      { id: "stoich", name: "Moles, stoichiometry, and gases", lesson: "The mole links mass to number of particles: moles = mass ÷ molar mass. Balanced equations give mole ratios. Gas laws relate pressure, volume, and temperature, and Boyle's law says P·V is constant at constant temperature.",
        points: ["moles = mass (g) ÷ molar mass (g/mol).", "Use mole ratios from the balanced equation.", "Boyle's law: P₁V₁ = P₂V₂ at constant T and n.", "Ideal gas law: PV = nRT."], tips: ["Convert everything to moles before comparing amounts.", "Identify the limiting reactant."] },
      { id: "kinetics", name: "Kinetics, thermodynamics, and equilibrium", lesson: "Reaction rate increases when more collisions have enough energy to overcome the activation energy, for example at higher temperature. At equilibrium the forward and reverse rates are equal, and Le Châtelier's principle predicts how a system shifts when disturbed.",
        points: ["Higher temperature gives more molecules with energy ≥ Ea.", "A catalyst lowers Ea without being consumed.", "Adding reactant shifts equilibrium toward products.", "Only temperature changes the value of K."], tips: ["Describe a shift in terms of Q compared with K.", "State clearly which direction each disturbance favors."] },
      { id: "acids", name: "Acids, bases, and electrochemistry", lesson: "pH = −log[H⁺]. Strong acids dissociate completely, so a 0.01 M strong monoprotic acid has pH 2. In electrochemical cells, oxidation (loss of electrons) occurs at the anode and reduction at the cathode.",
        points: ["pH = −log[H⁺]; pH + pOH = 14.", "Strong acids dissociate completely.", "Oxidation at the anode; reduction at the cathode.", "Electrons flow from anode to cathode through the wire."], tips: ["Remember 'OIL RIG' and 'An Ox, Red Cat'.", "Use buffers: a weak acid and its conjugate base resist pH change."] },
    ],
    placement: [
      ["atoms", "Which of the following has the largest atomic radius?", ["F", "Cl", "Br", "I"], 3, "These are halogens in one group. Atomic radius increases down a group, so iodine is largest."],
      ["stoich", "How many moles are in 36 g of water (molar mass 18 g/mol)?", ["0.5 mol", "2 mol", "18 mol", "36 mol"], 1, "36 g ÷ 18 g/mol = 2 mol."],
      ["kinetics", "Why does increasing temperature usually increase the rate of a reaction?", ["It lowers the activation energy", "A larger fraction of collisions have energy at least equal to the activation energy", "It decreases the number of collisions", "It changes the reactants"], 1, "Higher temperature increases molecular kinetic energies, so a larger fraction of collisions exceed the activation energy. It does not change Ea."],
      ["acids", "What is the pH of a 0.01 M solution of HCl, a strong acid?", ["1", "2", "7", "12"], 1, "[H⁺] = 0.01 = 10⁻² M, so pH = 2."],
    ],
    practice: [
      ["atoms", "What is the molecular shape of CH₄ according to VSEPR theory?", ["Linear", "Trigonal planar", "Tetrahedral", "Bent"], 2, "Methane has four bonding pairs and no lone pairs on carbon, giving a tetrahedral shape."],
      ["stoich", "A gas at 1 atm occupies 4 L. At constant temperature it is compressed to 2 L. What is the new pressure?", ["0.5 atm", "1 atm", "2 atm", "4 atm"], 2, "Boyle's law: P₁V₁ = P₂V₂, so (1)(4) = P₂(2) and P₂ = 2 atm."],
      ["kinetics", "For the exothermic reaction N₂ + 3H₂ ⇌ 2NH₃, adding more N₂ at equilibrium will", ["Shift the equilibrium toward products", "Shift the equilibrium toward reactants", "Change the value of K", "Have no effect"], 0, "Adding a reactant raises Q below K, so the reaction shifts toward products. K does not change at constant temperature."],
      ["acids", "In a galvanic cell, oxidation occurs at the", ["Cathode", "Anode", "Salt bridge", "Voltmeter"], 1, "Oxidation always occurs at the anode, and reduction at the cathode."],
    ],
  });

  /* ---------- AP Environmental Science ---------- */
  apAdd({
    id: "ap-envsci", name: "AP Environmental Science", section: S, slug: "ap-environmental-science",
    blurb: "Ecosystems, populations, resources, pollution, and global change.",
    about: "An interdisciplinary course on the natural world and how humans affect it. You study ecosystems, populations, earth systems, land and water use, energy, pollution, and global change, and you analyze data and proposed solutions.",
    units: ["The living world: ecosystems", "The living world: biodiversity", "Populations", "Earth systems and resources", "Land and water use", "Energy resources and consumption", "Atmospheric pollution", "Aquatic and terrestrial pollution", "Global change"],
    tips: ["Practice evaluating a proposed solution's benefits, costs, and trade-offs.", "Be ready to do quick calculations such as percent change and the rule of 70.", "Connect each human activity to its environmental consequence."],
    links: [KA("Khan Academy: AP Environmental Science", "/science/ap-environmental-science")],
    skills: [
      { id: "eco", name: "Ecosystems and biodiversity", lesson: "Energy flows through trophic levels, with only about 10% passing to the next level, while matter such as carbon and nitrogen cycles. Biodiversity makes ecosystems more resilient, and keystone species have a large effect relative to their numbers.",
        points: ["About 10% of energy transfers between trophic levels.", "Producers capture energy; consumers and decomposers use it.", "A keystone species has an outsized effect on its ecosystem.", "Habitat loss is a leading cause of biodiversity loss."], tips: ["Use the 10% rule to calculate energy at each level.", "Trace one nutrient through its cycle."] },
      { id: "pop", name: "Populations and resources", lesson: "Age-structure diagrams show growth trends: a wide base means a young, quickly growing population. The rule of 70 estimates doubling time as 70 divided by the percent growth rate.",
        points: ["Doubling time ≈ 70 ÷ growth rate (%).", "A wide-based pyramid signals rapid growth.", "Total fertility rate and death rate affect growth.", "Sustainable use of resources avoids depleting them."], tips: ["Do the rule of 70 in one line.", "Compare birth and death rates to predict change."] },
      { id: "energy", name: "Energy and pollution", lesson: "Fossil fuels are nonrenewable and release CO₂ and other pollutants, while solar and wind are renewable. Burning coal releases sulfur dioxide, which forms acid rain, and nitrogen oxides contribute to smog.",
        points: ["Renewable: solar, wind, hydro, geothermal.", "Burning fossil fuels releases CO₂, SO₂, and NOx.", "SO₂ and NOx cause acid deposition.", "Point sources are single locations; nonpoint sources are diffuse."], tips: ["Link each energy source to its main benefits and drawbacks.", "Name the pollutant and the effect it causes."] },
      { id: "change", name: "Global change", lesson: "Greenhouse gases such as CO₂ and CH₄ trap heat, causing global warming. CO₂ also dissolves in the ocean and lowers its pH (ocean acidification). Chlorofluorocarbons (CFCs) destroy stratospheric ozone.",
        points: ["CO₂ dissolves in seawater, forming carbonic acid.", "CFCs break down ozone in the stratosphere.", "Rising sea levels result from melting ice and thermal expansion.", "Mitigation reduces emissions; adaptation prepares for change."], tips: ["Distinguish ozone depletion from the greenhouse effect.", "Name both causes and effects."] },
    ],
    placement: [
      ["eco", "Approximately what percentage of energy is transferred from one trophic level to the next?", ["1%", "10%", "50%", "90%"], 1, "Only about 10% of the energy at one level is available to the next. The rest is lost mainly as heat."],
      ["pop", "Using the rule of 70, about how long will it take a population growing at 2% per year to double?", ["14 years", "35 years", "70 years", "140 years"], 1, "70 ÷ 2 = 35 years."],
      ["energy", "Which of the following is a renewable energy source?", ["Coal", "Natural gas", "Solar", "Uranium"], 2, "Solar energy comes from the sun and is replenished continuously. The others are finite."],
      ["change", "Which gas is mainly responsible for human-caused ocean acidification?", ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"], 2, "CO₂ dissolves in seawater to form carbonic acid, which lowers the ocean's pH."],
    ],
    practice: [
      ["eco", "A keystone species is best described as one that", ["Is the most numerous in the ecosystem", "Has a disproportionately large effect on its ecosystem compared with its abundance", "Is the largest animal", "Lives only in one habitat"], 1, "Removing a keystone species causes large changes in the community even if it is not abundant."],
      ["pop", "An age-structure diagram with a very wide base most likely represents a population that is", ["Declining quickly", "Stable", "Growing rapidly", "Made only of older adults"], 2, "A wide base means many young people who will have children, so the population is growing."],
      ["energy", "Burning coal releases which pollutant that contributes to acid rain?", ["Sulfur dioxide", "Ozone", "Chlorofluorocarbons", "Methane"], 0, "SO₂ reacts with water in the atmosphere to form sulfuric acid, a main cause of acid rain."],
      ["change", "Depletion of stratospheric ozone has been mainly caused by", ["Carbon dioxide", "Chlorofluorocarbons (CFCs)", "Methane", "Particulate matter"], 1, "CFCs release chlorine in the stratosphere, which destroys ozone."],
    ],
  });

  /* ---------- AP Physics 1 ---------- */
  apAdd({
    id: "ap-phys1", name: "AP Physics 1: Algebra-Based", section: S, slug: "ap-physics-1-algebra-based",
    blurb: "Mechanics: motion, forces, energy, momentum, rotation, and oscillations.",
    about: "An algebra-based introduction to mechanics. You build models of motion, forces, energy, momentum, rotation, and oscillation, and you connect them to experiments and data.",
    units: ["Kinematics", "Force and translational dynamics", "Work, energy, and power", "Linear momentum", "Torque and rotational dynamics", "Oscillations (simple harmonic motion)", "Check the official page for any additional topics in the current framework"],
    tips: ["Draw a free-body diagram for every force problem.", "Write the equation symbolically before you plug in numbers.", "Include units and explain your reasoning in words for free-response questions."],
    links: [KA("Khan Academy: AP Physics 1", "/science/ap-physics-1"), PHET],
    skills: [
      { id: "kin", name: "Kinematics", lesson: "Kinematics describes motion without asking what caused it. For constant acceleration, v = v₀ + at and Δx = v₀t + ½at². Position-time and velocity-time graphs show how velocity and acceleration change.",
        points: ["v = v₀ + at.", "Δx = v₀t + ½at².", "Slope of position-time is velocity; slope of velocity-time is acceleration.", "Area under a velocity-time graph is displacement."], tips: ["List knowns and unknowns before choosing an equation.", "Watch the signs of vectors."] },
      { id: "newton", name: "Newton's laws", lesson: "The net force on an object equals its mass times its acceleration (ΣF = ma). An object at rest or moving at constant velocity has zero net force. Forces come in equal and opposite pairs acting on different objects.",
        points: ["ΣF = ma.", "Zero net force means constant velocity (possibly zero).", "Weight = mg.", "Action-reaction forces act on different objects."], tips: ["Choose axes that match the acceleration.", "Never include the 'reaction' force in the same free-body diagram as its pair."] },
      { id: "energy", name: "Energy and momentum", lesson: "Kinetic energy is ½mv². Momentum p = mv is conserved in a closed system, including in collisions. In a perfectly inelastic collision the objects stick together and move with a common velocity.",
        points: ["KE = ½mv².", "Momentum is conserved when no net external force acts.", "Inelastic collisions conserve momentum but not kinetic energy.", "Work = Fd cos θ."], tips: ["Define the system before applying conservation laws.", "Use momentum for collisions and energy for motion over a distance."] },
      { id: "rot", name: "Torque and oscillations", lesson: "Torque is τ = r·F·sin θ and causes rotation. For a mass on a spring, the period is T = 2π√(m/k), so a larger mass or a weaker spring gives a longer period.",
        points: ["τ = rF sin θ.", "A mass on a spring: T = 2π√(m/k).", "A pendulum: T = 2π√(L/g).", "Period does not depend on amplitude for small oscillations."], tips: ["Use the perpendicular distance for torque.", "Relate period to frequency: T = 1/f."] },
    ],
    placement: [
      ["kin", "A car starts from rest and accelerates uniformly at 3 m/s² for 4 s. What is its final speed?", ["7 m/s", "12 m/s", "24 m/s", "48 m/s"], 1, "v = v₀ + at = 0 + (3)(4) = 12 m/s."],
      ["newton", "A 5 kg object experiences a net force of 20 N. What is its acceleration?", ["0.25 m/s²", "4 m/s²", "15 m/s²", "100 m/s²"], 1, "a = F/m = 20/5 = 4 m/s²."],
      ["energy", "What is the kinetic energy of a 2 kg object moving at 3 m/s?", ["6 J", "9 J", "18 J", "3 J"], 1, "KE = ½mv² = ½(2)(3²) = 9 J."],
      ["rot", "A 5 N force acts perpendicular to a wrench 2 m from the pivot. What is the torque?", ["2.5 N·m", "7 N·m", "10 N·m", "20 N·m"], 2, "τ = rF = (2)(5) = 10 N·m."],
    ],
    practice: [
      ["kin", "The car in the previous problem accelerates at 3 m/s² from rest for 4 s. How far does it travel?", ["12 m", "36 m", "24 m", "48 m"], 2, "Δx = ½at² = ½(3)(4²) = 24 m."],
      ["newton", "An object moves at a constant velocity of 5 m/s. What can be said about the net force on it?", ["It is in the direction of motion", "It is zero", "It is opposite to the motion", "It equals the weight"], 1, "Constant velocity means zero acceleration, so the net force is zero."],
      ["energy", "A 1 kg cart moving at 4 m/s collides with a 1 kg cart at rest and they stick together. What is their speed after the collision?", ["4 m/s", "1 m/s", "2 m/s", "8 m/s"], 2, "Momentum is conserved: (1)(4) = (2)v, so v = 2 m/s."],
      ["rot", "A mass on a spring has period T. If the mass is quadrupled, the new period is", ["T/2", "2T", "4T", "T"], 1, "T = 2π√(m/k), so multiplying m by 4 multiplies T by √4 = 2."],
    ],
  });

  /* ---------- AP Physics 2 ---------- */
  apAdd({
    id: "ap-phys2", name: "AP Physics 2: Algebra-Based", section: S, slug: "ap-physics-2-algebra-based",
    blurb: "Fluids, thermodynamics, electricity, magnetism, optics, and modern physics.",
    about: "A second algebra-based physics course. You study fluids, thermodynamics, electric forces and circuits, magnetism and induction, optics, and modern physics.",
    units: ["Fluids", "Thermodynamics", "Electric force, field, and potential", "Electric circuits", "Magnetism and electromagnetic induction", "Geometric and physical optics", "Quantum, atomic, and nuclear physics"],
    tips: ["Know what each variable means in the formula sheet before test day.", "Draw field lines and ray diagrams to organize your thinking.", "Check units and orders of magnitude."],
    links: [KA("Khan Academy: AP Physics 2", "/science/ap-physics-2"), PHET],
    skills: [
      { id: "fluids", name: "Fluids and thermodynamics", lesson: "Pressure in a fluid at depth h is P = ρgh (plus any pressure above). The first law of thermodynamics states ΔU = Q − W, where Q is heat added to the system and W is work done by the system.",
        points: ["P = P₀ + ρgh.", "ΔU = Q − W (W is work done by the gas).", "Buoyant force = weight of the displaced fluid.", "Continuity: A₁v₁ = A₂v₂."], tips: ["Use consistent sign conventions for heat and work.", "State clearly which pressure you are computing (gauge or absolute)."] },
      { id: "circuits", name: "Electrostatics and circuits", lesson: "Coulomb's force is F = kq₁q₂/r², so doubling the distance cuts the force to one-fourth. For resistors in parallel, 1/R = 1/R₁ + 1/R₂, and the equivalent resistance is smaller than either one.",
        points: ["F = kq₁q₂/r²: inverse-square law.", "Series: R = R₁ + R₂.", "Parallel: 1/R = 1/R₁ + 1/R₂.", "Ohm's law: V = IR."], tips: ["Simplify a circuit step by step.", "In parallel, voltage is the same across each branch."] },
      { id: "magnet", name: "Magnetism and induction", lesson: "Moving charges feel a magnetic force F = qvB sin θ. Faraday's law says an emf is induced when the magnetic flux through a loop changes, and Lenz's law says the induced current opposes that change.",
        points: ["F = qvB sin θ; zero if v is parallel to B.", "Induced emf depends on the rate of change of magnetic flux.", "Lenz's law: the induced current opposes the change in flux.", "Use the right-hand rule for direction."], tips: ["Check the angle between v and B.", "Ask 'what is changing?' to find where flux changes."] },
      { id: "optics", name: "Optics and modern physics", lesson: "The speed of light in a material is v = c/n, and light bends when it enters a medium with a different index of refraction. In the photoelectric effect, light behaves as photons; the number of electrons ejected depends on intensity, while their maximum energy depends on frequency.",
        points: ["n = c/v.", "Snell's law: n₁ sin θ₁ = n₂ sin θ₂.", "Photon energy E = hf.", "Photoelectric effect has a threshold frequency."], tips: ["Remember that frequency stays the same when light changes medium.", "Separate intensity effects from frequency effects."] },
    ],
    placement: [
      ["fluids", "What is the pressure due to the water alone at a depth of 10 m? (Use ρ = 1000 kg/m³ and g = 10 m/s².)", ["1 × 10³ Pa", "1 × 10⁴ Pa", "1 × 10⁵ Pa", "1 × 10⁶ Pa"], 2, "P = ρgh = (1000)(10)(10) = 1 × 10⁵ Pa."],
      ["circuits", "Two 6 Ω resistors are connected in parallel. What is the equivalent resistance?", ["3 Ω", "6 Ω", "12 Ω", "36 Ω"], 0, "1/R = 1/6 + 1/6 = 2/6, so R = 3 Ω."],
      ["magnet", "A charged particle moves parallel to a uniform magnetic field. The magnetic force on it is", ["Maximum", "Zero", "Equal to qE", "Perpendicular to the field and increasing"], 1, "F = qvB sin θ, and θ = 0° when the velocity is parallel to B, so the force is zero."],
      ["optics", "Light travels from air into glass with index of refraction 1.5. What is the speed of light in the glass? (c = 3 × 10⁸ m/s)", ["3 × 10⁸ m/s", "2 × 10⁸ m/s", "4.5 × 10⁸ m/s", "1.5 × 10⁸ m/s"], 1, "v = c/n = (3 × 10⁸)/1.5 = 2 × 10⁸ m/s."],
    ],
    practice: [
      ["fluids", "A gas absorbs 500 J of heat and does 200 J of work on its surroundings. What is the change in its internal energy?", ["700 J", "300 J", "−300 J", "200 J"], 1, "ΔU = Q − W = 500 − 200 = 300 J."],
      ["circuits", "The distance between two point charges is doubled. The electric force between them becomes", ["Twice as large", "Half as large", "One-fourth as large", "Four times as large"], 2, "F ∝ 1/r², so doubling r reduces the force to 1/4 of its original value."],
      ["magnet", "According to Faraday's law, the emf induced in a loop depends on", ["The resistance of the loop only", "The rate of change of magnetic flux through the loop", "The mass of the loop", "The color of the wire"], 1, "Induced emf equals the negative rate of change of magnetic flux through the loop."],
      ["optics", "In the photoelectric effect, increasing the intensity of light (without changing its frequency, which is above the threshold) increases", ["The maximum kinetic energy of emitted electrons", "The number of electrons emitted per second", "The threshold frequency", "The work function of the metal"], 1, "More intensity means more photons per second and so more electrons emitted. Maximum kinetic energy depends on frequency."],
    ],
  });

  /* ---------- AP Physics C: Mechanics ---------- */
  apAdd({
    id: "ap-physcm", name: "AP Physics C: Mechanics", section: S, slug: "ap-physics-c-mechanics",
    blurb: "Calculus-based mechanics: kinematics, Newton's laws, energy, momentum, rotation, and oscillations.",
    about: "A calculus-based course in classical mechanics. You use derivatives and integrals to analyze motion, forces, work and energy, momentum, rotation, oscillations, and gravitation.",
    units: ["Kinematics", "Force and translational dynamics", "Work, energy, and power", "Linear momentum", "Torque and rotational dynamics", "Energy and momentum of rotating systems", "Oscillations", "Gravitation"],
    tips: ["Derive the general result symbolically, then substitute numbers.", "Use calculus tools: velocity is dx/dt and acceleration is dv/dt.", "Check limiting cases and units to test your answer."],
    links: [PHET, ["HyperPhysics concept maps", "http://hyperphysics.phy-astr.gsu.edu/hbase/index.html"]],
    skills: [
      { id: "kin", name: "Kinematics with calculus", lesson: "Velocity is the derivative of position and acceleration is the derivative of velocity. Going the other way, velocity is the integral of acceleration plus the initial velocity.",
        points: ["v = dx/dt; a = dv/dt.", "v(t) = v(0) + ∫ a dt.", "x(t) = x(0) + ∫ v dt.", "Power rule: d/dt of tⁿ is n·tⁿ⁻¹."], tips: ["Use initial conditions to find constants of integration.", "Keep track of units at each step."] },
      { id: "forces", name: "Forces and circular motion", lesson: "On a frictionless incline of angle θ, the acceleration down the slope is g sin θ. For circular motion, the centripetal acceleration is v²/r, so doubling the speed at the same radius quadruples it.",
        points: ["Frictionless incline: a = g sin θ.", "Centripetal acceleration a = v²/r = ω²r.", "Friction: f ≤ μN.", "Net force toward the center produces circular motion."], tips: ["Resolve forces parallel and perpendicular to the surface.", "Don't call centripetal force a separate force in a diagram."] },
      { id: "energy", name: "Work, energy, and power", lesson: "The work done by a variable force is the integral of F dx. Power is the rate of doing work, P = dW/dt, which equals F·v for a force along the velocity.",
        points: ["W = ∫ F dx.", "Work-energy theorem: W_net = ΔKE.", "P = F·v.", "Spring potential energy U = ½kx²."], tips: ["Integrate with the correct limits.", "Check whether a force is conservative."] },
      { id: "momrot", name: "Momentum and rotation", lesson: "Impulse equals the change in momentum, J = ∫ F dt = Δp. For rotation, the moment of inertia of a point mass is I = mr², and torque equals I times angular acceleration.",
        points: ["J = ∫ F dt = Δp.", "I = Σ mr² for point masses.", "τ = Iα.", "Angular momentum L = Iω is conserved with no net torque."], tips: ["Pick the axis of rotation first.", "Use conservation of momentum for collisions."] },
    ],
    placement: [
      ["kin", "A particle's position is x(t) = t³ − 3t (in meters, with t in seconds). What is its velocity at t = 2 s?", ["2 m/s", "6 m/s", "9 m/s", "12 m/s"], 2, "v = dx/dt = 3t² − 3. At t = 2: 3(4) − 3 = 9 m/s."],
      ["forces", "A block of mass m slides down a frictionless incline of angle θ. What is its acceleration?", ["g cos θ", "g sin θ", "g tan θ", "g"], 1, "The component of gravity along the incline is mg sin θ, so a = g sin θ."],
      ["energy", "A force F = 2x (in newtons, with x in meters) acts along the x-axis. How much work does it do moving an object from x = 0 to x = 3 m?", ["6 J", "9 J", "18 J", "3 J"], 1, "W = ∫ from 0 to 3 of 2x dx = x² evaluated from 0 to 3 = 9 J."],
      ["momrot", "What is the moment of inertia of a point mass m located a distance r from the axis of rotation?", ["mr", "mr²", "m/r²", "½mr²"], 1, "For a point mass, I = mr²."],
    ],
    practice: [
      ["kin", "A particle has acceleration a(t) = 6t and an initial velocity of 2 m/s. What is v(t)?", ["3t²", "3t² + 2", "6t² + 2", "6"], 1, "Integrate: v(t) = 3t² + C. With v(0) = 2, C = 2, so v(t) = 3t² + 2."],
      ["forces", "An object moves in a circle of radius r at speed v. If its speed doubles at the same radius, its centripetal acceleration", ["Doubles", "Quadruples", "Halves", "Stays the same"], 1, "a = v²/r, so doubling v multiplies a by 4."],
      ["energy", "A constant force of 10 N acts along the direction of motion of an object moving at 5 m/s. What is the power delivered?", ["2 W", "15 W", "50 W", "500 W"], 2, "P = Fv = (10)(5) = 50 W."],
      ["momrot", "The impulse delivered to an object equals its", ["Change in kinetic energy", "Change in momentum", "Change in position", "Change in mass"], 1, "Impulse J = ∫ F dt equals the change in momentum Δp."],
    ],
  });

  /* ---------- AP Physics C: Electricity and Magnetism ---------- */
  apAdd({
    id: "ap-physcem", name: "AP Physics C: Electricity and Magnetism", section: S, slug: "ap-physics-c-electricity-and-magnetism",
    blurb: "Calculus-based electrostatics, circuits, magnetism, and induction.",
    about: "A calculus-based course on electricity and magnetism. You use Gauss's law and integration to find electric fields and potentials, analyze circuits with capacitors and resistors, and study magnetic fields and electromagnetic induction.",
    units: ["Electrostatics", "Conductors, capacitors, and dielectrics", "Electric circuits", "Magnetic fields", "Electromagnetism (induction and Maxwell's equations)"],
    tips: ["Use symmetry to choose the right Gaussian surface.", "Know the standard results for capacitors, RC circuits, and long wires and solenoids.", "Check what happens at t = 0 and as t → ∞ in circuit problems."],
    links: [PHET, ["HyperPhysics concept maps", "http://hyperphysics.phy-astr.gsu.edu/hbase/index.html"]],
    skills: [
      { id: "estat", name: "Electrostatics and Gauss's law", lesson: "Gauss's law states that the electric flux through a closed surface equals the enclosed charge divided by ε₀. Inside a conductor in electrostatic equilibrium, the electric field is zero and any excess charge sits on the surface.",
        points: ["Φ = ∮ E·dA = Q_enc/ε₀.", "E = 0 inside a conductor in equilibrium.", "E = kq/r² for a point charge.", "Choose symmetric Gaussian surfaces (sphere, cylinder, pillbox)."], tips: ["Use only the charge enclosed by your surface.", "Check the symmetry before applying Gauss's law."] },
      { id: "caps", name: "Capacitors and dielectrics", lesson: "Capacitance is C = Q/V. Capacitors in parallel add (C = C₁ + C₂), while in series 1/C = 1/C₁ + 1/C₂. The energy stored in a capacitor is U = ½CV².",
        points: ["C = Q/V.", "Parallel: C = C₁ + C₂.", "Series: 1/C = 1/C₁ + 1/C₂.", "U = ½CV²."], tips: ["Remember series and parallel are reversed compared to resistors.", "Track which quantity stays fixed when a dielectric is inserted."] },
      { id: "rc", name: "Circuits and RC behavior", lesson: "In an RC circuit the time constant is τ = RC. An uncharged capacitor behaves like a wire at t = 0, so the initial current is ε/R, and it charges toward the battery's emf as time goes on.",
        points: ["τ = RC.", "At t = 0 an uncharged capacitor acts like a short.", "As t → ∞ a charged capacitor acts like an open circuit.", "Charging: q(t) = Cε(1 − e^(−t/RC))."], tips: ["State the behavior at t = 0 and at long times.", "Apply Kirchhoff's loop rule."] },
      { id: "mag", name: "Magnetism and induction", lesson: "A long straight wire carrying current I produces a magnetic field B = μ₀I/(2πr) at a distance r. Lenz's law says the induced emf drives a current that opposes the change in flux.",
        points: ["B = μ₀I/(2πr) for a long straight wire.", "Faraday: emf = −dΦ_B/dt.", "Lenz: the induced current opposes the change in flux.", "Ampère's law: ∮ B·dl = μ₀I_enc."], tips: ["Use the right-hand rule for field direction.", "Identify what is changing to find the flux change."] },
    ],
    placement: [
      ["estat", "What is the electric field inside a conductor in electrostatic equilibrium?", ["Equal to kq/r²", "Zero", "Uniform and nonzero", "Infinite"], 1, "Free charges move until the field inside is zero, so E = 0 inside the conductor."],
      ["caps", "A capacitor stores 6 μC of charge when connected across 3 V. What is its capacitance?", ["0.5 μF", "2 μF", "9 μF", "18 μF"], 1, "C = Q/V = 6 μC / 3 V = 2 μF."],
      ["rc", "What is the time constant of a series circuit with resistance R and capacitance C?", ["R/C", "C/R", "RC", "1/(RC)"], 2, "The RC time constant is τ = RC."],
      ["mag", "What is the magnitude of the magnetic field at a distance r from a long straight wire carrying current I?", ["μ₀I/(2πr)", "μ₀I/(4πr²)", "μ₀I r", "μ₀I/(2π r²)"], 0, "From Ampère's law the field is B = μ₀I/(2πr)."],
    ],
    practice: [
      ["estat", "According to Gauss's law, the electric flux through a closed surface is equal to", ["The total charge outside divided by ε₀", "The net enclosed charge divided by ε₀", "The electric field times the volume", "Zero always"], 1, "Gauss's law: Φ = Q_enc/ε₀."],
      ["caps", "A 2 μF and a 3 μF capacitor are connected in parallel. What is the equivalent capacitance?", ["1.2 μF", "2.5 μF", "5 μF", "6 μF"], 2, "In parallel, capacitances add: 2 + 3 = 5 μF."],
      ["rc", "A battery with emf ε is connected to a resistor R in series with an initially uncharged capacitor. Just after the switch closes, the current is", ["Zero", "ε/R", "ε·R", "Infinite"], 1, "The uncharged capacitor has no voltage across it initially, so the full emf is across R and I = ε/R."],
      ["mag", "According to Lenz's law, the direction of the induced current in a loop is such that it", ["Aids the change in magnetic flux", "Opposes the change in magnetic flux", "Is always clockwise", "Produces no magnetic field"], 1, "Lenz's law: the induced current creates a field that opposes the change in flux that caused it."],
    ],
  });
})();
