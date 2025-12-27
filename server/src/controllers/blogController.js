const Blog = require("../models/Blog");

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Public
exports.getBlogs = async (req, res, next) => {
  try {
    const { published, limit, tags } = req.query;

    // Build query
    let query = {};
    if (published === "true") {
      query.published = true;
    }
    if (tags) {
      query.tags = { $in: tags.split(",") };
    }

    // Execute query
    let blogsQuery = Blog.find(query).sort({ publishedAt: -1, createdAt: -1 });

    if (limit) {
      blogsQuery = blogsQuery.limit(parseInt(limit));
    }

    const blogs = await blogsQuery;

    res.json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get latest blogs
// @route   GET /api/blogs/latest
// @access  Public
exports.getLatestBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find({ published: true })
      .sort({ publishedAt: -1 })
      .limit(2);

    res.json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single blog by slug
// @route   GET /api/blogs/:slug
// @access  Public
exports.getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (!blog) {
      return res.status(404).json({
        success: false,
        error: "Blog not found",
      });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    res.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create blog
// @route   POST /api/blogs
// @access  Private (Admin only - future implementation)
exports.createBlog = async (req, res, next) => {
  try {
    const blog = await Blog.create(req.body);

    res.status(201).json({
      success: true,
      data: blog,
      message: "Blog created successfully",
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
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: "Slug already exists",
      });
    }
    next(error);
  }
};

// @desc    Update blog
// @route   PUT /api/blogs/:slug
// @access  Private (Admin only - future implementation)
exports.updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true, runValidators: true }
    );

    if (!blog) {
      return res.status(404).json({
        success: false,
        error: "Blog not found",
      });
    }

    res.json({
      success: true,
      data: blog,
      message: "Blog updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete blog
// @route   DELETE /api/blogs/:slug
// @access  Private (Admin only - future implementation)
exports.deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findOneAndDelete({ slug: req.params.slug });

    if (!blog) {
      return res.status(404).json({
        success: false,
        error: "Blog not found",
      });
    }

    res.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
