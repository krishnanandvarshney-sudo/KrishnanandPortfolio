// src/portfolioData.js
export const portfolioData = {
  personal: {
    name: "Anushka Karamchandani",
    title: "Product, Project & Technology Consultant",
    tagline: "Graduate student at NYU with experience at Oracle delivering client-focused technology solutions for global banking clients. I bridge product strategy, project execution, and engineering to build scalable, user-centric digital products that drive real business impact",
    email: "karamchandanianushka1206@gmail.com",
    github: "https://github.com/Mohit555000",
    linkedin: "https://www.linkedin.com/in/anushka-karamchandani-952394203/",
    photo: "src/assets/anushka_personal.png"
  },
  education: [
    {
      id: 1,
      degree: "Master of Science in Product Management",
      institution: "University of Technology",
      duration: "2024 - 2026",
      location: "San Francisco, CA",
      gpa: "3.9/4.0",
      highlights: [
        "Specialized in AI Product Strategy and User Experience Research",
        "Winner of the 2025 Graduate Innovation Challenge",
        "Served as Graduate Teaching Assistant for Product Analytics"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Computer Science",
      institution: "State Engineering College",
      duration: "2020 - 2024",
      location: "Mumbai, India",
      gpa: "3.8/4.0",
      highlights: [
        "Head of the Entrepreneurship Cell (E-Cell)",
        "Completed a capstone project on decentralized finance (DeFi)",
        "Published a research paper on Human-Computer Interaction"
      ]
    }
  ],
    skills: {
    product: [
      "Product Strategy", 
      "Market Analysis", 
      "User Research", 
      "Agile/Scrum", 
      "A/B Testing", 
      "PRD Writing"
    ],
    technical: [
      "React.js", 
      "JavaScript (ES6+)", 
      "Node.js", 
      "SQL", 
      "Python", 
      "REST APIs"
    ],
    tools: [
      "Jira", 
      "Figma", 
      "Amplitude", 
      "Mixpanel", 
      "Postman", 
      "Google Analytics"
    ],
    soft: [
      "Stakeholder Management", 
      "Public Speaking", 
      "Team Leadership", 
      "Critical Thinking", 
      "Adaptability"
    ]
  },
  projects: [
    {
      id: 1,
      name: "EcoTrack AI",
      role: "Lead Product Manager",
      image: "images.unsplash.com",
      description: "An AI-powered sustainability platform that helps enterprise companies track and reduce their carbon footprint in real-time.",
      problem: "Enterprises struggled to aggregate emissions data across fragmented global supply chains.",
      solution: "Developed an automated ingestion engine that uses ML to categorize and calculate CO2 impact.",
      impact: "Reduced reporting time by 60% and identified 15% carbon savings for beta clients.",
      technologies: ["React", "Python", "AWS", "TensorFlow"],
      github: "github.com",
      live: "https://ecotrack-demo.com"
    },
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
  skills: {
    product: ["Strategy", "Roadmapping"],
    technical: ["React", "JavaScript"],
    tools: ["Jira", "Figma"],
    soft: ["Leadership"]
  },
  about:{
     summary:"Master's student with a passion for building products that solve real-world problems. With 1+ year of industry experience, I combine technical understanding with user-centric design to create impactful solutions. My background in technology and business enables me to bridge the gap between engineering teams and stakeholders, delivering products that users love.",
      highlights: [
      "Led cross-functional teams to launch 3 major product features",
      "Increased user engagement by 40% through data-driven improvements",
      "Expertise in agile methodologies and product lifecycle management",
    ],
  },
  experience: [
    {
      id: 1,
      role: "Associate Product Manager",
      company: "Tech Solutions Inc.",
      logo: "placehold.co",
      type: "Full-time",
      duration: "Jan 2024 - Present",
      location: "Remote",
      responsibilities: [
        "Leading the development of a new customer dashboard using Agile methodologies.",
        "Collaborating with engineering and design teams to define product requirements.",
        "Analyzing user feedback to prioritize the product backlog."
      ],
      achievements: [
        "Reduced customer churn by 15% within the first two quarters.",
        "Successfully launched a beta program with over 500 active participants."
      ],
      technologies: ["Jira", "Figma", "Mixpanel", "SQL"]
    },
    {
      id: 2,
      role: "Product Intern",
      company: "Innovate Corp",
      logo: "placehold.co",
      type: "Internship",
      duration: "June 2023 - Dec 2023",
      location: "Mumbai, IN",
      responsibilities: [
        "Assisted in market research and competitor analysis for a new mobile app.",
        "Drafted PRDs and user stories for cross-functional development teams.",
        "Conducted A/B testing on landing pages to improve conversion rates."
      ],
      technologies: ["Trello", "Google Analytics", "Hotjar"]
    }
  ]
};
