// /src/services/api.js

import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:5000/api', // Replace with your backend URL
  withCredentials:true
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default api;
