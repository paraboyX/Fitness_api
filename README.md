Fitness API

This project is a RESTful API built using Express.js, Mongoose, MongoDB, JWT (JSON Web Tokens), and bcryptjs. It provides endpoints for managing fitness-related data such as users, exercises, workouts, and more.
Installation

    Clone the repository:

    bash

git clone https://github.com/yourusername/fitness-api.git

Navigate into the project directory:

bash

cd fitness-api

Install dependencies:

bash

npm install

Set up environment variables:
Create a .env file in the root directory and define the following variables:

makefile

    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret

    Replace your_mongodb_connection_string with your MongoDB connection string and your_jwt_secret with your preferred JWT secret key.

Usage

    Start the server:

    bash

    npm start

    The API will be available at http://localhost:8000/.

Endpoints
Authentication

    POST /api/auth/signup: Register a new user.
        Request body: { "username": "example", "password": "password" }
        Response: Returns a JWT token upon successful registration.

    POST /api/auth/login: Log in an existing user.
        Request body: { "username": "example", "password": "password" }
        Response: Returns a JWT token upon successful login.

Users

    GET /api/users: Get all users (admin access required).
        Headers: Authorization: Bearer <token>

    GET /api/users/:id: Get user by ID.
        Headers: Authorization: Bearer <token>

    PUT /api/users/:id: Update user by ID.
        Headers: Authorization: Bearer <token>
        Request body: Updated user data.

    DELETE /api/users/:id: Delete user by ID.
        Headers: Authorization: Bearer <token>

Exercises

    GET /api/exercises: Get all exercises.

    POST /api/exercises: Create a new exercise.
        Headers: Authorization: Bearer <token>
        Request body: { "name": "Push-up", "category": "Upper body", "description": "Description of the exercise" }

    GET /api/exercises/:id: Get exercise by ID.

    PUT /api/exercises/:id: Update exercise by ID.
        Headers: Authorization: Bearer <token>
        Request body: Updated exercise data.

    DELETE /api/exercises/:id: Delete exercise by ID.
        Headers: Authorization: Bearer <token>

Workouts

    GET /api/workouts: Get all workouts.

    POST /api/workouts: Create a new workout.
        Headers: Authorization: Bearer <token>
        Request body: { "name": "Monday Workout", "exercises": ["exerciseId1", "exerciseId2"], "date": "2024-03-19" }

    GET /api/workouts/:id: Get workout by ID.

    PUT /api/workouts/:id: Update workout by ID.
        Headers: Authorization: Bearer <token>
        Request body: Updated workout data.

    DELETE /api/workouts/:id: Delete workout by ID.
        Headers: Authorization: Bearer <token>

Authentication

JWT (JSON Web Tokens) are used for authentication. To access protected routes, include the JWT token in the request headers with the key Authorization.
Contributing

Contributions are welcome. If you have any suggestions or find any issues, please feel free to open an issue or create a pull request.
