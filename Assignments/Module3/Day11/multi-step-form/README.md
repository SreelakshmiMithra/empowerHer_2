# Multi-Step User Registration Form (React + Vite)

This project is a **Multi-Step User Registration Form** built using **React** and **Vite**, with state management handled entirely using the **useReducer** hook.

The application demonstrates structured state management, predictable UI updates, and clean separation of logic using reducer-based architecture.

---

## 🚀 Features

- Multi-step registration form (3 steps)
- Centralized state management using `useReducer`
- No usage of multiple `useState` hooks
- Clean and minimal UI styling
- Review & submit functionality
- Reset form after successful submission

---

## 🧩 Application Flow

**Step 1: Personal Details**
- Name
- Email

**Step 2: Account Details**
- Username
- Password

**Step 3: Review & Submit**
- Displays all entered details
- Submit and Reset options

---

## 🛠️ Technologies Used

- React (Functional Components)
- Vite
- JavaScript (ES6)
- CSS (Minimal Styling)
- useReducer Hook

---

## 🔄 State Management (useReducer)

The application uses a reducer to manage:
- Form field values
- Current step navigation
- Submission state

### Supported Actions:
- `UPDATE_FIELD`
- `NEXT_STEP`
- `PREVIOUS_STEP`
- `SUBMIT_FORM`
- `RESET_FORM`

### State Flow:
User Action
↓
dispatch(action)
↓
reducer(state, action)
↓
updated state
↓
UI re-renders

---

## 📂 Project Structure

src/
├── App.jsx # Main component with reducer logic
├── main.jsx # Entry point
├── index.css # Global & form styling

---

## ▶️ How to Run the Project

1. Clone the repository:
```bash
git clone <your-repo-url>
