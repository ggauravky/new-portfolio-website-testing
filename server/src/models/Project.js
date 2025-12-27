const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    shortDescription: {
      type: String,
      required: [true, "Short description is required"],
      maxlength: [200, "Short description cannot exceed 200 characters"],
    },
    fullDescription: {
      type: String,
      required: [true, "Full description is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],

      enum: ["AI / Data Science", "Python", "Web Development", "Other"],
    },
    techStack: {
      type: [String],
      required: [true, "Tech stack is required"],
      validate: {
        validator: function (v) {
          return v && v.length > 0;
        },
        message: "Tech stack must have at least one technology",
      },
    },
    githubLink: {
      type: String,
      required: [true, "GitHub link is required"],
      match: [/^https?:\/\/.+/, "Please provide a valid URL"],
    },
    liveLink: {
      type: String,
      match: [/^https?:\/\/.+/, "Please provide a valid URL"],
    },
    imageUrl: {
      type: String,
      default: "/images/projects/default.png",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
ProjectSchema.index({ category: 1, featured: 1, order: 1 });

module.exports = mongoose.model("Project", ProjectSchema);
