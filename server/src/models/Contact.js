const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
    },
    subject: {
      type: String,
      trim: true,
      maxlength: [100, "Subject cannot exceed 100 characters"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [10, "Message must be at least 10 characters"],
      maxlength: [1000, "Message cannot exceed 1000 characters"],
    },
    status: {
      type: String,
      enum: ["new", "read", "replied"],
      default: "new",
    },
    ipAddress: {
      type: String,
    },

    // ============= TRACKING DATA (Educational Purpose) =============
    // Device & Browser Info
    deviceBrowser: {
      browserName: String,
      browserVersion: String,
      operatingSystem: String,
      deviceType: String,
      userAgent: String,
      screen: {
        screenWidth: Number,
        screenHeight: Number,
        screenResolution: String,
        availWidth: Number,
        availHeight: Number,
        colorDepth: Number,
        pixelDepth: Number,
        pixelRatio: Number,
        orientation: String,
      },
    },

    // Location & Language
    locationLanguage: {
      timezone: String,
      timezoneOffset: Number,
      language: String,
      languages: [String],
      locale: String,
      country: String,
      city: String,
      region: String,
      isp: String,
      // GPS Location Data
      gpsLocation: {
        coordinates: {
          latitude: { type: Number, default: null },
          longitude: { type: Number, default: null },
        },
        accuracy: { type: Number, default: null },
        altitude: { type: Number, default: null },
        altitudeAccuracy: { type: Number, default: null },
        heading: { type: Number, default: null },
        speed: { type: Number, default: null },
        timestamp: { type: String, default: null },
        permissionStatus: { type: String, default: "unknown" },
        errorMessage: { type: String, default: null },
      },
    },

    // Technical Details
    technical: {
      cookieEnabled: Boolean,
      doNotTrack: String,
      onLine: Boolean,
      maxTouchPoints: Number,
      touchSupport: Boolean,
      connectionType: String,
      connectionDownlink: mongoose.Schema.Types.Mixed,
      connectionRtt: mongoose.Schema.Types.Mixed,
      connectionSaveData: Boolean,
      hardwareConcurrency: mongoose.Schema.Types.Mixed,
      deviceMemory: mongoose.Schema.Types.Mixed,
      platform: String,
      vendor: String,
      appName: String,
      appVersion: String,
      product: String,
      productSub: String,
    },

    // Browser Fingerprint
    fingerprint: {
      canvas: String,
      webgl: {
        renderer: String,
        vendor: String,
        version: String,
        shadingLanguageVersion: String,
      },
      audio: String,
      fonts: [String],
      plugins: [
        {
          name: String,
          description: String,
          filename: String,
        },
      ],
    },

    // Behavioral Data
    behavioral: {
      pagesVisited: [
        {
          page: String,
          timestamp: String,
        },
      ],
      sessionDuration: String,
      sessionDurationSeconds: Number,
      referrer: String,
      currentUrl: String,
      maxScrollDepth: Number,
      numberOfVisits: Number,
      isReturningVisitor: Boolean,
    },

    // Additional Metadata
    metadata: {
      collectionTimestamp: String,
      viewportWidth: Number,
      viewportHeight: Number,
      documentWidth: Number,
      documentHeight: Number,
      batteryLevel: String,
      networkInformation: String,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
ContactSchema.index({ status: 1, createdAt: -1 });
ContactSchema.index({ email: 1 });

module.exports = mongoose.model("Contact", ContactSchema);
