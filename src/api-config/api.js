import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // Example: Add authorization token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    // You can also add other configurations or logging here
    return config;
  },
  (error) => {
    // Handle request errors
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle response errors
    if (error.response) {
      // The request was made, and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response error:', error.response);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up request:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axios;