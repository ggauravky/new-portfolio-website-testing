const Experience = require("../models/Experience");

// @desc    Get all experiences
// @route   GET /api/experiences
// @access  Public
exports.getExperiences = async (req, res, next) => {
  try {
    const { type } = req.query;

    let query = {};
    if (type) {
      query.type = type;
    }

    const experiences = await Experience.find(query).sort({
      order: 1,
      startDate: -1,
    });

    res.json({
      success: true,
      count: experiences.length,
      data: experiences,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single experience
// @route   GET /api/experiences/:id
// @access  Public
exports.getExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findById(req.params.id);

    if (!experience) {
      return res.status(404).json({
        success: false,
        error: "Experience not found",
      });
    }

    res.json({
      success: true,
      data: experience,
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        success: false,
        error: "Experience not found",
      });
    }
    next(error);
  }
};

// @desc    Create experience
// @route   POST /api/experiences
// @access  Private (Admin only - future implementation)
exports.createExperience = async (req, res, next) => {
  try {
    const experience = await Experience.create(req.body);

    res.status(201).json({
      success: true,
      data: experience,
      message: "Experience created successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: messages,
      });
    }
    next(error);
  }
};

// @desc    Update experience
// @route   PUT /api/experiences/:id
// @access  Private (Admin only - future implementation)
exports.updateExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!experience) {
      return res.status(404).json({
        success: false,
        error: "Experience not found",
      });
    }

    res.json({
      success: true,
      data: experience,
      message: "Experience updated successfully",
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        success: false,
        error: "Experience not found",
      });
    }
    next(error);
  }
};

// @desc    Delete experience
// @route   DELETE /api/experiences/:id
// @access  Private (Admin only - future implementation)
exports.deleteExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);

    if (!experience) {
      return res.status(404).json({
        success: false,
        error: "Experience not found",
      });
    }

    res.json({
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        success: false,
        error: "Experience not found",
      });
    }
    next(error);
  }
};
