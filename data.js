// data.js - Authoritative 192-Credit Multi-Department Architecture for ICRGS
// Aligned with Saveetha Institute of Medical and Technical Sciences (SIMATS) / AICTE Regulations.
// 8 Disciplines: ECE, CSE, AIML, AIDS, IT, EEE, MECH, CIVIL.
// 192 Total Credits (48 Courses x 4 Credits = 24 Credits per Semester x 8 Semesters).
// All DAG prerequisite graphs are strictly acyclic (0 cycles) and chronologically ordered.

window.DEPARTMENTS = {
  ECE: {
    name: "Electronics & Communication Engg",
    shortName: "ECE",
    icon: "📡",
    supported: true,
    courseCount: 48,
    catalogueCredits: 192,
    statusNote: "Curated Curricular Framework (48 courses, 192 credits)",
    degreeTarget: 192,
    totalCredits: 192,
    isSample: false,
    sampleType: "University Regulation Framework",
    disclaimer: "Standard 4-year engineering curriculum covering 192 credits across 48 courses (24 credits/semester)."
  },
  CSE: {
    name: "Computer Science & Engineering",
    shortName: "CSE",
    icon: "💻",
    supported: true,
    courseCount: 48,
    catalogueCredits: 192,
    statusNote: "Curated Curricular Framework (48 courses, 192 credits)",
    degreeTarget: 192,
    totalCredits: 192,
    isSample: false,
    sampleType: "University Regulation Framework",
    disclaimer: "Standard 4-year engineering curriculum covering 192 credits across 48 courses (24 credits/semester)."
  },
  AIML: {
    name: "AI & Machine Learning",
    shortName: "AIML",
    icon: "🤖",
    supported: true,
    courseCount: 48,
    catalogueCredits: 192,
    statusNote: "Curated Curricular Framework (48 courses, 192 credits)",
    degreeTarget: 192,
    totalCredits: 192,
    isSample: false,
    sampleType: "University Regulation Framework",
    disclaimer: "Standard 4-year engineering curriculum covering 192 credits across 48 courses (24 credits/semester)."
  },
  AIDS: {
    name: "AI & Data Science",
    shortName: "AIDS",
    icon: "📊",
    supported: true,
    courseCount: 48,
    catalogueCredits: 192,
    statusNote: "Curated Curricular Framework (48 courses, 192 credits)",
    degreeTarget: 192,
    totalCredits: 192,
    isSample: false,
    sampleType: "University Regulation Framework",
    disclaimer: "Standard 4-year engineering curriculum covering 192 credits across 48 courses (24 credits/semester)."
  },
  IT: {
    name: "Information Technology",
    shortName: "IT",
    icon: "🌐",
    supported: true,
    courseCount: 48,
    catalogueCredits: 192,
    statusNote: "Curated Curricular Framework (48 courses, 192 credits)",
    degreeTarget: 192,
    totalCredits: 192,
    isSample: false,
    sampleType: "University Regulation Framework",
    disclaimer: "Standard 4-year engineering curriculum covering 192 credits across 48 courses (24 credits/semester)."
  },
  EEE: {
    name: "Electrical & Electronics Engg",
    shortName: "EEE",
    icon: "⚡",
    supported: true,
    courseCount: 48,
    catalogueCredits: 192,
    statusNote: "Curated Curricular Framework (48 courses, 192 credits)",
    degreeTarget: 192,
    totalCredits: 192,
    isSample: false,
    sampleType: "University Regulation Framework",
    disclaimer: "Standard 4-year engineering curriculum covering 192 credits across 48 courses (24 credits/semester)."
  },
  MECH: {
    name: "Mechanical Engineering",
    shortName: "MECH",
    icon: "⚙️",
    supported: true,
    courseCount: 48,
    catalogueCredits: 192,
    statusNote: "Curated Curricular Framework (48 courses, 192 credits)",
    degreeTarget: 192,
    totalCredits: 192,
    isSample: false,
    sampleType: "University Regulation Framework",
    disclaimer: "Standard 4-year engineering curriculum covering 192 credits across 48 courses (24 credits/semester)."
  },
  CIVIL: {
    name: "Civil Engineering",
    shortName: "CIVIL",
    icon: "🏗️",
    supported: true,
    courseCount: 48,
    catalogueCredits: 192,
    statusNote: "Curated Curricular Framework (48 courses, 192 credits)",
    degreeTarget: 192,
    totalCredits: 192,
    isSample: false,
    sampleType: "University Regulation Framework",
    disclaimer: "Standard 4-year engineering curriculum covering 192 credits across 48 courses (24 credits/semester)."
  },
};

window.GRADE_POINTS = { "S": 10, "O": 10, "A+": 9, "A": 9, "B+": 8, "B": 8, "C": 7, "D": 6, "P": 5, "F": 0 };

window.CURRICULA_BY_DEPARTMENT = {
  // ── ECE (Electronics & Communication Engg) — 48 Courses (192 Credits) ──
  ECE: [
    {
      code: "UBA01", name: "Engineering Mathematics - I", credits: 4, category: "Foundation Maths", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Differential and integral calculus, matrix algebra, and linear transformations for engineering systems.",
      skillsLearned: ["Matrices", "Differential Calculus", "Integral Calculus"],
      importance: "Essential mathematical foundation for all engineering analysis.",
      careerApplications: "Algorithmic modeling, scientific computing."
    },
    {
      code: "UBA48", name: "Engineering Physics", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Quantum mechanics, solid-state band theory, laser optics, and fiber optic wave guidance.",
      skillsLearned: ["Quantum Principles", "Optics & Lasers", "Semiconductor Basics"],
      importance: "Explains underlying physical phenomena governing semiconductor chips and optical communication.",
      careerApplications: "Photonics, optoelectronics, semiconductor research."
    },
    {
      code: "UBA49", name: "Engineering Chemistry", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Electrochemical cells, corrosion mitigation, battery technologies, and polymer materials.",
      skillsLearned: ["Electrochemistry", "Corrosion Prevention", "Polymers"],
      importance: "Essential for battery energy storage, chip fabrication chemistry, and materials.",
      careerApplications: "Battery manufacturing, microelectronics packaging."
    },
    {
      code: "UBA28", name: "Professional Ethics and Legal Practices", credits: 4, category: "Humanities & Management", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Engineering ethics, intellectual property rights, environmental regulations, and corporate compliance.",
      skillsLearned: ["Engineering Ethics", "IP & Patents", "Regulatory Compliance"],
      importance: "Instills ethical decision-making and patent protection awareness for engineering leadership.",
      careerApplications: "Patent filing, engineering law, corporate governance."
    },
    {
      code: "BTA01", name: "Biology and Environmental Science for Engineers", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Cellular biology, bio-inspired engineering, ecosystem sustainability, and environmental impact assessment.",
      skillsLearned: ["Bio-inspired Design", "Environmental Analysis", "Sustainability"],
      importance: "Provides foundation for green technologies, wearable bio-sensors, and eco-friendly devices.",
      careerApplications: "Biomedical sensors, sustainable hardware development."
    },
    {
      code: "CSA07", name: "Problem Solving using C", credits: 4, category: "Engineering Science", semester: 1,
      prerequisites: [], careerDomains: ["Embedded Systems & IoT"], difficulty: "Medium",
      description: "Structured procedural programming, memory pointers, dynamic allocation, bitwise operations, and file I/O in C.",
      skillsLearned: ["C Programming", "Pointers & Memory", "Modular Design"],
      importance: "Low-level system programming capability essential for firmware and hardware-level driver development.",
      careerApplications: "Embedded firmware, microcontroller programming."
    },
    {
      code: "UBA06", name: "Applied Mathematics", credits: 4, category: "Foundation Maths", semester: 2,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Vector calculus, ordinary differential equations, Laplace transforms, and boundary value problems.",
      skillsLearned: ["Laplace Transforms", "ODE Systems", "Vector Analysis"],
      importance: "Indispensable for frequency domain analysis in control systems, signals, and electrical circuits.",
      careerApplications: "Feedback control, signal processing, dynamic systems modeling."
    },
    {
      code: "UBA04", name: "Discrete Mathematics", credits: 4, category: "Foundation Maths", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Propositional logic, set theory, relations, combinatorics, and graph theoretical algorithms.",
      skillsLearned: ["Predicate Logic", "Graph Theory", "Combinatorics"],
      importance: "Direct theoretical foundation for data structures, digital logic, and formal language theory.",
      careerApplications: "Digital logic synthesis, cryptography, network routing."
    },
    {
      code: "EEA01", name: "Basic Electrical and Electronics Engineering", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "AC/DC circuit theorems, electrical machines, magnetic circuits, and basic semiconductor diodes and transistors.",
      skillsLearned: ["Circuit Theorems", "AC Circuit Analysis", "Electrical Machines"],
      importance: "Foundational electrical theory required across all electronics, power, and embedded disciplines.",
      careerApplications: "Power supply design, instrumentation, electrical systems."
    },
    {
      code: "ECA01", name: "Semiconductor Devices", credits: 4, category: "Professional Core", semester: 2,
      prerequisites: ["UBA48"], careerDomains: ["VLSI & Chip Design"], difficulty: "Hard",
      description: "Physics of PN junctions, BJT, MOSFET, FinFET, device fabrication steps, and I-V characteristics.",
      skillsLearned: ["MOSFET Physics", "Semiconductor Modeling", "FinFET Principles"],
      importance: "Underpins all modern analog and digital integrated circuit design.",
      careerApplications: "Silicon chip design, device modeling, foundry engineering."
    },
    {
      code: "ECA02", name: "Digital Circuits", credits: 4, category: "Professional Core", semester: 2,
      prerequisites: [], careerDomains: ["VLSI & Chip Design", "Embedded Systems & IoT"], difficulty: "Medium",
      description: "Boolean algebra, combinational logic design, sequential circuits, flip-flops, finite state machines, and Verilog HDL.",
      skillsLearned: ["Combinational Logic", "Sequential FSMs", "Verilog Basics"],
      importance: "The foundation of modern microprocessors, digital signal processors, and FPGA systems.",
      careerApplications: "FPGA programming, digital ASIC design, CPU architecture."
    },
    {
      code: "CSA08", name: "Python Programming & Data Structures", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: ["CSA07"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Object-oriented Python programming, lists, stacks, queues, hash tables, and algorithm efficiency analysis.",
      skillsLearned: ["Python Development", "Data Structures", "Algorithmic Efficiency"],
      importance: "Provides modern scripting and rapid prototyping tools for signal processing and edge automation.",
      careerApplications: "Automation scripting, signal simulation, data analysis."
    },
    {
      code: "UBA11", name: "Probability and Random Processes", credits: 4, category: "Foundation Maths", semester: 3,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Random variables, probability distributions, central limit theorem, and wide-sense stationary processes.",
      skillsLearned: ["Probability Distributions", "Stochastic Modeling", "Markov Chains"],
      importance: "Core probabilistic theory required for communications, noise modeling, and machine learning.",
      careerApplications: "Telecommunications, noise filtering, quantitative analysis."
    },
    {
      code: "ECA03", name: "Signals and Systems", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["UBA06"], careerDomains: ["5G & Wireless Networks", "Robotics & Edge AI"], difficulty: "Hard",
      description: "Continuous and discrete-time signals, LTI systems, Fourier transform, Laplace transform, and Z-transform analysis.",
      skillsLearned: ["Fourier Analysis", "Z-Transforms", "LTI System Modeling"],
      importance: "The mathematical foundation for all communication engineering and digital signal processing.",
      careerApplications: "Audio processing, biomedical telemetry, radar systems."
    },
    {
      code: "ECA04", name: "Analog Circuits", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["ECA01"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "BJT and MOSFET small-signal amplifiers, differential amplifiers, frequency response, feedback topologies, and oscillators.",
      skillsLearned: ["Op-Amp Design", "Differential Amplifiers", "Frequency Response"],
      importance: "Essential for interfacing digital microcontrollers with continuous real-world analog sensors.",
      careerApplications: "Audio amplifiers, RF front-ends, sensor signal conditioning."
    },
    {
      code: "EEA02", name: "Electric Circuit Analysis", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: ["EEA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Mesh and nodal analysis, network theorems, transient analysis of RL/RC/RLC circuits, and resonance.",
      skillsLearned: ["Network Theorems", "Transient Analysis", "Resonant Circuits"],
      importance: "Develops rigorous analytical methods for complex multi-loop electronic networks.",
      careerApplications: "Power filter design, RF matching networks."
    },
    {
      code: "MEA01", name: "Engineering Graphics & CAD", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Orthographic projections, isometric views, sectioning, PCB layout drafting, and 3D geometric modeling.",
      skillsLearned: ["CAD Modeling", "Orthographic Projections", "PCB Mechanical Drafting"],
      importance: "Essential for electro-mechanical packaging, heat sink modeling, and industrial enclosures.",
      careerApplications: "Hardware enclosure design, PCB form-factor layout."
    },
    {
      code: "ECA47", name: "Principles of Digital System Design", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["ECA02"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Synchronous sequential system design, timing analysis, setup and hold constraints, and testbench generation in Verilog.",
      skillsLearned: ["Timing Closure", "Verilog RTL", "Digital Verification"],
      importance: "Bridges basic digital circuits with industrial RTL design and synthesis.",
      careerApplications: "Digital logic engineering, RTL synthesis, FPGA implementation."
    },
    {
      code: "UBA55", name: "Statistics, ODE and Complex Analysis", credits: 4, category: "Foundation Maths", semester: 4,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Analytic functions, Cauchy-Riemann equations, complex integration, conformal mapping, and statistical inference.",
      skillsLearned: ["Complex Integration", "Analytic Functions", "Hypothesis Testing"],
      importance: "Required for wave propagation, high-frequency circuits, and experimental data validation.",
      careerApplications: "RF engineering, electromagnetics research, acoustic modeling."
    },
    {
      code: "ECA54", name: "Electromagnetic Fields & Waves", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["UBA06"], careerDomains: ["5G & Wireless Networks"], difficulty: "Hard",
      description: "Maxwell's equations, electrostatic and magnetostatic fields, wave propagation in dielectric and conducting media, Poynting vector.",
      skillsLearned: ["Maxwell's Equations", "Wave Propagation", "Poynting Theorem"],
      importance: "Underlying physical theory for wireless communication, RF circuits, and microwave links.",
      careerApplications: "Antenna engineering, RF shielding, radar technologies."
    },
    {
      code: "ECA10", name: "Microprocessors and Microcontrollers", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["ECA02"], careerDomains: ["Embedded Systems & IoT"], difficulty: "Medium",
      description: "Architecture of 8086 and ARM Cortex microcontrollers, assembly language, interrupts, timers, and peripheral interfacing.",
      skillsLearned: ["ARM Cortex Architecture", "Assembly Language", "Peripheral Interfacing"],
      importance: "Provides fundamental computing architecture knowledge for embedded systems and IoT devices.",
      careerApplications: "Automotive electronic control units, smart devices, robotics."
    },
    {
      code: "ECA06", name: "Integrated Circuits", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["ECA04"], careerDomains: ["VLSI & Chip Design"], difficulty: "Medium",
      description: "Linear and non-linear op-amp circuits, 555 timers, phase-locked loops (PLL), voltage regulators, and active filter design.",
      skillsLearned: ["Active Filter Design", "PLL Frequency Synthesis", "IC Instrumentation"],
      importance: "Central to analog signal processing and mixed-signal integrated circuit platforms.",
      careerApplications: "Instrumentation amplifiers, clock generators, power regulators."
    },
    {
      code: "EEA05", name: "Control Systems", credits: 4, category: "Engineering Science", semester: 4,
      prerequisites: ["UBA06"], careerDomains: ["Robotics & Edge AI"], difficulty: "Hard",
      description: "Transfer functions, block diagram reduction, root locus, Bode plots, Nyquist stability criterion, and PID controller tuning.",
      skillsLearned: ["Root Locus", "Bode Plot Stability", "PID Controller Tuning"],
      importance: "Core engineering discipline for stabilizing dynamic physical systems in robotics and drones.",
      careerApplications: "Autopilot systems, robotic motion control, industrial automation."
    },
    {
      code: "ECA61", name: "Computer Networks and Cybersecurity", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["ECA02"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "OSI and TCP/IP layers, routing algorithms, socket programming, cryptography basics, firewall architecture, and network security.",
      skillsLearned: ["TCP/IP Protocols", "Network Routing", "Cryptographic Security"],
      importance: "Connects electronic hardware to local and global internet communication infrastructure securely.",
      careerApplications: "Network engineering, IoT gateway security, telecommunications."
    },
    {
      code: "ECA08", name: "Analog and Digital Communication", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["ECA03"], careerDomains: ["5G & Wireless Networks"], difficulty: "Hard",
      description: "AM, FM, PM, digital modulation (PSK, QAM, FSK), PCM, eye diagrams, BER calculation, and channel capacity limits.",
      skillsLearned: ["Digital Modulation", "BER Performance", "Information Theory"],
      importance: "The foundation for all modern telecommunications, cellular systems, and satellite links.",
      careerApplications: "Cellular base stations, satellite modems, digital radios."
    },
    {
      code: "ECA09", name: "Digital Signal Processing", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["ECA03"], careerDomains: ["Robotics & Edge AI"], difficulty: "Hard",
      description: "DFT, FFT algorithms, FIR/IIR digital filter design, finite word-length effects, and DSP processor architectures.",
      skillsLearned: ["FFT Algorithms", "IIR/FIR Filter Design", "DSP Architecture"],
      importance: "Critical for speech recognition, audio/video compression, radar detection, and biomedical imaging.",
      careerApplications: "Audio noise cancellation, biometric processing, software defined radio."
    },
    {
      code: "ECA14", name: "Embedded Systems", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["ECA10"], careerDomains: ["Embedded Systems & IoT"], difficulty: "Medium",
      description: "Real-time operating systems (RTOS), task scheduling, inter-process communication, device drivers, and low-power embedded design.",
      skillsLearned: ["FreeRTOS", "Device Drivers", "Real-Time Scheduling"],
      importance: "Direct bridge between electronics hardware and mission-critical embedded software applications.",
      careerApplications: "Medical ventilators, aerospace avionics, autonomous vehicles."
    },
    {
      code: "ECA12", name: "Antennas and Wave Propagation", credits: 4, category: "Professional Elective", semester: 5,
      prerequisites: ["ECA54"], careerDomains: ["5G & Wireless Networks"], difficulty: "Hard",
      description: "Radiation mechanism, dipoles, patch antennas, antenna arrays, beamforming, and ionospheric/tropospheric wave propagation.",
      skillsLearned: ["Antenna Radiation Patterns", "Phased Array Beamforming", "Link Budget Design"],
      importance: "Essential for wireless transceiver performance, MIMO arrays, and satellite ground terminals.",
      careerApplications: "Smartphone antenna design, radar arrays, satellite communication."
    },
    {
      code: "ECA11", name: "VLSI Design", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["ECA01", "ECA02"], careerDomains: ["VLSI & Chip Design"], difficulty: "Hard",
      description: "CMOS logic gates, transmission gates, stick diagrams, CMOS layout design rules, delay modeling, and dynamic CMOS circuits.",
      skillsLearned: ["CMOS Logic Design", "Stick Diagrams & Layout", "SPICE Simulation"],
      importance: "Core curriculum for silicon semiconductor design and modern processor silicon microarchitecture.",
      careerApplications: "Semiconductor ASIC design, physical layout engineering, chip verification."
    },
    {
      code: "ITA06", name: "Machine Learning for Engineers", credits: 4, category: "Professional Elective", semester: 5,
      prerequisites: ["CSA08"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Supervised learning, regression, classification, support vector machines, random forests, clustering, and model evaluation.",
      skillsLearned: ["Supervised Learning", "Classification Algorithms", "Model Evaluation"],
      importance: "Enables engineering telemetry analysis, predictive maintenance, and edge intelligence.",
      careerApplications: "Predictive maintenance, telemetry analysis, AI signal recognition."
    },
    {
      code: "ECA13", name: "Microwave Engineering", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["ECA54"], careerDomains: ["5G & Wireless Networks"], difficulty: "Hard",
      description: "Waveguides, cavity resonators, scattering parameters, microwave passive components, klystrons, TWTs, and Gunn diodes.",
      skillsLearned: ["S-Parameters", "Waveguide Analysis", "RF Impedance Matching"],
      importance: "Underlies high-frequency military radar, satellite uplinks, and wireless microwave backhauls.",
      careerApplications: "Radar design, satellite transponders, microwave communication."
    },
    {
      code: "ECA18", name: "Optoelectronics and Optical Communication", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["ECA08"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Optical fibers, attenuation, dispersion, semiconductor lasers, photodiodes, optical amplifiers (EDFA), and WDM networks.",
      skillsLearned: ["Fiber Link Budget", "Semiconductor Lasers", "WDM Architectures"],
      importance: "Forms the backbone of high-capacity transatlantic subsea cables and global internet infrastructure.",
      careerApplications: "Telecom fiber networks, data center interconnects, optical sensors."
    },
    {
      code: "ECA59", name: "VLSI Design and FPGA/ASIC Implementation", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["ECA02", "ECA06"], careerDomains: ["VLSI & Chip Design"], difficulty: "Hard",
      description: "RTL coding guidelines, ASIC synthesis, clock tree synthesis, place-and-route flow, Static Timing Analysis (STA), and FPGA bitstream generation.",
      skillsLearned: ["Static Timing Analysis", "ASIC P&R Flow", "FPGA Implementation"],
      importance: "Direct industry preparation for front-end and physical design roles at leading semiconductor firms.",
      careerApplications: "ASIC physical design, FPGA acceleration, hardware security."
    },
    {
      code: "ECA58", name: "IoE and AI Driven Systems", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["ECA14"], careerDomains: ["Embedded Systems & IoT"], difficulty: "Medium",
      description: "Internet of Everything protocols (MQTT, CoAP), wireless sensor mesh networks, edge AI inference, and smart city architectures.",
      skillsLearned: ["MQTT/CoAP Protocols", "Wireless Mesh Networks", "Edge AI Inference"],
      importance: "Synthesizes hardware sensors, wireless communication, and machine learning into connected cyber-physical systems.",
      careerApplications: "Smart cities, industrial IoT, remote patient telemetry."
    },
    {
      code: "ECA28", name: "Robotics & Embedded Mechatronics", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["EEA05"], careerDomains: ["Robotics & Edge AI"], difficulty: "Medium",
      description: "Kinematics, inverse kinematics, robotic actuators, motor drives, sensor fusion (IMU, LiDAR), and ROS architecture.",
      skillsLearned: ["Kinematics Modeling", "Sensor Fusion", "Robot Operating System"],
      importance: "Essential for autonomous mobile robots, robotic surgical systems, and industrial factory automation.",
      careerApplications: "Autonomous mobile robots, robotic arms, drone control."
    },
    {
      code: "CSA15", name: "Cloud Computing and Distributed Systems", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["CSA08"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Virtualization, cloud architectures (AWS/Azure/GCP), containerization with Docker, microservices, and distributed streaming.",
      skillsLearned: ["Cloud Architecture", "Containerization", "Microservices"],
      importance: "Provides scalable server-side infrastructure to store and analyze massive telemetry data streams.",
      careerApplications: "IoT telemetry backends, cloud analytics platforms."
    },
    {
      code: "ECA56", name: "5G / 6G Communication Systems", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["ECA08"], careerDomains: ["5G & Wireless Networks"], difficulty: "Hard",
      description: "Massive MIMO, millimeter-wave communications, beamforming, network slicing, O-RAN architecture, and terahertz transmission.",
      skillsLearned: ["Massive MIMO", "Millimeter-Wave Design", "Network Slicing"],
      importance: "Powers modern cellular ultra-reliable low-latency communications and mission-critical 5G/6G deployments.",
      careerApplications: "5G base station engineering, telecom standards research."
    },
    {
      code: "ECA57", name: "Nano Electronics and Devices", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["ECA01"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Quantum transport, carbon nanotubes, graphene, 2D semiconductors, spintronics, and gate-all-around (GAA) nanosheets.",
      skillsLearned: ["Quantum Transport", "GAA Nanosheet Physics", "2D Materials"],
      importance: "Pioneers the technology nodes beyond sub-2nm silicon scaling for next-generation computing.",
      careerApplications: "Next-gen transistor research, quantum computing components."
    },
    {
      code: "ECA60", name: "SoC and Co-Design for AI and High-Performance Computing", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["ECA59"], careerDomains: ["VLSI & Chip Design", "Robotics & Edge AI"], difficulty: "Hard",
      description: "System-on-Chip (SoC) architectures, AMBA bus protocols, hardware-software co-design, neural network accelerators (NPU), and RISC-V extensions.",
      skillsLearned: ["AMBA AXI Protocols", "NPU Accelerator Design", "RISC-V Architecture"],
      importance: "Critical for developing custom silicon hardware engines that accelerate generative AI models locally.",
      careerApplications: "AI accelerator chips, smartphone SoCs, automotive vision processors."
    },
    {
      code: "ECA62", name: "Automotive Electronics & EV Powertrain", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["ECA14"], careerDomains: ["Embedded Systems & IoT"], difficulty: "Medium",
      description: "CAN/LIN bus protocols, automotive functional safety (ISO 26262), battery management systems (BMS), and motor inverters.",
      skillsLearned: ["CAN Bus Networking", "BMS Architecture", "ISO 26262 Safety"],
      importance: "Direct domain specialization for the booming electric vehicle and connected mobility industry.",
      careerApplications: "Electric vehicle engineering, ADAS platforms, battery controllers."
    },
    {
      code: "ECA63", name: "Computer Vision & Edge Deep Learning", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["ECA09"], careerDomains: ["Robotics & Edge AI"], difficulty: "Hard",
      description: "Convolutional neural networks, object detection (YOLO), model quantization (INT8), TensorRT deployment, and embedded camera pipelines.",
      skillsLearned: ["CNN Architectures", "Model Quantization", "Embedded Vision Pipelines"],
      importance: "Empowers edge cameras and drones to perform real-time video analytics without relying on cloud latency.",
      careerApplications: "Autonomous navigation, industrial defect detection, smart security."
    },
    {
      code: "ECA71", name: "Capstone Project Phase - I", credits: 4, category: "Capstone & Project", semester: 7,
      prerequisites: ["ECA59"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Comprehensive engineering problem formulation, literature review, architectural specification, and initial hardware/simulation proof-of-concept.",
      skillsLearned: ["Project Management", "Technical Specification", "System Prototyping"],
      importance: "Integrates multi-year engineering theory into an applied industry-standard prototype.",
      careerApplications: "Applied product development, engineering research, patent drafting."
    },
    {
      code: "ECA72", name: "Capstone Project Phase - II", credits: 4, category: "Capstone & Project", semester: 8,
      prerequisites: ["ECA71"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Complete implementation, rigorous hardware verification, thermal/timing validation, user testing, and formal project defense.",
      skillsLearned: ["System Integration", "Experimental Validation", "Technical Defense"],
      importance: "Culmination of engineering undergraduate degree demonstrating full-lifecycle engineering capability.",
      careerApplications: "Commercial product launch, research publication."
    },
    {
      code: "ECA73", name: "Industry Internship & Professional Practicum", credits: 4, category: "Capstone & Project", semester: 8,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Full-time industrial immersive placement in leading semiconductor, telecommunications, or embedded systems design enterprises.",
      skillsLearned: ["Corporate Engineering", "Agile Sprints", "Industry Toolchains"],
      importance: "Direct immersion in enterprise engineering workflows, peer collaboration, and commercial deployment.",
      careerApplications: "Full-time engineering employment, corporate R&D."
    },
    {
      code: "ECA65", name: "Satellite Communication and Radar Systems", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["ECA12"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Orbital mechanics, link budgets, transponder design, synthetic aperture radar (SAR), Doppler radar, and navigation systems (GPS/NavIC).",
      skillsLearned: ["Orbital Link Budgets", "SAR Processing", "Doppler Radar Design"],
      importance: "Essential for aerospace telecommunications, defense surveillance, and earth observation constellations.",
      careerApplications: "Spacecraft payload engineering, defense radar systems."
    },
    {
      code: "ECA66", name: "RF and High-Frequency Circuit Design", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["ECA13"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Smith chart matching, low-noise amplifiers (LNA), power amplifiers (PA), RF mixers, phase noise, and RFIC layout.",
      skillsLearned: ["Smith Chart Matching", "LNA Design", "RF Power Amplifiers"],
      importance: "Highly specialized analog skillset for designing front-end chips for smartphones and satellite ground stations.",
      careerApplications: "RFIC design, 5G transceiver engineering."
    },
    {
      code: "ECA67", name: "Quantum Information & Cryptography", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["UBA48"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Qubits, quantum gates, entanglement, quantum key distribution (BB84), and post-quantum cryptographic algorithms.",
      skillsLearned: ["Quantum Circuit Design", "QKD Protocols", "Post-Quantum Security"],
      importance: "Prepares engineers for next-generation quantum-safe secure communications infrastructure.",
      careerApplications: "Quantum security, secure financial communications."
    },
    {
      code: "ECA68", name: "Engineering Economics & Intellectual Property", credits: 4, category: "Humanities & Management", semester: 8,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Lifecycle cost analysis, return on investment, engineering project appraisal, patent landscape mapping, and commercialization.",
      skillsLearned: ["Cost-Benefit Modeling", "Patent Landscaping", "Tech Entrepreneurship"],
      importance: "Equips graduating engineers to evaluate the commercial viability and financial returns of technological innovations.",
      careerApplications: "Engineering management, technology consulting, venture capital."
    }
  ],
  // ── CSE (Computer Science & Engineering) — 48 Courses (192 Credits) ──
  CSE: [
    {
      code: "UBA01", name: "Engineering Mathematics - I", credits: 4, category: "Foundation Maths", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Differential and integral calculus, matrix algebra, and linear transformations for engineering systems.",
      skillsLearned: ["Matrices", "Differential Calculus", "Integral Calculus"],
      importance: "Essential mathematical foundation for all engineering analysis.",
      careerApplications: "Algorithmic modeling, scientific computing."
    },
    {
      code: "UBA48", name: "Engineering Physics", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Quantum mechanics, solid-state band theory, laser optics, and fiber optic wave guidance.",
      skillsLearned: ["Quantum Principles", "Optics & Lasers", "Semiconductor Basics"],
      importance: "Explains underlying physical phenomena governing semiconductor chips and optical communication.",
      careerApplications: "Photonics, optoelectronics, semiconductor research."
    },
    {
      code: "UBA49", name: "Engineering Chemistry", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Electrochemical cells, corrosion mitigation, battery technologies, and polymer materials.",
      skillsLearned: ["Electrochemistry", "Corrosion Prevention", "Polymers"],
      importance: "Essential for battery energy storage, chip fabrication chemistry, and materials.",
      careerApplications: "Battery manufacturing, microelectronics packaging."
    },
    {
      code: "UBA28", name: "Professional Ethics and Legal Practices", credits: 4, category: "Humanities & Management", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Engineering ethics, intellectual property rights, environmental regulations, and corporate compliance.",
      skillsLearned: ["Engineering Ethics", "IP & Patents", "Regulatory Compliance"],
      importance: "Instills ethical decision-making and patent protection awareness for engineering leadership.",
      careerApplications: "Patent filing, engineering law, corporate governance."
    },
    {
      code: "BTA01", name: "Biology and Environmental Science for Engineers", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Cellular biology, bio-inspired engineering, ecosystem sustainability, and environmental impact assessment.",
      skillsLearned: ["Bio-inspired Design", "Environmental Analysis", "Sustainability"],
      importance: "Provides foundation for green technologies, wearable bio-sensors, and eco-friendly devices.",
      careerApplications: "Biomedical sensors, sustainable hardware development."
    },
    {
      code: "CSA07", name: "Problem Solving using C", credits: 4, category: "Engineering Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Structured procedural programming, memory pointers, dynamic allocation, bitwise operations, and file I/O in C.",
      skillsLearned: ["C Programming", "Pointers & Memory", "Modular Design"],
      importance: "Low-level system programming capability essential for firmware and hardware-level driver development.",
      careerApplications: "Embedded firmware, microcontroller programming."
    },
    {
      code: "UBA04", name: "Discrete Mathematics", credits: 4, category: "Foundation Maths", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Propositional logic, set theory, relations, combinatorics, and graph theoretical algorithms.",
      skillsLearned: ["Predicate Logic", "Graph Theory", "Combinatorics"],
      importance: "Direct theoretical foundation for data structures, digital logic, and formal language theory.",
      careerApplications: "Software engineering, cryptography, network routing."
    },
    {
      code: "UBA06", name: "Applied Mathematics", credits: 4, category: "Foundation Maths", semester: 2,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Vector calculus, ordinary differential equations, Laplace transforms, and boundary value problems.",
      skillsLearned: ["Laplace Transforms", "ODE Systems", "Vector Analysis"],
      importance: "Indispensable for frequency domain analysis in control systems, signals, and electrical circuits.",
      careerApplications: "Feedback control, signal processing, dynamic systems modeling."
    },
    {
      code: "EEA01", name: "Basic Electrical and Electronics Engineering", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "AC/DC circuit theorems, electrical machines, magnetic circuits, and basic semiconductor diodes and transistors.",
      skillsLearned: ["Circuit Theorems", "AC Circuit Analysis", "Electrical Machines"],
      importance: "Foundational electrical theory required across all electronics, power, and embedded disciplines.",
      careerApplications: "Power supply design, instrumentation, electrical systems."
    },
    {
      code: "CSA02", name: "Advanced C & Linux Systems", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: ["CSA07"], careerDomains: ["Full-Stack & Cloud Computing"], difficulty: "Medium",
      description: "Linux shell scripting, system calls, multi-process management, IPC mechanisms, and advanced POSIX programming.",
      skillsLearned: ["Linux Shell", "POSIX System Calls", "IPC Mechanisms"],
      importance: "Crucial for understanding underlying OS kernel abstractions and systems development.",
      careerApplications: "Systems software, kernel drivers, cloud infrastructure."
    },
    {
      code: "CSA03", name: "Data Structures", credits: 4, category: "Professional Core", semester: 2,
      prerequisites: ["CSA07"], careerDomains: ["Full-Stack & Cloud Computing"], difficulty: "Medium",
      description: "Linear and non-linear data structures: linked lists, trees, binary search trees, AVL trees, heaps, and graphs.",
      skillsLearned: ["Tree Algorithms", "Graph Traversals", "Heap Operations"],
      importance: "Core computer science subject required for efficient software engineering and technical interviews.",
      careerApplications: "High-performance software, database indexes, compiler construction."
    },
    {
      code: "MEA01", name: "Engineering Graphics & CAD", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Orthographic projections, isometric views, sectioning, CAD modeling, and engineering drafting.",
      skillsLearned: ["CAD Modeling", "Orthographic Projections", "Technical Drafting"],
      importance: "Essential for spatial visualization and engineering documentation.",
      careerApplications: "UI/UX spatial modeling, 3D graphics, technical drafting."
    },
    {
      code: "UBA53", name: "Probabilistic Methods and Linear Algebra", credits: 4, category: "Foundation Maths", semester: 3,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Vector spaces, singular value decomposition, eigenvalues, Bayesian inference, and probability vectors.",
      skillsLearned: ["Eigenvalues & SVD", "Bayesian Inference", "Vector Spaces"],
      importance: "The primary mathematical framework for multidimensional data representations and deep learning.",
      careerApplications: "Data science, computer vision, AI model training."
    },
    {
      code: "CSA04", name: "Operating Systems", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["CSA02"], careerDomains: ["Systems Software & High Performance Computing"], difficulty: "Hard",
      description: "Process management, CPU scheduling, synchronization, deadlocks, virtual memory management, and file system architecture.",
      skillsLearned: ["Process Synchronization", "Virtual Memory", "Page Replacement"],
      importance: "Understands fundamental software abstraction layer managing compute, memory, and I/O hardware.",
      careerApplications: "Cloud OS, distributed servers, real-time operating systems."
    },
    {
      code: "CSA05", name: "Database Management Systems", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["CSA03"], careerDomains: ["Full-Stack & Cloud Computing"], difficulty: "Medium",
      description: "Relational data model, SQL, relational algebra, normal forms (1NF-BCNF), transactions, ACID properties, and indexing.",
      skillsLearned: ["SQL Optimization", "Relational Normalization", "Transaction Management"],
      importance: "Universal backend data persistence framework for commercial web and mobile software.",
      careerApplications: "Enterprise databases, financial ledgers, cloud storage."
    },
    {
      code: "CSA08", name: "Python Programming", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: ["CSA07"], careerDomains: ["AI & Intelligent Systems"], difficulty: "Medium",
      description: "Python syntax, decorators, generators, file processing, data scraping, and numerical libraries (NumPy, Pandas).",
      skillsLearned: ["Python Syntax", "NumPy & Pandas", "Automation Scripting"],
      importance: "Primary programming language for data engineering, AI, automated testing, and web services.",
      careerApplications: "Data pipelines, automation scripts, backend APIs."
    },
    {
      code: "CSA09", name: "Programming in Java", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: ["CSA07"], careerDomains: ["Full-Stack & Cloud Computing"], difficulty: "Medium",
      description: "Java OOP principles, inheritance, interfaces, exception handling, multithreading, collections framework, and JVM internals.",
      skillsLearned: ["Java OOP", "Collections Framework", "Multithreaded Programming"],
      importance: "Dominant programming language for enterprise distributed backend platforms and Android.",
      careerApplications: "Enterprise banking systems, Android apps, microservices."
    },
    {
      code: "ECA47", name: "Principles of Digital System Design", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: ["EEA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Boolean reduction, combinational circuits, sequential flip-flops, registers, counters, and basic Verilog hardware description.",
      skillsLearned: ["Logic Optimization", "Sequential Circuits", "Verilog HDL"],
      importance: "Connects software logic with physical silicon logic gates and CPU arithmetic units.",
      careerApplications: "FPGA prototyping, computer processor design."
    },
    {
      code: "UBA10", name: "Numerical Methods", credits: 4, category: "Foundation Maths", semester: 4,
      prerequisites: ["UBA06"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Numerical solution of equations, interpolation, numerical differentiation, integration, and initial value solvers.",
      skillsLearned: ["Root Finding", "Numerical Quadrature", "ODE Solvers"],
      importance: "Enables computers to simulate physical systems and continuous scientific algorithms.",
      careerApplications: "Scientific computing, quantitative finance, simulation."
    },
    {
      code: "CSA06", name: "Design and Analysis of Algorithms", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CSA03"], careerDomains: ["AI & Intelligent Systems"], difficulty: "Hard",
      description: "Asymptotic complexity, divide-and-conquer, greedy algorithms, dynamic programming, network flow, NP-completeness.",
      skillsLearned: ["Dynamic Programming", "Asymptotic Analysis", "Graph Optimization"],
      importance: "Core theoretical discipline for writing optimal, scalable software systems under resource constraints.",
      careerApplications: "Search engines, routing optimization, algorithmic trading."
    },
    {
      code: "CSA12", name: "Computer Architecture", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["ECA47"], careerDomains: ["Systems Software & High Performance Computing"], difficulty: "Hard",
      description: "MIPS/RISC-V instruction set, pipelining, hazard resolution, branch prediction, memory hierarchy, and cache coherence.",
      skillsLearned: ["Pipeline Hazards", "Cache Hierarchy", "Instruction Set Architecture"],
      importance: "Unveils how software instructions translate into hardware execution and cache performance.",
      careerApplications: "CPU microarchitecture, compiler optimization, systems engineering."
    },
    {
      code: "CSA10", name: "Software Engineering", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CSA03"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Software life cycle models, Agile/Scrum methodologies, requirements engineering, architectural design, and software metrics.",
      skillsLearned: ["Agile & Scrum", "Software Architecture", "UML Modeling"],
      importance: "Provides structured industry methodology for delivering large-scale multi-developer software projects.",
      careerApplications: "Project engineering, tech leadership, product management."
    },
    {
      code: "CSA07_NET", name: "Computer Networks", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CSA04"], careerDomains: ["Cybersecurity & Networks"], difficulty: "Medium",
      description: "OSI & TCP/IP stack, Ethernet, IP addressing, subnetting, routing protocols (BGP, OSPF), TCP/UDP, and application protocols.",
      skillsLearned: ["TCP/IP Protocol Suite", "IP Subnetting", "Socket Programming"],
      importance: "Connects individual computers into global distributed internet services.",
      careerApplications: "Network infrastructure, distributed cloud, edge networking."
    },
    {
      code: "CSA11", name: "Object Oriented Analysis and Design", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CSA09"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Design patterns (Factory, Singleton, Observer, Strategy), UML class/sequence diagrams, and SOLID design principles.",
      skillsLearned: ["Design Patterns", "SOLID Principles", "System Modeling"],
      importance: "Industry standard for creating maintainable, scalable, loosely coupled enterprise software codebases.",
      careerApplications: "Software architecture, enterprise framework engineering."
    },
    {
      code: "CSA13", name: "Theory of Computation", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["UBA04"], careerDomains: ["Systems Software & High Performance Computing"], difficulty: "Hard",
      description: "Finite automata, regular expressions, context-free grammars, pushdown automata, Turing machines, and undecidability.",
      skillsLearned: ["Finite State Automata", "Turing Computability", "Decidability Proofs"],
      importance: "Defines theoretical computational limits of what computers can and cannot compute.",
      careerApplications: "Language design, compiler frontends, protocol verification."
    },
    {
      code: "CSA14", name: "Compiler Design", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["CSA02"], careerDomains: ["Systems Software & High Performance Computing"], difficulty: "Hard",
      description: "Lexical analysis, top-down and bottom-up parsing (LL/LR), symbol tables, intermediate code generation, and optimization.",
      skillsLearned: ["Lexical Analysis & Yacc", "AST Generation", "Code Optimization"],
      importance: "Translates human-readable high-level code into blazing-fast machine code instructions.",
      careerApplications: "Compiler engineering, domain-specific languages, code analyzers."
    },
    {
      code: "CSA15", name: "Cloud Computing and Big Data Analytics", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["CSA07_NET"], careerDomains: ["Full-Stack & Cloud Computing"], difficulty: "Medium",
      description: "Distributed storage (HDFS), MapReduce, Apache Spark, virtualization, AWS/GCP cloud services, and serverless compute.",
      skillsLearned: ["Apache Spark", "Cloud Architecture", "Distributed Data Processing"],
      importance: "Modern standard for processing petabyte-scale data and deploying global web applications.",
      careerApplications: "Big data engineering, cloud architecture, enterprise DevOps."
    },
    {
      code: "CSA16", name: "Data Warehousing and Data Mining", credits: 4, category: "Professional Elective", semester: 5,
      prerequisites: ["CSA05"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Star/snowflake schemas, ETL pipelines, association rule mining (Apriori), clustering, and business analytics cubes.",
      skillsLearned: ["ETL Pipeline Design", "Data Warehouse Schemas", "Association Mining"],
      importance: "Transforms transactional raw operational data into high-value executive business intelligence.",
      careerApplications: "Business intelligence, analytics engineering, enterprise reporting."
    },
    {
      code: "CSA17", name: "Artificial Intelligence", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["CSA08"], careerDomains: ["AI & Intelligent Systems"], difficulty: "Medium",
      description: "Heuristic search, A* algorithm, adversarial game search, constraint satisfaction, knowledge representation, and probabilistic reasoning.",
      skillsLearned: ["Heuristic Search", "Game Playing Algorithms", "Knowledge Graphs"],
      importance: "Classical and modern AI techniques enabling intelligent software agents and autonomous decision making.",
      careerApplications: "Game AI, planning systems, automated reasoning engines."
    },
    {
      code: "CSA43", name: "Internet Programming & Web Technologies", credits: 4, category: "Professional Elective", semester: 5,
      prerequisites: ["CSA09"], careerDomains: ["Full-Stack & Cloud Computing"], difficulty: "Medium",
      description: "Full-stack web architecture, React, Node.js, RESTful APIs, JWT authentication, and responsive frontend UI frameworks.",
      skillsLearned: ["React & Node.js", "RESTful API Design", "Authentication & Security"],
      importance: "Universal software delivery mechanism reaching billions of users across web browsers.",
      careerApplications: "Full-stack software engineering, SaaS product development."
    },
    {
      code: "CSA51", name: "Cryptography and Network Security", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["CSA07_NET"], careerDomains: ["Cybersecurity & Networks"], difficulty: "Hard",
      description: "Symmetric encryption (AES), asymmetric ciphers (RSA, ECC), SHA hashing, digital signatures, PKI, and TLS protocols.",
      skillsLearned: ["Public Key Cryptography", "TLS/SSL Handshake", "Hash Signatures"],
      importance: "Protects global financial transactions, user privacy, and critical internet communication from adversaries.",
      careerApplications: "Cybersecurity engineering, secure cloud architecture, cryptosystems."
    },
    {
      code: "CSA47", name: "Deep Learning Architectures", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["CSA17"], careerDomains: ["AI & Intelligent Systems"], difficulty: "Hard",
      description: "Backpropagation calculus, CNNs for computer vision, RNNs/LSTMs for sequences, attention mechanisms, and PyTorch frameworks.",
      skillsLearned: ["PyTorch Deep Learning", "CNN Architectures", "Attention Mechanisms"],
      importance: "Powers modern autonomous vehicles, speech recognition, visual perception, and generative models.",
      careerApplications: "Deep learning engineering, AI research, perceptual computing."
    },
    {
      code: "CSA58", name: "DevSecOps Engineering and Application Security", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["CSA15"], careerDomains: ["Cybersecurity & Networks"], difficulty: "Medium",
      description: "CI/CD pipelines with GitHub Actions, Docker containers, Kubernetes orchestration, OWASP Top 10 mitigation, and SAST/DAST.",
      skillsLearned: ["Kubernetes & Docker", "CI/CD Automation", "OWASP Security"],
      importance: "Automates continuous secure software deployment pipelines at enterprise scale.",
      careerApplications: "DevOps engineering, cloud security, infrastructure automation."
    },
    {
      code: "CSA45", name: "Microservices and Distributed Architecture", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["CSA43"], careerDomains: ["Full-Stack & Cloud Computing"], difficulty: "Medium",
      description: "Domain-Driven Design (DDD), API gateways, event-driven messaging (Kafka, RabbitMQ), circuit breakers, and distributed tracing.",
      skillsLearned: ["Event-Driven Messaging", "Microservices Design", "Distributed Tracing"],
      importance: "Architectural standard for hyper-scalable cloud systems at Netflix, Uber, and Amazon.",
      careerApplications: "Cloud architecture, high-throughput backend systems."
    },
    {
      code: "ITA06", name: "Machine Learning", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["CSA08"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Supervised & unsupervised learning, gradient boosting, random forests, dimensionality reduction (PCA), and cross-validation.",
      skillsLearned: ["Scikit-Learn", "Gradient Boosting", "Model Validation"],
      importance: "Core predictive analytics tool extracting actionable value from massive datasets.",
      careerApplications: "Predictive analytics, recommender engines, fintech modeling."
    },
    {
      code: "CSA37", name: "Software Testing and Quality Assurance", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["CSA10"], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Unit testing frameworks, test-driven development (TDD), automated integration testing, Selenium, and performance load testing.",
      skillsLearned: ["TDD Methodologies", "Selenium Automation", "Performance Profiling"],
      importance: "Guarantees zero-defect software quality before production releases.",
      careerApplications: "QA automation, reliability engineering, software benchmarking."
    },
    {
      code: "CSA60", name: "Cybersecurity Incident Handling and Response", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["CSA51"], careerDomains: ["Cybersecurity & Networks"], difficulty: "Hard",
      description: "Threat modeling, MITRE ATT&CK matrix, SIEM telemetry, memory forensics, intrusion detection systems, and incident response playbooks.",
      skillsLearned: ["SIEM Threat Hunting", "MITRE ATT&CK", "Incident Playbooks"],
      importance: "Defends enterprise infrastructure against advanced persistent threats and ransomware.",
      careerApplications: "Security Operations Center (SOC) analyst, threat hunting, cybersecurity leadership."
    },
    {
      code: "CSA61", name: "Digital Forensics and Cybercrime Investigation", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["CSA51"], careerDomains: ["Cybersecurity & Networks"], difficulty: "Hard",
      description: "Chain of custody, disk imaging, filesystem analysis (NTFS/ext4), network packet reconstruction, and anti-forensics counter-measures.",
      skillsLearned: ["Disk & RAM Forensics", "Network Packet Analysis", "Evidentiary Integrity"],
      importance: "Provides legally admissible forensic reconstruction of sophisticated cyber intrusions.",
      careerApplications: "Forensic investigator, law enforcement tech, enterprise forensics."
    },
    {
      code: "CSA65", name: "Generative AI and Large-Scale Models", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["CSA47"], careerDomains: ["AI & Intelligent Systems"], difficulty: "Hard",
      description: "Transformer architecture, self-attention, BERT, GPT, fine-tuning with LoRA/QLoRA, Retrieval-Augmented Generation (RAG), and vector DBs.",
      skillsLearned: ["Transformer Architectures", "LoRA Fine-Tuning", "RAG Systems"],
      importance: "Frontier AI technology powering conversational assistants, code generation, and intelligent agents.",
      careerApplications: "Generative AI engineer, LLM architect, cognitive automation."
    },
    {
      code: "CSA44", name: "Distributed Systems and Consensus Protocols", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["CSA15"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "CAP theorem, Raft and Paxos consensus, vector clocks, distributed transactions, and peer-to-peer decentralized networks.",
      skillsLearned: ["Raft Consensus", "Distributed Locking", "Fault Tolerance Design"],
      importance: "Theoretical and practical backbone for fault-tolerant databases and cloud storage.",
      careerApplications: "Distributed systems engineering, database internals."
    },
    {
      code: "CSA46", name: "Blockchain and Smart Contract Development", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["CSA51"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Decentralized ledgers, consensus algorithms (PoW/PoS), Ethereum virtual machine (EVM), Solidity smart contracts, and Web3 security.",
      skillsLearned: ["Solidity Development", "Smart Contract Auditing", "Web3 Integration"],
      importance: "Enables trustless decentralized computing, programmable money, and cryptographic governance.",
      careerApplications: "Blockchain developer, DeFi protocol engineer, smart contract auditor."
    },
    {
      code: "CSA71", name: "Capstone Project Phase - I", credits: 4, category: "Capstone & Project", semester: 7,
      prerequisites: ["CSA10"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Project scoping, architecture definition, requirements engineering, prototype implementation, and milestone defense.",
      skillsLearned: ["Full-Stack Prototyping", "Technical Architecture", "Project Management"],
      importance: "Integrates multi-disciplinary software engineering knowledge into an industry-grade system.",
      careerApplications: "Enterprise software launch, research prototype, startup MVP."
    },
    {
      code: "CSA72", name: "Capstone Project Phase - II", credits: 4, category: "Capstone & Project", semester: 8,
      prerequisites: ["CSA71"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Full production software deployment, stress testing, performance benchmarking, documentation, and external committee defense.",
      skillsLearned: ["Production Deployment", "Stress Benchmarking", "Technical Defense"],
      importance: "Culmination of undergraduate degree delivering validated, high-impact software systems.",
      careerApplications: "Commercial software product, patent application, research publication."
    },
    {
      code: "CSA73", name: "Industry Internship & Practicum", credits: 4, category: "Capstone & Project", semester: 8,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Immersive semester-long industry placement at a technology enterprise, working on production codebases.",
      skillsLearned: ["Production Codebases", "Corporate Agile Workflows", "Cross-Functional Collaboration"],
      importance: "Facilitates seamless transition from academic learning to professional software engineering.",
      careerApplications: "Full-time software engineering career, corporate R&D."
    },
    {
      code: "CSA67", name: "Quantum Computing & Quantum Algorithms", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["UBA53"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Qubits, quantum superposition, entanglement, Grover's search, Shor's factoring, and IBM Qiskit quantum circuit programming.",
      skillsLearned: ["Qiskit Programming", "Quantum Circuit Simulation", "Quantum Cryptanalysis"],
      importance: "Frontier computational paradigm unlocking exponential speedup for combinatorial optimization.",
      careerApplications: "Quantum software engineer, quantum cryptography research."
    },
    {
      code: "CSA68", name: "High Performance Computing & GPU Programming", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["CSA12"], careerDomains: ["Systems Software & High Performance Computing"], difficulty: "Hard",
      description: "Parallel architectures, CUDA C/C++ programming, memory coalescing, OpenMP, MPI, and multi-GPU cluster scaling.",
      skillsLearned: ["CUDA Programming", "GPU Kernel Optimization", "MPI Cluster Parallelism"],
      importance: "Accelerates scientific simulations, climate modeling, and large AI model training clusters.",
      careerApplications: "GPU computing engineer, HPC research, AI infrastructure."
    },
    {
      code: "CSA69", name: "Mobile Application Development", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["CSA43"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Cross-platform mobile engineering with Flutter/React Native, mobile sensors, offline sync, and app store deployment.",
      skillsLearned: ["Flutter / React Native", "Mobile State Management", "Offline SQLite Sync"],
      importance: "Delivers engaging consumer-facing applications to billions of handheld smartphone devices.",
      careerApplications: "Mobile app engineer, startup developer."
    },
    {
      code: "ECA68", name: "Engineering Economics & Intellectual Property", credits: 4, category: "Humanities & Management", semester: 8,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Lifecycle cost analysis, return on investment, engineering project appraisal, patent landscape mapping, and commercialization.",
      skillsLearned: ["Cost-Benefit Modeling", "Patent Landscaping", "Tech Entrepreneurship"],
      importance: "Equips graduating engineers to evaluate the commercial viability and financial returns of technological innovations.",
      careerApplications: "Engineering management, technology consulting, venture capital."
    }
  ],
  // ── AIML (AI & Machine Learning) — 48 Courses (192 Credits) ──
  AIML: [
    {
      code: "UBA01", name: "Engineering Mathematics - I", credits: 4, category: "Foundation Maths", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Differential and integral calculus, matrix algebra, and linear transformations for engineering systems.",
      skillsLearned: ["Matrices", "Differential Calculus", "Integral Calculus"],
      importance: "Essential mathematical foundation for all engineering analysis.",
      careerApplications: "Algorithmic modeling, scientific computing."
    },
    {
      code: "UBA48", name: "Engineering Physics", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Quantum mechanics, solid-state band theory, laser optics, and fiber optic wave guidance.",
      skillsLearned: ["Quantum Principles", "Optics & Lasers", "Semiconductor Basics"],
      importance: "Explains underlying physical phenomena governing semiconductor chips and optical communication.",
      careerApplications: "Photonics, optoelectronics, semiconductor research."
    },
    {
      code: "UBA49", name: "Engineering Chemistry", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Electrochemical cells, corrosion mitigation, battery technologies, and polymer materials.",
      skillsLearned: ["Electrochemistry", "Corrosion Prevention", "Polymers"],
      importance: "Essential for battery energy storage, chip fabrication chemistry, and materials.",
      careerApplications: "Battery manufacturing, microelectronics packaging."
    },
    {
      code: "UBA28", name: "Professional Ethics and Legal Practices", credits: 4, category: "Humanities & Management", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Engineering ethics, intellectual property rights, environmental regulations, and corporate compliance.",
      skillsLearned: ["Engineering Ethics", "IP & Patents", "Regulatory Compliance"],
      importance: "Instills ethical decision-making and patent protection awareness for engineering leadership.",
      careerApplications: "Patent filing, engineering law, corporate governance."
    },
    {
      code: "BTA01", name: "Biology and Environmental Science for Engineers", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Cellular biology, bio-inspired engineering, ecosystem sustainability, and environmental impact assessment.",
      skillsLearned: ["Bio-inspired Design", "Environmental Analysis", "Sustainability"],
      importance: "Provides foundation for green technologies, wearable bio-sensors, and eco-friendly devices.",
      careerApplications: "Biomedical sensors, sustainable hardware development."
    },
    {
      code: "CSA07", name: "Problem Solving using C", credits: 4, category: "Engineering Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Structured procedural programming, memory pointers, dynamic allocation, bitwise operations, and file I/O in C.",
      skillsLearned: ["C Programming", "Pointers & Memory", "Modular Design"],
      importance: "Low-level system programming capability essential for firmware and hardware-level driver development.",
      careerApplications: "Embedded firmware, microcontroller programming."
    },
    {
      code: "UBA04", name: "Discrete Mathematics", credits: 4, category: "Foundation Maths", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Propositional logic, set theory, combinatorics, graph theory, and proof techniques.",
      skillsLearned: ["Logic", "Graph Theory", "Combinatorics"],
      importance: "Foundational for knowledge graphs and formal reasoning in AI.",
      careerApplications: "Knowledge graphs, AI reasoning systems."
    },
    {
      code: "UBA06", name: "Applied Mathematics", credits: 4, category: "Foundation Maths", semester: 2,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Differential equations, vector calculus, Laplace and Fourier transforms.",
      skillsLearned: ["Vector Calculus", "ODEs", "Laplace Transforms"],
      importance: "Crucial for continuous optimization and signal processing.",
      careerApplications: "Optimization algorithms, continuous AI modeling."
    },
    {
      code: "EEA01", name: "Basic Electrical and Electronics Engineering", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "DC/AC circuit theorems, semiconductors, sensors, and basic instrumentation.",
      skillsLearned: ["Circuit Analysis", "Sensors", "Instrumentation"],
      importance: "Necessary for understanding sensory inputs in robotic systems.",
      careerApplications: "Robotic sensing, edge AI devices."
    },
    {
      code: "CSA02", name: "Advanced C Programming", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: ["CSA07"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Pointers, dynamic memory management, file handling, and low-level algorithmic logic.",
      skillsLearned: ["Pointers", "Dynamic Memory", "Optimization"],
      importance: "Critical for high-performance AI kernel development.",
      careerApplications: "C++ tensor engines, hardware acceleration."
    },
    {
      code: "CSA03", name: "Data Structures", credits: 4, category: "Professional Core", semester: 2,
      prerequisites: ["CSA07"], careerDomains: ["NLP & Language Technologies"], difficulty: "Medium",
      description: "Stacks, queues, linked lists, trees, graphs, hashing, and complexity analysis.",
      skillsLearned: ["Trees & Graphs", "Hashing", "Complexity Analysis"],
      importance: "Core building blocks for state space search and graph algorithms.",
      careerApplications: "A* search, graph neural networks, search engines."
    },
    {
      code: "MEA01", name: "Engineering Graphics & CAD", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "2D drafting, 3D computer-aided modeling, and visual representation of engineering components.",
      skillsLearned: ["3D CAD", "Visual Projection", "Spatial Modeling"],
      importance: "Fundamental for 3D computer vision and spatial AI perception.",
      careerApplications: "3D vision pipelines, robotics simulation."
    },
    {
      code: "UBA53", name: "Probabilistic Methods and Linear Algebra", credits: 4, category: "Foundation Maths", semester: 3,
      prerequisites: ["UBA01"], careerDomains: ["Reinforcement Learning & Robotics"], difficulty: "Medium",
      description: "Matrix decompositions, eigenvalues/eigenvectors, SVD, probability spaces, and random variables.",
      skillsLearned: ["SVD & Eigenvalues", "Linear Transformations", "Bayesian Probability"],
      importance: "The mathematical cornerstone of machine learning and dimensionality reduction.",
      careerApplications: "PCA, deep learning optimization, latent space models."
    },
    {
      code: "CSA08", name: "Python for Data Science & AI", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: ["CSA07"], careerDomains: ["Deep Learning & Generative AI", "Computer Vision & Perception"], difficulty: "Medium",
      description: "Advanced Python, NumPy, Pandas, Matplotlib, SciPy, and vectorization techniques.",
      skillsLearned: ["NumPy", "Pandas", "Vectorized Computing"],
      importance: "Industry standard environment for AI development and data preprocessing.",
      careerApplications: "Data pipelines, AI experimentation, rapid prototyping."
    },
    {
      code: "CSA04", name: "Operating Systems", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["CSA02"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Concurrency, synchronization, process scheduling, memory virtualization, and GPU management.",
      skillsLearned: ["Concurrency", "Virtual Memory", "Resource Management"],
      importance: "Essential for training large models across distributed multi-GPU nodes.",
      careerApplications: "Distributed model training, cluster orchestration."
    },
    {
      code: "CSA05", name: "Database Management Systems", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["CSA03"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Relational schemas, SQL queries, normalization, ACID transactions, and indexing.",
      skillsLearned: ["SQL", "Data Modeling", "Indexing"],
      importance: "Forms the storage substrate for datasets and feature stores.",
      careerApplications: "Feature stores, big data analytics, data warehouses."
    },
    {
      code: "ITA04", name: "Statistics with R Programming", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Exploratory data analysis, hypothesis testing, ANOVA, linear regression, and R statistical packages.",
      skillsLearned: ["Statistical Inference", "Hypothesis Testing", "R Scripting"],
      importance: "Provides empirical validation and statistical confidence for machine learning experiments.",
      careerApplications: "Clinical AI trials, A/B testing, empirical benchmarking."
    },
    {
      code: "ECA47", name: "Principles of Digital System Design", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: ["EEA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Combinational and sequential circuits, finite state machines, and hardware description.",
      skillsLearned: ["Digital Logic", "State Machines", "Verilog Basics"],
      importance: "Foundational for neuromorphic and AI hardware accelerator architectures.",
      careerApplications: "AI accelerators, neuromorphic chips."
    },
    {
      code: "UBA10", name: "Numerical Methods & Optimization", credits: 4, category: "Foundation Maths", semester: 4,
      prerequisites: ["UBA06"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Gradient descent variants, constrained optimization, Lagrange multipliers, and convex sets.",
      skillsLearned: ["Convex Optimization", "Gradient Descent", "Numerical Stability"],
      importance: "Direct theoretical engine driving machine learning loss convergence.",
      careerApplications: "Model loss minimization, constrained training, hyperparameter tuning."
    },
    {
      code: "CSA06", name: "Design and Analysis of Algorithms", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CSA03"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Divide-and-conquer, greedy approaches, dynamic programming, NP-completeness, and graph algorithms.",
      skillsLearned: ["Algorithm Design", "Dynamic Programming", "Graph Search"],
      importance: "Critical for scalable algorithmic problem solving and heuristic search.",
      careerApplications: "Path planning, recommendation graph traversal."
    },
    {
      code: "MLA02", name: "Fundamentals of Machine Learning", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["UBA53", "CSA08"], careerDomains: ["Deep Learning & Generative AI", "Reinforcement Learning & Robotics"], difficulty: "Hard",
      description: "Supervised learning, linear/logistic regression, SVM, decision trees, ensemble methods, and bias-variance tradeoff.",
      skillsLearned: ["Supervised Learning", "Support Vector Machines", "Model Evaluation"],
      importance: "Core theoretical and practical gateway into the entire machine learning discipline.",
      careerApplications: "Predictive modeling, classification, scoring engines."
    },
    {
      code: "CSA07_NET", name: "Computer Networks", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CSA04"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "TCP/IP architecture, socket communication, congestion control, and secure protocols.",
      skillsLearned: ["Socket Programming", "TCP/IP Protocols", "Network Architecture"],
      importance: "Underlies distributed parameter servers and federated model updates.",
      careerApplications: "Federated learning, edge IoT communication."
    },
    {
      code: "CSA10", name: "Software Engineering & MLOps", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CSA03"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Software life cycle, Agile methodologies, CI/CD, model versioning, and reproducible experiments.",
      skillsLearned: ["MLOps Pipelines", "Agile Development", "Model Registry"],
      importance: "Ensures that AI research models can be reliably deployed into live production systems.",
      careerApplications: "MLOps engineering, production model serving."
    },
    {
      code: "CSA12", name: "Computer Architecture", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["ECA47"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Instruction set architecture, memory hierarchies, pipelining, and vector SIMD processing.",
      skillsLearned: ["SIMD Processing", "Memory Hierarchy", "Pipelining"],
      importance: "Essential for profiling tensor calculations and memory bandwidth bottlenecks.",
      careerApplications: "Tensor processing optimization, GPU kernel engineering."
    },
    {
      code: "MLA01", name: "Artificial Intelligence and Expert Systems", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["CSA06"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "State space search, adversarial game search, constraint satisfaction, and ontology design.",
      skillsLearned: ["Heuristic Search", "Adversarial Search", "Knowledge Representation"],
      importance: "Foundational classical AI algorithms that complement modern deep learning models.",
      careerApplications: "Game engines, automated planning, reasoning systems."
    },
    {
      code: "MLA04", name: "Deep Learning & Neural Networks", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["MLA02"], careerDomains: ["Deep Learning & Generative AI", "Computer Vision & Perception", "NLP & Language Technologies"], difficulty: "Hard",
      description: "Feedforward networks, backpropagation, CNNs, RNNs, LSTMs, and PyTorch implementations.",
      skillsLearned: ["PyTorch", "Backpropagation", "Deep Architectures"],
      importance: "The definitive technology powering contemporary perceptual AI applications.",
      careerApplications: "Autonomous vehicles, voice assistants, automated diagnostics."
    },
    {
      code: "CSA16", name: "Data Warehousing and Data Mining", credits: 4, category: "Professional Elective", semester: 5,
      prerequisites: ["CSA05"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "OLAP cubes, ETL pipelines, clustering, association rules, and anomaly detection.",
      skillsLearned: ["ETL", "Clustering", "Anomaly Detection"],
      importance: "Prepares enterprise feature pipelines for training and operational inference.",
      careerApplications: "Fraud detection, customer segmentation."
    },
    {
      code: "MLA03", name: "Reinforcement Learning & Decision Systems", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["MLA02"], careerDomains: ["Reinforcement Learning & Robotics"], difficulty: "Hard",
      description: "Markov Decision Processes, Bellman equations, Q-learning, Policy Gradients, Actor-Critic, and PPO.",
      skillsLearned: ["MDPs", "Policy Gradients", "Q-Learning"],
      importance: "Core technique for autonomous game playing, robotics manipulation, and RLHF alignment.",
      careerApplications: "RLHF for LLMs, robotics control, automated trading."
    },
    {
      code: "CSA14", name: "Compiler Design for AI Accelerators", credits: 4, category: "Professional Elective", semester: 5,
      prerequisites: ["CSA12"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Intermediate representations, graph compilers (XLA, TVM), loop tiling, and hardware target mapping.",
      skillsLearned: ["XLA / TVM", "Graph IRs", "Kernel Fusion"],
      importance: "Optimizes high-level neural network graphs for specialized tensor accelerators.",
      careerApplications: "AI compiler engineering, edge model deployment."
    },
    {
      code: "CSA15", name: "Cloud Computing and Distributed AI", credits: 4, category: "Professional Elective", semester: 5,
      prerequisites: ["CSA07_NET"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Distributed training, Ray framework, Horovod, Kubernetes, and cloud storage systems.",
      skillsLearned: ["Ray Framework", "Distributed Training", "Cloud AI APIs"],
      importance: "Enables multi-GPU and multi-node scaling for foundation model pretraining.",
      careerApplications: "Large model training, distributed computing."
    },
    {
      code: "ITA05", name: "Computer Vision & Visual Perception", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["MLA04"], careerDomains: ["Computer Vision & Perception"], difficulty: "Hard",
      description: "Convolutional feature extraction, YOLO object detection, image segmentation, and 3D visual reconstruction.",
      skillsLearned: ["YOLO Detection", "Image Segmentation", "OpenCV"],
      importance: "Empowers machines to understand, segment, and interpret visual scenes in real time.",
      careerApplications: "Self-driving cars, medical radiology, robotic picking."
    },
    {
      code: "DSA03", name: "Natural Language Processing", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["MLA04"], careerDomains: ["NLP & Language Technologies"], difficulty: "Hard",
      description: "Tokenization, word embeddings (Word2Vec), Transformer attention, BERT, and syntactic parsing.",
      skillsLearned: ["Transformers", "Attention Mechanisms", "Hugging Face"],
      importance: "Core discipline enabling computers to process, understand, and generate human languages.",
      careerApplications: "Chatbots, translation engines, legal document review."
    },
    {
      code: "MLA05", name: "Speech Processing & Audio AI", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["MLA04"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Acoustic modeling, Mel-spectrograms, automatic speech recognition (Whisper), and text-to-speech synthesis.",
      skillsLearned: ["Spectrogram Processing", "ASR Models", "TTS Synthesis"],
      importance: "Essential for seamless voice user interfaces and auditory sensory perception.",
      careerApplications: "Voice assistants, automated transcription, speech translation."
    },
    {
      code: "MLA06", name: "Autonomous Robotics & Edge AI", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["MLA03"], careerDomains: ["Reinforcement Learning & Robotics"], difficulty: "Hard",
      description: "Robot Operating System (ROS), SLAM, sensor fusion, and real-time edge model quantization.",
      skillsLearned: ["ROS", "SLAM", "Edge Quantization"],
      importance: "Connects intelligent perception algorithms with physical robotic manipulators and vehicles.",
      careerApplications: "Autonomous mobile robots, warehouse automation, drone delivery."
    },
    {
      code: "ITA06", name: "Applied Machine Learning & AutoML", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["MLA02"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Hyperparameter optimization, feature engineering pipelines, model explainability (SHAP, LIME), and ensemble blending.",
      skillsLearned: ["Feature Engineering", "SHAP / LIME", "Ensemble Methods"],
      importance: "Delivers production-ready interpretability and top-tier predictive accuracy in business deployments.",
      careerApplications: "Credit scoring, predictive analytics, algorithmic pricing."
    },
    {
      code: "CSA43", name: "Full Stack AI Web Applications", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["CSA08"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "FastAPI, asynchronous backend architectures, React UI, WebSockets, and streaming model responses.",
      skillsLearned: ["FastAPI", "React AI UI", "Streaming APIs"],
      importance: "Allows AI engineers to wrap models into fully interactive commercial web applications.",
      careerApplications: "AI SaaS products, enterprise analytics dashboards."
    },
    {
      code: "CSA65", name: "Generative AI & Large Language Models", credits: 4, category: "Professional Core", semester: 7,
      prerequisites: ["DSA03"], careerDomains: ["Deep Learning & Generative AI", "NLP & Language Technologies"], difficulty: "Hard",
      description: "Decoder-only transformers, prompt engineering, fine-tuning with LoRA/QLoRA, RAG systems, and vector databases.",
      skillsLearned: ["LLM Fine-Tuning", "Vector Databases", "RAG Architecture"],
      importance: "Frontier technology transforming creative synthesis, software coding, and cognitive reasoning.",
      careerApplications: "AI copilot systems, knowledge assistants, synthetic content creation."
    },
    {
      code: "MLA07", name: "AI Ethics, Safety & Explainability", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["MLA02"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Algorithmic fairness, bias mitigation, red-teaming, adversarial robustness, and regulatory AI compliance.",
      skillsLearned: ["Model Red-Teaming", "Fairness Auditing", "Safety Alignment"],
      importance: "Ensures artificial intelligence systems behave safely, equitably, and ethically in society.",
      careerApplications: "AI governance, safety alignment engineering, compliance auditing."
    },
    {
      code: "MLA08", name: "AI in Healthcare and Biomedicine", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["MLA04"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Medical imaging analysis, protein folding prediction (AlphaFold), electronic health records mining, and drug discovery.",
      skillsLearned: ["Biomedical AI", "Medical Imaging", "Genomic Modeling"],
      importance: "Pioneers computational breakthroughs in disease diagnosis, personalized therapy, and pharmaceutical research.",
      careerApplications: "Diagnostic radiology AI, pharmaceutical R&D, clinical prediction."
    },
    {
      code: "MLA09", name: "Time Series Modeling & Financial AI", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["MLA02"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "ARIMA, Prophet, Temporal Fusion Transformers, volatility modeling, and high-frequency market forecasting.",
      skillsLearned: ["Temporal Transformers", "Volatility Modeling", "Time Series Forecasting"],
      importance: "Applies sequence modeling to quantitative finance, energy grid forecasting, and supply chains.",
      careerApplications: "Quantitative hedge funds, demand forecasting, power grid management."
    },
    {
      code: "MLA10", name: "Graph Neural Networks & Geometric Deep Learning", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["MLA04"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Graph convolutions (GCN, GAT), molecular graph representations, link prediction, and non-Euclidean manifold learning.",
      skillsLearned: ["PyTorch Geometric", "Graph Convolutions", "Manifold Learning"],
      importance: "Extends deep learning to non-grid relational structures like molecular chemistry and social graphs.",
      careerApplications: "Drug molecular design, fraud networks, recommendation systems."
    },
    {
      code: "MLA71", name: "Capstone Project Phase - I", credits: 4, category: "Capstone & Project", semester: 7,
      prerequisites: ["MLA04"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "AI problem formulation, benchmark dataset curation, architecture design, baseline modeling, and milestone defense.",
      skillsLearned: ["AI System Architecture", "Data Curation", "Project Management"],
      importance: "Validates the capability to formulate and architect an original, end-to-end intelligent system.",
      careerApplications: "Applied AI product launch, research paper prototype."
    },
    {
      code: "MLA72", name: "Capstone Project Phase - II", credits: 4, category: "Capstone & Project", semester: 8,
      prerequisites: ["MLA71"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "End-to-end model optimization, ablation studies, production deployment, latency benchmarking, and final defense.",
      skillsLearned: ["Model Deployment", "Ablation Studies", "Technical Defense"],
      importance: "Culmination of undergraduate training showcasing mastery of production-grade AI system delivery.",
      careerApplications: "Commercial AI deployment, open-source framework, patent application."
    },
    {
      code: "MLA73", name: "Industry Internship & AI Practicum", credits: 4, category: "Capstone & Project", semester: 8,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Full-semester immersion in an AI research laboratory or high-growth machine learning enterprise team.",
      skillsLearned: ["Production AI Pipelines", "Corporate Research", "Industry Best Practices"],
      importance: "Bridges academic research with large-scale industrial commercial applications.",
      careerApplications: "Full-time machine learning engineering, enterprise AI research."
    },
    {
      code: "MLA11", name: "Federated Learning & Privacy-Preserving AI", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["MLA04"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Differential privacy, secure multi-party computation, homomorphic encryption, and decentralized aggregation.",
      skillsLearned: ["Differential Privacy", "Federated Optimization", "Cryptographic AI"],
      importance: "Protects sensitive user privacy during collaborative model training across consumer edge devices.",
      careerApplications: "Smartphone on-device AI, banking consortiums, healthcare analytics."
    },
    {
      code: "MLA12", name: "Diffusion Models & Creative AI", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["MLA04"], careerDomains: ["Deep Learning & Generative AI", "Computer Vision & Perception"], difficulty: "Hard",
      description: "Denoising diffusion probabilistic models (DDPM), score-based matching, Stable Diffusion, and neural radiance fields (NeRF).",
      skillsLearned: ["Diffusion Mathematics", "Score-Based Models", "NeRF 3D Reconstruction"],
      importance: "The cutting-edge generative paradigm driving photorealistic image synthesis, 3D modeling, and video generation.",
      careerApplications: "Synthetic media, game asset generation, visual VFX."
    },
    {
      code: "MLA13", name: "Neuromorphic Computing & Spiking Neural Networks", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["UBA53"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Biological neuron models (Hodgkin-Huxley), leaky integrate-and-fire, event-based vision, and ultra-low-power neuromorphic chips.",
      skillsLearned: ["Spiking Networks", "Event-Based Processing", "Low-Power AI"],
      importance: "Explores ultra-low-power brain-inspired architectures for future edge computing systems.",
      careerApplications: "Neuromorphic chip engineering, space robotics, event sensors."
    },
    {
      code: "ECA68", name: "Engineering Economics & Intellectual Property", credits: 4, category: "Humanities & Management", semester: 8,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Lifecycle cost analysis, return on investment, engineering project appraisal, patent landscape mapping, and commercialization.",
      skillsLearned: ["Cost-Benefit Modeling", "Patent Landscaping", "Tech Entrepreneurship"],
      importance: "Equips graduating engineers to evaluate the commercial viability and financial returns of technological innovations.",
      careerApplications: "Engineering management, technology consulting, venture capital."
    }
  ],
  // ── AIDS (AI & Data Science) — 48 Courses (192 Credits) ──
  AIDS: [
    {
      code: "UBA01", name: "Engineering Mathematics - I", credits: 4, category: "Foundation Maths", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Differential and integral calculus, matrix algebra, and linear transformations for engineering systems.",
      skillsLearned: ["Matrices", "Differential Calculus", "Integral Calculus"],
      importance: "Essential mathematical foundation for all engineering analysis.",
      careerApplications: "Algorithmic modeling, scientific computing."
    },
    {
      code: "UBA48", name: "Engineering Physics", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Quantum mechanics, solid-state band theory, laser optics, and fiber optic wave guidance.",
      skillsLearned: ["Quantum Principles", "Optics & Lasers", "Semiconductor Basics"],
      importance: "Explains underlying physical phenomena governing semiconductor chips and optical communication.",
      careerApplications: "Photonics, optoelectronics, semiconductor research."
    },
    {
      code: "UBA49", name: "Engineering Chemistry", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Electrochemical cells, corrosion mitigation, battery technologies, and polymer materials.",
      skillsLearned: ["Electrochemistry", "Corrosion Prevention", "Polymers"],
      importance: "Essential for battery energy storage, chip fabrication chemistry, and materials.",
      careerApplications: "Battery manufacturing, microelectronics packaging."
    },
    {
      code: "UBA28", name: "Professional Ethics and Legal Practices", credits: 4, category: "Humanities & Management", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Engineering ethics, intellectual property rights, environmental regulations, and corporate compliance.",
      skillsLearned: ["Engineering Ethics", "IP & Patents", "Regulatory Compliance"],
      importance: "Instills ethical decision-making and patent protection awareness for engineering leadership.",
      careerApplications: "Patent filing, engineering law, corporate governance."
    },
    {
      code: "BTA01", name: "Biology and Environmental Science for Engineers", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Cellular biology, bio-inspired engineering, ecosystem sustainability, and environmental impact assessment.",
      skillsLearned: ["Bio-inspired Design", "Environmental Analysis", "Sustainability"],
      importance: "Provides foundation for green technologies, wearable bio-sensors, and eco-friendly devices.",
      careerApplications: "Biomedical sensors, sustainable hardware development."
    },
    {
      code: "CSA07", name: "Problem Solving using C", credits: 4, category: "Engineering Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Structured procedural programming, memory pointers, dynamic allocation, bitwise operations, and file I/O in C.",
      skillsLearned: ["C Programming", "Pointers & Memory", "Modular Design"],
      importance: "Low-level system programming capability essential for firmware and hardware-level driver development.",
      careerApplications: "Embedded firmware, microcontroller programming."
    },
    {
      code: "UBA04", name: "Discrete Mathematics", credits: 4, category: "Foundation Maths", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Logic, set theory, combinatorics, relations, graph theory, and discrete probability.",
      skillsLearned: ["Logic", "Graph Algorithms", "Combinatorics"],
      importance: "Essential for graph-based databases and structural data modeling.",
      careerApplications: "Knowledge graphs, data indexing."
    },
    {
      code: "UBA06", name: "Applied Mathematics", credits: 4, category: "Foundation Maths", semester: 2,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Linear transformations, multivariate calculus, and differential equations.",
      skillsLearned: ["Multivariate Calculus", "Transform Calculus", "Differential Models"],
      importance: "Provides the mathematical basis for multi-dimensional data optimization.",
      careerApplications: "Data transformation, statistical physics, gradient modeling."
    },
    {
      code: "EEA01", name: "Basic Electrical and Electronics Engineering", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Circuit analysis, AC/DC basics, electronic devices, and measurement instruments.",
      skillsLearned: ["Circuits", "Sensors", "Instrumentation"],
      importance: "Foundational for IoT sensor data acquisition systems.",
      careerApplications: "Sensor networks, IoT data logging."
    },
    {
      code: "CSA02", name: "Advanced C Programming", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: ["CSA07"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Memory pointers, dynamic memory management, file structures, and algorithmic efficiency.",
      skillsLearned: ["Dynamic Memory", "Pointer Arithmetic", "Algorithmic Efficiency"],
      importance: "Fundamental for understanding memory performance in data processing engines.",
      careerApplications: "Database engines, data pipelines."
    },
    {
      code: "CSA03", name: "Data Structures", credits: 4, category: "Professional Core", semester: 2,
      prerequisites: ["CSA07"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Stacks, queues, trees, heaps, graphs, hashing, and complexity analysis.",
      skillsLearned: ["Trees", "Hash Tables", "Graph Traversals"],
      importance: "Critical for indexing and querying large-scale structured records.",
      careerApplications: "Search indexing, in-memory caches, graph queries."
    },
    {
      code: "MEA01", name: "Engineering Graphics & CAD", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Technical visualization, 2D drafting, and computer-aided 3D modeling.",
      skillsLearned: ["CAD Visualization", "3D Projection", "Spatial Drafting"],
      importance: "Supports 3D spatial data visualization and geographic information modeling.",
      careerApplications: "Spatial data visualization, digital twins."
    },
    {
      code: "UBA53", name: "Probabilistic Methods and Linear Algebra", credits: 4, category: "Foundation Maths", semester: 3,
      prerequisites: ["UBA01"], careerDomains: ["Predictive Analytics & Machine Learning"], difficulty: "Medium",
      description: "Vector spaces, matrix decompositions, eigenvalues, Bayesian probability, and covariance matrices.",
      skillsLearned: ["Matrix Decomposition", "Bayesian Inference", "Covariance Analysis"],
      importance: "The foundation for principal component analysis, linear models, and probabilistic graphical models.",
      careerApplications: "Dimensionality reduction, risk modeling, statistical estimation."
    },
    {
      code: "CSA08", name: "Python for Data Science", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: ["CSA07"], careerDomains: ["Predictive Analytics & Machine Learning", "Deep Learning & Applied NLP"], difficulty: "Medium",
      description: "Advanced Python programming, NumPy, Pandas, Matplotlib, and data wrangling workflows.",
      skillsLearned: ["Data Wrangling", "Pandas & NumPy", "Exploratory Analysis"],
      importance: "The primary operational toolkit for modern data scientists and analysts.",
      careerApplications: "Data cleaning, feature engineering, statistical reporting."
    },
    {
      code: "CSA04", name: "Operating Systems", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["CSA02"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Process scheduling, thread concurrency, virtual memory, and distributed storage abstractions.",
      skillsLearned: ["Concurrency", "Virtual Memory", "I/O Management"],
      importance: "Underlies scalable multi-threaded and cluster data execution environments.",
      careerApplications: "Cluster computing, high-performance data processing."
    },
    {
      code: "CSA05", name: "Database Management Systems", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["CSA03"], careerDomains: ["Big Data Engineering & Cloud", "Business Intelligence & Visualization"], difficulty: "Medium",
      description: "Relational schema design, advanced SQL queries, normal forms, transaction ACID properties, and indexing.",
      skillsLearned: ["Advanced SQL", "Relational Normalization", "Query Optimization"],
      importance: "Universal foundational persistence layer for structured enterprise data.",
      careerApplications: "Data warehouses, transaction logging, relational reporting."
    },
    {
      code: "DSA01", name: "Object Oriented Programming with C++", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: ["CSA02"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Classes, polymorphism, templates, standard template library (STL), and modern C++ memory management.",
      skillsLearned: ["C++ STL", "Polymorphism", "Memory Management"],
      importance: "Essential for building high-performance low-latency data crunching engines.",
      careerApplications: "Data engine internals, high-frequency data pipelines."
    },
    {
      code: "ECA47", name: "Principles of Digital System Design", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: ["EEA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Digital logic, boolean algebra, registers, counters, and digital system integration.",
      skillsLearned: ["Digital Logic", "Registers", "Boolean Optimization"],
      importance: "Foundational for understanding computer hardware and GPU accelerator data paths.",
      careerApplications: "Hardware data paths, accelerator interfacing."
    },
    {
      code: "UBA10", name: "Numerical Methods & Optimization", credits: 4, category: "Foundation Maths", semester: 4,
      prerequisites: ["UBA06"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Roots of equations, numerical linear algebra, interpolation, and gradient-based optimization.",
      skillsLearned: ["Numerical Linear Algebra", "Optimization Algorithms", "Interpolation"],
      importance: "Powers optimization routines in regression and statistical machine learning.",
      careerApplications: "Parameter estimation, curve fitting, statistical simulation."
    },
    {
      code: "CSA06", name: "Design and Analysis of Algorithms", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CSA03"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Divide-and-conquer, dynamic programming, graph algorithms, greedy heuristics, and complexity classes.",
      skillsLearned: ["Dynamic Programming", "Graph Optimization", "Complexity Classes"],
      importance: "Critical for writing highly scalable data processing pipelines and algorithmic models.",
      careerApplications: "Big data sorting, graph analytics, recommendation algorithms."
    },
    {
      code: "DSA04", name: "Fundamentals of Data Science", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["UBA53", "CSA08"], careerDomains: ["Predictive Analytics & Machine Learning", "Business Intelligence & Visualization"], difficulty: "Medium",
      description: "Data lifecycle, exploratory data analysis, hypothesis formulation, feature extraction, and ethical data handling.",
      skillsLearned: ["Exploratory Data Analysis", "Feature Extraction", "Data Storytelling"],
      importance: "Synthesizes mathematics, computer science, and domain context into structured data insight.",
      careerApplications: "Business analytics, market intelligence, policy research."
    },
    {
      code: "CSA07_NET", name: "Computer Networks", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CSA04"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "TCP/IP architecture, socket programming, packet routing, and network protocol design.",
      skillsLearned: ["TCP/IP Protocols", "Socket Programming", "Network Routing"],
      importance: "Connects distributed data servers and real-time streaming pipelines.",
      careerApplications: "Distributed data streaming, REST API communication."
    },
    {
      code: "CSA10", name: "Software Engineering & Data Ops", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CSA03"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Agile methodologies, testing, version control, CI/CD, and data pipeline automation.",
      skillsLearned: ["Data Pipeline CI/CD", "Agile Methods", "Version Control"],
      importance: "Ensures that data engineering code is maintainable, tested, and reliable.",
      careerApplications: "DataOps engineering, automated pipeline deployment."
    },
    {
      code: "CSA12", name: "Computer Architecture & Parallel Computing", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["ECA47"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Instruction sets, cache architectures, multithreading, and multi-core parallel memory organization.",
      skillsLearned: ["Cache Optimization", "Multi-core Parallelism", "SIMD Architectures"],
      importance: "Critical for maximizing throughput during large-scale in-memory data processing.",
      careerApplications: "In-memory database optimization, GPU analytics."
    },
    {
      code: "DSA05", name: "Query Processing and Big Data Storage", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["CSA05"], careerDomains: ["Big Data Engineering & Cloud"], difficulty: "Hard",
      description: "Query execution plans, cost-based optimizers, columnar storage (Parquet, ORC), and NoSQL architectures.",
      skillsLearned: ["Query Plan Optimization", "Columnar Storage", "NoSQL Systems"],
      importance: "Essential for architecting multi-terabyte analytical databases and modern data lakes.",
      careerApplications: "Data lake engineering, analytical query optimization."
    },
    {
      code: "DSA06", name: "Data Handling and Visualization", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["CSA08"], careerDomains: ["Business Intelligence & Visualization"], difficulty: "Medium",
      description: "Interactive dashboard design, D3.js, Tableau, Seaborn, and visual perceptual encoding principles.",
      skillsLearned: ["Interactive Dashboards", "Visual Perception", "Data Communication"],
      importance: "Transforms complex multivariate numerical findings into intuitive executive insights.",
      careerApplications: "Executive dashboards, BI reports, financial visualizations."
    },
    {
      code: "ITA06", name: "Machine Learning for Data Science", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["DSA04"], careerDomains: ["Predictive Analytics & Machine Learning", "Deep Learning & Applied NLP"], difficulty: "Hard",
      description: "Supervised learning, regression models, classification trees, random forests, boosting, and model diagnostics.",
      skillsLearned: ["Ensemble Methods", "Model Diagnostics", "Predictive Analytics"],
      importance: "Core predictive analytics workhorse extracting patterns and foresight from historical data.",
      careerApplications: "Churn prediction, sales forecasting, risk scoring."
    },
    {
      code: "CSA15", name: "Big Data Analytics & Cloud Platforms", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["CSA07_NET"], careerDomains: ["Big Data Engineering & Cloud"], difficulty: "Medium",
      description: "Apache Hadoop, Spark distributed computation, AWS EMR, cloud object storage, and serverless queries.",
      skillsLearned: ["Apache Spark", "Cloud Data Lakes", "Distributed Computation"],
      importance: "Industry standard technology for managing and computing across petabyte-scale data lakes.",
      careerApplications: "Enterprise big data pipelines, cloud analytics platforms."
    },
    {
      code: "CSA16", name: "Data Warehousing and Data Mining", credits: 4, category: "Professional Elective", semester: 5,
      prerequisites: ["CSA05"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Dimensional modeling, star schemas, OLAP cubes, association rule mining, and clustering algorithms.",
      skillsLearned: ["Dimensional Modeling", "OLAP Cubes", "Association Mining"],
      importance: "Provides the structural backbone for enterprise corporate intelligence and historical reporting.",
      careerApplications: "Data warehouse architecture, BI analytics."
    },
    {
      code: "CSA17", name: "Artificial Intelligence", credits: 4, category: "Professional Elective", semester: 5,
      prerequisites: ["CSA08"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Heuristic search, constraint satisfaction, probabilistic reasoning, and automated planning.",
      skillsLearned: ["Heuristic Search", "Probabilistic Reasoning", "Knowledge Representation"],
      importance: "Complements statistical approaches with symbolic logic and heuristic decision algorithms.",
      careerApplications: "Intelligent search, recommendation agents, constraint solving."
    },
    {
      code: "DSA02", name: "Computer Vision with OpenCV", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["CSA08"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Image filtering, morphological operations, contour detection, feature matching, and optical character recognition.",
      skillsLearned: ["OpenCV", "Feature Extraction", "OCR Pipelines"],
      importance: "Enables extraction of structured insights from unstructured image and video datasets.",
      careerApplications: "Document parsing, visual inspection, video telemetry."
    },
    {
      code: "DSA03", name: "Natural Language Processing", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["ITA06"], careerDomains: ["Deep Learning & Applied NLP"], difficulty: "Hard",
      description: "Text tokenization, sentiment analysis, named entity recognition, topic modeling (LDA), and transformer models.",
      skillsLearned: ["Transformer NLP", "Topic Modeling", "Sentiment Analysis"],
      importance: "Unlocks value from massive corpora of unstructured human text, reviews, and clinical notes.",
      careerApplications: "Customer sentiment analysis, document search, text mining."
    },
    {
      code: "CSA47", name: "Deep Learning for Data Analytics", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["ITA06"], careerDomains: ["Deep Learning & Applied NLP"], difficulty: "Hard",
      description: "Multi-layer perceptrons, convolutional networks, recurrent architectures, autoencoders, and PyTorch.",
      skillsLearned: ["PyTorch", "Deep Autoencoders", "Sequence Modeling"],
      importance: "Unveils deep hierarchical feature representations across multi-modal unstructured data.",
      careerApplications: "Fraud detection, multimodal analytics, anomaly recognition."
    },
    {
      code: "DSA07", name: "Statistical Inference & A/B Testing", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["UBA53"], careerDomains: ["Predictive Analytics & Machine Learning"], difficulty: "Medium",
      description: "Null hypothesis testing, p-values, confidence intervals, power analysis, A/B experimentation, and causal inference.",
      skillsLearned: ["A/B Testing", "Causal Inference", "Power Analysis"],
      importance: "The definitive scientific gold standard for evaluating product changes and business decisions.",
      careerApplications: "Conversion rate optimization, clinical trials, product experiments."
    },
    {
      code: "DSA08", name: "Business Intelligence & Enterprise Analytics", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["DSA06"], careerDomains: ["Business Intelligence & Visualization"], difficulty: "Easy",
      description: "KPI metric design, automated reporting workflows, data-driven strategy formulation, and executive presentation.",
      skillsLearned: ["KPI Design", "Enterprise Reporting", "Strategic Decision Making"],
      importance: "Connects technical data models with senior executive strategic decision-making.",
      careerApplications: "Corporate finance, operations analytics, marketing science."
    },
    {
      code: "CSA43", name: "Web Applications for Data Science", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["CSA08"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Streamlit, Dash, FastAPI, REST services, and responsive web user interfaces for data applications.",
      skillsLearned: ["Streamlit", "FastAPI", "Web Dashboards"],
      importance: "Allows rapid deployment of data analytics tools into user-friendly interactive web apps.",
      careerApplications: "Internal data tools, client dashboards, interactive prototypes."
    },
    {
      code: "DSA09", name: "Big Data Streaming with Spark & Kafka", credits: 4, category: "Professional Core", semester: 7,
      prerequisites: ["CSA15"], careerDomains: ["Big Data Engineering & Cloud"], difficulty: "Hard",
      description: "Event streaming architectures, Apache Kafka message brokers, Spark Structured Streaming, and low-latency metrics.",
      skillsLearned: ["Apache Kafka", "Streaming Analytics", "Low-Latency Data"],
      importance: "Processes high-velocity live telemetry feeds in milliseconds for real-time responsiveness.",
      careerApplications: "Live fraud monitoring, IoT telemetry, real-time ad bidding."
    },
    {
      code: "DSA10", name: "Data Governance, Ethics & MLOps", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["ITA06"], careerDomains: ["Big Data Engineering & Cloud"], difficulty: "Medium",
      description: "GDPR compliance, data lineage, metadata catalogs, model drift monitoring, and automated feature stores.",
      skillsLearned: ["Data Lineage", "GDPR Compliance", "Model Drift Tracking"],
      importance: "Ensures regulatory compliance, data security, and long-term production model reliability.",
      careerApplications: "Data governance, compliance auditing, MLOps engineering."
    },
    {
      code: "DSA11", name: "Predictive Financial Analytics", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["ITA06"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Algorithmic risk modeling, credit default scoring, portfolio optimization, and high-frequency trading data.",
      skillsLearned: ["Credit Risk Modeling", "Portfolio Optimization", "Quantitative Finance"],
      importance: "Applies advanced statistical analytics to capital markets, risk management, and investments.",
      careerApplications: "Quantitative hedge funds, credit rating agencies, fintech platforms."
    },
    {
      code: "DSA12", name: "Spatial & Geospatial Data Analytics", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["DSA04"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Geographic information systems (GIS), GeoPandas, spatial clustering, satellite telemetry, and map overlays.",
      skillsLearned: ["GeoPandas", "Spatial Clustering", "GIS Mapping"],
      importance: "Unlocks location intelligence for urban planning, logistics optimization, and climate studies.",
      careerApplications: "Logistics fleet routing, urban planning, disaster monitoring."
    },
    {
      code: "CSA65", name: "Generative AI and Large-Scale Data Models", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["CSA47"], careerDomains: ["Deep Learning & Applied NLP"], difficulty: "Hard",
      description: "Transformers, text generation, vector embeddings, semantic search, and synthetic data generation.",
      skillsLearned: ["Vector Databases", "Semantic Search", "Synthetic Data Generation"],
      importance: "Leverages generative models to synthesize data, automate reporting, and power semantic discovery.",
      careerApplications: "Enterprise search, automated report generation, synthetic datasets."
    },
    {
      code: "DSA71", name: "Capstone Project Phase - I", credits: 4, category: "Capstone & Project", semester: 7,
      prerequisites: ["DSA04"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Data science problem formulation, raw data extraction, exploratory modeling, baseline verification, and milestone defense.",
      skillsLearned: ["Project Architecture", "Data Pipeline Design", "Technical Scoping"],
      importance: "Validates ability to design and implement an end-to-end data product solving real-world challenges.",
      careerApplications: "Data product MVP, scientific research publication, commercial prototype."
    },
    {
      code: "DSA72", name: "Capstone Project Phase - II", credits: 4, category: "Capstone & Project", semester: 8,
      prerequisites: ["DSA71"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Full pipeline deployment, dashboard integration, model monitoring, statistical evaluation, and committee defense.",
      skillsLearned: ["Production Data Pipeline", "Model Monitoring", "Technical Defense"],
      importance: "Culmination of data science undergraduate study delivering a validated, production-ready system.",
      careerApplications: "Commercial data product, open source platform, patent application."
    },
    {
      code: "DSA73", name: "Industry Internship & Data Practicum", credits: 4, category: "Capstone & Project", semester: 8,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Full-semester immersion in an enterprise data analytics or data science team.",
      skillsLearned: ["Enterprise Data Stacks", "Corporate Collaboration", "Agile Analytics"],
      importance: "Bridges academic preparation with high-impact corporate commercial data decision workflows.",
      careerApplications: "Full-time data scientist, analytics consultant, big data engineer."
    },
    {
      code: "DSA14", name: "Healthcare Analytics & Clinical Informatics", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["DSA04"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Electronic health records analysis, epidemiological modeling, survival analysis, and clinical predictive indicators.",
      skillsLearned: ["Survival Analysis", "EHR Mining", "Clinical Predictive Modeling"],
      importance: "Applies statistical data science to patient outcome prediction and hospital resource optimization.",
      careerApplications: "Hospital operations, clinical research, health tech analytics."
    },
    {
      code: "DSA15", name: "Recommender Systems & Personalization", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["ITA06"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Collaborative filtering, matrix factorization, two-tower neural architectures, and contextual bandits.",
      skillsLearned: ["Collaborative Filtering", "Matrix Factorization", "Two-Tower Networks"],
      importance: "Drives engagement, discovery, and conversion across digital e-commerce and streaming media.",
      careerApplications: "Streaming media recommendations, e-commerce personalization."
    },
    {
      code: "DSA16", name: "Knowledge Engineering and Data Science", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["DSA05"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Ontology engineering, semantic web (RDF, OWL), graph query languages (SPARQL), and entity resolution.",
      skillsLearned: ["Ontology Engineering", "SPARQL Queries", "Entity Resolution"],
      importance: "Structures fragmented enterprise domain knowledge into unified, machine-interpretable networks.",
      careerApplications: "Enterprise knowledge graphs, semantic search, biomedical ontologies."
    },
    {
      code: "ECA68", name: "Engineering Economics & Intellectual Property", credits: 4, category: "Humanities & Management", semester: 8,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Lifecycle cost analysis, return on investment, engineering project appraisal, patent landscape mapping, and commercialization.",
      skillsLearned: ["Cost-Benefit Modeling", "Patent Landscaping", "Tech Entrepreneurship"],
      importance: "Equips graduating engineers to evaluate the commercial viability and financial returns of technological innovations.",
      careerApplications: "Engineering management, technology consulting, venture capital."
    }
  ],
  // ── IT (Information Technology) — 48 Courses (192 Credits) ──
  IT: [
    {
      code: "UBA01", name: "Engineering Mathematics - I", credits: 4, category: "Foundation Maths", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Differential and integral calculus, matrix algebra, and linear transformations for engineering systems.",
      skillsLearned: ["Matrices", "Differential Calculus", "Integral Calculus"],
      importance: "Essential mathematical foundation for all engineering analysis.",
      careerApplications: "Algorithmic modeling, scientific computing."
    },
    {
      code: "UBA48", name: "Engineering Physics", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Quantum mechanics, solid-state band theory, laser optics, and fiber optic wave guidance.",
      skillsLearned: ["Quantum Principles", "Optics & Lasers", "Semiconductor Basics"],
      importance: "Explains underlying physical phenomena governing semiconductor chips and optical communication.",
      careerApplications: "Photonics, optoelectronics, semiconductor research."
    },
    {
      code: "UBA49", name: "Engineering Chemistry", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Electrochemical cells, corrosion mitigation, battery technologies, and polymer materials.",
      skillsLearned: ["Electrochemistry", "Corrosion Prevention", "Polymers"],
      importance: "Essential for battery energy storage, chip fabrication chemistry, and materials.",
      careerApplications: "Battery manufacturing, microelectronics packaging."
    },
    {
      code: "UBA28", name: "Professional Ethics and Legal Practices", credits: 4, category: "Humanities & Management", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Engineering ethics, intellectual property rights, environmental regulations, and corporate compliance.",
      skillsLearned: ["Engineering Ethics", "IP & Patents", "Regulatory Compliance"],
      importance: "Instills ethical decision-making and patent protection awareness for engineering leadership.",
      careerApplications: "Patent filing, engineering law, corporate governance."
    },
    {
      code: "BTA01", name: "Biology and Environmental Science for Engineers", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Cellular biology, bio-inspired engineering, ecosystem sustainability, and environmental impact assessment.",
      skillsLearned: ["Bio-inspired Design", "Environmental Analysis", "Sustainability"],
      importance: "Provides foundation for green technologies, wearable bio-sensors, and eco-friendly devices.",
      careerApplications: "Biomedical sensors, sustainable hardware development."
    },
    {
      code: "CSA07", name: "Problem Solving using C", credits: 4, category: "Engineering Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Structured procedural programming, memory pointers, dynamic allocation, bitwise operations, and file I/O in C.",
      skillsLearned: ["C Programming", "Pointers & Memory", "Modular Design"],
      importance: "Low-level system programming capability essential for firmware and hardware-level driver development.",
      careerApplications: "Embedded firmware, microcontroller programming."
    },
    {
      code: "UBA04", name: "Discrete Mathematics", credits: 4, category: "Foundation Maths", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Logic, sets, relations, combinatorics, graph theory, and proof techniques.",
      skillsLearned: ["Logic", "Graph Theory", "Combinatorics"],
      importance: "Foundational for network topologies and software logic.",
      careerApplications: "Network routing, software verification."
    },
    {
      code: "UBA06", name: "Applied Mathematics", credits: 4, category: "Foundation Maths", semester: 2,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Calculus, differential equations, and transform techniques.",
      skillsLearned: ["Calculus", "Differential Models", "Transforms"],
      importance: "Mathematical foundation for data analysis and signal processing.",
      careerApplications: "Optimization, data filtering."
    },
    {
      code: "EEA01", name: "Basic Electrical and Electronics Engineering", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Circuits, electronics, sensors, and basic instrumentation.",
      skillsLearned: ["Circuits", "Electronics Basics", "Sensors"],
      importance: "Foundational for IT hardware systems and data centers.",
      careerApplications: "Hardware infrastructure, power backups."
    },
    {
      code: "CSA02", name: "Advanced C Programming", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: ["CSA07"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Pointers, dynamic memory management, file I/O, and low-level system interactions.",
      skillsLearned: ["Pointers", "Memory Management", "File I/O"],
      importance: "Essential for understanding computer systems and memory management.",
      careerApplications: "System utilities, networking tools."
    },
    {
      code: "CSA03", name: "Data Structures", credits: 4, category: "Professional Core", semester: 2,
      prerequisites: ["CSA07"], careerDomains: ["Enterprise Web & Mobile Applications"], difficulty: "Medium",
      description: "Lists, stacks, queues, trees, heaps, graphs, and algorithmic efficiency.",
      skillsLearned: ["Data Structures", "Tree Algorithms", "Complexity"],
      importance: "Core building blocks for efficient software systems.",
      careerApplications: "Database engines, search algorithms."
    },
    {
      code: "MEA01", name: "Engineering Graphics & CAD", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Drafting, orthographic projections, and computer-aided design modeling.",
      skillsLearned: ["Drafting", "CAD Modeling", "Spatial Visualization"],
      importance: "Supports technical documentation and spatial visualization.",
      careerApplications: "Hardware layouts, spatial UI."
    },
    {
      code: "UBA53", name: "Probabilistic Methods and Linear Algebra", credits: 4, category: "Foundation Maths", semester: 3,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Vector spaces, matrices, eigenvalues, probability models, and random variables.",
      skillsLearned: ["Linear Algebra", "Probability", "Eigenvalues"],
      importance: "Mathematical foundation for machine learning and data analytics.",
      careerApplications: "Analytics, recommendation engines."
    },
    {
      code: "CSA08", name: "Python Programming", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: ["CSA07"], careerDomains: ["Data Analytics & Applied AI"], difficulty: "Medium",
      description: "Python development, scripting, data manipulation, and automated testing.",
      skillsLearned: ["Python", "Scripting", "Automation"],
      importance: "Primary scripting tool for DevOps, automation, and data handling.",
      careerApplications: "Automation scripts, cloud tools."
    },
    {
      code: "CSA04", name: "Operating Systems", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["CSA02"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Processes, scheduling, memory virtualization, concurrency, and file systems.",
      skillsLearned: ["Process Management", "Concurrency", "Memory Management"],
      importance: "Core system software managing enterprise server hardware.",
      careerApplications: "Server administration, cloud virtualization."
    },
    {
      code: "CSA05", name: "Database Management Systems", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["CSA03"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Relational schemas, SQL queries, transactions, normalization, and indexing.",
      skillsLearned: ["SQL", "Relational Design", "Transactions"],
      importance: "Data persistence layer for enterprise business applications.",
      careerApplications: "Enterprise databases, CRM systems."
    },
    {
      code: "CSA09", name: "Programming in Java", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: ["CSA07"], careerDomains: ["Enterprise Web & Mobile Applications"], difficulty: "Medium",
      description: "Java OOP, collections, multithreading, exception handling, and JVM architecture.",
      skillsLearned: ["Java OOP", "Multithreading", "Collections"],
      importance: "Dominant programming language for enterprise backends and Android systems.",
      careerApplications: "Enterprise backends, Android apps."
    },
    {
      code: "ECA47", name: "Principles of Digital System Design", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: ["EEA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Digital logic, boolean algebra, registers, counters, and digital circuit synthesis.",
      skillsLearned: ["Digital Logic", "Registers", "Synthesis"],
      importance: "Connects software logic with physical computer hardware.",
      careerApplications: "Computer hardware, system controllers."
    },
    {
      code: "UBA10", name: "Numerical Methods", credits: 4, category: "Foundation Maths", semester: 4,
      prerequisites: ["UBA06"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Root-finding, interpolation, numerical integration, and differential equation solvers.",
      skillsLearned: ["Numerical Analysis", "Interpolation", "Solvers"],
      importance: "Enables algorithmic modeling of continuous processes.",
      careerApplications: "Financial simulations, scientific computing."
    },
    {
      code: "CSA06", name: "Design and Analysis of Algorithms", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CSA03"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Algorithm paradigms, dynamic programming, graph traversal, and complexity classes.",
      skillsLearned: ["Dynamic Programming", "Graph Optimization", "Complexity"],
      importance: "Critical for writing high-performance enterprise software systems.",
      careerApplications: "Search indexing, routing engines."
    },
    {
      code: "CSA07_NET", name: "Computer Networks", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CSA04"], careerDomains: ["Cloud Architecture & DevOps", "Information Security & Cyber Defense"], difficulty: "Medium",
      description: "OSI model, TCP/IP, IP routing, switching, and socket programming.",
      skillsLearned: ["TCP/IP", "Routing", "Socket Programming"],
      importance: "Connects enterprise systems across local and global networks.",
      careerApplications: "Network engineering, cloud infrastructure."
    },
    {
      code: "CSA10", name: "Software Engineering", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CSA03"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Software life cycle, Agile/Scrum, requirements, design patterns, and quality assurance.",
      skillsLearned: ["Agile & Scrum", "Requirements", "Software Quality"],
      importance: "Essential for delivering commercial software in team environments.",
      careerApplications: "Software engineering, tech management."
    },
    {
      code: "CSA12", name: "Computer Architecture", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["ECA47"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Processor architecture, instruction sets, memory hierarchy, and caching.",
      skillsLearned: ["Processor Design", "Cache Hierarchy", "Instruction Sets"],
      importance: "Foundational for optimizing system performance and cloud scaling.",
      careerApplications: "Systems engineering, cloud architecture."
    },
    {
      code: "CSA37", name: "Software Testing & Quality Assurance", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CSA09"], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Testing levels, automated testing, Selenium, test-driven development, and CI validation.",
      skillsLearned: ["Automated Testing", "Selenium", "TDD"],
      importance: "Guarantees reliable, defect-free production enterprise software releases.",
      careerApplications: "QA engineering, test automation."
    },
    {
      code: "ITA02", name: "Web Technology & Frontend Architectures", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["CSA09"], careerDomains: ["Enterprise Web & Mobile Applications"], difficulty: "Medium",
      description: "HTML5, CSS3, JavaScript ES6+, React frameworks, and responsive design.",
      skillsLearned: ["React", "JavaScript ES6+", "Responsive UI"],
      importance: "The primary interface layer for modern consumer and enterprise digital services.",
      careerApplications: "Web frontend engineering, UI development."
    },
    {
      code: "ITA03", name: "Mobile Application Development", credits: 4, category: "Professional Elective", semester: 5,
      prerequisites: ["CSA09"], careerDomains: ["Enterprise Web & Mobile Applications"], difficulty: "Medium",
      description: "Mobile ecosystems, Android/iOS architectures, Flutter development, and mobile APIs.",
      skillsLearned: ["Flutter", "Mobile APIs", "UI Design"],
      importance: "Delivers mobile software solutions to smartphone users worldwide.",
      careerApplications: "Mobile app engineering, startup products."
    },
    {
      code: "ITA04", name: "Statistics with R Programming", credits: 4, category: "Professional Elective", semester: 5,
      prerequisites: ["UBA01"], careerDomains: ["Data Analytics & Applied AI"], difficulty: "Medium",
      description: "Statistical analysis, hypothesis testing, regression models, and exploratory visualizations.",
      skillsLearned: ["R Scripting", "Hypothesis Testing", "Data Analysis"],
      importance: "Provides statistical validation for IT analytics and data-driven decisions.",
      careerApplications: "Business analytics, performance metrics."
    },
    {
      code: "CSA15", name: "Cloud Computing and Big Data Analytics", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["CSA07_NET"], careerDomains: ["Cloud Architecture & DevOps"], difficulty: "Medium",
      description: "Cloud virtualization, AWS/Azure, distributed storage, and big data architectures.",
      skillsLearned: ["Cloud Architecture", "AWS Services", "Big Data"],
      importance: "Modern standard for hosting, scaling, and managing global software workloads.",
      careerApplications: "Cloud engineering, DevOps platforms."
    },
    {
      code: "CSA16", name: "Data Warehousing and Data Mining", credits: 4, category: "Professional Elective", semester: 5,
      prerequisites: ["CSA05"], careerDomains: ["Data Analytics & Applied AI"], difficulty: "Medium",
      description: "ETL pipelines, data schemas, clustering, and association mining.",
      skillsLearned: ["ETL Pipelines", "Data Schemas", "Clustering"],
      importance: "Transforms transactional raw operational data into actionable intelligence.",
      careerApplications: "Business intelligence, enterprise reporting."
    },
    {
      code: "CSA17", name: "Artificial Intelligence", credits: 4, category: "Professional Elective", semester: 5,
      prerequisites: ["CSA08"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Search algorithms, knowledge representation, reasoning, and planning systems.",
      skillsLearned: ["Search Algorithms", "Reasoning Systems", "Planning"],
      importance: "Powers intelligent automations and decision-making logic in IT software.",
      careerApplications: "Intelligent bots, automated workflows."
    },
    {
      code: "ITA05", name: "Computer Vision", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["CSA08"], careerDomains: ["Data Analytics & Applied AI"], difficulty: "Hard",
      description: "Image processing, feature detection, object recognition, and visual analytics.",
      skillsLearned: ["OpenCV", "Object Recognition", "Image Processing"],
      importance: "Enables automated visual inspection and document recognition in IT systems.",
      careerApplications: "Document OCR, automated surveillance."
    },
    {
      code: "ITA06", name: "Machine Learning", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["CSA08"], careerDomains: ["Data Analytics & Applied AI"], difficulty: "Medium",
      description: "Supervised learning, classification, regression, decision trees, and clustering.",
      skillsLearned: ["Scikit-Learn", "Model Training", "Evaluation"],
      importance: "Unlocks predictive intelligence and automated pattern recognition for software products.",
      careerApplications: "Predictive maintenance, analytics platforms."
    },
    {
      code: "CSA51", name: "Cryptography and Network Security", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["CSA07_NET"], careerDomains: ["Information Security & Cyber Defense"], difficulty: "Hard",
      description: "Encryption algorithms, public key infrastructure, digital signatures, and firewalls.",
      skillsLearned: ["Cryptography", "PKI", "Network Security"],
      importance: "Safeguards enterprise network infrastructure and confidential user data.",
      careerApplications: "Security engineering, compliance auditing."
    },
    {
      code: "ITA10", name: "DevOps & CI/CD Pipelines", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["CSA15"], careerDomains: ["Cloud Architecture & DevOps"], difficulty: "Medium",
      description: "Continuous integration, continuous deployment, Docker, GitHub Actions, and automation.",
      skillsLearned: ["CI/CD Pipelines", "Docker", "Automation"],
      importance: "Automates software build, testing, and production deployment cycles.",
      careerApplications: "DevOps engineering, release automation."
    },
    {
      code: "ITA11", name: "Enterprise Java Frameworks", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["CSA09"], careerDomains: ["Enterprise Web & Mobile Applications"], difficulty: "Medium",
      description: "Spring Boot, Hibernate, microservices architecture, and enterprise integration patterns.",
      skillsLearned: ["Spring Boot", "Hibernate", "Microservices"],
      importance: "The leading backend architecture for large-scale enterprise banking and e-commerce.",
      careerApplications: "Enterprise backends, payment services."
    },
    {
      code: "CSA43", name: "Internet Programming & Web APIs", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["ITA02"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "RESTful web services, GraphQL, Node.js backends, and API security.",
      skillsLearned: ["Node.js", "RESTful APIs", "GraphQL"],
      importance: "Enables modular interoperability between distributed web and mobile platforms.",
      careerApplications: "Backend engineering, API gateways."
    },
    {
      code: "ITA12", name: "Cloud Native Architecture & Kubernetes", credits: 4, category: "Professional Core", semester: 7,
      prerequisites: ["ITA10"], careerDomains: ["Cloud Architecture & DevOps"], difficulty: "Hard",
      description: "Container orchestration, Kubernetes clusters, service meshes, and microservice resilience.",
      skillsLearned: ["Kubernetes", "Container Orchestration", "Service Mesh"],
      importance: "Architectural standard for hyper-scalable cloud systems at leading tech companies.",
      careerApplications: "Cloud architecture, infrastructure operations."
    },
    {
      code: "ITA14", name: "Ethical Hacking & Cyber Defense", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["CSA51"], careerDomains: ["Information Security & Cyber Defense"], difficulty: "Hard",
      description: "Penetration testing, vulnerability assessments, web security (OWASP), and exploit mitigation.",
      skillsLearned: ["Penetration Testing", "Vulnerability Assessment", "OWASP Security"],
      importance: "Proactively identifies and fixes security vulnerabilities before malicious exploitation.",
      careerApplications: "Penetration tester, security auditor, red-teaming."
    },
    {
      code: "ITA15", name: "Full Stack MERN Development", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["CSA43"], careerDomains: ["Enterprise Web & Mobile Applications"], difficulty: "Medium",
      description: "MongoDB, Express, React, Node.js, state management, and production web deployment.",
      skillsLearned: ["MERN Stack", "State Management", "Production Deployment"],
      importance: "Enables end-to-end delivery of modern dynamic web applications.",
      careerApplications: "Full-stack engineer, SaaS startup developer."
    },
    {
      code: "ITA16", name: "Internet of Things Platforms", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["CSA07_NET"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "IoT device architectures, MQTT protocol, edge gateways, and IoT cloud platforms.",
      skillsLearned: ["MQTT", "IoT Gateways", "Edge Computing"],
      importance: "Connects physical sensor telemetry into enterprise cloud analytics platforms.",
      careerApplications: "Smart building systems, industrial IoT."
    },
    {
      code: "CSA58", name: "DevSecOps Engineering", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["ITA10"], careerDomains: ["Cloud Architecture & DevOps", "Information Security & Cyber Defense"], difficulty: "Medium",
      description: "Automated security scanning in CI/CD, SAST/DAST, and compliance as code.",
      skillsLearned: ["Security Automation", "SAST/DAST", "Compliance as Code"],
      importance: "Integrates rigorous security checks directly into automated deployment pipelines.",
      careerApplications: "DevSecOps engineer, cloud security specialist."
    },
    {
      code: "ITA71", name: "Capstone Project Phase - I", credits: 4, category: "Capstone & Project", semester: 7,
      prerequisites: ["CSA10"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Project formulation, architectural specification, prototyping, and milestone defense.",
      skillsLearned: ["Technical Architecture", "System Prototyping", "Project Management"],
      importance: "Integrates multi-year engineering concepts into an enterprise-grade software project.",
      careerApplications: "Enterprise software launch, research prototype."
    },
    {
      code: "ITA72", name: "Capstone Project Phase - II", credits: 4, category: "Capstone & Project", semester: 8,
      prerequisites: ["ITA71"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Full production software deployment, stress testing, documentation, and external defense.",
      skillsLearned: ["Production Deployment", "Stress Testing", "Technical Defense"],
      importance: "Culmination of undergraduate study demonstrating production-grade software delivery.",
      careerApplications: "Commercial software launch, patent application."
    },
    {
      code: "ITA73", name: "Industry Internship & IT Practicum", credits: 4, category: "Capstone & Project", semester: 8,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Full-semester immersion in an enterprise IT or software development team.",
      skillsLearned: ["Corporate Agile Workflows", "Production Codebases", "Team Collaboration"],
      importance: "Bridges academic learning with industrial enterprise software development.",
      careerApplications: "Full-time software engineering, IT consulting."
    },
    {
      code: "ITA18", name: "IT Infrastructure & ITIL Operations", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["ITA12"], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Service management frameworks (ITIL), incident management, SLA monitoring, and data center ops.",
      skillsLearned: ["ITIL Framework", "SLA Monitoring", "Data Center Ops"],
      importance: "Ensures reliable 24/7 uptime and standardized operations for corporate IT infrastructure.",
      careerApplications: "IT operations manager, infrastructure engineer."
    },
    {
      code: "ITA19", name: "FinTech & Payment Systems", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["CSA51"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Digital payment gateways, PCI-DSS compliance, blockchain ledgers, and secure transactions.",
      skillsLearned: ["Payment Gateways", "PCI-DSS Compliance", "Financial Cryptography"],
      importance: "Underlies modern digital banking, mobile payment apps, and fintech platforms.",
      careerApplications: "Fintech software engineer, payment architect."
    },
    {
      code: "ITA20", name: "Software Defined Networking (SDN)", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["CSA07_NET"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Decoupled control and data planes, OpenFlow, network virtualization, and automated routing.",
      skillsLearned: ["OpenFlow", "SDN Controllers", "Network Virtualization"],
      importance: "Powers modern cloud data center networking and dynamic traffic management.",
      careerApplications: "Network virtualization engineer, cloud networking."
    },
    {
      code: "ECA68", name: "Engineering Economics & Intellectual Property", credits: 4, category: "Humanities & Management", semester: 8,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Cost-benefit modeling, return on investment, patent filing, and commercialization strategies.",
      skillsLearned: ["Cost-Benefit Modeling", "Patent Landscaping", "Tech Entrepreneurship"],
      importance: "Equips graduating engineers to evaluate the commercial viability and financial returns of technological innovations.",
      careerApplications: "Engineering management, technology consulting, venture capital."
    }
  ],
  // ── EEE (Electrical & Electronics Engg) — 48 Courses (192 Credits) ──
  EEE: [
    {
      code: "UBA01", name: "Engineering Mathematics - I", credits: 4, category: "Foundation Maths", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Differential and integral calculus, matrix algebra, and linear transformations for engineering systems.",
      skillsLearned: ["Matrices", "Differential Calculus", "Integral Calculus"],
      importance: "Essential mathematical foundation for all engineering analysis.",
      careerApplications: "Algorithmic modeling, scientific computing."
    },
    {
      code: "UBA48", name: "Engineering Physics", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Quantum mechanics, solid-state band theory, laser optics, and fiber optic wave guidance.",
      skillsLearned: ["Quantum Principles", "Optics & Lasers", "Semiconductor Basics"],
      importance: "Explains underlying physical phenomena governing semiconductor chips and optical communication.",
      careerApplications: "Photonics, optoelectronics, semiconductor research."
    },
    {
      code: "UBA49", name: "Engineering Chemistry", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Electrochemical cells, corrosion mitigation, battery technologies, and polymer materials.",
      skillsLearned: ["Electrochemistry", "Corrosion Prevention", "Polymers"],
      importance: "Essential for battery energy storage, chip fabrication chemistry, and materials.",
      careerApplications: "Battery manufacturing, microelectronics packaging."
    },
    {
      code: "UBA28", name: "Professional Ethics and Legal Practices", credits: 4, category: "Humanities & Management", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Engineering ethics, intellectual property rights, environmental regulations, and corporate compliance.",
      skillsLearned: ["Engineering Ethics", "IP & Patents", "Regulatory Compliance"],
      importance: "Instills ethical decision-making and patent protection awareness for engineering leadership.",
      careerApplications: "Patent filing, engineering law, corporate governance."
    },
    {
      code: "BTA01", name: "Biology and Environmental Science for Engineers", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Cellular biology, bio-inspired engineering, ecosystem sustainability, and environmental impact assessment.",
      skillsLearned: ["Bio-inspired Design", "Environmental Analysis", "Sustainability"],
      importance: "Provides foundation for green technologies, wearable bio-sensors, and eco-friendly devices.",
      careerApplications: "Biomedical sensors, sustainable hardware development."
    },
    {
      code: "CSA07", name: "Problem Solving using C", credits: 4, category: "Engineering Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Structured procedural programming, memory pointers, dynamic allocation, bitwise operations, and file I/O in C.",
      skillsLearned: ["C Programming", "Pointers & Memory", "Modular Design"],
      importance: "Low-level system programming capability essential for firmware and hardware-level driver development.",
      careerApplications: "Embedded firmware, microcontroller programming."
    },
    {
      code: "UBA06", name: "Applied Mathematics", credits: 4, category: "Foundation Maths", semester: 2,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Differential equations, vector calculus, Laplace transforms, and boundary value problems.",
      skillsLearned: ["Vector Calculus", "Laplace Transforms", "ODE Modeling"],
      importance: "Indispensable for AC circuit transients and electromagnetic field modeling.",
      careerApplications: "Circuit simulation, magnetic field design."
    },
    {
      code: "UBA05", name: "Engineering Mathematics - II", credits: 4, category: "Foundation Maths", semester: 2,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Multiple integrals, vector calculus, line integrals, and partial differential equations.",
      skillsLearned: ["Multiple Integrals", "Vector Fields", "PDEs"],
      importance: "Required for continuum electromagnetic fields and power system transients.",
      careerApplications: "Electromagnetic analysis, wave equations."
    },
    {
      code: "EEA01", name: "Basic Electrical Engineering", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Electric Vehicles & Power Electronics"], difficulty: "Medium",
      description: "DC and AC network theorems, magnetic circuits, transformers, and electrical safety.",
      skillsLearned: ["Network Theorems", "Magnetic Circuits", "Transformers"],
      importance: "Core foundation for all electrical engineering analysis and machinery.",
      careerApplications: "Power systems, industrial plants."
    },
    {
      code: "MEA01", name: "Engineering Graphics & CAD", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Technical drafting, 2D projections, and computer-aided electrical panel layout drafting.",
      skillsLearned: ["Drafting", "CAD Modeling", "Panel Layouts"],
      importance: "Essential for designing industrial electrical switchboards and control cabinets.",
      careerApplications: "Switchgear drafting, panel design."
    },
    {
      code: "MEA02", name: "Engineering Workshop", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Wiring practices, soldering, sheet metal fabrication, and power tool operation.",
      skillsLearned: ["Wiring Practices", "Soldering", "Safety Procedures"],
      importance: "Provides hands-on practical skills in industrial wiring and circuit assembly.",
      careerApplications: "Plant maintenance, prototype fabrication."
    },
    {
      code: "CSA08", name: "Python Programming", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: ["CSA07"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Python programming, NumPy, plotting, and numerical simulation of electrical circuits.",
      skillsLearned: ["Python Scripting", "NumPy", "Circuit Simulation"],
      importance: "Enables rapid computational analysis of power flow and motor dynamics.",
      careerApplications: "Power system simulation, data logging."
    },
    {
      code: "UBA10", name: "Numerical Methods", credits: 4, category: "Foundation Maths", semester: 3,
      prerequisites: ["UBA06"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Roots of equations, numerical linear algebra, and differential equation solvers.",
      skillsLearned: ["Numerical Solvers", "Linear Algebra", "Interpolation"],
      importance: "Powers numerical load flow algorithms in large interconnected power grids.",
      careerApplications: "Load flow solvers, stability simulation."
    },
    {
      code: "EEA02", name: "Electric Circuit Analysis", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["EEA01"], careerDomains: ["Electric Vehicles & Power Electronics"], difficulty: "Hard",
      description: "Mesh and nodal analysis, network theorems, transient analysis of RLC circuits, and resonance.",
      skillsLearned: ["Transient Analysis", "Network Theorems", "Resonance"],
      importance: "Fundamental analytical tool for analyzing multi-phase power and electronic circuits.",
      careerApplications: "Filter design, circuit simulation."
    },
    {
      code: "ECA01", name: "Semiconductor Devices", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: ["UBA48"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "PN junctions, bipolar transistors, MOSFETs, and power switching device physics.",
      skillsLearned: ["MOSFET Physics", "Switching Behavior", "Semiconductor Basics"],
      importance: "Underlies all modern solid-state power switches used in inverters and EV drives.",
      careerApplications: "Power semiconductor design, power supplies."
    },
    {
      code: "ECA02", name: "Digital Circuits", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Boolean algebra, combinational logic design, sequential circuits, and counters.",
      skillsLearned: ["Logic Design", "Sequential Circuits", "Counters"],
      importance: "Provides the digital foundations for microcontroller-based motor controllers.",
      careerApplications: "Digital control units, protection relays."
    },
    {
      code: "ENA01", name: "Renewable Energy Sources", credits: 4, category: "Professional Elective", semester: 3,
      prerequisites: [], careerDomains: ["Renewable Energy & High Voltage"], difficulty: "Easy",
      description: "Solar photovoltaic principles, wind turbine generators, biomass, and energy storage systems.",
      skillsLearned: ["Solar PV", "Wind Turbines", "Energy Storage"],
      importance: "Core discipline driving the global transition toward clean, decarbonized energy grids.",
      careerApplications: "Solar power plants, wind farms, green microgrids."
    },
    {
      code: "CSA41", name: "Internet of Things & Smart Sensors", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: ["CSA08"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Sensors, microcontrollers, wireless communication (Zigbee, WiFi), and IoT cloud platforms.",
      skillsLearned: ["IoT Sensors", "Wireless Protocols", "Data Telemetry"],
      importance: "Enables smart grid metering, asset condition monitoring, and industrial IoT.",
      careerApplications: "Smart meters, grid sensors."
    },
    {
      code: "UBA55", name: "Statistics, ODE and Complex Analysis", credits: 4, category: "Foundation Maths", semester: 4,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Analytic functions, complex integration, conformal mapping, and statistical quality control.",
      skillsLearned: ["Complex Analysis", "Conformal Mapping", "Statistical Analysis"],
      importance: "Essential for 2D electrostatic field mapping and harmonic analysis.",
      careerApplications: "Harmonic filtering, insulation design."
    },
    {
      code: "EEA03", name: "Electrical Machines \u2013 I", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["EEA01"], careerDomains: ["Power Systems & Grid Modernization"], difficulty: "Hard",
      description: "DC generators, DC motors, single-phase transformers, testing, and efficiency calculations.",
      skillsLearned: ["DC Machines", "Transformer Testing", "Efficiency Modeling"],
      importance: "Foundational electromechanical energy conversion principles used in industrial plants.",
      careerApplications: "Industrial DC drives, substation transformers."
    },
    {
      code: "ECA04", name: "Analog Circuits", credits: 4, category: "Engineering Science", semester: 4,
      prerequisites: ["ECA01"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Operational amplifiers, feedback circuits, active filters, and signal conditioners.",
      skillsLearned: ["Op-Amp Design", "Active Filters", "Signal Conditioning"],
      importance: "Interfaces raw sensor signals with digital controllers in power systems.",
      careerApplications: "Sensor interfaces, protection instrumentation."
    },
    {
      code: "EEA05", name: "Control Systems", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["UBA06"], careerDomains: ["Industrial Automation & Drives"], difficulty: "Hard",
      description: "Transfer functions, block diagrams, root locus, Bode plots, and PID controller tuning.",
      skillsLearned: ["Feedback Control", "Bode Plots", "PID Controllers"],
      importance: "Core discipline for stabilizing generator frequencies and regulating motor speeds.",
      careerApplications: "Generator governors, industrial automation."
    },
    {
      code: "ECA05", name: "Engineering Electromagnetics", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["UBA06"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Maxwell's equations, electrostatic and magnetostatic fields, boundary conditions, and wave propagation.",
      skillsLearned: ["Maxwell's Equations", "Boundary Conditions", "Field Mapping"],
      importance: "Underlies the physics of transformers, motor windings, and transmission line capacitance.",
      careerApplications: "High-voltage design, transformer windings."
    },
    {
      code: "EEA06", name: "Measurements and Instrumentation", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["EEA02"], careerDomains: ["Industrial Automation & Drives"], difficulty: "Medium",
      description: "Bridges, instrument transformers (CT/PT), digital multimeters, oscilloscope measurements, and sensors.",
      skillsLearned: ["Instrument Transformers", "Bridge Circuits", "Sensor Calibration"],
      importance: "Ensures accurate electrical measurements required for protection, billing, and safety.",
      careerApplications: "Substation metering, laboratory instrumentation."
    },
    {
      code: "EEA04", name: "Electrical Machines \u2013 II", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["EEA03"], careerDomains: ["Power Systems & Grid Modernization"], difficulty: "Hard",
      description: "Three-phase induction motors, synchronous alternators, synchronous motors, and speed control.",
      skillsLearned: ["Induction Motors", "Synchronous Alternators", "Speed Control"],
      importance: "Powers 90% of industrial factory machinery and all utility power station generators.",
      careerApplications: "Power plant alternators, factory motor drives."
    },
    {
      code: "EEA07", name: "Power Electronics", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["ECA01"], careerDomains: ["Electric Vehicles & Power Electronics", "Renewable Energy & High Voltage"], difficulty: "Hard",
      description: "Thyristors, MOSFETs, IGBTs, phase-controlled rectifiers, DC-DC buck/boost converters, and inverters.",
      skillsLearned: ["Power Converters", "IGBT Switching", "Inverter Modulation"],
      importance: "The definitive enabling technology for solar inverters, battery chargers, and electric vehicles.",
      careerApplications: "Solar inverters, EV chargers, variable frequency drives."
    },
    {
      code: "EEA08", name: "Power Systems - I", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["EEA02"], careerDomains: ["Power Systems & Grid Modernization"], difficulty: "Hard",
      description: "Power generation options, transmission line parameters (R, L, C), performance models, and mechanical line design.",
      skillsLearned: ["Transmission Parameters", "Line Modeling", "Sag & Tension"],
      importance: "Architects high-voltage electrical grid infrastructure carrying gigawatts of power.",
      careerApplications: "Grid transmission planning, utility engineering."
    },
    {
      code: "ECA10", name: "Microprocessors and Microcontrollers", credits: 4, category: "Engineering Science", semester: 5,
      prerequisites: ["ECA02"], careerDomains: ["Industrial Automation & Drives"], difficulty: "Medium",
      description: "Embedded microcontroller architecture, assembly, C programming, timers, PWM, and ADC interfacing.",
      skillsLearned: ["Embedded C", "PWM Generation", "Microcontroller Interfacing"],
      importance: "The computing brain inside digital power meters, smart inverters, and motor controllers.",
      careerApplications: "Digital protection relays, inverter controllers."
    },
    {
      code: "EEA10", name: "Transmission and Distribution", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["EEA02"], careerDomains: ["Power Systems & Grid Modernization"], difficulty: "Medium",
      description: "Distribution substations, radial/ring distribution, underground cables, insulators, and voltage regulation.",
      skillsLearned: ["Distribution Systems", "Substation Design", "Underground Cables"],
      importance: "Ensures safe, reliable electric power distribution from grid substations to consumer homes.",
      careerApplications: "Distribution utilities, city electrical planning."
    },
    {
      code: "ITA06", name: "Machine Learning for Power Systems", credits: 4, category: "Professional Elective", semester: 5,
      prerequisites: ["CSA08"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Predictive maintenance algorithms, neural networks for load forecasting, and renewable generation prediction.",
      skillsLearned: ["Load Forecasting", "Predictive Maintenance", "Renewable Prediction"],
      importance: "Optimizes modern smart grid supply-demand balancing under fluctuating wind and solar.",
      careerApplications: "Smart grid AI, load forecasting software."
    },
    {
      code: "EEA09", name: "Power Systems \u2013 II", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["EEA08"], careerDomains: ["Power Systems & Grid Modernization"], difficulty: "Hard",
      description: "Gauss-Seidel, Newton-Raphson load flow, symmetrical and unsymmetrical fault analysis, and power system stability.",
      skillsLearned: ["Load Flow Analysis", "Fault Calculations", "System Stability"],
      importance: "Core theoretical discipline for ensuring utility power grid stability and fault ride-through.",
      careerApplications: "Power system operators, stability consulting."
    },
    {
      code: "EEA11", name: "Protection and Switchgear", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["EEA08"], careerDomains: ["Power Systems & Grid Modernization"], difficulty: "Hard",
      description: "Circuit breakers (SF6, vacuum), protective relays (overcurrent, distance, differential), and substation protection.",
      skillsLearned: ["Relay Coordination", "Circuit Breakers", "Substation Protection"],
      importance: "Safeguards multi-million dollar electrical apparatus and prevents catastrophic grid blackouts.",
      careerApplications: "Relay coordination, substation commissioning."
    },
    {
      code: "ECA11", name: "VLSI Design for Electrical Engineers", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["ECA02"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "CMOS logic, FPGA implementation, hardware description languages, and hardware accelerators.",
      skillsLearned: ["FPGA Design", "Verilog HDL", "CMOS Circuits"],
      importance: "Enables ultra-fast hardware controllers for high-frequency switching converters.",
      careerApplications: "Custom power controller ICs, FPGA control."
    },
    {
      code: "EEA25", name: "Electrical Machine Design", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["EEA04"], careerDomains: ["Electric Vehicles & Power Electronics"], difficulty: "Hard",
      description: "Magnetic circuit sizing, stator and rotor winding design, thermal dissipation, and CAD of transformers and motors.",
      skillsLearned: ["Machine CAD", "Magnetic Design", "Thermal Sizing"],
      importance: "Essential for engineering high-efficiency electric vehicle traction motors and transformers.",
      careerApplications: "EV motor design, transformer manufacturing."
    },
    {
      code: "EEA31", name: "Electric Vehicle Technology & Powertrains", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["EEA07"], careerDomains: ["Electric Vehicles & Power Electronics"], difficulty: "Medium",
      description: "EV vehicle dynamics, battery technologies, PMSM and induction motor drives, regenerative braking, and charging stations.",
      skillsLearned: ["EV Powertrains", "Motor Drives", "Regenerative Braking"],
      importance: "Direct domain specialization for the electric mobility revolution in passenger and commercial transport.",
      careerApplications: "Electric vehicle engineering, powertrain development."
    },
    {
      code: "EEA32", name: "Industrial Drives & Control", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["EEA07"], careerDomains: ["Industrial Automation & Drives"], difficulty: "Hard",
      description: "Vector control (FOC), direct torque control (DTC), servo drives, and 4-quadrant industrial motor control.",
      skillsLearned: ["Vector Control (FOC)", "Direct Torque Control", "Servo Drives"],
      importance: "Provides precision speed and torque control for industrial cranes, rolling mills, and elevators.",
      careerApplications: "Industrial automation, high-speed rail propulsion."
    },
    {
      code: "EEA33", name: "Smart Grid & Microgrid Systems", credits: 4, category: "Professional Core", semester: 7,
      prerequisites: ["EEA09"], careerDomains: ["Power Systems & Grid Modernization"], difficulty: "Hard",
      description: "Microgrid controllers, islanding detection, synchrophasors (PMUs), demand response, and grid integration standards.",
      skillsLearned: ["Microgrid Architecture", "Islanding Detection", "PMU Telemetry"],
      importance: "Pioneers decentralized, resilient energy networks capable of autonomous green islanded operation.",
      careerApplications: "Microgrid deployment, utility grid modernization."
    },
    {
      code: "EEA34", name: "High Voltage Engineering & Insulation", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["ECA05"], careerDomains: ["Renewable Energy & High Voltage"], difficulty: "Hard",
      description: "Dielectric breakdown in gases, liquids, and solids, lightning surges, impulse generators, and HV testing.",
      skillsLearned: ["Impulse Testing", "Insulation Coordination", "Surge Protection"],
      importance: "Crucial for designing extra-high-voltage (EHV/UHV) transmission equipment and lightning arresters.",
      careerApplications: "High-voltage laboratories, utility testing."
    },
    {
      code: "EEA35", name: "Battery Management Systems for EVs", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["EEA31"], careerDomains: ["Electric Vehicles & Power Electronics"], difficulty: "Medium",
      description: "Battery cell chemistries, state-of-charge (SoC) estimation, state-of-health (SoH), cell balancing, and thermal management.",
      skillsLearned: ["SoC Estimation", "Cell Balancing", "Thermal Management"],
      importance: "Critical engineering discipline ensuring EV battery safety, longevity, and optimal range.",
      careerApplications: "BMS engineering, EV battery pack design."
    },
    {
      code: "EEA36", name: "PLC, SCADA and Industrial Automation", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["EEA05"], careerDomains: ["Industrial Automation & Drives"], difficulty: "Medium",
      description: "Programmable logic controllers (ladder logic), SCADA software, DCS, and industrial communication protocols (Modbus, Profibus).",
      skillsLearned: ["Ladder Logic", "SCADA Design", "Industrial Networking"],
      importance: "The backbone of factory floor operational technology and automated continuous process plants.",
      careerApplications: "Industrial automation, plant SCADA engineering."
    },
    {
      code: "EEA37", name: "Power System Restructuring & Deregulation", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["EEA09"], careerDomains: ["Renewable Energy & High Voltage"], difficulty: "Medium",
      description: "Electricity market models, locational marginal pricing (LMP), ancillary services, and transmission open access.",
      skillsLearned: ["Electricity Markets", "LMP Pricing", "Ancillary Services"],
      importance: "Provides economic and regulatory understanding for trading power in competitive energy markets.",
      careerApplications: "Power trading, energy regulatory analyst."
    },
    {
      code: "EEA71", name: "Capstone Project Phase - I", credits: 4, category: "Capstone & Project", semester: 7,
      prerequisites: ["EEA07"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Engineering problem formulation, literature review, simulation modeling, prototype design, and milestone defense.",
      skillsLearned: ["Electrical Prototyping", "Technical Specification", "Project Planning"],
      importance: "Integrates multi-disciplinary electrical engineering knowledge into an industry-grade system.",
      careerApplications: "Applied electrical prototype, patent application."
    },
    {
      code: "EEA72", name: "Capstone Project Phase - II", credits: 4, category: "Capstone & Project", semester: 8,
      prerequisites: ["EEA71"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Hardware testing, experimental power validation, thermal/efficiency measurements, documentation, and external defense.",
      skillsLearned: ["Hardware Commissioning", "Efficiency Testing", "Technical Defense"],
      importance: "Culmination of undergraduate study demonstrating rigorous hardware-proven engineering competence.",
      careerApplications: "Commercial power product, research publication."
    },
    {
      code: "EEA73", name: "Industry Internship & Electrical Practicum", credits: 4, category: "Capstone & Project", semester: 8,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Full-semester immersion in a utility power plant, electrical manufacturing company, or EV enterprise.",
      skillsLearned: ["Industrial Safety", "Plant Maintenance", "Engineering Operations"],
      importance: "Bridges academic study with live high-voltage industrial engineering operations.",
      careerApplications: "Full-time electrical engineer, utility operations."
    },
    {
      code: "EEA38", name: "Power Quality, Harmonics & FACTS", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["EEA09"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Voltage sags, harmonic distortion (IEEE 519), active power filters, and Flexible AC Transmission Systems (STATCOM, SVC).",
      skillsLearned: ["Harmonic Mitigation", "FACTS Devices", "Power Quality Analysis"],
      importance: "Restores clean sinusoidal power in industrial networks contaminated by non-linear electronic loads.",
      careerApplications: "Power quality consulting, industrial plant filtering."
    },
    {
      code: "EEA39", name: "Energy Auditing & Energy Management", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["EEA01"], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Energy conservation principles, industrial audit methodologies, economic payback analysis, and ISO 50001.",
      skillsLearned: ["Energy Auditing", "Payback Analysis", "ISO 50001 Standards"],
      importance: "Reduces corporate energy consumption, carbon footprints, and operational electricity costs.",
      careerApplications: "Certified energy auditor, green building consultant."
    },
    {
      code: "EEA40", name: "Solar Photovoltaic and Wind Energy Systems", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["ENA01"], careerDomains: ["Renewable Energy & High Voltage"], difficulty: "Hard",
      description: "MPPT tracking algorithms, utility-scale solar inverter design, doubly-fed induction generators (DFIG), and grid codes.",
      skillsLearned: ["MPPT Algorithms", "Solar Inverters", "DFIG Wind Generators"],
      importance: "Specialized engineering design capability for large utility-scale renewable generation installations.",
      careerApplications: "Renewable project engineer, solar farm designer."
    },
    {
      code: "ECA68", name: "Engineering Economics & Intellectual Property", credits: 4, category: "Humanities & Management", semester: 8,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Lifecycle cost analysis, return on investment, engineering project appraisal, patent landscape mapping, and commercialization.",
      skillsLearned: ["Cost-Benefit Modeling", "Patent Landscaping", "Tech Entrepreneurship"],
      importance: "Equips graduating engineers to evaluate the commercial viability and financial returns of technological innovations.",
      careerApplications: "Engineering management, technology consulting, venture capital."
    }
  ],
  // ── MECH (Mechanical Engineering) — 48 Courses (192 Credits) ──
  MECH: [
    {
      code: "UBA01", name: "Engineering Mathematics - I", credits: 4, category: "Foundation Maths", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Differential and integral calculus, matrix algebra, and linear transformations for engineering systems.",
      skillsLearned: ["Matrices", "Differential Calculus", "Integral Calculus"],
      importance: "Essential mathematical foundation for all engineering analysis.",
      careerApplications: "Algorithmic modeling, scientific computing."
    },
    {
      code: "UBA48", name: "Engineering Physics", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Quantum mechanics, solid-state band theory, laser optics, and fiber optic wave guidance.",
      skillsLearned: ["Quantum Principles", "Optics & Lasers", "Semiconductor Basics"],
      importance: "Explains underlying physical phenomena governing semiconductor chips and optical communication.",
      careerApplications: "Photonics, optoelectronics, semiconductor research."
    },
    {
      code: "UBA49", name: "Engineering Chemistry", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Electrochemical cells, corrosion mitigation, battery technologies, and polymer materials.",
      skillsLearned: ["Electrochemistry", "Corrosion Prevention", "Polymers"],
      importance: "Essential for battery energy storage, chip fabrication chemistry, and materials.",
      careerApplications: "Battery manufacturing, microelectronics packaging."
    },
    {
      code: "UBA28", name: "Professional Ethics and Legal Practices", credits: 4, category: "Humanities & Management", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Engineering ethics, intellectual property rights, environmental regulations, and corporate compliance.",
      skillsLearned: ["Engineering Ethics", "IP & Patents", "Regulatory Compliance"],
      importance: "Instills ethical decision-making and patent protection awareness for engineering leadership.",
      careerApplications: "Patent filing, engineering law, corporate governance."
    },
    {
      code: "BTA01", name: "Biology and Environmental Science for Engineers", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Cellular biology, bio-inspired engineering, ecosystem sustainability, and environmental impact assessment.",
      skillsLearned: ["Bio-inspired Design", "Environmental Analysis", "Sustainability"],
      importance: "Provides foundation for green technologies, wearable bio-sensors, and eco-friendly devices.",
      careerApplications: "Biomedical sensors, sustainable hardware development."
    },
    {
      code: "CSA07", name: "Problem Solving using C", credits: 4, category: "Engineering Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Structured procedural programming, memory pointers, dynamic allocation, bitwise operations, and file I/O in C.",
      skillsLearned: ["C Programming", "Pointers & Memory", "Modular Design"],
      importance: "Low-level system programming capability essential for firmware and hardware-level driver development.",
      careerApplications: "Embedded firmware, microcontroller programming."
    },
    {
      code: "UBA05", name: "Engineering Mathematics - II", credits: 4, category: "Foundation Maths", semester: 2,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Multiple integrals, vector calculus, line/surface integrals, and partial differential equations.",
      skillsLearned: ["Vector Calculus", "Multiple Integrals", "PDE Modeling"],
      importance: "Critical for stress tensors, continuum mechanics, fluid flow, and heat transfer.",
      careerApplications: "Stress analysis, CFD simulations, thermal modeling."
    },
    {
      code: "UBA06", name: "Applied Mathematics", credits: 4, category: "Foundation Maths", semester: 2,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Ordinary differential equations, Laplace transforms, and boundary value problems.",
      skillsLearned: ["ODEs", "Laplace Transforms", "Boundary Problems"],
      importance: "Underlies dynamic vibration analysis and mechanical control systems.",
      careerApplications: "Vibration analysis, suspension tuning."
    },
    {
      code: "EEA01", name: "Basic Electrical and Electronics Engineering", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Electric circuits, electrical motors, basic semiconductor diodes, and sensors.",
      skillsLearned: ["Circuits", "Motors", "Sensors"],
      importance: "Foundational for modern mechatronics, electric actuators, and sensor interfacing.",
      careerApplications: "Actuator control, mechatronics."
    },
    {
      code: "MEA01", name: "Engineering Graphics & CAD", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Orthographic projections, isometric views, sectioning, dimensioning, and 3D solid modeling.",
      skillsLearned: ["3D CAD Modeling", "Orthographic Projections", "Dimensioning"],
      importance: "The universal visual language of mechanical design, assembly, and manufacturing.",
      careerApplications: "Mechanical part design, assembly modeling."
    },
    {
      code: "MEA02", name: "Engineering Workshop Practices", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Robotics & Smart Manufacturing"], difficulty: "Easy",
      description: "Fitting, carpentry, welding, sheet metal, and foundry practice.",
      skillsLearned: ["Welding", "Machining Basics", "Sheet Metal"],
      importance: "Provides hands-on physical appreciation of metal shaping and component fabrication.",
      careerApplications: "Prototyping, fabrication workshops."
    },
    {
      code: "CSA08", name: "Python Programming for Engineers", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: ["CSA07"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Python development, NumPy, Matplotlib, and engineering simulation scripts.",
      skillsLearned: ["Python", "NumPy", "Engineering Scripting"],
      importance: "Automates engineering design calculations, data processing, and parametric optimization.",
      careerApplications: "Design automation, numerical simulation."
    },
    {
      code: "UBA10", name: "Numerical Methods", credits: 4, category: "Foundation Maths", semester: 3,
      prerequisites: ["UBA06"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Roots of non-linear equations, finite difference methods, and numerical integration.",
      skillsLearned: ["Finite Differences", "Numerical Quadrature", "Equation Solvers"],
      importance: "Underlies computational solvers in finite element analysis and computational fluid dynamics.",
      careerApplications: "FEA solvers, CFD code development."
    },
    {
      code: "CEA02", name: "Engineering Mechanics", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: [], careerDomains: ["Design Engineering & FEA Simulation"], difficulty: "Hard",
      description: "Statics of particles and rigid bodies, equilibrium, friction, centroids, moments of inertia, and kinematics.",
      skillsLearned: ["Free Body Diagrams", "Equilibrium Analysis", "Moment of Inertia"],
      importance: "The core physical foundation for all structural strength, mechanism motion, and machine design.",
      careerApplications: "Structural load analysis, vehicle statics."
    },
    {
      code: "MEA03", name: "Basic Mechanical Engineering Systems", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Power plants, internal combustion engine cycles, boilers, refrigeration basics, and mechanical transmission.",
      skillsLearned: ["Energy Systems", "Engine Cycles", "Transmission Systems"],
      importance: "Provides high-level macroscopic overview of mechanical energy conversion systems.",
      careerApplications: "Power plant operations, facilities engineering."
    },
    {
      code: "CEA06", name: "Fluid Mechanics and Machinery", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["UBA05"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Fluid statics, Bernoulli's equation, Navier-Stokes, laminar and turbulent flow, pumps, and hydraulic turbines.",
      skillsLearned: ["Bernoulli Equation", "Navier-Stokes Basics", "Turbomachinery"],
      importance: "Governs the flow of liquids and gases in pipelines, aircraft wings, hydraulic systems, and pumps.",
      careerApplications: "Pump station design, aerodynamic analysis, hydraulics."
    },
    {
      code: "MEA04", name: "Materials Engineering and Technology", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["UBA49"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Crystal lattices, phase diagrams (Iron-Carbon), heat treatments (annealing, quenching), alloys, and polymers.",
      skillsLearned: ["Phase Diagrams", "Heat Treatment", "Material Selection"],
      importance: "Determines material selection to ensure components withstand extreme mechanical stress and corrosion.",
      careerApplications: "Metallurgical engineering, aerospace materials."
    },
    {
      code: "MEA05", name: "Engineering Thermodynamics", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["UBA05"], careerDomains: ["Automotive & Thermal Engineering"], difficulty: "Hard",
      description: "First and second laws of thermodynamics, entropy, exergy, gas power cycles (Otto, Diesel, Brayton), and steam cycles.",
      skillsLearned: ["Entropy Analysis", "Gas Power Cycles", "Rankine Steam Cycles"],
      importance: "Fundamental science governing thermal efficiency, power generation, and refrigeration engines.",
      careerApplications: "Thermal power plants, engine design, HVAC."
    },
    {
      code: "UBA55", name: "Statistics, ODE and Complex Analysis", credits: 4, category: "Foundation Maths", semester: 4,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Potential flow theory, complex integration, statistical quality control, and Weibull reliability modeling.",
      skillsLearned: ["Potential Flow", "Statistical QC", "Weibull Reliability"],
      importance: "Used for 2D ideal aerodynamic flow modeling and product reliability analysis.",
      careerApplications: "Aerodynamic airfoil modeling, reliability engineering."
    },
    {
      code: "MEA06", name: "Fundamentals of Manufacturing Processes", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["MEA02"], careerDomains: ["Robotics & Smart Manufacturing", "Industrial Engineering & Operations"], difficulty: "Medium",
      description: "Sand casting, investment casting, hot/cold rolling, forging, extrusion, and plastic injection molding.",
      skillsLearned: ["Casting Design", "Forging & Forming", "Injection Molding"],
      importance: "Teaches industrial mass-production methodologies for shaping molten metals and polymers.",
      careerApplications: "Manufacturing plant engineering, tooling design."
    },
    {
      code: "MEA07", name: "Thermal Engineering", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["MEA05"], careerDomains: ["Automotive & Thermal Engineering"], difficulty: "Hard",
      description: "IC engines, combustion modeling, air compressors, gas turbines, and jet propulsion principles.",
      skillsLearned: ["IC Engine Testing", "Compressor Sizing", "Combustion Analysis"],
      importance: "Applied thermodynamics discipline powering automotive vehicles, aircraft engines, and gas turbines.",
      careerApplications: "Automotive powertrain, aviation turbine design."
    },
    {
      code: "MEA08", name: "Theory of Machines", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CEA02"], careerDomains: ["Design Engineering & FEA Simulation"], difficulty: "Hard",
      description: "Kinematic linkages, velocity and acceleration diagrams, cams, gear trains, gyroscopic motion, and balancing.",
      skillsLearned: ["Kinematic Synthesis", "Gear Trains", "Dynamic Balancing"],
      importance: "Essential for synthesizing mechanisms that translate rotary motion into complex working motions.",
      careerApplications: "Gearbox engineering, robotic kinematics."
    },
    {
      code: "CEA07", name: "Strength of Materials", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CEA02"], careerDomains: ["Design Engineering & FEA Simulation"], difficulty: "Hard",
      description: "Stress, strain, Mohr's circle, shear force and bending moment diagrams, beam deflection, torsion, and buckling.",
      skillsLearned: ["Mohr's Circle", "SFD & BMD", "Torsional Stress"],
      importance: "The definitive engineering science ensuring mechanical structures do not deform or fracture under load.",
      careerApplications: "Stress analysis, pressure vessel design."
    },
    {
      code: "MEA09", name: "Machining Processes and Metrology", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["MEA02"], careerDomains: ["Robotics & Smart Manufacturing"], difficulty: "Medium",
      description: "Metal cutting mechanics, Merchant circle, lathe operations, milling, CNC programming, and precision measurement.",
      skillsLearned: ["CNC G-Code", "Tool Wear Modeling", "Precision Metrology"],
      importance: "Governs precision subtractive manufacturing and micrometric dimensional inspection.",
      careerApplications: "Precision machining, CNC fabrication, quality control."
    },
    {
      code: "MEA10", name: "Heat and Mass Transfer", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["MEA05"], careerDomains: ["Automotive & Thermal Engineering"], difficulty: "Hard",
      description: "Conduction (Fourier's law), convection (boundary layer, Nusselt number), radiation, heat exchangers (LMTD, NTU), and mass diffusion.",
      skillsLearned: ["Heat Exchanger Sizing", "Convective Cooling", "Radiation Analysis"],
      importance: "Critical for thermal management of electric vehicle battery packs, microelectronics, and cooling towers.",
      careerApplications: "EV battery cooling, microelectronics thermal design, boilers."
    },
    {
      code: "MEA11", name: "Design of Machine Elements", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["CEA07"], careerDomains: ["Design Engineering & FEA Simulation"], difficulty: "Hard",
      description: "Design against fatigue (Goodman/Soderberg criteria), shafts, keys, couplings, welded and riveted joints, and springs.",
      skillsLearned: ["Fatigue Life Sizing", "Shaft Design", "Bolted & Welded Joints"],
      importance: "Teaches formal mechanical component design methodology according to international safety standards.",
      careerApplications: "Mechanical equipment design, machine design engineering."
    },
    {
      code: "MEA12", name: "Finite Element Analysis (FEA)", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["CEA07"], careerDomains: ["Design Engineering & FEA Simulation"], difficulty: "Hard",
      description: "Variational formulation, 1D and 2D elements, stiffness matrix assembly, ANSYS/Abaqus simulation, and stress meshing.",
      skillsLearned: ["ANSYS / Abaqus", "Stiffness Assembly", "Stress Meshing"],
      importance: "Indispensable modern digital engineering simulation tool used across automotive, aerospace, and defense.",
      careerApplications: "Structural crash simulation, aerospace stress analysis."
    },
    {
      code: "MEA13", name: "Design of Transmission Systems", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["MEA08"], careerDomains: ["Design Engineering & FEA Simulation"], difficulty: "Hard",
      description: "Spur, helical, bevel, and worm gears, multi-speed gearboxes, belts, chains, clutches, and brake systems.",
      skillsLearned: ["Gearbox Sizing", "Gear Tooth Stress", "Clutch & Brake Design"],
      importance: "Underlies vehicular transmissions, industrial reduction gearboxes, and heavy mining machinery.",
      careerApplications: "Automotive transmission design, industrial machinery."
    },
    {
      code: "MEA14", name: "Industrial Engineering and Management", credits: 4, category: "Humanities & Management", semester: 5,
      prerequisites: [], careerDomains: ["Industrial Engineering & Operations"], difficulty: "Easy",
      description: "Plant layout, work study, ergonomics, inventory control (EOQ), supply chain management, and lean manufacturing.",
      skillsLearned: ["Lean Manufacturing", "Plant Layout", "Supply Chain Optimization"],
      importance: "Optimizes factory floor throughput, worker ergonomics, and reduces manufacturing waste.",
      careerApplications: "Operations management, plant layout engineering."
    },
    {
      code: "MEA47", name: "Automobile Engineering", credits: 4, category: "Professional Elective", semester: 5,
      prerequisites: ["MEA07"], careerDomains: ["Automotive & Thermal Engineering"], difficulty: "Medium",
      description: "Chassis construction, steering geometry (Ackermann), suspension systems, braking systems (ABS), and automotive aerodynamics.",
      skillsLearned: ["Suspension Dynamics", "Steering Geometry", "Chassis Design"],
      importance: "Direct domain specialization for passenger car, commercial truck, and racing vehicle engineering.",
      careerApplications: "Automotive OEM engineering, chassis development."
    },
    {
      code: "MEA15", name: "Automation in Manufacturing & Industry 4.0", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["MEA09"], careerDomains: ["Robotics & Smart Manufacturing"], difficulty: "Medium",
      description: "Automated material handling, automated guided vehicles (AGVs), cellular manufacturing, flexible manufacturing systems (FMS), and digital twins.",
      skillsLearned: ["Digital Twins", "Automated Transfer Lines", "FMS Design"],
      importance: "Drives modern smart factory transformation with autonomous robotic cells and interconnected sensors.",
      careerApplications: "Smart factory engineering, automation consulting."
    },
    {
      code: "MEA16", name: "Process Planning and Cost Estimation", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["MEA06"], careerDomains: ["Industrial Engineering & Operations"], difficulty: "Easy",
      description: "Manufacturing routing sheets, machining time estimation, tooling selection, labor cost appraisal, and bill of materials.",
      skillsLearned: ["Process Routing", "Machining Time Estimation", "BOM Preparation"],
      importance: "Bridges design engineering with factory floor economics and commercial cost competitiveness.",
      careerApplications: "Cost estimation, production planning."
    },
    {
      code: "MEA20", name: "Applied Hydraulics and Pneumatics", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["CEA06"], careerDomains: ["Industrial Engineering & Operations"], difficulty: "Medium",
      description: "Hydraulic pumps, valves (directional, pressure, flow control), pneumatic actuators, electro-hydraulic circuits, and PLC sequencing.",
      skillsLearned: ["Hydraulic Circuit Design", "Pneumatic Sequencing", "Electro-Hydraulics"],
      importance: "Powers heavy industrial construction excavators, aerospace landing gears, and factory presses.",
      careerApplications: "Heavy machinery hydraulics, automation circuit design."
    },
    {
      code: "ECA28", name: "Mechatronics and Industrial Robotics", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["EEA01"], careerDomains: ["Robotics & Smart Manufacturing"], difficulty: "Medium",
      description: "Sensors and transducers, signal conditioning, microprocessor control of mechanical actuators, stepper/servo motors, and robot kinematics.",
      skillsLearned: ["Robotic Kinematics", "Servo Actuation", "Mechatronics Integration"],
      importance: "Synthesizes mechanical structures with electronic brains and software controllers into autonomous systems.",
      careerApplications: "Robotics engineering, automated pick-and-place systems."
    },
    {
      code: "MEA21", name: "Computational Fluid Dynamics (CFD)", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["CEA06"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Discretization techniques, SIMPLE algorithm, turbulence models (k-epsilon, k-omega), boundary layer mesh inflation, and ANSYS Fluent.",
      skillsLearned: ["ANSYS Fluent", "Turbulence Modeling", "Boundary Meshing"],
      importance: "Simulates airflow over racecars, aircraft wings, turbine blades, and thermal electronic enclosures.",
      careerApplications: "Aerodynamic engineering, thermal CFD specialist."
    },
    {
      code: "MEA22", name: "Additive Manufacturing and 3D Printing", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["MEA04"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Fused deposition modeling (FDM), stereolithography (SLA), selective laser sintering (SLS), direct metal laser sintering (DMLS), and design for additive manufacturing.",
      skillsLearned: ["3D Slicing & DFAM", "Metal 3D Printing (DMLS)", "Topology Optimization"],
      importance: "Revolutionizes aerospace lightweighting and patient-customized medical implants through generative design.",
      careerApplications: "Aerospace bracket manufacturing, medical implant design."
    },
    {
      code: "MEA23", name: "Robotics & Automated Guided Vehicles", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["ECA28"], careerDomains: ["Robotics & Smart Manufacturing"], difficulty: "Hard",
      description: "Industrial manipulator forward/inverse kinematics (DH parameters), path planning, mobile robot chassis, and obstacle avoidance.",
      skillsLearned: ["DH Parameters", "Path Planning", "Obstacle Avoidance"],
      importance: "Critical for deploying autonomous warehouse logistics fleets (Amazon Robotics) and robotic welding arms.",
      careerApplications: "Autonomous warehouse AGVs, robotic assembly lines."
    },
    {
      code: "MEA24", name: "Electric & Hybrid Vehicle Dynamics", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["MEA47"], careerDomains: ["Automotive & Thermal Engineering"], difficulty: "Hard",
      description: "Tire modeling (Pacejka), vehicle ride and handling, regenerative braking blending, torque vectoring, and battery weight distribution.",
      skillsLearned: ["Vehicle Ride & Handling", "Pacejka Tire Modeling", "Torque Vectoring"],
      importance: "Direct engineering competence for tuning the performance, safety, and range of modern electric cars.",
      careerApplications: "EV vehicle dynamics engineering, performance simulation."
    },
    {
      code: "MEA25", name: "Total Quality Management & Six Sigma", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["MEA14"], careerDomains: ["Industrial Engineering & Operations"], difficulty: "Easy",
      description: "DMAIC methodology, statistical process control (SPC charts), FMEA risk assessment, ISO 9001, and Kaizen continuous improvement.",
      skillsLearned: ["Six Sigma DMAIC", "FMEA Risk Analysis", "Statistical Process Control"],
      importance: "Industry standard operational philosophy achieving near-zero manufacturing defect rates.",
      careerApplications: "Quality engineering, continuous improvement manager."
    },
    {
      code: "MEA26", name: "Refrigeration and Air Conditioning (HVAC)", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["MEA05"], careerDomains: ["Automotive & Thermal Engineering"], difficulty: "Medium",
      description: "Vapor compression and absorption systems, eco-friendly refrigerants, psychrometry, cooling load calculations, and duct design.",
      skillsLearned: ["Psychrometric Calculations", "Cooling Load Estimation", "Ductwork Design"],
      importance: "Essential for designing environmental life-support and climate control for data centers, skyscrapers, and hospitals.",
      careerApplications: "HVAC consulting, cleanroom environmental engineering."
    },
    {
      code: "MEA27", name: "Operations Research & Logistics Optimization", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["UBA10"], careerDomains: ["Industrial Engineering & Operations"], difficulty: "Medium",
      description: "Linear programming (Simplex), transportation/assignment problems, queuing theory, PERT/CPM, and simulation.",
      skillsLearned: ["Linear Programming", "PERT / CPM Scheduling", "Queuing Analysis"],
      importance: "Optimizes supply chain routing, freight distribution, and manufacturing project schedules mathematically.",
      careerApplications: "Supply chain optimization, logistics operations."
    },
    {
      code: "MEA71", name: "Capstone Project Phase - I", credits: 4, category: "Capstone & Project", semester: 7,
      prerequisites: ["MEA11"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Mechanical problem formulation, CAD geometric modeling, structural/thermal simulation proof-of-concept, and milestone defense.",
      skillsLearned: ["CAD Assembly", "Engineering Simulation", "Project Scoping"],
      importance: "Synthesizes multi-year mechanical design and thermal theory into a functional engineering prototype.",
      careerApplications: "Product engineering, applied research prototype."
    },
    {
      code: "MEA72", name: "Capstone Project Phase - II", credits: 4, category: "Capstone & Project", semester: 8,
      prerequisites: ["MEA71"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Physical prototype machining and fabrication, experimental testing, vibration/stress validation, and formal committee defense.",
      skillsLearned: ["Physical Fabrication", "Experimental Validation", "Technical Defense"],
      importance: "Culmination of mechanical engineering study demonstrating validated physical machinery delivery.",
      careerApplications: "Commercial product launch, patent application."
    },
    {
      code: "MEA73", name: "Industry Internship & Mechanical Practicum", credits: 4, category: "Capstone & Project", semester: 8,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Full-semester immersion in an automotive OEM, aerospace company, or heavy engineering plant.",
      skillsLearned: ["Plant Engineering", "Quality Standards", "Engineering Workflow"],
      importance: "Bridges academic preparation with large-scale industrial manufacturing and mechanical design.",
      careerApplications: "Full-time mechanical design engineer, plant operations."
    },
    {
      code: "MEA28", name: "Renewable Energy Technologies", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["MEA05"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Solar thermal collectors, aerodynamic wind turbine blade design, hydro power plants, and geothermal heat pumps.",
      skillsLearned: ["Wind Blade Aerodynamics", "Solar Thermal Systems", "Geothermal Energy"],
      importance: "Provides mechanical engineers with green technology design competence for zero-carbon energy generation.",
      careerApplications: "Wind turbine engineering, green energy consulting."
    },
    {
      code: "MEA29", name: "Aerodynamics and Propulsion Basics", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["CEA06"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Airfoil lift and drag, shock waves, supersonic compressible flow, rocket nozzles, and turbofan engines.",
      skillsLearned: ["Lift & Drag Analysis", "Compressible Flow", "Rocket Nozzle Design"],
      importance: "Foundational aerothermal principles for aerospace rockets, satellites, missiles, and commercial jetliners.",
      careerApplications: "Aerospace engineering, missile propulsion."
    },
    {
      code: "MEA30", name: "Product Lifecycle Management (PLM)", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["MEA01"], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Engineering change management (ECO), CAD-ERP integration, Teamcenter/Windchill PLM software, and circular economy design.",
      skillsLearned: ["Teamcenter / Windchill", "ECO Workflows", "Circular Design"],
      importance: "Connects multi-site global engineering design teams through centralized digital product records.",
      careerApplications: "PLM analyst, enterprise CAD administration."
    },
    {
      code: "ECA68", name: "Engineering Economics & Intellectual Property", credits: 4, category: "Humanities & Management", semester: 8,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Cost-benefit modeling, return on investment, patent filing, and commercialization strategies.",
      skillsLearned: ["Cost-Benefit Modeling", "Patent Landscaping", "Tech Entrepreneurship"],
      importance: "Equips graduating engineers to evaluate the commercial viability and financial returns of technological innovations.",
      careerApplications: "Engineering management, technology consulting, venture capital."
    }
  ],
  // ── CIVIL (Civil Engineering) — 48 Courses (192 Credits) ──
  CIVIL: [
    {
      code: "UBA01", name: "Engineering Mathematics - I", credits: 4, category: "Foundation Maths", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Differential and integral calculus, matrix algebra, and linear transformations for engineering systems.",
      skillsLearned: ["Matrices", "Differential Calculus", "Integral Calculus"],
      importance: "Essential mathematical foundation for all engineering analysis.",
      careerApplications: "Algorithmic modeling, scientific computing."
    },
    {
      code: "UBA48", name: "Engineering Physics", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Quantum mechanics, solid-state band theory, laser optics, and fiber optic wave guidance.",
      skillsLearned: ["Quantum Principles", "Optics & Lasers", "Semiconductor Basics"],
      importance: "Explains underlying physical phenomena governing semiconductor chips and optical communication.",
      careerApplications: "Photonics, optoelectronics, semiconductor research."
    },
    {
      code: "UBA49", name: "Engineering Chemistry", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Electrochemical cells, corrosion mitigation, battery technologies, and polymer materials.",
      skillsLearned: ["Electrochemistry", "Corrosion Prevention", "Polymers"],
      importance: "Essential for battery energy storage, chip fabrication chemistry, and materials.",
      careerApplications: "Battery manufacturing, microelectronics packaging."
    },
    {
      code: "UBA28", name: "Professional Ethics and Legal Practices", credits: 4, category: "Humanities & Management", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Engineering ethics, intellectual property rights, environmental regulations, and corporate compliance.",
      skillsLearned: ["Engineering Ethics", "IP & Patents", "Regulatory Compliance"],
      importance: "Instills ethical decision-making and patent protection awareness for engineering leadership.",
      careerApplications: "Patent filing, engineering law, corporate governance."
    },
    {
      code: "BTA01", name: "Biology and Environmental Science for Engineers", credits: 4, category: "Foundation Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Cellular biology, bio-inspired engineering, ecosystem sustainability, and environmental impact assessment.",
      skillsLearned: ["Bio-inspired Design", "Environmental Analysis", "Sustainability"],
      importance: "Provides foundation for green technologies, wearable bio-sensors, and eco-friendly devices.",
      careerApplications: "Biomedical sensors, sustainable hardware development."
    },
    {
      code: "CSA07", name: "Problem Solving using C", credits: 4, category: "Engineering Science", semester: 1,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Structured procedural programming, memory pointers, dynamic allocation, bitwise operations, and file I/O in C.",
      skillsLearned: ["C Programming", "Pointers & Memory", "Modular Design"],
      importance: "Low-level system programming capability essential for firmware and hardware-level driver development.",
      careerApplications: "Embedded firmware, microcontroller programming."
    },
    {
      code: "UBA05", name: "Engineering Mathematics - II", credits: 4, category: "Foundation Maths", semester: 2,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Multiple integrals, vector calculus, line integrals, and second-order differential equations.",
      skillsLearned: ["Vector Calculus", "Multiple Integrals", "Differential Modeling"],
      importance: "Critical for continuum mechanics, fluid dynamics, and 3D structural stress analysis.",
      careerApplications: "Stress analysis, hydraulic simulations, structural modeling."
    },
    {
      code: "UBA06", name: "Applied Mathematics", credits: 4, category: "Foundation Maths", semester: 2,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Differential equations, Laplace transforms, and boundary value problems.",
      skillsLearned: ["ODEs", "Laplace Transforms", "Boundary Problems"],
      importance: "Essential for dynamic structural response and wave propagation in soils.",
      careerApplications: "Dynamic structural modeling, geotechnical analysis."
    },
    {
      code: "EEA01", name: "Basic Electrical and Electronics Engineering", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Electric circuits, electrical wiring, building lighting, and sensor basics.",
      skillsLearned: ["Electrical Circuits", "Building Electrification", "Sensors"],
      importance: "Foundational for building electrification, HVAC wiring, and smart structural health monitoring.",
      careerApplications: "Building electrical services, sensor instrumentation."
    },
    {
      code: "MEA01", name: "Engineering Graphics & CAD", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Orthographic projections, isometric views, plan and elevation drafting, and AutoCAD 2D drafting.",
      skillsLearned: ["AutoCAD 2D Drafting", "Building Plans & Elevations", "Orthographic Projections"],
      importance: "The universal visual drafting language of civil construction drawings and architectural plans.",
      careerApplications: "Architectural drafting, structural drawings."
    },
    {
      code: "MEA02", name: "Engineering Workshop Practices", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Plumbing, carpentry, masonry practices, and surveying field tool setup.",
      skillsLearned: ["Plumbing", "Carpentry & Formwork", "Masonry Basics"],
      importance: "Provides hands-on practical appreciation of building construction trades and formwork assembly.",
      careerApplications: "On-site construction supervision, formwork inspection."
    },
    {
      code: "CSA08", name: "Python Programming for Civil Engineers", credits: 4, category: "Engineering Science", semester: 2,
      prerequisites: ["CSA07"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Python development, NumPy, Matplotlib, and structural engineering calculation automation.",
      skillsLearned: ["Python Scripting", "NumPy", "Structural Automation"],
      importance: "Automates structural analysis loops, hydraulic flow calculations, and survey data processing.",
      careerApplications: "Engineering automation, GIS scripting."
    },
    {
      code: "UBA10", name: "Numerical Methods", credits: 4, category: "Foundation Maths", semester: 3,
      prerequisites: ["UBA06"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Roots of non-linear equations, finite difference methods, and numerical integration.",
      skillsLearned: ["Finite Differences", "Numerical Quadrature", "Equation Solvers"],
      importance: "Powers computational solvers in structural matrix analysis and groundwater seepage models.",
      careerApplications: "Structural finite elements, seepage modeling."
    },
    {
      code: "CEA02", name: "Engineering Mechanics", credits: 4, category: "Engineering Science", semester: 3,
      prerequisites: [], careerDomains: ["Structural Engineering & BIM"], difficulty: "Hard",
      description: "Statics of particles and rigid bodies, equilibrium, friction, trusses (method of joints/sections), and centroids.",
      skillsLearned: ["Free Body Diagrams", "Truss Analysis", "Equilibrium Statics"],
      importance: "The indispensable physical foundation for analyzing load paths and equilibrium in civil structures.",
      careerApplications: "Truss bridge design, structural equilibrium."
    },
    {
      code: "CEA04", name: "Engineering Geology & Disaster Mitigation", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: [], careerDomains: ["Geotechnical & Disaster Mitigation"], difficulty: "Easy",
      description: "Mineralogy, petrology, geological structures (faults, folds), weathering, landslides, and earthquake zones.",
      skillsLearned: ["Geological Site Characterization", "Fault & Fold Identification", "Landslide Risk Mapping"],
      importance: "Ensures mega-infrastructure (dams, tunnels, highways) is founded on stable, safe bedrock strata.",
      careerApplications: "Tunneling geology, dam site selection."
    },
    {
      code: "CEA05", name: "Surveying and Geomatics", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["MEA01"], careerDomains: ["Transportation & Infrastructure Planning"], difficulty: "Medium",
      description: "Chaining, leveling, contouring, theodolite traversing, Total Station, and GPS positioning.",
      skillsLearned: ["Total Station Operation", "Leveling & Contouring", "GPS Topographic Surveying"],
      importance: "The foundational field measurement discipline establishing boundaries and elevations for construction.",
      careerApplications: "Topographic surveying, highway alignment, construction layout."
    },
    {
      code: "CEA06", name: "Fluid Mechanics and Machinery", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["UBA05"], careerDomains: ["Water Resources & Environmental Engineering"], difficulty: "Hard",
      description: "Fluid statics, hydrostatic pressure, buoyant stability, continuity equation, Bernoulli's theorem, and hydraulic pumps.",
      skillsLearned: ["Hydrostatic Pressure", "Bernoulli Principle", "Flow in Pipes"],
      importance: "Governs water pressure against dam walls, flow through city municipal pipelines, and drainage pumps.",
      careerApplications: "Water supply piping, dam hydrostatic design."
    },
    {
      code: "CEA07", name: "Strength of Materials", credits: 4, category: "Professional Core", semester: 3,
      prerequisites: ["UBA05"], careerDomains: ["Structural Engineering & BIM"], difficulty: "Hard",
      description: "Stress, strain, Hooke's law, shear force and bending moment diagrams, flexural stresses, and column buckling (Euler's formula).",
      skillsLearned: ["SFD & BMD Calculations", "Flexural & Shear Stresses", "Euler Column Buckling"],
      importance: "The definitive engineering science ensuring civil beams, columns, and slabs do not crack or buckle.",
      careerApplications: "Structural beam design, column sizing."
    },
    {
      code: "UBA55", name: "Statistics, ODE and Complex Analysis", credits: 4, category: "Foundation Maths", semester: 4,
      prerequisites: ["UBA01"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Conformal mapping, potential flow, complex integration, and hydrological frequency statistics.",
      skillsLearned: ["Hydrological Statistics", "Conformal Mapping", "Potential Flow"],
      importance: "Used for flow net seepage mapping under gravity dams and statistical flood return period calculation.",
      careerApplications: "Seepage flow nets, 100-year flood risk modeling."
    },
    {
      code: "CEA03", name: "Design of Reinforced Concrete Structures", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CEA07"], careerDomains: ["Structural Engineering & BIM"], difficulty: "Hard",
      description: "Limit state design of singly and doubly reinforced beams, slabs (one-way and two-way), columns, and isolated footings (IS 456).",
      skillsLearned: ["Limit State RC Design", "Beam & Slab Detailing", "IS 456 Standards"],
      importance: "Core civil engineering curriculum for designing durable reinforced concrete buildings and foundations.",
      careerApplications: "High-rise concrete building design, structural engineering."
    },
    {
      code: "CEA09", name: "Transportation Engineering", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CEA05"], careerDomains: ["Transportation & Infrastructure Planning"], difficulty: "Medium",
      description: "Highway geometric design, sight distances, horizontal and vertical curves, traffic flow theory, and pavement layers.",
      skillsLearned: ["Highway Geometric Design", "Sight Distance Analysis", "Traffic Capacity Modeling"],
      importance: "Designs high-speed expressways, city road intersections, and traffic flow networks safely.",
      careerApplications: "Highway engineering, municipal traffic planning."
    },
    {
      code: "CEA10", name: "Hydraulic Engineering", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CEA06"], careerDomains: ["Water Resources & Environmental Engineering"], difficulty: "Hard",
      description: "Open channel flow, Manning's equation, specific energy, hydraulic jumps, water hammer in pipes, and surge tanks.",
      skillsLearned: ["Open Channel Flow", "Hydraulic Jump Sizing", "Water Hammer Protection"],
      importance: "Designs irrigation canals, spillways, flood channels, and municipal stormwater drainage networks.",
      careerApplications: "Canal engineering, spillway design, flood mitigation."
    },
    {
      code: "CEA11", name: "Hydrology and Water Resources Engineering", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CEA06"], careerDomains: ["Water Resources & Environmental Engineering"], difficulty: "Medium",
      description: "Precipitation analysis, hydrograph analysis, unit hydrograph, reservoir capacity planning, and groundwater recharge.",
      skillsLearned: ["Unit Hydrograph Modeling", "Reservoir Sizing", "Groundwater Estimation"],
      importance: "Manages regional watershed resources, drought security, and river basin reservoir planning.",
      careerApplications: "Water resource management, watershed conservation."
    },
    {
      code: "CEA22", name: "Construction Materials and Technology", credits: 4, category: "Professional Core", semester: 4,
      prerequisites: ["CEA07"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Cement hydration chemistry, concrete mix design (IS 10262), high-strength concrete, fly ash, steel, and timber.",
      skillsLearned: ["Concrete Mix Design", "Material Durability Testing", "Sustainable Binders"],
      importance: "Governs concrete quality, slump workability, compressive strength, and durability on construction sites.",
      careerApplications: "Concrete quality control, batching plant engineering."
    },
    {
      code: "CEA13", name: "Design of Steel Structures", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["CEA07"], careerDomains: ["Structural Engineering & BIM"], difficulty: "Hard",
      description: "Limit state design of bolted and welded connections, tension members, compression members, roof trusses, and plate girders (IS 800).",
      skillsLearned: ["Steel Connection Detailing", "Plate Girder Sizing", "IS 800 Steel Design"],
      importance: "Essential for designing industrial factory sheds, steel bridges, transmission towers, and stadiums.",
      careerApplications: "Structural steel design, industrial shed fabrication."
    },
    {
      code: "CEA14", name: "Environmental Engineering", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["BTA01"], careerDomains: ["Water Resources & Environmental Engineering"], difficulty: "Medium",
      description: "Water quality parameters (BOD, COD), drinking water treatment units, wastewater sewer hydraulics, and sewage treatment plants (STP).",
      skillsLearned: ["STP Treatment Sizing", "BOD / COD Water Testing", "Sewerage Hydraulic Design"],
      importance: "Protects public health and rivers by designing clean drinking water and municipal sewage systems.",
      careerApplications: "Water treatment engineering, environmental consulting."
    },
    {
      code: "CEA17", name: "Remote Sensing and GIS", credits: 4, category: "Professional Elective", semester: 5,
      prerequisites: ["CEA05"], careerDomains: ["Geotechnical & Disaster Mitigation"], difficulty: "Medium",
      description: "Satellite multispectral imagery, spatial raster and vector data layers, ArcGIS/QGIS software, and spatial analytics.",
      skillsLearned: ["ArcGIS / QGIS", "Satellite Image Interpretation", "Spatial Multi-criteria Analysis"],
      importance: "Transforms satellite earth observation into actionable maps for smart cities, watershed, and land-use.",
      careerApplications: "GIS spatial analyst, smart city planning."
    },
    {
      code: "CEA18", name: "Estimation, Costing and Valuation", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["CEA03"], careerDomains: ["Transportation & Infrastructure Planning"], difficulty: "Medium",
      description: "Bill of quantities (BOQ), rate analysis, standard schedule of rates (CPWD/State PWD), contracts, and building valuation.",
      skillsLearned: ["BOQ Preparation", "Rate Analysis", "Building Valuation"],
      importance: "Bridges civil structural designs with financial budgets, public tenders, and commercial real estate.",
      careerApplications: "Quantity surveying, construction bidding, real estate appraisal."
    },
    {
      code: "CEA34", name: "Soil Mechanics", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["CEA07"], careerDomains: ["Geotechnical & Disaster Mitigation"], difficulty: "Hard",
      description: "Phase relationships, Atterberg limits, soil permeability, Darcy's law, consolidation settlement (Terzaghi), and shear strength (Mohr-Coulomb).",
      skillsLearned: ["Mohr-Coulomb Shear Strength", "Terzaghi Consolidation", "Permeability Seepage"],
      importance: "The definitive geotechnical science determining how natural soils bear the weight of heavy buildings.",
      careerApplications: "Geotechnical investigation, soil lab testing."
    },
    {
      code: "CEA63", name: "Structural Analysis - I", credits: 4, category: "Professional Core", semester: 5,
      prerequisites: ["CEA07"], careerDomains: ["Structural Engineering & BIM"], difficulty: "Hard",
      description: "Indeterminate structures, energy principles (Castigliano's theorem), slope deflection method, and moment distribution method (Hardy Cross).",
      skillsLearned: ["Moment Distribution Method", "Slope Deflection Equations", "Castigliano Energy Theorems"],
      importance: "Classical exact analytical methods for calculating internal bending moments in continuous building frames.",
      careerApplications: "Building frame analysis, structural engineering."
    },
    {
      code: "CEA35", name: "Foundation Engineering", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["CEA34"], careerDomains: ["Geotechnical & Disaster Mitigation"], difficulty: "Hard",
      description: "Bearing capacity of shallow footings (Terzaghi, Meyerhof), pile foundations, pile load tests, well foundations, and earth pressure on retaining walls.",
      skillsLearned: ["Terzaghi Bearing Capacity", "Deep Pile Sizing", "Retaining Wall Stability"],
      importance: "Guarantees that skyscrapers, bridges, and sea walls transfer vertical and lateral loads into soil without collapse.",
      careerApplications: "Foundation design, deep piling contracting."
    },
    {
      code: "CEA64", name: "Structural Analysis - II", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["CEA63"], careerDomains: ["Structural Engineering & BIM"], difficulty: "Hard",
      description: "Matrix flexibility and stiffness methods, direct stiffness method, influence line diagrams for indeterminate beams, and plastic analysis.",
      skillsLearned: ["Direct Stiffness Method", "Plastic Collapse Analysis", "Structural Matrix Assembly"],
      importance: "Underlies the computational algorithms inside commercial structural software like STAAD.Pro and ETABS.",
      careerApplications: "Structural finite element software, advanced frame modeling."
    },
    {
      code: "CEA65", name: "Construction Techniques and Management", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["CEA18"], careerDomains: ["Transportation & Infrastructure Planning"], difficulty: "Medium",
      description: "Substructure construction methods, heavy construction equipment, project scheduling with CPM/PERT, and construction site safety.",
      skillsLearned: ["CPM / PERT Scheduling", "Heavy Equipment Management", "Site Safety Management"],
      importance: "Delivers mega-projects (airports, highways, towers) on schedule, within budget, and with zero site fatalities.",
      careerApplications: "Construction project management, general contracting."
    },
    {
      code: "CEA66", name: "Building Planning and Modeling using BIM", credits: 4, category: "Professional Core", semester: 6,
      prerequisites: ["CEA03"], careerDomains: ["Structural Engineering & BIM"], difficulty: "Medium",
      description: "Building bye-laws, National Building Code (NBC), 3D Revit architectural modeling, MEP clash detection, and 4D/5D BIM coordination.",
      skillsLearned: ["Autodesk Revit BIM", "MEP Clash Detection", "National Building Code"],
      importance: "Industry standard modern digital twin methodology for collaborative architecture and structural delivery.",
      careerApplications: "BIM coordinator, digital design engineer."
    },
    {
      code: "CEA23", name: "Prestressed Concrete Structures", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["CEA03"], careerDomains: ["Structural Engineering & BIM"], difficulty: "Hard",
      description: "Principles of prestressing, pre-tensioning and post-tensioning systems, tendon profile design, loss of prestress, and bridge girder design.",
      skillsLearned: ["Post-Tensioning Systems", "Prestress Loss Calculations", "Bridge Girder Design"],
      importance: "Enables long-span flyovers, metro viaducts, and column-free auditorium roofs without mid-span sagging.",
      careerApplications: "Metro viaduct engineering, long-span bridge contracting."
    },
    {
      code: "CEA24", name: "Highway Engineering and Pavement Design", credits: 4, category: "Professional Elective", semester: 6,
      prerequisites: ["CEA09"], careerDomains: ["Transportation & Infrastructure Planning"], difficulty: "Medium",
      description: "Flexible pavement design (IRC 37), rigid concrete pavement design (IRC 58), subgrade CBR evaluation, and pavement rehabilitation.",
      skillsLearned: ["IRC 37 Flexible Design", "IRC 58 Rigid Pavement", "Pavement Distress Evaluation"],
      importance: "Designs heavy-duty highways that resist rutting, fatigue cracking, and wheel-load pounding over 30 years.",
      careerApplications: "Highway contracting, pavement engineering consulting."
    },
    {
      code: "CEA25", name: "Bridge Engineering & Viaduct Design", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["CEA03"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "IRC bridge loadings (Class AA, 70R), design of slab bridges, T-beam bridges, box culverts, bridge bearings (elastomeric), and piers.",
      skillsLearned: ["IRC Bridge Loadings", "Box Girder Viaduct Sizing", "Bridge Bearing Design"],
      importance: "Specialized structural engineering discipline creating durable river bridges, elevated flyovers, and rail viaducts.",
      careerApplications: "Bridge design engineer, highway viaduct consultant."
    },
    {
      code: "CEA26", name: "Air Pollution & Industrial Waste Management", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["CEA14"], careerDomains: ["Water Resources & Environmental Engineering"], difficulty: "Medium",
      description: "Air quality monitoring (PM2.5, PM10), particulate control devices (cyclones, bag filters, ESP), and industrial effluent zero-liquid discharge (ZLD).",
      skillsLearned: ["Air Quality Modeling", "Industrial Effluent ZLD", "Pollution Control Hardware"],
      importance: "Mitigates heavy industrial air and toxic chemical emissions to protect neighboring urban communities.",
      careerApplications: "Industrial pollution control, environmental compliance auditor."
    },
    {
      code: "CEA27", name: "Earthquake Engineering & Seismic Design", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["CEA63"], careerDomains: ["Structural Engineering & BIM"], difficulty: "Hard",
      description: "Seismic ground motion, response spectra, equivalent static lateral force procedure (IS 1893), ductile detailing (IS 13920), and base isolation.",
      skillsLearned: ["IS 1893 Seismic Design", "IS 13920 Ductile Detailing", "Base Isolation Concepts"],
      importance: "Ensures buildings and bridges withstand violent tectonic earthquakes without sudden collapse.",
      careerApplications: "Seismic retrofitting, structural design engineer."
    },
    {
      code: "CEA28", name: "Smart Cities & Urban Infrastructure Planning", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["CEA09"], careerDomains: ["Transportation & Infrastructure Planning"], difficulty: "Medium",
      description: "Master planning, smart mobility, integrated solid waste management, intelligent utility grids, and urban resilience.",
      skillsLearned: ["Urban Master Planning", "Smart Waste Management", "Utility Corridor Coordination"],
      importance: "Architects sustainable, technologically interconnected municipal ecosystems for millions of citizens.",
      careerApplications: "Urban development authority, smart city planning consultant."
    },
    {
      code: "CEA29", name: "Ground Improvement Techniques", credits: 4, category: "Professional Elective", semester: 7,
      prerequisites: ["CEA34"], careerDomains: ["Geotechnical & Disaster Mitigation"], difficulty: "Medium",
      description: "Vibro-compaction, dynamic compaction, vertical drains (PVD), stone columns, grouting, soil nailing, and geosynthetics.",
      skillsLearned: ["Stone Column Installation", "Geosynthetic Reinforcement", "Soil Nailing Stabilization"],
      importance: "Stabilizes marshy soils and steep hill slopes to enable safe mega-highway and airport runway construction.",
      careerApplications: "Ground stabilization contracting, geotechnical consulting."
    },
    {
      code: "CEA71", name: "Capstone Project Phase - I", credits: 4, category: "Capstone & Project", semester: 7,
      prerequisites: ["CEA03"], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Civil engineering problem formulation, architectural planning, structural loading calculations, and initial design milestone defense.",
      skillsLearned: ["Structural Problem Scoping", "Architectural Layout Integration", "Code Compliance Review"],
      importance: "Synthesizes multi-year structural, geotechnical, and environmental concepts into a complete engineering proposal.",
      careerApplications: "Structural consulting proposal, development project design."
    },
    {
      code: "CEA72", name: "Capstone Project Phase - II", credits: 4, category: "Capstone & Project", semester: 8,
      prerequisites: ["CEA71"], careerDomains: ["Engineering Core"], difficulty: "Hard",
      description: "Complete structural modeling (ETABS/STAAD), detailed RCC/steel construction drawings, BOQ, and committee defense.",
      skillsLearned: ["ETABS / STAAD.Pro Modeling", "Structural Detailing Drawings", "Technical Defense"],
      importance: "Culmination of undergraduate study delivering a validated, ready-for-construction infrastructure project.",
      careerApplications: "Ready-to-build civil construction package, patent application."
    },
    {
      code: "CEA73", name: "Industry Internship & Civil Practicum", credits: 4, category: "Capstone & Project", semester: 8,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Medium",
      description: "Full-semester immersion on a major live construction site, infrastructure development agency, or structural design consultancy.",
      skillsLearned: ["On-site Quality Assurance", "Contractor Coordination", "Structural Field Inspection"],
      importance: "Bridges academic design theory with harsh, real-world high-stakes construction site execution.",
      careerApplications: "Full-time site civil engineer, structural design engineer."
    },
    {
      code: "CEA30", name: "Port, Harbor and Airport Engineering", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["CEA09"], careerDomains: ["Transportation & Infrastructure Planning"], difficulty: "Medium",
      description: "Breakwaters, docks, dredging, airport runway orientation (wind rose), terminal layout, and ICAO standards.",
      skillsLearned: ["Wind Rose Runway Design", "Breakwater Sizing", "ICAO Airport Standards"],
      importance: "Specialized maritime and aviation infrastructure engineering connecting global supply chains.",
      careerApplications: "Airport development authority, port infrastructure engineering."
    },
    {
      code: "CEA31", name: "Design of Water & Wastewater Treatment Plants", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["CEA14"], careerDomains: ["Water Resources & Environmental Engineering"], difficulty: "Hard",
      description: "Hydraulic profiling of WTP/STP units, clariflocculators, rapid sand filters, activated sludge reactors, and sludge digestion.",
      skillsLearned: ["Treatment Hydraulic Profile", "Biological Reactor Design", "Sludge Dewatering Sizing"],
      importance: "Detailed structural and process engineering for utility municipal water purification plants.",
      careerApplications: "Municipal infrastructure engineering, public health engineering."
    },
    {
      code: "CEA32", name: "Sustainable Green Buildings & LEED Certification", credits: 4, category: "Professional Elective", semester: 8,
      prerequisites: ["CEA22"], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Passive solar architecture, rainwater harvesting, energy modeling, daylighting analysis, and GRIHA/LEED rating frameworks.",
      skillsLearned: ["LEED / GRIHA Rating Framework", "Passive Solar Building Design", "Energy Simulation"],
      importance: "Empowers civil engineers to design net-zero energy, carbon-neutral commercial buildings.",
      careerApplications: "Green building consultant, sustainable architecture."
    },
    {
      code: "ECA68", name: "Engineering Economics & Intellectual Property", credits: 4, category: "Humanities & Management", semester: 8,
      prerequisites: [], careerDomains: ["Engineering Core"], difficulty: "Easy",
      description: "Cost-benefit modeling, return on investment, patent filing, and commercialization strategies.",
      skillsLearned: ["Cost-Benefit Modeling", "Patent Landscaping", "Tech Entrepreneurship"],
      importance: "Equips graduating engineers to evaluate the commercial viability and financial returns of technological innovations.",
      careerApplications: "Engineering management, technology consulting, venture capital."
    }
  ]
};

window.CAREER_TRACKS_BY_DEPARTMENT = {
  ECE: {
    "VLSI & Chip Design": {
      icon: "⚡", color: "#6C63FF",
      courseSequence: ["ECA01", "ECA02", "ECA06", "ECA11", "ECA59", "ECA60"],
      requiredCourses: ["ECA01", "ECA02", "ECA11", "ECA59"],
      roles: ["VLSI Design Engineer", "ASIC Verification Engineer", "Physical Design Engineer"],
      skills: ["Verilog HDL", "CMOS Design", "Static Timing Analysis", "Cadence Toolflow"],
      certifications: ["Cadence Certified Digital Design", "Synopsys Certified ASIC Specialist"]
    },
    "5G & Wireless Networks": {
      icon: "📡", color: "#00D9A3",
      courseSequence: ["ECA03", "ECA54", "ECA08", "ECA12", "ECA13", "ECA56"],
      requiredCourses: ["ECA54", "ECA08", "ECA12", "ECA56"],
      roles: ["5G RAN Engineer", "RF Design Engineer", "Antenna Engineer"],
      skills: ["Massive MIMO", "RF Link Budgeting", "Digital Modulation", "Beamforming"],
      certifications: ["Qualcomm 5G Associate", "Cisco Certified Wireless Specialist"]
    },
    "Embedded Systems & IoT": {
      icon: "🤖", color: "#FFB800",
      courseSequence: ["CSA07", "ECA02", "ECA10", "ECA14", "ECA58", "ECA62"],
      requiredCourses: ["ECA02", "ECA10", "ECA14", "ECA58"],
      roles: ["Embedded Firmware Engineer", "IoT Systems Architect", "Automotive Electronics Engineer"],
      skills: ["Embedded C/C++", "FreeRTOS", "ARM Cortex Architecture", "MQTT & CoAP"],
      certifications: ["ARM Accredited Engineer", "AWS Certified IoT Developer"]
    },
    "Robotics & Edge AI": {
      icon: "🧠", color: "#FF6B6B",
      courseSequence: ["ECA03", "EEA05", "ECA09", "ECA28", "ECA63", "ECA60"],
      requiredCourses: ["EEA05", "ECA09", "ECA28", "ECA63"],
      roles: ["Edge AI Engineer", "Robotics Perception Engineer", "DSP Systems Specialist"],
      skills: ["Robot Operating System (ROS)", "Embedded TensorRT", "Filter Design", "Sensor Fusion"],
      certifications: ["NVIDIA Certified Edge AI Associate", "ROS Certified Developer"]
    },
  },
  CSE: {
    "Full-Stack & Cloud Computing": {
      icon: "🌐", color: "#6C63FF",
      courseSequence: ["CSA02", "CSA03", "CSA05", "CSA09", "CSA15", "CSA43", "CSA45"],
      requiredCourses: ["CSA03", "CSA05", "CSA15", "CSA43"],
      roles: ["Full-Stack Software Engineer", "Cloud Solutions Architect", "Backend Systems Engineer"],
      skills: ["React & Node.js", "Microservices", "Docker & Kubernetes", "RESTful APIs"],
      certifications: ["AWS Certified Solutions Architect", "CKA Certified Kubernetes Administrator"]
    },
    "AI & Intelligent Systems": {
      icon: "🤖", color: "#00D9A3",
      courseSequence: ["CSA08", "CSA06", "CSA17", "CSA47", "CSA65"],
      requiredCourses: ["CSA06", "CSA17", "CSA47", "CSA65"],
      roles: ["Machine Learning Engineer", "Generative AI Specialist", "AI Systems Architect"],
      skills: ["PyTorch", "Transformer Models", "RAG Systems", "Vector Databases"],
      certifications: ["TensorFlow Developer Certificate", "Google Cloud Professional ML Engineer"]
    },
    "Cybersecurity & Networks": {
      icon: "🛡️", color: "#FF6B6B",
      courseSequence: ["CSA07_NET", "CSA51", "CSA58", "CSA60", "CSA61"],
      requiredCourses: ["CSA07_NET", "CSA51", "CSA60", "CSA61"],
      roles: ["Security Operations Engineer", "Penetration Tester", "Incident Response Analyst"],
      skills: ["Public Key Cryptography", "SIEM & Threat Hunting", "Digital Forensics", "Network Security"],
      certifications: ["CompTIA Security+", "Certified Information Systems Security Professional (CISSP)"]
    },
    "Systems Software & High Performance Computing": {
      icon: "⚙️", color: "#FFB800",
      courseSequence: ["CSA04", "CSA12", "CSA13", "CSA14", "CSA68"],
      requiredCourses: ["CSA04", "CSA12", "CSA14", "CSA68"],
      roles: ["Systems Software Engineer", "Compiler Engineer", "GPU Computing Engineer"],
      skills: ["Linux Kernel Internals", "CUDA C/C++", "Compiler Optimization", "Parallel Computing"],
      certifications: ["NVIDIA Certified CUDA Developer", "Linux Foundation Certified System Engineer"]
    },
  },
  AIML: {
    "Deep Learning & Generative AI": {
      icon: "🤖", color: "#6C63FF",
      courseSequence: ["CSA08", "MLA02", "MLA04", "CSA47", "CSA65", "MLA12"],
      requiredCourses: ["MLA02", "MLA04", "CSA65", "MLA12"],
      roles: ["Deep Learning Research Engineer", "LLM Engineer", "Generative AI Architect"],
      skills: ["PyTorch", "Diffusion Models", "Transformers & Attention", "LoRA Fine-Tuning"],
      certifications: ["DeepLearning.AI TensorFlow Specialization", "Hugging Face Generative AI Expert"]
    },
    "Reinforcement Learning & Robotics": {
      icon: "🕹️", color: "#00D9A3",
      courseSequence: ["UBA53", "MLA02", "MLA03", "MLA06"],
      requiredCourses: ["UBA53", "MLA02", "MLA03", "MLA06"],
      roles: ["Reinforcement Learning Scientist", "Autonomous Systems Engineer", "Robotic Perception Specialist"],
      skills: ["Markov Decision Processes", "PPO & Actor-Critic", "ROS Integration", "SLAM"],
      certifications: ["NVIDIA Certified Robotics Associate", "DeepLearning.AI RL Specialization"]
    },
    "Computer Vision & Perception": {
      icon: "👁️", color: "#FFB800",
      courseSequence: ["CSA08", "MLA04", "ITA05", "MLA12"],
      requiredCourses: ["CSA08", "MLA04", "ITA05"],
      roles: ["Computer Vision Engineer", "Visual Inspection Specialist", "Autonomous Perception Engineer"],
      skills: ["YOLO Object Detection", "Image Segmentation", "OpenCV", "3D NeRF Reconstruction"],
      certifications: ["OpenCV Certified Vision Specialist", "Intel Edge AI Developer Certificate"]
    },
    "NLP & Language Technologies": {
      icon: "💬", color: "#FF6B6B",
      courseSequence: ["CSA03", "MLA04", "DSA03", "CSA65"],
      requiredCourses: ["MLA04", "DSA03", "CSA65"],
      roles: ["NLP Engineer", "Conversational AI Architect", "Computational Linguist"],
      skills: ["Transformer Architectures", "BERT & GPT", "Vector Embeddings", "Prompt Engineering"],
      certifications: ["Stanford NLP Online Specialization", "Hugging Face NLP Specialist"]
    },
  },
  AIDS: {
    "Big Data Engineering & Cloud": {
      icon: "🐘", color: "#6C63FF",
      courseSequence: ["CSA05", "CSA15", "DSA05", "DSA09", "DSA10"],
      requiredCourses: ["CSA05", "CSA15", "DSA05", "DSA09"],
      roles: ["Big Data Engineer", "Cloud Data Architect", "Data Pipeline Specialist"],
      skills: ["Apache Spark", "Apache Kafka", "Columnar Storage (Parquet)", "Cloud Data Lakes"],
      certifications: ["Databricks Certified Data Engineer", "AWS Certified Data Analytics"]
    },
    "Predictive Analytics & Machine Learning": {
      icon: "📈", color: "#00D9A3",
      courseSequence: ["UBA53", "CSA08", "DSA04", "ITA06", "DSA07"],
      requiredCourses: ["UBA53", "DSA04", "ITA06", "DSA07"],
      roles: ["Data Scientist", "Predictive Analytics Specialist", "Quantitative Analyst"],
      skills: ["Hypothesis Testing", "Scikit-Learn", "Ensemble Methods", "A/B Experimentation"],
      certifications: ["IBM Certified Data Scientist", "Google Professional Data Engineer"]
    },
    "Business Intelligence & Visualization": {
      icon: "📊", color: "#FFB800",
      courseSequence: ["CSA05", "DSA04", "DSA06", "DSA08"],
      requiredCourses: ["CSA05", "DSA06", "DSA08"],
      roles: ["BI Developer", "Data Visualization Architect", "Analytics Consultant"],
      skills: ["Tableau & PowerBI", "Interactive Dashboards", "KPI Metric Design", "SQL Modeling"],
      certifications: ["Tableau Certified Data Analyst", "Microsoft Certified Power BI Analyst"]
    },
    "Deep Learning & Applied NLP": {
      icon: "🧠", color: "#FF6B6B",
      courseSequence: ["CSA08", "ITA06", "DSA03", "CSA47", "CSA65"],
      requiredCourses: ["ITA06", "DSA03", "CSA47"],
      roles: ["AI Data Scientist", "Multimodal Analytics Specialist", "Text Analytics Engineer"],
      skills: ["PyTorch", "NLP Topic Modeling", "Sentiment Analysis", "Transformers"],
      certifications: ["DeepLearning.AI Data Specialization", "TensorFlow Developer"]
    },
  },
  IT: {
    "Cloud Architecture & DevOps": {
      icon: "☁️", color: "#6C63FF",
      courseSequence: ["CSA07_NET", "CSA15", "ITA10", "ITA12", "CSA58"],
      requiredCourses: ["CSA15", "ITA10", "ITA12"],
      roles: ["Cloud Solutions Architect", "DevOps Engineer", "Site Reliability Engineer (SRE)"],
      skills: ["AWS & Azure", "Kubernetes Orchestration", "Docker", "CI/CD Automation"],
      certifications: ["AWS Certified Solutions Architect", "Certified Kubernetes Administrator (CKA)"]
    },
    "Enterprise Web & Mobile Applications": {
      icon: "📱", color: "#00D9A3",
      courseSequence: ["CSA03", "CSA09", "ITA02", "ITA03", "ITA11", "ITA15"],
      requiredCourses: ["CSA09", "ITA02", "ITA11", "ITA15"],
      roles: ["Enterprise Java Architect", "Full Stack Developer", "Mobile Solutions Engineer"],
      skills: ["Spring Boot", "React & Node.js", "Flutter", "Microservices Design"],
      certifications: ["Oracle Certified Professional Java Developer", "Meta Certified Full Stack Engineer"]
    },
    "Information Security & Cyber Defense": {
      icon: "🔒", color: "#FF6B6B",
      courseSequence: ["CSA07_NET", "CSA51", "ITA14", "CSA58"],
      requiredCourses: ["CSA07_NET", "CSA51", "ITA14"],
      roles: ["Cyber Defense Analyst", "Penetration Tester", "Enterprise Security Engineer"],
      skills: ["Penetration Testing", "Network Defense", "OWASP Top 10", "Vulnerability Auditing"],
      certifications: ["CompTIA Security+", "Certified Ethical Hacker (CEH)"]
    },
    "Data Analytics & Applied AI": {
      icon: "💡", color: "#FFB800",
      courseSequence: ["CSA08", "ITA04", "ITA06", "ITA05", "CSA16"],
      requiredCourses: ["CSA08", "ITA04", "ITA06"],
      roles: ["IT Data Analyst", "Predictive Maintenance Engineer", "BI Analytics Consultant"],
      skills: ["R & Python Analytics", "Predictive Modeling", "Machine Learning", "Data Mining"],
      certifications: ["Google Data Analytics Professional", "Microsoft Certified Data Analyst"]
    },
  },
  EEE: {
    "Electric Vehicles & Power Electronics": {
      icon: "🚗", color: "#6C63FF",
      courseSequence: ["EEA01", "EEA02", "EEA07", "EEA31", "EEA35", "EEA25"],
      requiredCourses: ["EEA02", "EEA07", "EEA31", "EEA35"],
      roles: ["EV Powertrain Engineer", "Power Electronics Design Engineer", "BMS System Architect"],
      skills: ["DC-DC Converters", "Inverter Modulation", "PMSM Motor Control", "Battery Management Systems"],
      certifications: ["IEEE Electric Mobility Certificate", "Automotive Powertrain Specialist"]
    },
    "Power Systems & Grid Modernization": {
      icon: "⚡", color: "#00D9A3",
      courseSequence: ["EEA03", "EEA08", "EEA04", "EEA10", "EEA09", "EEA11", "EEA33"],
      requiredCourses: ["EEA08", "EEA09", "EEA11", "EEA33"],
      roles: ["Power Systems Engineer", "Substation Protection Specialist", "Smart Grid Architect"],
      skills: ["Load Flow Analysis", "Relay Coordination", "Fault Calculation", "Microgrid Architecture"],
      certifications: ["IEEE Power & Energy Society Certified", "Certified Protection Engineer"]
    },
    "Renewable Energy & High Voltage": {
      icon: "☀️", color: "#FFB800",
      courseSequence: ["ENA01", "EEA07", "EEA34", "EEA37", "EEA40"],
      requiredCourses: ["ENA01", "EEA07", "EEA40"],
      roles: ["Solar Plant Design Engineer", "Wind Energy Systems Specialist", "HV Testing Engineer"],
      skills: ["Solar PV Sizing", "MPPT Algorithms", "High Voltage Insulation", "Grid Code Compliance"],
      certifications: ["NABCEP Certified Solar PV Designer", "Certified Energy Manager (CEM)"]
    },
    "Industrial Automation & Drives": {
      icon: "🏭", color: "#FF6B6B",
      courseSequence: ["EEA05", "EEA06", "ECA10", "EEA32", "EEA36"],
      requiredCourses: ["EEA05", "EEA32", "EEA36"],
      roles: ["Automation & Control Engineer", "PLC/SCADA Specialist", "Industrial Drives Engineer"],
      skills: ["PLC Ladder Logic", "SCADA Architecture", "Vector Control (FOC)", "Fieldbus Protocols"],
      certifications: ["Siemens Certified Automation Professional", "Rockwell Automation Certified Specialist"]
    },
  },
  MECH: {
    "Automotive & Thermal Engineering": {
      icon: "🏎️", color: "#6C63FF",
      courseSequence: ["MEA05", "MEA07", "MEA10", "MEA47", "MEA24", "MEA26"],
      requiredCourses: ["MEA05", "MEA07", "MEA10", "MEA47"],
      roles: ["Automotive OEM Development Engineer", "Thermal Systems Engineer", "Powertrain Calibration Specialist"],
      skills: ["Combustion Cycles", "Heat Exchanger Design", "Chassis & Suspension Tuning", "HVAC Design"],
      certifications: ["SAE Certified Automotive Engineer", "ASHRAE Certified HVAC Designer"]
    },
    "Robotics & Smart Manufacturing": {
      icon: "🤖", color: "#00D9A3",
      courseSequence: ["MEA02", "MEA06", "MEA09", "MEA15", "ECA28", "MEA23"],
      requiredCourses: ["MEA09", "MEA15", "ECA28", "MEA23"],
      roles: ["Manufacturing Automation Specialist", "Robotics Cell Programmer", "Smart Factory Engineer"],
      skills: ["Industrial Manipulator Kinematics", "CNC Programming", "Digital Twins", "Automated Guided Vehicles"],
      certifications: ["Fanuc Robotics Certified Programmer", "Certified Manufacturing Engineer (CMfgE)"]
    },
    "Design Engineering & FEA Simulation": {
      icon: "📐", color: "#FFB800",
      courseSequence: ["CEA02", "CEA07", "MEA08", "MEA11", "MEA12", "MEA13"],
      requiredCourses: ["CEA07", "MEA11", "MEA12", "MEA13"],
      roles: ["Mechanical Design Engineer", "FEA Structural Analyst", "Transmission Systems Designer"],
      skills: ["ANSYS / Abaqus FEA", "Fatigue Life Sizing", "Gearbox Design", "SolidWorks 3D Modeling"],
      certifications: ["CSWP Certified SolidWorks Professional", "ANSYS Certified Simulation Associate"]
    },
    "Industrial Engineering & Operations": {
      icon: "📊", color: "#FF6B6B",
      courseSequence: ["MEA06", "MEA14", "MEA16", "MEA20", "MEA25", "MEA27"],
      requiredCourses: ["MEA14", "MEA25", "MEA27"],
      roles: ["Supply Chain Optimization Analyst", "Six Sigma Quality Manager", "Plant Operations Engineer"],
      skills: ["Six Sigma DMAIC", "Lean Manufacturing", "Linear Programming", "Process Capability Analysis"],
      certifications: ["ASQ Six Sigma Black Belt", "APICS Certified Supply Chain Professional (CSCP)"]
    },
  },
  CIVIL: {
    "Structural Engineering & BIM": {
      icon: "🏛️", color: "#6C63FF",
      courseSequence: ["CEA02", "CEA07", "CEA03", "CEA13", "CEA63", "CEA64", "CEA66", "CEA23", "CEA27"],
      requiredCourses: ["CEA03", "CEA13", "CEA63", "CEA66"],
      roles: ["Structural Design Engineer", "BIM Coordinator", "Reinforced Concrete Specialist"],
      skills: ["ETABS / STAAD.Pro", "Autodesk Revit BIM", "IS 456 / IS 800 Design", "Seismic Ductile Detailing"],
      certifications: ["Autodesk Certified Revit Professional", "Institution of Engineers Chartered Structural Engineer"]
    },
    "Transportation & Infrastructure Planning": {
      icon: "🛣️", color: "#00D9A3",
      courseSequence: ["CEA05", "CEA09", "CEA18", "CEA65", "CEA24", "CEA28", "CEA30"],
      requiredCourses: ["CEA05", "CEA09", "CEA24", "CEA28"],
      roles: ["Highway Design Engineer", "Urban Transportation Planner", "Infrastructure Project Manager"],
      skills: ["Highway Geometric Alignment", "Pavement Design (IRC 37)", "Total Station Surveying", "Smart City Planning"],
      certifications: ["IRC Certified Highway Specialist", "Project Management Professional (PMP)"]
    },
    "Water Resources & Environmental Engineering": {
      icon: "💧", color: "#FFB800",
      courseSequence: ["CEA06", "CEA10", "CEA11", "CEA14", "CEA26", "CEA31"],
      requiredCourses: ["CEA10", "CEA11", "CEA14", "CEA31"],
      roles: ["Hydraulic Modeling Engineer", "Water Treatment Plant Designer", "Environmental Impact Consultant"],
      skills: ["Open Channel Hydraulics", "Hydrological Reservoir Modeling", "WTP/STP Process Design", "Water Quality Analysis"],
      certifications: ["Certified Environmental Professional (CEP)", "Water Environment Federation Specialist"]
    },
    "Geotechnical & Disaster Mitigation": {
      icon: "⛰️", color: "#FF6B6B",
      courseSequence: ["CEA04", "CEA34", "CEA35", "CEA17", "CEA29"],
      requiredCourses: ["CEA04", "CEA34", "CEA35", "CEA29"],
      roles: ["Geotechnical Investigation Engineer", "Foundation Specialist", "Slope Stability Consultant"],
      skills: ["Soil Shear Strength Testing", "Deep Foundation Piling Sizing", "Slope Stabilization", "ArcGIS Spatial Mapping"],
      certifications: ["ISSMGE Certified Geotechnical Specialist", "GIS Professional (GISP)"]
    },
  },
};

window.CREDIT_REQUIREMENTS_BY_DEPARTMENT = {
  ECE: {
    total: 192,
    degreeTarget: 192,
    catalogueCredits: 192,
    isSampleCatalogue: false,
    sampleDescription: "Standard 4-Year B.Tech Regulation: 48 courses, 192 credits across 8 semesters (24 credits/semester).",
    byCategory: {
      "Foundation Maths": 20,
      "Foundation Science": 12,
      "Humanities & Management": 8,
      "Engineering Science": 24,
      "Professional Core": 56,
      "Professional Elective": 60,
      "Capstone & Project": 12,
    },
    catalogueCreditsByCategory: {
      "Foundation Maths": 20,
      "Foundation Science": 12,
      "Humanities & Management": 8,
      "Engineering Science": 24,
      "Professional Core": 56,
      "Professional Elective": 60,
      "Capstone & Project": 12,
    }
  },
  CSE: {
    total: 192,
    degreeTarget: 192,
    catalogueCredits: 192,
    isSampleCatalogue: false,
    sampleDescription: "Standard 4-Year B.Tech Regulation: 48 courses, 192 credits across 8 semesters (24 credits/semester).",
    byCategory: {
      "Foundation Maths": 20,
      "Foundation Science": 12,
      "Humanities & Management": 8,
      "Engineering Science": 28,
      "Professional Core": 52,
      "Professional Elective": 60,
      "Capstone & Project": 12,
    },
    catalogueCreditsByCategory: {
      "Foundation Maths": 20,
      "Foundation Science": 12,
      "Humanities & Management": 8,
      "Engineering Science": 28,
      "Professional Core": 52,
      "Professional Elective": 60,
      "Capstone & Project": 12,
    }
  },
  AIML: {
    total: 192,
    degreeTarget: 192,
    catalogueCredits: 192,
    isSampleCatalogue: false,
    sampleDescription: "Standard 4-Year B.Tech Regulation: 48 courses, 192 credits across 8 semesters (24 credits/semester).",
    byCategory: {
      "Foundation Maths": 20,
      "Foundation Science": 12,
      "Humanities & Management": 8,
      "Engineering Science": 24,
      "Professional Core": 60,
      "Professional Elective": 56,
      "Capstone & Project": 12,
    },
    catalogueCreditsByCategory: {
      "Foundation Maths": 20,
      "Foundation Science": 12,
      "Humanities & Management": 8,
      "Engineering Science": 24,
      "Professional Core": 60,
      "Professional Elective": 56,
      "Capstone & Project": 12,
    }
  },
  AIDS: {
    total: 192,
    degreeTarget: 192,
    catalogueCredits: 192,
    isSampleCatalogue: false,
    sampleDescription: "Standard 4-Year B.Tech Regulation: 48 courses, 192 credits across 8 semesters (24 credits/semester).",
    byCategory: {
      "Foundation Maths": 20,
      "Foundation Science": 12,
      "Humanities & Management": 8,
      "Engineering Science": 28,
      "Professional Core": 60,
      "Professional Elective": 52,
      "Capstone & Project": 12,
    },
    catalogueCreditsByCategory: {
      "Foundation Maths": 20,
      "Foundation Science": 12,
      "Humanities & Management": 8,
      "Engineering Science": 28,
      "Professional Core": 60,
      "Professional Elective": 52,
      "Capstone & Project": 12,
    }
  },
  IT: {
    total: 192,
    degreeTarget: 192,
    catalogueCredits: 192,
    isSampleCatalogue: false,
    sampleDescription: "Standard 4-Year B.Tech Regulation: 48 courses, 192 credits across 8 semesters (24 credits/semester).",
    byCategory: {
      "Foundation Maths": 20,
      "Foundation Science": 12,
      "Humanities & Management": 8,
      "Engineering Science": 28,
      "Professional Core": 56,
      "Professional Elective": 56,
      "Capstone & Project": 12,
    },
    catalogueCreditsByCategory: {
      "Foundation Maths": 20,
      "Foundation Science": 12,
      "Humanities & Management": 8,
      "Engineering Science": 28,
      "Professional Core": 56,
      "Professional Elective": 56,
      "Capstone & Project": 12,
    }
  },
  EEE: {
    total: 192,
    degreeTarget: 192,
    catalogueCredits: 192,
    isSampleCatalogue: false,
    sampleDescription: "Standard 4-Year B.Tech Regulation: 48 courses, 192 credits across 8 semesters (24 credits/semester).",
    byCategory: {
      "Foundation Maths": 20,
      "Foundation Science": 12,
      "Humanities & Management": 8,
      "Engineering Science": 40,
      "Professional Core": 56,
      "Professional Elective": 44,
      "Capstone & Project": 12,
    },
    catalogueCreditsByCategory: {
      "Foundation Maths": 20,
      "Foundation Science": 12,
      "Humanities & Management": 8,
      "Engineering Science": 40,
      "Professional Core": 56,
      "Professional Elective": 44,
      "Capstone & Project": 12,
    }
  },
  MECH: {
    total: 192,
    degreeTarget: 192,
    catalogueCredits: 192,
    isSampleCatalogue: false,
    sampleDescription: "Standard 4-Year B.Tech Regulation: 48 courses, 192 credits across 8 semesters (24 credits/semester).",
    byCategory: {
      "Foundation Maths": 20,
      "Foundation Science": 12,
      "Humanities & Management": 12,
      "Engineering Science": 28,
      "Professional Core": 52,
      "Professional Elective": 56,
      "Capstone & Project": 12,
    },
    catalogueCreditsByCategory: {
      "Foundation Maths": 20,
      "Foundation Science": 12,
      "Humanities & Management": 12,
      "Engineering Science": 28,
      "Professional Core": 52,
      "Professional Elective": 56,
      "Capstone & Project": 12,
    }
  },
  CIVIL: {
    total: 192,
    degreeTarget: 192,
    catalogueCredits: 192,
    isSampleCatalogue: false,
    sampleDescription: "Standard 4-Year B.Tech Regulation: 48 courses, 192 credits across 8 semesters (24 credits/semester).",
    byCategory: {
      "Foundation Maths": 20,
      "Foundation Science": 12,
      "Humanities & Management": 8,
      "Engineering Science": 24,
      "Professional Core": 72,
      "Professional Elective": 44,
      "Capstone & Project": 12,
    },
    catalogueCreditsByCategory: {
      "Foundation Maths": 20,
      "Foundation Science": 12,
      "Humanities & Management": 8,
      "Engineering Science": 24,
      "Professional Core": 72,
      "Professional Elective": 44,
      "Capstone & Project": 12,
    }
  },
};

window.DEMO_PROFILES_BY_DEPARTMENT = {
  ECE: {
    "name": "Alex Morgan",
    "registerNumber": "ECE-2024-DEMO",
    "department": "ECE",
    "schoolBackground": "Pure Science",
    "currentSemester": 4,
    "cgpa": 8.55,
    "careerInterests": [
        "VLSI & Chip Design"
    ],
    "preferredIndustry": "Semiconductors & Telecommunications",
    "preferredHigherStudies": "MS in Microelectronics / RF Systems",
    "completedCourses": {
        "UBA01": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA48": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "UBA49": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA28": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "BTA01": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "CSA07": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA06": {
            "grade": "B",
            "semester": 2,
            "credits": 4
        },
        "UBA04": {
            "grade": "B",
            "semester": 2,
            "credits": 4
        },
        "EEA01": {
            "grade": "A",
            "semester": 2,
            "credits": 4
        },
        "ECA02": {
            "grade": "B",
            "semester": 2,
            "credits": 4
        },
        "CSA08": {
            "grade": "S",
            "semester": 2,
            "credits": 4
        }
    },
    "backlogs": [],
    "semesterCGPA": {
        "1": 8.5,
        "2": 8.6,
        "3": 8.55
    }
},
  CSE: {
    "name": "Priya Sharma",
    "registerNumber": "CSE-2024-DEMO",
    "department": "CSE",
    "schoolBackground": "Computer Science",
    "currentSemester": 4,
    "cgpa": 8.82,
    "careerInterests": [
        "Full-Stack & Cloud Computing"
    ],
    "preferredIndustry": "Enterprise Cloud & Software Platforms",
    "preferredHigherStudies": "MS in Computer Science",
    "completedCourses": {
        "UBA01": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA48": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA49": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA28": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "BTA01": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "CSA07": {
            "grade": "S",
            "semester": 1,
            "credits": 4
        },
        "UBA04": {
            "grade": "A",
            "semester": 2,
            "credits": 4
        },
        "UBA06": {
            "grade": "B",
            "semester": 2,
            "credits": 4
        },
        "EEA01": {
            "grade": "B",
            "semester": 2,
            "credits": 4
        },
        "CSA02": {
            "grade": "A",
            "semester": 2,
            "credits": 4
        },
        "CSA03": {
            "grade": "S",
            "semester": 2,
            "credits": 4
        }
    },
    "backlogs": [],
    "semesterCGPA": {
        "1": 8.67,
        "2": 8.6,
        "3": 8.64
    }
},
  AIML: {
    "name": "Rahul Verma",
    "registerNumber": "AIML-2024-DEMO",
    "department": "AIML",
    "schoolBackground": "Mathematics",
    "currentSemester": 4,
    "cgpa": 8.55,
    "careerInterests": [
        "Deep Learning & Generative AI"
    ],
    "preferredIndustry": "Frontier Artificial Intelligence",
    "preferredHigherStudies": "MS in Artificial Intelligence / Robotics",
    "completedCourses": {
        "UBA01": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA48": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "UBA49": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA28": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "BTA01": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "CSA07": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA04": {
            "grade": "B",
            "semester": 2,
            "credits": 4
        },
        "UBA06": {
            "grade": "B",
            "semester": 2,
            "credits": 4
        },
        "EEA01": {
            "grade": "A",
            "semester": 2,
            "credits": 4
        },
        "CSA02": {
            "grade": "B",
            "semester": 2,
            "credits": 4
        },
        "CSA03": {
            "grade": "S",
            "semester": 2,
            "credits": 4
        }
    },
    "backlogs": [],
    "semesterCGPA": {
        "1": 8.5,
        "2": 8.6,
        "3": 8.55
    }
},
  AIDS: {
    "name": "Ananya Iyer",
    "registerNumber": "AIDS-2024-DEMO",
    "department": "AIDS",
    "schoolBackground": "Commerce with Maths",
    "currentSemester": 4,
    "cgpa": 8.91,
    "careerInterests": [
        "Big Data Engineering & Cloud"
    ],
    "preferredIndustry": "Financial Analytics & Data Architecture",
    "preferredHigherStudies": "MS in Data Science / Quantitative Analytics",
    "completedCourses": {
        "UBA01": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA48": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA49": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA28": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "BTA01": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "CSA07": {
            "grade": "S",
            "semester": 1,
            "credits": 4
        },
        "UBA04": {
            "grade": "A",
            "semester": 2,
            "credits": 4
        },
        "UBA06": {
            "grade": "A",
            "semester": 2,
            "credits": 4
        },
        "EEA01": {
            "grade": "B",
            "semester": 2,
            "credits": 4
        },
        "CSA02": {
            "grade": "A",
            "semester": 2,
            "credits": 4
        },
        "CSA03": {
            "grade": "S",
            "semester": 2,
            "credits": 4
        }
    },
    "backlogs": [],
    "semesterCGPA": {
        "1": 8.67,
        "2": 8.8,
        "3": 8.73
    }
},
  IT: {
    "name": "Rohan Patel",
    "registerNumber": "IT-2024-DEMO",
    "department": "IT",
    "schoolBackground": "Computer Science",
    "currentSemester": 4,
    "cgpa": 8.55,
    "careerInterests": [
        "Cloud Architecture & DevOps"
    ],
    "preferredIndustry": "DevOps & Enterprise SaaS",
    "preferredHigherStudies": "MS in Information Technology Management",
    "completedCourses": {
        "UBA01": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA48": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "UBA49": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "UBA28": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "BTA01": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "CSA07": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA04": {
            "grade": "A",
            "semester": 2,
            "credits": 4
        },
        "UBA06": {
            "grade": "B",
            "semester": 2,
            "credits": 4
        },
        "EEA01": {
            "grade": "B",
            "semester": 2,
            "credits": 4
        },
        "CSA02": {
            "grade": "A",
            "semester": 2,
            "credits": 4
        },
        "CSA03": {
            "grade": "S",
            "semester": 2,
            "credits": 4
        }
    },
    "backlogs": [],
    "semesterCGPA": {
        "1": 8.33,
        "2": 8.6,
        "3": 8.45
    }
},
  EEE: {
    "name": "Karthik Nair",
    "registerNumber": "EEE-2024-DEMO",
    "department": "EEE",
    "schoolBackground": "Pure Science",
    "currentSemester": 4,
    "cgpa": 8.55,
    "careerInterests": [
        "Electric Vehicles & Power Electronics"
    ],
    "preferredIndustry": "Clean Energy & EV Powertrains",
    "preferredHigherStudies": "MS in Power Electronics / Electric Drives",
    "completedCourses": {
        "UBA01": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA48": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA49": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "UBA28": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "BTA01": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "CSA07": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "UBA06": {
            "grade": "A",
            "semester": 2,
            "credits": 4
        },
        "UBA05": {
            "grade": "B",
            "semester": 2,
            "credits": 4
        },
        "EEA01": {
            "grade": "A",
            "semester": 2,
            "credits": 4
        },
        "MEA01": {
            "grade": "B",
            "semester": 2,
            "credits": 4
        },
        "MEA02": {
            "grade": "S",
            "semester": 2,
            "credits": 4
        }
    },
    "backlogs": [],
    "semesterCGPA": {
        "1": 8.33,
        "2": 8.4,
        "3": 8.36
    }
},
  MECH: {
    "name": "Vikram Rao",
    "registerNumber": "MECH-2024-DEMO",
    "department": "MECH",
    "schoolBackground": "Mathematics",
    "currentSemester": 4,
    "cgpa": 8.45,
    "careerInterests": [
        "Automotive & Thermal Engineering"
    ],
    "preferredIndustry": "Automotive OEMs & Advanced Manufacturing",
    "preferredHigherStudies": "MS in Automotive Engineering / FEA",
    "completedCourses": {
        "UBA01": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA48": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "UBA49": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "UBA28": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "BTA01": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "CSA07": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "UBA05": {
            "grade": "A",
            "semester": 2,
            "credits": 4
        },
        "UBA06": {
            "grade": "B",
            "semester": 2,
            "credits": 4
        },
        "EEA01": {
            "grade": "B",
            "semester": 2,
            "credits": 4
        },
        "MEA01": {
            "grade": "A",
            "semester": 2,
            "credits": 4
        },
        "MEA02": {
            "grade": "S",
            "semester": 2,
            "credits": 4
        }
    },
    "backlogs": [],
    "semesterCGPA": {
        "1": 8.17,
        "2": 8.4,
        "3": 8.27
    }
},
  CIVIL: {
    "name": "Sneha Reddy",
    "registerNumber": "CIVIL-2024-DEMO",
    "department": "CIVIL",
    "schoolBackground": "Pure Science",
    "currentSemester": 4,
    "cgpa": 8.55,
    "careerInterests": [
        "Structural Engineering & BIM"
    ],
    "preferredIndustry": "Infrastructure Megaprojects & Structural BIM",
    "preferredHigherStudies": "MS in Structural Engineering",
    "completedCourses": {
        "UBA01": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA48": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "UBA49": {
            "grade": "A",
            "semester": 1,
            "credits": 4
        },
        "UBA28": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "BTA01": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "CSA07": {
            "grade": "B",
            "semester": 1,
            "credits": 4
        },
        "UBA05": {
            "grade": "A",
            "semester": 2,
            "credits": 4
        },
        "UBA06": {
            "grade": "B",
            "semester": 2,
            "credits": 4
        },
        "EEA01": {
            "grade": "B",
            "semester": 2,
            "credits": 4
        },
        "MEA01": {
            "grade": "A",
            "semester": 2,
            "credits": 4
        },
        "MEA02": {
            "grade": "S",
            "semester": 2,
            "credits": 4
        }
    },
    "backlogs": [],
    "semesterCGPA": {
        "1": 8.33,
        "2": 8.6,
        "3": 8.45
    }
},
};

// ── Accessor Helper Functions ──────────────────────────────────
window.getDepartmentCourses = function(deptCode) {
  const code = (deptCode || "ECE").toUpperCase();
  return window.CURRICULA_BY_DEPARTMENT[code] || window.CURRICULA_BY_DEPARTMENT.ECE || [];
};

window.getDepartmentCareerTracks = function(deptCode) {
  const code = (deptCode || "ECE").toUpperCase();
  return window.CAREER_TRACKS_BY_DEPARTMENT[code] || window.CAREER_TRACKS_BY_DEPARTMENT.ECE || {};
};

window.getDepartmentCreditRequirements = function(deptCode) {
  const code = (deptCode || "ECE").toUpperCase();
  return window.CREDIT_REQUIREMENTS_BY_DEPARTMENT[code] || window.CREDIT_REQUIREMENTS_BY_DEPARTMENT.ECE || {};
};

window.getDepartmentMeta = function(deptCode) {
  const code = (deptCode || "ECE").toUpperCase();
  return window.DEPARTMENTS[code] || window.DEPARTMENTS.ECE || {};
};

window.getDepartmentDemoProfile = function(deptCode) {
  const code = (deptCode || "ECE").toUpperCase();
  return window.DEMO_PROFILES_BY_DEPARTMENT[code] || window.DEMO_PROFILES_BY_DEPARTMENT.ECE;
};

// Backwards-compatible aliases for legacy references
window.ECE_COURSES = window.CURRICULA_BY_DEPARTMENT.ECE;
window.ECE_CAREER_TRACKS = window.CAREER_TRACKS_BY_DEPARTMENT.ECE;
window.ECE_CREDIT_REQUIREMENTS = window.CREDIT_REQUIREMENTS_BY_DEPARTMENT.ECE;
