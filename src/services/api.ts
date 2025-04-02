
import axios from "axios";
import { API_BASE_URL } from "./config";

// Configure axios with the base URL
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Type definitions
export interface Employee {
  _id: string;  // Making _id required, not optional
  name: string;
  position: string;
  level: string;
}

// API Functions
export const getEmployees = async (): Promise<Employee[]> => {
  try {
    const response = await api.get("/employees");
    
    // Ensure response.data is an array before returning
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("API response is not an array:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching employees:", error);
    return []; // Return empty array on error instead of throwing
  }
};

export const createEmployee = async (employee: Omit<Employee, "_id">): Promise<Employee> => {
  try {
    const response = await api.post("/employees", employee);
    return response.data;
  } catch (error) {
    console.error("Error creating employee:", error);
    throw error;
  }
};

export const deleteEmployee = async (id: string): Promise<any> => {
  try {
    const response = await api.delete(`/employees/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting employee:", error);
    throw error;
  }
};

export default api;
