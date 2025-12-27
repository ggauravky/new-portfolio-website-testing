# Portfolio Website - Complete Project Setup

This is a production-ready, full-stack portfolio website built with modern technologies.

## 🛠️ Tech Stack

### Frontend

- **Vite + React 18** - Fast, modern build tool and UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animations
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend

- **Node.js + Express** - RESTful API server
- **MongoDB + Mongoose** - Database and ODM
- **Joi** - Input validation
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Portfolio - God/
├── client/                 # Frontend (Vite + React)
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── logo.png
│   │   └── images/
│   │       └── profile.jpg   # ADD YOUR PHOTO HERE
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── hooks/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/                 # Backend (Node.js + Express)
│   ├── src/
│   │   ├── config/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── server.js
│   └── package.json
│
├── ARCHITECTURE.md        # Complete system documentation
└── README.md             # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (free tier)
- Git installed

### 1. Clone & Setup

```bash
cd "C:\Users\Lenovo\VS Code Files\Portfolio - God"

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### 2. Environment Variables

**Frontend (`client/.env`):**

```env
VITE_API_URL=http://localhost:5000/api
```

**Backend (`server/.env`):**

```env
MONGO_URI=your_mongodb_connection_string_here
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### 3. Setup MongoDB Atlas

1. Go to https://www.mongodb.com/cloud/atlas
2. Create FREE cluster
3. Create database user
4. Whitelist IP: 0.0.0.0/0 (for development)
5. Get connection string
6. Replace `<password>` with your password
7. Add `/portfolio` after `.net` in connection string

Example:

```
mongodb+srv://username:<password>@cluster.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

### 4. Add Your Profile Photo

1. Add your professional photo to `client/public/images/profile.jpg`
2. Recommended size: 400x400px or larger (square)
3. Format: JPG or PNG

### 5. Customize Content

Edit these files with your information:

**`client/src/utils/constants.js`:**

- Update `SOCIAL_LINKS` with your GitHub, LinkedIn, etc.
- Update `EDUCATION` with your university details
- Update `ABOUT_CONTENT` with your story

**`client/src/components/home/Hero.jsx`:**

- Replace "Your Name" with your actual name

**`client/index.html`:**

- Update `<title>` tag
- Update meta descriptions

### 6. Run Development Servers

**Terminal 1 (Backend):**

```bash
cd server
npm start
```

**Terminal 2 (Frontend):**

```bash
cd client
npm run dev
```

Open http://localhost:5173 in your browser 🎉

## 📝 Adding Content

### Add Projects

**Option 1: Using MongoDB Compass** (Recommended)

1. Download [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Connect using your connection string
3. Create database: `portfolio`
4. Create collection: `projects`
5. Insert documents:

```json
{
  "title": "AI Chatbot",
  "shortDescription": "Intelligent chatbot using NLP",
  "fullDescription": "Built an AI-powered chatbot using Python, TensorFlow, and Flask...",
  "category": "AI/Data Science",
  "techStack": ["Python", "TensorFlow", "Flask", "NLP"],
  "githubLink": "https://github.com/yourusername/project",
  "liveLink": "https://project-demo.com",
  "imageUrl": "/images/projects/chatbot.png",
  "featured": true,
  "order": 1,
  "createdAt": "2024-01-15T00:00:00.000Z",
  "updatedAt": "2024-01-15T00:00:00.000Z"
}
```

**Option 2: API Endpoint** (Future - requires admin auth)

### Add Blogs

1. Go to MongoDB Compass
2. Create collection: `blogs`
3. Insert documents:

```json
{
  "title": "Getting Started with Machine Learning",
  "slug": "getting-started-with-machine-learning",
  "excerpt": "A beginner's guide to ML fundamentals",
  "content": "Full markdown or HTML content here...",
  "coverImage": "/images/blogs/ml-intro.png",
  "tags": ["Machine Learning", "AI", "Python"],
  "readTime": 5,
  "published": true,
  "publishedAt": "2024-02-01T00:00:00.000Z",
  "views": 0,
  "createdAt": "2024-02-01T00:00:00.000Z",
  "updatedAt": "2024-02-01T00:00:00.000Z"
}
```

### Add Experiences

```json
{
  "type": "internship",
  "title": "Data Science Intern",
  "organization": "Company Name",
  "location": "Remote",
  "startDate": "2024-01-01T00:00:00.000Z",
  "endDate": null,
  "description": "Working on ML models and data analysis...",
  "achievements": [
    "Built predictive model with 95% accuracy",
    "Analyzed 1M+ data points"
  ],
  "skills": ["Python", "Pandas", "TensorFlow"],
  "order": 1,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

## 🎨 Customization

### Change Colors

Edit `client/tailwind.config.js`:

```js
colors: {
  'accent-cyan': '#00d9ff',      // Primary accent
  'accent-purple': '#a855f7',    // Secondary accent
  // Change to your preferred colors
}
```

### Change Fonts

1. Go to [Google Fonts](https://fonts.google.com/)
2. Select your font
3. Update `client/index.html` link tag
4. Update `client/tailwind.config.js` fontFamily

### Add Logo

1. Create your logo (text or icon)
2. Save as `client/public/logo.png`
3. Also save as `client/public/favicon.ico` for browser tab

## 📱 Responsiveness

The website is fully responsive and tested on:

- ✅ Mobile (375px - 767px)
- ✅ Tablet (768px - 1023px)
- ✅ Desktop (1024px+)

Test responsive design:

1. Open DevTools (F12)
2. Click device toolbar icon
3. Test different devices

## 🚀 Deployment

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed deployment instructions.

**Quick Summary:**

1. **Backend** → Deploy to Render (free)
2. **Frontend** → Deploy to Vercel (free)
3. **Database** → MongoDB Atlas (free)

## 🔒 Security Features

- ✅ Helmet.js for HTTP headers
- ✅ CORS configuration
- ✅ Rate limiting on contact form
- ✅ Input validation (Joi)
- ✅ Error handling
- ✅ Environment variables

## 🐛 Troubleshooting

### MongoDB Connection Error

- Check connection string format
- Verify username/password
- Check IP whitelist (0.0.0.0/0)
- Ensure `/portfolio` database name in URI

### API Not Working

- Ensure backend server is running (port 5000)
- Check `VITE_API_URL` in frontend .env
- Check browser console for errors

### Frontend Not Loading

- Clear browser cache (Ctrl+F5)
- Check terminal for build errors
- Ensure port 5173 is not in use

### Images Not Displaying

- Check image path is correct
- Ensure image exists in `client/public/images/`
- Check browser console for 404 errors

## 📧 Contact Form Testing

The contact form will:

1. Validate inputs (name, email, message)
2. Send data to backend API
3. Save to MongoDB `contacts` collection
4. Show success/error message

To test:

1. Fill out form on website
2. Check MongoDB Compass → `contacts` collection
3. Verify data is saved

## 📊 Analytics (Optional - Future)

To add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to `client/index.html`
3. Track page views and events

## 🎯 Next Steps

1. ✅ Setup MongoDB Atlas
2. ✅ Add your profile photo
3. ✅ Customize constants.js with your info
4. ✅ Add your projects to database
5. ✅ Add your blogs to database
6. ✅ Test contact form
7. ✅ Deploy to production

## 📚 Documentation

- [Architecture & Design](./ARCHITECTURE.md) - Complete system documentation
- [Deployment Guide](./ARCHITECTURE.md#-deployment-guide) - Step-by-step deployment
- [API Documentation](./ARCHITECTURE.md#-api-design) - API endpoints reference

## 🤝 Support

If you encounter any issues:

1. Check console for errors
2. Review [ARCHITECTURE.md](./ARCHITECTURE.md)
3. Check MongoDB connection
4. Verify environment variables

## 📄 License

This project is open-source and available for personal use.

---

**Built with ❤️ using React, Node.js, and MongoDB**

Ready to showcase your AI & Data Science journey! 🚀
