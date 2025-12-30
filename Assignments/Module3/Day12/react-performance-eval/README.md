React Performance Optimization (useMemo & useCallback)

This project demonstrates React performance optimization using useMemo and useCallback.
It is built with React + Vite and focuses on preventing unnecessary recalculations and re-renders.

🎯 Objective

Display the total price of a products array

Add an independent counter to trigger re-renders

Render products in a child component

Optimize performance using React Hooks

✅ Key Features

Fixed Total Price: Calculated once from the products array

Independent Counter: Increments without affecting product logic

ProductList Component: Renders products separately

Optimized Rendering:

useMemo prevents recalculating total price

useCallback prevents unnecessary child re-renders

⚙️ Expected Behavior

Counter updates without recalculating total price

ProductList does not re-render on counter change

Clicking a product triggers a simple alert

🛠 Tech Stack

React

Vite

JavaScript (JSX)

CSS

▶️ Run the Project
npm install
npm run dev

📂 Project Structure
src/
 ├─ App.jsx
 ├─ ProductList.jsx
 ├─ main.jsx
 ├─ index.css

🧠 Conclusion

This project focuses on React re-render optimization and demonstrates correct usage of useMemo and useCallback as per the assignment requirements.
