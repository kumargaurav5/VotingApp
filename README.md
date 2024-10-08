# Voting System API

This project is a RESTful API for a voting system implemented using Node.js and Express. It provides user authentication and allows for candidate management and voting functionalities.

## Table of Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [User Routes](#user-routes)
  - [Candidate Routes](#candidate-routes)
- [Authentication](#authentication)
- [Error Handling](#error-handling)

## Technologies

- Node.js
- Express
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your MongoDB database and configure the connection in your environment variables.
4. Start the server:
    ```bash
   npm start
    ```


## API Endpoints

### User Routes

- **POST /signup**
  - Register a new user.
  - Role must not be 'admin' if an admin already exists.
  - Aadhar Card Number must be exactly 12 digits.

- **POST /login**
  - Log in a user using their Aadhar Card Number and password.

- **GET /profile**
  - Retrieve the profile of the logged-in user.

- **PUT /profile/password**
  - Update the user's password.

### Candidate Routes

- **POST /candidates**
  - Admin only: Add a new candidate.

- **PUT /candidates/:candidateID**
  - Admin only: Update candidate details.

- **DELETE /candidates/:candidateID**
  - Admin only: Delete a candidate.

- **GET /candidates**
  - Retrieve a list of all candidates (name and party only).

- **GET /vote/:candidateID**
  - Vote for a candidate. Users can vote only once, and admins cannot vote.

- **GET /vote/count**
  - Retrieve vote counts for all candidates.
