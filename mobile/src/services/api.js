import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.43.6:3334'
});

// 192.168.48.142

export default api;
