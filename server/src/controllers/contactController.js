const Contact = require("../models/Contact");
const axios = require("axios");

// Helper function to get geolocation from IP
const getGeoLocation = async (ip) => {
  try {
    // Using ip-api.com (free, no API key required)
    const response = await axios.get(`http://ip-api.com/json/${ip}`);
    if (response.data && response.data.status === "success") {
      return {
        country: response.data.country || "Unknown",
        city: response.data.city || "Unknown",
        region: response.data.regionName || "Unknown",
        isp: response.data.isp || "Unknown",
      };
    }
  } catch (error) {
    console.log("Geolocation fetch failed:", error.message);
  }
  return {
    country: "Unknown",
    city: "Unknown",
    region: "Unknown",
    isp: "Unknown",
  };
};

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res, next) => {
  try {
    const {
      name,
      email,
      subject,
      message,
      // Tracking data (sent from frontend)
      trackingData,
    } = req.body;

    console.log(
      "Received tracking data:",
      JSON.stringify(trackingData, null, 2)
    );

    // Get IP address
    const ipAddress =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      "Unknown";

    // Clean IP address (remove ::ffff: prefix if present)
    const cleanIp = ipAddress.replace("::ffff:", "");

    // Get geolocation data from IP
    const geoData = await getGeoLocation(cleanIp);

    // Merge geolocation data with tracking data
    const enrichedTrackingData = trackingData
      ? {
          ...trackingData,
          locationLanguage: {
            ...trackingData.locationLanguage,
            country: geoData.country,
            city: geoData.city,
            region: geoData.region,
            isp: geoData.isp,
          },
        }
      : {};

    console.log(
      "Enriched tracking data:",
      JSON.stringify(enrichedTrackingData, null, 2)
    );

    // Create contact with all tracking data
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
      ipAddress: cleanIp,
      ...enrichedTrackingData,
    });

    console.log(
      "Contact saved successfully with GPS:",
      contact.locationLanguage?.gpsLocation
    );

    res.status(201).json({
      success: true,
      message: "Thank you for your message! I will get back to you soon.",
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
      },
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

// @desc    Get all contacts
// @route   GET /api/contact
// @access  Private (Admin only - future implementation)
exports.getContacts = async (req, res, next) => {
  try {
    const { status } = req.query;

    let query = {};
    if (status) {
      query.status = status;
    }

    const contacts = await Contact.find(query).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single contact
// @route   GET /api/contact/:id
// @access  Private (Admin only - future implementation)
exports.getContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: "Contact not found",
      });
    }

    // Mark as read
    if (contact.status === "new") {
      contact.status = "read";
      await contact.save();
    }

    res.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        success: false,
        error: "Contact not found",
      });
    }
    next(error);
  }
};

// @desc    Update contact status
// @route   PUT /api/contact/:id
// @access  Private (Admin only - future implementation)
exports.updateContactStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: "Contact not found",
      });
    }

    res.json({
      success: true,
      data: contact,
      message: "Contact status updated",
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        success: false,
        error: "Contact not found",
      });
    }
    next(error);
  }
};

// @desc    Delete contact
// @route   DELETE /api/contact/:id
// @access  Private (Admin only - future implementation)
exports.deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: "Contact not found",
      });
    }

    res.json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        success: false,
        error: "Contact not found",
      });
    }
    next(error);
  }
};
