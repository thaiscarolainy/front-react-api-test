import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/login",
});

api.interceptors.request.use(async config => {
    
    // Declaramos um token manualmente para teste.
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvX2lkIjoxfQ.YT0aZGH9d-4tB_QyDvxieeypZJ_J-W39zRUBTj40wMo";
    
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
    }
  
    return config;
});

export default api;