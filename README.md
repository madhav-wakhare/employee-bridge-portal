
# Employee Management Application

A 3-tier application with React frontend, Node.js backend, and MongoDB database.

## Project Structure

- **Frontend**: React with TypeScript, Tailwind CSS
- **Backend**: Node.js Express API
- **Database**: MongoDB

## Running Locally

### Prerequisites

- Node.js and npm
- Docker and Docker Compose

### Setup

1. Clone the repository
2. Create a `.env` file from the `.env.example` template

### Running with Docker

```bash
# Build and start the containers
docker-compose up --build

# Access the application
Frontend: http://localhost:3000
Backend API: http://localhost:5000/api/employees
```

### Running Without Docker

#### Backend
```bash
cd server
npm install
npm start
```

#### Frontend
```bash
npm install
npm run dev
```

## API Endpoints

- `GET /api/employees` - Get all employees
- `POST /api/employees` - Create a new employee
- `DELETE /api/employees/:id` - Delete an employee by ID

## Deployment

The application is containerized and ready for deployment on any platform that supports Docker.

```bash
# Deploy to a server
docker-compose -f docker-compose.yml up -d
```
