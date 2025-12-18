# React Todo Cleanup App 🧹✅

This is a simple React application built using **React + Vite** to demonstrate:

- Data fetching using `useEffect`
- Storing data using `useState`
- Rendering lists using `.map()`
- Component unmounting
- Cleanup function execution in `useEffect`

---

## 🚀 Project Features

- Fetches the **first 15 todos** from JSONPlaceholder API
- Displays todos using a separate `TodoCard` component
- Includes an **"Unmount Todos"** button
- Shows an alert **"cleanup worked"** when the component unmounts
- Demonstrates proper usage of **cleanup functions**

---

## 🛠️ Technologies Used

- React
- Vite
- JavaScript (ES6)
- HTML & CSS
- JSONPlaceholder API

---

## 📂 Project Structure

src/
│
├── App.jsx
├── main.jsx
│
└── components/
├── TodosList.jsx
└── TodoCard.jsx


---

## 🔄 How It Works

1. When the app loads, `useEffect` fetches todos from the API.
2. The first 15 todos are stored in state.
3. Todos are rendered using `.map()` into `TodoCard` components.
4. Clicking **Unmount Todos** removes the `TodosList` component.
5. When unmounted, the cleanup function runs and shows an alert.

---

## ▶️ Getting Started

### 1️⃣ Install dependencies
```bash
npm install
