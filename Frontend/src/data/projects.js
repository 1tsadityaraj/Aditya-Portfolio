export const projects = [
  {
    id: 1,
    title: "ClientFlow",
    description: "Engineered a multitenant B2B SaaS platform solving agency-client collaboration chaos. Architected a 4-tier RBAC system with org-scoped data isolation using Prisma middleware, integrated Stripe billing with webhook-driven subscription management, and built a white-label client portal — all on a Next.js 15 monolith that deploys as a single unit.",
    tech: ["Next.js 15", "PostgreSQL", "Prisma", "NextAuth", "Stripe", "Redis"],
    github: "https://github.com/1tsadityaraj/ClientFlow",
    demo: "https://client-flow-sooty.vercel.app/",
    image: "/projects/clientflow.png",
    featured: true
  },
  {
    id: 2,
    title: "System Design Visualizer",
    description: "Built a SaaS-grade architecture design tool to make system design concepts interactive and visual. Implemented an AI suggestion engine using prompt chaining, a Chaos Engineering simulator that stress-tests node failure scenarios, and real-time multi-user collaboration via Socket.io — handling concurrent diagram edits with conflict resolution.",
    tech: ["React", "Zustand", "React Flow", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/1tsadityaraj/System-Design-Visualizer",
    demo: "https://frontend-gamma-six-56.vercel.app/",
    image: "/projects/system-design-visualizer.png",
    featured: true
  },
  {
    id: 3,
    title: "AI Resume Analyzer",
    description: "Developed a full-stack ATS platform to automate the manual resume screening bottleneck. Integrated Google Gemini AI for autonomous resume parsing and job-match scoring, built interactive analytics dashboards with Recharts, and implemented SWR-based caching that reduced redundant API calls — achieving sub-second processing times per resume.",
    tech: ["React 19", "Vite", "Node.js", "Express", "MongoDB", "Gemini AI"],
    github: "https://github.com/1tsadityaraj/ai-resume-analyzer",
    demo: "https://client-blue-xi.vercel.app/",
    image: "/projects/ai-resume-analyzer.png",
    featured: true
  },
  {
    id: 4,
    title: "InsightAI",
    description: "Designed a professional crypto trading intelligence dashboard merging real-time market data with AI analysis. Orchestrated a FastAPI backend with Redis caching and background schedulers for live price feeds, implemented technical indicators (SMA, EMA, RSI, MACD) with interactive charting, and built an AI chat assistant powered by Gemini for natural-language market queries.",
    tech: ["React", "Vite", "FastAPI", "Python", "Redis", "Gemini AI"],
    github: "https://github.com/1tsadityaraj/INSIGHTAI",
    demo: "https://insightai-teal.vercel.app/",
    image: "/projects/insightai.png",
    featured: true
  },
  {
    id: 5,
    title: "ShopEasy",
    description: "Built a full-featured e-commerce storefront with product listing, cart management, and persistent state — focusing on component architecture patterns and scalable React state management.",
    tech: ["React", "JavaScript", "MongoDB"],
    github: "https://github.com/1tsadityaraj/ShopEasy",
    demo: "https://shop-easy-cyan-nu.vercel.app/",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    featured: false
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Engineered a real-time messaging app using WebSocket protocol via Socket.io, handling bidirectional event-driven communication between multiple clients with instant message delivery.",
    tech: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/1tsadityaraj/CHAT-APPLICATION",
    demo: "https://chat-application-drab-sigma.vercel.app/login",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1000&auto=format&fit=crop",
    featured: false
  },
  {
    id: 7,
    title: "ClearCut",
    description: "Developed a background removal tool integrating an external image processing API, with drag-and-drop upload, real-time preview, and optimized image handling for seamless UX.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/1tsadityaraj/CLEARCUT",
    demo: "https://clearcut-client.vercel.app/",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
    featured: false
  },
  {
    id: 8,
    title: "AI Product Recommendation",
    description: "Implemented a recommendation engine using collaborative filtering logic in Python, exposing predictions via a REST API to understand the fundamentals of ML-driven personalization.",
    tech: ["Python"],
    github: "https://github.com/1tsadityaraj/ai-product-recommendation-system",
    demo: "https://ai-product-recommendation-system-mu.vercel.app/",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    featured: false
  },
  {
    id: 9,
    title: "Weather Data Scraper",
    description: "Built an automated weather data pipeline that scrapes, processes, and visualizes meteorological data — learning web scraping patterns, API integration, and structured data handling.",
    tech: ["JavaScript"],
    github: "https://github.com/1tsadityaraj/Weather-Data-Scraper",
    demo: "https://weather-data-scraper-5xom.vercel.app/",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000&auto=format&fit=crop",
    featured: false
  }
];

