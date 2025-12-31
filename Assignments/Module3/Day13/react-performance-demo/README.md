🚀 React Memo & Lazy Loading Demo

This project demonstrates React performance optimization using React.memo and Lazy Loading in a simple React + Vite application.

It is designed for beginners to understand how unnecessary re-renders can be avoided in React.

📌 Features

Parent component with a counter

Heavy child component rendering a large UI list

Lazy loading using React.lazy and Suspense

Performance optimization using React.memo

Console logs to verify render behavior

🧠 Concept Covered
1️⃣ React.memo

Prevents unnecessary re-renders of a component

Child component re-renders only if props change

2️⃣ Lazy Loading

Loads heavy components only when required

Improves initial load performance

🏗️ Project Structure
src/
 ├── components/
 │    └── HeavyList.jsx
 ├── App.jsx
 └── main.jsx

⚙️ How It Works

The parent component maintains a counter state

Clicking the button updates the counter

The heavy child component:

Is lazy loaded

Wrapped with React.memo

Does not re-render when the counter updates

Console logs confirm that the heavy component renders only once

🖥️ Expected Output

Counter updates smoothly

Heavy UI list loads lazily

Console shows:

🔴 HeavyList component rendered


only once, even after multiple counter updates

🛠️ Technologies Used

React

Vite

JavaScript (ES6)

▶️ Run the Project Locally
npm install
npm run dev


Open browser at:

http://localhost:5173

🌐 Live Demo

👉 (Add your deployed Vercel/Netlify link here)

📦 GitHub Repository

👉 (Add your GitHub repo link here)

