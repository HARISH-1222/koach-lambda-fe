# koach-lambda-fe

## Overview

This project is a web application built with Angular for the front end and Express.js for the back end. It focuses on authentication and user management, utilizing token-based authentication stored in `localStorage`. The application is designed with a clean, simple UI while emphasizing best practices in code structure and reusability.

### User Story

1. When a user visits our application, they will see the **login** or **registration** page.
2. If the user is **new**, they can **register** with a username and password.
3. If already registered, they can **log in** using their credentials.
4. After a successful login, the user is redirected to the **homepage**.  
5. On the **homepage**, the user can upload **JSON-formatted data** using a **text area**.
6. Once the **Upload** button is clicked, the JSON data is sent to the backend, where it is uploaded to an **S3 bucket**.
7. At the **on the right side**, the user will see all previously uploaded data.
8. When the user selects a specific data entry, it is displayed on the **bottom of the text area** of the screen, formatted as JSON.
9. **Only allow format :** JSON


## Frontend Features

- **Angular Components**: The application consists of three main components:
  - **Home**: The main landing page after successful login.
  - **Register**: A registration page for new users.
  - **Login**: A login page for existing users.

- **Router-Based Navigation**: The application uses Angular's Router module to navigate between components, ensuring a seamless user experience.

- **Authentication**: 
  - The app uses token-based authentication, storing tokens in `localStorage` to manage user sessions securely.
  - The `AuthGuard` service protects routes by checking for the presence of a valid token before granting access.

- **Global Service**: A shared service is implemented to handle API requests, allowing for better code organization and reusability.

- **Good Practices**: The code follows best practices for Angular development, including component modularization, proper service usage, and clean architecture.

- **Simple UI**: The user interface is designed to be intuitive and easy to navigate, focusing more on the backend functionality while maintaining usability.

## Installation

### Prerequisites

- Node.js (version >= 14)
- Angular CLI (version >= 12)

### Frontend Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd koach-lambda-fe
