# 📸 Image Setup Guide for Portfolio

## 🗂️ Folder Structure

Your images are now organized in the `client/public/images/` directory:

```
client/public/images/
├── profile.jpg           # Your profile photo (Already exists)
├── projects/             # Project screenshots (NEW)
│   ├── default.png      # Default fallback image
│   ├── project1.jpg     # Your project images
│   ├── project2.jpg
│   └── ...
└── blogs/                # Blog cover images (NEW)
    ├── default.png      # Default fallback image
    ├── blog1.jpg        # Your blog cover images
    ├── blog2.jpg
    └── ...
```

## 📝 How to Use Local Images

### For Projects:

When you seed your database or add projects via API, use these paths:

```javascript
{
  title: "My AI Project",
  shortDescription: "Amazing AI application",
  imageUrl: "/images/projects/ai-project.jpg",  // ← Use this format
  // ... other fields
}
```

### For Blogs:

```javascript
{
  title: "My Blog Post",
  slug: "my-blog-post",
  coverImage: "/images/blogs/my-blog-cover.jpg",  // ← Use this format
  // ... other fields
}
```

## 🖼️ Image Requirements

### Projects Images:

- **Recommended Size**: 800x600px or 1200x900px
- **Format**: JPG, PNG, or WebP
- **Aspect Ratio**: 4:3 or 16:9
- **File Size**: < 500KB (optimize for web)

### Blog Cover Images:

- **Recommended Size**: 1200x630px (social media friendly)
- **Format**: JPG, PNG, or WebP
- **Aspect Ratio**: 1.91:1 (optimal for og:image)
- **File Size**: < 500KB

### Profile Photo:

- **Recommended Size**: 500x500px
- **Format**: JPG or PNG
- **Aspect Ratio**: 1:1 (square)
- **File Size**: < 200KB

## 📥 Step-by-Step: Adding Your Images

### 1. Prepare Your Images

Rename your images clearly:

- `chatbot-project.jpg`
- `data-analysis-dashboard.png`
- `machine-learning-blog.jpg`
- etc.

### 2. Copy Images to Folders

**For Project Images:**

```bash
# Copy your project images to:
client/public/images/projects/
```

**For Blog Cover Images:**

```bash
# Copy your blog cover images to:
client/public/images/blogs/
```

### 3. Update Your Seed Script

Open `server/src/scripts/seed.js` and update the `imageUrl` and `coverImage` fields:

```javascript
// Example for Projects
const projects = [
  {
    title: "AI Chatbot",
    imageUrl: "/images/projects/chatbot.jpg", // ← Your image name
    // ... other fields
  },
  {
    title: "Data Dashboard",
    imageUrl: "/images/projects/dashboard.png",
    // ... other fields
  },
];

// Example for Blogs
const blogs = [
  {
    title: "Getting Started with AI",
    coverImage: "/images/blogs/ai-tutorial.jpg", // ← Your image name
    // ... other fields
  },
];
```

### 4. Run the Seed Script

```bash
cd server
npm run seed
```

## 🎨 Image Optimization Tips

### Using Online Tools:

- **TinyPNG**: https://tinypng.com/ (compress PNG/JPG)
- **Squoosh**: https://squoosh.app/ (Google's image optimizer)
- **CloudConvert**: https://cloudconvert.com/ (format conversion)

### Recommended Settings:

- **Quality**: 80-85% for JPG
- **Format**: WebP for best quality/size ratio (fallback to JPG/PNG)
- **Dimensions**: Resize to recommended dimensions before uploading

## 🔧 Quick Example: Adding a Project with Local Image

1. **Add your image** to `client/public/images/projects/my-awesome-project.jpg`

2. **Update seed data** in `server/src/scripts/seed.js`:

```javascript
{
  title: "My Awesome Project",
  shortDescription: "This is an amazing AI project",
  fullDescription: "Detailed description here...",
  category: "AI / Data Science",
  techStack: ["Python", "TensorFlow", "Flask"],
  githubLink: "https://github.com/yourusername/project",
  liveLink: "https://your-project.vercel.app",
  imageUrl: "/images/projects/my-awesome-project.jpg", // ← Local path
  featured: true,
}
```

3. **Run seed script**:

```bash
cd server
npm run seed
```

4. **Restart your backend** (if running):

```bash
npm run dev
```

## 🌐 Using External URLs (Alternative)

If you prefer using external image hosting:

### Free Image Hosting Options:

- **Imgur**: https://imgur.com/
- **Cloudinary**: https://cloudinary.com/ (free tier)
- **imgbb**: https://imgbb.com/

Then use full URLs in your database:

```javascript
imageUrl: "https://i.imgur.com/abc123.jpg";
coverImage: "https://res.cloudinary.com/yourcloud/image/upload/v1/blog.jpg";
```

## ✅ Checklist

- [ ] Created `client/public/images/projects/` folder
- [ ] Created `client/public/images/blogs/` folder
- [ ] Added your project images to projects folder
- [ ] Added your blog cover images to blogs folder
- [ ] Added your profile photo to images folder (already done)
- [ ] Updated seed script with correct image paths
- [ ] Optimized images (compressed, proper dimensions)
- [ ] Ran seed script
- [ ] Tested images display correctly in frontend

## 🐛 Troubleshooting

**Images not showing?**

- ✅ Check file names match exactly (case-sensitive)
- ✅ Ensure paths start with `/images/` not `images/`
- ✅ Clear browser cache (Ctrl + Shift + R)
- ✅ Check browser console for 404 errors
- ✅ Verify files exist in public folder

**Images too large/slow?**

- ✅ Compress images using TinyPNG or Squoosh
- ✅ Resize to recommended dimensions
- ✅ Consider using WebP format

## 📚 Current Default Paths

The system will use these defaults if no image is specified:

- **Projects**: `/images/projects/default.png`
- **Blogs**: `/images/blogs/default.png`
- **Profile**: `/images/profile.jpg`

Make sure to replace the placeholder default images with actual images!
