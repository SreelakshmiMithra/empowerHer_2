# Multi-Component React App (Vite + React)

This project is a simple **multi-component React application** created using **Vite + React** as part of **Module 3 – Day 4 assignment**.

The objective of this assignment is to understand **React components**, **component nesting**, and **basic styling**.

---

## 📁 Project Structure

```
multi-component-app/
├── src/
│   ├── Navbar.jsx
│   ├── Content.jsx
│   ├── Footer.jsx
│   ├── MainPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧩 Components Description

### Navbar.jsx
- Displays text: **This is Navbar**
- Styled with background color and padding using inline styles

### Content.jsx
- Displays text: **This is Main Content**
- Text is center aligned

### Footer.jsx
- Displays text: **This is Footer**
- Smaller font size with a different color

---

## 🧱 MainPage.jsx
This component combines all the individual components:
```jsx
<Navbar />
<Content />
<Footer />
```

---

## 🚀 App.jsx
The `App` component imports and renders `MainPage` to display the complete page.

---

## ▶️ How to Run the Project

1. Go to the project directory:
```bash
cd multi-component-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open in browser:
```
http://localhost:5173
```

---

## ✅ Assignment Checklist

- ✔ Vite + React app created
- ✔ Multiple components implemented
- ✔ Components nested properly
- ✔ Inline styling applied
- ✔ Code committed and pushed to GitHub

---


