import React from "react";
import MessageCard from "./components/MessageCard";

function App() {
  return (
    <div className="app-container">
      <h1>My Messages</h1>
      <MessageCard title="Hello!" message="This is your first message." />
      <MessageCard title="React is Fun" message="Learning React props is easy!" />
      <MessageCard title="Vite + React" message="This app runs super fast with Vite." />
      <MessageCard title="All Done!" message="You can now reuse this card anywhere." />
    </div>

  );
}

export default App;
