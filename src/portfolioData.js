// src/portfolioData.js

import LalitechLogo from "./assets/Lalitech_logo.jpeg";
import JSWLogo from "./assets/JSW_logo.png";
import RoyalEnfieldLogo from "./assets/RoyalEnfield_logo.jpeg";
import nyuLogo from "./assets/NyuLogo.jpg"
import kjsceLogo from "./assets/Mum Uni Logo.jpeg"
import project1 from "./assets/Project1.png"
import project2 from "./assets/Project2.png"
import project3 from "./assets/Project3.png"
import reportProject1 from "./assets/Report_OM.pdf"
import reportProject2 from "./assets/Report_Finance.pdf"
import reportProject3 from "./assets/Black Book_BE.pdf"
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
import Krishnanand_personal from "./assets/Profile_photo.png"

export const portfolioData = {
  personal: {
    name: "Krishnanand Varshney",
    phone: "+1 646-270-6418",
    title: "Product, Project & Technology Consultant",
    tagline: "I’m a graduate student at NYU Tandon pursuing an M.S. in Management of Technology, passionate about turning complex ideas into impactful technology solutions. With experience across product management, engineering, and operations, I specialize in building data-driven products, leading cross-functional teams, and leveraging emerging technologies like AI to solve real-world problems and drive meaningful innovation.",
    email: "krishnanandvarshney@gmail.com",
    github: "",
    instagram: "https://www.instagram.com/_krishnanand_varshney/",
    linkedin: "https://www.linkedin.com/in/krishnanandvarshney/",
    location:"861, 61st Street, Brooklyn, New York, United States",
    
    photo: Krishnanand_personal
  },
  education: [
  {
    id: 1,
    degree: "Masters in Management of Technology",
    institution: "New York University",
    logo: nyuLogo,
    duration: "Aug 2025 - May 2027",
    location: "New York, United States",
    gpa: "3.778/4.0",
    // highlights: [
    //   "Currently in Semester 2 with strong focus on applied management and technology coursework",
    // "Completed industry-driven projects in Operations Management, Financial Analysis, and Organizational Behavior",
    // "Student Engagement Ambassador at NYU Phonathon, representing the university and supporting alumni engagement initiatives"
    // ],
    subjects: [
      "Operations Management",
      "Financial Analysis For Tech Managers",
      "Organizational Behaviour",
      "Economics and Strategy",
      "Design thinking for creative pronlem solving",
      "Communication for tech managers",
      
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Engineering in Mechanical Engineering",
    institution: "University of Mumbai",
    logo: kjsceLogo,
    duration: "2018 - 2022",
    location: "Mumbai, India",
    gpa: "3.34/4.0",
    highlights: [
      "Strong foundation in Data Structures, Databases, and Software Engineering",
      "Led student initiatives and coordinated technical events",
      "Completed multiple academic and real-world projects in web development"
    ],
    subjects: [
      "Industrial Engineering and mangement",
      "Project Management", 
      "Engineering Drawing",
      "Thermodynamics",
      "Strength and materials",
      "Fluid Mechanics",
      "Heat transfer",
      "Refregiration and Air conditioning",
      "Mechatronics",
      "Production planning and control"
    ]
    
  }
],
    skills: {
  product: [
    "Agile Project Management",
    "Project Mangement",
    "Product Road mapping",
    "AI-Driven Product Strategy",
    "Go-to-Market Planning",
    "Business Analysis",
    "Sprint Planning",
    "Stakeholder Management",
    "Operations Management" ,
    "Total Quality Management (TQM)"
  ],

  technical: [
    "Milling machine",
    "Grinding machine",
    "lathe machine",
    "3D printer",
    "Shaper machine",
    "Drilling machine",
    "Arc welding"
  ],

  tools: [
    "Jira",
    "MATLAB",
    "ANSYS",
    "AutoCAD",
    "Solid Works",
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
    image: project1,

    summary:
      "An operations strategy consulting project analyzing Boeing’s 737 MAX and 787 programs to evaluate supply chain resilience, demand forecasting, and quality management challenges in global aviation manufacturing.",

    responsibilities: [
      "Analyzed operational disruptions in Boeing’s 737 MAX and 787 programs using operations management frameworks.",
      "Developed demand forecasting models using Holt’s Trend-Adjusted Forecasting method.",
      "Built a Supplier Risk Matrix to evaluate single-source supplier dependencies and supply chain vulnerabilities.",
      "Conducted quality analysis using QFD and Fishbone (Root Cause) techniques to identify systemic issues.",
      "Proposed strategic recommendations for capacity planning, dual sourcing, and quality assurance improvements."
    ],

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

  {
    id: 2,
    name: "Pizza Place Project – Finance in the Real World",
    role: "Financial Strategy & Business Analyst",
    image: project2,

    summary:
      "A real-world corporate finance and strategy project conducted with a local Brooklyn pizzeria to evaluate financial performance, operational efficiency, and expansion feasibility using real business data.",

    responsibilities: [
      "Conducted on-site interviews with business owners to understand operational workflows and financial challenges.",
      "Built financial statements and cash flow models based on real operational data.",
      "Performed valuation and investment analysis using WACC, NPV, and IRR models.",
      "Analyzed multiple financing scenarios to determine the optimal capital structure.",
      "Developed strategic recommendations for operational improvements and future expansion."
    ],

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
    name: "Heat Transfer Enhancement Using Surface Geometry Modification",
    role: "Research Project",
    image: project3,

    summary:
      "A research project focused on improving heat exchanger efficiency by analyzing how different surface geometries influence heat transfer performance using Computational Fluid Dynamics (CFD).",

    responsibilities: [
      "Designed modified surface geometries to analyze their impact on heat transfer performance.",
      "Conducted CFD simulations to study fluid flow and thermal behavior across different configurations.",
      "Evaluated heat transfer coefficients and pressure drop variations across models.",
      "Compared simulation results to identify optimal surface structures for improved thermal efficiency.",
      "Documented findings and prepared technical reports presenting performance improvements."
    ],

    technologies: [
      "CFD Simulation",
      "Heat Transfer Analysis",
      "Thermal Engineering",
      "ANSYS / Simulation Tools",
      "Data Analysis"
    ],

    report: reportProject3,
    ppt: null,
    github: null,
    live: null
  }
],
  
  about: {
  summary: `
I’m Krishnanand currently pursuing my M.S. in Management of Technology at NYU Tandon.

My journey started in mechanical engineering, working on large-scale industrial systems at JSW Steel. Managing maintenance for one of the largest steel converters in Asia and leading a team of 40+ engineers taught me something early: execution matters, but structured thinking matters even more. Reducing downtime by 15% wasn’t just an operational win, it was about understanding systems deeply and improving them intentionally.

Over time, I realized I didn’t just enjoy solving technical problems I enjoyed aligning people, strategy, and execution. That curiosity led me into product and project leadership roles, where I’ve worked end-to-end: defining scope, aligning stakeholders, running Agile sprints, managing budgets, and driving launches.

What drives me today is simple:
I like turning ambiguity into clarity.
I like building structure where there is complexity.
And I like delivering outcomes that are both technically sound and business-relevant.

At NYU, I’m sharpening that intersection technology, management, and decision-making so I can build and lead systems that scale responsibly and intelligently.
`,
highlights: [
    {
    title: "Product & Project Delivery",
      description:
        "Led end-to-end execution of projects — defining scope, managing Agile sprints, aligning cross-functional teams, and ensuring on-time delivery. Experienced in removing bottlenecks, mitigating risks, and translating business goals into actionable roadmaps.",
    },
    {
      title: "Operations & Process Optimization",
      description:
        "At JSW Steel, managed mechanical maintenance operations for large-scale industrial systems, reducing downtime by 15% through preventive scheduling and root-cause analysis. Supervised 40+ engineers while driving Total Quality Management (TQM) and Kaizen initiatives to improve plant performance.",
    },
    {
      title: "Technology × Startegy × Execution",
      description:
        "I operate at the intersection of technology, management, and execution. With hands-on engineering experience and formal management training, I focus on aligning technical initiatives with business objectives, ensuring that innovation is practical, scalable, and outcome-driven.",
    },
  ],
},
leadership: [
  {
    id: 1,
    description: "Led Safety Awareness Programs at JSW Steel, promoting a strong safety culture, risk prevention, and operational discipline among engineering teams in a large-scale industrial environment."
  },
  {
    id: 2,
    description: "Organizing Committee Member – COLOSSEUM Technical Festival, contributed to planning and executing large-scale technical events during undergraduate studies, coordinating on-ground activities and team logistics."
  },
  {
    id: 3,
    description: "Freelance Tutor (3+ Years) — Mentored 100+ high school students in Mathematics and Physics, designing structured learning plans and intensive entrance-exam preparation that significantly improved student performance."
  },
  {
    id: 4,
    description: "District-Level Athletics Champion, reflecting dedication, endurance, and a results-driven mindset."
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
      name: "Introduction to Programming with MATLAB",
      issuer: "Vanderbilt University",
      date: "Jun 2020",
      logo: LalitechLogo,
      skills: ["Programming", "Data Analysis & Visualization"],
      preview: cert2Thumb,
      link: cert2PDF,
    },
    {
      id: 3,
      name: "Introduction to Six Sigma",
      issuer: "Simplilearn",
      date: "2025",
      logo: kjsceLogo,
      skills: ["Strategic Thinking", "Problem-Solving"],
      preview: cert3Thumb,
      link: cert3PDF,
    },
     {
      id: 4,
      name: "Excel Skills for Business",
      issuer: "Macquarie University",
      date: "2020",
      logo: kjsceLogo,
      skills: ["Advance Visualization","Complex Data analysis"],
      preview: cert4Thumb,
      link: cert4PDF,
    },
     {
      id: 5,
      name: "Assitant Engineer",
      issuer: "Royal Enfiled",
      date: "2021",
      logo: kjsceLogo,
      skills: ["complex repair projects", "quality control standards"],
      preview: cert5Thumb,
      link: cert5PDF,
    },
    {
      id: 6,
      name: "Refreigeration and Air Conditioning",
      issuer: "Godrej",
      date: "2021",
      logo: kjsceLogo,
      skills: ["Optimize RAC Systems", "Technoloy Fundamentals"],
      preview: cert6Thumb,
      link: cert6PDF,
    },
    
    
  ],
  experience: [
  {
    id: 1,
    role: "Product Manager",
    company: "Lalitech India Private Limited",
    logo: LalitechLogo,
    type: "Full-time",
    duration: "June 2024 - Aug 2025",
    location: "Pune, Maharashtra, India",
    responsibilities: [
      "Led product development by defining scope, roadmap, and deliverables aligned with business objectives.",
      "Managed Agile sprints and coordinated cross-functional teams to deliver product releases.",
      "Implemented AI-driven market analysis to improve product positioning and pricing strategies.",
      "Introduced AI productivity tools that reduced administrative workload by 30%.",
      "Oversaw product documentation, budgets, and post-launch performance reviews."
    ],
    
  },
    {
      id: 2,
      role: "Assistant Manager",
      company: "JSW Steel",
      logo: JSWLogo,
      type: "Full-time",
      duration: "Jun 2022 – Oct 2023",
      location: "Mumbai, Maharashtra, India",
      responsibilities: [
        

"Managed maintenance operations for one of Asia’s largest steel converters.",
"Reduced operational downtime by 15% through predictive analytics and root-cause analysis.",
"Led a team of 40+ engineers while ensuring safety, efficiency, and quality standards.",
"Implemented Total Quality Management (TQM) and Kaizen initiatives to improve operational performance."


      ],
       
    },
      {
      id: 3,
      role: "Assistant Engineer",
      company: "Royal Enfield",
      logo: RoyalEnfieldLogo,
      type: "Internship",
      duration: "01st July 2022 – 31st July 2022",
      location: "Mumbai, Maharashtra, India",
      responsibilities: [
        
"Performed motorcycle maintenance and diagnostics, including engine, brake, transmission, and fuel system repairs, while collaborating with senior mechanics and maintaining strict safety and quality standards.",


      ],
       achievements: [
     "Successfully delivered multiple client websites within tight timelines, improving client satisfaction.",
"Reduced iteration cycles by 15–20% through clearer requirement gathering and sprint-based execution.",],
      technologies: ["WordPress","React.js","HTML","CSS"]
    }
  ]
};
