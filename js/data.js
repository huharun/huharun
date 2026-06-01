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
      aboutHeroRole: "Software Engineer | AI/ML Enthusiast | Agentic AI Developer",
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
    title: "Software Engineer | AI/ML Enthusiast | Agentic AI Developer",
    location: "Detroit, MI",
    phone: "(313) 639-7215",
    email: "arunramkrishna997@gmail.com",
    avatar: "https://drive.google.com/thumbnail?id=1E8VP68Y1TkufcYdu5VYbVew2jg-XrQOG&sz=w1000",
    resumeUrl: "https://drive.google.com/file/d/1HbQqtNja-_oMx607BQg6JHhj-SPxXyw0/preview",
    socials: {
      github: "https://github.com/huharun",
      linkedin: "https://linkedin.com/in/arun-thangapalam-7b4b4719a/",
      leetcode: "https://leetcode.com/u/huharun/",
      kaggle: "https://www.kaggle.com/arunthangapalam"
    }
  },
  intro: {
    tagline: "Computer Science professional with experience spanning full-stack application development and applied machine learning.",
    description: "Work includes backend systems, web applications, and data-driven projects across academic and professional settings, with a strong foundation in Python, JavaScript, and modern software development practices.",
    bullets: [
      "Full-stack web app development",
      "Backend APIs and database work",
      "Machine learning project development",
      "Data analysis and visualization",
      "Debugging and feature implementation"
    ]
  },
  skills: [
    {
      category: "LANGUAGES",
      items: ["Python", "PHP", "JavaScript", "C#", "HTML", "CSS", "SQL"]
    },
    {
      category: "FRAMEWORKS & TOOLS",
      items: ["React", "Node.js", "CodeIgniter", "Git", "GitHub Actions", "VS Code", "Docker", "Jupyter"]
    },
    {
      category: "AI & DATA",
      items: ["scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "MySQL", "MongoDB"]
    },
    {
      category: "CORE COMPETENCIES",
      items: ["REST APIs", "Agile", "CI/CD", "NLP", "Data Visualization"]
    }
  ],
  experience: [
    {
      role: "AI Agent Developer (Volunteer/Intern)",
      company: "Wayne State University — IntelliMake",
      period: "April 2026 — Present",
      bullets: [
        "Design and develop sophisticated AI agents with 'computer use' capabilities, enabling autonomous interaction with desktop software and browser environments.",
        "Engineered robust MQTT-based communication layers for real-time agent orchestration and distributed IoT systems.",
        "Build and test multi-step agent workflows using advanced orchestration techniques.",
        "Integrate diverse APIs and external tools into intelligent systems.",
        "Implement machine learning models to enhance agent decision-making capabilities."
      ],
      tags: ["AI Agents", "Computer Use", "MQTT", "Agentic Workflows", "API Integration", "Python", "Machine Learning"]
    },
    {
      role: "Digital Manufacturing Intern (Incoming)",
      company: "Siemens DISW",
      period: "June 2026 — July 2026",
      bullets: [
        "Incoming Summer 2026 internship focused on Digital Manufacturing systems and factory blueprint automation."
      ],
      tags: ["Digital Manufacturing", "Siemens DISW", "Incoming"]
    },
    {
      role: "Student Assistant",
      company: "Wayne State University, C&IT",
      period: "Aug 2024 — Dec 2025",
      bullets: [
        "Support classroom AV technology and campus IT infrastructure",
        "Troubleshoot hardware/software issues for faculty and students",
        "Audited and managed classroom AV assets by labeling equipment IDs and maintaining accurate CMDB records."
      ],
      tags: ["IT Support", "AV Tech", "Troubleshooting", "Asset Management"]
    },
    {
      role: "Junior Developer",
      company: "Enova Software and Hardware Solutions",
      period: "Jun 2022 — Jun 2023",
      bullets: [
        "Built and maintained backend features using CodeIgniter, PHP, and MySQL.",
        "Developed responsive web interfaces with jQuery and Ajax; automated student data processing, reducing manual workload by 40%.",
        "Collaborated in Agile sprints to deliver production-ready features.",
        "Assisted in testing, debugging, and documenting code for internal and client projects."
      ],
      tags: ["PHP", "MySQL", "jQuery", "AJAX", "CodeIgniter", "Model-View-Controller (MVC)"]
    }
  ],
  projects: [
    {
      title: "RadioPlatform",
      date: "Mar 2026",
      description: "Full-stack internet radio platform with 50,000+ live stations, infinite scroll, favorites, playlists, listening stats, and a local AI chat assistant powered by Ollama — no API key required. Built with Next.js 14, FastAPI, MongoDB, Redis, and Docker.",
      problem: "Traditional radio streaming apps rely on costly cloud APIs, lack offline capability, and fail to provide local AI assistance.",
      solution: "Engineered a microservices infrastructure using Next.js 14, FastAPI, Redis, and MongoDB, integrating local Ollama LLMs to serve users for free.",
      impact: "Supports 50k+ stations with zero API costs, sub-100ms Redis latency caching, and fully conversational local AI interaction.",
      tags: ["Next.js", "FastAPI", "MongoDB", "Redis", "Docker", "Ollama", "TypeScript"],
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
      description: "Multi-agent system for software project automation with Jira API integration",
      problem: "Developers lose up to 10 hours a week on repetitive sprint tasks, including writing Jira ticket descriptions and release summaries.",
      solution: "Built a Python-based multi-agent architecture integrating the Jira API to handle automatic description generation and tasks execution.",
      impact: "Reduced manual ticketing admin overhead by 35% and automated documentation workflows in Agile teams.",
      tags: ["Python", "AI/ML", "Jira", "Automation", "Agile", "Data Analysis"],
      icon: "cpu",
      links: [
        { label: "VIEW CODE", url: "https://github.com/huharun/agents" }
      ]
    },
    {
      title: "Kaggle Data Science Projects",
      date: "Oct 2025",
      description: "A collection of end-to-end data analysis and ML projects across diverse domains — including TED Talks virality prediction (98% accuracy with XGBoost), AI-powered resume screening, animal face classification with ResNet18 transfer learning, and EDA across Forbes Billionaires, Video Game Sales, and Google Search Trends datasets.",
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
      title: "ICL vs Fine-Tuning & Phishing Website Detection",
      date: "May 2025",
      description: "Built a Streamlit app to compare ICL vs fine-tuned NLP models (LLaMA3, DeepSeek-R1) on QA, classification, and translation tasks; evaluated using F1, Accuracy, BLEU, BERTScore, ROUGE. Developed ML pipelines for phishing URL classification with 11 models; performed feature engineering, EDA, visualization (ROC, confusion matrices); achieved 95%+ accuracy.",
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
      degree: "MS in Computer Science (AI/ML)",
      period: "Jan 2024 — Dec 2025",
      coursework: "Machine Learning, AI, Algorithms, Cybersecurity, Software Engineering"
    },
    {
      school: "United Institute of Technology",
      degree: "BE in Computer Science and Engineering",
      period: "Sep 2018 — Jul 2022",
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
    { label: "Resume.pdf", icon: "resume", size: "156 KB", url: "https://drive.google.com/file/d/1HbQqtNja-_oMx607BQg6JHhj-SPxXyw0/preview", isPdf: true },
    { label: "BE Degree.pdf", icon: "education", size: "842 KB", url: "https://drive.google.com/file/d/1y9m0y1YrFMgMHZFzAlCAi8-gJ4EfqIld/preview", isPdf: true },
    { label: "MS Degree.pdf", icon: "education", size: "920 KB", url: "https://drive.google.com/file/d/17mg4kBPyGpM5RafEbjjr3FQ8meLyAPXT/preview", isPdf: true },
    { label: "MS Transcript.pdf", icon: "doc", size: "1.1 MB", url: "https://drive.google.com/file/d/1q-xNLWPgGD8UA9fpdSVUb7U6yy8O4_Go/preview", isPdf: true }
  ],
  quotes: [
    { text: "It's easy to feel hopeful on a beautiful day like today, but there will be dark days ahead of us too. There will be days where you feel all alone. No matter how buried it gets or how lost you feel, you must promise me that you will hold on to hope. Keep it alive! We have to be greater than what we suffer.. My wish for you is to become hope... People need that... And even if we fail... what better way is there to live?", author: "Gwen Stacy" },
    { text: "Peter? I know things have been difficult lately and I'm sorry about that. I think I know what you're feeling. Ever since you were a little boy, you've been living with so many unresolved things. Well, take it from an old man. Those things send us down a road... they make us who we are. And if anyone's destined for greatness, it's you, son. You owe the world your gifts. You just have to figure out how to use them and know that wherever they take you, we'll always be here. So, come on home, Peter. You're my hero... and I love you!", author: "Uncle Ben" },
    { text: "People hate what they don't understand. But they see what you do, and they know who you are. You're not a killer. A threat... I never wanted this world to have you. Be their hero, Clark. Be their monument, be their angel, be anything they need you to be... or be none of it. You don't owe this world a thing. You never did.", author: "Martha Kent" }
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
      role: "AI Agent Developer",
      company: "IntelliMake (WSU)",
      status: "Active Now"
    },
    milestones: [
      { period: "Jun 2026 – Jul 2026", duration: "2 mos",  label: "Digital Mfg Intern @ Siemens DISW" },
      { period: "Apr 2026 – Present", duration: "3 mos",  label: "AI Agent Developer @ IntelliMake" },
      { period: "Aug 2024 – Dec 2025", duration: "1y 5m",  label: "Student IT Assistant @ WSU C&IT" },
      { period: "Jan 2024 – Dec 2025", duration: "2 yrs",   label: "MS Computer Science @ Wayne State" },
      { period: "Jun 2022 – Jun 2023", duration: "1 yr",   label: "Junior Developer @ Enova" },
      { period: "Sep 2018 – Jul 2022", duration: "4 yrs",  label: "BE Computer Science @ UIT" }
    ]
  }
};
