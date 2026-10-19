// engine.js - Multi-Department Recommendation Logic and Academic Engines for ICRGS

// ── 1. Prerequisite Validator ──────────────────────────────────
window.checkPrerequisites = function(courseCode, completedCourses, backlogs, departmentCode) {
  const dept = (departmentCode || "ECE").toUpperCase();
  const deptCourses = (window.getDepartmentCourses ? window.getDepartmentCourses(dept) : (window.ECE_COURSES || []));
  
  // Find in department catalogue or fallback to all known curricula
  let course = deptCourses.find(c => c.code === courseCode);
  if (!course && window.CURRICULA_BY_DEPARTMENT) {
    for (const d of Object.values(window.CURRICULA_BY_DEPARTMENT)) {
      course = d.find(c => c.code === courseCode);
      if (course) break;
    }
  }

  // If course does not exist in any catalog, flag as unknown and ineligible
  if (!course) {
    return { eligible: false, missing: [courseCode], backlogged: [], unknown: true };
  }

  // If course has no prerequisites, it is immediately eligible
  if (!course.prerequisites || course.prerequisites.length === 0) {
    return { eligible: true, missing: [], backlogged: [] };
  }

  const missing = [];
  const backlogged = [];
  const comp = completedCourses || {};
  const currentBacklogs = backlogs || [];

  for (const prereq of course.prerequisites) {
    if (currentBacklogs.includes(prereq) || comp[prereq]?.grade === "F") {
      backlogged.push(prereq);
    } else {
      const rec = comp[prereq];
      // Passing requires existing record, valid grade, and grade !== 'F' and !== 'Not Attempted'
      if (!rec || !rec.grade || rec.grade === "F" || rec.grade === "Not Attempted") {
        missing.push(prereq);
      }
    }
  }

  return {
    eligible: missing.length === 0 && backlogged.length === 0,
    missing,
    backlogged
  };
};

// ── 2. Credit Calculator ───────────────────────────────────────
window.calculateCredits = function(completedCourses, departmentCode) {
  const dept = (departmentCode || "ECE").toUpperCase();
  const creditReqs = window.getDepartmentCreditRequirements 
    ? window.getDepartmentCreditRequirements(dept) 
    : (window.ECE_CREDIT_REQUIREMENTS || {});
  
  const deptCourses = window.getDepartmentCourses 
    ? window.getDepartmentCourses(dept) 
    : (window.ECE_COURSES || []);

  const earned = {
    "Foundation Maths": 0,
    "Foundation Science": 0,
    "Humanities & Management": 0,
    "Engineering Science": 0,
    "Professional Core": 0,
    "Professional Elective": 0,
    "Capstone & Project": 0
  };

  const comp = completedCourses || {};
  for (const [code, data] of Object.entries(comp)) {
    if (!data || data.grade === "F" || data.grade === "Not Attempted") continue;
    let course = deptCourses.find(c => c.code === code);
    if (!course && window.CURRICULA_BY_DEPARTMENT) {
      for (const d of Object.values(window.CURRICULA_BY_DEPARTMENT)) {
        course = d.find(c => c.code === code);
        if (course) break;
      }
    }
    if (course) {
      const cat = course.category || "Professional Core";
      earned[cat] = (earned[cat] || 0) + (course.credits || 4);
    }
  }

  const totalEarned = Object.values(earned).reduce((a, b) => a + b, 0);
  const catalogueCredits = creditReqs.catalogueCredits || creditReqs.total || 192;
  const totalRequired = catalogueCredits;
  const percentage = ((totalEarned / totalRequired) * 100).toFixed(1);
  const cataloguePercentage = percentage;

  return { 
    earned, 
    totalEarned, 
    totalRequired, 
    percentage: parseFloat(percentage),
    catalogueCredits,
    cataloguePercentage: parseFloat(cataloguePercentage),
    isSampleCatalogue: false,
    sampleDescription: creditReqs.sampleDescription || ""
  };
};

// ── 3. Course Ranking and Scoring Engine ───────────────────────
window.scoreAndRankCourses = function(studentProfile, completedCourses, backlogs, careerInterests, departmentCode) {
  const dept = (departmentCode || studentProfile?.department || "ECE").toUpperCase();
  const deptCourses = window.getDepartmentCourses 
    ? window.getDepartmentCourses(dept) 
    : (window.ECE_COURSES || []);
  const creditReqs = window.getDepartmentCreditRequirements 
    ? window.getDepartmentCreditRequirements(dept) 
    : (window.ECE_CREDIT_REQUIREMENTS || {});

  const gradePoints = window.GRADE_POINTS || { "S": 10, "O": 10, "A+": 9, "A": 9, "B+": 8, "B": 8, "C": 7, "D": 6, "P": 5, "F": 0 };
  const results = [];
  const creditData = window.calculateCredits(completedCourses, dept);
  const comp = completedCourses || {};
  const currentBacklogs = backlogs || [];
  const interests = careerInterests || studentProfile?.careerInterests || [];
  const currentSem = studentProfile?.currentSemester || 1;
  
  // Foundation checking
  const foundationEarned = (creditData.earned["Foundation Maths"] || 0) + 
                           (creditData.earned["Foundation Science"] || 0) + 
                           (creditData.earned["Humanities & Management"] || 0) +
                           (creditData.earned["Engineering Science"] || 0);
  const foundationThreshold = 20;

  for (const course of deptCourses) {
    // Skip already completed (with passing grade)
    if (comp[course.code] && comp[course.code].grade !== "F" && comp[course.code].grade !== "Not Attempted") continue;
    // Skip active backlogs
    if (currentBacklogs.includes(course.code)) continue;

    // Check prerequisites — EXCLUDE if not eligible
    const prereqCheck = window.checkPrerequisites(course.code, comp, currentBacklogs, dept);
    if (!prereqCheck.eligible) continue;

    let score = 0;
    const reasons = [];
    const isFoundation = course.category.includes("Foundation");

    // Priority 1: Foundation Courses (+100)
    if (isFoundation) {
      score += 100;
      reasons.push("🌟 Recommended Foundation Course");
    } else if (foundationEarned < foundationThreshold) {
      score -= 40;
      reasons.push("⚠️ Complete foundational subjects first to unlock advanced pathways.");
    }

    // Priority 2: Prerequisites complete (+40)
    if (course.prerequisites && course.prerequisites.length > 0) {
      score += 40;
      reasons.push("✓ All prerequisites verified & completed");
    }

    // Priority 3: Prerequisite grade quality
    if (course.prerequisites && course.prerequisites.length > 0) {
      const prereqGrades = course.prerequisites
        .filter(p => comp[p] && comp[p].grade)
        .map(p => gradePoints[comp[p].grade] || 0);
      if (prereqGrades.length > 0 && prereqGrades.every(g => g >= 8)) {
        score += 20;
        reasons.push("✓ Strong performance in prerequisite coursework");
      } else if (prereqGrades.length > 0 && prereqGrades.some(g => g < 6)) {
        score -= 10;
        reasons.push("⚠️ Prior prerequisite grade near threshold — review advised");
      }
    }

    // Priority 4: Academic progression level (+15 / +8)
    if (course.semester <= currentSem) {
      score += 15;
      reasons.push("✓ Matches your current curriculum progress level");
    } else if (course.semester === currentSem + 1) {
      score += 8;
      reasons.push("✓ Optimal progressive course for your credit standing");
    }

    // Priority 5: Career alignment (+20)
    const courseDomains = course.careerDomains || [];
    const overlap = courseDomains.filter(d => interests.includes(d) || d === "All");
    if (overlap.length > 0 && !overlap.includes("All")) {
      score += 20;
      reasons.push(`✓ Aligns with target pathway: ${overlap[0]}`);
    }

    // Priority 6: Category credit gap (+10)
    const targetCategoryReq = creditReqs.byCategory ? (creditReqs.byCategory[course.category] || 0) : 0;
    const earnedCategory = creditData.earned[course.category] || 0;
    if (targetCategoryReq > 0 && earnedCategory < targetCategoryReq) {
      score += 10;
      reasons.push(`✓ Contributes toward ${course.category} graduation quota`);
    }

    results.push({ course, score, reasons, isFoundation });
  }

  return results.sort((a, b) => b.score - a.score).slice(0, 8);
};

// ── 4. Career Track Readiness Engine ───────────────────────────
window.calcTrackReadiness = function(trackId, completedCourses, backlogs, departmentCode) {
  const dept = (departmentCode || "ECE").toUpperCase();
  const tracks = window.getDepartmentCareerTracks 
    ? window.getDepartmentCareerTracks(dept) 
    : (window.ECE_CAREER_TRACKS || {});
  
  const track = tracks[trackId];
  if (!track || !track.requiredCourses || track.requiredCourses.length === 0) return 0;
  
  const comp = completedCourses || {};
  const currentBacklogs = backlogs || [];
  const required = track.requiredCourses;
  
  const done = required.filter(code =>
    comp[code] &&
    comp[code].grade &&
    comp[code].grade !== "F" &&
    comp[code].grade !== "Not Attempted" &&
    !currentBacklogs.includes(code)
  ).length;

  return Math.round((done / required.length) * 100);
};

// ── 5. Academic Smart Alerts Engine ────────────────────────────
window.generateAlerts = function(completedCourses, backlogs, careerInterests, creditData, departmentCode) {
  const dept = (departmentCode || "ECE").toUpperCase();
  const deptCourses = window.getDepartmentCourses 
    ? window.getDepartmentCourses(dept) 
    : (window.ECE_COURSES || []);
  const creditReqs = window.getDepartmentCreditRequirements 
    ? window.getDepartmentCreditRequirements(dept) 
    : (window.ECE_CREDIT_REQUIREMENTS || {});

  const alerts = [];
  const comp = completedCourses || {};
  const currentBacklogs = backlogs || [];

  // 1. Backlog blocking checks
  for (const backlogCode of currentBacklogs) {
    const blocked = deptCourses.filter(c =>
      c.prerequisites && c.prerequisites.includes(backlogCode)
    );
    if (blocked.length > 0) {
      alerts.push({
        type: "warning",
        icon: "⚠️",
        title: `${backlogCode} backlog is blocking ${blocked.length} subsequent subject(s)`,
        body: blocked.map(c => c.name).join(", "),
        action: "View Blocked Courses"
      });
    }
  }

  // 2. Consolidated eligible pathways with met prerequisites
  const eligibleWithPrereqs = deptCourses.filter(course => {
    if (comp[course.code] && comp[course.code].grade !== "F") return false;
    if (currentBacklogs.includes(course.code)) return false;
    if (!course.prerequisites || course.prerequisites.length === 0) return false;
    const check = window.checkPrerequisites(course.code, comp, currentBacklogs, dept);
    return check.eligible;
  });

  if (eligibleWithPrereqs.length > 0) {
    const preview = eligibleWithPrereqs.slice(0, 3).map(c => c.code).join(", ");
    alerts.push({
      type: "info",
      icon: "💡",
      title: `${eligibleWithPrereqs.length} Eligible Course(s) with Met Prerequisites`,
      body: `You are eligible to enroll in: ${preview}${eligibleWithPrereqs.length > 3 ? ` and ${eligibleWithPrereqs.length - 3} more` : ''}.`,
      action: "View Courses"
    });
  }

  // 3. Category Credit Gaps
  if (creditReqs.byCategory) {
    for (const [cat, req] of Object.entries(creditReqs.byCategory)) {
      const earned = (creditData?.earned && creditData.earned[cat]) || 0;
      if (req - earned > 15 && req > 0) {
        alerts.push({
          type: "info",
          icon: "📊",
          title: `${cat} credit benchmark gap`,
          body: `You need ${req - earned} more credits in ${cat} to fulfill the degree curriculum benchmark.`,
          action: "View Electives"
        });
      }
    }
  }

  // 4. Low grade academic warnings
  const gradePoints = window.GRADE_POINTS || { "O": 10, "A+": 9, "A": 8, "B+": 7, "B": 6, "C": 5, "F": 0 };
  for (const [code, data] of Object.entries(comp)) {
    if (!data || !data.grade) continue;
    if ((gradePoints[data.grade] || 0) < 6 && data.grade !== "F" && data.grade !== "Not Attempted") {
      alerts.push({
        type: "danger",
        icon: "📚",
        title: `Low grade in prerequisite ${code} (${data.grade})`,
        body: `A passing grade of ${data.grade} meets the minimum requirement, but may impact advanced topics that build upon this foundation.`,
        action: "Review Material"
      });
    }
  }

  return alerts.slice(0, 10);
};

// ── 6. CGPA Calculator ─────────────────────────────────────────
window.calculateCGPA = function(completedCourses, departmentCode) {
  let totalGradePoints = 0;
  let totalCredits = 0;
  const gradePoints = window.GRADE_POINTS || { "O": 10, "A+": 9, "A": 8, "B+": 7, "B": 6, "C": 5, "F": 0 };
  const dept = (departmentCode || "ECE").toUpperCase();
  const deptCourses = window.getDepartmentCourses 
    ? window.getDepartmentCourses(dept) 
    : (window.ECE_COURSES || []);

  const comp = completedCourses || {};
  for (const [code, data] of Object.entries(comp)) {
    if (!data || data.grade === "F" || data.grade === "Not Attempted") continue;
    let course = deptCourses.find(c => c.code === code);
    if (!course && window.CURRICULA_BY_DEPARTMENT) {
      for (const d of Object.values(window.CURRICULA_BY_DEPARTMENT)) {
        course = d.find(c => c.code === code);
        if (course) break;
      }
    }
    if (course) {
      totalCredits += course.credits;
      totalGradePoints += course.credits * (gradePoints[data.grade] || 0);
    }
  }
  return totalCredits === 0 ? 0 : parseFloat((totalGradePoints / totalCredits).toFixed(2));
};

// ── 7. What-If Academic Scenario Simulator ─────────────────────
window.simulateSemester = function(plannedCoursesCodes, currentProfile) {
  const dept = (currentProfile?.department || "ECE").toUpperCase();
  const deptCourses = window.getDepartmentCourses 
    ? window.getDepartmentCourses(dept) 
    : (window.ECE_COURSES || []);

  const gradePoints = window.GRADE_POINTS || { "O": 10, "A+": 9, "A": 8, "B+": 7, "B": 6, "C": 5, "F": 0 };
  const ASSUMED_GRADE = 'A';
  const ASSUMED_POINTS = 8.0;

  // Clone completed courses and add simulated subjects with assumed grade 'A'
  const simulatedCompleted = { ...(currentProfile?.completedCourses || {}) };
  let simulatedAddedCredits = 0;
  let simulatedAddedPoints = 0;

  for (const code of (plannedCoursesCodes || [])) {
    let course = deptCourses.find(c => c.code === code);
    if (!course && window.CURRICULA_BY_DEPARTMENT) {
      for (const d of Object.values(window.CURRICULA_BY_DEPARTMENT)) {
        course = d.find(c => c.code === code);
        if (course) break;
      }
    }
    if (course) {
      simulatedCompleted[code] = { 
        grade: ASSUMED_GRADE, 
        semester: (currentProfile?.currentSemester || 1) + 1, 
        credits: course.credits 
      };
      simulatedAddedCredits += course.credits;
      simulatedAddedPoints += course.credits * ASSUMED_POINTS;
    }
  }

  // Calculate existing verified course-level credits & grade points
  let currentCourseCredits = 0;
  let currentCoursePoints = 0;
  for (const [code, data] of Object.entries(currentProfile?.completedCourses || {})) {
    if (!data || data.grade === "F" || data.grade === "Not Attempted") continue;
    let course = deptCourses.find(c => c.code === code);
    if (!course && window.CURRICULA_BY_DEPARTMENT) {
      for (const d of Object.values(window.CURRICULA_BY_DEPARTMENT)) {
        course = d.find(c => c.code === code);
        if (course) break;
      }
    }
    if (course) {
      currentCourseCredits += course.credits;
      currentCoursePoints += course.credits * (gradePoints[data.grade] || 0);
    }
  }

  // Preserve student baseline CGPA without discarding prior record
  let baselineCredits = 0;
  let baselinePoints = 0;
  let currentCGPA = 0;
  let methodology = "";

  if (currentCourseCredits > 0) {
    baselineCredits = currentCourseCredits;
    baselinePoints = currentCoursePoints;
    currentCGPA = parseFloat((baselinePoints / baselineCredits).toFixed(2));
    methodology = `Exact weighted projection from ${baselineCredits} earned credits in your record.`;
  } else if ((currentProfile?.cgpa || 0) > 0) {
    const completedSemesters = Math.max(1, (currentProfile.currentSemester || 2) - 1);
    baselineCredits = completedSemesters * 22;
    baselinePoints = baselineCredits * currentProfile.cgpa;
    currentCGPA = parseFloat(currentProfile.cgpa.toFixed(2));
    methodology = `Weighted projection from entered profile CGPA (${currentProfile.cgpa}) across ~${baselineCredits} prior credits.`;
  } else {
    currentCGPA = 0.0;
    methodology = "No prior coursework recorded; projected CGPA reflects simulated course grade points.";
  }

  const totalPredictedCredits = baselineCredits + simulatedAddedCredits;
  const totalPredictedPoints = baselinePoints + simulatedAddedPoints;
  const predictedCGPA = totalPredictedCredits > 0 
    ? parseFloat((totalPredictedPoints / totalPredictedCredits).toFixed(2)) 
    : ASSUMED_POINTS;

  // Credit and Career Metrics
  const currentCredits = window.calculateCredits(currentProfile?.completedCourses, dept);
  const primaryTrack = currentProfile?.careerInterests?.[0];
  const currentCareerReady = primaryTrack ? window.calcTrackReadiness(primaryTrack, currentProfile?.completedCourses, currentProfile?.backlogs, dept) : 0;
  
  const predictedCredits = window.calculateCredits(simulatedCompleted, dept);
  const predictedCareerReady = primaryTrack ? window.calcTrackReadiness(primaryTrack, simulatedCompleted, currentProfile?.backlogs, dept) : 0;

  // Find Newly Unlocked Courses
  const newlyUnlocked = [];
  const stillLocked = [];

  for (const course of deptCourses) {
    if (simulatedCompleted[course.code] && simulatedCompleted[course.code].grade !== "F") continue;
    if ((currentProfile?.backlogs || []).includes(course.code)) continue;

    const currentCheck = window.checkPrerequisites(course.code, currentProfile?.completedCourses, currentProfile?.backlogs, dept);
    const predictedCheck = window.checkPrerequisites(course.code, simulatedCompleted, currentProfile?.backlogs, dept);

    if (!currentCheck.eligible && predictedCheck.eligible) {
      newlyUnlocked.push(course);
    } else if (!predictedCheck.eligible) {
      stillLocked.push(course);
    }
  }

  return {
    currentTotalCredits: currentCredits.totalEarned,
    predictedTotalCredits: predictedCredits.totalEarned,
    currentGradPct: currentCredits.percentage,
    predictedGradPct: predictedCredits.percentage,
    currentCatalogueGradPct: currentCredits.cataloguePercentage,
    predictedCatalogueGradPct: predictedCredits.cataloguePercentage,
    currentCareerReady,
    predictedCareerReady,
    currentCGPA,
    predictedCGPA,
    assumedGrade: ASSUMED_GRADE,
    assumedGradePoints: ASSUMED_POINTS,
    simulatedCreditsCount: simulatedAddedCredits,
    plannedCoursesCount: (plannedCoursesCodes || []).length,
    careerTrack: primaryTrack || "General",
    newlyUnlocked,
    stillLockedCount: stillLocked.length,
    methodology
  };
};

// ── 8. Goal-Based Course Matcher (Rule & Keyword Based) ─────────
window.matchCoursesToGoal = function(goalText, completedCourses, backlogs, departmentCode) {
  if (!goalText || typeof goalText !== "string" || goalText.trim().length < 2) return [];

  const dept = (departmentCode || "ECE").toUpperCase();
  const deptCourses = window.getDepartmentCourses 
    ? window.getDepartmentCourses(dept) 
    : (window.ECE_COURSES || []);
  const deptTracks = window.getDepartmentCareerTracks 
    ? window.getDepartmentCareerTracks(dept) 
    : (window.ECE_CAREER_TRACKS || {});

  // Stop words to prevent generic false positives
  const STOP_WORDS = new Set([
    "the", "and", "for", "with", "that", "this", "from", "want", "like", "will", 
    "build", "work", "study", "make", "into", "become", "good", "best", "course", 
    "courses", "subject", "subjects", "engineering", "student", "career", "job", 
    "role", "domain", "how", "what", "which", "some", "more", "give", "need", "take",
    "learn", "learning", "class", "classes", "program", "programmes"
  ]);

  // Comprehensive domain ontology covering all 8 departments
  const DOMAIN_KEYWORD_MAP = {
    ai: {
      tags: ["ai", "ml", "artificial", "intelligence", "machine", "learning", "deep", "neural", "npu", "tpu", "vision", "nlp", "llm", "transformers", "pytorch"],
      boostDomains: ["AI", "Machine Learning", "Deep Learning", "Data Science"]
    },
    telecom5g: {
      tags: ["5g", "6g", "telecom", "cellular", "wireless", "mimo", "antenna", "rf", "microwave", "satellite", "radar", "propagation", "optical"],
      boostDomains: ["Communication Systems", "Communication"]
    },
    robotics: {
      tags: ["robotics", "robot", "robots", "automation", "kinematics", "mechatronics", "ros", "actuator", "gripper", "dh"],
      boostDomains: ["Robotics & Mechatronics Automation", "Industrial Automation & Drives", "Embedded & IoT"]
    },
    vlsi: {
      tags: ["vlsi", "chip", "semiconductor", "asic", "fpga", "verilog", "vhdl", "cmos", "rtl", "cadence", "layout", "silicon", "finfet"],
      boostDomains: ["VLSI & Chip Design"]
    },
    iot: {
      tags: ["iot", "ioe", "smart", "sensor", "sensors", "edge", "firmware", "embedded", "microcontroller", "arm", "arduino"],
      boostDomains: ["Embedded & IoT"]
    },
    web_cloud: {
      tags: ["web", "fullstack", "react", "node", "frontend", "backend", "cloud", "aws", "docker", "kubernetes", "devops", "microservices"],
      boostDomains: ["Software Engineering & Full Stack", "Systems & Cloud Computing", "Full Stack Web & Enterprise", "Cloud & DevOps Architecture"]
    },
    cybersecurity: {
      tags: ["cybersecurity", "security", "cryptography", "crypto", "network", "firewall", "penetration", "soc", "ethical"],
      boostDomains: ["Cybersecurity & Networks", "Cybersecurity Operations"]
    },
    data_engineering: {
      tags: ["data", "spark", "hadoop", "sql", "nosql", "database", "analytics", "pipeline", "etl", "snowflake", "tableau"],
      boostDomains: ["Data Engineering", "Applied Data Science", "Deep Learning & Analytics"]
    },
    power_ev: {
      tags: ["ev", "electric", "vehicle", "battery", "bms", "powertrain", "power", "inverter", "grid", "renewable", "solar", "wind"],
      boostDomains: ["Electric Vehicles & Power Electronics", "Renewable Energy & Smart Grids"]
    },
    mechanical_cad: {
      tags: ["mechanical", "thermal", "thermodynamics", "fluids", "cfd", "cad", "cam", "fea", "ansys", "stress", "chassis"],
      boostDomains: ["Design & Mechanical CAE/FEA", "Thermal, Fluids & CFD", "Automotive & Propulsion Systems"]
    },
    civil_structures: {
      tags: ["civil", "concrete", "rcc", "structures", "earthquake", "surveying", "soil", "geotech", "bim", "hydraulics", "highway"],
      boostDomains: ["Structural Engineering", "Transportation & Infrastructure", "Geotechnical & Construction Management", "Water Resources & Environmental Engg"]
    }
  };

  const rawTokens = goalText.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
  const activeTokens = rawTokens.filter(t => !STOP_WORDS.has(t) && (t.length >= 3 || ["ai", "ml", "5g", "6g", "rf", "ic", "ip", "ev", "it", "db"].includes(t)));

  if (activeTokens.length === 0) return [];

  const completed = completedCourses || {};
  const currentBacklogs = backlogs || [];
  const matches = [];

  // Match domain activations
  const activatedBoostDomains = new Set();
  for (const [, def] of Object.entries(DOMAIN_KEYWORD_MAP)) {
    for (const tag of def.tags) {
      if (activeTokens.includes(tag) || (tag.length > 3 && rawTokens.some(rt => rt.includes(tag)))) {
        def.boostDomains.forEach(bd => activatedBoostDomains.add(bd));
      }
    }
  }

  deptCourses.forEach(course => {
    // Skip if already passed
    if (completed[course.code] && completed[course.code].grade !== 'F' && completed[course.code].grade !== 'Not Attempted') return;

    let score = 0;
    const matchedTerms = [];

    // 1. Domain ontology match
    const courseDomains = course.careerDomains || [];
    for (const bd of activatedBoostDomains) {
      if (courseDomains.some(cd => cd.toLowerCase().includes(bd.toLowerCase()) || bd.toLowerCase().includes(cd.toLowerCase()))) {
        score += 25;
        matchedTerms.push(bd);
        break;
      }
    }

    // 2. Full text corpus match
    const courseCorpus = [
      course.code,
      course.name,
      course.category,
      course.description || "",
      course.importance || "",
      course.careerApplications || "",
      ...(course.skillsLearned || [])
    ].join(" ").toLowerCase();

    const corpusWords = new Set(courseCorpus.replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean));

    activeTokens.forEach(token => {
      if (corpusWords.has(token)) {
        score += 15;
        if (!matchedTerms.includes(token)) matchedTerms.push(token);
      } else if (token.length >= 4 && courseCorpus.includes(token)) {
        score += 8;
        if (!matchedTerms.includes(token)) matchedTerms.push(token);
      }
    });

    // 3. Career track metadata match
    Object.keys(deptTracks || {}).forEach(trackName => {
      const trackData = deptTracks[trackName];
      if (trackData && (trackData.requiredCourses.includes(course.code) || trackData.courseSequence.includes(course.code))) {
        const trackTokens = new Set([
          ...trackName.toLowerCase().split(/\s+/),
          ...(trackData.roles || []).map(r => r.toLowerCase()).join(" ").split(/\s+/),
          ...(trackData.skills || []).map(s => s.toLowerCase()).join(" ").split(/\s+/)
        ]);
        activeTokens.forEach(token => {
          if (trackTokens.has(token)) {
            score += 6;
            if (!matchedTerms.includes(token)) matchedTerms.push(token);
          }
        });
      }
    });

    if (score > 0) {
      const prereqCheck = window.checkPrerequisites(course.code, completed, currentBacklogs, dept);
      matches.push({
        course,
        score,
        matchedTerms,
        eligible: prereqCheck.eligible
      });
    }
  });

  return matches.sort((a, b) => b.score - a.score);
};
