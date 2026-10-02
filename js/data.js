export const portfolioData = {
  config: {
    statusTitle: "Arun Thangapalam · Portfolio",
    statusBadge: "ACTIVE @ INTELLIMAKE",
    contactStatus: "Available for Collaboration",
    contactGreeting: "Hey! I'm currently working on AI agents at Wayne State. Feel free to reach out below!",
    labels: {
      navAbout: "About Me",
      navBooks: "Books",
      navExperience: "Experience",
      navProjects: "Projects",
      navContact: "Contact",
      glanceActive: "Active Focus",
      glanceComp: "Core Competencies",
      glanceTimeline: "Career Timeline",
      aboutHeroRole: "Software Engineer | AI/ML | AI Automation & Digital Manufacturing",
      aboutBioHeading: "Professional Background",
      aboutFocusHeading: "Core Focus & Competencies",
      projectsSearchPlc: "Search projects…",
      projectsNoResults: "No apps found",
      widgetProfile: "PROFILE",
      widgetGlance: "AT A GLANCE",
      widgetLauncher: "QUICK ACCESS",
      aboutWorkEmail: "Work Email",
      aboutLocation: "Location",
      aboutSocials: "Social Connections"
    }
  },
  site: {
    formspreeId: "mdklqlvn"
  },
  profile: {
    name: "Arun Thangapalam",
    title: "Software Engineer | AI/ML | AI Automation & Digital Manufacturing",
    location: "Detroit, MI",
    phoneObfuscated: "KDMxMykgNjM5LTcyMTU=",
    email: "arunramkrishna997@gmail.com",
    avatar: "https://drive.google.com/thumbnail?id=1E8VP68Y1TkufcYdu5VYbVew2jg-XrQOG&sz=w1000",
    resumeUrl: "https://drive.google.com/file/d/1JzsVEPk8lSRqN9MidSA6VJq2feLPYPIw/view",
    socials: {
      github: "https://github.com/huharun",
      linkedin: "https://linkedin.com/in/arun-thangapalam-7b4b4719a/",
      leetcode: "https://leetcode.com/u/huharun/",
      kaggle: "https://www.kaggle.com/arunthangapalam"
    }
  },
  intro: {
    tagline: "Software Engineer with experience in AI automation, digital manufacturing, full-stack development, and data-driven systems.",
    description: "Experienced in building software applications, automation solutions, and AI-driven tools across academic and industry environments.",
    bullets: [
      "AI Agent Development & Automation",
      "Digital Manufacturing & Digital Twins",
      "Full-Stack Web Development",
      "Database & Caching Systems",
      "CI/CD & DevOps Workflows"
    ]
  },
  skills: [
    {
      category: "LANGUAGES",
      items: ["Python", "PHP", "JavaScript", "TypeScript", "SQL", "C++", "HTML", "CSS"]
    },
    {
      category: "FRAMEWORKS",
      items: ["React", "Node.js", "FastAPI", "Flask", "Next.js", "CodeIgniter"]
    },
    {
      category: "AI / ML",
      items: ["PyTorch", "scikit-learn", "Pandas", "NumPy", "OpenCV", "NLP", "Ollama", "LLM Evaluation"]
    },
    {
      category: "TOOLS / CLOUD",
      items: ["MCP", "MQTT", "Docker", "Git", "GitHub Actions", "Redis", "Jupyter", "MySQL", "PostgreSQL", "Neo4j", "AWS", "GCP"]
    }
  ],
  experience: [
    {
      role: "Digital Manufacturing Intern",
      company: "Siemens DISW",
      period: "Jun 2026 – Aug 2026",
      bullets: [
        "Researched factory blueprint definitions and structured manufacturing representations across enterprise levels to support digital manufacturing and digital twin initiatives.",
        "Initiated Phase 1 development of a web-based digital twin application using TypeScript, Python, React, Neo4j, PostgreSQL, Redis, and Siemens iX, using research papers, SiemensGPT, and Claude Code within Siemens’ development environment.",
        "Proposed and prototyped an AI-expert-driven simulator for predictive maintenance and Overall Equipment Effectiveness (OEE) optimization in collaboration with Siemens’ Enterprise Intelligence team."
      ],
      tags: ["TypeScript", "Python", "React", "Neo4j", "PostgreSQL", "Redis", "Siemens iX", "SiemensGPT", "Claude Code", "Digital Twin", "Predictive Maintenance"]
    },
    {
      role: "AI Agent Developer and AI Engineer",
      company: "Wayne State University — IntelliMake Lab",
      period: "Apr 2026 – Present",
      bullets: [
        "Designed and prototyped a computer-use AI agent for computer interaction and task execution, currently integrating MCP tools for xTool laser engraver operations.",
        "Developed a separate MQTT-based dashboard and agent system for device communication and monitoring, establishing a modular architecture for swapping MCP tools and supporting integration with additional machines and devices.",
        "Served as a core technical contributor, establishing the organization’s GitHub infrastructure, solving critical technical problems, and contributing to manufacturing-focused initiatives through plant visits and technical exploration."
      ],
      tags: ["AI Agents", "MCP Tools", "MQTT", "Device Communication", "GitHub Infrastructure", "Python", "Automation"]
    },
    {
      role: "Student Assistant (IT Support)",
      company: "Wayne State University (C&IT)",
      period: "Aug 2024 – Dec 2025",
      bullets: [
        "Maintained campus AV systems and enterprise IT infrastructure ensuring high availability for faculty and students.",
        "Resolved critical hardware/software issues and managed AV asset tracking using Cherwell and TeamDynamix ITSM platforms."
      ],
      tags: ["IT Support", "Enterprise IT", "AV Systems", "Troubleshooting", "Asset Tracking", "Cherwell", "TeamDynamix"]
    },
    {
      role: "Junior Developer",
      company: "Enova Software",
      period: "Jun 2022 – Jun 2023",
      bullets: [
        "Developed and tested features for the COE Software Application using PHP, CodeIgniter, jQuery, Ajax, and MySQL.",
        "Processed and managed student data with emphasis on accuracy, security, and reliable database operations.",
        "Collaborated with cross-functional teams in an agile development environment to deliver project requirements on schedule."
      ],
      tags: ["PHP", "CodeIgniter", "jQuery", "AJAX", "MySQL", "Agile Development"]
    }
  ],
  projects: [
    {
      title: "RadioPlatform",
      date: "Mar 2026",
      description: "Engineered a full-stack live-radio platform scale-tested for 50,000+ stations, using Redis caching to reduce database overhead and improve streaming performance. Integrated a local Ollama-based AI assistant to provide privacy-focused inference without external API dependencies.",
      problem: "Traditional radio streaming apps rely on costly cloud APIs, lack offline capability, and fail to provide local AI assistance.",
      solution: "Engineered a microservices infrastructure using Next.js, FastAPI, Redis, and PostgreSQL, integrating local Ollama LLMs to serve users.",
      impact: "Supports 50k+ stations with zero API costs, sub-100ms Redis latency caching, and fully conversational local AI interaction.",
      tags: ["TypeScript", "Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker", "Ollama"],
      icon: "radio",
      links: [
        { label: "VIEW CODE", url: "https://github.com/huharun/radio-platform" }
      ]
    },
    {
      title: "Service Status Page",
      date: "Jan 2026",
      description: "Production-ready status monitoring app built with Spring Boot — track service health, manage incidents, and display real-time status to users. Features a secure admin panel, full CRUD operations, severity levels, and 6 unit tests with 100% pass rate.",
      problem: "Local deployments lack centralized status monitors, leading to communication lag during outages or incidents.",
      solution: "Developed a secure dashboard using Spring Boot and Spring Security, backed by JPA/Hibernate and H2 database configurations. Implemented MockMVC testing.",
      impact: "Achieved 100% pass rates across unit tests, instant incident reporting, and robust role-based admin controls.",
      tags: ["Java", "Spring Boot", "Spring Security", "JPA / Hibernate", "Thymeleaf", "JUnit 5", "H2"],
      icon: "activity",
      links: [
        { label: "VIEW CODE", url: "https://github.com/huharun/statuspage" }
      ]
    },
    {
      title: "DevSwarm",
      date: "Nov 2025",
      description: "Engineered a multi-agent system using Google ADK and Jira APIs to automate Agile workflows and technical documentation. Reduced manual sprint tracking and documentation workload by approximately 35%.",
      problem: "Developers lose time on repetitive sprint tasks, including writing Jira ticket descriptions and release summaries.",
      solution: "Built a Python-based multi-agent architecture integrating the Jira API to handle automatic description generation and tasks execution.",
      impact: "Reduced manual ticketing admin overhead by 35% and automated documentation workflows in Agile teams.",
      tags: ["Python", "Google ADK", "Jira API", "AI Agents", "Automation", "Agile"],
      icon: "cpu",
      links: [
        { label: "VIEW CODE", url: "https://github.com/huharun/agents" }
      ]
    },
    {
      title: "AI Telegram Tutor",
      date: "Oct 2025",
      description: "Built a fully local AI English tutor that processes Telegram messages, performs grammar correction, and maintains persistent conversation history. Orchestrated Telegram, Ollama, PostgreSQL, and n8n workflows with Docker for reproducible local deployment.",
      problem: "Language tutors often require subscription fees, store private conversation histories in the cloud, and lack easy local deployment options.",
      solution: "Developed a fully local translation and tutoring agent using Ollama, integrated into Telegram through n8n workflows and backed by a local PostgreSQL database.",
      impact: "Established a completely private, cost-free grammar correction and chat bot with easy, reproducible Docker deployment.",
      tags: ["Python", "Ollama", "n8n", "PostgreSQL", "Docker", "Telegram API", "AI/ML"],
      icon: "contact",
      links: []
    },
    {
      title: "Kaggle Data Science Projects",
      date: "Oct 2025",
      description: "A collection of end-to-end data analysis and ML projects using Google ADK across diverse domains — including TED Talks virality prediction (98% accuracy with XGBoost), AI-powered resume screening, animal face classification with ResNet18 transfer learning, and EDA across Google Search Trends datasets.",
      problem: "Glean insights from massive unstructured data pools and choose optimal ML models across diverse domains.",
      solution: "Developed extensive pipelines with XGBoost, CatBoost, and PyTorch (ResNet18) transfer learning. Used TF-IDF and NLP vectors.",
      impact: "Achieved 98% accuracy on TED Talks virality forecasting and built a reliable resume screening engine.",
      tags: ["Python", "XGBoost", "PyTorch", "scikit-learn", "ResNet18", "CatBoost", "TF-IDF", "EDA"],
      icon: "activity",
      links: [
        { label: "VIEW CODE", url: "https://github.com/huharun/kaggle_projects" },
        { label: "VIEW KAGGLE PROFILE", url: "https://www.kaggle.com/arunthangapalam" }
      ]
    },
    {
      title: "ML Benchmarking & Phishing Detection",
      date: "May 2025",
      description: "Trained and evaluated 11 classical and deep machine learning models for high-accuracy phishing classification, developing a production-ready LLM evaluation pipeline to compare system performance and achieving 95%+ accuracy.",
      problem: "Selecting between In-Context Learning and fine-tuning is complex, while malicious phishing URLs require efficient detection.",
      solution: "Constructed a Streamlit portal evaluating BLEU/ROUGE on LLMs. Built 11 separate classification models (Random Forest, SVM, etc.) for URL defense.",
      impact: "Recorded 95%+ phishing classification accuracy and provided comprehensive LLM evaluation matrices.",
      tags: ["Python", "HuggingFace", "Streamlit", "scikit-learn", "Pandas", "Data Viz", "NLP", "ML Metrics"],
      icon: "shield",
      links: [
        { label: "VIEW ICL CODE", url: "https://github.com/huharun/icl_vs_finetuning" },
        { label: "VIEW PHISHING CODE", url: "https://github.com/huharun/project_IS" }
      ]
    },
    {
      title: "Driveway Sealing Management System",
      date: "Dec 2024",
      description: "Created a React/MySQL platform for client registration, quotes, billing, and dashboards; added PDF export, image uploads, session management. Implemented OpenStreetMap address autofetch, chat, pop-up modals, role-based dashboards, and SQL reporting for client-contractor workflows.",
      problem: "Small contractors face manual scheduling bottlenecks, messy paperwork, and slow invoice generation.",
      solution: "Created a React web application with a PHP REST backend and MySQL database. Added OpenStreetMap autofetch, jsPDF billing, and SQL reports.",
      impact: "Reduced client-contractor scheduling time by 40% and fully digitized invoicing flows.",
      tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "OpenStreetMap", "jsPDF", "REST APIs"],
      icon: "box",
      links: [
        { label: "VIEW CODE", url: "https://github.com/huharun/reactmysql/tree/main/project2" }
      ]
    }
  ],
  education: [
    {
      school: "Wayne State University",
      degree: "M.S. Computer Science (AI/ML)",
      period: "Jan 2024 – Dec 2025",
      coursework: "Machine Learning, AI, Algorithms, Cybersecurity, Software Engineering"
    },
    {
      school: "United Institute of Technology",
      degree: "B.E. Computer Science",
      period: "Sep 2018 – Jul 2022",
      coursework: "Data Structures & Algorithms, OOPS, DBMS, Internet Programming, Cloud Computing"
    }
  ],
  leadership: [
    {
      role: "Secretary, CSE Dept Association",
      period: "2021–2022"
    },
    {
      role: "Member, CSE Dept Association",
      period: "2019–2020"
    },
    {
      role: "Hockey Player, United Institute of Technology (UIT)",
      period: "2018–2022"
    },
    {
      role: "Ball Badminton, Divisional Level Player",
      period: "School Level"
    }
  ],

  files: [
    { label: "Resume.pdf", icon: "resume", size: "156 KB", url: "https://drive.google.com/file/d/1JzsVEPk8lSRqN9MidSA6VJq2feLPYPIw/view", isPdf: true },
    { label: "BE Degree.pdf", icon: "education", size: "842 KB", url: "https://drive.google.com/file/d/1y9m0y1YrFMgMHZFzAlCAi8-gJ4EfqIld/preview", isPdf: true },
    { label: "MS Degree.pdf", icon: "education", size: "920 KB", url: "https://drive.google.com/file/d/17mg4kBPyGpM5RafEbjjr3FQ8meLyAPXT/preview", isPdf: true },
    { label: "MS Transcript.pdf", icon: "doc", size: "1.1 MB", url: "https://drive.google.com/file/d/1q-xNLWPgGD8UA9fpdSVUb7U6yy8O4_Go/preview", isPdf: true }
  ],
  quotes: [
    { text: "It's easy to feel hopeful on a beautiful day like today, but there will be dark days ahead of us too. There will be days where you feel all alone. No matter how buried it gets or how lost you feel, you must promise me that you will hold on to hope. Keep it alive! We have to be greater than what we suffer.. My wish for you is to become hope... People need that... And even if we fail... what better way is there to live?", author: "Gwen Stacy" },
    { text: "Peter? I know things have been difficult lately and I'm sorry about that. I think I know what you're feeling. Ever since you were a little boy, you've been living with so many unresolved things. Well, take it from an old man. Those things send us down a road... they make us who we are. And if anyone's destined for greatness, it's you, son. You owe the world your gifts. You just have to figure out how to use them and know that wherever they take you, we'll always be here. So, come on home, Peter. You're my hero... and I love you!", author: "Uncle Ben" },
    { text: "People hate what they don't understand. But they see what you do, and they know who you are. You're not a killer. A threat... I never wanted this world to have you. Be their hero, Clark. Be their monument, be their angel, be anything they need you to be... or be none of it. You don't owe this world a thing. You never did.", author: "Martha Kent" },
    { text: "Men are still good. We fight. We kill. We betray one another. But we can rebuild. We can do better. We will. We have to.", author: "Bruce Wayne" }
  ],
  repeatVideos: [
    "UgHq7cZLr_c?si=DKu6nQL4_H1IxmXD&start=161"
  ],
  soundtrack: [
    "0UWa0AdUscdQUI7mjjx6G1", "3OJK0HKdgMiZBTsdLZoAhI", "717udbypnRK5wccr1kAkRU", "28DF6KjGAnplw4VloHNSqX",
    "5NFAE8XxEjBrpNu4tEvhqG", "31n5hquEG1tkwzizOAlj0K", "2UUzNIZYWb5bsWB04MF4nE",
    "6ZFbXIJkuI1dVNWvzJzown", "6pWgRkpqVfxnj3WuIcJ7WP", "6GUq9y0Iy5QrAuPYxTrFp2",
    "45pKftYJKDnAuNYgGHcddL", "2IyGOqfMGTqCmtBuK7SLhl", "0ASvZIiB2Ml32DlUhfaOhx",
    "230c2NbBx9DarJ4GSiZFTr", "4VnDmjYCZkyeqeb0NIKqdA", "5maXVyAZAkkB3Cf0vca9CY",
    "1Qr17u2S9kNDzTeWAJCY5N", "6h4K1cMkBmJn9FsJ1CCaH6",
    "5UeIwcUIKTVPqBnuXnhmBD", "4FS6WVtI9qTVwZlc0QfwnN", "6g1UKfOWkPmCGaRTwVYntG"
  ],

  glance: {
    current: {
      role: "AI Agent Developer & AI Engineer",
      company: "IntelliMake (WSU)",
      status: "Active Now"
    },
    milestones: [
      { period: "Jun 2026 – Aug 2026", duration: "3 mos",  label: "Digital Mfg Intern @ Siemens DISW" },
      { period: "Apr 2026 – Present", duration: "5 mos",  label: "AI Agent Developer @ IntelliMake" },
      { period: "Aug 2024 – Dec 2025", duration: "1y 5m",  label: "Student IT Assistant @ WSU C&IT" },
      { period: "Jan 2024 – Dec 2025", duration: "2 yrs",   label: "MS Computer Science @ Wayne State" },
      { period: "Jun 2022 – Jun 2023", duration: "1 yr",   label: "Junior Developer @ Enova" },
      { period: "Sep 2018 – Jul 2022", duration: "4 yrs",  label: "BE Computer Science @ UIT" }
    ]
  }
};
