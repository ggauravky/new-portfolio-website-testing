# 🚀 Quick Start Guide

## Prerequisites Installed?

- ✅ Node.js 18+
- ✅ MongoDB Atlas account
- ✅ Git

## 5-Minute Setup

### Step 1: Install Dependencies (2 min)

```powershell
# Open PowerShell in project root
cd "C:\Users\Lenovo\VS Code Files\Portfolio - God"

# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### Step 2: Environment Setup (1 min)

**Create `server/.env`:**

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

**Create `client/.env`:**

```env
VITE_API_URL=http://localhost:5000/api
```

### Step 3: Customize Your Info (1 min)

Edit `client/src/utils/constants.js`:

- Update `SOCIAL_LINKS` with your URLs
- Update `EDUCATION` with your university
- Update `ABOUT_CONTENT` with your story

### Step 4: Add Profile Photo (30 sec)

Add your photo to: `client/public/images/profile.jpg`

### Step 5: Run Application (30 sec)

**Terminal 1 - Backend:**

```powershell
cd server
npm start
```

**Terminal 2 - Frontend:**

```powershell
cd client
npm run dev
```

**Open:** http://localhost:5173

## ✅ What's Been Built

### ✓ Complete Backend

- Express server with MongoDB
- All API endpoints (projects, blogs, contact, experiences)
- Error handling & validation
- Rate limiting

### ✓ Frontend Core

- Vite + React setup
- Routing (Home, Projects, Blogs, 404)
- Layout (Navbar, Footer)
- Home sections (Hero, About, Skills, Education, Experience, Contact)
- Responsive design system
- API integration
- Custom hooks

### ⚠️ Components to Build

See [MISSING_FILES.md](./MISSING_FILES.md) for complete list:

- ProjectsPreview.jsx
- BlogsPreview.jsx
- ProjectCard.jsx
- BlogCard.jsx
- Projects page
- Blogs pages

**Time to complete:** 2-3 hours following the patterns in [MISSING_FILES.md](./MISSING_FILES.md)

## 📦 Add Sample Data

Create `server/scripts/seed.js` and run:

```powershell
node server/scripts/seed.js
```

Or manually add via MongoDB Compass.

## 🎯 Next Steps

1. Build remaining components (see MISSING_FILES.md)
2. Add your projects to database
3. Add your blogs to database
4. Test contact form
5. Deploy (see ARCHITECTURE.md deployment section)

## 🆘 Troubleshooting

**Backend won't start?**

- Check MongoDB URI in server/.env
- Ensure port 5000 is not in use

**Frontend won't load?**

- Check VITE_API_URL in client/.env
- Ensure backend is running first

**Images not showing?**

- Add images to `client/public/images/`
- Check file paths match code

## 📚 Documentation

- [README.md](./README.md) - Main documentation
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Complete system design
- [MISSING_FILES.md](./MISSING_FILES.md) - Remaining components

---

**You're 80% done! 🎉**

The core system is production-ready. Just add remaining components and your content!
