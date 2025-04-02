
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongodb:27017/employee_db';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Employee schema
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  level: { type: String, required: true },
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);

// API Routes

// Get all employees
app.get('/api/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new employee
app.post('/api/employees', async (req, res) => {
  try {
    const { name, position, level } = req.body;
    
    if (!name || !position || !level) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    const newEmployee = new Employee({
      name,
      position,
      level
    });
    
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete an employee
app.delete('/api/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const employee = await Employee.findByIdAndDelete(id);
    
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add some sample data if the database is empty
const seedDatabase = async () => {
  const count = await Employee.countDocuments();
  if (count === 0) {
    const sampleEmployees = [
      { name: 'John Doe', position: 'Software Engineer', level: 'Senior' },
      { name: 'Jane Smith', position: 'Product Manager', level: 'Lead' },
      { name: 'Michael Johnson', position: 'UX Designer', level: 'Mid' }
    ];
    
    await Employee.insertMany(sampleEmployees);
    console.log('Sample data inserted successfully');
  }
};

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  seedDatabase();
});
