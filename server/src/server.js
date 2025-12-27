require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./config/database");
const errorHandler = require("./middleware/errorHandler");

// Import routes
const projectRoutes = require("./routes/projects");
const blogRoutes = require("./routes/blogs");
const contactRoutes = require("./routes/contact");
const experienceRoutes = require("./routes/experiences");

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(helmet()); // Security headers
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json()); // Body parser
app.use(express.urlencoded({ extended: true }));

// Request logging (development)
if (process.env.NODE_ENV === "development") {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

// Health check route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio API is running",
    version: "1.0.0",
    endpoints: {
      projects: "/api/projects",
      blogs: "/api/blogs",
      contact: "/api/contact",
      experiences: "/api/experiences",
    },
  });
});

// API Routes
app.use("/api/projects", projectRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/experiences", experienceRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
  });
});

// Error Handler (must be last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════╗
║   Portfolio API Server Running      ║
║   Port: ${PORT}                        ║
║   Environment: ${process.env.NODE_ENV || "development"}         ║
║   URL: http://localhost:${PORT}       ║
╚══════════════════════════════════════╝
  `);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  // Close server & exit process
  process.exit(1);
});
