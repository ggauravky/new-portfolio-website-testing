require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("../models/Project");
const Blog = require("../models/Blog");
const Experience = require("../models/Experience");

// Sample Projects Data
const sampleProjects = [
  {
    title: "AI-Powered Sentiment Analysis Tool",
    shortDescription:
      "Real-time sentiment analysis using NLP and machine learning",
    fullDescription:
      "Built a sentiment analysis application that processes text data using Natural Language Processing techniques. Implemented using Python, scikit-learn, and NLTK. Deployed with a Flask API and React frontend.",
    techStack: ["Python", "scikit-learn", "NLTK", "Flask", "React", "Pandas"],
    category: "AI / Data Science",
    imageUrl:
      "https://via.placeholder.com/400x300/13131a/00d9ff?text=Sentiment+Analysis",
    githubLink: "https://github.com/yourusername/sentiment-analysis",
    liveLink: "",
    featured: true,
    order: 1,
  },
  {
    title: "Stock Price Predictor",
    shortDescription: "LSTM-based model for predicting stock market trends",
    fullDescription:
      "Developed a time series forecasting model using LSTM neural networks to predict stock prices. Features data preprocessing, feature engineering, and interactive visualizations.",
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "Pandas",
      "Matplotlib",
      "NumPy",
    ],
    category: "AI / Data Science",
    imageUrl:
      "https://via.placeholder.com/400x300/13131a/00d9ff?text=Stock+Predictor",
    githubLink: "https://github.com/yourusername/stock-predictor",
    liveLink: "",
    featured: true,
    order: 2,
  },
  {
    title: "Task Automation Suite",
    shortDescription: "Collection of Python scripts for automating daily tasks",
    fullDescription:
      "Created a comprehensive suite of automation scripts including file organizers, email automation, web scrapers, and report generators. Uses schedule, selenium, and smtplib.",
    techStack: ["Python", "Selenium", "BeautifulSoup", "Schedule", "smtplib"],
    category: "Python",
    imageUrl:
      "https://via.placeholder.com/400x300/13131a/00d9ff?text=Automation+Suite",
    githubLink: "https://github.com/yourusername/task-automation",
    liveLink: "",
    featured: false,
    order: 3,
  },
  {
    title: "Portfolio Website",
    shortDescription: "Full-stack portfolio with CMS and blog functionality",
    fullDescription:
      "Modern, responsive portfolio website built with React and Node.js. Features include project showcase, blog with markdown support, contact form, and admin panel for content management.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Vite",
    ],
    category: "Web Development",
    imageUrl:
      "https://via.placeholder.com/400x300/13131a/00d9ff?text=Portfolio",
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://yourportfolio.com",
    featured: true,
    order: 4,
  },
  {
    title: "Data Visualization Dashboard",
    shortDescription: "Interactive dashboard for exploring COVID-19 data",
    fullDescription:
      "Built an interactive data visualization dashboard using Plotly and Dash. Processes large datasets and provides real-time insights through various charts and graphs.",
    techStack: ["Python", "Plotly", "Dash", "Pandas", "NumPy"],
    category: "AI / Data Science",
    imageUrl:
      "https://via.placeholder.com/400x300/13131a/00d9ff?text=Dashboard",
    githubLink: "https://github.com/yourusername/covid-dashboard",
    liveLink: "",
    featured: false,
    order: 5,
  },
  {
    title: "RESTful API with Authentication",
    shortDescription: "Secure REST API with JWT authentication and MongoDB",
    fullDescription:
      "Developed a production-ready RESTful API with user authentication, authorization, rate limiting, and comprehensive error handling. Implements best practices for security and scalability.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Bcrypt", "Joi"],
    category: "Web Development",
    imageUrl: "https://via.placeholder.com/400x300/13131a/00d9ff?text=REST+API",
    githubLink: "https://github.com/yourusername/rest-api",
    liveLink: "",
    featured: false,
    order: 6,
  },
];

// Sample Blog Posts Data
const sampleBlogs = [
  {
    title: "Getting Started with Machine Learning: A Beginner's Guide",
    slug: "getting-started-with-machine-learning",
    excerpt:
      "Learn the fundamentals of machine learning, from basic concepts to building your first model. Perfect for beginners looking to enter the field of AI.",
    content: `
      <h2>Introduction to Machine Learning</h2>
      <p>Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. In this guide, we'll explore the fundamentals.</p>
      
      <h2>Types of Machine Learning</h2>
      <p>There are three main types of machine learning:</p>
      <ul>
        <li><strong>Supervised Learning:</strong> Learning from labeled data</li>
        <li><strong>Unsupervised Learning:</strong> Finding patterns in unlabeled data</li>
        <li><strong>Reinforcement Learning:</strong> Learning through trial and error</li>
      </ul>
      
      <h2>Building Your First Model</h2>
      <p>Let's start with a simple example using Python and scikit-learn...</p>
      
      <h2>Conclusion</h2>
      <p>Machine learning is an exciting field with endless possibilities. Start small, practice consistently, and keep learning!</p>
    `,
    coverImage:
      "https://via.placeholder.com/1200x600/13131a/00d9ff?text=Machine+Learning+Guide",
    tags: ["Machine Learning", "AI", "Python", "Tutorial"],
    readTime: 8,
    published: true,
    publishedAt: new Date("2024-01-15"),
  },
  {
    title: "Python Data Analysis: Pandas Tips and Tricks",
    slug: "python-data-analysis-pandas-tips",
    excerpt:
      "Discover powerful Pandas techniques to speed up your data analysis workflow. From data cleaning to advanced transformations.",
    content: `
      <h2>Why Pandas?</h2>
      <p>Pandas is the go-to library for data manipulation and analysis in Python. Here are some advanced techniques to boost your productivity.</p>
      
      <h2>Essential Pandas Operations</h2>
      <p>Master these operations for efficient data handling...</p>
      
      <h2>Performance Optimization</h2>
      <p>Learn how to optimize your Pandas code for large datasets...</p>
    `,
    coverImage:
      "https://via.placeholder.com/1200x600/13131a/00d9ff?text=Pandas+Tips",
    tags: ["Python", "Pandas", "Data Analysis", "Tutorial"],
    readTime: 6,
    published: true,
    publishedAt: new Date("2024-02-01"),
  },
  {
    title: "Building Responsive Websites with Tailwind CSS",
    slug: "responsive-websites-tailwind-css",
    excerpt:
      "A comprehensive guide to creating beautiful, responsive websites using Tailwind CSS utility classes and best practices.",
    content: `
      <h2>Introduction to Tailwind CSS</h2>
      <p>Tailwind CSS is a utility-first CSS framework that makes building modern websites faster and more maintainable.</p>
      
      <h2>Responsive Design Principles</h2>
      <p>Learn how to use Tailwind's responsive modifiers...</p>
      
      <h2>Best Practices</h2>
      <p>Follow these guidelines for clean, maintainable code...</p>
    `,
    coverImage:
      "https://via.placeholder.com/1200x600/13131a/00d9ff?text=Tailwind+CSS",
    tags: ["Web Development", "CSS", "Tailwind", "Tutorial"],
    readTime: 7,
    published: true,
    publishedAt: new Date("2024-02-20"),
  },
];

// Sample Experience Data (empty for students seeking opportunities)
const sampleExperiences = [];

const seedDatabase = async () => {
  try {
    console.log("🌱 Starting database seeding...");

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Clear existing data
    console.log("🗑️  Clearing existing data...");
    await Project.deleteMany({});
    await Blog.deleteMany({});
    await Experience.deleteMany({});
    console.log("✅ Existing data cleared");

    // Insert sample projects
    console.log("📦 Inserting sample projects...");
    const projects = await Project.insertMany(sampleProjects);
    console.log(`✅ Inserted ${projects.length} projects`);

    // Insert sample blogs
    console.log("📝 Inserting sample blog posts...");
    const blogs = await Blog.insertMany(sampleBlogs);
    console.log(`✅ Inserted ${blogs.length} blog posts`);

    // Insert sample experiences (empty for now)
    if (sampleExperiences.length > 0) {
      console.log("💼 Inserting sample experiences...");
      const experiences = await Experience.insertMany(sampleExperiences);
      console.log(`✅ Inserted ${experiences.length} experiences`);
    } else {
      console.log(
        'ℹ️  No experiences to insert (showing "seeking opportunities" message)'
      );
    }

    console.log("\n🎉 Database seeding completed successfully!");
    console.log("\n📊 Summary:");
    console.log(`   Projects: ${projects.length}`);
    console.log(`   Blogs: ${blogs.length}`);
    console.log(`   Experiences: ${sampleExperiences.length}`);
    console.log("\n💡 Next steps:");
    console.log("   1. Customize the sample data with your own information");
    console.log("   2. Add your own projects, blogs, and experiences");
    console.log("   3. Update placeholder images with real ones");
    console.log("   4. Start the development server: npm run dev");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log("\n👋 Database connection closed");
    process.exit(0);
  }
};

// Run the seeder
seedDatabase();
