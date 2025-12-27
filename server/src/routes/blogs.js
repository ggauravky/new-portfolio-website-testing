const express = require("express");
const router = express.Router();
const {
  getBlogs,
  getLatestBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

// Public routes
router.get("/", getBlogs);
router.get("/latest", getLatestBlogs);
router.get("/:slug", getBlogBySlug);

// Admin routes (future - requires authentication)
router.post("/", createBlog);
router.put("/:slug", updateBlog);
router.delete("/:slug", deleteBlog);

module.exports = router;
