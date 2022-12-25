import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-products-bouaesu2x-brunowbbs.vercel.app',
});

export default api;
