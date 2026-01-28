// src/portfolioData.js

import oracleLogo from "./assets/OracleLogo.png";
import devtownLogo from "./assets/DevtownLogo.jpg";
import adoreindiaLogo from "./assets/AdoreIndiaLogoi.jpg";
import nyuLogo from "./assets/NyuLogo.jpg"
import kjsceLogo from "./assets/KjsceLogo.jpg"
import project1 from "./assets/Project1.png"
import reportProject1 from "./assets/Report_OM.pdf"
import pptProject1 from "./assets/PPT_OM.pdf"
import anushka_personal from "./assets/anushka_personal.png"

export const portfolioData = {
  personal: {
    name: "Anushka Karamchandani",
    title: "Product, Project & Technology Consultant",
    tagline: "Graduate student at NYU with experience at Oracle delivering client-focused technology solutions for global banking clients. I bridge product strategy, project execution, and engineering to build scalable, user-centric digital products that drive real business impact",
    email: "karamchandanianushka1206@gmail.com",
    github: "https://github.com/Mohit555000",
    linkedin: "https://www.linkedin.com/in/anushka-karamchandani-952394203/",
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
      name: "HealthSync Mobile",
      role: "Product Manager",
      image: "images.unsplash.com",
      description: "A patient-centric mobile application bridging the communication gap between rural patients and urban healthcare providers.",
      problem: "Rural patients faced 30% higher appointment no-show rates due to lack of follow-up care.",
      solution: "Created an offline-first mobile app with automated SMS reminders and telehealth integration.",
      impact: "Onboarded 10k+ users and decreased appointment no-show rates by 22% in the first quarter.",
      technologies: ["React Native", "Node.js", "MongoDB", "Twilio"],
      github: "github.com",
      live: "" // Example without a live link to test the conditional button
    },
    {
      id: 3,
      name: "FinFlow Dashboard",
      role: "Product Designer & PM",
      image: "images.unsplash.com",
      description: "A financial visualization tool for small business owners to manage cash flow and predict future revenue.",
      problem: "Small business owners found existing accounting software too complex and non-visual.",
      solution: "Designed a 'One-Glance' dashboard focused on cash-on-hand and upcoming runway predictions.",
      impact: "Achieved a 4.8/5 CSAT score during the initial user testing phase.",
      technologies: ["Next.js", "D3.js", "PostgreSQL", "Tailwind"],
      github: "github.com",
      live: "https://finflow.io"
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
