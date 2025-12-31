import { useState, lazy, Suspense } from "react";

// Lazy loading the component
const HeavyList = lazy(() => import("./components/HeavyList"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Memo & Lazy Loading Demo</h2>

      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>

      <hr />

      <Suspense fallback={<p>Loading Heavy Component...</p>}>
        <HeavyList />
      </Suspense>
    </div>
  );
}

export default App;
