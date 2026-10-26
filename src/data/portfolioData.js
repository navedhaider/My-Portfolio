/**
 * Portfolio Data Configuration
 * Central source of truth for all content across the portfolio.
 * 
 * NOTE FOR USER:
 * All personal information, URLs, social links, work experience dates,
 * and project links can be updated directly in this file.
 */

export const portfolioData = {
  // Personal & Hero Information
  personal: {
    name: "Naved Haider",
    shortName: "Naved",
    initials: "NH",
    role: "Full Stack .NET Developer",
    secondaryRoles: [
      "ASP.NET Core Specialist",
      "RESTful API Architect",
      "React & Modern UI Builder",
      "SQL Server & Database Engineer",
    ],
    headline: "Hi, I'm Naved Haider — Full Stack .NET Developer",
    subheadline:
      "Crafting high-throughput, secure ASP.NET Core Web APIs and responsive React applications with Clean Architecture, robust SQL data layers, and production-tested patterns.",
    availability: "Available for Full-time Roles & Projects",
    location: "Global / Remote & Hybrid",
    
    // Replace with your real contact & profile links
    email: "navedhaider14@gmail.com",
    phone: "+91-8874651365",
    github: "https://github.com/navedhaider", // [REPLACE with your GitHub URL]
    linkedin: "https://linkedin.com/in/navedhaider", // [REPLACE with your LinkedIn URL]
    resumeFilename: "Naved_Haider_Resume.pdf",
    resumeDownloadPath: "/resume.pdf", // Place your resume.pdf into the public/ folder

    // High-impact stats displayed in Hero
    stats: [
      { label: "Backend Core", value: "ASP.NET Core", highlight: ".NET 8 / 9" },
      { label: "Frontend", value: "React & Vite", highlight: "Tailwind CSS" },
      { label: "Database", value: "SQL Server", highlight: "Stored Procs & EF" },
      { label: "Pattern", value: "Clean Architecture", highlight: "SOLID & REST" },
    ],
  },

  // About Me Section
  about: {
    heading: "Bridging Enterprise .NET Backends with Sleek Modern Frontends",
    intro:
      "I am a passionate Full Stack .NET Developer who thrives at the intersection of robust backend infrastructure and responsive, polished frontend interfaces. My engineering philosophy centers on clean code, scalable architecture, and tangible business value.",
    story: [
      "My development journey is focused on the modern Microsoft ecosystem—specifically architecting high-performance RESTful Web APIs with ASP.NET Core, managing complex relational data with SQL Server and MySQL, and pairing them with reactive, accessible client applications built with React.",
      "Whether designing normalized database schemas with optimized stored procedures, implementing JWT role-based access control (RBAC), or crafting fluid user interfaces with Tailwind CSS and Framer Motion, I build software that is maintainable, secure, and intuitive.",
    ],
    strengths: [
      {
        title: "Enterprise Architecture",
        desc: "Strict adherence to Clean Architecture, Separation of Concerns, SOLID principles, and the Repository pattern to ensure long-term codebase health.",
        icon: "Layers",
      },
      {
        title: "High-Performance APIs",
        desc: "Designing fast, stateless RESTful APIs using ASP.NET Core with async/await, Dapper for high-speed reads, and Entity Framework Core for rich domains.",
        icon: "Cpu",
      },
      {
        title: "Relational Data Mastery",
        desc: "Strong foundation in SQL Server and MySQL, crafting tuned stored procedures, complex joins, indexing strategies, and normalized schemas.",
        icon: "Database",
      },
      {
        title: "Modern React Engineering",
        desc: "Building clean, component-driven client applications with reusable component design, smooth state flows, and mobile-first responsiveness.",
        icon: "Layout",
      },
      {
        title: "Security & Authentication",
        desc: "End-to-end authentication and authorization using JWT bearer tokens, claims, role-based permissions, and HTTPS/CORS best practices.",
        icon: "ShieldCheck",
      },
      {
        title: "Production Testing Mindset",
        desc: "Writing structured API contracts, testing endpoints with Postman collections, and implementing centralized exception-handling middleware.",
        icon: "CheckCircle2",
      },
    ],
    education: [
      {
        degree: "B.Sc. in Computer Science (BSc CS)",
        institution: "Era University, Lucknow",
        department: "Department of Liberal Education",
        period: "2022 – 2025",
        description:
          "Focused on Computer Science foundations, Software Engineering, Database Systems, Data Structures & Algorithms, Object-Oriented Programming (C#), and Modern Web Technologies.",
      },
    ],
  },

  // Technical Skills Section (Categorized & Verified)
  skills: {
    categories: [
      {
        id: "all",
        name: "All Skills",
      },
      {
        id: "backend",
        name: "Backend (.NET)",
      },
      {
        id: "frontend",
        name: "Frontend",
      },
      {
        id: "database",
        name: "Database",
      },
      {
        id: "architecture",
        name: "Architecture & Security",
      },
      {
        id: "tools",
        name: "Tools & DevOps",
      },
    ],
    items: [
      // Backend
      {
        name: "C#",
        category: "backend",
        proficiency: "Primary Core",
        experience: "Advanced",
        description: "Modern C# features, LINQ, pattern matching, async programming, records & delegates.",
      },
      {
        name: "ASP.NET Core",
        category: "backend",
        proficiency: "Primary Core",
        experience: "Advanced",
        description: "Middleware pipeline, Dependency Injection, Configuration, Minimal APIs & MVC.",
      },
      {
        name: "ASP.NET Web API",
        category: "backend",
        proficiency: "Primary Core",
        experience: "Advanced",
        description: "RESTful endpoints, DTO mapping, routing, status codes, Swagger / OpenAPI docs.",
      },
      {
        name: "Entity Framework Core",
        category: "backend",
        proficiency: "Production",
        experience: "Proficient",
        description: "Code-First migrations, DbContext lifecycle, eager/lazy loading, relationship mapping.",
      },
      {
        name: "Dapper",
        category: "backend",
        proficiency: "Production",
        experience: "Proficient",
        description: "High-performance micro-ORM for executing raw SQL queries and stored procedures.",
      },

      // Frontend
      {
        name: "React.js",
        category: "frontend",
        proficiency: "Primary Core",
        experience: "Advanced",
        description: "Functional components, Hooks, Custom hooks, context state, and virtual DOM optimization.",
      },
      {
        name: "JavaScript (ES6+)",
        category: "frontend",
        proficiency: "Primary Core",
        experience: "Advanced",
        description: "Async/await, Promises, destructuring, modules, array methods, and event loop.",
      },
      {
        name: "Tailwind CSS",
        category: "frontend",
        proficiency: "Primary Core",
        experience: "Advanced",
        description: "Utility-first responsive layouts, custom design systems, dark mode variants.",
      },
      {
        name: "HTML5 & Semantic Web",
        category: "frontend",
        proficiency: "Standard",
        experience: "Advanced",
        description: "Accessible structures, semantic markup, SEO best practices, and form handling.",
      },
      {
        name: "CSS3 & Modern Motion",
        category: "frontend",
        proficiency: "Standard",
        experience: "Proficient",
        description: "Flexbox, CSS Grid, media queries, keyframe animations, and backdrop filters.",
      },

      // Database
      {
        name: "SQL Server (T-SQL)",
        category: "database",
        proficiency: "Primary Core",
        experience: "Advanced",
        description: "Complex queries, transactions, views, triggers, and execution plan analysis.",
      },
      {
        name: "MySQL",
        category: "database",
        proficiency: "Production",
        experience: "Proficient",
        description: "Relational database schema modeling, foreign keys, index optimization, and CRUD.",
      },
      {
        name: "Stored Procedures",
        category: "database",
        proficiency: "Production",
        experience: "Advanced",
        description: "Parameterized procedures, output parameters, batch execution, and business logic encapsulation.",
      },
      {
        name: "Query Optimization",
        category: "database",
        proficiency: "Production",
        experience: "Proficient",
        description: "Non-clustered indexing, query profiling, reducing table scans, and memory tuning.",
      },

      // Architecture
      {
        name: "REST APIs & Best Practices",
        category: "architecture",
        proficiency: "Architectural",
        experience: "Advanced",
        description: "Stateless architecture, HTTP verbs, standard error contracts, and payload design.",
      },
      {
        name: "Clean Architecture",
        category: "architecture",
        proficiency: "Architectural",
        experience: "Advanced",
        description: "Domain-centric separation (Domain, Application, Infrastructure, Presentation).",
      },
      {
        name: "Authentication (JWT)",
        category: "architecture",
        proficiency: "Security",
        experience: "Proficient",
        description: "Token issuance, refresh token flows, signature validation, and secure headers.",
      },
      {
        name: "Role-Based Authorization",
        category: "architecture",
        proficiency: "Security",
        experience: "Proficient",
        description: "Claims-based policies, user roles, permission checks, and endpoint security guards.",
      },

      // Tools
      {
        name: "Git & GitHub",
        category: "tools",
        proficiency: "Daily Workflow",
        experience: "Advanced",
        description: "Branching strategies, pull requests, version control, conflict resolution.",
      },
      {
        name: "Visual Studio 2022",
        category: "tools",
        proficiency: "Daily Workflow",
        experience: "Advanced",
        description: "Full-suite .NET debugging, profiling, NuGet package management, test runner.",
      },
      {
        name: "VS Code",
        category: "tools",
        proficiency: "Daily Workflow",
        experience: "Advanced",
        description: "Lightweight frontend and full stack workflow with extensions, ESLint, and terminal.",
      },
      {
        name: "Postman",
        category: "tools",
        proficiency: "Daily Workflow",
        experience: "Advanced",
        description: "API testing, automated request scripts, environment variables, documentation.",
      },
    ],
  },

  // Featured Projects Section (As strictly instructed)
  projects: [
    {
      id: "docquick-appointment-system",
      title: "DocQuick Appointment Management System",
      category: "Full Stack .NET",
      badge: "Healthcare & Scheduling",
      shortDescription:
        "An enterprise healthcare appointment portal connecting patients and medical specialists with real-time schedule slot reservation and role-based management.",
      fullDescription:
        "DocQuick is a comprehensive healthcare appointment management platform engineered to eliminate scheduling friction. Built with a decoupled architecture featuring an ASP.NET Core Web API backend and a responsive React frontend, the system facilitates seamless scheduling, appointment confirmation, doctor availability tracking, and audit logging.",
      problemSolved:
        "Traditional clinic scheduling often suffers from double bookings, manual phone tag, and lack of role-restricted access to sensitive patient appointment history.",
      architectureHighlights: [
        "Clean Architecture with separated Domain, Application, and Infrastructure layers.",
        "Role-Based Access Control (RBAC) separating Admin, Doctor, and Patient permissions via JWT tokens.",
        "RESTful API endpoints with model validation filters and consistent JSON response envelopes.",
        "MySQL relational schema enforcing referential integrity and slot concurrency locking.",
        "Repository and Unit-of-Work patterns isolating EF Core queries from presentation logic.",
      ],
      keyFeatures: [
        "Patient registration, profile management, and appointment history tracking.",
        "Doctor dashboard with interactive daily/weekly availability calendar.",
        "One-click appointment booking, pending approval queue, and status updates (Booked, Confirmed, Cancelled, Completed).",
        "Role-secured administrative panel for doctor onboarding and department management.",
        "Interactive React frontend with responsive scheduling grids and instant feedback states.",
      ],
      technologies: [
        "ASP.NET Core Web API",
        "C#",
        "React.js",
        "MySQL",
        "Entity Framework Core",
        "JWT Authentication",
        "Tailwind CSS",
        "REST APIs",
      ],
      links: {
        // [REPLACE with your actual GitHub or Live Demo when ready]
        github: "https://github.com/navedhaider/DocQuick-Appointment-System",
        live: null, // Set to live URL if deployed, otherwise null
        isConfigured: false, // Flag indicating whether actual URLs are live
      },
      previewType: "appointment",
    },
    {
      id: "medsense-healthcare-reporting",
      title: "MedSense Healthcare Reporting System",
      category: "Backend & Data",
      badge: "Clinical Data & Analytics",
      shortDescription:
        "A diagnostic reporting and investigative analytics engine powered by ASP.NET Core and high-speed SQL stored procedures for clinical lab results.",
      fullDescription:
        "MedSense is a diagnostic intelligence and healthcare report management system designed for medical laboratories and health clinics. The platform ingests clinical investigation parameters, executes complex SQL data transformations via stored procedures, and generates verifiable patient diagnostic reports with multi-stage approval workflows.",
      problemSolved:
        "Diagnostic laboratories generate massive volumes of test results that require strict validation, rapid historical comparison, and high-performance SQL querying without impacting operational responsiveness.",
      architectureHighlights: [
        "High-performance data pipeline using Dapper and optimized SQL Server Stored Procedures for sub-100ms report aggregation.",
        "Normalized relational database schema with dedicated index tuning on patient identifiers and test dates.",
        "Multi-stage reporting workflow (Drafted -> Lab Tech Verified -> Pathologist Approved -> Published).",
        "Structured logging and centralized exception middleware to catch and audit any clinical reporting anomalies.",
        "Exportable structured reports with parameter threshold alerts (Normal, High, Critical).",
      ],
      keyFeatures: [
        "Investigation parameter entry with automated reference range checks.",
        "Patient diagnostic report generation with historical trend comparisons.",
        "Optimized T-SQL stored procedures performing multi-table aggregations and statistical averages.",
        "Role-based authorization verifying that only authorized pathologists can sign off on critical results.",
        "Audit trail tracking every report status transition and timestamp.",
      ],
      technologies: [
        "ASP.NET Core",
        "C#",
        "SQL Server (T-SQL)",
        "Stored Procedures",
        "Dapper",
        "React.js",
        "Clean Architecture",
        "Postman",
      ],
      links: {
        github: "https://github.com/navedhaider/MedSense-Healthcare-Reporting",
        live: null,
        isConfigured: false,
      },
      previewType: "reporting",
    },
    {
      id: "developer-portfolio-website",
      title: "Personal Portfolio & Engineering Showcase",
      category: "Full Stack / Frontend",
      badge: "Modern Web Engineering",
      shortDescription:
        "A high-performance, accessible developer portfolio featuring dynamic animations, glassmorphism aesthetics, theme switching, and modular architecture.",
      fullDescription:
        "Engineered to showcase full-stack capabilities, this developer portfolio website combines modern design principles with rock-solid component architecture. Built using React, Tailwind CSS, and Framer Motion, it features seamless dark/light mode switching, keyboard navigation accessibility, animated skill filtering, and a configurable contact pipeline.",
      problemSolved:
        "Generic portfolio templates lack personality, accessibility, and clean architectural separation, making it difficult for recruiters and engineering leads to evaluate genuine full-stack skill.",
      architectureHighlights: [
        "Modular, component-based React architecture with zero unnecessary third-party overhead.",
        "Tailwind CSS theme tokens with persistent dark/light mode state synced to localStorage.",
        "Framer Motion layout transitions, staggered reveals, and reduced-motion accessibility overrides.",
        "Centralized configuration architecture allowing instant customization of all portfolio assets.",
        "Graceful contact integration supporting EmailJS with fallback copy-to-clipboard and mailto triggers.",
      ],
      keyFeatures: [
        "Modern dark-first visual aesthetic with electric blue and purple gradient accents.",
        "Interactive project detail modal with architectural diagrams and feature breakdowns.",
        "Filterable skill matrix categorized by Backend, Frontend, Database, and Architecture.",
        "Validated contact form with real-time field error indicators and safe key handling.",
        "Mobile-optimized responsive drawer navigation with smooth section scrolling.",
      ],
      technologies: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Lucide React",
        "EmailJS",
        "JavaScript (ES6+)",
      ],
      links: {
        github: "https://github.com/navedhaider/my-portfolio",
        live: "https://navedhaider.dev",
        isConfigured: true,
      },
      previewType: "portfolio",
    },
  ],

  // Work Experience Section (Editable, Accurate, Timeline-based)
  experience: [
    {
      role: "Full Stack .NET Developer Intern / Junior Developer", // [REPLACE with your exact role/title]
      company: "Software Development Firm / Tech Solutions", // [REPLACE with your company name]
      location: "On-site / Hybrid", // [REPLACE with location]
      period: "2023 – Present", // [REPLACE with your dates]
      type: "Full-Time / Internship",
      summary:
        "Contributed to building enterprise web applications, designing RESTful API endpoints in ASP.NET Core, and writing optimized SQL stored procedures for internal tools.",
      responsibilities: [
        "Developed and maintained RESTful APIs in ASP.NET Core Web API with C#, handling CRUD operations and validation filters.",
        "Created and tuned SQL Server stored procedures and views, reducing query execution times on frequently accessed reports.",
        "Built responsive client-side views and modular UI components in React.js and modern CSS.",
        "Implemented JWT authentication and role authorization checks across customer-facing API routes.",
        "Collaborated with senior software architects in code reviews, adhering to Git branching workflows and SOLID principles.",
      ],
      keyLearnings: [
        "Real-world understanding of Clean Architecture boundaries and DTO data transformations.",
        "Deep debugging skills using Visual Studio diagnostic tools, SQL Profiler, and Postman collections.",
        "Practical experience balancing rapid delivery with clean, documented code and testing coverage.",
      ],
      technologies: [
        "ASP.NET Core",
        "C#",
        "SQL Server",
        "React.js",
        "Entity Framework Core",
        "Git",
        "Postman",
      ],
    },
  ],

  // Services Offered Section
  services: [
    {
      id: "full-stack-web",
      title: "Full Stack Web Development",
      description:
        "End-to-end development of modern web applications. Seamlessly bridging robust ASP.NET Core backend architectures with interactive, responsive React user interfaces.",
      features: [
        "Single Page Applications (SPAs) in React",
        "Scalable backend architectures in C# / .NET",
        "Component-driven design systems",
        "State management and API integration",
      ],
      icon: "Globe",
      popular: true,
    },
    {
      id: "aspnet-api",
      title: "ASP.NET Core API Development",
      description:
        "Designing and implementing scalable, high-throughput RESTful Web APIs adhering to clean REST conventions, Swagger documentation, and token security.",
      features: [
        "Stateless RESTful endpoint engineering",
        "JWT authentication & role-based authorization",
        "Global exception handling & model validation",
        "Integration with EF Core and Dapper",
      ],
      icon: "Server",
      popular: false,
    },
    {
      id: "database-sql",
      title: "Database Design & SQL Optimization",
      description:
        "Relational database modeling, complex query authoring, stored procedure development, and indexing strategies for SQL Server and MySQL.",
      features: [
        "Normalized schema design & relationships",
        "Complex T-SQL stored procedures & triggers",
        "Query optimization & index tuning",
        "Data migrations & schema evolution",
      ],
      icon: "Database",
      popular: false,
    },
    {
      id: "react-frontend",
      title: "React Frontend Development",
      description:
        "Creating fast, accessible, and visually stunning client-side applications with modern React, Tailwind CSS, and polished micro-animations.",
      features: [
        "Mobile-first, fully responsive layouts",
        "Framer Motion interactive animations",
        "Clean, reusable component library",
        "SEO-friendly and accessible HTML markup",
      ],
      icon: "Code2",
      popular: false,
    },
    {
      id: "bug-fixing-perf",
      title: "Bug Fixing & Performance Optimization",
      description:
        "Profiling existing .NET and React applications to diagnose performance bottlenecks, eliminate memory leaks, and refactor legacy code.",
      features: [
        "API response time reduction & caching",
        "Frontend bundle and render optimization",
        "Legacy C# code refactoring into clean patterns",
        "Security audits & dependency upgrades",
      ],
      icon: "Wrench",
      popular: false,
    },
  ],

  // Contact Section Info
  contact: {
    heading: "Let's Build Something Exceptional Together",
    subheading:
      "Whether you're looking for a dedicated Full Stack .NET Developer, need an enterprise API built, or want to discuss an exciting project, my inbox is always open.",
    email: "navedhaider14@gmail.com",
    location: "Open to Remote Worldwide & On-Site",
    responseTime: "Typically replies within 24 hours",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/navedhaider", // [REPLACE with your GitHub]
        icon: "Github",
        username: "@navedhaider",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/navedhaider", // [REPLACE with your LinkedIn]
        icon: "Linkedin",
        username: "in/navedhaider",
      },
      {
        name: "Email",
        url: "mailto:navedhaider14@gmail.com",
        icon: "Mail",
        username: "navedhaider14@gmail.com",
      },
    ],
  },
};
