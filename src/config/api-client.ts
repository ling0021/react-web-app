import axios from "axios";
import { AuthResponse } from "../model/AuthResponse";

// 5️⃣ api-client.ts 👉 Axios Client Configuration
// Purpose: Creates an Axios instance to centrally manage API request prefixes and other settings.
// This allows future requests to simply use paths like /expenses without repeating the full URL each time.
const apiClient = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

apiClient.interceptors.request.use(
  (config) => {
    if (!config.url?.includes("/login") && !config.url?.includes("/register")) {
      const authObject = localStorage.getItem("user");
      if (authObject) {
        const { token } = JSON.parse(authObject) as AuthResponse;
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
