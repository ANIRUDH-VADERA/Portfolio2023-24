import about1 from "../images/about01.gif";
import about2 from "../images/about02.gif";
import about3 from "../images/about03.gif";
import about4 from  "../images/about04.gif";

import icon1 from "../images/icons_html_light.svg";
import icon2 from "../images/icons_css_light.svg";
import icon4 from "../images/icons_bs_light.svg";
import icon5 from "../images/icons_figma_light.svg";
import icon6 from "../images/icons_react_light.svg";
import icon7 from "../images/icons_mongodb_light.svg";
import icon8 from "../images/icons_sql_light.svg";
import icon9 from "../images/icons_github_light.svg";
import icon10 from "../images/icons_git_light.svg";
import icon3 from "../images/icons_js_light.svg";
import icon11 from "../images/icons_vs_light.svg";
import icon12 from "../images/icons_python_light.svg";
import icon13 from "../images/icons_mat_light.svg";
import icon14 from "../images/icons_c_light.svg";
import icon15 from "../images/icons_java_light.svg";
import icon16 from "../images/icons_node_light.svg";
import icon17 from "../images/icons_sap.png";
import icon18 from "../images/icons_mui.png"

import projectImage1 from "../images/projects_adg_recruitment.png";
import projectImage6 from "../images/projects_dv.png";
import projectImage8 from "../images/projects_ch_ext.png";
import projectImage9 from "../images/projects_utility.png";
import projectImage10 from "../images/projects_ism.png";  
import projectImage11 from "../images/projects_nlp.png"
import projectImage12 from "../images/projects_portfolio.png"
import projectImage13 from "../images/projects_micro.png"

const projects = [
  {
    src:projectImage8,
    title: "Web Assist A Chrome Extension",
    subtitle: "Complex Websites? Web Assist For The Save",
    info: "#ChromeExtension #WordNick-API",
    link:"https://github.com/ANIRUDH-VADERA/WEB_ASSIST",
    desc:"A Utility App to help you in searching components anywhere in a website and giving you the meaning of everything."
  },
  {
    src:projectImage1,
    title: "ADG Recruitment Website",
    subtitle: "ADG(Apple Developers Group) VIT, Vellore",
    info: "#React #Nodejs #MongoDB #Express",
    link:"https://github.com/ANIRUDH-VADERA/Recruitment_Portal_ADG",
    desc:"A React Project to help with the recruitment process at ADG VIT"
  },
  {
    src:projectImage6,
    title: "Space Exploration",
    subtitle: "Unravelling The Secrets Of Dark Matter",
    info: "#DataScience #R #Visualization",
    link:"https://github.com/ANIRUDH-VADERA/Space_Exploration",
    desc:"A Visualization dashboards that will come in handy if a catastrophic asteroid attack happens."
  },
  {
    src:projectImage13,
    title: "MINECO",
    subtitle: "Getting Deep Underground",
    info: "#ARDUINO #IOT #ThingsSpeak",
    link:"https://github.com/ANIRUDH-VADERA/MINECO",
    desc:"A Safety measure for miners to safegaurd them from harmful gas releases."
  },
  {
    src:projectImage10,
    title: "Chat App with Steganography",
    subtitle: "Secure your chats with Steganography techniques",
    info: "#ChatApp #Steganography #Node",
    link:"https://github.com/ANIRUDH-VADERA/ISM_Project",
    desc:"Now you can send messages enscribed in an image which only authorized persons can view."
  },
  {
    src:projectImage11,
    title: "Relevant Document Retrieval",
    subtitle: "Can't Find your Documents?",
    info: "#NLP #DocumentRetrieval #BM-25",
    link:"https://github.com/ANIRUDH-VADERA/RELEVANT-DOCUMENT-RETRIEVAL",
    desc:"A NLP based project to get the relevant documents from a bundle of large number of documents."
  },
  {
    src:projectImage12,
    title: "Portfolio",
    subtitle: "I guess i have seen it somewhere?",
    info: "#React #ThreeJS",
    link:"https://github.com/ANIRUDH-VADERA/Portfolio",
    desc:"How about browse what you have been scrolling so far."
  },
  {
    src:projectImage9,
    title: "Utility Package",
    subtitle: "It doesnt end here",
    info: "#BackendProjects #Utility Apps",
    link:"https://transcendent-squirrel-e70c0d.netlify.app",
    desc:"Do View some of the other interesting projects that i have made."
  },
];


  const services = [
    {
      title: "MERN Developer",
      icon: about3,
      desc: "I code, server-side applications, and databases that, when combined with front-end codes, help create a seamless experience for the end-user.",
      link : "https://github.com/ANIRUDH-VADERA"
    },
    {
      title: "Competetive Coder",
      icon: about2,
      desc : "I absolutely love DSA. My strong areas are Trees and Graphs but i am equally strong in other areas as well.",
      link : "https://leetcode.com/AnirudhVadera/"
    },
    {
      title: "Wanna Know more About Me? Download My Resume",
      icon: about4,
      desc : "Click Here to Download My Resume",
      link : "https://drive.google.com/file/d/1E2_1MFi4qSVWeR7SUDqRqrbGvjqvY0ew/view?usp=share_link"
    },
  ];
  
  const technologies = [
    {
        name: "HTML",
        bgColor :"",
        icon: icon1
    },
    {
        name: "CSS",
        bgColor :"",
        icon: icon2
    },
    {
        name: "JAVASCRIPT",
        bgColor :"",
        icon: icon3
    },
    {
        name: "BOOTSTRAP",
        bgColor :"",
        icon: icon4
    },
    {
      name: "FIGMA",
      bgColor :"",
      icon: icon5
    },
    {
      name: "REACT",
      bgColor :"",
      icon: icon6
    },
    {
      name: "NODEJS",
      bgColor :"",
      icon: icon16
    },
    {
      name: "MONGODB",
      bgColor :"",
      icon: icon7
    },
    {
      name: "MY_SQL",
      bgColor :"",
      icon: icon8
    },
    {
      name: "SAP ABAP",
      bgColor :"",
      icon: icon17
    },
    {
      name: "Material UI",
      bgColor :"",
      icon: icon18
    },
    {
      name: "GITHUB",
      bgColor :"",
      icon: icon9
    },
    {
      name: "GIT",
      bgColor :"",
      icon: icon10
    },
    {
      name: "VSCODE",
      bgColor :"",
      icon: icon11
    },
    {
      name: "PYTHON",
      bgColor :"",
      icon: icon12
    },
    {
      name: "MATLAB",
      bgColor :"",
      icon: icon13
    },
    {
      name: "C",
      bgColor :"",
      icon: icon14
    },
    {
      name: "JAVA",
      bgColor :"",
      icon: icon15
    },
]  

let experience = [
  {
    id: 1,
    title: "WALMART GLOBAL TECH | SDE Internship | SAP ABAP Developer",
    location: "Chennai, Tamil Nadu, India",
    desc1:
      "> BANK ACCOUNT MASTER FILE: The requirement was to get all the information related to GL accounts and create a SAP ABAP report and provides it to the functional team.",
    desc2:"> Learned various aspects of functional and technical components of how fintech team works in Walmart.",
    desc3:"> Currently working on Debugging and testing of SAP Fiori applications",
      date: "May 2023 - Present",
    icon: "work",
    school: "walmart",
    buttonText: "View Website",
    buttonUrl: 'https://tech.walmart.com/content/walmart-global-tech/en_us.html',
  },
  {
    id: 2,
    title: "APPLE DEVELOPERS GROUP | Core Member | Web Developer",
    location: "Vellore, Tamil Nadu, India",
    desc1:
      "> Worked on multiple projects and collaborated with different domains to develop applications for internal use. Conducted a REACT Session.",
    desc2: "> Contributed To Recruitments Website Development, ADG'S Official Website and ADG'S Link Tree Website",
    desc3: "> Currently Working On a CSS Generator Chrome Extension.",
      date: "December 2020 - Present",
    icon: "school",
    school: "adg",
    buttonText: "View Website",
    buttonUrl: 'https://adgvit.com/',
  }
];


let timelineElements = [
  {
    id: 1,
    title: "Army Public School - (Class X)",
    location: "Nehru Road, Lucknow, Uttar Pradesh, India",
    description:
      "Grade - 92.4%. Was a rollar coaster of a journey for me, got to know my intrests and what i want to achieve in life.",
    buttonText: "View School Website",
    date: "April 2017 - April 2018",
    icon: "school",
    school: "aps",
    buttonUrl: 'https://www.apsnrlucknow.org/',
    add:"Branch : PCM with Computer Science"
  },
  {
    id: 2,
    title: "Army Public School - (Class XII)",
    location: "Nehru Road, Lucknow, Uttar Pradesh, India",
    description:
      "Grade - 95.6%. Got more practical in life. Decided to pursue Engineering in Computer Sciences as my career in life.",
    buttonText: "View School Website",
    date: "April 2019 - April 2020",
    icon: "school",
    school: "aps",
    buttonUrl: 'https://www.apsnrlucknow.org/',
    add:"Branch : PCM with Computer Science"
  },
  {
    id: 3,
    title: "Vellore Institute Of Technology, Vellore",
    location: "Vellore, Tamil Nadu, India",
    description:
      "Grade - 9.54(CGPA). Can call my self a grown up now. Still Continuing in life ....",
    buttonText: "View School Website",
    date: "September 2020 - Present",
    icon: "work",
    school: "vit",
    buttonUrl: 'https://vit.ac.in/',
    add:"Branch : Computer Science and Engineering (CORE)"
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
          title: "Education",
          url: "Education",
          cName : "nav-links",
          icon : "fa-solid fa-school"
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
          title: "Contact",
          url: "Contact",
          cName : "nav-links",
          icon : "fa-solid fa-address-book"
      },
  ];


  export { services,MenuData,timelineElements,technologies,projects,experience };