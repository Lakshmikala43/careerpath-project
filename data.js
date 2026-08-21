// Comprehensive Technology & Career Roadmap Dataset for Fresher Engineers

export const CAREER_PATHS = [
  {
    id: "software-developer",
    title: "Software Developer",
    icon: "code-2",
    badge: "Popular Core Track",
    description: "Build a strong generalist foundation in computer science, core programming, databases, and full-stack software development.",
    gradient: "from-blue-600 to-indigo-600",
    color: "blue"
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    icon: "layout",
    badge: "High Visual Impact",
    description: "Craft modern, accessible, responsive user interfaces and interactive web applications using modern JavaScript & React.",
    gradient: "from-cyan-500 to-blue-600",
    color: "cyan"
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    icon: "server",
    badge: "Scalability & Logic",
    description: "Design robust APIs, microservices, databases, authentication, and cloud infrastructure logic.",
    gradient: "from-indigo-600 to-purple-600",
    color: "indigo"
  },
  {
    id: "ai-ml-engineer",
    title: "AI / ML Engineer",
    icon: "brain-circuit",
    badge: "High Growth",
    description: "Master Python, statistical modeling, machine learning algorithms, deep learning frameworks, LLMs, and Generative AI.",
    gradient: "from-purple-600 to-pink-600",
    color: "purple"
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    icon: "cloud",
    badge: "High Demand",
    description: "Architect, deploy, and scale resilient cloud solutions using AWS/Azure, Docker, Kubernetes, CI/CD pipelines, and IaC.",
    gradient: "from-emerald-500 to-teal-600",
    color: "emerald"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Specialist",
    icon: "shield-check",
    badge: "Mission Critical",
    description: "Protect digital infrastructure through network security, ethical hacking, web vulnerability assessments, SIEM, and cryptography.",
    gradient: "from-amber-500 to-red-600",
    color: "amber"
  },
  {
    id: "data-analyst-scientist",
    title: "Data Analyst / Data Scientist",
    icon: "bar-chart-3",
    badge: "Insight Driven",
    description: "Extract actionable insights using SQL, Excel, Python data stack, statistical analysis, Power BI/Tableau, and predictive ML.",
    gradient: "from-teal-500 to-emerald-600",
    color: "teal"
  }
];

export const ROADMAP_STAGES = [
  { id: "START", title: "1. Orientation & Mindset", description: "Establish problem-solving mindset and tech setup." },
  { id: "FUNDAMENTALS", title: "2. Fundamentals", description: "Core programming language, logic building, and syntax." },
  { id: "CORE_SKILLS", title: "3. Core Engineering Skills", description: "Algorithms, data structures, databases, and version control." },
  { id: "SPECIALIZATION", title: "4. Specialized Frameworks", description: "Industry-standard frameworks and domain tools." },
  { id: "ADVANCED", title: "5. Advanced Engineering", description: "Architecture, system design, security, and optimization." },
  { id: "PROJECTS", title: "6. Production Projects", description: "End-to-end portfolio projects with real-world utility." },
  { id: "DEPLOYMENT", title: "7. Deployment & DevOps", description: "CI/CD, cloud hosting, and production monitoring." },
  { id: "INTERVIEW_PREP", title: "8. Interview Mastery", description: "DSA problem solving, mock interviews, and system design." },
  { id: "JOB_READY", title: "9. Job Ready Milestone", description: "Resume, portfolio, networking, and application strategy." }
];

export const ROADMAPS = {
  "software-developer": [
    {
      id: "sd-prog-fund",
      name: "Programming Fundamentals",
      stage: "START",
      level: "Beginner",
      category: "Core CS",
      icon: "terminal",
      whyImportant: "Foundation of all software development. Builds computational thinking, variable management, and control flow logic.",
      prerequisites: ["Basic Computer Literacy"],
      whatToLearn: "Variables, Data Types, Conditionals (if/else), Loops (for/while), Functions, Scopes, Memory basics.",
      keyConcepts: ["Control Flow", "Function Stack", "Variable Scope", "Input/Output Stream", "Error Handling"],
      estimatedDuration: "2 - 3 Weeks",
      practiceProjects: ["Calculator CLI", "Number Guessing Game", "Simple ATM Machine Simulation"],
      recommendedResources: [
        { name: "FreeCodeCamp Programming Principles", type: "Free Course", url: "https://www.freecodecamp.org" },
        { name: "CS50: Introduction to Computer Science", type: "YouTube / EdX", url: "https://cs50.harvard.edu/x" }
      ],
      nextSkill: "sd-lang"
    },
    {
      id: "sd-lang",
      name: "Core Language: Python / Java / C++",
      stage: "FUNDAMENTALS",
      level: "Beginner",
      category: "Core CS",
      icon: "code",
      whyImportant: "Mastering one primary compiled or interpreted language deeply is essential for coding assessments and technical interviews.",
      prerequisites: ["Programming Fundamentals"],
      whatToLearn: "Syntax deep dive, Standard Template Library (STL / Collections framework), Memory Allocation, Pointers/References.",
      keyConcepts: ["Collections", "Generics", "Memory Management", "Exception Handling", "File I/O"],
      estimatedDuration: "3 - 4 Weeks",
      practiceProjects: ["Library Management System", "Student Grade Manager", "Console File Parser"],
      recommendedResources: [
        { name: "Official Language Documentation", type: "Official Docs", url: "https://docs.python.org/3/" },
        { name: "W3Schools Language Guides", type: "Interactive", url: "https://www.w3schools.com" }
      ],
      nextSkill: "sd-dsa"
    },
    {
      id: "sd-dsa",
      name: "Data Structures & Algorithms",
      stage: "CORE_SKILLS",
      level: "Intermediate",
      category: "Core CS",
      icon: "binary",
      whyImportant: "Critical for technical interviews at top product companies. Teaches efficient memory usage and speed optimization.",
      prerequisites: ["Core Language: Python / Java / C++"],
      whatToLearn: "Arrays, Strings, Linked Lists, Stacks, Queues, Hash Tables, Trees, Graphs, Sorting/Searching, Recursion, Dynamic Programming.",
      keyConcepts: ["Big O Notation", "Time & Space Complexity", "Recursion", "Two Pointers", "Sliding Window", "Graph Traversal (BFS/DFS)"],
      estimatedDuration: "6 - 8 Weeks",
      practiceProjects: ["Solve 100+ LeetCode / NeetCode problems", "Implement Custom HashMap from scratch", "Maze Solver Algorithm"],
      recommendedResources: [
        { name: "NeetCode.io Roadmap", type: "Practice Platform", url: "https://neetcode.io" },
        { name: "LeetCode 75 Study Plan", type: "Practice Platform", url: "https://leetcode.com" }
      ],
      nextSkill: "sd-oop"
    },
    {
      id: "sd-oop",
      name: "Object-Oriented Programming (OOP)",
      stage: "CORE_SKILLS",
      level: "Intermediate",
      category: "Core CS",
      icon: "boxes",
      whyImportant: "Allows engineering scalable, maintainable, modular software architectures in enterprise environments.",
      prerequisites: ["Core Language: Python / Java / C++"],
      whatToLearn: "Encapsulation, Inheritance, Polymorphism, Abstraction, Design Patterns (Factory, Singleton, Observer), SOLID Principles.",
      keyConcepts: ["Classes & Objects", "Interface vs Abstract Class", "SOLID Principles", "Composition over Inheritance"],
      estimatedDuration: "2 - 3 Weeks",
      practiceProjects: ["Parking Lot System Design", "E-Commerce Cart Engine", "Chess Game Core Logic"],
      recommendedResources: [
        { name: "Refactoring Guru - Design Patterns", type: "Documentation", url: "https://refactoring.guru" }
      ],
      nextSkill: "sd-dbms"
    },
    {
      id: "sd-dbms",
      name: "SQL & Relational Databases (DBMS)",
      stage: "CORE_SKILLS",
      level: "Intermediate",
      category: "Backend",
      icon: "database",
      whyImportant: "Nearly all business applications store and query relational data. Essential for managing transactions and data integrity.",
      prerequisites: ["Programming Fundamentals"],
      whatToLearn: "SQL Queries (SELECT, JOIN, GROUP BY), Normalization (1NF to 3NF), Indexes, Transactions (ACID), PostgreSQL / MySQL.",
      keyConcepts: ["Relational Algebra", "ACID Compliance", "Indexing & Query Optimization", "Foreign Keys & Constraints"],
      estimatedDuration: "3 - 4 Weeks",
      practiceProjects: ["Hospital Database Schema", "Bank Account Transaction Log", "E-Commerce Analytics Queries"],
      recommendedResources: [
        { name: "SQLBolt Interactive Tutorial", type: "Interactive", url: "https://sqlbolt.com" },
        { name: "PostgreSQL Tutorial", type: "Official Docs", url: "https://www.postgresqltutorial.com" }
      ],
      nextSkill: "sd-git"
    },
    {
      id: "sd-git",
      name: "Git & Version Control",
      stage: "CORE_SKILLS",
      level: "Beginner",
      category: "Core CS",
      icon: "git-branch",
      whyImportant: "Industry standard for code collaboration, version history tracking, pull requests, and open-source contribution.",
      prerequisites: ["Basic Terminal / CLI"],
      whatToLearn: "git init, add, commit, push, pull, branch, merge, rebase, resolving merge conflicts, GitHub Pull Requests.",
      keyConcepts: ["Branching Strategy", "Git Flow", "Merge Conflict Resolution", "Commit History Sanitation"],
      estimatedDuration: "1 - 2 Weeks",
      practiceProjects: ["Host 3 projects on GitHub", "Collaborate on a group repository using PRs"],
      recommendedResources: [
        { name: "Git Documentation", type: "Official Docs", url: "https://git-scm.com/doc" },
        { name: "GitHub Skills Interactive", type: "Interactive", url: "https://skills.github.com" }
      ],
      nextSkill: "sd-backend"
    },
    {
      id: "sd-backend",
      name: "Backend Development & APIs",
      stage: "SPECIALIZATION",
      level: "Intermediate",
      category: "Backend",
      icon: "server-cog",
      whyImportant: "Connects front-end user interfaces to data logic, business rules, authentication, and external services.",
      prerequisites: ["OOP", "SQL & DBMS", "Git"],
      whatToLearn: "RESTful API Architecture, Express.js / Spring Boot / FastAPI, HTTP Status Codes, JWT Authentication, JSON.",
      keyConcepts: ["REST Architectural Constraints", "Middleware Pipeline", "JWT & OAuth2", "ORMs (Prisma/Hibernate/SQLAlchemy)"],
      estimatedDuration: "4 - 6 Weeks",
      practiceProjects: ["RESTful User Management Service", "Task Management API with Auth"],
      recommendedResources: [
        { name: "MDN Web Docs: Express / Web APIs", type: "Official Docs", url: "https://developer.mozilla.org" }
      ],
      nextSkill: "sd-projects"
    },
    {
      id: "sd-projects",
      name: "Full-Stack Portfolio Projects",
      stage: "PROJECTS",
      level: "Advanced",
      category: "Core CS",
      icon: "rocket",
      whyImportant: "Proves to hiring managers that you can combine frontend, backend, database, and auth into a real working product.",
      prerequisites: ["Backend APIs", "Git", "SQL"],
      whatToLearn: "End-to-End Application Architecture, Clean Code Architecture, State Management, API Integration.",
      keyConcepts: ["System Architecture", "Security Best Practices", "Error Handling", "UX Flow"],
      estimatedDuration: "4 - 5 Weeks",
      practiceProjects: ["SaaS Expense Tracker", "Real-Time Chat Application", "Job Portal API & Web App"],
      recommendedResources: [
        { name: "Build & Deploy Full Stack Guides", type: "YouTube", url: "https://youtube.com" }
      ],
      nextSkill: "sd-interview"
    },
    {
      id: "sd-interview",
      name: "System Design & Interview Prep",
      stage: "INTERVIEW_PREP",
      level: "Advanced",
      category: "Core CS",
      icon: "user-check",
      whyImportant: "Prepares you for technical screening rounds, behavioral interviews, resume reviews, and coding assessments.",
      prerequisites: ["Full-Stack Projects", "DSA"],
      whatToLearn: "High Level Architecture, Caching (Redis), Load Balancers, Mock Coding Interviews, Resume Formatting.",
      keyConcepts: ["Scalability", "System Tradeoffs", "STAR Method", "Behavioral Interview Prep"],
      estimatedDuration: "3 - 4 Weeks",
      practiceProjects: ["Design URL Shortener (TinyURL)", "Mock Technical Interview Practice"],
      recommendedResources: [
        { name: "System Design Primer on GitHub", type: "Documentation", url: "https://github.com/donnemartin/system-design-primer" }
      ],
      nextSkill: "sd-ready"
    },
    {
      id: "sd-ready",
      name: "🚀 Job Ready Milestone",
      stage: "JOB_READY",
      level: "Advanced",
      category: "Core CS",
      icon: "award",
      whyImportant: "You have acquired the core engineering competencies required to pass entry-level engineering interviews and excel in your first role.",
      prerequisites: ["All SD Stages Completed"],
      whatToLearn: "LinkedIn Networking, Cold Outreach, GitHub Portfolio polishing, HR Interview Prep.",
      keyConcepts: ["Resume ATS Optimization", "Portfolio Presentation", "Offer Negotiation Basics"],
      estimatedDuration: "Ongoing",
      practiceProjects: ["Apply to 50+ Roles", "Contribute to 1 Open Source Project"],
      recommendedResources: [
        { name: "Tech Interview Handbook", type: "Documentation", url: "https://techinterviewhandbook.org" }
      ],
      nextSkill: null
    }
  ],

  "frontend-developer": [
    {
      id: "fe-html",
      name: "HTML5 & Semantic Markup",
      stage: "START",
      level: "Beginner",
      category: "Frontend",
      icon: "file-code-2",
      whyImportant: "The backbone of the web. Semantic HTML provides structure, accessibility (a11y), and SEO advantages.",
      prerequisites: ["None"],
      whatToLearn: "Semantic Tags (header, nav, main, article, section, footer), Forms & Inputs, Accessibility (ARIA), Meta Tags.",
      keyConcepts: ["DOM Tree Structure", "Semantic Elements", "WAI-ARIA Accessibility", "SEO Meta Tags"],
      estimatedDuration: "1 - 2 Weeks",
      practiceProjects: ["Accessible Personal Resume Page", "Survey Form Component"],
      recommendedResources: [
        { name: "MDN HTML Basics", type: "Official Docs", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML" },
        { name: "W3C Web Accessibility Tutorials", type: "Official Docs", url: "https://www.w3.org/WAI/tutorials/" }
      ],
      nextSkill: "fe-css"
    },
    {
      id: "fe-css",
      name: "Modern CSS3 & Responsive Design",
      stage: "FUNDAMENTALS",
      level: "Beginner",
      category: "Frontend",
      icon: "palette",
      whyImportant: "Controls visual presentation, layout responsiveness across mobile/desktop, animations, and branding aesthetics.",
      prerequisites: ["HTML5"],
      whatToLearn: "Box Model, Flexbox, CSS Grid, Custom Properties (Variables), Media Queries, Transitions & Animations.",
      keyConcepts: ["Flexbox vs Grid", "CSS Specificity", "Responsive Breakpoints", "Mobile-First Design"],
      estimatedDuration: "2 - 3 Weeks",
      practiceProjects: ["Responsive SaaS Pricing Card Grid", "Animated Modern Navbar"],
      recommendedResources: [
        { name: "Flexbox Froggy", type: "Interactive Game", url: "https://flexboxfroggy.com" },
        { name: "CSS Grid Garden", type: "Interactive Game", url: "https://cssgridgarden.com" }
      ],
      nextSkill: "fe-js"
    },
    {
      id: "fe-js",
      name: "JavaScript (ES6+ Deep Dive)",
      stage: "CORE_SKILLS",
      level: "Intermediate",
      category: "Frontend",
      icon: "file-json",
      whyImportant: "The engine of web interactivity. Modern JS features drive modern front-end single-page application frameworks.",
      prerequisites: ["HTML5", "CSS3"],
      whatToLearn: "DOM Manipulation, Event Listeners, Promises/Async-Await, Fetch API, ES6 Modules, Destructuring, Closures, Array Methods.",
      keyConcepts: ["Event Loop & Asynchrony", "Scope & Closure", "Prototypes", "Fetch / Promises"],
      estimatedDuration: "4 - 5 Weeks",
      practiceProjects: ["Interactive Weather App with Public API", "Kanban Task Board with LocalStorage"],
      recommendedResources: [
        { name: "JavaScript.info", type: "Interactive Docs", url: "https://javascript.info" },
        { name: "Eloquent JavaScript Book", type: "Free Book", url: "https://eloquentjavascript.net" }
      ],
      nextSkill: "fe-git"
    },
    {
      id: "fe-git",
      name: "Git & GitHub Workflow",
      stage: "CORE_SKILLS",
      level: "Beginner",
      category: "Core CS",
      icon: "git-branch",
      whyImportant: "Tracks changes, enables hosting on GitHub Pages/Vercel, and allows team collaboration on UI code.",
      prerequisites: ["Basic JS"],
      whatToLearn: "Git CLI, GitHub repositories, PRs, GitHub Actions deployment pipelines.",
      keyConcepts: ["Version Control", "Pull Request Reviews", "Branch Protection Rules"],
      estimatedDuration: "1 Week",
      practiceProjects: ["Deploy personal portfolio site to GitHub Pages"],
      recommendedResources: [
        { name: "GitHub Learning Lab", type: "Interactive", url: "https://skills.github.com" }
      ],
      nextSkill: "fe-react"
    },
    {
      id: "fe-react",
      name: "React.js Framework",
      stage: "SPECIALIZATION",
      level: "Intermediate",
      category: "Frontend",
      icon: "atom",
      whyImportant: "The most popular frontend library worldwide. Essential for component-driven UI development and state management.",
      prerequisites: ["JavaScript ES6+"],
      whatToLearn: "JSX, Components, Props, State (useState), Effects (useEffect), Custom Hooks, Context API, React Router.",
      keyConcepts: ["Virtual DOM", "Unidirectional Data Flow", "Hook Rules", "Component Lifecycle"],
      estimatedDuration: "4 - 5 Weeks",
      practiceProjects: ["E-Commerce Product Catalog with Cart", "Movie Search & Rating Platform"],
      recommendedResources: [
        { name: "Official React Docs (react.dev)", type: "Official Docs", url: "https://react.dev" }
      ],
      nextSkill: "fe-ts"
    },
    {
      id: "fe-ts",
      name: "TypeScript for Frontend",
      stage: "SPECIALIZATION",
      level: "Intermediate",
      category: "Frontend",
      icon: "shield",
      whyImportant: "Adds static type safety to JavaScript, catching runtime errors early and enhancing IDE autocomplete productivity.",
      prerequisites: ["JavaScript ES6+", "React.js"],
      whatToLearn: "Types, Interfaces, Generics, Type Inference, Typing React Props & State, Discriminated Unions.",
      keyConcepts: ["Static Type Checking", "Interfaces vs Types", "Generic Constraints"],
      estimatedDuration: "2 - 3 Weeks",
      practiceProjects: ["Convert a JavaScript React App to TypeScript with 100% Type Coverage"],
      recommendedResources: [
        { name: "TypeScript Official Handbook", type: "Official Docs", url: "https://www.typescriptlang.org/docs/" }
      ],
      nextSkill: "fe-next"
    },
    {
      id: "fe-next",
      name: "Next.js & Server-Side Rendering",
      stage: "ADVANCED",
      level: "Advanced",
      category: "Frontend",
      icon: "layers",
      whyImportant: "Industry standard React framework for SSR, SSG, App Router, Server Components, and optimized web performance.",
      prerequisites: ["React.js", "TypeScript"],
      whatToLearn: "App Router, Server Components vs Client Components, API Routes, Image Optimization, Dynamic Routing.",
      keyConcepts: ["Server-Side Rendering (SSR)", "Static Site Generation (SSG)", "Hydration"],
      estimatedDuration: "3 - 4 Weeks",
      practiceProjects: ["Full-Stack SaaS Landing & Blog Platform with Next.js App Router"],
      recommendedResources: [
        { name: "Next.js Official Learn Course", type: "Interactive Docs", url: "https://nextjs.org/learn" }
      ],
      nextSkill: "fe-projects"
    },
    {
      id: "fe-projects",
      name: "Frontend Testing & Deployment",
      stage: "DEPLOYMENT",
      level: "Advanced",
      category: "Frontend",
      icon: "globe",
      whyImportant: "Ensures UI quality with automated tests and deploys applications seamlessly to Vercel or Netlify.",
      prerequisites: ["Next.js", "TypeScript"],
      whatToLearn: "Jest, React Testing Library, Vitest, Vercel Deployment, Lighthouse Performance Audit, Web Vitals.",
      keyConcepts: ["Unit vs E2E Testing", "Core Web Vitals Optimization", "Continuous Deployment"],
      estimatedDuration: "2 - 3 Weeks",
      practiceProjects: ["Write Unit Tests for React Components & Deploy Production App to Vercel"],
      recommendedResources: [
        { name: "Testing Library Documentation", type: "Official Docs", url: "https://testing-library.com" }
      ],
      nextSkill: "fe-ready"
    },
    {
      id: "fe-ready",
      name: "🚀 Job Ready Frontend Engineer",
      stage: "JOB_READY",
      level: "Advanced",
      category: "Frontend",
      icon: "award",
      whyImportant: "You possess end-to-end frontend expertise to build high-performance, responsive, production-ready web apps.",
      prerequisites: ["All Frontend Stages Completed"],
      whatToLearn: "Frontend Machine Coding rounds, Polyfills implementation, System Design for Web.",
      keyConcepts: ["DOM Polyfills", "Debouncing / Throttling", "Virtualization"],
      estimatedDuration: "Ongoing",
      practiceProjects: ["Build an Interactive Portfolio Site with Dark Mode and 95+ Lighthouse Score"],
      recommendedResources: [
        { name: "Frontend Interview Handbook", type: "Documentation", url: "https://www.frontendinterviewhandbook.com" }
      ],
      nextSkill: null
    }
  ],

  "backend-developer": [
    {
      id: "be-lang",
      name: "Backend Language (Node.js / Java / Python / Go)",
      stage: "START",
      level: "Beginner",
      category: "Backend",
      icon: "code",
      whyImportant: "Choose one primary backend ecosystem (e.g. Node.js/TypeScript, Java/Spring Boot, Python/FastAPI, or Go).",
      prerequisites: ["Programming Fundamentals"],
      whatToLearn: "Event-driven runtime (Node.js) or Object-oriented JVM (Java), Asynchronous processing, Modules, Memory management.",
      keyConcepts: ["Async I/O", "Concurrency vs Parallelism", "Thread Pools"],
      estimatedDuration: "3 - 4 Weeks",
      practiceProjects: ["CLI File Utility", "Multithreaded / Async File Downloader"],
      recommendedResources: [
        { name: "Node.js Official Documentation", type: "Official Docs", url: "https://nodejs.org" },
        { name: "Baeldung Java / Spring Guides", type: "Documentation", url: "https://www.baeldung.com" }
      ],
      nextSkill: "be-db"
    },
    {
      id: "be-db",
      name: "Relational Databases & SQL Deep Dive",
      stage: "FUNDAMENTALS",
      level: "Intermediate",
      category: "Backend",
      icon: "database",
      whyImportant: "Backend systems revolve around data storage, transactional consistency, indexing strategies, and relational schema design.",
      prerequisites: ["Backend Language"],
      whatToLearn: "PostgreSQL, Indexing (B-Trees), Transactions (ACID), Normalization, Joins, Query Execution Plans.",
      keyConcepts: ["ACID Properties", "Index Types", "Connection Pooling", "N+1 Query Problem"],
      estimatedDuration: "3 - 4 Weeks",
      practiceProjects: ["Design Bank Account DB Schema with Transaction Locks"],
      recommendedResources: [
        { name: "Use The Index, Luke!", type: "Documentation", url: "https://use-the-index-luke.com" }
      ],
      nextSkill: "be-api"
    },
    {
      id: "be-api",
      name: "REST API Architecture & Design",
      stage: "CORE_SKILLS",
      level: "Intermediate",
      category: "Backend",
      icon: "network",
      whyImportant: "APIs allow frontends, mobile apps, and third parties to communicate securely with backend systems.",
      prerequisites: ["Backend Language", "SQL"],
      whatToLearn: "HTTP Methods, Status Codes, OpenAPI/Swagger Spec, Routing, Input Validation, CORS, Error Middleware.",
      keyConcepts: ["RESTful Principles", "Idempotency", "JSON Payload Schema Validation"],
      estimatedDuration: "3 - 4 Weeks",
      practiceProjects: ["E-Commerce REST API with Product Catalog & Cart Endpoints"],
      recommendedResources: [
        { name: "Restful API Design Best Practices", type: "Documentation", url: "https://restfulapi.net" }
      ],
      nextSkill: "be-auth"
    },
    {
      id: "be-auth",
      name: "Authentication & Security",
      stage: "CORE_SKILLS",
      level: "Intermediate",
      category: "Backend",
      icon: "key-round",
      whyImportant: "Protects user data, handles identity verification, session state, and role-based access control.",
      prerequisites: ["REST API Architecture"],
      whatToLearn: "Password Hashing (Bcrypt/Argon2), JWT (JSON Web Tokens), OAuth2, Sessions & Cookies, RBAC (Role-Based Access).",
      keyConcepts: ["Stateless Auth vs Sessions", "Token Expiration & Refresh Tokens", "SQL Injection & XSS Prevention"],
      estimatedDuration: "2 - 3 Weeks",
      practiceProjects: ["Auth Service with JWT Refresh Rotation & Email Verification"],
      recommendedResources: [
        { name: "OWASP Top 10 Security Cheat Sheet", type: "Security Guide", url: "https://owasp.org/www-project-top-ten/" }
      ],
      nextSkill: "be-nosql"
    },
    {
      id: "be-nosql",
      name: "NoSQL Databases & Caching",
      stage: "SPECIALIZATION",
      level: "Intermediate",
      category: "Backend",
      icon: "hard-drive",
      whyImportant: "High-throughput applications use caching (Redis) to decrease database load and document DBs (MongoDB/DynamoDB) for flexible data.",
      prerequisites: ["Relational Databases"],
      whatToLearn: "Redis Caching Strategies (Cache-Aside, Write-Through), Pub/Sub, MongoDB / Document Storage, Key-Value stores.",
      keyConcepts: ["Cache Invalidation", "TTL (Time To Live)", "Eventual Consistency"],
      estimatedDuration: "2 - 3 Weeks",
      practiceProjects: ["API Rate Limiter with Redis", "Real-Time Leaderboard Service"],
      recommendedResources: [
        { name: "Redis University Free Courses", type: "Official Docs", url: "https://university.redis.io" }
      ],
      nextSkill: "be-microservices"
    },
    {
      id: "be-microservices",
      name: "Microservices & Message Queues",
      stage: "ADVANCED",
      level: "Advanced",
      category: "Backend",
      icon: "boxes",
      whyImportant: "Enables breaking monolithic backends into decoupled, independently deployable microservices.",
      prerequisites: ["REST APIs", "NoSQL"],
      whatToLearn: "Message Brokers (RabbitMQ / Apache Kafka), Event-Driven Architecture, gRPC, API Gateways.",
      keyConcepts: ["Async Messaging", "Event Sourcing", "Distributed Tracing", "Saga Pattern"],
      estimatedDuration: "4 - 5 Weeks",
      practiceProjects: ["Order Processing System with Kafka / RabbitMQ Queue"],
      recommendedResources: [
        { name: "Microservices.io Architecture Patterns", type: "Documentation", url: "https://microservices.io" }
      ],
      nextSkill: "be-docker"
    },
    {
      id: "be-docker",
      name: "Docker & Containerization",
      stage: "DEPLOYMENT",
      level: "Intermediate",
      category: "Cloud/DevOps",
      icon: "box",
      whyImportant: "Containerization package backend code, dependencies, and OS configs so it runs identically in dev and production.",
      prerequisites: ["Linux Basics", "Backend APIs"],
      whatToLearn: "Dockerfile, Docker Images, Docker Compose multi-container setups (Node + Postgres + Redis), Volumes, Networking.",
      keyConcepts: ["Container Isolation", "Multi-stage Builds", "Image Optimization"],
      estimatedDuration: "2 Weeks",
      practiceProjects: ["Containerize a Full Stack Backend + Postgres + Redis Stack with Docker Compose"],
      recommendedResources: [
        { name: "Docker Official Getting Started Guide", type: "Official Docs", url: "https://docs.docker.com/get-started/" }
      ],
      nextSkill: "be-ready"
    },
    {
      id: "be-ready",
      name: "🚀 Job Ready Backend Engineer",
      stage: "JOB_READY",
      level: "Advanced",
      category: "Backend",
      icon: "award",
      whyImportant: "You are equipped to engineer resilient server architectures, manage complex queries, and build scalable web APIs.",
      prerequisites: ["All Backend Stages Completed"],
      whatToLearn: "System Design Interviews, DB Sharding, Load Balancer Strategies.",
      keyConcepts: ["CAP Theorem", "Consistent Hashing", "Database Replication"],
      estimatedDuration: "Ongoing",
      practiceProjects: ["Host Production Backend with CI/CD Pipeline on AWS / Render"],
      recommendedResources: [
        { name: "System Design Primer", type: "Documentation", url: "https://github.com/donnemartin/system-design-primer" }
      ],
      nextSkill: null
    }
  ],

  "ai-ml-engineer": [
    {
      id: "ai-python",
      name: "Python for Data Science & AI",
      stage: "START",
      level: "Beginner",
      category: "AI/ML",
      icon: "code",
      whyImportant: "Python is the undisputed language of AI, ML, Data Science, and Large Language Models due to its rich library ecosystem.",
      prerequisites: ["Basic Programming"],
      whatToLearn: "Python Data Structures, List Comprehensions, Virtual Environments, Generators, OOP in Python.",
      keyConcepts: ["Vectorized Operations", "PyEnv / Conda", "Memory Efficiency"],
      estimatedDuration: "2 - 3 Weeks",
      practiceProjects: ["Data Cleaning CLI Tool", "Web Scraper for AI Datasets"],
      recommendedResources: [
        { name: "Python.org Official Tutorial", type: "Official Docs", url: "https://docs.python.org/3/tutorial/" }
      ],
      nextSkill: "ai-math"
    },
    {
      id: "ai-math",
      name: "Mathematics & Statistics for AI",
      stage: "FUNDAMENTALS",
      level: "Intermediate",
      category: "AI/ML",
      icon: "calculator",
      whyImportant: "Linear Algebra, Calculus, and Probability form the mathematical mechanics behind machine learning algorithms.",
      prerequisites: ["Python Fundamentals"],
      whatToLearn: "Matrices, Vectors, Eigenvalues, Derivatives, Gradient Descent, Probability Distributions, Hypothesis Testing, Bayes Theorem.",
      keyConcepts: ["Matrix Multiplication", "Partial Derivatives", "Probability Density Functions"],
      estimatedDuration: "4 - 5 Weeks",
      practiceProjects: ["Implement Matrix Operations & Linear Regression from scratch without libraries"],
      recommendedResources: [
        { name: "3Blue1Brown Linear Algebra", type: "YouTube Series", url: "https://www.youtube.com/@3blue1brown" },
        { name: "Khan Academy Multivariable Calculus", type: "Free Course", url: "https://www.khanacademy.org" }
      ],
      nextSkill: "ai-data-stack"
    },
    {
      id: "ai-data-stack",
      name: "NumPy, Pandas & Data Wrangling",
      stage: "CORE_SKILLS",
      level: "Intermediate",
      category: "AI/ML",
      icon: "table-properties",
      whyImportant: "Real-world AI models require cleaning, transforming, and structuring raw datasets before model training.",
      prerequisites: ["Python", "Math & Statistics"],
      whatToLearn: "NumPy arrays, Broadcasting, Pandas DataFrames, GroupBy, Merging, Missing Value Imputation, Feature Scaling.",
      keyConcepts: ["Array Broadcasting", "DataFrame Manipulation", "Feature Engineering"],
      estimatedDuration: "3 - 4 Weeks",
      practiceProjects: ["Exploratory Data Analysis (EDA) on Kaggle Housing / Medical Dataset"],
      recommendedResources: [
        { name: "Pandas User Guide", type: "Official Docs", url: "https://pandas.pydata.org/docs/user_guide/index.html" }
      ],
      nextSkill: "ai-classical-ml"
    },
    {
      id: "ai-classical-ml",
      name: "Classical Machine Learning & Scikit-learn",
      stage: "SPECIALIZATION",
      level: "Intermediate",
      category: "AI/ML",
      icon: "brain-circuit",
      whyImportant: "Supervised and Unsupervised algorithms form the bedrock of predictive AI models.",
      prerequisites: ["NumPy & Pandas", "Statistics"],
      whatToLearn: "Linear/Logistic Regression, Decision Trees, Random Forests, SVM, K-Means Clustering, PCA, Cross Validation, Overfitting/Underfitting.",
      keyConcepts: ["Bias-Variance Tradeoff", "Confusion Matrix / ROC-AUC", "Hyperparameter Tuning"],
      estimatedDuration: "5 - 6 Weeks",
      practiceProjects: ["Predictive Churn Model", "Customer Segmentation with K-Means"],
      recommendedResources: [
        { name: "Scikit-learn Documentation", type: "Official Docs", url: "https://scikit-learn.org" },
        { name: "StatQuest with Josh Starmer", type: "YouTube", url: "https://www.youtube.com/@statquest" }
      ],
      nextSkill: "ai-deep-learning"
    },
    {
      id: "ai-deep-learning",
      name: "Deep Learning (PyTorch / TensorFlow)",
      stage: "ADVANCED",
      level: "Advanced",
      category: "AI/ML",
      icon: "cpu",
      whyImportant: "Neural networks enable solving complex non-linear problems in vision, text, speech, and generative domains.",
      prerequisites: ["Classical Machine Learning"],
      whatToLearn: "Artificial Neural Networks (ANN), Convolutions (CNN), Recurrent Networks (RNN / LSTM), Backpropagation, Loss Functions, PyTorch Tensors.",
      keyConcepts: ["Backpropagation Algorithm", "Vanishing Gradient", "Activation Functions (ReLU, Softmax)", "GPU Acceleration"],
      estimatedDuration: "6 - 8 Weeks",
      practiceProjects: ["Handwritten Digit Classifier (MNIST)", "Image Classification Model with Transfer Learning"],
      recommendedResources: [
        { name: "Fast.ai Deep Learning Course", type: "Free Course", url: "https://course.fast.ai" },
        { name: "PyTorch Official Tutorials", type: "Official Docs", url: "https://pytorch.org/tutorials/" }
      ],
      nextSkill: "ai-llms-genai"
    },
    {
      id: "ai-llms-genai",
      name: "Generative AI, LLMs & LangChain",
      stage: "ADVANCED",
      level: "Advanced",
      category: "AI/ML",
      icon: "sparkles",
      whyImportant: "The cutting edge of industry demand: building applications powered by Large Language Models, RAG, vector DBs, and fine-tuning.",
      prerequisites: ["Deep Learning"],
      whatToLearn: "Transformers Architecture, Attention Mechanism, Hugging Face Hub, RAG (Retrieval-Augmented Generation), Vector Databases (Pinecone/Chroma), LangChain / LlamaIndex.",
      keyConcepts: ["Self-Attention", "Embeddings", "Vector Search", "Prompt Engineering & Guardrails"],
      estimatedDuration: "5 - 6 Weeks",
      practiceProjects: ["Build an Enterprise PDF RAG Chatbot using OpenAI API & Pinecone"],
      recommendedResources: [
        { name: "Hugging Face Course", type: "Official Docs", url: "https://huggingface.co/learn" },
        { name: "DeepLearning.AI Short Courses", type: "Free Courses", url: "https://www.deeplearning.ai" }
      ],
      nextSkill: "ai-ready"
    },
    {
      id: "ai-ready",
      name: "🚀 Job Ready AI / ML Engineer",
      stage: "JOB_READY",
      level: "Advanced",
      category: "AI/ML",
      icon: "award",
      whyImportant: "You have acquired modern AI skills to build, train, deploy, and evaluate intelligent machine learning systems.",
      prerequisites: ["All AI/ML Stages Completed"],
      whatToLearn: "MLOps (MLflow, Model Deployment, Fast API hosting), ML System Design.",
      keyConcepts: ["Model Drift", "Latency vs Accuracy Tradeoffs", "Model Quantization"],
      estimatedDuration: "Ongoing",
      practiceProjects: ["Deploy fine-tuned AI model via API to Cloud Infrastructure"],
      recommendedResources: [
        { name: "Full Stack Deep Learning", type: "Course", url: "https://fullstackdeeplearning.com" }
      ],
      nextSkill: null
    }
  ],

  "cloud-engineer": [
    {
      id: "cloud-linux",
      name: "Linux Administration & Shell Scripting",
      stage: "START",
      level: "Beginner",
      category: "Cloud/DevOps",
      icon: "terminal",
      whyImportant: "90%+ of cloud servers run on Linux. Mastering Bash, permissions, and process management is foundational for cloud engineers.",
      prerequisites: ["Basic Computer Literacy"],
      whatToLearn: "Linux File Hierarchy, Permissions (chmod/chown), Systemd, Bash Scripting, SSH, Cron Jobs, System Monitoring (top/htop).",
      keyConcepts: ["File Permissions", "Process Management", "Shell Automation", "SSH Keys"],
      estimatedDuration: "2 - 3 Weeks",
      practiceProjects: ["Automate Server Health Check & Log Backup Bash Script"],
      recommendedResources: [
        { name: "Linux Journey Interactive", type: "Interactive", url: "https://linuxjourney.com" }
      ],
      nextSkill: "cloud-networking"
    },
    {
      id: "cloud-networking",
      name: "Networking Fundamentals for Cloud",
      stage: "FUNDAMENTALS",
      level: "Beginner",
      category: "Cloud/DevOps",
      icon: "network",
      whyImportant: "Understanding how data flows between client and cloud servers, subnets, routers, and firewalls.",
      prerequisites: ["Linux Administration"],
      whatToLearn: "OSI & TCP/IP Models, IP Addressing, CIDR Notation, Subnetting, DNS, HTTP/HTTPS, SSL/TLS, Firewalls.",
      keyConcepts: ["CIDR Subnetting", "DNS Resolution", "TCP vs UDP", "TLS Handshake"],
      estimatedDuration: "2 - 3 Weeks",
      practiceProjects: ["Configure local network DNS & SSH firewall rules"],
      recommendedResources: [
        { name: "NetworkChuck YouTube Networking", type: "YouTube", url: "https://youtube.com" }
      ],
      nextSkill: "cloud-aws"
    },
    {
      id: "cloud-aws",
      name: "AWS / Azure Cloud Fundamentals",
      stage: "CORE_SKILLS",
      level: "Intermediate",
      category: "Cloud/DevOps",
      icon: "cloud",
      whyImportant: "Core cloud infrastructure management across major providers (Amazon Web Services, Microsoft Azure, Google Cloud).",
      prerequisites: ["Linux", "Networking"],
      whatToLearn: "Compute (EC2), Storage (S3), Virtual Private Cloud (VPC), IAM Roles, Security Groups, Load Balancing (ALB), Auto Scaling.",
      keyConcepts: ["Shared Responsibility Model", "VPC Subnetting", "IAM Least Privilege", "Cloud Cost Optimization"],
      estimatedDuration: "4 - 5 Weeks",
      practiceProjects: ["Deploy Highly Available Web Server in Custom AWS VPC behind Load Balancer"],
      recommendedResources: [
        { name: "AWS Certified Cloud Practitioner Study Guide", type: "Official Docs", url: "https://aws.amazon.com/training/" },
        { name: "AWS Free Tier Hands-on Labs", type: "Interactive", url: "https://aws.amazon.com/free/" }
      ],
      nextSkill: "cloud-docker"
    },
    {
      id: "cloud-docker",
      name: "Docker & Container Orchestration",
      stage: "SPECIALIZATION",
      level: "Intermediate",
      category: "Cloud/DevOps",
      icon: "box",
      whyImportant: "Containerization standardizes application deployment across multi-cloud environments.",
      prerequisites: ["AWS Fundamentals"],
      whatToLearn: "Docker Architecture, Container Lifecycle, Docker Compose, Microservice Packaging.",
      keyConcepts: ["Container Engine", "Image Layers", "Volume Mounts"],
      estimatedDuration: "2 - 3 Weeks",
      practiceProjects: ["Containerize & Host Multi-Tier Application on AWS EC2"],
      recommendedResources: [
        { name: "Play with Docker Labs", type: "Interactive", url: "https://labs.play-with-docker.com" }
      ],
      nextSkill: "cloud-k8s"
    },
    {
      id: "cloud-k8s",
      name: "Kubernetes (K8s)",
      stage: "ADVANCED",
      level: "Advanced",
      category: "Cloud/DevOps",
      icon: "boxes",
      whyImportant: "The de-facto cloud orchestration system for scaling, self-healing, and managing containerized microservices.",
      prerequisites: ["Docker Containerization"],
      whatToLearn: "Pods, Deployments, Services, Ingress, ConfigMaps, Secrets, Helm Charts, EKS / AKS managed clusters.",
      keyConcepts: ["Cluster Control Plane", "Declarative YAML Manifests", "Autoscaling (HPA)"],
      estimatedDuration: "4 - 5 Weeks",
      practiceProjects: ["Deploy Microservices App to Minikube / AWS EKS with Ingress Controller"],
      recommendedResources: [
        { name: "Kubernetes Official Documentation", type: "Official Docs", url: "https://kubernetes.io/docs/" }
      ],
      nextSkill: "cloud-iac"
    },
    {
      id: "cloud-iac",
      name: "Infrastructure as Code (Terraform) & CI/CD",
      stage: "ADVANCED",
      level: "Advanced",
      category: "Cloud/DevOps",
      icon: "git-fork",
      whyImportant: "Automates cloud infrastructure provisioning programmatically without manual console clicks.",
      prerequisites: ["Kubernetes", "AWS"],
      whatToLearn: "Terraform HCL Syntax, State Files, Modules, GitHub Actions / GitLab CI pipelines, Automated Testing.",
      keyConcepts: ["Declarative Infrastructure", "State Management", "CI/CD Deployment Pipelines"],
      estimatedDuration: "4 - 5 Weeks",
      practiceProjects: ["Provision complete AWS VPC + EKS Cluster automatically using Terraform & GitHub Actions"],
      recommendedResources: [
        { name: "HashiCorp Terraform Learn", type: "Official Docs", url: "https://developer.hashicorp.com/terraform/tutorials" }
      ],
      nextSkill: "cloud-ready"
    },
    {
      id: "cloud-ready",
      name: "🚀 Job Ready Cloud Engineer",
      stage: "JOB_READY",
      level: "Advanced",
      category: "Cloud/DevOps",
      icon: "award",
      whyImportant: "You can design, automate, manage, and secure production cloud infrastructure at scale.",
      prerequisites: ["All Cloud Stages Completed"],
      whatToLearn: "AWS Solutions Architect Associate practice exams, Cloud Security Hardening.",
      keyConcepts: ["Disaster Recovery Strategy", "High Availability Architecture"],
      estimatedDuration: "Ongoing",
      practiceProjects: ["Earn AWS Solutions Architect or Terraform Associate Certification"],
      recommendedResources: [
        { name: "Stephane Maarek AWS Courses", type: "Course", url: "https://udemy.com" }
      ],
      nextSkill: null
    }
  ],

  "cybersecurity": [
    {
      id: "sec-net",
      name: "Computer Networking & Protocols",
      stage: "START",
      level: "Beginner",
      category: "Security",
      icon: "network",
      whyImportant: "You cannot defend or pentest what you do not understand. Networking protocols are fundamental to security.",
      prerequisites: ["Basic IT Skills"],
      whatToLearn: "TCP/IP, UDP, Subnetting, Port Numbers, Wireshark Packet Analysis, DNS, HTTP/S, ARP, ICMP.",
      keyConcepts: ["Packet Inspection", "Handshake Protocols", "Port Scanning"],
      estimatedDuration: "3 - 4 Weeks",
      practiceProjects: ["Analyze network traffic & HTTP requests using Wireshark"],
      recommendedResources: [
        { name: "TryHackMe Pre-Security Path", type: "Interactive", url: "https://tryhackme.com" }
      ],
      nextSkill: "sec-linux"
    },
    {
      id: "sec-linux",
      name: "Linux Security & Operating System Internal",
      stage: "FUNDAMENTALS",
      level: "Beginner",
      category: "Security",
      icon: "terminal",
      whyImportant: "Security tools run on Linux distributions like Kali Linux. Understanding OS permissions and logs is essential.",
      prerequisites: ["Networking Protocol Basics"],
      whatToLearn: "Linux Commands, File Permissions, User Management, Log Analysis (/var/log), Firewall (iptables/ufw), Kali Linux Tools.",
      keyConcepts: ["Least Privilege Access", "Kernel vs User Space", "Log Auditing"],
      estimatedDuration: "3 - 4 Weeks",
      practiceProjects: ["Harden a Linux Server & Configure UFW Firewall rules"],
      recommendedResources: [
        { name: "OverTheWire Bandit Wargame", type: "Interactive Security Game", url: "https://overthewire.org" }
      ],
      nextSkill: "sec-crypto"
    },
    {
      id: "sec-crypto",
      name: "Cryptography & PKI Fundamentals",
      stage: "CORE_SKILLS",
      level: "Intermediate",
      category: "Security",
      icon: "key",
      whyImportant: "Protects sensitive data at rest and in transit via encryption, hashing, and digital certificates.",
      prerequisites: ["Linux Security Basics"],
      whatToLearn: "Symmetric vs Asymmetric Encryption (AES, RSA), Hashing (SHA-256), PKI, TLS/SSL Certificates, Digital Signatures.",
      keyConcepts: ["Public/Private Keys", "Hash Collisions", "Certificate Authorities"],
      estimatedDuration: "2 - 3 Weeks",
      practiceProjects: ["Build an Encrypted File Storage Python Script using AES-256"],
      recommendedResources: [
        { name: "CryptoHack Interactive Platform", type: "Interactive", url: "https://cryptohack.org" }
      ],
      nextSkill: "sec-web-sec"
    },
    {
      id: "sec-web-sec",
      name: "Web Application Security & OWASP Top 10",
      stage: "SPECIALIZATION",
      level: "Intermediate",
      category: "Security",
      icon: "shield-alert",
      whyImportant: "Web vulnerabilities account for a vast percentage of security breaches worldwide.",
      prerequisites: ["Networking", "Cryptography"],
      whatToLearn: "SQL Injection (SQLi), Cross-Site Scripting (XSS), CSRF, Broken Auth, IDOR, Burp Suite testing.",
      keyConcepts: ["Vulnerability Assessment", "Payload Injection", "Sanitization"],
      estimatedDuration: "4 - 5 Weeks",
      practiceProjects: ["Solve OWASP Juice Shop & PortSwigger Web Security Academy Labs"],
      recommendedResources: [
        { name: "PortSwigger Web Security Academy", type: "Free Interactive Labs", url: "https://portswigger.net/web-security" }
      ],
      nextSkill: "sec-siem"
    },
    {
      id: "sec-siem",
      name: "SOC, SIEM & Defensive Security",
      stage: "ADVANCED",
      level: "Advanced",
      category: "Security",
      icon: "eye",
      whyImportant: "Blue Team defense: monitoring security events, detecting threats, and investigating security incidents in real time.",
      prerequisites: ["Web Security", "Linux Logs"],
      whatToLearn: "SIEM tools (Splunk / Elastic Security), Incident Response Lifecycle, Malware Analysis basics, Threat Intelligence.",
      keyConcepts: ["SIEM Query Language", "Incident Triage", "MITRE ATT&CK Framework"],
      estimatedDuration: "4 - 5 Weeks",
      practiceProjects: ["Set up Elastic SIEM on a test server and analyze mock attack logs"],
      recommendedResources: [
        { name: "Blue Team Labs Online", type: "Interactive Platform", url: "https://blueteamlabs.online" }
      ],
      nextSkill: "sec-ready"
    },
    {
      id: "sec-ready",
      name: "🚀 Job Ready Cybersecurity Analyst",
      stage: "JOB_READY",
      level: "Advanced",
      category: "Security",
      icon: "award",
      whyImportant: "You possess hands-on security skills for Blue Team SOC analysis, penetration testing, and security compliance.",
      prerequisites: ["All Security Stages Completed"],
      whatToLearn: "CompTIA Security+ / EJPT certification preparation.",
      keyConcepts: ["Security Compliance (ISO 27001)", "Penetration Testing Methodology"],
      estimatedDuration: "Ongoing",
      practiceProjects: ["Complete TryHackMe SOC Level 1 / JR Penetration Tester Path"],
      recommendedResources: [
        { name: "CompTIA Security+ Official Study Guide", type: "Documentation", url: "https://www.comptia.org" }
      ],
      nextSkill: null
    }
  ],

  "data-analyst-scientist": [
    {
      id: "da-excel",
      name: "Advanced Excel & Data Foundations",
      stage: "START",
      level: "Beginner",
      category: "Data",
      icon: "file-spreadsheet",
      whyImportant: "Excel remains the most widely used business tool for quick analysis, pivot tables, and data reporting.",
      prerequisites: ["Basic Computer Skills"],
      whatToLearn: "VLOOKUP / XLOOKUP, Pivot Tables, Data Validation, Conditional Formatting, Charts, Power Query basics.",
      keyConcepts: ["Cell Referencing", "Pivot Summaries", "Data Cleaning"],
      estimatedDuration: "1 - 2 Weeks",
      practiceProjects: ["Financial Budget & Sales Performance Dashboard in Excel"],
      recommendedResources: [
        { name: "ExcelIsFun YouTube Channel", type: "YouTube", url: "https://youtube.com" }
      ],
      nextSkill: "da-sql"
    },
    {
      id: "da-sql",
      name: "SQL for Data Analytics",
      stage: "FUNDAMENTALS",
      level: "Beginner",
      category: "Data",
      icon: "database",
      whyImportant: "The single most requested skill in data job descriptions. Allows querying millions of rows efficiently.",
      prerequisites: ["Excel Basics"],
      whatToLearn: "SELECT, WHERE, GROUP BY, HAVING, INNER/LEFT/RIGHT JOINs, Subqueries, Window Functions (ROW_NUMBER, RANK, LAG/LEAD).",
      keyConcepts: ["Aggregation", "Windowing", "Query Performance"],
      estimatedDuration: "3 - 4 Weeks",
      practiceProjects: ["E-Commerce Customer Retention & Revenue SQL Analysis"],
      recommendedResources: [
        { name: "Mode Analytics SQL Tutorial", type: "Interactive Docs", url: "https://mode.com/sql-tutorial/" }
      ],
      nextSkill: "da-python"
    },
    {
      id: "da-python",
      name: "Python for Data Analysis (Pandas & Seaborn)",
      stage: "CORE_SKILLS",
      level: "Intermediate",
      category: "Data",
      icon: "line-chart",
      whyImportant: "Automates data manipulation, statistical analysis, and customized chart generation.",
      prerequisites: ["SQL"],
      whatToLearn: "Pandas DataFrames, Data Cleaning, Merging, Matplotlib, Seaborn, Exploratory Data Analysis (EDA).",
      keyConcepts: ["DataFrame Wrangling", "Data Imputation", "Statistical Plots"],
      estimatedDuration: "4 - 5 Weeks",
      practiceProjects: ["Exploratory Data Analysis Report on Global Climate / Economic Dataset"],
      recommendedResources: [
        { name: "Kaggle Micro-Courses", type: "Interactive Platform", url: "https://www.kaggle.com/learn" }
      ],
      nextSkill: "da-powerbi"
    },
    {
      id: "da-powerbi",
      name: "Business Intelligence Tools (Power BI / Tableau)",
      stage: "SPECIALIZATION",
      level: "Intermediate",
      category: "Data",
      icon: "pie-chart",
      whyImportant: "Transforms raw analytical insights into interactive executive dashboards for decision-makers.",
      prerequisites: ["SQL", "Excel"],
      whatToLearn: "Data Modeling, DAX (Power BI) or Calculated Fields (Tableau), Interactive Visualizations, Drill-downs, Dashboard Publishing.",
      keyConcepts: ["Star Schema Data Modeling", "DAX Measures", "Dashboard UX"],
      estimatedDuration: "3 - 4 Weeks",
      practiceProjects: ["Executive Sales Performance Dashboard in Power BI"],
      recommendedResources: [
        { name: "Microsoft Power BI Guided Learning", type: "Official Docs", url: "https://learn.microsoft.com/power-bi/" }
      ],
      nextSkill: "da-stats-ml"
    },
    {
      id: "da-stats-ml",
      name: "Applied Statistics & Machine Learning",
      stage: "ADVANCED",
      level: "Advanced",
      category: "Data",
      icon: "calculator",
      whyImportant: "Enables moving from descriptive analytics to predictive analytics and hypothesis testing.",
      prerequisites: ["Python Data Stack"],
      whatToLearn: "Hypothesis Testing (A/B Testing, t-tests, Chi-Square), Linear & Logistic Regression, Decision Trees.",
      keyConcepts: ["P-value Significance", "Predictive Modeling", "A/B Test Design"],
      estimatedDuration: "4 - 5 Weeks",
      practiceProjects: ["Build an A/B Testing Evaluation Framework & Customer Lifetime Value Model"],
      recommendedResources: [
        { name: "StatQuest Statistics Playlist", type: "YouTube", url: "https://youtube.com" }
      ],
      nextSkill: "da-ready"
    },
    {
      id: "da-ready",
      name: "🚀 Job Ready Data Analyst",
      stage: "JOB_READY",
      level: "Advanced",
      category: "Data",
      icon: "award",
      whyImportant: "You can extract, clean, analyze, visualize, and communicate data insights to drive real business decisions.",
      prerequisites: ["All Data Stages Completed"],
      whatToLearn: "Kaggle Portfolio projects, Data Storytelling, Tableau Public presentation.",
      keyConcepts: ["Executive Data Storytelling", "Metric Definition"],
      estimatedDuration: "Ongoing",
      practiceProjects: ["Publish 3 End-to-End Data Analysis Projects on GitHub & Tableau Public"],
      recommendedResources: [
        { name: "Storytelling with Data Book", type: "Book", url: "https://www.storytellingwithdata.com" }
      ],
      nextSkill: null
    }
  ]
};

export const LEARNING_RESOURCES_DIRECTORY = [
  {
    category: "Official Documentation",
    icon: "book-open",
    items: [
      { name: "MDN Web Docs", description: "Comprehensive documentation for HTML, CSS, JavaScript, and Web APIs.", url: "https://developer.mozilla.org" },
      { name: "React Official Docs", description: "Learn modern React with interactive examples and deep dives.", url: "https://react.dev" },
      { name: "Python Official Docs", description: "Standard documentation for Python 3 language and standard libraries.", url: "https://docs.python.org/3/" },
      { name: "AWS Documentation", description: "Official cloud architecture guides and hands-on tutorials.", url: "https://docs.aws.amazon.com" }
    ]
  },
  {
    category: "Free Interactive Platforms",
    icon: "laptop",
    items: [
      { name: "FreeCodeCamp", description: "100% free certifications in Web Dev, Data Analysis, Python, and DBs.", url: "https://www.freecodecamp.org" },
      { name: "NeetCode.io", description: "Structured coding interview roadmap and video explanations for DSA.", url: "https://neetcode.io" },
      { name: "Kaggle Learn", description: "Bite-sized data science, Python, SQL, and machine learning labs.", url: "https://www.kaggle.com/learn" },
      { name: "PortSwigger Web Security Academy", description: "Free hands-on web vulnerability labs.", url: "https://portswigger.net/web-security" }
    ]
  },
  {
    category: "Top YouTube Learning Channels",
    icon: "youtube",
    items: [
      { name: "Traversy Media", description: "Full stack web development, framework tutorials, and crash courses.", url: "https://www.youtube.com/@TraversyMedia" },
      { name: "Fireship", description: "High-speed 100-second code breakdowns and software engineering news.", url: "https://www.youtube.com/@Fireship" },
      { name: "StatQuest with Josh Starmer", description: "Crystal clear visual explanations of Statistics and Machine Learning.", url: "https://www.youtube.com/@statquest" },
      { name: "NetworkChuck", description: "Engaging guides on Networking, Cloud, Linux, and Hacking.", url: "https://www.youtube.com/@NetworkChuck" }
    ]
  },
  {
    category: "Practice Platforms & Coding Practice",
    icon: "code-2",
    items: [
      { name: "LeetCode", description: "Industry standard practice platform for technical interview algorithms.", url: "https://leetcode.com" },
      { name: "SQLBolt", description: "Simple, interactive exercises to learn SQL queries step-by-step.", url: "https://sqlbolt.com" },
      { name: "TryHackMe", description: "Cybersecurity and penetration testing hands-on virtual labs.", url: "https://tryhackme.com" },
      { name: "FrontEnd Mentor", description: "Real-world Figma UI designs to build with HTML, CSS, React.", url: "https://www.frontendmentor.io" }
    ]
  }
];

export const JOB_READINESS_CHECKLIST = [
  { id: "cs_fund", label: "Programming Fundamentals & Logic", category: "Technical" },
  { id: "dsa_prob", label: "Data Structures & Algorithms (50+ Problems solved)", category: "Technical" },
  { id: "core_cs", label: "Core CS Concepts (OOP, OS, DBMS, Networking)", category: "Technical" },
  { id: "git_gh", label: "Git & GitHub Version Control (Hosted projects)", category: "Technical" },
  { id: "dev_stack", label: "Specialized Stack Mastery (Frontend/Backend/Cloud/AI)", category: "Technical" },
  { id: "projects_2", label: "2 - 3 Production-Quality Capstone Projects", category: "Portfolio" },
  { id: "resume_ats", label: "ATS-Optimized Tech Resume", category: "Career" },
  { id: "linkedin_opt", label: "Professional LinkedIn Profile (500+ connections)", category: "Career" },
  { id: "gh_portfolio", label: "Clean GitHub Profile & Live Portfolio Website", category: "Portfolio" },
  { id: "soft_skills", label: "Communication & STAR Method Behavioral Prep", category: "Career" },
  { id: "aptitude", label: "General Aptitude & Logical Reasoning Practice", category: "Career" },
  { id: "tech_interview", label: "Mock Technical Interview Practice", category: "Interview" },
  { id: "hr_interview", label: "HR & Company Research Preparedness", category: "Interview" }
];
