const express = require("express");
const router = express.Router();
const {
  getProjects,
  getFeaturedProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

// Public routes
router.get("/", getProjects);
router.get("/featured", getFeaturedProjects);
router.get("/:id", getProject);

// Admin routes (future - requires authentication)
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;
