// Skills data organized by category
export const SKILLS = {
  "AI / Data Science": [
    { name: "Python", icon: "SiPython" },
    { name: "NumPy", icon: "SiNumpy" },
    { name: "Pandas", icon: "SiPandas" },
    { name: "Data Analysis", icon: "FaChartBar" },
    { name: "Data Visualization", icon: "FaChartLine" },
    { name: "Machine Learning", icon: "GiBrain" },
    { name: "TensorFlow", icon: "SiTensorflow" },
    { name: "Scikit-learn", icon: "SiScikitlearn" },
  ],
  "Python Development": [
    { name: "Core Python", icon: "SiPython" },
    { name: "Object-Oriented Programming", icon: "FaCode" },
    { name: "Automation", icon: "FaRobot" },
    { name: "Flask", icon: "SiFlask" },
    { name: "Django", icon: "SiDjango" },
    { name: "REST APIs", icon: "FaServer" },
    { name: "SQLAlchemy", icon: "FaDatabase" },
  ],
  "Web Development": [
    { name: "HTML5", icon: "FaHtml5" },
    { name: "CSS3", icon: "FaCss3Alt" },
    { name: "JavaScript", icon: "FaJsSquare" },
    { name: "React", icon: "FaReact" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "Node.js", icon: "FaNodeJs" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "Git & GitHub", icon: "FaGithub" },
  ],
};

// Social media links
export const SOCIAL_LINKS = {
  github: "https://github.com/ggauravky",
  linkedin: "https://www.linkedin.com/in/gauravky/",
  instagram: "https://www.instagram.com/the_gau_rav/",
  email: "mailto:kumar.gaurav.yadav2007@gmail.com",
  leetcode: "https://leetcode.com/u/gauravky/",
  geeksforgeeks: "https://www.geeksforgeeks.org/profile/gauravky",
};

// Navigation links
export const NAV_LINKS = [
  { name: "Home", path: "/", hash: "#home" },
  { name: "About", path: "/", hash: "#about" },
  { name: "Skills", path: "/", hash: "#skills" },
  { name: "Projects", path: "/projects", hash: "" },
  { name: "Experience", path: "/", hash: "#experience" },
  { name: "Blogs", path: "/blogs", hash: "" },
  { name: "Contact", path: "/", hash: "#contact" },
];

// Project categories
export const PROJECT_CATEGORIES = [
  "All",
  "AI / Data Science",
  "Python",
  "Web Development",
];

// Education data
export const EDUCATION = {
  degree: "Bachelor of Computer Applications (BCA)",
  university: "BBDU Lucknow",
  year: "2024 - 2027",
  currentYear: "2nd Year",
  subjects: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Web Technologies",
    "Python Programming",
    "Computer Networks",
    "Operating Systems",
  ],
};

// About section content
export const ABOUT_CONTENT = {
  intro: `I'm a passionate AI & Data Science enthusiast currently pursuing my Bachelor's in Computer Applications. My journey in technology is driven by curiosity and a desire to solve real-world problems using data-driven insights.`,

  journey: `What started as a fascination with how machines learn has evolved into a dedicated pursuit of mastering data science and artificial intelligence. From analyzing datasets to building predictive models, every project teaches me something new about the power of data.`,

  goal: `My goal is to become a skilled AI/ML engineer who can bridge the gap between complex algorithms and practical applications. I'm actively seeking internship opportunities where I can contribute to innovative projects while continuing to learn and grow.`,

  skills: `Beyond AI and data science, I'm proficient in Python development and web technologies. This diverse skill set allows me to build end-to-end solutions, from data processing pipelines to user-friendly web interfaces.`,
};

// Timeline data for learning journey
export const LEARNING_TIMELINE = [
  {
    year: "2024",
    title: "Started BCA Journey",
    description:
      "Began my Bachelor of Computer Applications at BBDU Lucknow, discovered passion for programming",
  },
  {
    year: "2024",
    title: "Python & Data Structures",
    description:
      "Mastered Python fundamentals and core data structures & algorithms",
  },
  {
    year: "2024",
    title: "Data Science Foundation",
    description:
      "Learned NumPy, Pandas, and data visualization with Matplotlib/Seaborn",
  },
  {
    year: "2025",
    title: "Machine Learning",
    description:
      "Started exploring ML algorithms and building predictive models",
  },
  {
    year: "2025",
    title: "Web Development",
    description:
      "Built full-stack applications using React, Node.js, and MongoDB",
  },
  {
    year: "2025",
    title: "Current: AI Projects",
    description:
      "Working on AI-powered projects and seeking internship opportunities",
  },
];

// Contact form validation messages
export const VALIDATION_MESSAGES = {
  name: {
    required: "Name is required",
    min: "Name must be at least 2 characters",
    max: "Name must not exceed 50 characters",
  },
  email: {
    required: "Email is required",
    invalid: "Please enter a valid email address",
  },
  subject: {
    required: "Subject is required",
    min: "Subject must be at least 3 characters",
    max: "Subject must not exceed 100 characters",
  },
  message: {
    required: "Message is required",
    min: "Message must be at least 10 characters",
    max: "Message must not exceed 1000 characters",
  },
};

// Meta tags for SEO
export const SEO_DATA = {
  home: {
    title: "Gaurav Kumar Yadav - AI & Data Scientist | Python Developer",
    description:
      "Passionate AI & Data Science enthusiast specializing in machine learning, Python development, and web technologies.",
    keywords:
      "Gaurav Kumar Yadav, AI, Data Science, Python, Machine Learning, Web Development, Portfolio",
  },
  projects: {
    title: "Projects - Gaurav Kumar Yadav | AI & Data Science Portfolio",
    description:
      "Explore my projects in AI, data science, Python development, and web applications.",
    keywords:
      "AI Projects, Data Science Projects, Python Projects, Web Development",
  },
  blogs: {
    title:
      "Blog - Gaurav Kumar Yadav | Insights on AI, Data Science & Technology",
    description:
      "Read my thoughts and learnings on AI, data science, Python, and emerging technologies.",
    keywords: "AI Blog, Data Science Blog, Python Tutorials, Tech Articles",
  },
};

// Animation variants for Framer Motion
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  slideDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  },
  stagger: {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

// Loading states
export const LOADING_STATES = {
  idle: "idle",
  loading: "loading",
  success: "success",
  error: "error",
};

// API endpoints
export const API_ENDPOINTS = {
  projects: "/projects",
  featuredProjects: "/projects/featured",
  blogs: "/blogs",
  latestBlogs: "/blogs/latest",
  contact: "/contact",
  experiences: "/experiences",
};
