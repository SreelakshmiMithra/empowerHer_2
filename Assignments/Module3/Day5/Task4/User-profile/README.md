Sure! Here's a clean, professional `README.md` you can directly copy-paste into your repo. I’ve tailored it for your **MessageCard React assignment** with Vite:
# Task 4: Parent-Child Components and Props in React

## Overview
This project demonstrates how to create **Parent and Child React components** and **pass data using props**. The parent component (`UserProfile`) stores user information and passes it to the child component (`UserInfo`) to display it on the UI.

---

## Features
- **Parent Component:** `UserProfile`
  - Stores user details: `name` and `age`.
  - Passes these details as props to the child component.
  
- **Child Component:** `UserInfo`
  - Receives props from the parent.
  - Displays the user's `name` and `age`.

- **Styling:** Applied basic styling to enhance readability and responsiveness.

---

## Technologies Used
- React 18
- Vite (for fast React setup)
- CSS (for styling)

---

## Project Structure
task4-userprofile/
├─ index.html
├─ package.json
├─ vite.config.js
├─ src/
│ ├─ main.jsx
│ ├─ index.css
│ └─ components/
│ ├─ UserProfile.jsx
│ └─ UserInfo.jsx


---

## Installation and Setup

1. Clone the repository:

```bash
git clone <YOUR_REPO_URL>

How It Works

Parent Component (UserProfile)

Stores user information in a JavaScript object.

Passes name and age to the child component using props.

Child Component (UserInfo)

Receives name and age as props.

Renders the user information inside styled HTML elements.
