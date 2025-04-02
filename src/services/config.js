
// API base URL from environment variables with a fallback
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export { API_BASE_URL };
