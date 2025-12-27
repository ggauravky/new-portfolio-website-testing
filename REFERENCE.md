# ⚡ Quick Reference Card

## 🚀 Start Development

```bash
# Backend (Terminal 1)
cd server
npm run dev

# Frontend (Terminal 2)
cd client
npm run dev
```

Visit: http://localhost:5173

---

## 📝 Must Customize

### 1. Personal Info

**File**: `client/src/utils/constants.js`

```javascript
SOCIAL_LINKS = {
  github: "YOUR_GITHUB",
  linkedin: "YOUR_LINKEDIN",
  email: "YOUR_EMAIL",
};
```

### 2. Your Name

**File**: `client/src/components/home/Hero.jsx`

- Line 17: Replace "Your Name"

### 3. Profile Photo

**Location**: `client/public/images/profile.jpg`

- Size: 400x400px minimum
- Format: JPG or PNG

---

## 🗄️ Database Setup

### Quick Seed

```bash
cd server
npm run seed
```

### MongoDB Atlas

1. Create cluster at mongodb.com/cloud/atlas
2. Add user with password
3. Whitelist IP: 0.0.0.0/0
4. Copy connection string
5. Add to `server/.env`:

```env
MONGODB_URI=mongodb+srv://user:pass@cluster.net/portfolio
```

---

## 🌐 Deploy

### Frontend (Vercel)

1. Push to GitHub
2. Import on vercel.com
3. Add env: `VITE_API_URL=https://your-api.onrender.com/api`
4. Deploy

### Backend (Render)

1. Create Web Service on render.com
2. Connect GitHub repo
3. Add environment variables
4. Deploy

---

## 📁 Project Structure

```
Portfolio - God/
├── client/              Frontend
│   ├── src/
│   │   ├── components/  React components
│   │   ├── pages/       Page components
│   │   ├── hooks/       Custom hooks
│   │   ├── services/    API calls
│   │   └── utils/       Constants, helpers
│   └── public/          Static assets
│
├── server/              Backend
│   ├── src/
│   │   ├── models/      MongoDB schemas
│   │   ├── controllers/ Business logic
│   │   ├── routes/      API routes
│   │   ├── middleware/  Validation, errors
│   │   └── scripts/     Seed script
│   └── .env             Config (create this)
│
└── docs/                Documentation
    ├── README.md
    ├── QUICKSTART.md
    ├── ARCHITECTURE.md
    └── COMPLETION_STATUS.md
```

---

## 🔧 Common Commands

### Backend

```bash
npm run dev      # Development with nodemon
npm start        # Production
npm run seed     # Populate database
```

### Frontend

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
```

---

## 🎨 Key Files to Edit

### Add Your Content

1. `client/src/utils/constants.js` - Social links, education, about
2. `client/src/components/home/Hero.jsx` - Your name, role
3. `client/public/images/profile.jpg` - Your photo
4. `server/src/scripts/seed.js` - Sample projects/blogs

### Configuration

1. `server/.env` - Backend config
2. `client/.env` - Frontend config
3. `client/index.html` - Page title, meta tags

---

## 📡 API Endpoints

```
GET  /api/projects          # All projects
GET  /api/projects/featured # Featured projects
GET  /api/blogs             # All blogs
GET  /api/blogs/latest      # Latest blogs
GET  /api/blogs/:slug       # Single blog
POST /api/contact           # Submit form (rate limited)
GET  /api/experiences       # Experiences
GET  /                      # Health check
```

---

## 🎯 Environment Variables

### Backend (`server/.env`)

```env
MONGODB_URI=your_mongodb_connection
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### Frontend (`client/.env`)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🐛 Quick Troubleshooting

| Problem             | Solution                                  |
| ------------------- | ----------------------------------------- |
| Backend won't start | Check MongoDB URI, run `npm install`      |
| Frontend errors     | Check API URL, clear cache, `npm install` |
| No data showing     | Run `npm run seed` in server folder       |
| 404 on routes       | Ensure both servers running               |
| CORS error          | Check CLIENT_URL in server/.env           |
| Can't connect to DB | Whitelist 0.0.0.0/0 in MongoDB Atlas      |

---

## 📚 Documentation Files

- **README.md** - Full setup guide
- **QUICKSTART.md** - 5-minute start
- **ARCHITECTURE.md** - System design
- **COMPLETION_STATUS.md** - Final status & next steps
- **PROJECT_SUMMARY.md** - Complete overview
- **BLOG_STYLING.md** - Blog content styling
- **REFERENCE.md** - This file

---

## ✅ Pre-Deployment Checklist

- [ ] Personal info updated in constants.js
- [ ] Profile photo added
- [ ] Database seeded with your projects
- [ ] .env files configured
- [ ] Both servers running locally
- [ ] All forms tested
- [ ] Mobile responsive verified
- [ ] Error pages tested
- [ ] Social links work
- [ ] Contact form submits successfully

---

## 🎨 Theme Colors

```css
Background Primary: #0a0a0f
Background Secondary: #13131a
Accent Cyan: #00d9ff
Accent Purple: #a855f7
```

---

## 📱 Responsive Breakpoints

```css
sm: 640px   # Small tablets
md: 768px   # Tablets
lg: 1024px  # Laptops
xl: 1280px  # Desktops
```

---

## 🔗 Important URLs

- **MongoDB Atlas**: https://www.mongodb.com/cloud/atlas
- **Vercel**: https://vercel.com
- **Render**: https://render.com
- **Tailwind Docs**: https://tailwindcss.com
- **React Docs**: https://react.dev
- **Framer Motion**: https://www.framer.com/motion

---

## 💡 Quick Tips

1. **Start Simple**: Deploy with sample data first, then customize
2. **Test Locally**: Always test changes locally before deploying
3. **Git Commits**: Commit often with clear messages
4. **Backup**: Keep database backups before major changes
5. **Updates**: Keep dependencies updated monthly
6. **Content**: Quality > Quantity for projects and blogs
7. **Professional**: Use professional language and photos
8. **Responsive**: Test on multiple devices
9. **Performance**: Optimize images before uploading
10. **Security**: Never commit .env files to Git

---

## 🎉 You're Ready!

**Status**: ✅ COMPLETE  
**Quality**: 🏆 PRODUCTION-READY  
**Your Action**: Customize → Deploy → Share

---

**Need help?** Check the full documentation files!
