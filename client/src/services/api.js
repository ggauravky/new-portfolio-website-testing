import axios from "axios";

// API Base URL - from environment variable or default
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor (for future auth tokens)
apiClient.interceptors.request.use(
  (config) => {
    // You can add auth tokens here later
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (for error handling)
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle different error types
    if (error.response) {
      // Server responded with error status
      const errorMessage =
        error.response.data?.error || "Server error occurred";
      throw {
        message: errorMessage,
        status: error.response.status,
        details: error.response.data?.details,
      };
    } else if (error.request) {
      // Request made but no response received
      throw {
        message: "Network error. Please check your internet connection.",
        status: 0,
      };
    } else {
      // Something else happened
      throw {
        message: "An unexpected error occurred",
        status: -1,
      };
    }
  }
);

// ==================== PROJECTS ====================

export const getProjects = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams();
    if (filters.category) queryParams.append("category", filters.category);
    if (filters.featured) queryParams.append("featured", "true");
    if (filters.limit) queryParams.append("limit", filters.limit);

    const url = `/projects${
      queryParams.toString() ? `?${queryParams.toString()}` : ""
    }`;
    return await apiClient.get(url);
  } catch (error) {
    console.error("Get projects error:", error);
    throw error;
  }
};

export const getFeaturedProjects = async () => {
  try {
    return await apiClient.get("/projects/featured");
  } catch (error) {
    console.error("Get featured projects error:", error);
    throw error;
  }
};

export const getProjectById = async (id) => {
  try {
    return await apiClient.get(`/projects/${id}`);
  } catch (error) {
    console.error("Get project error:", error);
    throw error;
  }
};

// ==================== BLOGS ====================

export const getBlogs = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams();
    if (filters.published !== undefined)
      queryParams.append("published", filters.published);
    if (filters.limit) queryParams.append("limit", filters.limit);
    if (filters.tags) queryParams.append("tags", filters.tags.join(","));

    const url = `/blogs${
      queryParams.toString() ? `?${queryParams.toString()}` : ""
    }`;
    return await apiClient.get(url);
  } catch (error) {
    console.error("Get blogs error:", error);
    throw error;
  }
};

export const getLatestBlogs = async () => {
  try {
    return await apiClient.get("/blogs/latest");
  } catch (error) {
    console.error("Get latest blogs error:", error);
    throw error;
  }
};

export const getBlogBySlug = async (slug) => {
  try {
    return await apiClient.get(`/blogs/${slug}`);
  } catch (error) {
    console.error("Get blog error:", error);
    throw error;
  }
};

// ==================== CONTACT ====================

export const submitContactForm = async (formData) => {
  try {
    return await apiClient.post("/contact", formData);
  } catch (error) {
    console.error("Submit contact error:", error);
    throw error;
  }
};

// ==================== EXPERIENCES ====================

export const getExperiences = async () => {
  try {
    return await apiClient.get("/experiences");
  } catch (error) {
    console.error("Get experiences error:", error);
    throw error;
  }
};

export const getExperienceById = async (id) => {
  try {
    return await apiClient.get(`/experiences/${id}`);
  } catch (error) {
    console.error("Get experience error:", error);
    throw error;
  }
};

// Export axios instance for custom requests
export default apiClient;
