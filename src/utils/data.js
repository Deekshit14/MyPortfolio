import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaAngular, FaBootstrap, FaChartBar, FaCode, FaComments, FaCss3, FaDatabase, FaDesktop, FaGit, FaGitAlt, FaHtml5, FaJava, FaLinkedin, FaNodeJs, FaProjectDiagram, FaPuzzlePiece, FaReact } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiExpress, SiMongodb, SiMysql, SiNextdotjs, SiPostman, SiPython, SiSpringboot, SiTailwindcss } from "react-icons/si";


import PROJECT_IMG_1 from "../assets/images/img3.png";
import PROJECT_IMG_2 from "../assets/images/img2.jpg";
import PROJECT_IMG_3 from "../assets/images/img1.png";
import PROJECT_IMG_4 from "../assets/images/img6.jpg";
import PROJECT_IMG_5 from "../assets/images/img5.jpg";

import CERTIFICATE_IMG_1 from "../assets/images/cert-1.png";
import CERTIFICATE_IMG_2 from "../assets/images/cert-2.png";
import CERTIFICATE_IMG_3 from "../assets/images/cert-3.png";
import CERTIFICATE_IMG_4 from "../assets/images/cert-1.png";
import CERTIFICATE_IMG_5 from "../assets/images/cert-1.png";


export const MENU_LINKS = [
     { id: "01", label: "Home", offset: -100, to: "hero" },
     { id: "02", label: "Skills", offset: -80, to: "skills" },
     { id: "03", label: "About Me", offset: -80, to: "about" },
     { id: "04", label: "Projects", offset: -80, to: "projects" },
     { id: "05", label: "Certificates", offset: -80, to: "certificates" },
     { id: "06", label: "Contact", offset: -80, to: "contact" },
];

export const STATS = [
     { id: "01", count: "8.83", label: "B.E/B.Tech \nCGPA" },
     { id: "02", count: "5+", label: "Certifications \nEarned" },
     { id: "03", count: "7+", label: "Projects \nCompleted" },
     { id: "04", count: "500+", label: "DSA Problems \nSolved" },
];

export const SKILL_TABS = [
     { id: "01", label: "All", value: "all" },
     { id: "02", label: "Frontend", value: "frontend" },
     { id: "03", label: "Backend", value: "backend" },
     { id: "04", label: "Tools", value: "tools" },
     { id: "05", label: "Educational Tracks", value: "subjects" },
];

export const SKILLS = [
     {
          id: "01",
          icon: FaReact,
          skill: "ReactJS",
          progress: 90,
          type: "frontend",
          description:
               "I have extensive experience in building user interfaces using ReactJS, including state management, component lifecycle, and hooks.",
     },
     {
          id: "02",
          icon: SiNextdotjs,
          skill: "NextJS",
          progress: 93,
          type: "frontend",
          description:
               "I have experience in building server-side rendered applications using NextJS, including routing, data fetching, and API integration.",
     },
     {
          id: "03",
          icon: FaNodeJs,
          skill: "NodeJS",
          progress: 82,
          type: "backend",
          description:
               "I have experience in building RESTful APIs and server-side applications using NodeJS, including Express.js and MongoDB.",
     },
     {
          id: "04",
          icon: SiExpress,
          skill: "ExpressJS",
          progress: 85,
          type: "backend",
          description:
               "I have experience in building web applications using ExpressJS, including middleware, routing, and error handling.",
     },
     {
          id: "05",
          icon: BiLogoJavascript,
          skill: "JavaScript",
          progress: 90,
          type: "frontend",
          description:
               "I have extensive experience in building web applications using JavaScript, including ES6 features, DOM manipulation, and asynchronous programming.",
     },
     {
          id: "06",
          icon: SiTailwindcss,
          skill: "Tailwind CSS",
          progress: 90,
          type: "tools",
          description:
               "I have experience in building responsive user interfaces using Tailwind CSS, including custom themes and design systems.",
     },
     {
          id: "07",
          icon: SiSpringboot,
          skill: "Spring Boot",
          progress: 83,
          type: "backend",
          description:
               "I have experience in building Java-based applications using Spring Boot, including RESTful APIs, security, and database integration.",
     },
     {
          id: "08",
          icon: FaGit,
          skill: "Git",
          progress: 90,
          type: "tools",
          description:
               "I have experience in using Git for version control, including branching, merging, and pull requests.",
     },
     {
          id: "09",
          icon: SiMongodb,
          skill: "MongoDB",
          progress: 80,
          type: "backend",
          description:
               "I have experience in using MongoDB for database management, including data modeling, indexing, and aggregation.",
     },
     {
          id: "10",
          icon: SiMysql,
          skill: "MySQL",
          progress: 80,
          type: "backend",
          description:
               "I have experience in using MySQL for database management, including data modeling, indexing, and query optimization.",
     },
     {
          id: "11",
          icon: SiPostman,
          skill: "Postman",
          progress: 70,
          type: "tools",
          description:
               "I have experience in using Postman for API testing, including creating collections, environments, and automated tests.",
     },
     // {
     //      id: "12",
     //      icon: FaComments,
     //      skill: "Soft Skills",
     //      progress: 85,
     //      type: "soft-skills",
     //      description:
     //           "I have strong soft skills, including communication, teamwork, and problem-solving, which help me work effectively in a team environment.",
     // },
     {
          id: "12",
          icon: FaJava,
          skill: "Java",
          progress: 95,
          type: "backend",
          description:
               "I have extensive experience in building Java-based applications, including object-oriented programming, data structures, and algorithms.",
     },
     {
          id: "13",
          icon: BiLogoTypescript,
          skill: "TypeScript",
          progress: 80,
          type: "frontend",
          description:
               "I have experience in building web applications using TypeScript, including type annotations, interfaces, and generics.",
     },
     {
          id: "14",
          icon: FaAngular,
          skill: "Angular",
          progress: 70,
          type: "frontend",
          description:
               "I have experience in building web applications using Angular, including components, services, and dependency injection.",
     },
     {
          id: "15",
          icon: FaHtml5,
          skill: "HTML5",
          progress: 95,
          type: "frontend",
          description:
               "I have extensive experience in building web applications using HTML5, including semantic markup, accessibility, and responsive design.",
     },
     {
          id: "16",
          icon: FaCss3,
          skill: "CSS3",
          progress: 88,
          type: "frontend",
          description:
               "I have extensive experience in building web applications using CSS3, including Flexbox, Grid, and animations.",
     },
     {
          id: "17",
          icon: FaBootstrap,
          skill: "Bootstrap",
          progress: 81,
          type: "frontend",
          description:
               "I have experience in building responsive user interfaces using Bootstrap, including grid system, components, and utilities.",
     },
     {
          id: "18",
          icon: FaDesktop,
          skill: "Operating Systems",
          progress: 77,
          type: "subjects",
          description:
               "I have a strong understanding of operating systems, including process management, memory management, and file systems.",
     },
     {
          id: "19",
          icon: SiPython,
          skill: "Python",
          progress: 76,
          type: "subjects",
          description:
               "I am familiar with Python's syntax and can write basic scripts and functions for simple tasks.",
     },
     {
          id: "20",
          icon: FaChartBar,
          skill: "Data Visulalization",
          progress: 80,
          type: "subjects",
          description:
               "I have a basic understanding of data visualization techniques, including charts, graphs, and dashboards.",
     },
     {
          id: "21",
          icon: FaProjectDiagram,
          skill: "DSA",
          progress: 95,
          type: "subjects",
          description:
               "I have a strong understanding of data structures and algorithms, including arrays, linked lists, trees, graphs, sorting algorithms and also dynamic programming.",
     },
     {
          id: "22",
          icon: FaDatabase,
          skill: "DBMS",
          progress: 74,
          type: "subjects",
          description:
               "I have a strong understanding of database management systems, including relational databases, normalization, and SQL queries.",
     },
     {
          id: "23",
          icon: FaPuzzlePiece,
          skill: "OOPs",
          progress: 95,
          type: "subjects",
          description:
               "I have a strong understanding of object-oriented programming concepts, including classes, objects, inheritance, polymorphism, and encapsulation.",
     },
     {
          id: "24",
          icon: FaCode,
          skill: "Full Stack Development",
          progress: 88,
          type: "subjects",
          description:
               "I have a strong understanding of full stack development, including frontend and backend technologies, RESTful APIs, and database management.",
     },
];


export const ABOUT_ME = {
     content: `Full-stack developer with strong expertise in both frontend and backend technologies, specializing in React for frontend development and Spring Boot, Nodejs for backend. Passionate about building efficient, scalable web applications
     \nDemonstrated ability to create robust and dynamic web applications, focusing on frontend and backend projects that deliver engaging user experiences. Adept at integrating backend services with efficient and scalable solutions. Experienced in utilizing modern frameworks and technologies to optimize performance and enhance functionality. 
     `,

     socialLinks: [
          { id: "01", label: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/deekshit-m1404" },
          { id: "02", label: "GitHub", icon: FaGitAlt, link: "https://github.com/Deekshit14" },
          { id: "03", label: "Twitter", icon: FaXTwitter, link: "https://x.com/Deekshit_mr360?t=0_cWojjRB6m29AYrGy1xQ&s=08"}
     ],

     email: "-----@gmail.com",
     phone: "+91 ----------",
     website: "https://github.com/Deekshit14",
     linkedIn: "https://www.linkedin.com/in/deekshit-m1404"
};

export const PROJECTS = [
     {
          id: 1,
          title: "Finance Tracker (Wallet Wiz) using NextJS",
          image: PROJECT_IMG_1,
          tags: ["NextJS", "ReactJS", "Tailwind CSS", "NodeJS", "ExpressJS", "Typescript" ,"Clerk Authentication" ,"Drizzle ORM", "Shadcn"],
          link: "https://github.com/Deekshit14/Finance-Tracker",
     },
     {
          id: 2,
          title: "Smart Contact Manager using Spring Boot",
          image: PROJECT_IMG_2,
          tags: ["Spring Boot", "Java", "MySQL", "Thymeleaf", "TailwindCss", "Spring Security", "Spring JPA", "Spring MVC"],
          link: "https://github.com/Deekshit14/Contact-Manager",
     },
     {
          id: 3,
          title: "AI Mock Interview Platform using NextJS, VAPI",
          image: PROJECT_IMG_3,
          tags: ["NextJS","ReactJS", "VAPI", "NodeJS", "ExpressJS", "Supabase DB", "OpenRouter AI"],
          link: "https://github.com/Deekshit14/AI-Interview-Recruiter-Project",
     },
     {
          id: 4,
          title: "Admin Dashboard using ReactJS (Frontend)",
          image: PROJECT_IMG_4,
          tags: ["ReactJS", "Tailwind CSS", "JavaScript", "React-Recharts" ,"Material UI", "HTML","CSS"],
          link: "https://github.com/Deekshit14/Admin-Dashboard-Project",
     },
     {
          id: 5,
          title: "Restaurant Booking Website using Bootstrap (Frontend)",
          image: PROJECT_IMG_5,
          tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Responsive Web Design", "Web Development"],
          link: "https://github.com/Deekshit14/Restaurant-Bootstrap",
     }
]


export const CERTIFICATES = [
     {
          id: 1,
          title: "INTRODUCTION TO GIT AND GITHUB (GOOGLE)",
          image: CERTIFICATE_IMG_1,          
          link: "https://www.coursera.org/account/accomplishments/records/0L45P6FD173R",
     },
     {
          id: 2,
          title: "PROGRAMMING WITH JAVASCRIPT (META)",
          image: CERTIFICATE_IMG_2,
          link: "https://www.coursera.org/account/accomplishments/records/3JMFEXHRNN9Z",
     },
     {
          id: 3,
          title: "INTODUCTION TO DATABASE AND SQL (IBM)",
          image: CERTIFICATE_IMG_3,
          link: "https://www.coursera.org/account/accomplishments/records/M5NYYC6368WT",
     },
     // {
     //      id: 4,
     //      title: "ADVANCED REACT (META)",
     //      image: CERTIFICATE_IMG_4,
     //      link: "https://github.com/Deekshit14/Admin-Dashboard-Project",
     // },
     // {
     //      id: 5,
     //      title: "INTRODUCTION TO FRONTEND DEVELOPER (META)",
     //      image: CERTIFICATE_IMG_5,
     //      link: "https://github.com/Deekshit14/Restaurant-Bootstrap",
     // }
]