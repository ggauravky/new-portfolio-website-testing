const express = require("express");
const router = express.Router();
const {
  getExperiences,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} = require("../controllers/experienceController");

// Public routes
router.get("/", getExperiences);
router.get("/:id", getExperience);

// Admin routes (future - requires authentication)
router.post("/", createExperience);
router.put("/:id", updateExperience);
router.delete("/:id", deleteExperience);

module.exports = router;
