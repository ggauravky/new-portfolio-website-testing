const getBrowserInfo = () => {
  const ua = navigator.userAgent;
  let browserName = "Unknown";
  let browserVersion = "Unknown";

  if (ua.includes("Firefox")) {
    browserName = "Firefox";
    browserVersion = ua.match(/Firefox\/(\d+\.\d+)/)?.[1] || "Unknown";
  } else if (ua.includes("Edg")) {
    browserName = "Edge";
    browserVersion = ua.match(/Edg\/(\d+\.\d+)/)?.[1] || "Unknown";
  } else if (ua.includes("Chrome")) {
    browserName = "Chrome";
    browserVersion = ua.match(/Chrome\/(\d+\.\d+)/)?.[1] || "Unknown";
  } else if (ua.includes("Safari")) {
    browserName = "Safari";
    browserVersion = ua.match(/Version\/(\d+\.\d+)/)?.[1] || "Unknown";
  } else if (ua.includes("Opera") || ua.includes("OPR")) {
    browserName = "Opera";
    browserVersion = ua.match(/(?:Opera|OPR)\/(\d+\.\d+)/)?.[1] || "Unknown";
  }

  return { browserName, browserVersion };
};

const getOperatingSystem = () => {
  const ua = navigator.userAgent;
  let os = "Unknown";

  if (ua.includes("Win")) os = "Windows";
  else if (ua.includes("Mac")) os = "macOS";
  else if (ua.includes("Linux")) os = "Linux";
  else if (ua.includes("Android")) os = "Android";
  else if (ua.includes("iOS") || ua.includes("iPhone") || ua.includes("iPad"))
    os = "iOS";

  return os;
};

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "Tablet";
  }
  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "Mobile";
  }
  return "Desktop";
};

const getScreenInfo = () => {
  return {
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    availWidth: window.screen.availWidth,
    availHeight: window.screen.availHeight,
    colorDepth: window.screen.colorDepth,
    pixelDepth: window.screen.pixelDepth,
    pixelRatio: window.devicePixelRatio || 1,
    orientation: window.screen.orientation?.type || "unknown",
  };
};

// ============= LOCATION & LANGUAGE =============
// Get precise geolocation coordinates
const getPreciseLocation = () => {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({
        coordinates: {
          latitude: null,
          longitude: null,
        },
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null,
        timestamp: null,
        permissionStatus: "unsupported",
        errorMessage: "Geolocation not supported by browser",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("GPS Location captured:", position.coords);
        resolve({
          coordinates: {
            latitude: position.coords.latitude || null,
            longitude: position.coords.longitude || null,
          },
          accuracy: position.coords.accuracy || null,
          altitude: position.coords.altitude || null,
          altitudeAccuracy: position.coords.altitudeAccuracy || null,
          heading: position.coords.heading || null,
          speed: position.coords.speed || null,
          timestamp: new Date(position.timestamp).toISOString(),
          permissionStatus: "granted",
          errorMessage: null,
        });
      },
      (error) => {
        console.log("GPS Location error:", error.message);
        resolve({
          coordinates: {
            latitude: null,
            longitude: null,
          },
          accuracy: null,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null,
          timestamp: new Date().toISOString(),
          permissionStatus: error.code === 1 ? "denied" : "error",
          errorMessage: error.message,
        });
      },
      {
        enableHighAccuracy: false, // Changed to false for faster response
        timeout: 3000, // Reduced to 3 seconds
        maximumAge: 60000, // Accept cached position up to 1 minute old
      }
    );
  });
};

const getLocationLanguageInfo = () => {
  return {
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timezoneOffset: new Date().getTimezoneOffset(),
    language: navigator.language,
    languages: navigator.languages || [navigator.language],
    locale: Intl.DateTimeFormat().resolvedOptions().locale,
  };
};

// ============= TECHNICAL DETAILS =============
const getTechnicalDetails = () => {
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;

  return {
    cookieEnabled: navigator.cookieEnabled,
    doNotTrack: navigator.doNotTrack || "unknown",
    onLine: navigator.onLine,
    maxTouchPoints: navigator.maxTouchPoints || 0,
    touchSupport: "ontouchstart" in window || navigator.maxTouchPoints > 0,
    connectionType: connection?.effectiveType || "unknown",
    connectionDownlink: connection?.downlink || "unknown",
    connectionRtt: connection?.rtt || "unknown",
    connectionSaveData: connection?.saveData || false,
    hardwareConcurrency: navigator.hardwareConcurrency || "unknown",
    deviceMemory: navigator.deviceMemory || "unknown",
    platform: navigator.platform,
    vendor: navigator.vendor,
    appName: navigator.appName,
    appVersion: navigator.appVersion,
    product: navigator.product,
    productSub: navigator.productSub,
  };
};

// ============= BROWSER FINGERPRINT =============
const getCanvasFingerprint = () => {
  try {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 200;
    canvas.height = 50;

    ctx.textBaseline = "top";
    ctx.font = "14px Arial";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText("Hello, World! 🌍", 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText("Portfolio Tracker", 4, 17);

    return canvas.toDataURL().substring(0, 100); // Truncate for storage
  } catch (e) {
    return "unavailable";
  }
};

const getWebGLFingerprint = () => {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (!gl) return { renderer: "unavailable", vendor: "unavailable" };

    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    return {
      renderer: debugInfo
        ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
        : "unknown",
      vendor: debugInfo
        ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
        : "unknown",
      version: gl.getParameter(gl.VERSION),
      shadingLanguageVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
    };
  } catch (e) {
    return { renderer: "unavailable", vendor: "unavailable" };
  }
};

const getAudioFingerprint = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return "unavailable";

    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const analyser = context.createAnalyser();
    const gainNode = context.createGain();
    const scriptProcessor = context.createScriptProcessor(4096, 1, 1);

    gainNode.gain.value = 0; // Mute
    oscillator.connect(analyser);
    analyser.connect(scriptProcessor);
    scriptProcessor.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.start(0);

    const fingerprint =
      context.sampleRate + "_" + context.destination.maxChannelCount;

    context.close();
    return fingerprint;
  } catch (e) {
    return "unavailable";
  }
};

const getFonts = () => {
  const baseFonts = ["monospace", "sans-serif", "serif"];
  const testFonts = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Courier New",
    "Georgia",
    "Palatino",
    "Garamond",
    "Bookman",
    "Comic Sans MS",
    "Trebuchet MS",
    "Impact",
    "Lucida Sans",
    "Tahoma",
    "Geneva",
    "Helvetica",
  ];

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const text = "mmmmmmmmmmlli";

  context.font = "72px monospace";
  const baseWidth = context.measureText(text).width;

  const detectedFonts = testFonts.filter((font) => {
    context.font = `72px ${font}, monospace`;
    const width = context.measureText(text).width;
    return width !== baseWidth;
  });

  return detectedFonts;
};

const getPlugins = () => {
  const plugins = [];
  if (navigator.plugins && navigator.plugins.length > 0) {
    for (let i = 0; i < navigator.plugins.length; i++) {
      plugins.push({
        name: navigator.plugins[i].name,
        description: navigator.plugins[i].description,
        filename: navigator.plugins[i].filename,
      });
    }
  }
  return plugins;
};

// ============= BEHAVIORAL DATA =============
let sessionStartTime = Date.now();
let visitedPages = [];
let maxScrollDepth = 0;

export const initSessionTracking = () => {
  sessionStartTime = Date.now();
  visitedPages = [];
  maxScrollDepth = 0;

  // Track page visits
  const currentPage = window.location.pathname;
  visitedPages.push({
    page: currentPage,
    timestamp: new Date().toISOString(),
  });

  // Track scroll depth
  window.addEventListener("scroll", () => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

    if (scrollPercentage > maxScrollDepth) {
      maxScrollDepth = scrollPercentage;
    }
  });

  // Track route changes (for SPA)
  window.addEventListener("popstate", () => {
    visitedPages.push({
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
    });
  });
};

const getBehavioralData = () => {
  const sessionDuration = Math.round((Date.now() - sessionStartTime) / 1000); // in seconds

  return {
    pagesVisited: visitedPages,
    sessionDuration: `${Math.floor(sessionDuration / 60)}m ${
      sessionDuration % 60
    }s`,
    sessionDurationSeconds: sessionDuration,
    referrer: document.referrer || "direct",
    currentUrl: window.location.href,
    maxScrollDepth: maxScrollDepth,
    numberOfVisits: parseInt(localStorage.getItem("visitCount") || "1"),
    isReturningVisitor: !!localStorage.getItem("hasVisited"),
  };
};

// Update visit count
export const updateVisitTracking = () => {
  const visitCount = parseInt(localStorage.getItem("visitCount") || "0") + 1;
  localStorage.setItem("visitCount", visitCount.toString());
  localStorage.setItem("hasVisited", "true");
  localStorage.setItem("lastVisit", new Date().toISOString());
};

// ============= MAIN COLLECTION FUNCTION =============
export const collectAllTrackingData = async () => {
  const { browserName, browserVersion } = getBrowserInfo();
  const screenInfo = getScreenInfo();
  const locationLanguage = getLocationLanguageInfo();
  const technicalDetails = getTechnicalDetails();
  const behavioralData = getBehavioralData();

  // Get precise location coordinates (async)
  console.log("Requesting GPS location...");
  const preciseLocation = await getPreciseLocation();
  console.log("GPS location received:", preciseLocation);

  const trackingData = {
    // Device & Browser Info
    deviceBrowser: {
      browserName,
      browserVersion,
      operatingSystem: getOperatingSystem(),
      deviceType: getDeviceType(),
      userAgent: navigator.userAgent,
      screen: screenInfo,
    },

    // Location & Language (Enhanced with coordinates)
    locationLanguage: {
      ...locationLanguage,
      country: "detected-by-backend", // Will be filled by backend using IP
      city: "detected-by-backend",
      // Precise GPS coordinates
      gpsLocation: preciseLocation,
    },

    // Technical Details
    technical: technicalDetails,

    // Browser Fingerprint
    fingerprint: {
      canvas: getCanvasFingerprint(),
      webgl: getWebGLFingerprint(),
      audio: getAudioFingerprint(),
      fonts: getFonts(),
      plugins: getPlugins(),
    },

    // Behavioral Data
    behavioral: behavioralData,

    // Additional Metadata
    metadata: {
      collectionTimestamp: new Date().toISOString(),
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      documentWidth: document.documentElement.scrollWidth,
      documentHeight: document.documentElement.scrollHeight,
      batteryLevel: "request-permission", // Can be added with Battery API
      networkInformation: technicalDetails.connectionType,
    },
  };

  console.log("Full tracking data:", trackingData);
  return trackingData;
};

// Initialize tracking on page load
if (typeof window !== "undefined") {
  initSessionTracking();
  updateVisitTracking();
}
