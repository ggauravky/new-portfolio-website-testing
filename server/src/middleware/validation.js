const Joi = require("joi");

/**
 * Validation middleware factory
 * Creates middleware for validating request body, params, or query
 */
const validate = (schema, property = "body") => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property], {
      abortEarly: false, // Show all errors
      stripUnknown: true, // Remove unknown fields
    });

    if (error) {
      const messages = error.details.map((detail) => detail.message);
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: messages,
      });
    }

    next();
  };
};

// Validation schemas
const schemas = {
  // Project validation
  createProject: Joi.object({
    title: Joi.string().min(3).max(100).required(),
    shortDescription: Joi.string().max(200).required(),
    fullDescription: Joi.string().required(),
    category: Joi.string()
      .valid("AI / Data Science", "Python", "Web Development", "Other")
      .required(),
    techStack: Joi.array().items(Joi.string()).min(1).required(),
    githubLink: Joi.string().uri().required(),
    liveLink: Joi.string().uri().allow(""),
    imageUrl: Joi.string().allow(""),
    featured: Joi.boolean(),
    order: Joi.number().integer(),
  }),

  // Blog validation
  createBlog: Joi.object({
    title: Joi.string().min(3).max(200).required(),
    slug: Joi.string()
      .lowercase()
      .trim()
      .pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      .required(),
    excerpt: Joi.string().max(300).required(),
    content: Joi.string().required(),
    coverImage: Joi.string().allow(""),
    tags: Joi.array().items(Joi.string()),
    readTime: Joi.number().integer().min(1),
    published: Joi.boolean(),
  }),

  // Contact validation
  submitContact: Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    subject: Joi.string().max(100),
    message: Joi.string().min(10).max(1000).required(),
  }),

  // Experience validation
  createExperience: Joi.object({
    type: Joi.string()
      .valid("internship", "hackathon", "project", "other")
      .required(),
    title: Joi.string().max(100).required(),
    organization: Joi.string().required(),
    location: Joi.string().allow(""),
    startDate: Joi.date().required(),
    endDate: Joi.date().allow(null),
    description: Joi.string().required(),
    achievements: Joi.array().items(Joi.string()),
    skills: Joi.array().items(Joi.string()),
    order: Joi.number().integer(),
  }),
};

module.exports = { validate, schemas };
