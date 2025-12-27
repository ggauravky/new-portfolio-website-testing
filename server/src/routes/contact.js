const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");
const {
  submitContact,
  getContacts,
  getContact,
  updateContactStatus,
  deleteContact,
} = require("../controllers/contactController");

// Rate limiter for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 submissions per window
  message: {
    success: false,
    error: "Too many contact form submissions. Please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Public route with rate limiting
router.post("/", contactLimiter, submitContact);

// Admin routes (future - requires authentication)
router.get("/", getContacts);
router.get("/:id", getContact);
router.put("/:id", updateContactStatus);
router.delete("/:id", deleteContact);

module.exports = router;
