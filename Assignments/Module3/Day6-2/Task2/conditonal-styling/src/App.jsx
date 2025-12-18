import { useState } from "react";

function App() {
  // Step 3: useState to store color state
  const [isRed, setIsRed] = useState(true);

  // Step 4: toggle function
  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div style={{ padding: "50px" }}>
      {/* Step 5: Conditional styling */}
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: isRed ? "red" : "blue",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        Conditional Styling
      </div>

      <button onClick={toggleColor}>
        Change Color
      </button>
    </div>
  );
}

export default App;
