import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";  // Backend URL

// User Authentication API
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Blockchain API
export const getBlockchainData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blockchain/getData`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
