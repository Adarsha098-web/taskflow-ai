import axios from "axios";

const API = axios.create({
  baseURL: "https://taskflow-ai-backend-2.onrender.com/api/tasks",
});

export default API;