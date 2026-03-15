# Project Management Web Application

## 1. Project Overview

The **Project Management Web Application** is a web-based system designed to help teams organize projects, assign tasks, monitor progress, and collaborate efficiently. The application provides a centralized platform where users can create projects, manage tasks, track deadlines, and coordinate with team members.

This system aims to improve productivity by simplifying project planning, task distribution, and progress tracking.

The backend of the application is built using **Node.js, Express.js, and MongoDB**, following a modular **MVC architecture** to ensure scalability and maintainability.

---

# 2. Problem Statement

Managing projects manually or through scattered tools often leads to:

- Poor task tracking
- Lack of team coordination
- Missed deadlines
- Difficulty in monitoring project progress
- Inefficient communication among team members

The **Project Management Web Application** addresses these issues by providing a centralized system for project and task management.

---

# 3. Objectives

The main objectives of this project are:

1. Provide a centralized platform for project management.
2. Enable teams to create and manage projects efficiently.
3. Allow task assignment and progress tracking.
4. Improve collaboration among team members.
5. Maintain project history and task records.

---

# 4. System Architecture

The application follows the **MVC (Model-View-Controller) architecture**.

---

# 5. Technology Stack

| Component | Technology |
|----------|-------------|
| Backend Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JWT (JSON Web Token) |
| Validation | express-validator |
| Environment Variables | dotenv |
| API Testing | Postman |

---

# 6. Key Features

### User Authentication
- User Registration
- Login
- Logout
- Secure password handling

### Project Management
- Create new projects
- Update project details
- Delete projects
- Track project progress

### Task Management
- Create tasks under projects
- Assign tasks to users
- Update task status
- Track task completion

### Team Collaboration
- Multiple users can work on the same project
- Task assignment for team members
- Role-based task management

---

# 7. API Endpoints

## Authentication Routes

### Register User

```
POST /api/v1/auth/register
```

Request Body

```json
{
  "username": "john_doe",
  "email": "john@email.com",
  "password": "password123"
}
```

---

### Login User

```
POST /api/v1/auth/login
```

---

### Logout User

```
POST /api/v1/auth/logout
```

---

# API Routes Documentation

## Password Routes
- **POST** `/forgot-password`  
  Request password reset

- **POST** `/reset-password/:resetToken`  
  Reset forgotten password

- **POST** `/resend-email-verification`  
  Resend verification email *(secured)*

---

## Project Routes (`/api/v1/projects/`)
- **GET** `/`  
  List user projects *(secured)*

- **POST** `/`  
  Create project *(secured)*

- **GET** `/:projectId`  
  Get project details *(secured, role-based)*

- **PUT** `/:projectId`  
  Update project *(secured, Admin only)*

- **DELETE** `/:projectId`  
  Delete project *(secured, Admin only)*

- **GET** `/:projectId/members`  
  List project members *(secured)*

- **POST** `/:projectId/members`  
  Add project member *(secured, Admin only)*

- **PUT** `/:projectId/members/:userId`  
  Update member role *(secured, Admin only)*

- **DELETE** `/:projectId/members/:userId`  
  Remove member *(secured, Admin only)*

---

## Task Routes (`/api/v1/tasks/`)
- **GET** `/:projectId`  
  List project tasks *(secured, role-based)*

- **POST** `/:projectId`  
  Create task *(secured, Admin/Project Admin)*

- **GET** `/:projectId/t/:taskId`  
  Get task details *(secured, role-based)*

- **PUT** `/:projectId/t/:taskId`  
  Update task *(secured, Admin/Project Admin)*

- **DELETE** `/:projectId/t/:taskId`  
  Delete task *(secured, Admin/Project Admin)*

- **POST** `/:projectId/t/:taskId/subtasks`  
  Create subtask *(secured, Admin/Project Admin)*

- **PUT** `/:projectId/st/:subTaskId`  
  Update subtask *(secured, role-based)*

---

# 8. Middleware

### Authentication Middleware

```
verifyJWT
```

Verifies the JWT token and authenticates users.

---

### Validation Middleware

```
validate
```

Uses express-validator to validate request data.

---

### Error Handling Middleware

Handles API errors and returns consistent responses.

---

# 9. Security Features

The system includes several security mechanisms:

- JWT authentication
- Password hashing
- Input validation
- Protected API routes
- Centralized error handling

---

# 10. Environment Variables

Create a `.env` file in the root directory.

```
PORT=8000

MONGODB_URI=mongodb://localhost:27017/projectmanagement

ACCESS_TOKEN_SECRET=yourAccessTokenSecret
ACCESS_TOKEN_EXPIRY=1d
```

---

# 11. Running the Project

### Install Dependencies

```
npm install
```

### Start Development Server

```
npm run dev
```

Server will run at:

```
http://localhost:8000
```

---

# 12. Testing APIs

API endpoints can be tested using:

- Postman
- Thunder Client

Example workflow:

```
Register User
Login User
Create Project
Create Tasks
Assign Tasks
Update Task Status
Track Project Progress
```

---

# 13. Future Improvements

Potential improvements for the system include:

- Real-time collaboration features
- Task priority and deadline tracking
- File sharing within projects
- Notification system
- Project analytics dashboard

---

# 14. Conclusion

The **Project Management Web Application** provides an efficient solution for managing projects and tasks within teams. By offering structured project planning, task tracking, and team collaboration features, the system improves productivity and project organization.

The modular backend architecture ensures scalability and maintainability, making the system suitable for further enhancements and integration with modern frontend frameworks.