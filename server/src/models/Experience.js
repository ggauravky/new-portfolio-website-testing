const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, "Type is required"],
      enum: ["internship", "hackathon", "project", "other"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    organization: {
      type: String,
      required: [true, "Organization is required"],
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
    },
    endDate: {
      type: Date,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    achievements: {
      type: [String],
      default: [],
    },
    skills: {
      type: [String],
      default: [],
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

// Virtual for checking if currently ongoing
ExperienceSchema.virtual("isCurrent").get(function () {
  return !this.endDate || this.endDate > new Date();
});

// Index for faster queries
ExperienceSchema.index({ type: 1, startDate: -1 });
ExperienceSchema.index({ order: 1 });

module.exports = mongoose.model("Experience", ExperienceSchema);
