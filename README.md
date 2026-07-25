# TaskFlow AI

TaskFlow AI is a simple full-stack task management application developed using React, Spring Boot, and PostgreSQL. It allows users to add, view, and delete tasks through an easy-to-use interface.

## Features

- Add new tasks
- View all tasks
- Delete tasks
- Store task data in PostgreSQL
- REST API using Spring Boot
- Responsive frontend built with React

## Tech Stack

### Frontend
- React (Vite)
- Axios
- JavaScript
- CSS

### Backend
- Spring Boot
- Spring Data JPA
- Maven

### Database
- PostgreSQL

## Project Structure

```
taskflow-ai/
├── backend/
└── frontend/
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Adarsha098-web/taskflow-ai.git
cd taskflow-ai
```

### 2. Start the Backend

```bash
cd backend
mvn spring-boot:run
```

The backend runs on:

```
http://localhost:8081
```

### 3. Start the Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a new task |
| DELETE | `/api/tasks/{id}` | Delete a task |

## Future Improvements

- Edit existing tasks
- Search and filter tasks
- User authentication
- Better UI design

## Author

**Adarsha Gupta**

GitHub: https://github.com/Adarsha098-web
