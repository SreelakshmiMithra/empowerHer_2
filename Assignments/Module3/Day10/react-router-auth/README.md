# React + Vite + Protected Routes

This template provides a minimal setup to get **React working in Vite** with **dynamic routing** and **protected routes** using `react-router-dom` and `localStorage`-based authentication.

## Features

- Home Page (`/`) – Unprotected
- Login Page (`/login`) – Unprotected, validates credentials
- Todos Page (`/todos`) – Protected
- Todo Details Page (`/todos/:todoId`) – Protected + Dynamic
- Logout functionality
- Fetching data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos)
- Basic CSS styling

## React Compiler

This template uses **Babel** (via `@vitejs/plugin-react`) for fast refresh and HMR.  
If you want to use **SWC**, see [plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc).

## Project Structure

react-router-auth/
│
├── index.html
├── package.json
├── vite.config.js
│
└── src/
├── main.jsx
├── App.jsx
├── index.css
│
├── pages/
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── Todos.jsx
│ └── TodoDetails.jsx
│
└── components/
└── ProtectedRoute.jsx


## Installation

```bash
# Clone the repository
git clone <repository-url>
cd react-router-auth

# Install dependencies
npm install

# Run development server
npm run dev

