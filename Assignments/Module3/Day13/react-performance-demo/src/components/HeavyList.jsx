import React from "react";

const HeavyList = () => {
  console.log("🔴 HeavyList component rendered");

  // Simulating heavy UI
  const items = Array.from({ length: 5000 }, (_, i) => i + 1);

  return (
    <div>
      <h3>Heavy UI List</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>Item {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(HeavyList);
