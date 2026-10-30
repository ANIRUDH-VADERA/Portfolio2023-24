import about2 from "../images/about02.gif";
import about3 from "../images/about03.gif";
import about4 from  "../images/about04.gif";

import icon8 from "../images/icons_sql_light.svg";
import icon9 from "../images/icons_github_light.svg";
import icon10 from "../images/icons_git_light.svg";
import icon3 from "../images/icons_js_light.svg";
import icon12 from "../images/icons_python_light.svg";
import icon17 from "../images/icons_sap.png";

import projectImage1 from "../images/projects_adg_recruitment.png";
import projectImage6 from "../images/projects_dv.png";
import projectImage8 from "../images/projects_ch_ext.png";
import projectImage9 from "../images/projects_utility.png";
import projectImage10 from "../images/projects_ism.png";  
import projectImage11 from "../images/projects_nlp.png"
import projectImage12 from "../images/projects_portfolio.png"
import projectImage13 from "../images/projects_micro.png"
import walmartInternalImage from "../images/walmart.png";

const projects = [
  {
    src: walmartInternalImage,
    title: "Cloud Storage Archival Framework",
    subtitle: "104 TB archived, $45,000 saved every year",
    info: "Python | GCP Storage Transfer Service | AutoClass | BigQuery",
    desc:"Owned the ledger data archival initiative end to end (design, approvals, leadership updates, RCA). Built a reusable Python service on GCP Storage Transfer Service that selects 13+ month-old objects by last-modified time and moves them into an AutoClass-enabled archival bucket, archiving 104 TB and saving $45,000 per year in storage and BigQuery costs."
  },
  {
    src:walmartInternalImage,
    title: "CodeSage AI",
    subtitle: "Finalist, Walmart FDF AI Hackathon",
    info: "LLMs | RAG | ChromaDB | NetworkX | Entity Linking",
    desc:"Built an LLM pipeline that indexed 53,000 documents from 561 repositories, 1,386 incidents, and 43 RCAs, linking entities in a NetworkX knowledge graph backed by ChromaDB to synthesize cross-document wiki pages. Modeled individual, team, and org knowledge bases for 1,287 users to reduce LLM hallucinations."
  },
  {
    src:walmartInternalImage,
    title: "TwinAI",
    subtitle: "A queryable digital twin of an engineer",
    info: "LLMs | RAG | ChromaDB | Digital Twin | Passive Event Capture",
    desc:"Built a passive agent that captures IDE, terminal, browser, and LLM activity into a queryable digital twin of an engineer, and designed its hierarchical knowledge storage. It is now a team project used by the entire team."
  },
  {
    src:walmartInternalImage,
    title: "Audit Event Listener",
    subtitle: "Scala/ZIO event processing at 100K events/s",
    info: "Scala | ZIO | Pub/Sub | Backpressure | Idempotency",
    desc:"Designed the Scala/ZIO Audit Event Listener with Pub/Sub backpressure, idempotent deduplication, and stuck-event recovery, cutting latency by 2-3 seconds per event and clearing a 100K-message backlog 3 hours faster."
  },
  {
    src:projectImage12,
    title: "Portfolio",
    subtitle: "Interactive personal portfolio",
    info: "React | Three.js | React Three Fiber | Framer Motion",
    link:"https://anirudh-vadera.github.io/portfolio/",
    desc:"The React and Three.js portfolio you are browsing, built as an interactive presentation of my work and background."
  },
  {
    src:projectImage8,
    title: "Web Assist Chrome Extension",
    subtitle: "Browser assistant for complex websites",
    info: "JavaScript | Chrome Extension API | CSS | Background Network Handling",
    link:"https://github.com/ANIRUDH-VADERA/WEB_ASSIST",
    desc:"Built a Chrome extension for navigating complex websites and inspecting page content properties."
  },
  {
    src:projectImage11,
    title: "Relevant Document Retrieval",
    subtitle: "Finding the right document from a large corpus",
    info: "#NLP #DocumentRetrieval #BM25",
    link:"https://github.com/ANIRUDH-VADERA/RELEVANT-DOCUMENT-RETRIEVAL",
    desc:"Built an NLP-based retrieval project to identify relevant documents from a large collection of files."
  },
  {
    src:projectImage1,
    title: "ADG Recruitment Platform",
    subtitle: "Internal platform for Apple Developers Group VIT",
    info: "React | Node.js | MongoDB | Express",
    link:"https://github.com/ANIRUDH-VADERA/Recruitment_Portal_ADG",
    desc:"Contributed to a recruitment web app for ADG VIT and helped deliver club web projects including the official website and link tree."
  },
  {
    src:projectImage13,
    title: "MINECO - Mine Gas Safety System",
    subtitle: "IoT prototype for hazardous gas detection",
    info: "ESP32 | Arduino | C++ | MQ135 | DHT11",
    link:"https://github.com/ANIRUDH-VADERA/MINECO",
    desc:"Built an IoT safety prototype that detects gas releases and temperature changes in mine environments using ESP32-connected sensors."
  },
  {
    src:projectImage6,
    title: "Space Exploration",
    subtitle: "Unravelling The Secrets Of Dark Matter",
    info: "#DataScience #R #Visualization",
    link:"https://github.com/ANIRUDH-VADERA/Space_Exploration",
    desc:"A visualization dashboard project for exploring space and dark matter datasets."
  },
  {
    src:projectImage10,
    title: "Chat App with Steganography",
    subtitle: "Secure your chats with steganography techniques",
    info: "#ChatApp #Steganography #Node",
    link:"https://github.com/ANIRUDH-VADERA/ISM_Project",
    desc:"Built a chat app concept where messages can be encoded inside images and viewed only by authorized users."
  },
  {
    src:projectImage9,
    title: "Utility Package",
    subtitle: "A collection of smaller apps and backend utilities",
    info: "#BackendProjects #UtilityApps",
    link:"https://transcendent-squirrel-e70c0d.netlify.app",
    desc:"A collection of additional utility projects and experiments built across web and backend workflows."
  },
];


  const services = [
    {
      title: "Distributed Systems Engineer",
      icon: about3,
      desc: "I build event-driven finance systems, microservices, and data pipelines that process high-volume business transactions reliably.",
      link : "https://github.com/ANIRUDH-VADERA"
    },
    {
      title: "Cloud Data Platform Builder",
      icon: about2,
      desc : "I work hands-on with GCP, BigQuery, Cloud Storage, Spark, Kafka, PostgreSQL, Airflow, Kubernetes, and ArgoCD.",
      link : "https://tech.walmart.com/content/walmart-global-tech/en_us.html"
    },
    {
      title: "Competitive Programmer",
      icon: about4,
      desc : "LeetCode Knight, top 5% globally, with 1000+ solved problems and a 1981 peak rating.",
      link : "https://leetcode.com/u/anirudh00711/"
    },
  ];

const impactHighlights = [
  { value: "85%", label: "of Walmart's revenue recorded by the financial ledger platform I work on" },
  { value: "104 TB", label: "of ledger data archived to lower-cost cloud storage" },
  { value: "$45K", label: "annual cloud savings delivered" },
  { value: "50%", label: "fewer production failures from a regression testing library" },
];

const achievementHighlights = [
  "Making a Difference Award at Walmart Global Tech for FY 2025.",
  "Finalist in Walmart FDF AI Hackathon for an LLM-powered org wiki generation pipeline.",
  "LeetCode Knight, top 5% globally, 1000+ problems solved, peak rating 1981.",
  "Merit Scholarship recipient at VIT Vellore for 2020-2021 and 2021-2022.",
  "Program Representative for CSE CORE at VIT for 2021-2022 and 2022-2023.",
];

const certifications = [
  "Generative AI Architectures with LLMs, Prompt Engineering, RAG, and Vector Databases",
  "Big Data Analysis with Scala and Spark",
  "Functional Programming Principles in Scala",
  "Functional Program Design in Scala",
  "Parallel Programming",
  "Functional Programming in Scala Capstone",
  "The Complete Web Development Bootcamp 2023",
];
  
  const technologies = [
    {
        name: "Scala",
        category: "Backend",
        short: "Sc",
    },
    {
        name: "Python",
        category: "Data Engineering",
        bgColor :"",
        icon: icon12
    },
    {
      name: "SQL",
      category: "Data",
      short: "SQL",
    },
    {
        name: "Apache Spark",
        category: "Big Data",
        short: "Sp",
    },
    {
        name: "Spark Streaming",
        category: "Streaming",
        short: "SS",
    },
    {
        name: "Kafka",
        category: "Event Streaming",
        short: "Kf",
    },
    {
        name: "Google Cloud Platform",
        category: "Cloud",
        short: "GCP",
    },
    {
        name: "BigQuery",
        category: "Analytics",
        short: "BQ",
    },
    {
        name: "Cloud Storage",
        category: "Cloud Data",
        short: "GCS",
    },
    {
      name: "Pub/Sub",
      category: "Messaging",
      short: "PS",
    },
    {
      name: "Data Movement Services",
      category: "Cloud Data",
      short: "DMS",
    },
    {
      name: "Scheduled Queries",
      category: "BigQuery",
      short: "SQ",
    },
    {
      name: "AutoClass",
      category: "Cloud Storage",
      short: "AC",
    },
    {
      name: "PostgreSQL",
      category: "Databases",
      bgColor :"",
      icon: icon8
    },
    {
      name: "MySQL",
      category: "Databases",
      short: "My",
    },
    {
      name: "Flyway",
      category: "Database Migrations",
      short: "Fly",
    },
    {
      name: "Kubernetes",
      category: "Infrastructure",
      short: "K8s",
    },
    {
      name: "ArgoCD",
      category: "Delivery",
      short: "Argo",
    },
    {
      name: "Airflow",
      category: "Orchestration",
      short: "Air",
    },
    {
      name: "REST APIs",
      category: "Backend",
      short: "API",
    },
    {
      name: "API Management",
      category: "Backend",
      short: "APM",
    },
    {
      name: "Microservices",
      category: "Backend",
      short: "MS",
    },
    {
      name: "Distributed Systems",
      category: "Architecture",
      short: "DS",
    },
    {
      name: "Event-Driven Architecture",
      category: "Architecture",
      short: "EDA",
    },
    {
      name: "ETL Pipelines",
      category: "Data Modeling",
      short: "ETL",
    },
    {
      name: "Data Modeling",
      category: "Data Engineering",
      short: "DM",
    },
    {
      name: "PySpark",
      category: "Data Engineering",
      short: "PyS",
    },
    {
      name: "Storage Transfer Service",
      category: "Cloud Data",
      short: "STS",
    },
    {
      name: "Cloud Cost Optimization",
      category: "Cloud FinOps",
      short: "CCO",
    },
    {
      name: "Financial Reconciliation",
      category: "Finance Tech",
      short: "Recon",
    },
    {
      name: "SAP Acknowledgements",
      category: "Finance Tech",
      short: "Ack",
    },
    {
      name: "LLM / RAG",
      category: "AI Systems",
      short: "AI",
    },
    {
      name: "Vector DB",
      category: "AI Systems",
      short: "VDB",
    },
    {
      name: "Graph DB",
      category: "AI Systems",
      short: "GDB",
    },
    {
      name: "ZIO",
      category: "Scala",
      short: "ZIO",
    },
    {
      name: "Akka",
      category: "Scala",
      short: "Ak",
    },
    {
      name: "Apache Camel",
      category: "Integration",
      short: "Cam",
    },
    {
      name: "JavaScript",
      category: "Web",
      bgColor :"",
      icon: icon3
    },
    {
      name: "SAP ABAP",
      category: "Finance Tech",
      bgColor :"",
      icon: icon17
    },
    {
      name: "SAP",
      category: "Finance Tech",
      short: "SAP",
    },
    {
      name: "Chrome Extensions",
      category: "Web",
      short: "CE",
    },
    {
      name: "ScalaTest",
      category: "Testing",
      short: "ST",
    },
    {
      name: "Mockito",
      category: "Testing",
      short: "Mo",
    },
    {
      name: "Integration Testing",
      category: "Testing",
      short: "IT",
    },
    {
      name: "CI/CD",
      category: "Delivery",
      short: "CI",
    },
    {
      name: "GitHub",
      category: "Developer Tools",
      bgColor :"",
      icon: icon9
    },
    {
      name: "Git",
      category: "Developer Tools",
      bgColor :"",
      icon: icon10
    },
]  

let experience = [
  {
    id: 1,
    title: "Walmart Global Tech | Software Engineer III | Finance Technology",
    location: "Chennai, Tamil Nadu, India",
    details: [
      "Expanded Walmart's financial ledger to 6 LATAM countries (10% of global business) and 200+ sources by designing per-country isolation (Kafka, GCS, PostgreSQL), posting 10M transactions to SAP in 7 days.",
      "Designed LATAM journal splitting into balanced SAP documents (max 995 line items, each under SAP's 99.99 billion local-currency limit) with exchange-rate conversion, achieving zero rejections across 100,000 documents.",
      "Re-architected the SAP acknowledgement flow from hourly batch to sub-second Kafka and Spark Streaming.",
      "Authored 20+ design docs, led design reviews, mentored 2 interns, and led 10+ incident reviews."
    ],
      date: "May 2026 - Present",
    icon: "work",
    school: "walmart",
    buttonText: "View Website",
    buttonUrl: 'https://tech.walmart.com/content/walmart-global-tech/en_us.html',
  },
  {
    id: 2,
    title: "Walmart Global Tech | Software Engineer II | Finance Technology",
    location: "Chennai, Tamil Nadu, India",
    details: [
      "Designed the Scala/ZIO Audit Event Listener (100K events/s) with Pub/Sub backpressure, idempotent dedup, and stuck-event recovery, cutting latency by 2-3 s/event and clearing a 100K-message backlog 3 hours faster.",
      "Cut a PySpark-to-PostgreSQL upsert job from 3 hours to 13 minutes by bulk-loading with COPY into unlogged staging tables to skip WAL overhead.",
      "Designed 7 lead-company-code strategies for batch tax assignment, improving tax accuracy by 20%.",
      "Owned the ledger data archival initiative end to end, archiving 104 TB of 13+ month-old data and saving $45,000 per year in storage and BigQuery costs."
    ],
      date: "July 2024 - April 2026",
    icon: "work",
    school: "walmart",
    buttonText: "View Website",
    buttonUrl: 'https://tech.walmart.com/content/walmart-global-tech/en_us.html',
  },
  {
    id: 3,
    title: "Walmart Global Tech | Software Engineering Intern | Finance Technology",
    location: "Chennai, Tamil Nadu, India",
    details: [
      "Built a generic regression testing library (Kafka, Pub/Sub, ingestion harnesses) covering 50+ business rules across 128+ repositories, reducing production failures by 50% and release cycles by 30%.",
      "Built real-time reconciliation, error-log alerting, and automated incident creation on Akka with alert deduplication, cutting time to detect by 90% and time to resolve by 20%."
    ],
      date: "May 2023 - July 2023; January 2024 - June 2024",
    icon: "work",
    school: "walmart",
    buttonText: "View Website",
    buttonUrl: 'https://tech.walmart.com/content/walmart-global-tech/en_us.html',
  }
];

let campusOrganizations = [
  {
    id: 1,
    title: "Apple Developers Group VIT",
    role: "Senior Core Member | Web Development",
    location: "Vellore, Tamil Nadu, India",
    date: "December 2020 - April 2024",
    imageKey: "adg",
    details: [
      "Built recruitment, official website, Link Tree, and CSS generator projects for internal club use.",
      "Conducted React training sessions and helped onboard new members into web development projects.",
      "Collaborated with design, content, and operations domains to deliver club applications and event tooling.",
      "Runner-up in the ADG intra-club hackathon in 2021."
    ]
  },
  {
    id: 2,
    title: "Technology and Gaming Club VIT",
    role: "Core Member | Web Development and Game Management",
    location: "Vellore, Tamil Nadu, India",
    date: "December 2020 - December 2021",
    imageKey: "tag",
    details: [
      "Contributed to GAME-A-THON, the club's flagship event.",
      "Supported the TAG Cypher intra-club gaming tournament and game-management workflows.",
      "Hosted a CS:GO server on AWS for tournament participants."
    ]
  }
];


let timelineElements = [
  {
    id: 3,
    title: "Vellore Institute Of Technology, Vellore",
    location: "Vellore, Tamil Nadu, India",
    description:
      "Bachelor of Technology in Computer Science and Engineering with a CGPA of 9.53 / 10.",
    buttonText: "View School Website",
    date: "September 2020 - April 2024",
    icon: "work",
    school: "vit",
    buttonUrl: 'https://vit.ac.in/',
    add:"Branch : Computer Science and Engineering (CORE)"
  },
  {
    id: 2,
    title: "Army Public School - (Class XII)",
    location: "Nehru Road, Lucknow, Uttar Pradesh, India",
    description:
      "Completed Class XII with 95.6% in PCM with Computer Science before pursuing engineering in Computer Science.",
    buttonText: "View School Website",
    date: "April 2019 - April 2020",
    icon: "school",
    school: "aps",
    buttonUrl: 'https://www.apsnrlucknow.org/',
    add:"Branch : PCM with Computer Science"
  },
  {
    id: 1,
    title: "Army Public School - (Class X)",
    location: "Nehru Road, Lucknow, Uttar Pradesh, India",
    description:
      "Completed Class X with 92.4%, building the academic base that led into PCM and Computer Science.",
    buttonText: "View School Website",
    date: "April 2017 - April 2018",
    icon: "school",
    school: "aps",
    buttonUrl: 'https://www.apsnrlucknow.org/',
    add:"Branch : PCM with Computer Science"
  }
];


const MenuData = [
      {
          title: "Home",
          url: "Home",
          cName : "nav-links",
          icon : "fa-solid fa-house-user"
      },
      {
          title: "About",
          url: "About",
          cName : "nav-links",
          icon : "fa-solid fa-circle-info"
      },
      {
        title: "Work Experience",
        url: "Experience",
        cName : "nav-links",
        icon : "fa-solid fa-briefcase"
      },
      {
        title: "Skills",
        url: "Skills",
        cName : "nav-links",
        icon : "fa-solid fa-book-atlas"
      },
      {
        title: "Projects",
        url: "Projects",
        cName : "nav-links",
        icon : "fa-solid fa-diagram-project"
      },
      {
          title: "Education",
          url: "Education",
          cName : "nav-links",
          icon : "fa-solid fa-school"
      },
        {
          title: "Campus Clubs",
          url: "Campus",
          cName : "nav-links",
          icon : "fa-solid fa-users"
        },
      {
          title: "Contact",
          url: "Contact",
          cName : "nav-links",
          icon : "fa-solid fa-address-book"
      },
  ];


  export { services,MenuData,timelineElements,technologies,projects,experience,campusOrganizations,impactHighlights,achievementHighlights,certifications };