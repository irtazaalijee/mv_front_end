import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/", // apna backend ka base URL
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // agar cookies/session use karni ho
});

export default api;
