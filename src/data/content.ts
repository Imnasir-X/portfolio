export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  featured: boolean;
  order: number;
  imageUrl?: string;
  imageAlt?: string;
  link?: string;
  github?: string;
  technologies: string[];
  highlights?: string[];
  category: "product" | "engineering" | "ai" | "startup";
}

export const projects: Project[] = [
  {
    slug: "kormoo",
    title: "Kormoo",
    subtitle: "Operating system for small garment factories",
    description:
      "Software built for small garment factories in Bangladesh — managing production, attendance, payroll, and financial workflows through web/PWA and conversational interfaces.",
    longDescription:
      "Kormoo addresses the operational challenges faced by small garment factories in Bangladesh. The system spans production tracking, attendance management, payroll calculation, and financial workflows. It combines a web/PWA experience for supervisors and office staff with conversational/agent interfaces for workers who may not be comfortable with traditional UIs.",
    featured: true,
    order: 1,
    link: "https://kormoo.com",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Node.js",
      "AI Agents",
      "PWA",
    ],
    highlights: [
      "Production workflow tracking",
      "Attendance and payroll automation",
      "Financial management",
      "Web/PWA + conversational interfaces",
      "Built for Bangladesh garment industry context",
    ],
    category: "product",
  },
  {
    slug: "zephra",
    title: "Zephra Dynamic Landing",
    subtitle: "Deterministic personalization engine",
    description:
      "Engineering-focused landing page system with deterministic personalization, fail-open architecture, security controls, and controlled DOM modification.",
    longDescription:
      "A dynamic landing page system built with engineering rigor. Key decisions include deterministic personalization (no black-box ML), fail-open architecture ensuring the site always works even if personalization fails, security-first design preventing injection attacks, controlled DOM modification with strict validation, comprehensive testing, and requirement-driven implementation.",
    featured: true,
    order: 2,
    technologies: [
      "Next.js",
      "TypeScript",
      "Edge Functions",
      "Security",
      "Testing",
    ],
    highlights: [
      "Deterministic personalization logic",
      "Fail-open architecture",
      "Security-first implementation",
      "Controlled DOM modification",
      "Comprehensive test coverage",
    ],
    category: "engineering",
  },
  {
    slug: "pathshala",
    title: "Pathshala",
    subtitle: "Educational platform with role-based access",
    description:
      "ASP.NET Core backend with PostgreSQL, Next.js frontend, JWT/role authorization, business-rule enforcement, and 28 backend unit tests.",
    longDescription:
      "Pathshala is an educational platform demonstrating full-stack engineering discipline. The backend uses ASP.NET Core with PostgreSQL, implementing proper JWT authentication and role-based authorization. Business rules are enforced at the API layer, and the system includes 28 backend unit tests covering core functionality.",
    featured: true,
    order: 3,
    technologies: [
      "ASP.NET Core",
      "PostgreSQL",
      "Next.js",
      "JWT",
      "Unit Testing",
    ],
    highlights: [
      "ASP.NET Core backend",
      "PostgreSQL database design",
      "JWT/role authorization",
      "Business-rule enforcement",
      "28 backend unit tests",
    ],
    category: "engineering",
  },
  {
    slug: "xai-workspace",
    title: "Xai Intelligence Workspace",
    subtitle: "Visual/creative engineering showcase",
    description:
      "Next.js, TypeScript, Three.js/React Three Fiber, GSAP, Framer Motion, WebGL/GLSL, and interaction design demonstrating visual engineering capabilities.",
    longDescription:
      "A creative engineering project showcasing advanced front-end skills. Built with Next.js and TypeScript, it leverages Three.js and React Three Fiber for 3D scenes, GSAP and Framer Motion for animations, and custom WebGL/GLSL shaders for visual effects. The project demonstrates thoughtful interaction design and performance optimization.",
    featured: true,
    order: 4,
    technologies: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "React Three Fiber",
      "GSAP",
      "Framer Motion",
      "WebGL",
      "GLSL",
    ],
    highlights: [
      "3D scene composition with R3F",
      "Custom GLSL shaders",
      "GSAP timeline animations",
      "Framer Motion gestures",
      "Performance-optimized rendering",
    ],
    category: "engineering",
  },
  {
    slug: "age-of-genz",
    title: "The Age of GenZ",
    subtitle: "Shipped product story",
    description:
      "A product/startup-building journey — from concept to shipped experience. Demonstrates zero-to-one thinking and product decision-making.",
    longDescription:
      "The Age of GenZ represents a complete product journey from initial concept through development to launch. This project showcases product thinking, user research, iterative design, technical implementation, and go-to-market considerations. It's presented as a startup-building story rather than merely a coding project.",
    featured: true,
    order: 5,
    technologies: ["Next.js", "TypeScript", "Product Design", "Analytics"],
    highlights: [
      "Zero-to-one product development",
      "User research and validation",
      "Iterative design process",
      "Technical implementation",
      "Launch and iteration",
    ],
    category: "startup",
  },
];

export interface BuildLogEntry {
  date: string;
  title: string;
  description: string;
  type: "build" | "learn" | "ship" | "explore";
}

export const buildLog: BuildLogEntry[] = [
  {
    date: "2024",
    title: "Kormoo — Production System",
    description:
      "Building operational software for garment factories in Bangladesh. Shipping core production tracking and payroll features.",
    type: "build",
  },
  {
    date: "2024",
    title: "AI Agent Experiments",
    description:
      "Exploring LLM-backed systems, MCP/tool-oriented architectures, and agent workflows for practical applications.",
    type: "explore",
  },
  {
    date: "2023",
    title: "Zephra Dynamic Landing",
    description:
      "Engineered a deterministic personalization system with fail-open architecture and security controls.",
    type: "ship",
  },
  {
    date: "2023",
    title: "Pathshala Platform",
    description:
      "Full-stack educational platform with ASP.NET Core, PostgreSQL, and comprehensive testing.",
    type: "build",
  },
  {
    date: "2023",
    title: "Xai Intelligence Workspace",
    description:
      "Creative engineering exploration with Three.js, GLSL shaders, and advanced interaction design.",
    type: "explore",
  },
];

export interface Capability {
  category: string;
  items: {
    name: string;
    description: string;
    technologies?: string[];
  }[];
}

export const capabilities: Capability[] = [
  {
    category: "Engineering",
    items: [
      {
        name: "Frontend Systems",
        description:
          "Building responsive, accessible, and performant user interfaces with modern frameworks.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Backend/API Development",
        description:
          "Designing and implementing RESTful APIs, server-side logic, and integration layers.",
        technologies: ["Node.js", "ASP.NET Core", "Edge Functions"],
      },
      {
        name: "Databases",
        description:
          "Schema design, query optimization, and data modeling for relational databases.",
        technologies: ["PostgreSQL", "SQL"],
      },
      {
        name: "Testing",
        description:
          "Unit testing, integration testing, and test-driven development practices.",
        technologies: ["Jest", "xUnit", "Testing Library"],
      },
      {
        name: "Authentication/Authorization",
        description:
          "JWT-based auth, role-based access control, and security-first implementation.",
        technologies: ["JWT", "OAuth", "RBAC"],
      },
    ],
  },
  {
    category: "AI & Agents",
    items: [
      {
        name: "Agent Workflows",
        description:
          "Designing multi-step agent systems for task automation and decision support.",
      },
      {
        name: "Tool Integration",
        description:
          "Connecting LLMs to external tools, APIs, and data sources for practical applications.",
      },
      {
        name: "LLM-backed Systems",
        description:
          "Building products that leverage large language models for user value.",
      },
      {
        name: "MCP/Tool-oriented Architecture",
        description:
          "Implementing Model Context Protocol and tool-based agent architectures.",
      },
      {
        name: "AI Product Experimentation",
        description:
          "Rapid prototyping and iteration on AI-powered features and experiences.",
      },
    ],
  },
  {
    category: "Product",
    items: [
      {
        name: "Product Prototyping",
        description:
          "Quickly building functional prototypes to validate ideas and gather feedback.",
      },
      {
        name: "Zero-to-One Building",
        description:
          "Taking concepts from unclear starting points to functioning products.",
      },
      {
        name: "UX Decisions",
        description:
          "Making thoughtful user experience choices based on context and constraints.",
      },
      {
        name: "Requirement Decomposition",
        description:
          "Breaking down complex problems into implementable technical tasks.",
      },
      {
        name: "Deployment/Iteration",
        description:
          "Shipping early, gathering feedback, and iterating based on real usage.",
      },
    ],
  },
];
