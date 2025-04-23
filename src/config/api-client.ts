import axios from "axios";

// 5️⃣ api-client.ts 👉 Axios Client Configuration
// Purpose: Creates an Axios instance to centrally manage API request prefixes and other settings.
// This allows future requests to simply use paths like /expenses without repeating the full URL each time.
const apiClient = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export default apiClient;
