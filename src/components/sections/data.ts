import photoCuteWorking from "@/assets/real/cute_working_arobi_looking_back.png";
import photoOfficeResearch from "@/assets/real/office_research_time.png";
import photoOfficeWorking from "@/assets/real/office_working.png";
import photoOfficeTeam from "@/assets/real/office_working_with_team.png";
import photoCollab from "@/assets/real/qa_dev_success_collab.png";
import photoThesisDefense from "@/assets/real/thesis_defense_uni.png";
import photoThesisTeam from "@/assets/real/thesis_team.png";
import photoVues from "@/assets/real/vues.png";
import photoVuesWorking from "@/assets/real/vues_working_day.png";

export const EMAIL = "arobiamin75@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/arobi-amin-b656bb21b";
export const LOCATION = "Dhaka, Bangladesh";
export const WORLD_MAP_PATH = "/assets/WorldMap/world.svg";

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  items: string[];
  highlight?: string;
}

export const skills: SkillCategory[] = [
  {
    id: "qa-testing",
    title: "Quality Assurance & Testing",
    description: "Core testing competencies ensuring bug-free, user-centric software delivery.",
    iconName: "ShieldCheck",
    highlight: "Primary Discipline",
    items: [
      "Manual & Functional Testing",
      "Test Case Design & Execution",
      "Defect Lifecycle & Bug Tracking",
      "Cross-Browser & UI/UX Validation",
      "Regression & Smoke Testing",
      "Exploratory Testing",
      "Boundary Value Analysis",
    ],
  },
  {
    id: "domain-exp",
    title: "Domain Experience",
    description: "Hands-on testing across diverse high-impact industry sectors.",
    iconName: "Layers",
    highlight: "Enterprise Domains",
    items: [
      "Customer Support & Messaging Platforms",
      "Financial & VAT Calculation Systems",
      "Educational Web Portals & Student Systems",
      "Enterprise Administrative Software",
      "Real-Time Data Streaming Dashboards",
    ],
  },
  {
    id: "data-systems",
    title: "Data Analysis & Systems",
    description: "Rigorous standards for data security, accuracy, and enterprise workflow.",
    iconName: "Database",
    highlight: "Information Integrity",
    items: [
      "MIS Principles (Management Information Systems)",
      "Data Integrity & Confidentiality",
      "Biometric Registration Data Verification",
      "Student Academic Records Administration",
      "System Audit & Consistency Validation",
    ],
  },
  {
    id: "programming-tools",
    title: "Programming Languages & Tools",
    description: "Technical foundation for white-box understanding and automation growth.",
    iconName: "Code2",
    highlight: "Technical Stack",
    items: [
      "C++",
      "Java",
      "HTML5 & Modern CSS3",
      "Git & GitHub Version Control",
      "Jira & Bug Reporting Tools",
      "Chrome DevTools & Responsive Emulators",
    ],
  },
];

export interface Job {
  id: string;
  role: string;
  org: string;
  period: string;
  place: string;
  badge: string;
  summary: string;
  points: string[];
  tags: string[];
  verifiedApps?: string[];
}

export const jobs: Job[] = [
  {
    id: "codezzi",
    role: "Software QA Engineer",
    org: "Codezzi",
    period: "Jan 2024 — Present",
    place: "Dhaka, Bangladesh",
    badge: "Current Role",
    summary:
      "Leading end-to-end quality assurance, test case authoring, and responsive UI/UX validation across mission-critical client web applications.",
    points: [
      "Executing rigorous manual and functional test cycles for fast-paced web products, catching critical defects prior to deployment.",
      "Conducting extensive cross-browser and mobile device validation to ensure pixel-perfect fidelity and smooth user experiences.",
      "Documenting structured test cases, maintaining bug tracking lifecycles, and driving collaborative regression cycles with engineers.",
      "Validating complex financial calculation logic and real-time messaging flows with zero room for calculation error.",
    ],
    tags: [
      "Manual Testing",
      "Test Case Design",
      "UI/UX Validation",
      "Regression Cycles",
      "Bug Triage",
    ],
    verifiedApps: [
      "SkyChat (Customer Support Platform)",
      "SkyVat (Financial / VAT Calculation System)",
      "Prime Bank Grammar School Portal",
      "Prime College of Nursing Portal",
    ],
  },
  {
    id: "aiub-vues",
    role: "Student Assistant Intern",
    org: "VUES Operations, AIUB",
    period: "Jun 2023 — Dec 2023",
    place: "Dhaka, Bangladesh",
    badge: "Operations Internship",
    summary:
      "Assisted in core university administrative operations, biometric identity management, and student management information systems (VUES).",
    points: [
      "Safeguarded sensitive student data with uncompromising confidentiality following institutional compliance protocols.",
      "Operated biometric registration equipment and managed student ID card verification for university cohorts.",
      "Supported students and faculty in navigating university portal systems, diagnosing portal access anomalies and operational inquiries.",
    ],
    tags: [
      "VUES System",
      "Biometric Management",
      "Data Confidentiality",
      "Student Records",
      "MIS Operations",
    ],
  },
];

export type ProjectFilterType = "all" | "applications" | "websites" | "academic";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  kind: string;
  scope: string;
  type: "applications" | "websites" | "academic";
  role: string;
  featured: boolean;
  order: number;
  summary: string;
  previewImages: string[];
  qaHighlights: string[];
  techTags: string[];
}

export const projects: ProjectItem[] = [
  {
    id: "skychat",
    title: "SkyChat",
    subtitle: "Real-time messaging & customer support platform",
    kind: "Real-Time Application",
    scope: "Client Application · Codezzi",
    type: "applications",
    role: "Software QA Engineer · UI/UX & Real-Time Validation",
    featured: true,
    order: 1,
    summary:
      "Comprehensive manual and functional validation of Codezzi's WebSocket-backed customer support and real-time messaging web application under concurrent conversation loads.",
    previewImages: [
      "/assets/projects/Applications/SkyChat/1.png",
      "/assets/projects/Applications/SkyChat/2.png",
      "/assets/projects/Applications/SkyChat/3.png",
    ],
    qaHighlights: [
      "WebSocket session persistence, reconnection logic, and network packet-loss recovery.",
      "Multi-tab operator dashboard conversation synchronizations and real-time state consistency.",
      "Message delivery receipts, typing indicators, and message history scroll performance.",
      "Cross-browser parity audits spanning Chrome, Firefox, Edge, and iOS Safari.",
    ],
    techTags: ["React", "NestJS", "WebSockets", "Tailwind CSS", "Jira", "Manual QA"],
  },
  {
    id: "skyvat",
    title: "SkyVat",
    subtitle: "Statutory VAT calculation software",
    kind: "Financial Calculation Engine",
    scope: "Client Application · Codezzi",
    type: "applications",
    role: "Software QA Engineer · Calculation & Logic Verification",
    featured: true,
    order: 2,
    summary:
      "Engineered exhaustive numerical test suites validating complex Bangladeshi statutory VAT deduction rules, multi-tier tax brackets, and fiscal audit ledgers with zero mathematical margin for error.",
    previewImages: [
      "/assets/projects/Applications/SkyVat/1.png",
      "/assets/projects/Applications/SkyVat/2.png",
      "/assets/projects/Applications/SkyVat/3.png",
    ],
    qaHighlights: [
      "Multi-tier VAT formula matrix verification and exemption boundary condition audits.",
      "Decimal precision, rounding edge-case testing, and currency formatting conformity.",
      "Invoice export rendering fidelity (PDF/Print) and transaction ledger consistency.",
      "Angular frontend input mask validation, error state messaging, and fiscal compliance.",
    ],
    techTags: ["Angular", ".NET", "C#", "SQL Server", "Financial SQA", "Boundary Analysis"],
  },
  {
    id: "pbgs",
    title: "Prime Bank Grammar School",
    subtitle: "Institutional educational portal & CMS",
    kind: "Educational Portal",
    scope: "Client Website · Codezzi",
    type: "websites",
    role: "Software QA Engineer · End-to-End Portal Validation",
    featured: false,
    order: 3,
    summary:
      "End-to-end quality assurance across Prime Bank Grammar School's official educational portal, multi-step admissions pipeline, and content operations backend.",
    previewImages: [
      "/assets/projects/Websites/PrimeBankGrammerSchool(PBGS)/1.png",
      "/assets/projects/Websites/PrimeBankGrammerSchool(PBGS)/2.png",
      "/assets/projects/Websites/PrimeBankGrammerSchool(PBGS)/3.png",
    ],
    qaHighlights: [
      "Multi-step student admissions form validation, file upload limits, and confirmation alerts.",
      "Administrative CMS role-based permissions and publishing lifecycle validation.",
      "Mobile responsive design audits ensuring readability on small screen devices.",
      "Asset load time optimization and cross-browser visual fidelity checks.",
    ],
    techTags: ["Next.js", "NestJS", "React", "Tailwind CSS", "CMS QA", "Cross-Browser"],
  },
  {
    id: "pcnd",
    title: "Prime College of Nursing, Dhaka",
    subtitle: "Nursing college academic portal & CMS",
    kind: "Academic Institution Portal",
    scope: "Client Website · Codezzi",
    type: "websites",
    role: "Software QA Engineer · Functional & UI Testing",
    featured: false,
    order: 4,
    summary:
      "Comprehensive functional and accessibility auditing for Prime College of Nursing's public web architecture and academic syllabus portal.",
    previewImages: [
      "/assets/projects/Websites/PrimeCollegeOfNursingDhaka(PCND)/1.png",
      "/assets/projects/Websites/PrimeCollegeOfNursingDhaka(PCND)/2.png",
      "/assets/projects/Websites/PrimeCollegeOfNursingDhaka(PCND)/3.png",
    ],
    qaHighlights: [
      "Curriculum catalogs, academic notice board publishing, and document download reliability.",
      "Mobile touch target ergonomics and font readability validation across diverse devices.",
      "Institutional contact form verification and responsive navigation menu workflows.",
      "Regression cycles verifying consistency across sibling Prime Bank Foundation portals.",
    ],
    techTags: ["Next.js", "NestJS", "React", "UI/UX Auditing", "Accessibility", "Defect Tracking"],
  },
  {
    id: "aiub-portal",
    title: "AIUB Portal System",
    subtitle: "University academic portal comprehensive audit",
    kind: "SQA Project",
    scope: "Academic Systems · AIUB",
    type: "academic",
    role: "Lead QA Auditor · Academic Project",
    featured: true,
    order: 5,
    summary:
      "Authored 100+ structured manual test cases evaluating American International University-Bangladesh's academic portal, course registration, and grading modules.",
    previewImages: [
      "/assets/projects/Websites/PrimeBankGrammerSchool(PBGS)/1.png",
      "/assets/projects/Applications/SkyChat/1.png",
    ],
    qaHighlights: [
      "Exhaustive test case authoring for critical course add/drop workflows.",
      "Session timeout and security access boundary checks across user roles.",
      "Defect density metric calculations and test summary report generation.",
      "Student usability audit and UX recommendations for streamlined workflows.",
    ],
    techTags: ["Test Case Design", "Functional QA", "Defect Lifecycle", "Jira", "MIS Principles"],
  },
  {
    id: "iot-weather",
    title: "Real-Time Weather & Environmental Monitoring",
    subtitle: "IoT sensor telemetry & hardware validation",
    kind: "IoT Research",
    scope: "Hardware-Software Telemetry · AIUB",
    type: "academic",
    role: "Hardware-Software QA & Research Lead",
    featured: false,
    order: 6,
    summary:
      "Applied engineering research integrating physical sensor probes measuring water pH, temperature, and relative humidity with automated wireless telemetry to cloud dashboards.",
    previewImages: [
      "/assets/projects/Applications/SkyVat/1.png",
      "/assets/projects/Applications/SkyChat/2.png",
    ],
    qaHighlights: [
      "Water acidity (pH) probe calibration and latency testing under environmental stress.",
      "Packet transmission fault testing across intermittent wireless signals.",
      "Telemetry data integrity and sensor reading drift analysis.",
      "Hardware-in-the-loop stress testing and cloud data synchronization.",
    ],
    techTags: ["IoT", "Sensor Testing", "Water pH", "Wireless Telemetry", "Hardware QA"],
  },
];

export interface Hobby {
  id: string;
  title: string;
  category: string;
  body: string;
  iconName: string;
}

export const hobbies: Hobby[] = [
  {
    id: "reading",
    title: "Reading & Learning",
    category: "Analytical Curiosity",
    body: "Avid reader of technology publications, quality engineering literature, and thought-provoking books that hone pattern recognition and critical thinking.",
    iconName: "BookOpen",
  },
  {
    id: "tech-exploration",
    title: "Tech Exploration",
    category: "Continuous Growth",
    body: "Exploring modern test automation frameworks, browser testing tools, and innovative developer utilities to broaden technical horizons.",
    iconName: "Cpu",
  },
  {
    id: "creative-pursuits",
    title: "Creative Pursuits",
    category: "Design & Mind",
    body: "Visual aesthetics, journaling, and mindful creative projects that nurture patience, design intuition, and eye for detail.",
    iconName: "Palette",
  },
  {
    id: "volunteering",
    title: "Volunteering & Community",
    category: "AIUB Student Life",
    body: "Active AIUB Student Volunteer and AIUB Computer Club (ACC) member, organizing campus tech symposiums, hackathons, and student initiatives.",
    iconName: "HeartHandshake",
  },
];

export interface Photo {
  id: string;
  src: string;
  caption: string;
  category: string;
  milestone: string;
  w: number;
  h: number;
  priorityOrder: number;
  aspectClass: "aspect-4/5" | "aspect-video" | "aspect-4/3";
  isTopFive: boolean;
}

/**
 * Real showcase photos capturing university milestones at AIUB, lab research, and working settings at Codezzi.
 * Priority focus items: #4 (office_working_with_team), #5 (qa_dev_success_collab), #8 (vues), #2 (office_research_time), and #6 (thesis_defense_uni).
 */
export const photos: Photo[] = [
  {
    id: "photo-4",
    src: photoOfficeTeam,
    caption: "Codezzi SQA Team Sprint & Collaborative Engineering",
    category: "Professional Life · Codezzi",
    milestone: "Sprint Validation & Quality Delivery",
    w: 3024,
    h: 4032,
    priorityOrder: 1, // Photo #4
    aspectClass: "aspect-4/5",
    isTopFive: true,
  },
  {
    id: "photo-5",
    src: photoCollab,
    caption: "QA & Dev Release Milestone Celebration",
    category: "Team Synergy & Success",
    milestone: "Zero Critical Defect Deployment",
    w: 1448,
    h: 1086,
    priorityOrder: 2, // Photo #5
    aspectClass: "aspect-4/3",
    isTopFive: true,
  },
  {
    id: "photo-8",
    src: photoVues,
    caption: "VUES Operations & Student Administration at AIUB",
    category: "AIUB Administration & VUES Operations",
    milestone: "Biometric Identity & Records Support",
    w: 3024,
    h: 4032,
    priorityOrder: 3, // Photo #8
    aspectClass: "aspect-4/5",
    isTopFive: true,
  },
  {
    id: "photo-2",
    src: photoOfficeResearch,
    caption: "Deep Work, Test Architecture & Defect Investigation",
    category: "Codezzi Engineering Workstation",
    milestone: "Exhaustive Test Case Authoring",
    w: 2268,
    h: 4032,
    priorityOrder: 4, // Photo #2
    aspectClass: "aspect-4/5",
    isTopFive: true,
  },
  {
    id: "photo-6",
    src: photoThesisDefense,
    caption: "Undergraduate Thesis Defense Day at AIUB",
    category: "Academic Milestones · AIUB",
    milestone: "B.Sc. CSE Final Defense Presentation",
    w: 4032,
    h: 2268,
    priorityOrder: 5, // Photo #6
    aspectClass: "aspect-video",
    isTopFive: true,
  },
  {
    id: "photo-7",
    src: photoThesisTeam,
    caption: "IoT Environmental Research Team at AIUB",
    category: "Engineering Research Cohort",
    milestone: "Multi-Sensor Telemetry Prototyping",
    w: 2268,
    h: 4032,
    priorityOrder: 6, // Photo #7
    aspectClass: "aspect-4/5",
    isTopFive: false,
  },
  {
    id: "photo-9",
    src: photoVuesWorking,
    caption: "VUES Student Support & Biometric Verification Desk",
    category: "Operational Service · AIUB",
    milestone: "University Portal Operations",
    w: 3024,
    h: 4032,
    priorityOrder: 7, // Photo #9
    aspectClass: "aspect-4/5",
    isTopFive: false,
  },
  {
    id: "photo-3",
    src: photoOfficeWorking,
    caption: "End-to-End Web App Cross-Browser Validation",
    category: "Quality Engineering · Codezzi",
    milestone: "Manual & Cross-Browser Verification",
    w: 2268,
    h: 4032,
    priorityOrder: 8, // Photo #3
    aspectClass: "aspect-4/5",
    isTopFive: false,
  },
  {
    id: "photo-1",
    src: photoCuteWorking,
    caption: "Software QA Engineer at Her Workstation",
    category: "Focus & Dedication",
    milestone: "Software Quality Assurance in Practice",
    w: 3072,
    h: 4096,
    priorityOrder: 9, // Photo #1
    aspectClass: "aspect-4/5",
    isTopFive: false,
  },
];

export interface EducationInfo {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  location: string;
  thesis: string;
  coursework: string[];
  activities: string[];
}

export const education: EducationInfo = {
  degree: "Bachelor of Science in Computer Science and Engineering (BSCSE)",
  institution: "American International University-Bangladesh (AIUB)",
  period: "2020 — 2024",
  cgpa: "3.29 / 4.00",
  location: "Dhaka, Bangladesh",
  thesis: "Real-Time Weather and Agricultural Environmental Monitoring using IoT",
  coursework: [
    "Software Quality Assurance & Testing",
    "Software Engineering",
    "Object-Oriented Programming (Java, C++)",
    "Database Management Systems (SQL)",
    "Data Communication & Networking",
    "Management Information Systems (MIS)",
    "Operating Systems",
    "Data Structures & Algorithms",
  ],
  activities: [
    "General Member, AIUB Computer Club (ACC)",
    "Active AIUB Student Volunteer Network",
    "Participated in campus technology workshops and symposiums",
  ],
};
