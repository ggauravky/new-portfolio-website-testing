# 🏗️ Portfolio Website - System Architecture

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Database Design](#database-design)
- [API Design](#api-design)
- [UI Layout](#ui-layout)
- [Responsiveness Strategy](#responsiveness-strategy)
- [Error Handling](#error-handling)
- [Deployment](#deployment)

---

## 🛠️ Tech Stack

### Frontend

```json
{
  "framework": "Vite + React 18",
  "styling": "Tailwind CSS v3",
  "animations": "Framer Motion",
  "routing": "React Router DOM v6",
  "icons": "React Icons",
  "forms": "React Hook Form",
  "http": "Axios"
}
```

### Backend

```json
{
  "runtime": "Node.js v18+",
  "framework": "Express.js v4",
  "database": "MongoDB with Mongoose ODM",
  "validation": "Joi",
  "security": "Helmet, CORS, Express Rate Limit",
  "environment": "dotenv"
}
```

### Database

```json
{
  "type": "MongoDB Atlas",
  "driver": "Mongoose ODM",
  "hosting": "Cloud (Free Tier)"
}
```

---

## 📁 Folder Structure

### Frontend Structure

```
client/
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   └── images/
│       ├── profile.jpg          # User's professional photo
│       └── particles-bg.svg     # AI background
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── ProjectsPreview.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── BlogsPreview.jsx
│   │   │   └── Contact.jsx
│   │   ├── projects/
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectFilter.jsx
│   │   │   └── ProjectDetail.jsx
│   │   ├── blogs/
│   │   │   ├── BlogCard.jsx
│   │   │   ├── BlogList.jsx
│   │   │   └── BlogDetail.jsx
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── ErrorBoundary.jsx
│   │   │   └── NotFound.jsx
│   │   └── animations/
│   │       ├── ParticleBackground.jsx
│   │       └── ScrollReveal.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── Blogs.jsx
│   │   ├── BlogPost.jsx
│   │   └── NotFound.jsx
│   ├── services/
│   │   └── api.js              # Axios instance & API calls
│   ├── utils/
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── hooks/
│   │   ├── useFetch.js
│   │   └── useForm.js
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

### Backend Structure

```
server/
├── src/
│   ├── config/
│   │   └── database.js         # MongoDB connection
│   ├── models/
│   │   ├── Project.js
│   │   ├── Blog.js
│   │   ├── Contact.js
│   │   └── Experience.js
│   ├── routes/
│   │   ├── projects.js
│   │   ├── blogs.js
│   │   ├── contact.js
│   │   └── experiences.js
│   ├── controllers/
│   │   ├── projectController.js
│   │   ├── blogController.js
│   │   ├── contactController.js
│   │   └── experienceController.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   ├── validation.js
│   │   └── rateLimiter.js
│   ├── utils/
│   │   ├── validators.js
│   │   └── responseHandler.js
│   └── server.js               # Express app entry
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## 🗄️ Database Design

### Collections & Schemas

#### 1. Projects Collection

```javascript
{
  _id: ObjectId,
  title: String,              // Required
  shortDescription: String,   // For cards (100 chars)
  fullDescription: String,    // Detailed description
  category: String,           // "AI/Data Science", "Python", "Web"
  techStack: [String],        // ["Python", "TensorFlow", "React"]
  githubLink: String,
  liveLink: String,           // Optional
  imageUrl: String,
  featured: Boolean,          // Show on homepage
  order: Number,              // Display order
  createdAt: Date,
  updatedAt: Date
}
```

#### 2. Blogs Collection

```javascript
{
  _id: ObjectId,
  title: String,              // Required
  slug: String,               // URL-friendly (unique)
  excerpt: String,            // Short preview
  content: String,            // Full markdown/HTML content
  coverImage: String,
  tags: [String],             // ["AI", "Python", "Machine Learning"]
  readTime: Number,           // In minutes
  published: Boolean,
  publishedAt: Date,
  views: Number,
  createdAt: Date,
  updatedAt: Date
}
```

#### 3. Contacts Collection

```javascript
{
  _id: ObjectId,
  name: String,               // Required
  email: String,              // Required, validated
  subject: String,
  message: String,            // Required
  status: String,             // "new", "read", "replied"
  ipAddress: String,          // For security
  createdAt: Date
}
```

#### 4. Experiences Collection

```javascript
{
  _id: ObjectId,
  type: String,               // "internship", "hackathon", "project"
  title: String,              // Position/Event name
  organization: String,
  location: String,
  startDate: Date,
  endDate: Date,              // null if current
  description: String,
  achievements: [String],
  skills: [String],
  order: Number,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔌 API Design

### Base URL

- **Development:** `http://localhost:5000/api`
- **Production:** `https://your-backend.render.com/api`

### Endpoints

#### Projects

```
GET    /api/projects              # Get all projects (with filters)
GET    /api/projects/featured     # Get featured projects (homepage)
GET    /api/projects/:id          # Get single project
POST   /api/projects              # Create project (admin only - future)
PUT    /api/projects/:id          # Update project (admin only - future)
DELETE /api/projects/:id          # Delete project (admin only - future)

Query Params:
  ?category=AI/Data Science
  ?featured=true
  ?limit=3
```

#### Blogs

```
GET    /api/blogs                 # Get all blogs
GET    /api/blogs/latest          # Get latest 2 blogs (homepage)
GET    /api/blogs/:slug           # Get single blog by slug
POST   /api/blogs                 # Create blog (admin only - future)
PUT    /api/blogs/:slug           # Update blog (admin only - future)
DELETE /api/blogs/:slug           # Delete blog (admin only - future)

Query Params:
  ?published=true
  ?limit=2
  ?tags=AI,Python
```

#### Contact

```
POST   /api/contact               # Submit contact form
GET    /api/contact               # Get all messages (admin only - future)
```

#### Experiences

```
GET    /api/experiences           # Get all experiences
GET    /api/experiences/:id       # Get single experience
```

### Response Format

**Success Response:**

```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

**Error Response:**

```json
{
  "success": false,
  "error": "Error message",
  "details": { ... }  // Optional validation errors
}
```

---

## 🎨 UI Layout Explanation

### Design System

#### Colors (Dark Theme)

```css
--bg-primary: #0a0a0f        /* Main background */
--bg-secondary: #13131a      /* Cards/sections */
--bg-tertiary: #1a1a24       /* Elevated elements */

--text-primary: #e0e0e0      /* Main text */
--text-secondary: #a0a0a0    /* Secondary text */
--text-muted: #666666        /* Subtle text */

--accent-primary: #00d9ff    /* Cyan - AI theme */
--accent-secondary: #a855f7  /* Purple - AI theme */
--accent-gradient: linear-gradient(135deg, #00d9ff, #a855f7)

--error: #ef4444
--success: #10b981
--warning: #f59e0b
```

#### Typography

```css
Font Family: 'Inter', 'Roboto', sans-serif

Headings:
  H1: 48px / 56px (mobile: 32px / 40px)
  H2: 40px / 48px (mobile: 28px / 36px)
  H3: 32px / 40px (mobile: 24px / 32px)
  H4: 24px / 32px (mobile: 20px / 28px)

Body:
  Regular: 16px / 24px
  Small: 14px / 20px
  Tiny: 12px / 16px
```

#### Spacing System

```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
4xl: 96px
```

### Page Layouts

#### 1. HOME (Single Page Scroll)

**Section Order:**

1. **Hero** - Full viewport height

   - Left: Text (headline, summary, CTAs)
   - Right: Profile image + AI particle animation
   - Mobile: Stack (image top, text below)

2. **About** - Timeline layout

   - Story + education + goals
   - Animated timeline on scroll

3. **Skills** - 3-column grid (mobile: 1 column)

   - AI/Data Science (primary, larger card)
   - Python Development
   - Web Development

4. **Projects Preview** - 3-card grid

   - Top 3 featured projects
   - CTA button → /projects

5. **Experience** - Vertical timeline

6. **Education** - Card with details

7. **Blogs Preview** - 2-column grid

   - Latest 2 blogs
   - CTA button → /blogs

8. **Contact** - Form + social links
   - Left: Contact form
   - Right: Social media icons

#### 2. /projects Page

- Filter tabs at top (All, AI/Data Science, Python, Web)
- Masonry grid of project cards
- Each card: Image, title, tech stack, description, links
- Modal or dedicated page for project details

#### 3. /blogs Page

- Grid of blog cards (3 columns → 2 → 1)
- Search/filter by tags
- Each card: Cover image, title, excerpt, read time, date
- Click → /blogs/:slug

#### 4. /blogs/:slug Page

- Hero image
- Title, date, read time, tags
- Markdown/HTML content rendering
- Navigation (previous/next blog)

---

## 📱 Responsiveness Strategy

### Breakpoints (Tailwind Default)

```
sm: 640px   (tablets portrait)
md: 768px   (tablets landscape)
lg: 1024px  (laptops)
xl: 1280px  (desktops)
2xl: 1536px (large screens)
```

### Mobile-First Approach

**Base Styles (Mobile 320px+):**

- Single column layouts
- Full-width elements
- Larger touch targets (48px min)
- Hamburger menu navigation
- Stacked profile image and text

**Tablet (768px+):**

- 2-column grids
- Side-by-side layouts
- Expanded navigation
- Profile image beside text

**Desktop (1024px+):**

- 3-column grids
- Fixed max-width containers (1280px)
- Hover effects active
- Sticky navigation

### Critical Responsive Rules

1. **Hero Section:**

   ```jsx
   // Desktop: Flexbox row (image right)
   // Mobile: Flexbox column (image top)
   <div className="flex flex-col lg:flex-row">
     <div className="order-2 lg:order-1">Text</div>
     <div className="order-1 lg:order-2">Image</div>
   </div>
   ```

2. **Navigation:**

   - Mobile: Hamburger menu (absolute position)
   - Desktop: Inline horizontal menu

3. **Grids:**

   ```jsx
   className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
   ```

4. **Images:**

   ```jsx
   // Always use object-fit and aspect-ratio
   className = "w-full h-auto object-cover aspect-square";
   ```

5. **Typography:**
   ```jsx
   className = "text-2xl md:text-3xl lg:text-4xl";
   ```

### Testing Checklist

- [ ] iPhone SE (375px)
- [ ] iPhone 12 Pro (390px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop (1280px+)
- [ ] No horizontal scroll
- [ ] Touch targets ≥48px
- [ ] Readable text (16px minimum)

---

## 🛡️ Error Handling Strategy

### Frontend Error Handling

#### 1. API Call Errors

```javascript
// services/api.js
try {
  const response = await axios.get("/api/projects");
  return response.data;
} catch (error) {
  if (error.response) {
    // Server responded with error status
    throw {
      message: error.response.data.error || "Server error",
      status: error.response.status,
    };
  } else if (error.request) {
    // Request made but no response
    throw {
      message: "Network error. Please check your connection.",
      status: 0,
    };
  } else {
    // Something else happened
    throw {
      message: "An unexpected error occurred",
      status: -1,
    };
  }
}
```

#### 2. Component-Level Error Handling

```jsx
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchData()
    .then((data) => setData(data))
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
}, []);

if (loading) return <Loading />;
if (error) return <ErrorMessage message={error} />;
return <Content data={data} />;
```

#### 3. Form Validation

```javascript
// Client-side validation (React Hook Form + Joi)
const schema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(10).required(),
});

// Display errors inline
{
  errors.email && (
    <span className="text-red-500 text-sm">{errors.email.message}</span>
  );
}
```

#### 4. Error Boundary (React)

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

#### 5. 404 Page

```jsx
// Custom NotFound component with navigation
<Route path="*" element={<NotFound />} />
```

### Backend Error Handling

#### 1. Centralized Error Handler

```javascript
// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    error: message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
```

#### 2. Try-Catch in Controllers

```javascript
const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.json({ success: true, data: projects });
  } catch (error) {
    next(error); // Pass to error handler
  }
};
```

#### 3. Input Validation (Joi)

```javascript
const validateProject = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    category: Joi.string().valid("AI/Data Science", "Python", "Web").required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      error: "Validation failed",
      details: error.details,
    });
  }
  next();
};
```

#### 4. Database Connection Errors

```javascript
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit if DB fails
  });
```

#### 5. Rate Limiting

```javascript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: "Too many requests, please try again later.",
});

app.use("/api/contact", limiter);
```

---

## 🚀 Deployment Guide

### Prerequisites

- Node.js 18+ installed
- Git repository
- MongoDB Atlas account
- Vercel account
- Render account

---

### Step 1: MongoDB Atlas Setup

1. **Create Cluster:**

   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Click "Build a Database" → Choose FREE tier
   - Select cloud provider (AWS recommended)
   - Choose region closest to your users
   - Cluster name: `portfolio-cluster`

2. **Create Database User:**

   - Database Access → Add New Database User
   - Username: `portfolio_admin`
   - Password: Generate secure password (save it!)
   - Built-in Role: `Read and write to any database`

3. **Whitelist IP:**

   - Network Access → Add IP Address
   - Choose: `Allow Access from Anywhere` (0.0.0.0/0)
   - (For production, restrict to your server IPs)

4. **Get Connection String:**
   - Cluster → Connect → Connect your application
   - Copy connection string:
     ```
     mongodb+srv://portfolio_admin:<password>@portfolio-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```
   - Replace `<password>` with your actual password
   - Add database name: `.../portfolio?retryWrites=true...`

---

### Step 2: Backend Deployment (Render)

1. **Prepare Backend:**

   ```bash
   cd server
   # Ensure package.json has start script
   # "start": "node src/server.js"
   ```

2. **Create `render.yaml` (optional):**

   ```yaml
   services:
     - type: web
       name: portfolio-backend
       env: node
       buildCommand: npm install
       startCommand: npm start
       envVars:
         - key: MONGO_URI
           sync: false
         - key: PORT
           value: 10000
         - key: NODE_ENV
           value: production
   ```

3. **Deploy on Render:**

   - Go to [render.com](https://render.com) → Sign up
   - New → Web Service
   - Connect GitHub repository
   - Select `server` folder as root directory
   - Settings:
     - Name: `portfolio-backend`
     - Environment: `Node`
     - Build Command: `npm install`
     - Start Command: `npm start`
     - Instance Type: `Free`

4. **Add Environment Variables:**

   - Go to Environment tab
   - Add:
     ```
     MONGO_URI=mongodb+srv://portfolio_admin:...
     PORT=10000
     NODE_ENV=production
     CLIENT_URL=https://your-portfolio.vercel.app
     ```

5. **Deploy:**

   - Click "Create Web Service"
   - Wait 5-10 minutes for deployment
   - Note your backend URL: `https://portfolio-backend.onrender.com`

6. **Test API:**
   ```bash
   curl https://portfolio-backend.onrender.com/api/projects
   ```

---

### Step 3: Frontend Deployment (Vercel)

1. **Prepare Frontend:**

   ```bash
   cd client

   # Update API base URL in src/services/api.js
   const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://portfolio-backend.onrender.com/api';
   ```

2. **Create `.env.production`:**

   ```env
   VITE_API_URL=https://portfolio-backend.onrender.com/api
   ```

3. **Deploy on Vercel:**

   - Go to [vercel.com](https://vercel.com) → Sign up with GitHub
   - Import Project → Select your repository
   - Configure:
     - Framework Preset: `Vite`
     - Root Directory: `client`
     - Build Command: `npm run build`
     - Output Directory: `dist`

4. **Add Environment Variables:**

   - Settings → Environment Variables
   - Add:
     ```
     VITE_API_URL=https://portfolio-backend.onrender.com/api
     ```

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site: `https://your-portfolio.vercel.app`

---

### Step 4: Custom Domain (OPTIONAL)

**For Vercel (Frontend):**

1. Vercel Dashboard → Domains
2. Add your domain (e.g., `yourname.com`)
3. Update DNS records at your domain registrar:

   ```
   Type: A
   Name: @
   Value: 76.76.19.19

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

**For Render (Backend):**

1. Render Dashboard → Settings → Custom Domain
2. Add subdomain (e.g., `api.yourname.com`)
3. Update DNS:
   ```
   Type: CNAME
   Name: api
   Value: your-app.onrender.com
   ```

---

### Step 5: Seed Database (Initial Data)

Create a seed script to populate initial data:

```bash
# In server folder
node scripts/seed.js
```

Or use MongoDB Compass:

- Download [MongoDB Compass](https://www.mongodb.com/products/compass)
- Connect using your Atlas connection string
- Manually insert documents

---

### Common Deployment Errors

#### 1. **CORS Error**

**Error:** `Access to XMLHttpRequest blocked by CORS policy`

**Fix (backend):**

```javascript
// server/src/server.js
const cors = require("cors");

app.use(
  cors({
    origin: process.env.CLIENT_URL || "https://your-portfolio.vercel.app",
    credentials: true,
  })
);
```

#### 2. **Environment Variables Not Working**

**Error:** `Cannot read property 'MONGO_URI' of undefined`

**Fix:**

- Ensure `.env` file exists
- Check variable names match exactly
- Restart server after adding variables
- On Vercel: Redeploy after adding env vars

#### 3. **Build Fails on Vercel**

**Error:** `Command "npm run build" exited with 1`

**Fix:**

- Check for TypeScript errors
- Ensure all dependencies in `package.json`
- Test build locally: `npm run build`
- Check Node version compatibility

#### 4. **API Not Responding**

**Error:** `Network Error` or `Timeout`

**Fix:**

- Check Render service is running (Dashboard → Status)
- Free tier: Service sleeps after 15 min inactivity (first request slow)
- Check API URL is correct in frontend
- Test API directly in browser

#### 5. **MongoDB Connection Failed**

**Error:** `MongoServerError: bad auth`

**Fix:**

- Verify username/password in connection string
- Check IP whitelist (0.0.0.0/0 for development)
- Ensure database name is in connection string

---

### Build Commands Reference

**Frontend (client/):**

```bash
npm install          # Install dependencies
npm run dev          # Development server (localhost:5173)
npm run build        # Production build
npm run preview      # Preview production build
```

**Backend (server/):**

```bash
npm install          # Install dependencies
npm start            # Production server
npm run dev          # Development with nodemon
```

---

### Environment Variables Checklist

**Backend (.env):**

```env
MONGO_URI=mongodb+srv://...
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
JWT_SECRET=your_jwt_secret_here  # For future auth
```

**Frontend (.env):**

```env
VITE_API_URL=http://localhost:5000/api
```

**Production:**

- Backend on Render: Set all backend env vars
- Frontend on Vercel: Set `VITE_API_URL` to production backend URL

---

### Monitoring & Maintenance

1. **Render (Backend):**

   - Auto-deploys on git push
   - Free tier: 750 hours/month, sleeps after 15min inactivity
   - View logs: Dashboard → Logs

2. **Vercel (Frontend):**

   - Auto-deploys on git push to main branch
   - Unlimited bandwidth for personal projects
   - View analytics: Dashboard → Analytics

3. **MongoDB Atlas:**
   - Free tier: 512MB storage
   - Monitor usage: Dashboard → Metrics
   - Set up alerts for storage/connection limits

---

This completes the architecture documentation. Now let me build the actual project!
