// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
  buttonColor: "#4305ba",
  LinkHighlightColor: "#4305ba",
};

// Transitions
const transitions = {
  active: true, // activate for all sections
  onlyLanding: false, // activate only for initial load of landing page
  showOnce: true, // transition only once
  thresholdOption: 0.2, // indicates at what percentage of the sections visibility the transition should start
};

// Splash Screen
const splashScreen = true; // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
  intro: "Hello 👋, my name is",
  name: "Mohit Mehta",
  message:
    "I am a seasoned senior front-end developer with a passion for crafting immersive digital experiences that seamlessly blend creativity with functionality. With 5+ years of hands-on experience in the ever-evolving landscape of web development, I thrive on the challenges posed by modern technologies and industry standards.",
  basedLocation: "Noida, India",
  resumeLink:
    "https://drive.google.com/file/d/1MoIzqHmXItIBYIhPtdqjSYNOsJR9zQYe/view?usp=drive_link", // recommended: google drive file share link (change to "anyone on the internet can view")
  logo: {
    link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
    custom: true, // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
  },
  portraitLink: "images/portrait.jpg",
};

const socialMediaLinks = {
  github: "https://github.com/money280497",
  linkedin: "https://www.linkedin.com/in/mohit-mehta-04a12b12b",
}; // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
  autobiography: [
    "As a senior member of any development team, I bring leadership, mentorship, and a strategic mindset to the table. Whether it's guiding junior developers, architecting scalable solutions, or spearheading the adoption of new technologies, I am driven by a relentless pursuit of excellence and a passion for pushing the boundaries of what's possible in front-end development.",
  ], // Separated items are paragraphs
  techStack: ["React.js", "JavaScript", "Node.js", "Html", "Css"],
  photo3Link: "images/portrait3.jpg",
};

// --- 🛡️ Experience Section ---
const experiences = [
  {  
    position: "Senior Software Engineer",  
    company: { 
      name: "Coupa Software, Pune", 
      link: "https://coupa.com/" 
    },  
    duration: "Jan 2025 - Present",  
    bulletPoints: [
      "Built and enhanced the Sentinel UI platform using Streamlit and FastAPI to support AI agent workflows, PR analysis, and engineering productivity use cases.",  
      "Designed and integrated backend services with AWS Bedrock, GitHub, Jenkins, Confluence, and internal tooling for end-to-end automation.",  
      "Implemented and maintained database-driven features with MySQL, SQLAlchemy, and Alembic migrations, including chat/session and app management capabilities.",  
      "Improved deployment reliability through Docker-based builds, Helm/Kubernetes configuration, and CI/CD workflow alignment across dev and qas environments."  
    ],
    hashtags: ["Python", "Streamlit", "FastAPI", "AWS", "Boto3", "MySQL", "SQLAlchemy", "Alembic", "Redis", "Docker", "Helm", "Kubernetes", "Gunicorn", "Jenkins", "GitHubActions", "CI/CD"]
  },
  {
    position: "Senior Software Engineer",
    company: {
      name: "One 97 Communications Paytm Ltd, Noida",
      link: "https://paytm.com/",
    },
    duration: "April 2022 - Present",
    bulletPoints: [
      "Built user interface for Manage Fastag feature and crosss platform mobile application.",
      "Research and evaluate alternative solutions and make recommendations for better performance.",
      " Worked with project manager, developers and testers to resolve technical issues following agile methodology.",
      " Monitoring Jira tickets, code review of peers and writing unit test cases.",
    ],
    hashtags: [
      "React.js",
      "Node.js",
      "Javascript",
      "Redux-Thunk",
      "Cloud Computing",
      "Docker",
      "Jenkins",
      "Kibana",
      "Grafana",
      "Prometheus",
    ],
  },
  {
    position: "Software Engineer",
    company: {
      name: "Trantor Software Pvt. Ltd, Gurgaon",
      link: "https://trantorinc.com/",
    },
    duration: "April 2021 - March 2022",
    bulletPoints: [
      "Developing an UI application to manage and administrate the process of ordering, packing, generating labels for an item to shipped it to the client.",
      "Code optimization, observation, collaboration.",
      "UI portal for uploading and downloading documents.",
      "Developed standard and ad hoc reports in graph format.",
    ],
    hashtags: [
      "React.js",
      "Javascript",
      "GraphQL",
      "AWS",
      "Github",
      "Redux",
      "Redux-Saga",
      "ES6",
      "REST Api",
      "Python",
    ],
  },
  {
    position: "Junior Software Engineer",
    company: {
      name: "Aurigo Software Technologies,Bengaluru",
      link: "https://aurigo.com/",
    },
    duration: "July 2018 - March 2021",
    bulletPoints: [
      "The Aurigo Masterworks Cloud is an enterprise software products for planning, building and maintaining large capital infrastructure and assets.",
      "Develop new features and modules in the application.",
      "Integration of application with the existing system.",
      " Enabled support for localisation, custom code editor.",
    ],
    hashtags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Javascript",
      "Context Api",
      "HTML",
      "CSS",
      "SQL",
      "JSON",
    ],
  },
];

// --- 💻 Work Section ---
const works = [
  {
    projectName: "Jira Dashboard",
    yearCompleted: "2024",
    description:
      " Jira Dashboard is a customizable and centralized hub that show various types of real-time information to help you track and monitor your work across projects.",
    links: [
      {
        label: "",
        type: "git",
        url: "https://github.com/money280497/jira-dashboard/",
      },
    ],
    imageLink: "images/tracksubs_pic.png",
    alignLeft: false,
  },
];

const archiveLink = "https://github.com/money280497?tab=repositories";

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
  externalLink: {
    shortTitle: "Get in Touch",
    note: [
      " I’m thrilled to share a bit about myself —",
      "A versatile individual with a diverse range of interests and passions, including coding, calisthenics, gymming, swimming, cricket, football, esports, and music.",
      "I strive for excellence, creativity, and authenticity.",
      "Thank you for taking the time to explore my portfolio, and I look forward to connecting with you soon!",
    ], // paragraph breaks will be entered after each item,
    link: {
      email: "", // email takes precedance
      other: "https://forms.gle/W3MswTKsPWMxEbn58",
    },
    responseTimeMessage: "...and I'll resopnd within the next 24hrs",
  },
  formEmbedLink: "", // inclusion of this link will take precedance
};

export default {
  colors,
  transitions,
  splashScreen,
  greeting,
  socialMediaLinks,
  about,
  experiences,
  works,
  archiveLink,
  contact,
};
