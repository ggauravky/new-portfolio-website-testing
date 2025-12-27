# Complete Portfolio Website - Missing Files Reference

This document lists all remaining frontend components that need to be created.
The core architecture and backend are complete. Use this as a reference to build the remaining components.

## 📁 Frontend Components to Create

### Home Page Components (`client/src/components/home/`)

#### 1. Skills.jsx

```jsx
import { motion } from "framer-motion";
import { SKILLS } from "../../utils/constants";
import Card from "../common/Card";
// Display skills in 3 columns (AI/Data Science, Python, Web)
// Each category as a card with icons and skill names
// Make responsive: 1 column mobile, 2 tablet, 3 desktop
```

#### 2. ProjectsPreview.jsx

```jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useFetch } from "../../hooks/useFetch";
import { getFeaturedProjects } from "../../services/api";
import ProjectCard from "../projects/ProjectCard";
import Loading from "../common/Loading";
// Fetch and display top 3 featured projects
// Show "View All Projects" button linking to /projects
```

#### 3. Experience.jsx

```jsx
import { motion } from "framer-motion";
import { useFetch } from "../../hooks/useFetch";
import { getExperiences } from "../../services/api";
import Loading from "../common/Loading";
// Display experiences in timeline format
// If no experiences, show "Actively seeking internships"
```

#### 4. Education.jsx

```jsx
import { motion } from "framer-motion";
import { EDUCATION } from "../../utils/constants";
import Card from "../common/Card";
// Display education details in a card
// Include degree, university, year, subjects
```

#### 5. BlogsPreview.jsx

```jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useFetch } from "../../hooks/useFetch";
import { getLatestBlogs } from "../../services/api";
import BlogCard from "../blogs/BlogCard";
import Loading from "../common/Loading";
// Fetch and display 2 latest blogs
// Show "View All Blogs" button linking to /blogs
```

#### 6. Contact.jsx

```jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { submitContactForm } from "../../services/api";
import { useForm } from "../../hooks/useForm";
import { SOCIAL_LINKS } from "../../utils/constants";
import Button from "../common/Button";
// Contact form with name, email, subject, message
// Social media links on the side
// Success/error messages
// Client-side validation
```

### Project Components (`client/src/components/projects/`)

#### 1. ProjectCard.jsx

```jsx
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Card from "../common/Card";
// Display project with image, title, description, tech stack
// Links to GitHub and live demo
```

#### 2. ProjectFilter.jsx

```jsx
import { motion } from "framer-motion";
import { PROJECT_CATEGORIES } from "../../utils/constants";
// Filter tabs: All, AI/Data Science, Python, Web Development
// Highlight active filter
```

### Blog Components (`client/src/components/blogs/`)

#### 1. BlogCard.jsx

```jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatDate } from "../../utils/helpers";
import Card from "../common/Card";
// Display blog with cover image, title, excerpt, read time, date
// Link to /blogs/:slug
```

#### 2. BlogList.jsx

```jsx
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
// Grid layout of blog cards
// Responsive: 1 column mobile, 2 tablet, 3 desktop
```

#### 3. BlogDetail.jsx

```jsx
import { motion } from "framer-motion";
import { formatDate } from "../../utils/helpers";
// Full blog post view with cover image, title, metadata, content
// Render HTML/markdown content
```

### Pages (`client/src/pages/`)

#### 1. Projects.jsx

```jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { useFetch } from "../hooks/useFetch";
import { getProjects } from "../services/api";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectFilter from "../components/projects/ProjectFilter";
import Loading from "../components/common/Loading";
// Full projects page with filtering
// Grid layout of all projects
```

#### 2. Blogs.jsx

```jsx
import { motion } from "framer-motion";
import { useFetch } from "../hooks/useFetch";
import { getBlogs } from "../services/api";
import BlogList from "../components/blogs/BlogList";
import Loading from "../components/common/Loading";
// Full blogs page
// Display all published blogs
```

#### 3. BlogPost.jsx

```jsx
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useFetch } from "../hooks/useFetch";
import { getBlogBySlug } from "../services/api";
import BlogDetail from "../components/blogs/BlogDetail";
import Loading from "../components/common/Loading";
// Individual blog post page
// Fetch blog by slug from URL
```

## 🎨 Icon Library Setup

Install React Icons for the project:

```bash
cd client
npm install react-icons
```

Common icons used:

- `FaGithub`, `FaLinkedin`, `FaTwitter`, `FaEnvelope` - Social media
- `FaArrowRight`, `FaDownload` - Buttons
- `FaExternalLinkAlt` - External links
- `FaBars`, `FaTimes` - Mobile menu
- `FaPython`, `FaReact`, `FaNodeJs` - Tech icons
- `FaCode`, `FaRobot`, `FaChartBar` - Skills

## 🖼️ Images Setup

Required images in `client/public/images/`:

1. **profile.jpg** - Your professional photo (400x400px minimum)
2. **logo.png** - Your logo (for navbar)
3. **favicon.ico** - Browser tab icon
4. **projects/** - Project screenshots
5. **blogs/** - Blog cover images

Placeholder images will show if real images are missing.

## ⚙️ Environment Setup

Create actual .env files from examples:

**Backend:**

```bash
cd server
copy .env.example .env
# Edit .env with your MongoDB URI
```

**Frontend:**

```bash
cd client
copy .env.example .env
# Default should work for local development
```

## 🗄️ Database Seeding

Create `server/scripts/seed.js` to populate initial data:

```javascript
require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("../src/models/Project");
const Blog = require("../src/models/Blog");
const Experience = require("../src/models/Experience");

const projects = [
  {
    title: "AI Chatbot",
    shortDescription: "Intelligent chatbot using NLP",
    fullDescription: "Built an AI-powered chatbot...",
    category: "AI/Data Science",
    techStack: ["Python", "TensorFlow", "Flask"],
    githubLink: "https://github.com/yourusername/project",
    featured: true,
    order: 1,
  },
  // Add more projects
];

const blogs = [
  {
    title: "Getting Started with Machine Learning",
    slug: "getting-started-with-machine-learning",
    excerpt: "A beginner's guide...",
    content: "Full content here...",
    tags: ["ML", "AI", "Python"],
    published: true,
    publishedAt: new Date(),
  },
  // Add more blogs
];

const experiences = [
  {
    type: "internship",
    title: "Data Science Intern",
    organization: "Company Name",
    startDate: new Date("2024-01-01"),
    description: "Working on ML models...",
    skills: ["Python", "Pandas"],
    order: 1,
  },
  // Add more experiences
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Project.deleteMany();
    await Blog.deleteMany();
    await Experience.deleteMany();

    await Project.insertMany(projects);
    await Blog.insertMany(blogs);
    await Experience.insertMany(experiences);

    console.log("✓ Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("✗ Seeding error:", error);
    process.exit(1);
  }
};

seedDatabase();
```

Run with: `node server/scripts/seed.js`

## 🚀 Quick Build Script

Create `build-all.ps1` for quick setup (Windows PowerShell):

```powershell
Write-Host "=== Portfolio Setup ===" -ForegroundColor Cyan

# Backend setup
Write-Host "`n[1/4] Setting up backend..." -ForegroundColor Yellow
cd server
if (!(Test-Path ".env")) {
  Copy-Item ".env.example" ".env"
  Write-Host "Created server/.env - PLEASE UPDATE WITH YOUR MONGODB URI" -ForegroundColor Red
}
if (!(Test-Path "node_modules")) {
  npm install
}

# Frontend setup
Write-Host "`n[2/4] Setting up frontend..." -ForegroundColor Yellow
cd ../client
if (!(Test-Path ".env")) {
  Copy-Item ".env.example" ".env"
}
if (!(Test-Path "node_modules")) {
  npm install
}

Write-Host "`n[3/4] Setup complete!" -ForegroundColor Green
Write-Host "`n[4/4] Next steps:" -ForegroundColor Cyan
Write-Host "1. Update server/.env with your MongoDB URI"
Write-Host "2. Add your profile photo to client/public/images/profile.jpg"
Write-Host "3. Customize client/src/utils/constants.js"
Write-Host "4. Create remaining frontend components (see MISSING_FILES.md)"
Write-Host "5. Seed database: node server/scripts/seed.js"
Write-Host "6. Start backend: cd server && npm start"
Write-Host "7. Start frontend: cd client && npm run dev"
```

## ✅ Completion Checklist

- [ ] All backend files created
- [ ] Core frontend architecture created
- [ ] Remaining components created (see list above)
- [ ] MongoDB Atlas setup
- [ ] Environment variables configured
- [ ] Profile photo added
- [ ] Constants customized with your info
- [ ] Database seeded with sample data
- [ ] Backend running (port 5000)
- [ ] Frontend running (port 5173)
- [ ] Contact form tested
- [ ] All pages responsive
- [ ] Ready for deployment

## 📚 Component Patterns

### Standard Component Structure:

```jsx
import { motion } from "framer-motion";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";

const ComponentName = () => {
  const { data, loading, error } = useFetch(apiFunction, []);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  return (
    <section id="section-id" className="section">
      <div className="container">{/* Content */}</div>
    </section>
  );
};

export default ComponentName;
```

### Responsive Grid Pattern:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <Card key={item.id}>{/* Card content */}</Card>
  ))}
</div>
```

---

**For detailed architecture and deployment, see ARCHITECTURE.md**
**For project setup and usage, see README.md**
