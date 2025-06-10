import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/logo.webp";
import project6 from "../assets/projects/automation.webp"
import { title } from "framer-motion/client";

export const HERO_CONTENT = `I am a passionate Full Stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React, as well as MERN technologies like React,Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a passionate and versatile full stack developer with expertise in building scalable and efficient web applications. With hands-on experience in React, Node.js, Express.js, Flask, MySQL, PostgreSQL, and MongoDB, I thrive on solving complex problems and optimizing performance.  

I have developed impactful projects like QuickLearnAI, an AI-powered educational platform, and ProgressMatrix, a real-time student performance tracking system. My work also includes building secure authentication systems, integrating AI tools like Langchain, and optimizing data storage with VectorDB.  

Beyond coding, I enjoy mentoring students, conducting workshops, and contributing to open-source projects. I have also competed in and won hackathons, demonstrating my ability to build innovative solutions under pressure. When I’m not coding, you’ll find me exploring new technologies or playing Valorant.`;


export const EXPERIENCES = [
  {
    year: "2024(May) - 2024(June)",
    role: "Backend Developer Intern",
    company: "Amul",
    description: ` Developedanefficient gate pass system utilizing Node.js and MongoDB, integrating form-handling capabilities. and implemented a user-friendly interface to facilitate seamless interactions, resulting in streamlined gate pass
 processing and Improved overall user satisfaction.Elevated data management and communication processes, leading to Advanced operational efficiency and a more robust
 system performance`,
    technologies: ["Javascript", "Node.js", "MongoDB"],
  }, {
    year: "2024(May) - 2024(June)",
    role: "Intern",
    company: "InternPe",
    description: `Created Dynamic web applications utilizing HTML, CSS, and JavaScript, delivering engaging and interactive user
 experiences.Engineered a fully functional calculator and an online store with comprehensive product listings, demonstrating strong problem-solving and e-commerce capabilities.Designed and built intuitive interfaces for a to-do list application and a two-player Connect 4 game, enhancing user interaction and engagement.`,
    technologies: ["Javascript", "HTML", "CSS"],
  }
];

export const PROJECTS = [
  {
    "title": "QuickLearnAI",
    "image": project5,
    "description": "QuickLearnAI is an AI-powered platform that provides instant explanations, code assistance, and real-time learning resources for developers and students. It enhances understanding with interactive responses and tailored guidance.",
    "technologies": ["React", "Node.js", "Express", "MongoDB", "Flask", "Tailwind CSS", "Langchain", "ChatGroq", "HuggingFaceAPI", "Redis"],
    "livelink": "https://drive.google.com/file/d/1q2A8GW_S42ClBS07zmsKq_AyBSpnL_pO/view?usp=sharing",
    "githublink": "https://github.com/bhavyagp/quicklearnai"
  },
  {
    title: "AI-Powered DevOps Automation Platform",
    image: project6,
    description:
      "Autonomous Jira-to-code pipeline automating software development lifecycle from task planning to production deployment.\n◦ API Integration: Implemented OAuth2 authentication with Jira Cloud API for automated ticket parsing and requirement extraction.\n◦ AI Code Generation: Integrated LLM (GPT-4) for context-aware production-ready code generation and automated testing with lint compliance.\n◦ DevOps Automation: Built Git workflow automation with PR generation, test validation, and Jira status transitions achieving 80%+ coverage.",
    technologies: ["Flask", "React.js", "Jira API", "OAuth2", "Git API", "LLM"],
    livelink: "https://www.youtube.com/watch?v=jItTasCJciE&t=3s&ab_channel=NanditKalaria",
    githublink: "https://github.com/bhavyaGP/NeuralFlow-York.ie.git",
  },
  {
    title: "ProgressMatrix",
    image: project1,
    description:
      "Engineeredareal-time system to track and evaluate students' learning progress across multiple schools, enhancing data accuracy and accessibility. Innovatedcomprehensive tools and dashboards to monitor academic performance, providing actionable insights for educational improvements. Integrated data from diverse sources to deliver a unified view of , data-driven decision-making.",
    technologies: ["React js", "Node.js", "PostgreSQL", "Express.js"],
    livelink: "https://drive.google.com/file/d/1WiXgRdBA5mOWw5wJlWR21LIzW294a0uw/view?usp=drive_link",
    githublink: "https://github.com/bhavyagp/studentflow",
  },
  {
    title: "BhavyaAI",
    image: project2,
    description:
      "A chatbot for answering questions and providing information about the user.which behaves like a personal assistant.",
    technologies: ["Node.js", "Express", "Python", "Google Gemini API", "Pinecone", "React.js", "Tailwind CSS"],
    livelink: "https://bhavya-ai.vercel.app/",
    githublink: "https://github.com/bhavyagp/bhavyaai",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    livelink: "https://my-portfolio-peach-delta-37.vercel.app/",
    githublink: "https://github.com/bhavyagp/myportfolio",
  },
  {
    title: "URL Shortener",
    image: project4,
    description:
      "Introduced a URL shortener service using Node.js (Express), the UUID npm library, and MongoDB, streamlining URL management for elevated memorability and tracking. OptimizedURLlengths, enhancing user convenience and tracking efficiency",
    technologies: ["Express", "MongoDB", "Node.js"],
    livelink: "https://url-shortner-gold-rho.vercel.app",
    githublink: "https://github.com/bhavyagp/URL-shortner",
  },
  {
    title: "MentorPedia",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Node.js", "Express", "Python", "Apache Solr"],
    livelink: "https://www.google.com",
    githublink: "https://github.com/bhavyagp/mentorpedia",
  }

];

export const CONTACT = {
  address: "205/C2,Mapple Oasis, Karamsad, Anand, Gujarat, India",
  phoneNo: "+91 8780034261",
  email: "bgprajapati575@gmail.com",
};
