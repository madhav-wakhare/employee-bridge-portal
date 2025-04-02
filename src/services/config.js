
// API base URL from environment variables with a fallback
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export { API_BASE_URL };
