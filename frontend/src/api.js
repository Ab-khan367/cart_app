import axios from "axios";

// Make sure the URL matches your backend
const api = axios.create({
    baseURL: "http://localhost:5000", // Make sure this is your correct backend URL
});

export { api };
