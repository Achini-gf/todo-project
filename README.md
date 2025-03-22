
 # ToDo Web Application

A simple To-Do web application built with HTML, CSS, JavaScript, and Node.js with Express.js for backend support.

## Features

- Add and display tasks dynamically
- Save tasks using a Node.js backend
- Fetch and display tasks from the server
- Responsive design using Bootstrap

## Technologies Used

- Frontend: HTML, CSS, JavaScript, Bootstrap
- Backend: Node.js, Express.js
- Database: (Optional: MongoDB, MySQL, or in-memory array)

## Installation

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/todo-web-app.git
cd todo-web-app
```

### 2. Install Dependencies

Navigate to the backend folder and install dependencies:

```sh
cd backend
npm install
```

### 3. Start the Backend Server

```sh
node server.js
```

The backend will run on `http://localhost:3001`

### 4. Open Frontend in Browser

Simply open `index.html` in a browser, or use a local server:

```sh
cd frontend
python -m http.server 8000  # If using Python
```

Then open `http://localhost:8000` in your browser.

## API Endpoints

### 1. Fetch All Tasks

**GET** `/`
Returns an array of saved tasks.

### 2. Add a New Task

**POST** `/`

#### Request Body:

```json
{
  "description": "Buy groceries"
}
```

#### Response:

```json
{
  "message": "Task added"
}
```

## Troubleshooting

- If tasks do not save, ensure the backend server is running.
- Check for CORS errors and update `server.js` with `cors()` middleware.
- Use Postman or curl to manually test API endpoints.






