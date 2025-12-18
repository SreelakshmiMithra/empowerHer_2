import { useState } from "react";

// Component A
function ComponentA() {
  return <h2>Status is TRUE</h2>;
}

// Component B
function ComponentB() {
  return <h2>Status is FALSE</h2>;
}

function App() {
  // status state (default: false)
  const [status, setStatus] = useState(false);

  // button click handler
  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={toggleStatus}>
        Toggle Status
      </button>

      {/* Conditional Rendering */}
      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default App;
