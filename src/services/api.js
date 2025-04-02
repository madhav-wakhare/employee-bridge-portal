
import axios from "axios";
import { API_BASE_URL } from "./config";

// Configure axios with the base URL
const api = axios.create({
  baseURL: API_BASE_URL,
});

// API Functions
export const getEmployees = async () => {
  try {
    const response = await api.get("/employees");
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};

export const createEmployee = async (employee) => {
  try {
    const response = await api.post("/employees", employee);
    return response.data;
  } catch (error) {
    console.error("Error creating employee:", error);
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    const response = await api.delete(`/employees/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting employee:", error);
    throw error;
  }
};

export default api;
