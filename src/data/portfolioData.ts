import {
  PersonalInfo,
  TimelineStep,
  SkillItem,
  ProjectItem,
  EducationInfo,
  AchievementItem,
  ExperienceItem,
} from '../types';

/**
 * ============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * Edit this single file to completely personalize your portfolio!
 * Replace placeholder values with your real details whenever ready.
 * ============================================================================
 */

export const personalInfo: PersonalInfo = {
  name: "Alex Chen",
  roleTitle: "Computer Science Engineering Student | Aspiring Web Developer",
  collegeStatus: "3rd-Year B.Tech / B.E. in Computer Science",
  tagline: "Building modern, responsive, and performant web applications with clean architecture.",
  shortBio: "I’m a 3rd-year Computer Science Engineering student passionate about building modern, responsive, and user-friendly web experiences. Currently focused on full-stack web development, mastering data structures & algorithms, and seeking Summer 2025/2026 internship opportunities.",
  extendedBio: [
    "I am currently in my 3rd year pursuing a Bachelor's degree in Computer Science Engineering. My journey into tech began with curiosity about how complex web applications scale to millions of users, which quickly turned into an obsession with building seamless digital products.",
    "Over the past three years, I have built a solid foundation in computer science fundamentals—spanning Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, and Database Management Systems—while independently building modern web applications with React, TypeScript, Node.js, and Tailwind CSS.",
    "My primary career goal is to become a professional software engineer / web developer working on high-impact web products. When I'm not writing code, you can find me solving algorithmic challenges on LeetCode, exploring new dev tools, or mentoring junior students in university tech workshops."
  ],
  location: "San Francisco Bay Area / Remote Friendly",
  // High quality developer avatar portrait
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  availability: "Available for Summer 2025/2026 Internships & New Grad Roles",
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "alex.chen.dev@outlook.com",
    twitter: "https://twitter.com",
    leetcode: "https://leetcode.com",
  },
  resumeUrl: "#resume-modal", // Clicking triggers the interactive resume modal & direct print/download
};

// Animated typing subtitles in the Hero section
export const heroTypingRoles = [
  "Web Developer",
  "CSE 3rd-Year Student",
  "Problem Solver",
  "Tech Enthusiast",
  "Full-Stack Builder",
];

// Interactive Journey Timeline: Education → Skills → Projects → Career Goals
export const journeyTimeline: TimelineStep[] = [
  {
    id: "education",
    title: "1. Core Education",
    subtitle: "3rd Year CSE Undergraduate",
    description: "Deepening theoretical foundations in DSA, Computer Networks, Operating Systems, DBMS, and Discrete Mathematics.",
    iconName: "GraduationCap",
    color: "from-blue-500 to-cyan-500",
    details: [
      "CGPA: 8.92 / 10.0 (Top 5% of class)",
      "Core CS Fundamentals & Engineering Mathematics",
      "Active member of the University Coding Club",
    ],
  },
  {
    id: "skills",
    title: "2. Technical Skills",
    subtitle: "Modern Web & System Tools",
    description: "Expanding from core C++/Java to full-stack JavaScript/TypeScript ecosystem with React, Node.js, and SQL/NoSQL databases.",
    iconName: "Code2",
    color: "from-cyan-500 to-emerald-500",
    details: [
      "Modern React 19, TypeScript & Tailwind CSS",
      "Backend REST APIs with Express & Node.js",
      "Relational & Document Databases (MySQL & MongoDB)",
    ],
  },
  {
    id: "projects",
    title: "3. Practical Projects",
    subtitle: "Solving Real-World Problems",
    description: "Translating concepts into deployed, user-facing applications with authentication, responsive interfaces, and optimized performance.",
    iconName: "FolderGit2",
    color: "from-emerald-500 to-indigo-500",
    details: [
      "4+ Full-stack and frontend showcase apps",
      "Clean Git commit workflows and documentation",
      "Interactive data structures visualization tools",
    ],
  },
  {
    id: "career",
    title: "4. Career Goals",
    subtitle: "Industry Software Engineer",
    description: "Aspiring to join an innovative engineering team for a Summer internship and transition into a full-time Web/Software Developer.",
    iconName: "Rocket",
    color: "from-indigo-500 to-purple-500",
    details: [
      "Seeking Summer 2025/2026 SWE/Web Internships",
      "Eager to contribute to scalable production codebases",
      "Commitment to continuous learning and team collaboration",
    ],
  },
];

// Technical Skills honest & categorized
export const skillsList: SkillItem[] = [
  // Frontend
  { name: "HTML5", category: "Frontend", level: "Proficient", yearsOrConfidence: "3 Years", featured: true },
  { name: "CSS3 / Modern CSS", category: "Frontend", level: "Proficient", yearsOrConfidence: "3 Years", featured: true },
  { name: "JavaScript (ES6+)", category: "Frontend", level: "Proficient", yearsOrConfidence: "3 Years", featured: true },
  { name: "TypeScript", category: "Frontend", level: "Intermediate", yearsOrConfidence: "1.5 Years", featured: true },
  { name: "React.js", category: "Frontend", level: "Proficient", yearsOrConfidence: "2 Years", featured: true },
  { name: "Tailwind CSS", category: "Frontend", level: "Proficient", yearsOrConfidence: "2 Years", featured: true },
  { name: "Responsive Web Design", category: "Frontend", level: "Proficient", yearsOrConfidence: "3 Years" },
  { name: "REST API Integration", category: "Frontend", level: "Proficient", yearsOrConfidence: "2 Years" },
  
  // Backend
  { name: "Node.js", category: "Backend", level: "Intermediate", yearsOrConfidence: "2 Years", featured: true },
  { name: "Express.js", category: "Backend", level: "Intermediate", yearsOrConfidence: "2 Years", featured: true },
  { name: "RESTful API Design", category: "Backend", level: "Intermediate", yearsOrConfidence: "2 Years", featured: true },
  { name: "JWT Authentication", category: "Backend", level: "Intermediate", yearsOrConfidence: "1.5 Years" },
  { name: "Middleware & CORS", category: "Backend", level: "Intermediate", yearsOrConfidence: "1.5 Years" },
  
  // Programming Languages
  { name: "C++ (DSA)", category: "Programming", level: "Proficient", yearsOrConfidence: "3 Years", featured: true },
  { name: "Java (OOP)", category: "Programming", level: "Intermediate", yearsOrConfidence: "2 Years", featured: true },
  { name: "Python", category: "Programming", level: "Intermediate", yearsOrConfidence: "2 Years", featured: true },
  { name: "C", category: "Programming", level: "Intermediate", yearsOrConfidence: "2 Years" },

  // Database & Tools
  { name: "MySQL", category: "Database & Tools", level: "Proficient", yearsOrConfidence: "2 Years", featured: true },
  { name: "MongoDB", category: "Database & Tools", level: "Intermediate", yearsOrConfidence: "1.5 Years", featured: true },
  { name: "Git", category: "Database & Tools", level: "Proficient", yearsOrConfidence: "3 Years", featured: true },
  { name: "GitHub", category: "Database & Tools", level: "Proficient", yearsOrConfidence: "3 Years", featured: true },
  { name: "VS Code", category: "Database & Tools", level: "Proficient", yearsOrConfidence: "3 Years", featured: true },
  { name: "Postman", category: "Database & Tools", level: "Intermediate", yearsOrConfidence: "2 Years" },
  { name: "Linux / Bash", category: "Database & Tools", level: "Intermediate", yearsOrConfidence: "2 Years" },
];

// Featured Projects
export const projectsList: ProjectItem[] = [
  {
    id: "devpulse",
    title: "DevPulse - Collaborative Snippet & Note Engine",
    category: "Full Stack",
    tagline: "A real-time developer workspace for organizing, executing, and sharing reusable code snippets with team tags.",
    description: "Engineered a full-stack developer productivity platform featuring multi-language syntax highlighting, tag-based search, collection sharing, and secure JWT authentication.",
    keyFeatures: [
      "Custom tag-based search with instant client-side filtering",
      "Markdown documentation support with real-time preview",
      "Secure user authentication with hashed credentials & JWT cookies",
      "Responsive developer-focused UI with dark/light themes",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveDemoUrl: "https://example.com/demo-devpulse",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    metrics: "120+ Active Student Users",
  },
  {
    id: "algolab",
    title: "AlgoLab - Interactive DSA & Sorting Visualizer",
    category: "Algorithms & Systems",
    tagline: "Visual simulation environment for sorting, graph traversal, and binary tree operations.",
    description: "Built an educational visualizer to help undergraduate students understand how fundamental sorting (QuickSort, MergeSort) and pathfinding algorithms (Dijkstra, BFS/DFS) execute step-by-step.",
    keyFeatures: [
      "Speed controls, step-by-step playback, and pause/resume",
      "Array comparison counters and time complexity display",
      "Custom array size and randomized data generators",
      "Canvas-based smooth 60fps rendering without UI jank",
    ],
    technologies: ["React", "TypeScript", "HTML5 Canvas", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com",
    liveDemoUrl: "https://example.com/demo-algolab",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    metrics: "450+ Star Rating in Peer Review",
  },
  {
    id: "campusbite",
    title: "CampusBite - University Food & Resource Hub",
    category: "Full Stack",
    tagline: "Web portal streamlining campus cafeteria ordering and academic resource book exchanges.",
    description: "Designed and developed a responsive portal to resolve long cafeteria queues and simplify textbook exchanges among engineering department students.",
    keyFeatures: [
      "Real-time order queue status and time slot reservation",
      "Relational database design in MySQL with normalized schemas",
      "Student ID verification and role-based access control",
      "Optimized mobile layout for on-the-go student access",
    ],
    technologies: ["React", "JavaScript", "Express.js", "MySQL", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveDemoUrl: "https://example.com/demo-campusbite",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    metrics: "Used during Campus Tech Fair",
  },
  {
    id: "gitscope",
    title: "GitScope - Developer GitHub Metrics & Insights",
    category: "Frontend",
    tagline: "Clean analytical dashboard visualizing developer commit patterns, language distributions, and top repos.",
    description: "Created a single-page analytics application leveraging the GitHub REST API to generate sleek candidate summaries for recruiter and peer evaluations.",
    keyFeatures: [
      "Dynamic repository breakdown by stars, forks, and language",
      "Rate-limit handling with client-side caching mechanism",
      "Exportable summary card for resume portfolios",
      "Debounced user search with error boundary handling",
    ],
    technologies: ["React", "TypeScript", "GitHub REST API", "Tailwind CSS", "Lucide Icons"],
    githubUrl: "https://github.com",
    liveDemoUrl: "https://example.com/demo-gitscope",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    metrics: "Sub-second API response cache",
  },
];

// Education Information
export const educationData: EducationInfo = {
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Computer Science & Engineering",
  institution: "State Technological University / Institute of Technology",
  location: "College Campus, State",
  startYear: "2023",
  graduationYear: "2027 (Expected)",
  currentStatus: "3rd Year (6th Semester)",
  cgpa: "8.92",
  maxCgpa: "10.0",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java / C++)",
    "Database Management Systems (SQL & Relational Design)",
    "Operating Systems & Process Concurrency",
    "Computer Networks & Protocols (TCP/IP, HTTP/S)",
    "Software Engineering & Agile Methodologies",
    "Web Technologies & Full-Stack Architectures",
    "Theory of Computation & Discrete Mathematics",
  ],
  academicHonors: [
    "Dean’s Academic Merit Honor List (Consecutive 4 Semesters)",
    "Top 5% rank in the Computer Science Engineering Department",
    "Technical Secretary of Student Computer Society (2024-2025)",
  ],
};

// Experience & Achievements
export const experiences: ExperienceItem[] = [
  {
    id: "intern-tech-cell",
    role: "Web Development Intern (University Tech Cell)",
    organization: "Department of Computer Science & Engineering",
    period: "May 2024 – August 2024",
    location: "On-campus / Hybrid",
    type: "Internship",
    responsibilities: [
      "Collaborated with faculty and a 4-member student team to rebuild the department event management portal using React and Node.js.",
      "Optimized client-side rendering which reduced page load times by 35% across campus mobile devices.",
      "Integrated secure authentication for 1,200+ registered university students and managed MySQL database queries.",
    ],
    technologies: ["React", "JavaScript", "Express.js", "MySQL", "Git"],
  },
  {
    id: "open-source-lead",
    role: "Open Source Contributor & Workshop Mentor",
    organization: "Google Developer Student Club / Campus Coding Club",
    period: "Sept 2023 – Present",
    location: "Campus",
    type: "Campus Leadership",
    responsibilities: [
      "Conducted 3 hands-on introductory Git & GitHub workshops for 150+ 1st and 2nd year students.",
      "Contributed documentation fixes and UI improvements to open-source student utility repositories.",
      "Assisted peers in debugging frontend JavaScript issues and algorithmic problem sets.",
    ],
    technologies: ["Git", "GitHub", "JavaScript", "Web Fundamentals"],
  },
];

export const achievements: AchievementItem[] = [
  {
    id: "hackathon-1",
    title: "1st Runner-Up — CodeStorm National Hackathon",
    organization: "Inter-College Engineering Fest",
    date: "November 2024",
    description: "Built an accessible educational resource hub within 36 hours alongside a 3-member team, recognized for UI responsiveness and complete backend API integration.",
    type: "hackathon",
    badge: "2nd Place / 80+ Teams",
  },
  {
    id: "cert-meta-frontend",
    title: "Meta Front-End Developer Specialization",
    organization: "Coursera / Meta",
    date: "July 2024",
    description: "Comprehensive 9-course certification covering modern React, Advanced JavaScript, Version Control, Responsive Web Design, and UX Principles.",
    type: "certification",
    badge: "Verified Certificate",
  },
  {
    id: "coding-leetcode",
    title: "500+ Algorithmic Problems Solved",
    organization: "LeetCode & HackerRank",
    date: "Ongoing",
    description: "Solved 300+ LeetCode problems (Arrays, Trees, Dynamic Programming, Graphs) with a 1750+ contest rating, and earned a 5-Star Problem Solving badge on HackerRank.",
    type: "coding",
    badge: "5-Star C++ & Java",
  },
  {
    id: "cert-postman",
    title: "Postman API Fundamentals Student Expert",
    organization: "Postman",
    date: "February 2024",
    description: "Certified in testing RESTful APIs, automating collection runs, and mastering HTTP request-response lifecycles.",
    type: "certification",
    badge: "Student Expert",
  },
];

// Quick Stats for Hero / About
export const quickStats = [
  { label: "Current Year", value: "3rd Year", subtext: "B.Tech CSE" },
  { label: "Projects Built", value: "12+", subtext: "Web & Core" },
  { label: "DSA Problems", value: "500+", subtext: "LeetCode / GFG" },
  { label: "Department CGPA", value: "8.92", subtext: "Out of 10.0" },
];
