// src/portfolioData.js

import oracleLogo from "./assets/OracleLogo.png";
import devtownLogo from "./assets/DevtownLogo.jpg";
import adoreindiaLogo from "./assets/AdoreIndiaLogoi.jpg";
import nyuLogo from "./assets/NyuLogo.jpg"
import kjsceLogo from "./assets/KjsceLogo.jpg"
import project1 from "./assets/Project1.png"
import project2 from "./assets/Project2.png"
import project3 from "./assets/Project3.png"
import reportProject1 from "./assets/Report_OM.pdf"
import reportProject2 from "./assets/Report_Finance.pdf"
import reportProject3 from "./assets/Report_Memolaster.pdf"
import pptProject1 from "./assets/PPT_OM.pdf"
import pptProject2 from "./assets/PPT_Finance.pdf"
import cert1PDF from "./assets/cert1PDF.pdf"
import cert2PDF from "./assets/cert2PDF.pdf"
import cert3PDF from "./assets/cert3PDF.pdf"
import cert4PDF from "./assets/cert4PDF.pdf"
import cert5PDF from "./assets/cert5PDF.pdf"
import cert6PDF from "./assets/cert6PDF.pdf"
import cert7PDF from "./assets/cert7PDF.pdf"
import cert8PDF from "./assets/cert8PDF.pdf"
import cert9PDF from "./assets/cert9PDF.pdf"
import cert10PDF from "./assets/cert10PDF.pdf"
import cert1Thumb from "./assets/cert1Thumb.png"
import cert2Thumb from "./assets/cert2Thumb.png"
import cert3Thumb from "./assets/cert3Thumb.png"
import cert4Thumb from "./assets/cert4Thumb.png"
import cert5Thumb from "./assets/cert5Thumb.png"
import cert6Thumb from "./assets/cert6Thumb.png"
import cert7Thumb from "./assets/cert7Thumb.png"
import cert8Thumb from "./assets/cert8Thumb.png"
import cert9Thumb from "./assets/cert9Thumb.png"
import cert10Thumb from "./assets/cert10Thumb.png"
import anushka_personal from "./assets/anushka_personal.png"

export const portfolioData = {
  personal: {
    name: "Anushka Karamchandani",
    phone: "+1 917-635-8141",
    title: "Product, Project & Technology Consultant",
    tagline: "Graduate student at NYU with experience at Oracle delivering client-focused technology solutions for global banking clients. I bridge product strategy, project execution, and engineering to build scalable, user-centric digital products that drive real business impact",
    email: "karamchandanianushka1206@gmail.com",
    github: "",
    instagram: "https://www.instagram.com/anushka_karamchandani?igsh=Zjhibms2NWU2a2M0",
    linkedin: "https://www.linkedin.com/in/anushka-karamchandani-952394203/",
    location:"861, 61st Street, Brooklyn, New York, United States",
    photo: anushka_personal
  },
  education: [
  {
    id: 1,
    degree: "Masters in Management of Technology",
    institution: "New York University",
    logo: nyuLogo,
    duration: "Aug 2025 - May 2027",
    location: "New York, United States",
    gpa: "3.7/4.0",
    highlights: [
      "Currently in Semester 2 with strong focus on applied management and technology coursework",
    "Completed industry-driven projects in Operations Management, Financial Analysis, and Organizational Behavior",
    "Student Engagement Ambassador at NYU Phonathon, representing the university and supporting alumni engagement initiatives"
    ],
    subjects: [
      "Operations Management",
      "Financial Analysis For Tech Managers",
      "Organizational Behaviour",
      
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "Somaiya Vidyvihar University",
    logo: kjsceLogo,
    duration: "2020 - 2024",
    location: "Mumbai, India",
    gpa: "3.8/4.0",
    highlights: [
      "Strong foundation in Data Structures, Databases, and Software Engineering",
      "Led student initiatives and coordinated technical events",
      "Completed multiple academic and real-world projects in web development"
    ],
    subjects: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Probability and Statistics",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Web Technologies"
    ]
    
  }
],
    skills: {
  product: [
    "Product Strategy",
    "Project Mangement",
    "Product Roadmapping",
    "User Research",
    "Requirements Gathering",
    "Agile/Scrum",
    "Sprint Planning",
    "Stakeholder Management",
    "A/B Testing"
  ],

  technical: [
    "React.js",
    "JavaScript (ES6+)",
    "Node.js",
    "SQL",
    "PL/SQL",
    "Python",
    "REST APIs",
    "MongoDB",
    "HTML",
    "CSS"
  ],

  tools: [
    "Jira",
    "Postman",
    "Git/GitHub",
    "Confluence",
    "Tableau",
    "MS Office (Excel, PowerPoint, Word)",
  ],

  soft: [
    "Cross-functional Collaboration",
    "Communication",
    "Leadership",
    "Problem Solving",
    "Analytical Thinking",
    "Time Management",
    "Adaptability",
    "Presentation Skills"
  ]
},
  projects: [
    {
    id: 1,
    name: "Operational Resilience Analysis – Aviation",
    role: "Operations Strategy",
    image: project1, // use a Boeing/aviation themed image
    description:
      "A consulting-style operations strategy project analyzing Boeing’s 737 MAX and 787 programs to improve demand forecasting, supply chain resilience, and quality management using data-driven frameworks.",
    problem:
      "Boeing faced volatile demand, single-source supplier risks, and systemic quality failures leading to production delays and safety issues.",
    solution:
      "Applied Holt’s Trend-Adjusted forecasting, built a Supplier Risk Matrix, and used QFD & Fishbone Analysis to design proactive operational and quality frameworks.",
    impact:
      "Delivered a strategic roadmap enabling proactive capacity planning, dual sourcing decisions, and built-in quality controls to restore operational stability.",
    technologies: [
      "Operations Management",
      "Holt’s Forecasting",
      "Supply Chain Risk Matrix",
      "QFD",
      "Six Sigma",
      "Root Cause Analysis"
    ],
     report: reportProject1,
  ppt: pptProject1,
  github: null,
  live: null
  },
 // github: "https://github.com/yourusername/aviation-resilience"

   {
    id: 2,
  name: "Pizza Place Project – Finance in the Real World",
  role: "Financial Strategy & Business Analyst",
  image: project2, // use a pizza / storefront image
  description:
    "A real-world corporate finance and strategy project conducted with a local Brooklyn pizzeria, focused on evaluating operations, financial performance, financing decisions, and expansion feasibility using actual business data.",
  
  problem:
    "The business faced operational inefficiencies, limited financial visibility, and uncertainty around optimal financing and growth strategies for long-term sustainability.",
  
  solution:
    "Conducted on-site leadership interviews, built customized financial statements, performed forecasting, and evaluated multiple financing scenarios using WACC, NPV, IRR, and cash flow models.",
  
  impact:
    "Delivered a data-driven strategic roadmap recommending optimal capital structure (33% equity + 67% debt), improved delivery efficiency through asset financing, and validated expansion feasibility with strong projected returns.",
  
  technologies: [
    "Financial Modeling",
    "WACC & NPV Analysis",
    "Scenario Planning",
    "Valuation",
    "Stakeholder Analysis",
    "Excel"
  ],
     report: reportProject2,
  ppt: pptProject2,
  github: null,
  live: null
  },
    {
  id: 3,
  name: "MemoLaster – Vocabulary Learning Application",
  role: "Full Stack Developer",
  image: project3,
  description:
    "A gamified vocabulary learning web application designed to improve English vocabulary retention through interactive games, adaptive difficulty levels, and personalized word banks.",
  problem:
    "Traditional vocabulary learning relies heavily on rote memorization, resulting in low engagement, poor retention, and limited accessibility for learners with different needs.",
  solution:
    "Developed a gamified learning platform featuring word-guess and word-unscramble games, adaptive difficulty recommendations, custom dictionaries, and accessibility-focused features like text-to-speech.",
  impact:
    "Enabled personalized, engaging vocabulary learning with improved retention through adaptive quizzes, gamification, and inclusive design for diverse learners.",
  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML",
    "CSS",
    "JavaScript",
    "NLP (Text-to-Speech)",
    "Gamification",
  ],
  report: reportProject3,
  ppt: null,
  github: "https://github.com/Anushka-Karamchandani-662/Memolaster_VocabularyLearningApp",
  live: null,
}
  ],
  
  about: {
  summary:
    "I’m a Management of Technology graduate student at NYU with hands-on experience delivering client-focused technology and product solutions in the banking and enterprise domain. Previously, I worked as an Associate Consultant at Oracle, where I collaborated with global banking clients to translate business requirements into scalable technical solutions. I enjoy working at the intersection of product strategy, project execution, and technology, helping teams ship solutions that are both technically sound and business-driven.",

  highlights: [
    {
      title: "Enterprise Banking Delivery",
      description:
        "Led cross-functional teams on enterprise banking projects, working closely with development, QA, and deployment teams to ensure smooth delivery of client solutions at Oracle.",
    },
    {
      title: "Data-Driven & Compliant Solutions",
      description:
        "Contributed to ISO 20022 (MT → MX) migration initiatives, improving global financial compatibility and regulatory compliance.",
    },
    {
      title: "Technology × Management × Users",
      description:
        "Bridging technology, management, and users by combining a strong computer science foundation with management training to align engineering efforts with stakeholder needs.",
    },
  ],
},
leadership: [
  {
    id: 1,
    description: "Sponsorship Lead for a 1,000+ attendee college summit — secured partnerships, coordinated stakeholders, and supported event logistics."
  },
  {
    id: 2,
    description: "Volunteer, Oracle Swadesh Program — contributed to community initiatives including beach cleanups and Diwali card campaigns supporting underprivileged communities."
  },
  {
    id: 3,
    description: "Freelance Tutor — mentored high school students in Math and Science, improving academic performance and confidence."
  },
  {
    id: 4,
    description: "Member, Club InSignia (Art Club) — organized cultural activities and collaborative events."
  }
],

certifications: [
    {
      id: 1,
      name: "Tableau Essential Training",
      issuer: "Linkedin Learning",
      date: "October 2025",
      logo: kjsceLogo,
      skills: ["Tableau"],
      preview: cert1Thumb,
      link: cert1PDF,
    },
    {
      id: 2,
      name: "UNIX and Linux Essentials",
      issuer: "Oracle University",
      date: "Jun 2024",
      logo: oracleLogo,
      skills: ["Linux", "UNIX", "Command Line", "System Basics"],
      preview: cert2Thumb,
      link: cert2PDF,
    },
    {
      id: 3,
      name: "SQL Fundamentals",
      issuer: "Oracle University",
      date: "2024",
      logo: kjsceLogo,
      skills: ["SQL", "Database Queries", "Data Management"],
      preview: cert3Thumb,
      link: cert3PDF,
    },
     {
      id: 4,
      name: "The Art & Science of Product Management",
      issuer: "Advancing Women in Tech (AWIT)",
      date: "2023",
      logo: kjsceLogo,
      skills: ["Product Strategy","Agile"],
      preview: cert4Thumb,
      link: cert4PDF,
    },
     {
      id: 5,
      name: "Information Design",
      issuer: "University of California San Diego",
      date: "2023",
      logo: kjsceLogo,
      skills: ["Information Architecture", "Visual Communication"],
      preview: cert5Thumb,
      link: cert5PDF,
    },
    {
      id: 6,
      name: "Building AI Powered Chatbots",
      issuer: "IBM",
      date: "2023",
      logo: kjsceLogo,
      skills: ["Enterprise Systems", "Technology Fundamentals"],
      preview: cert6Thumb,
      link: cert6PDF,
    },
    {
      id: 7,
      name: "UX Design Fundamentals",
      issuer: "Calarts",
      date: "2023",
      logo: kjsceLogo,
      skills: ["UX Design","Interaction Design"],
      preview: cert7Thumb,
      link: cert7PDF,
    },
   {
    id: 8,
    name: "Full Stack Web Development",
    issuer: "DevTown",
    date: "2022",
    skills: ["MERN Stack", "Web Development"],
    preview: cert8Thumb,
    link: cert8PDF,
  },

  {
    id: 9,
    name: "Core Java Certification",
    issuer: "Maharashtra Technical & Self Employment Training Society",
    date: "2021",
    skills: ["Core Java", "OOP", "Programming"],
    preview: cert9Thumb,
    link: cert9PDF,
  },

  {
    id: 10,
    name: "Diploma in C Programming",
    issuer: "Flash Computer Education",
    date: "2021",
    skills: ["C Programming", "Problem Solving"],
    preview: cert10Thumb,
    link: cert10PDF,
  },
    
  ],
  experience: [
  {
    id: 1,
    role: "Associate Consultant",
    company: "Oracle Financial Services Software",
    logo: oracleLogo,
    type: "Full-time",
    duration: "June 2024 - Aug 2025",
    location: "Goregaon, Maharashtra, India",
    responsibilities: [
      "Led cross-functional teams on enterprise banking projects, working closely with development, QA, and deployment teams.",
      "Collaborated with global stakeholders to translate business requirements into scalable technical solutions.",
      "Supported ISO 20022 (MT → MX) migration initiatives for global banking clients."
    ],
    achievements: [
      "Improved delivery efficiency by 20–25% by streamlining cross-team coordination across development, QA, and deployment teams.",
      "Contributed to ISO 20022 (MT → MX) financial messaging modernization, supporting regulatory compliance for global banking clients."
    ],
    technologies: ["PLSQL", "Java","Jira", "Agile Methodology"]
  },
    {
      id: 2,
      role: "Project Coordination Intern",
      company: "DevTown",
      logo: devtownLogo,
      type: "Internship",
      duration: "Jun 2022 – Nov 2022",
      location: "India",
      responsibilities: [
        

"Coordinated UX designers and developers across a cross-functional team of 5–7 members.",
"Tracked features, dependencies, and timelines across multiple release cycles to ensure on-time delivery.",
"Facilitated sprint planning, stand-ups, and retrospectives to improve team alignment."

      ],
       achievements: [
      "Improved delivery efficiency by 25–30% by streamlining sprint planning and task prioritization.",
"Reduced feature turnaround time by 20% through clearer requirements and cross-team communication.",
"Supported successful launch of 3+ learning modules used by hundreds of students"],
      technologies: ["MERN Stack (React, Node.js, MongoDB)","Agile Methodology"]
    },
      {
      id: 3,
      role: "Web Project Management Intern",
      company: "Adore India",
      logo: adoreindiaLogo,
      type: "Internship",
      duration: "Apr 2022 – May 2022",
      location: "India",
      responsibilities: [
        
"Managed the development and customization of WordPress-based client websites to improve functionality and user experience.",
"Coordinated with developers and designers to implement client requirements and ensure high-quality delivery.",
"Applied Agile methodologies to adapt to evolving client needs and ensure timely project completion.",
"Performed basic testing and content updates to maintain site performance and usability."

      ],
       achievements: [
     "Successfully delivered multiple client websites within tight timelines, improving client satisfaction.",
"Reduced iteration cycles by 15–20% through clearer requirement gathering and sprint-based execution.",],
      technologies: ["WordPress","React.js","HTML","CSS"]
    }
  ]
};
