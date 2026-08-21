// Comprehensive Technology & Career Roadmap Dataset for Fresher Engineers

const CAREER_PATHS = [
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

const ROADMAP_STAGES = [
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

const ROADMAPS = {
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

const LEARNING_RESOURCES_DIRECTORY = [
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

const JOB_READINESS_CHECKLIST = [
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

// Application State
const state = {
  activeTab: 'home', // 'home' | 'roadmaps' | 'technologies' | 'resources' | 'dashboard' | 'job-readiness'
  selectedCareerId: 'software-developer',
  completedNodes: new Set(JSON.parse(localStorage.getItem('fresher_completed_nodes') || '[]')),
  completedChecklist: new Set(JSON.parse(localStorage.getItem('fresher_completed_checklist') || '[]')),
  activeTechModal: null,
  isQuizOpen: false,
  quizStep: 0,
  quizAnswers: {},
  searchQuery: '',
  filterCareer: 'all',
  filterDifficulty: 'all',
  filterStatus: 'all',
  isDarkTheme: localStorage.getItem('fresher_theme') !== 'light'
};

// Lucide Icon Helper
function getIconSvg(name, extraClass = "w-5 h-5") {
  const icons = {
    'code-2': `<svg class="${extraClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
    'layout': `<svg class="${extraClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5ptM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6ptM16 13a1 1 0 011-1h3a1 1 0 011 1v6a1 1 0 01-1 1h-3a1 1 0 01-1-1v-6z"/></svg>`,
    'server': `<svg class="${extraClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>`,
    'brain-circuit': `<svg class="${extraClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2"/></svg>`,
    'cloud': `<svg class="${extraClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 001-9.9M7 15a4.48 4.48 0 01-.88-8.8A5 5 0 0115.9 6L16 6a5 5 0 011 9.9"/></svg>`,
    'shield-check': `<svg class="${extraClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    'bar-chart-3': `<svg class="${extraClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v18h18M18 17V9M13 17V5M8 17v-3"/></svg>`,
    'terminal': `<svg class="${extraClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17l6-6-6-6M12 19h8"/></svg>`,
    'check': `<svg class="${extraClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`,
    'award': `<svg class="${extraClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15l-2 5l2-1l2 1l-2-5m0 0a7 7 0 1 0 0-14a7 7 0 0 0 0 14z"/></svg>`,
    'search': `<svg class="${extraClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`,
    'sun': `<svg class="${extraClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`,
    'moon': `<svg class="${extraClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`,
    'external-link': `<svg class="${extraClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`,
    'x': `<svg class="${extraClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`
  };
  return icons[name] || icons['code-2'];
}

// Helpers
function saveState() {
  localStorage.setItem('fresher_completed_nodes', JSON.stringify(Array.from(state.completedNodes)));
  localStorage.setItem('fresher_completed_checklist', JSON.stringify(Array.from(state.completedChecklist)));
  localStorage.setItem('fresher_theme', state.isDarkTheme ? 'dark' : 'light');
}

function toggleNodeCompletion(nodeId) {
  if (state.completedNodes.has(nodeId)) {
    state.completedNodes.delete(nodeId);
  } else {
    state.completedNodes.add(nodeId);
  }
  saveState();
  renderApp();
}

function toggleChecklistItem(itemId) {
  if (state.completedChecklist.has(itemId)) {
    state.completedChecklist.delete(itemId);
  } else {
    state.completedChecklist.add(itemId);
  }
  saveState();
  renderApp();
}

function getTrackProgress(careerId) {
  const nodes = ROADMAPS[careerId] || [];
  if (nodes.length === 0) return 0;
  const completed = nodes.filter(n => state.completedNodes.has(n.id)).length;
  return Math.round((completed / nodes.length) * 100);
}

function getNextRecommendedSkill(careerId) {
  const nodes = ROADMAPS[careerId] || [];
  return nodes.find(n => !state.completedNodes.has(n.id)) || nodes[nodes.length - 1];
}

function calculateJobReadinessScore() {
  const total = JOB_READINESS_CHECKLIST.length;
  const completed = state.completedChecklist.size;
  return Math.round((completed / total) * 100);
}

// Global Event Binders
window.setTab = function(tabName) {
  state.activeTab = tabName;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
};

window.setCareerTrack = function(careerId) {
  state.selectedCareerId = careerId;
  state.activeTab = 'roadmaps';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
};

window.toggleNode = function(nodeId, e) {
  if (e) e.stopPropagation();
  toggleNodeCompletion(nodeId);
};

window.toggleCheck = function(itemId) {
  toggleChecklistItem(itemId);
};

window.openTechModal = function(nodeId) {
  for (const key in ROADMAPS) {
    const found = ROADMAPS[key].find(n => n.id === nodeId);
    if (found) {
      state.activeTechModal = found;
      break;
    }
  }
  renderApp();
};

window.closeTechModal = function() {
  state.activeTechModal = null;
  renderApp();
};

window.toggleTheme = function() {
  state.isDarkTheme = !state.isDarkTheme;
  saveState();
  if (!state.isDarkTheme) {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
  renderApp();
};

window.openQuiz = function() {
  state.isQuizOpen = true;
  state.quizStep = 0;
  state.quizAnswers = {};
  renderApp();
};

window.closeQuiz = function() {
  state.isQuizOpen = false;
  renderApp();
};

window.answerQuiz = function(key, value) {
  state.quizAnswers[key] = value;
  if (state.quizStep < 2) {
    state.quizStep++;
  } else {
    let rec = 'software-developer';
    if (state.quizAnswers.interest === 'visual') rec = 'frontend-developer';
    else if (state.quizAnswers.interest === 'server') rec = 'backend-developer';
    else if (state.quizAnswers.interest === 'ai') rec = 'ai-ml-engineer';
    else if (state.quizAnswers.interest === 'cloud') rec = 'cloud-engineer';
    else if (state.quizAnswers.interest === 'security') rec = 'cybersecurity';
    else if (state.quizAnswers.interest === 'data') rec = 'data-analyst-scientist';

    state.selectedCareerId = rec;
    state.isQuizOpen = false;
    state.activeTab = 'roadmaps';
  }
  renderApp();
};

// UI Component Renderers

function renderNavbar() {
  const currentPath = CAREER_PATHS.find(c => c.id === state.selectedCareerId) || CAREER_PATHS[0];

  return `
    <nav class="sticky top-0 z-40 glass-panel border-b border-slate-800/80 px-4 lg:px-8 py-3 transition-colors">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <!-- Logo -->
        <div onclick="setTab('home')" class="flex items-center gap-3 cursor-pointer group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            ${getIconSvg('code-2', 'w-6 h-6')}
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-extrabold text-lg text-slate-100 tracking-tight">Fresher<span class="text-cyan-400">Roadmap</span></span>
              <span class="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Pro</span>
            </div>
            <p class="text-xs text-slate-400 font-medium">Engineer Career Mastery</p>
          </div>
        </div>

        <!-- Desktop Navigation Tabs -->
        <div class="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-xl border border-slate-800/80">
          <button onclick="setTab('home')" class="px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${state.activeTab === 'home' ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}">Home</button>
          <button onclick="setTab('roadmaps')" class="px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${state.activeTab === 'roadmaps' ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}">Roadmaps</button>
          <button onclick="setTab('technologies')" class="px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${state.activeTab === 'technologies' ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}">Technologies</button>
          <button onclick="setTab('resources')" class="px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${state.activeTab === 'resources' ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}">Resources</button>
          <button onclick="setTab('dashboard')" class="px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${state.activeTab === 'dashboard' ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}">Dashboard</button>
          <button onclick="setTab('job-readiness')" class="px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${state.activeTab === 'job-readiness' ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20' : 'text-amber-400 hover:bg-amber-500/10'}">
            <span>🚀 Job Ready</span>
            <span class="text-xs px-1.5 py-0.2 rounded-full bg-slate-950/40 text-amber-300 font-bold">${calculateJobReadinessScore()}%</span>
          </button>
        </div>

        <!-- Action Items -->
        <div class="flex items-center gap-3">
          <!-- Quiz Trigger -->
          <button onclick="openQuiz()" class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-cyan-400 border border-slate-700 hover:border-cyan-500 transition-colors">
            ${getIconSvg('search', 'w-4 h-4')}
            <span>Find My Path</span>
          </button>

          <!-- Theme Toggle -->
          <button onclick="toggleTheme()" class="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-700 transition-colors" title="Toggle Light/Dark Theme">
            ${state.isDarkTheme ? getIconSvg('sun', 'w-5 h-5') : getIconSvg('moon', 'w-5 h-5')}
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Bar -->
      <div class="flex md:hidden items-center justify-around mt-3 pt-2 border-t border-slate-800/60 text-xs font-medium">
        <button onclick="setTab('home')" class="${state.activeTab === 'home' ? 'text-cyan-400 font-bold' : 'text-slate-400'}">Home</button>
        <button onclick="setTab('roadmaps')" class="${state.activeTab === 'roadmaps' ? 'text-cyan-400 font-bold' : 'text-slate-400'}">Roadmaps</button>
        <button onclick="setTab('technologies')" class="${state.activeTab === 'technologies' ? 'text-cyan-400 font-bold' : 'text-slate-400'}">Tech</button>
        <button onclick="setTab('dashboard')" class="${state.activeTab === 'dashboard' ? 'text-cyan-400 font-bold' : 'text-slate-400'}">Dashboard</button>
        <button onclick="setTab('job-readiness')" class="${state.activeTab === 'job-readiness' ? 'text-amber-400 font-bold' : 'text-slate-400'}">Job Ready</button>
      </div>
    </nav>
  `;
}

function renderHero() {
  return `
    <section class="relative overflow-hidden pt-12 pb-20 px-4 lg:px-8">
      <!-- Ambient Glow Orbs -->
      <div class="orb-glow-1 -top-20 -left-20"></div>
      <div class="orb-glow-2 top-40 right-0"></div>

      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Hero Text Column -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
              <span class="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Designed Specifically for Fresh Engineering Graduates
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 tracking-tight leading-[1.15]">
              Your Career.<br/>
              <span class="gradient-text-cyan">Your Roadmap.</span><br/>
              Your Future.
            </h1>

            <p class="text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              A structured technology roadmap designed to help fresher engineers learn the right skills, in the right order, and become industry-ready.
            </p>

            <!-- Hero Action Buttons -->
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button onclick="setTab('roadmaps')" class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all flex items-center gap-2">
                <span>Explore Roadmaps</span>
                ${getIconSvg('code-2', 'w-5 h-5')}
              </button>

              <button onclick="openQuiz()" class="px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-cyan-400 font-bold text-base border border-slate-700 hover:border-cyan-500 transition-all flex items-center gap-2">
                <span>Find My Career Path</span>
                ${getIconSvg('search', 'w-5 h-5')}
              </button>

              <button onclick="setTab('dashboard')" class="px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 font-semibold text-base border border-slate-800 transition-all">
                Start Learning
              </button>
            </div>

            <!-- Quick Metrics -->
            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0">
              <div>
                <span class="block text-2xl font-extrabold text-white">7+</span>
                <span class="text-xs text-slate-400">Career Tracks</span>
              </div>
              <div>
                <span class="block text-2xl font-extrabold text-cyan-400">60+</span>
                <span class="text-xs text-slate-400">Structured Tech Nodes</span>
              </div>
              <div>
                <span class="block text-2xl font-extrabold text-amber-400">100%</span>
                <span class="text-xs text-slate-400">Fresher Focused</span>
              </div>
            </div>
          </div>

          <!-- Hero Learning Journey Visualization Graphic -->
          <div class="lg:col-span-5 relative">
            <div class="glass-panel p-6 rounded-2xl border border-slate-800 shadow-2xl space-y-4">
              <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span class="text-xs text-slate-400 font-mono">Learning Progression Node Map</span>
              </div>

              <!-- Interactive Node Graphic Sequence -->
              <div class="space-y-3 font-mono text-sm">
                <div class="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <span class="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-xs">✓</span>
                    <div>
                      <span class="text-emerald-400 font-bold block">1. FUNDAMENTALS</span>
                      <span class="text-xs text-slate-400">HTML5 → CSS3 → JavaScript</span>
                    </div>
                  </div>
                  <span class="text-xs text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/20">Completed</span>
                </div>

                <div class="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-between pulse-active">
                  <div class="flex items-center gap-3">
                    <span class="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 font-bold flex items-center justify-center text-xs">2</span>
                    <div>
                      <span class="text-cyan-300 font-bold block">2. CORE FRAMEWORK</span>
                      <span class="text-xs text-slate-400">React.js & State Management</span>
                    </div>
                  </div>
                  <span class="text-xs text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-500/20">In Progress</span>
                </div>

                <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between opacity-75">
                  <div class="flex items-center gap-3">
                    <span class="w-6 h-6 rounded-full bg-slate-700 text-slate-400 font-bold flex items-center justify-center text-xs">3</span>
                    <div>
                      <span class="text-slate-300 font-bold block">3. ADVANCED ARCHITECTURE</span>
                      <span class="text-xs text-slate-400">TypeScript & Next.js SSR</span>
                    </div>
                  </div>
                  <span class="text-xs text-slate-500 font-semibold px-2 py-0.5 rounded bg-slate-800">Next Up</span>
                </div>

                <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <span class="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-xs">🚀</span>
                    <div>
                      <span class="text-amber-400 font-bold block">4. JOB READY MILESTONE</span>
                      <span class="text-xs text-slate-400">Projects + ATS Resume + Interviews</span>
                    </div>
                  </div>
                  <span class="text-xs text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-500/20">Target</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Career Tracks Showcase Grid -->
    <section class="py-12 px-4 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <h2 class="text-3xl font-extrabold text-white">Select Your Engineering Path</h2>
        <p class="text-slate-400 mt-2">Tailored learning progressions created to bridge the gap between engineering college syllabus and actual job requirements.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${CAREER_PATHS.map(path => {
          const progress = getTrackProgress(path.id);
          return `
            <div onclick="setCareerTrack('${path.id}')" class="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div class="w-12 h-12 rounded-xl bg-slate-800 text-cyan-400 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    ${getIconSvg(path.icon, 'w-6 h-6')}
                  </div>
                  <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">${path.badge}</span>
                </div>

                <div>
                  <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">${path.title}</h3>
                  <p class="text-sm text-slate-400 mt-2 leading-relaxed">${path.description}</p>
                </div>
              </div>

              <!-- Track Progress Bar -->
              <div class="mt-6 pt-4 border-t border-slate-800/80">
                <div class="flex items-center justify-between text-xs font-semibold mb-1.5">
                  <span class="text-slate-400">Track Progress</span>
                  <span class="text-cyan-400">${progress}%</span>
                </div>
                <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div class="h-full bg-gradient-to-r ${path.gradient} transition-all duration-500" style="width: ${progress}%"></div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

function renderRoadmapView() {
  const currentPath = CAREER_PATHS.find(c => c.id === state.selectedCareerId) || CAREER_PATHS[0];
  const nodes = ROADMAPS[state.selectedCareerId] || [];
  const progress = getTrackProgress(state.selectedCareerId);
  const completedCount = nodes.filter(n => state.completedNodes.has(n.id)).length;

  return `
    <section class="py-8 px-4 lg:px-8 max-w-7xl mx-auto">
      
      <!-- Track Switcher Pills -->
      <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        ${CAREER_PATHS.map(path => `
          <button onclick="setCareerTrack('${path.id}')" class="whitespace-nowrap px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 ${state.selectedCareerId === path.id ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'}">
            ${getIconSvg(path.icon, 'w-4 h-4')}
            <span>${path.title}</span>
          </button>
        `).join('')}
      </div>

      <!-- Selected Roadmap Header Card -->
      <div class="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div class="space-y-2 max-w-2xl">
          <div class="flex items-center gap-3">
            <span class="text-xs font-extrabold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-widest">${currentPath.badge}</span>
            <span class="text-xs text-slate-400 font-medium">${nodes.length} Key Technology Nodes</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-black text-white">${currentPath.title} Roadmap</h1>
          <p class="text-slate-300 text-sm leading-relaxed">${currentPath.description}</p>
        </div>

        <!-- Overall Progress Box -->
        <div class="bg-slate-900/80 p-5 rounded-xl border border-slate-800 min-w-[240px] text-center space-y-2">
          <div class="flex items-center justify-between text-xs font-bold text-slate-400">
            <span>Skill Completion</span>
            <span class="text-cyan-400 font-mono">${completedCount} / ${nodes.length}</span>
          </div>
          <div class="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
            <div class="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500" style="width: ${progress}%"></div>
          </div>
          <p class="text-xs text-slate-400 font-medium pt-1">${progress === 100 ? '🎉 Track 100% Mastered!' : `${100 - progress}% remaining to become job-ready`}</p>
        </div>
      </div>

      <!-- Roadmap Flow Legend -->
      <div class="flex flex-wrap items-center justify-between gap-4 bg-slate-900/40 p-4 rounded-xl border border-slate-800/80 mb-8 text-xs font-semibold text-slate-400">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
          <span>Completed Skill</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>Recommended Next Target</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-slate-600"></span>
          <span>Pending Milestone</span>
        </div>
        <div class="text-slate-400">
          💡 Click any technology node for detailed syllabus & resources.
        </div>
      </div>

      <!-- Interactive Connected Node List Visualizer -->
      <div class="relative space-y-6">
        ${nodes.map((node, index) => {
          const isCompleted = state.completedNodes.has(node.id);
          const nextTargetNode = getNextRecommendedSkill(state.selectedCareerId);
          const isNextTarget = nextTargetNode && nextTargetNode.id === node.id;
          const stageInfo = ROADMAP_STAGES.find(s => s.id === node.stage) || { title: node.stage };

          return `
            <div class="relative pl-12 sm:pl-16">
              
              <!-- Vertical Timeline Connecting Line -->
              ${index < nodes.length - 1 ? `<div class="node-line-vertical"></div>` : ''}

              <!-- Timeline Node Marker Icon -->
              <div onclick="toggleNode('${node.id}', event)" class="absolute left-0 top-3 w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center cursor-pointer transition-all z-10 ${isCompleted ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/30' : isNextTarget ? 'bg-cyan-500 text-slate-950 font-bold pulse-active' : 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-cyan-400'}" title="${isCompleted ? 'Mark as Incomplete' : 'Mark as Completed'}">
                ${isCompleted ? getIconSvg('check', 'w-5 h-5') : `<span class="font-mono text-sm">${index + 1}</span>`}
              </div>

              <!-- Technology Node Card -->
              <div onclick="openTechModal('${node.id}')" class="glass-panel p-5 sm:p-6 rounded-2xl border ${isCompleted ? 'border-emerald-500/40 bg-emerald-950/10' : isNextTarget ? 'border-cyan-500/50 bg-cyan-950/10 shadow-lg shadow-cyan-500/10' : 'border-slate-800'} hover:border-cyan-400/80 transition-all cursor-pointer group">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  <div class="space-y-2 max-w-3xl">
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">${stageInfo.title}</span>
                      <span class="text-[10px] font-semibold px-2 py-0.5 rounded ${node.level === 'Beginner' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : node.level === 'Intermediate' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}">${node.level}</span>
                      <span class="text-xs text-slate-400 font-mono flex items-center gap-1">⏱️ ${node.estimatedDuration}</span>
                    </div>

                    <h3 class="text-xl font-extrabold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-3">
                      <span>${node.name}</span>
                      ${isCompleted ? `<span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">✓ Mastered</span>` : ''}
                      ${isNextTarget && !isCompleted ? `<span class="text-xs font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">🎯 Focus Skill</span>` : ''}
                    </h3>

                    <p class="text-sm text-slate-300 leading-relaxed">${node.whyImportant}</p>

                    <!-- Key Concepts Tags -->
                    <div class="flex flex-wrap gap-1.5 pt-2">
                      ${node.keyConcepts.map(concept => `
                        <span class="text-xs font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-800">${concept}</span>
                      `).join('')}
                    </div>
                  </div>

                  <!-- Actions Column -->
                  <div class="flex sm:flex-col items-center justify-between sm:justify-center gap-3 border-t sm:border-t-0 sm:border-l border-slate-800/80 pt-3 sm:pt-0 sm:pl-6">
                    <button onclick="toggleNode('${node.id}', event)" class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${isCompleted ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30' : 'bg-slate-800 text-slate-200 hover:bg-cyan-500 hover:text-white border border-slate-700'}">
                      ${isCompleted ? '✓ Completed' : 'Mark Complete'}
                    </button>
                    <span class="text-xs font-semibold text-cyan-400 hover:underline">Syllabus Details →</span>
                  </div>

                </div>
              </div>

            </div>
          `;
        }).join('')}
      </div>

    </section>
  `;
}

function renderTechnologyExplorer() {
  let allTech = [];
  for (const careerId in ROADMAPS) {
    allTech = allTech.concat(ROADMAPS[careerId]);
  }

  // Filter tech
  let filtered = allTech.filter(tech => {
    const matchesSearch = state.searchQuery === '' || tech.name.toLowerCase().includes(state.searchQuery.toLowerCase()) || tech.whatToLearn.toLowerCase().includes(state.searchQuery.toLowerCase());
    const matchesDifficulty = state.filterDifficulty === 'all' || tech.level.toLowerCase() === state.filterDifficulty.toLowerCase();
    const isCompleted = state.completedNodes.has(tech.id);
    const matchesStatus = state.filterStatus === 'all' || (state.filterStatus === 'completed' && isCompleted) || (state.filterStatus === 'pending' && !isCompleted);
    return matchesSearch && matchesDifficulty && matchesStatus;
  });

  return `
    <section class="py-8 px-4 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-2">
        <h1 class="text-3xl font-extrabold text-white">Technology Knowledge Base</h1>
        <p class="text-slate-400 text-sm">Explore all core engineering technologies, prerequisites, learning outcomes, and practical projects.</p>
      </div>

      <!-- Search & Filter Control Bar -->
      <div class="glass-panel p-4 rounded-2xl border border-slate-800 flex flex-col md:flex-row gap-4 items-center justify-between">
        
        <!-- Search Input -->
        <div class="relative w-full md:w-96">
          <input type="text" value="${state.searchQuery}" oninput="state.searchQuery = this.value; renderApp();" placeholder="Search React, Python, Docker, SQL..." class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 text-white placeholder-slate-400 text-sm border border-slate-700 focus:border-cyan-500 focus:outline-none" />
          <div class="absolute left-3 top-3 text-slate-400">
            ${getIconSvg('search', 'w-4 h-4')}
          </div>
        </div>

        <!-- Filter Dropdowns -->
        <div class="flex flex-wrap items-center gap-3 w-full md:w-auto">
          
          <select onchange="state.filterDifficulty = this.value; renderApp();" class="px-3.5 py-2.5 rounded-xl bg-slate-900 text-slate-200 text-xs font-semibold border border-slate-700 focus:outline-none">
            <option value="all" ${state.filterDifficulty === 'all' ? 'selected' : ''}>All Difficulty Levels</option>
            <option value="beginner" ${state.filterDifficulty === 'beginner' ? 'selected' : ''}>Beginner</option>
            <option value="intermediate" ${state.filterDifficulty === 'intermediate' ? 'selected' : ''}>Intermediate</option>
            <option value="advanced" ${state.filterDifficulty === 'advanced' ? 'selected' : ''}>Advanced</option>
          </select>

          <select onchange="state.filterStatus = this.value; renderApp();" class="px-3.5 py-2.5 rounded-xl bg-slate-900 text-slate-200 text-xs font-semibold border border-slate-700 focus:outline-none">
            <option value="all" ${state.filterStatus === 'all' ? 'selected' : ''}>All Statuses</option>
            <option value="completed" ${state.filterStatus === 'completed' ? 'selected' : ''}>Completed Skills</option>
            <option value="pending" ${state.filterStatus === 'pending' ? 'selected' : ''}>Pending Skills</option>
          </select>

        </div>

      </div>

      <!-- Results Count -->
      <div class="text-xs text-slate-400 font-semibold">
        Showing ${filtered.length} matching technologies
      </div>

      <!-- Tech Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filtered.map(tech => {
          const isCompleted = state.completedNodes.has(tech.id);

          return `
            <div class="glass-panel p-6 rounded-2xl border ${isCompleted ? 'border-emerald-500/40 bg-emerald-950/10' : 'border-slate-800'} hover:border-cyan-500/60 transition-all flex flex-col justify-between group">
              <div class="space-y-4">
                
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-bold px-2.5 py-0.5 rounded ${tech.level === 'Beginner' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : tech.level === 'Intermediate' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}">${tech.level}</span>
                  <button onclick="toggleNode('${tech.id}', event)" class="p-1.5 rounded-lg border transition-colors ${isCompleted ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'}">
                    ${getIconSvg('check', 'w-4 h-4')}
                  </button>
                </div>

                <div>
                  <h3 onclick="openTechModal('${tech.id}')" class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors cursor-pointer">${tech.name}</h3>
                  <p class="text-xs text-slate-300 mt-2 line-clamp-2">${tech.whyImportant}</p>
                </div>

                <!-- Prerequisites -->
                <div class="text-xs space-y-1">
                  <span class="text-slate-400 font-semibold block">Prerequisites:</span>
                  <div class="flex flex-wrap gap-1">
                    ${tech.prerequisites.map(p => `<span class="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[11px] font-mono border border-slate-800">${p}</span>`).join('')}
                  </div>
                </div>

              </div>

              <div class="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between text-xs">
                <span class="text-slate-400 font-mono">⏱️ ${tech.estimatedDuration}</span>
                <button onclick="openTechModal('${tech.id}')" class="text-cyan-400 font-bold hover:underline">Explore Syllabus →</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

    </section>
  `;
}

function renderDashboard() {
  const currentPath = CAREER_PATHS.find(c => c.id === state.selectedCareerId) || CAREER_PATHS[0];
  const nodes = ROADMAPS[state.selectedCareerId] || [];
  const trackProgress = getTrackProgress(state.selectedCareerId);
  const completedCount = nodes.filter(n => state.completedNodes.has(n.id)).length;
  const remainingCount = nodes.length - completedCount;
  const nextSkill = getNextRecommendedSkill(state.selectedCareerId);
  const jobScore = calculateJobReadinessScore();

  return `
    <section class="py-8 px-4 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      <!-- Dashboard Title Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <h1 class="text-3xl font-extrabold text-white">Learner Dashboard</h1>
          <p class="text-slate-400 text-sm mt-1">Track your engineering skill acquisition, project milestones, and job readiness score.</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-xs text-slate-400">Current Track:</span>
          <select onchange="setCareerTrack(this.value)" class="px-3.5 py-2 rounded-xl bg-slate-900 text-cyan-400 text-xs font-bold border border-slate-700 focus:outline-none">
            ${CAREER_PATHS.map(p => `<option value="${p.id}" ${p.id === state.selectedCareerId ? 'selected' : ''}>${p.title}</option>`).join('')}
          </select>
        </div>
      </div>

      <!-- Top Metric Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Track Completion Card -->
        <div class="glass-panel p-6 rounded-2xl border border-slate-800 space-y-2">
          <span class="text-xs text-slate-400 font-semibold block uppercase tracking-wider">Roadmap Progress</span>
          <div class="flex items-baseline justify-between">
            <span class="text-3xl font-extrabold text-white">${trackProgress}%</span>
            <span class="text-xs font-bold text-cyan-400">${completedCount}/${nodes.length} Completed</span>
          </div>
          <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500" style="width: ${trackProgress}%"></div>
          </div>
        </div>

        <!-- Remaining Skills Card -->
        <div class="glass-panel p-6 rounded-2xl border border-slate-800 space-y-2">
          <span class="text-xs text-slate-400 font-semibold block uppercase tracking-wider">Technologies Remaining</span>
          <div class="flex items-baseline justify-between">
            <span class="text-3xl font-extrabold text-amber-400">${remainingCount}</span>
            <span class="text-xs font-medium text-slate-400">Skills to master</span>
          </div>
          <p class="text-xs text-slate-400 font-mono">Current stage: ${nextSkill ? nextSkill.stage : 'Mastered'}</p>
        </div>

        <!-- Total Completed Skills Count -->
        <div class="glass-panel p-6 rounded-2xl border border-slate-800 space-y-2">
          <span class="text-xs text-slate-400 font-semibold block uppercase tracking-wider">Total Skills Mastered</span>
          <div class="flex items-baseline justify-between">
            <span class="text-3xl font-extrabold text-emerald-400">${state.completedNodes.size}</span>
            <span class="text-xs text-slate-400">Across all tracks</span>
          </div>
          <p class="text-xs text-slate-400 font-mono">Streak: Active learner</p>
        </div>

        <!-- Job Readiness Percentage -->
        <div class="glass-panel p-6 rounded-2xl border border-amber-500/30 bg-amber-950/10 space-y-2">
          <span class="text-xs text-amber-400 font-semibold block uppercase tracking-wider">Job Readiness Score</span>
          <div class="flex items-baseline justify-between">
            <span class="text-3xl font-extrabold text-amber-300">${jobScore}%</span>
            <span class="text-xs font-bold text-amber-400">${state.completedChecklist.size}/${JOB_READINESS_CHECKLIST.length} Items</span>
          </div>
          <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <div class="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500" style="width: ${jobScore}%"></div>
          </div>
        </div>

      </div>

      <!-- Action Card: Recommended Next Target Skill -->
      ${nextSkill ? `
        <div class="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-950/30 to-slate-900 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-3 max-w-2xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold">
              🎯 Recommended Next Skill for Freshers
            </div>
            <h2 class="text-2xl font-black text-white">${nextSkill.name}</h2>
            <p class="text-sm text-slate-300 leading-relaxed">${nextSkill.whyImportant}</p>
            <div class="flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span>Duration: ${nextSkill.estimatedDuration}</span>
              <span>•</span>
              <span>Level: ${nextSkill.level}</span>
            </div>
          </div>

          <button onclick="openTechModal('${nextSkill.id}')" class="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
            <span>Open Syllabus & Resources</span>
            ${getIconSvg('external-link', 'w-4 h-4')}
          </button>
        </div>
      ` : ''}

      <!-- Detailed Breakdown of Current Roadmap -->
      <div class="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6">
        <h3 class="text-xl font-bold text-white">${currentPath.title} Progress Overview</h3>

        <div class="space-y-3">
          ${nodes.map(node => {
            const isDone = state.completedNodes.has(node.id);
            return `
              <div onclick="openTechModal('${node.id}')" class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 flex items-center justify-between gap-4 cursor-pointer transition-colors">
                <div class="flex items-center gap-3">
                  <div onclick="toggleNode('${node.id}', event)" class="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${isDone ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-500 border border-slate-700'}">
                    ${isDone ? '✓' : ''}
                  </div>
                  <div>
                    <span class="text-sm font-bold text-white block">${node.name}</span>
                    <span class="text-xs text-slate-400">${node.level} • ${node.estimatedDuration}</span>
                  </div>
                </div>

                <span class="text-xs font-semibold px-2.5 py-1 rounded ${isDone ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-400'}">
                  ${isDone ? 'Completed' : 'Pending'}
                </span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

    </section>
  `;
}

function renderResourcesHub() {
  return `
    <section class="py-8 px-4 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      <div class="text-center max-w-3xl mx-auto space-y-2">
        <h1 class="text-3xl font-extrabold text-white">Recommended Fresher Learning Resources</h1>
        <p class="text-slate-400 text-sm">Free platforms, official documentation, YouTube channels, and practice sites curated for fresher engineers.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${LEARNING_RESOURCES_DIRECTORY.map(cat => `
          <div class="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
            <div class="flex items-center gap-3 border-b border-slate-800 pb-3">
              <div class="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                ${getIconSvg(cat.icon, 'w-5 h-5')}
              </div>
              <h2 class="text-xl font-bold text-white">${cat.category}</h2>
            </div>

            <div class="space-y-3">
              ${cat.items.map(item => `
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 block transition-all group">
                  <div class="flex items-center justify-between">
                    <h3 class="text-base font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                      <span>${item.name}</span>
                      ${getIconSvg('external-link', 'w-4 h-4 opacity-50 group-hover:opacity-100')}
                    </h3>
                  </div>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed">${item.description}</p>
                </a>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

    </section>
  `;
}

function renderJobReadiness() {
  const score = calculateJobReadinessScore();
  const completedCount = state.completedChecklist.size;
  const totalCount = JOB_READINESS_CHECKLIST.length;

  let statusBadge = { label: "Getting Started", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" };
  if (score >= 80) statusBadge = { label: "🚀 Fully Interview Ready!", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30" };
  else if (score >= 50) statusBadge = { label: "⚡ Strong Intermediate Progress", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/30" };

  return `
    <section class="py-8 px-4 lg:px-8 max-w-5xl mx-auto space-y-8">
      
      <!-- Header Banner -->
      <div class="glass-panel p-8 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/20 to-slate-900 space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-2">
            <span class="text-xs font-bold px-3 py-1 rounded-full ${statusBadge.bg} ${statusBadge.color} border uppercase tracking-wider">${statusBadge.label}</span>
            <h1 class="text-3xl font-black text-white">Job Readiness Checklist</h1>
            <p class="text-slate-300 text-sm max-w-xl">Complete these essential milestones to guarantee you are fully prepared for technical screening, campus drives, and recruiter interviews.</p>
          </div>

          <div class="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 text-center min-w-[180px]">
            <span class="text-4xl font-black text-amber-400 block">${score}%</span>
            <span class="text-xs text-slate-400 font-semibold">${completedCount} of ${totalCount} Done</span>
          </div>
        </div>

        <!-- Progress Gauge -->
        <div class="w-full h-3 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
          <div class="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-500" style="width: ${score}%"></div>
        </div>
      </div>

      <!-- Checklist Items Grid -->
      <div class="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
        <h2 class="text-xl font-bold text-white border-b border-slate-800 pb-3">Fresher Career Milestones</h2>

        <div class="space-y-3">
          ${JOB_READINESS_CHECKLIST.map(item => {
            const isDone = state.completedChecklist.has(item.id);

            return `
              <div onclick="toggleCheck('${item.id}')" class="p-4 rounded-xl bg-slate-900/80 border ${isDone ? 'border-emerald-500/40 bg-emerald-950/10' : 'border-slate-800'} hover:border-slate-700 flex items-center justify-between gap-4 cursor-pointer transition-all">
                <div class="flex items-center gap-3.5">
                  <div class="w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${isDone ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-bold' : 'border-slate-700 bg-slate-800'}">
                    ${isDone ? '✓' : ''}
                  </div>
                  <span class="text-sm font-semibold ${isDone ? 'text-emerald-300 line-through' : 'text-slate-200'}">${item.label}</span>
                </div>

                <span class="text-[10px] font-bold px-2.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 uppercase tracking-wider">${item.category}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

    </section>
  `;
}

function renderFresherAdviceSection() {
  return `
    <section class="py-12 px-4 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60 mt-12">
      <div class="glass-panel p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 relative overflow-hidden space-y-8">
        
        <div class="max-w-3xl space-y-3">
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">Fresher Career Strategy</span>
          <h2 class="text-3xl font-extrabold text-white">Don't Learn Everything — Learn What Your Career Needs.</h2>
          <p class="text-slate-300 text-sm leading-relaxed">
            One of the biggest mistakes engineering freshers make is trying to learn every framework, tool, and buzzword at once. Real engineering hiring managers look for **depth in core fundamentals**, clean code hygiene, and 2-3 solid end-to-end projects.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-2">
            <span class="text-2xl">🧠</span>
            <h3 class="text-base font-bold text-white">1. Master 1 Core Language</h3>
            <p class="text-xs text-slate-400 leading-relaxed">Pick Python, Java, or JavaScript and understand memory, OOP, and data structures thoroughly before hopping between languages.</p>
          </div>

          <div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-2">
            <span class="text-2xl">🛠️</span>
            <h3 class="text-base font-bold text-white">2. Build End-to-End Projects</h3>
            <p class="text-xs text-slate-400 leading-relaxed">Two hosted applications with database, authentication, and clean UI beat ten simple tutorial clones.</p>
          </div>

          <div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-2">
            <span class="text-2xl">🎯</span>
            <h3 class="text-base font-bold text-white">3. Follow the Sequence</h3>
            <p class="text-xs text-slate-400 leading-relaxed">Never skip fundamentals to jump straight into advanced AI or Cloud tools without understanding underlying basics.</p>
          </div>
        </div>

      </div>
    </section>
  `;
}

function renderTechModal() {
  if (!state.activeTechModal) return '';
  const node = state.activeTechModal;
  const isCompleted = state.completedNodes.has(node.id);

  return `
    <div class="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-sm transition-opacity">
      <div class="w-full max-w-2xl bg-slate-900 h-full overflow-y-auto border-l border-slate-800 p-6 sm:p-8 space-y-6 animate-slide-in relative shadow-2xl">
        
        <!-- Close Button -->
        <button onclick="closeTechModal()" class="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors">
          ${getIconSvg('x', 'w-5 h-5')}
        </button>

        <div class="space-y-3">
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">${node.category}</span>
            <span class="text-[10px] font-semibold px-2 py-0.5 rounded ${node.level === 'Beginner' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'}">${node.level}</span>
            <span class="text-xs text-slate-400 font-mono">⏱️ ${node.estimatedDuration}</span>
          </div>

          <h2 class="text-3xl font-black text-white">${node.name}</h2>
        </div>

        <!-- Completion Toggle Banner -->
        <div class="p-4 rounded-xl ${isCompleted ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-slate-800/80 border border-slate-700'} flex items-center justify-between gap-4">
          <div>
            <span class="text-sm font-bold ${isCompleted ? 'text-emerald-400' : 'text-slate-200'} block">
              ${isCompleted ? '✓ Skill Completed' : 'Pending Skill'}
            </span>
            <span class="text-xs text-slate-400">Marking complete updates your roadmap progress percentage.</span>
          </div>
          <button onclick="toggleNode('${node.id}', event); closeTechModal();" class="px-4 py-2 rounded-xl text-xs font-bold ${isCompleted ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400' : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'} transition-all">
            ${isCompleted ? 'Mark Incomplete' : 'Mark Completed'}
          </button>
        </div>

        <!-- Why Important -->
        <div class="space-y-2">
          <h3 class="text-sm font-extrabold text-cyan-400 uppercase tracking-wider">Why It Is Important</h3>
          <p class="text-sm text-slate-300 leading-relaxed">${node.whyImportant}</p>
        </div>

        <!-- Prerequisites -->
        <div class="space-y-2">
          <h3 class="text-sm font-extrabold text-cyan-400 uppercase tracking-wider">Prerequisites</h3>
          <div class="flex flex-wrap gap-2">
            ${node.prerequisites.map(p => `<span class="px-3 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700">${p}</span>`).join('')}
          </div>
        </div>

        <!-- What to Learn & Key Concepts -->
        <div class="space-y-2">
          <h3 class="text-sm font-extrabold text-cyan-400 uppercase tracking-wider">Syllabus & Core Topics</h3>
          <p class="text-sm text-slate-300 leading-relaxed font-mono bg-slate-950 p-4 rounded-xl border border-slate-800">${node.whatToLearn}</p>
        </div>

        <!-- Practice & Project Suggestion -->
        <div class="space-y-2">
          <h3 class="text-sm font-extrabold text-amber-400 uppercase tracking-wider">Recommended Practice Project</h3>
          <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1">
            ${node.practiceProjects.map(proj => `<p class="text-sm font-semibold text-amber-200">💡 ${proj}</p>`).join('')}
          </div>
        </div>

        <!-- Recommended Learning Resources -->
        <div class="space-y-3 pt-2">
          <h3 class="text-sm font-extrabold text-cyan-400 uppercase tracking-wider">Curated Learning Resources</h3>
          <div class="space-y-2">
            ${node.recommendedResources.map(res => `
              <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-cyan-500 text-xs font-semibold text-white flex items-center justify-between transition-colors">
                <span>${res.name} (${res.type})</span>
                ${getIconSvg('external-link', 'w-4 h-4 text-cyan-400')}
              </a>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  `;
}

function renderCareerQuizModal() {
  if (!state.isQuizOpen) return '';

  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div class="w-full max-w-xl glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 relative shadow-2xl">
        
        <button onclick="closeQuiz()" class="absolute top-6 right-6 text-slate-400 hover:text-white">
          ${getIconSvg('x', 'w-5 h-5')}
        </button>

        <div class="space-y-1">
          <span class="text-xs font-bold text-cyan-400 uppercase tracking-wider">Step ${state.quizStep + 1} of 3</span>
          <h2 class="text-2xl font-black text-white">Find Your Ideal Engineering Path</h2>
        </div>

        ${state.quizStep === 0 ? `
          <div class="space-y-4">
            <p class="text-sm text-slate-300">What aspect of engineering excites you the most?</p>
            <div class="space-y-2.5">
              <button onclick="answerQuiz('interest', 'visual')" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-left text-sm font-semibold text-slate-200 transition-colors">🎨 Building visual interfaces, web apps, and user experiences</button>
              <button onclick="answerQuiz('interest', 'server')" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-left text-sm font-semibold text-slate-200 transition-colors">⚡ Designing scalable server APIs, databases, and microservices</button>
              <button onclick="answerQuiz('interest', 'ai')" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-left text-sm font-semibold text-slate-200 transition-colors">🤖 Training Machine Learning models, Generative AI, and data math</button>
              <button onclick="answerQuiz('interest', 'cloud')" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-left text-sm font-semibold text-slate-200 transition-colors">☁️ Cloud architecture, DevOps pipelines, Docker & Kubernetes</button>
              <button onclick="answerQuiz('interest', 'security')" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-left text-sm font-semibold text-slate-200 transition-colors">🛡️ Cybersecurity, ethical hacking, and protecting networks</button>
              <button onclick="answerQuiz('interest', 'data')" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-left text-sm font-semibold text-slate-200 transition-colors">📊 Analyzing data trends, SQL queries, and BI dashboards</button>
            </div>
          </div>
        ` : state.quizStep === 1 ? `
          <div class="space-y-4">
            <p class="text-sm text-slate-300">What is your current programming confidence level?</p>
            <div class="space-y-2.5">
              <button onclick="answerQuiz('level', 'beginner')" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-left text-sm font-semibold text-slate-200 transition-colors">🌱 Complete beginner - basic C / C++ or college theory</button>
              <button onclick="answerQuiz('level', 'intermediate')" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-left text-sm font-semibold text-slate-200 transition-colors">🌿 Intermediate - comfortable writing syntax in Python/JS/Java</button>
              <button onclick="answerQuiz('level', 'ready')" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-left text-sm font-semibold text-slate-200 transition-colors">🌳 Advanced - built basic projects, preparing for campus drives</button>
            </div>
          </div>
        ` : `
          <div class="space-y-4">
            <p class="text-sm text-slate-300">What is your primary career target?</p>
            <div class="space-y-2.5">
              <button onclick="answerQuiz('goal', 'product')" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-left text-sm font-semibold text-slate-200 transition-colors">🏢 Product Startups & Big Tech MNCs</button>
              <button onclick="answerQuiz('goal', 'generalist')" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-left text-sm font-semibold text-slate-200 transition-colors">💼 General Software Engineering / IT Consultant</button>
            </div>
          </div>
        `}

      </div>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="border-t border-slate-800/80 bg-slate-950 py-12 px-4 lg:px-8 mt-20">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div class="space-y-2">
          <div class="flex items-center justify-center md:justify-start gap-2">
            <div class="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-bold">
              ${getIconSvg('code-2', 'w-5 h-5')}
            </div>
            <span class="text-lg font-black text-white">Fresher<span class="text-cyan-400">Roadmap</span></span>
          </div>
          <p class="text-xs text-slate-400">“Learn. Build. Deploy. Get Hired.” — A structured path for fresher engineers.</p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <button onclick="setTab('home')" class="hover:text-white">Home</button>
          <button onclick="setTab('roadmaps')" class="hover:text-white">Roadmaps</button>
          <button onclick="setTab('resources')" class="hover:text-white">Resources</button>
          <button onclick="setTab('job-readiness')" class="hover:text-amber-400">Job Readiness</button>
          <a href="https://github.com" target="_blank" class="hover:text-white">GitHub</a>
          <a href="https://linkedin.com" target="_blank" class="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  `;
}

// Main Render Dispatcher
function renderApp() {
  const root = document.getElementById('app');
  if (!root) return;

  let mainContent = '';
  if (state.activeTab === 'home') {
    mainContent = renderHero() + renderFresherAdviceSection();
  } else if (state.activeTab === 'roadmaps') {
    mainContent = renderRoadmapView() + renderFresherAdviceSection();
  } else if (state.activeTab === 'technologies') {
    mainContent = renderTechnologyExplorer();
  } else if (state.activeTab === 'resources') {
    mainContent = renderResourcesHub();
  } else if (state.activeTab === 'dashboard') {
    mainContent = renderDashboard();
  } else if (state.activeTab === 'job-readiness') {
    mainContent = renderJobReadiness();
  }

  root.innerHTML = `
    <div class="min-h-screen flex flex-col justify-between">
      <div>
        ${renderNavbar()}
        <main class="animate-fade-in">
          ${mainContent}
        </main>
      </div>
      ${renderFooter()}
      ${renderTechModal()}
      ${renderCareerQuizModal()}
    </div>
  `;
}

// Initialize application on load
function initApp() {
  if (!state.isDarkTheme) {
    document.body.classList.add('light-theme');
  }
  renderApp();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
