import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Configure axios defaults
axios.defaults.timeout = parseInt(import.meta.env.VITE_API_TIMEOUT || 30000);

// Auth API
export const getNonce = async (address) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/auth/nonce/${address}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const verifySignature = async (address, signature) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/verify`, {
      address,
      signature,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Job API
export const createJob = async (jobData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/jobs`, jobData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getJobs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/jobs`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getJobById = async (jobId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/jobs/${jobId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Proposal API
export const submitProposal = async (proposalData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/proposals`, proposalData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getProposalsByJob = async (jobId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/proposals/job/${jobId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getProposalsByFreelancer = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/proposals/freelancer`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const acceptProposal = async (jobId, proposalId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/jobs/${jobId}/proposals/${proposalId}/accept`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Add axios interceptor for authentication
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
