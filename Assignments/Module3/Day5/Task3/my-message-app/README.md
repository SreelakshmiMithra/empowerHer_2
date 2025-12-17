

# React MessageCard App

This is a simple React application built with **Vite** that demonstrates **reusable components** and **props**. The app renders multiple `MessageCard` components, each displaying different messages passed via props.

## Features

- Reusable `MessageCard` component.
- Passes `title` and `message` as props to each card.
- Displays multiple cards dynamically.
- Responsive and clean UI.
- Works in light and dark modes.

## Project Structure

```

my-message-app/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   └── MessageCard.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js

````

## Getting Started

### Prerequisites

- Node.js installed (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
````

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`) to see the app in action.

## Usage

You can customize the `MessageCard` components in `App.jsx` by changing the `title` and `message` props:

```jsx
<MessageCard title="Hello!" message="This is your first message." />
<MessageCard title="React is Fun" message="Learning React props is easy!" />
<MessageCard title="Vite + React" message="This app runs super fast with Vite." />
<MessageCard title="All Done!" message="You can now reuse this card anywhere." />
```

## License

This project is open source and free to use.


