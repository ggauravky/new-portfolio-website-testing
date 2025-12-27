# ✅ Pre-Launch Checklist

Use this checklist before deploying your portfolio to production.

## 📋 Content Customization

### Personal Information

- [ ] Updated `SOCIAL_LINKS` in `client/src/utils/constants.js`

  - [ ] GitHub URL
  - [ ] LinkedIn URL
  - [ ] Email address
  - [ ] Twitter/Instagram (optional)

- [ ] Updated `EDUCATION` in `client/src/utils/constants.js`

  - [ ] University name
  - [ ] Degree details
  - [ ] Current year
  - [ ] Subjects list

- [ ] Updated `ABOUT_CONTENT` in `client/src/utils/constants.js`

  - [ ] Personal introduction
  - [ ] Your journey
  - [ ] Your goals
  - [ ] Your skills

- [ ] Updated name in `client/src/components/home/Hero.jsx` (Line 17)

- [ ] Updated page title in `client/index.html`

- [ ] Updated meta descriptions in `client/index.html`

### Media Files

- [ ] Added profile photo to `client/public/images/profile.jpg`

  - [ ] Size: 400x400px or larger
  - [ ] Format: JPG or PNG
  - [ ] Professional quality
  - [ ] Clear and well-lit

- [ ] Added favicon.ico (optional)
- [ ] Added logo.png (optional)

## 🗄️ Database Setup

### MongoDB Atlas

- [ ] Created MongoDB Atlas account
- [ ] Created database cluster (free tier)
- [ ] Created database user with password
- [ ] Whitelisted IP addresses (0.0.0.0/0 for now)
- [ ] Obtained connection string
- [ ] Tested connection locally

### Database Population

- [ ] Ran `npm run seed` successfully
- [ ] Verified sample data in MongoDB Atlas
- [ ] Customized sample projects with your info
- [ ] Added real project screenshots
- [ ] Wrote or customized blog posts
- [ ] Updated sample data with real content

## ⚙️ Environment Variables

### Backend (.env)

- [ ] `MONGODB_URI` - MongoDB connection string (with password)
- [ ] `PORT` - Port number (5000)
- [ ] `NODE_ENV` - Set to "development" locally
- [ ] `CLIENT_URL` - Frontend URL (http://localhost:5173 locally)

### Frontend (.env)

- [ ] `VITE_API_URL` - Backend API URL (http://localhost:5000/api locally)

## 🧪 Local Testing

### Backend Tests

- [ ] Backend server starts without errors (`npm run dev`)
- [ ] Health check endpoint works (http://localhost:5000/)
- [ ] Can fetch projects (GET /api/projects)
- [ ] Can fetch blogs (GET /api/blogs)
- [ ] Contact form accepts submissions (POST /api/contact)
- [ ] Rate limiting works on contact form
- [ ] All API endpoints return proper responses
- [ ] No errors in terminal console

### Frontend Tests

- [ ] Frontend builds successfully (`npm run dev`)
- [ ] Home page loads correctly
- [ ] All sections display properly:

  - [ ] Hero with profile image
  - [ ] About section
  - [ ] Skills grid
  - [ ] Projects preview
  - [ ] Experience timeline
  - [ ] Education details
  - [ ] Blogs preview
  - [ ] Contact form

- [ ] Navigation works:

  - [ ] All nav links work
  - [ ] Mobile menu opens/closes
  - [ ] Smooth scroll to sections
  - [ ] Logo returns to home

- [ ] Pages work:

  - [ ] /projects page displays projects
  - [ ] Project filtering works
  - [ ] /blogs page displays blogs
  - [ ] Individual blog posts open
  - [ ] 404 page shows for invalid routes

- [ ] Forms work:

  - [ ] Contact form validation works
  - [ ] Success message shows on submission
  - [ ] Error messages display properly
  - [ ] Loading states appear

- [ ] UI elements:
  - [ ] Buttons respond to clicks/hovers
  - [ ] Cards have hover effects
  - [ ] Loading spinners appear when needed
  - [ ] Animations play smoothly
  - [ ] No visual glitches

### Browser Testing

- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Edge/Safari (if available)
- [ ] No console errors in any browser
- [ ] All features work in each browser

### Responsive Testing

- [ ] Mobile (320px-480px):

  - [ ] Content readable
  - [ ] Images scale properly
  - [ ] Mobile menu works
  - [ ] Forms usable
  - [ ] No horizontal scroll

- [ ] Tablet (481px-768px):

  - [ ] Grid layouts adjust
  - [ ] Navigation appropriate
  - [ ] Content well-spaced

- [ ] Desktop (769px+):
  - [ ] Full layout displays
  - [ ] Proper spacing
  - [ ] Max-width containers work

### Performance

- [ ] Images load quickly
- [ ] Page transitions smooth
- [ ] No lag when scrolling
- [ ] API requests complete reasonably fast
- [ ] No memory leaks (check Dev Tools)

## 📦 Code Quality

### Backend

- [ ] No unused dependencies
- [ ] All imports used
- [ ] No console.log statements (or only for debugging)
- [ ] Error handling in place
- [ ] Input validation working
- [ ] Security middleware configured

### Frontend

- [ ] No unused components
- [ ] All imports used
- [ ] No console warnings
- [ ] PropTypes or TypeScript (if added)
- [ ] Accessibility attributes added
- [ ] Semantic HTML used

## 🔒 Security

- [ ] .env files in .gitignore
- [ ] No sensitive data in Git history
- [ ] CORS configured correctly
- [ ] Rate limiting enabled
- [ ] Input validation on all forms
- [ ] XSS protection enabled (Helmet)
- [ ] No API keys in frontend code

## 📝 Documentation

- [ ] README.md accurate
- [ ] QUICKSTART.md tested
- [ ] ARCHITECTURE.md reviewed
- [ ] Code comments where needed
- [ ] Git commit messages clear

## 🚀 Pre-Deployment

### Git Repository

- [ ] All changes committed
- [ ] Pushed to GitHub
- [ ] Repository is public (or accessible)
- [ ] README.md displays properly on GitHub
- [ ] No sensitive files in repo

### Build Tests

- [ ] Frontend builds for production (`npm run build`)
- [ ] Backend starts in production mode
- [ ] No build errors
- [ ] Build size reasonable (<5MB)

## 🌐 Deployment

### Frontend (Vercel)

- [ ] Vercel account created
- [ ] Repository connected
- [ ] Environment variables added:
  - [ ] `VITE_API_URL` (production backend URL)
- [ ] Build settings configured
- [ ] Deployment successful
- [ ] Custom domain connected (optional)
- [ ] HTTPS enabled

### Backend (Render)

- [ ] Render account created
- [ ] Web service created
- [ ] Repository connected
- [ ] Environment variables added:
  - [ ] `MONGODB_URI`
  - [ ] `CLIENT_URL` (production frontend URL)
  - [ ] `NODE_ENV=production`
  - [ ] `PORT=10000` (or Render's port)
- [ ] Build command set: `npm install`
- [ ] Start command set: `npm start`
- [ ] Deployment successful
- [ ] Health check endpoint working

### Database (MongoDB Atlas)

- [ ] Cluster still accessible
- [ ] IP whitelist updated (0.0.0.0/0 or specific IPs)
- [ ] Connection string works from Render
- [ ] Data persists correctly

## ✅ Post-Deployment Testing

### Production Site

- [ ] Frontend URL loads
- [ ] All pages accessible
- [ ] API calls work (check Network tab)
- [ ] Contact form submits successfully
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Fast loading times
- [ ] Social links work
- [ ] Download CV works (if added)

### Cross-Device Testing

- [ ] Tested on real mobile device
- [ ] Tested on tablet (if available)
- [ ] Tested on desktop
- [ ] Shared with friend to test
- [ ] All functionality works

### SEO & Sharing

- [ ] Page title shows correctly
- [ ] Meta description displays in search
- [ ] Favicon appears in browser tab
- [ ] Link preview looks good (share on social media)
- [ ] Open Graph tags work (optional)

## 📊 Monitoring

- [ ] Google Analytics added (optional)
- [ ] Error tracking setup (optional)
- [ ] Performance monitoring (optional)
- [ ] Uptime monitoring (optional)

## 📢 Launch

- [ ] Updated LinkedIn with portfolio link
- [ ] Updated GitHub profile README
- [ ] Added to resume/CV
- [ ] Shared in relevant communities
- [ ] Informed network
- [ ] Posted on social media

## 🎯 Post-Launch Tasks

### First Week

- [ ] Monitor for errors
- [ ] Check contact form submissions
- [ ] Gather initial feedback
- [ ] Fix any urgent issues
- [ ] Update analytics

### First Month

- [ ] Add new project
- [ ] Write new blog post
- [ ] Review and optimize performance
- [ ] Update content based on feedback
- [ ] Check SEO performance

## 📝 Notes

Use this section to track specific things you need to do or issues you encounter:

```
Date: _________
Notes:







```

---

## ✅ Final Verification

Before marking as complete, answer these:

1. **Can I navigate the entire site without errors?** [ ] Yes [ ] No
2. **Do all forms work correctly?** [ ] Yes [ ] No
3. **Is my personal information accurate?** [ ] Yes [ ] No
4. **Are all links functional?** [ ] Yes [ ] No
5. **Is the site responsive on mobile?** [ ] Yes [ ] No
6. **Am I proud to share this with recruiters?** [ ] Yes [ ] No

If you answered "Yes" to all questions: **You're ready to launch! 🚀**

If you answered "No" to any: Review that section and fix issues before launching.

---

**Completion Date**: ******\_\_\_******

**Deployed URL**: ******\_\_\_******

**Status**: [ ] Ready [ ] Needs Work

---

Good luck with your portfolio launch! 🎉
