import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 30000,
    withCredentials: true,
    headers: {
      'Content-type': 'application/json',
    },
  });

 