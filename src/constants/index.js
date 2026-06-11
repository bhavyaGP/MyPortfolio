import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/logo.webp";
import project6 from "../assets/projects/automation.webp"
import { title } from "framer-motion/client";

export const HERO_CONTENT = `Backend AI engineer and full stack developer focused on building intelligent products and reliable web services. I work with React.js, Node.js, Express.js, Flask, SQL, and vector databases to deliver fast, secure, and scalable solutions.`;

export const ABOUT_TEXT = `I am a B.Tech Computer Engineering student at CHARUSAT University (CGPA 9.11, 2022-2026) and a Backend AI Engineer Intern at CodemateAI. I build full stack and AI-driven applications with React.js, Node.js, Express.js, Flask, and SQL.

I have worked on projects like QuickLearnAI, ProgressMatrix, and an AI-powered DevOps automation platform, focusing on clean APIs, scalable backend services, and practical AI integrations. My skills include C++, Typescript, JavaScript, SQL, Langchain.js, and tools like Postman, Docker, Git, PostgreSQL, MySQL, Prisma ORM, Pinecone, and HeidiSQL.

I also volunteer as a Web Expert at Club Gamma and tutor students in web technologies through hands-on projects.`;


export const EXPERIENCES = [
  {
    year: "Oct 2025 – April 2026",
    role: "Software Engineer Intern",
    company: "PlaypowerLabs (Remote)",
    description: `- AI Agent Development: Built an AI agent for automated activity generation within Reading Planet, a comprehensive graded reading program for children aged 3–11, enhancing content creation workflows significantly.
- Full-Stack Engineering: Developed and maintained features using TypeScript, Express.js backend and Next.js frontend, integrated with Supabase for database and authentication needs.
- AWS Infrastructure: Worked with AWS services including Cognito (auth), Lambda (serverless functions), DynamoDB (NoSQL storage), and API Gateway, alongside Prismic for content management.`,
    technologies: ["TypeScript", "Next.js", "Express.js", "Supabase", "AWS Cognito", "AWS Lambda", "DynamoDB", "API Gateway", "Prismic"],
  },
  {
    year: "Aug 2025 - Present",
    role: "Backend AI Engineer Intern",
    company: "CodemateAI (Remote)",
    description: `Building Guruverse AI, an intelligent assistant platform using OpenAI and Gemini SDKs with embedding models for context-aware responses.
- Designed and optimized backend services with Node.js, Express.js, and vector databases to support 400+ active users.
- Implemented semantic search and retrieval pipelines to improve accuracy and personalization.`,
    technologies: ["JavaScript", "Node.js", "Flask", "OpenAI", "Gemini", "MongoDB", "Pinecone"],
  },
];

export const PROJECTS = [
  {
    "title": "QuickLearnAI",
    "image": project5,
    "description": "Major project - live AI-powered educational platform with 300+ active users and recipient of SSIP Grant worth ₹1,00,000.\n- Implemented Langchain and Llama API for intelligent content analysis and personalized learning materials.\n- Built a React.js frontend with Express.js and Flask backend services, WebSocket real-time features, and OAuth 2.0 authentication.\n- Deployed VectorDB for efficient content storage and retrieval with optimized AI responses.",
    "technologies": ["React.js", "Express.js", "Flask", "WebSocket", "Langchain", "VectorDB", "Llama API", "OAuth 2.0"],
    "livelink": "http://quicklearn.ai.in/",
    "githublink": "https://github.com/bhavyagp/quicklearnai",
    "demoVideo": "https://www.youtube.com/embed/nMuUx2Ylit8",
    "featured": true
  },
  {
    title: "AI-Powered DevOps Automation Platform",
    image: project6,
    description:
      "Autonomous Jira-to-code pipeline automating software development lifecycle from task planning to production deployment.\n- Implemented OAuth2 authentication with Jira Cloud API for automated ticket parsing and requirement extraction.\n- Integrated GPT-4 for context-aware production-ready code generation and automated testing with lint compliance.\n- Built Git workflow automation with PR generation, test validation, and Jira status transitions achieving 80%+ coverage.",
    technologies: ["Flask", "React.js", "Jira API", "OAuth2", "Git API", "GPT-4", "LLM"],
    livelink: "https://www.youtube.com/watch?v=jItTasCJciE&t=3s&ab_channel=NanditKalaria",
    githublink: "https://github.com/bhavyaGP/NeuralFlow-York.ie.git",
    demoVideo: "https://www.youtube.com/embed/jItTasCJciE",
  },
  {
    title: "ProgressMatrix",
    image: project1,
    description:
      "Real-time student progress tracking system across multiple schools with enhanced data accuracy.\n- Developed dashboards for academic performance tracking with actionable insights.\n- Integrated multi-source data for unified student progress view and data-driven decision-making.\n- Designed an intuitive UI for seamless educator and administrator navigation.",
    technologies: ["React.js", "Express.js", "MySQL", "Prisma", "Tailwind"],
    livelink: "https://drive.google.com/file/d/1WiXgRdBA5mOWw5wJlWR21LIzW294a0uw/view?usp=drive_link",
    githublink: "https://github.com/bhavyagp/studentflow",
    demoVideo: "https://drive.google.com/file/d/1WiXgRdBA5mOWw5wJlWR21LIzW294a0uw/preview",
  },
  // {
  //   title: "BhavyaAI",
  //   image: project2,
  //   description:
  //     "A chatbot for answering questions and providing information about the user.which behaves like a personal assistant.",
  //   technologies: ["Node.js", "Express", "Python", "Google Gemini API", "Pinecone", "React.js", "Tailwind CSS"],
  //   livelink: "https://bhavya-ai.vercel.app/",
  //   githublink: "https://github.com/bhavyagp/bhavyaai",
  // },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  //   livelink: "https://my-portfolio-peach-delta-37.vercel.app/",
  //   githublink: "https://github.com/bhavyagp/myportfolio",
  // },
  // {
  //   title: "URL Shortener",
  //   image: project4,
  //   description:
  //     "Introduced a URL shortener service using Node.js (Express), the UUID npm library, and MongoDB, streamlining URL management for elevated memorability and tracking. OptimizedURLlengths, enhancing user convenience and tracking efficiency",
  //   technologies: ["Express", "MongoDB", "Node.js"],
  //   livelink: "https://url-shortner-gold-rho.vercel.app",
  //   githublink: "https://github.com/bhavyagp/URL-shortner",
  // },
  // {
  //   title: "MentorPedia",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["Node.js", "Express", "Python", "Apache Solr"],
  //   livelink: "https://www.google.com",
  //   githublink: "https://github.com/bhavyagp/mentorpedia",
  // }

];

export const CONTACT = {
  address: "Gujarat, India",
  phoneNo: "+91-8780034261",
  email: "bgprajapati575@gmail.com",
};
