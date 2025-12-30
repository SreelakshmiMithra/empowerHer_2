import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

function App() {
  const [count, setCount] = useState(0);

  // ✅ FIX: products wrapped in useMemo
  const products = useMemo(() => {
    return [
      { id: 1, name: "Laptop", price: 50000 },
      { id: 2, name: "Phone", price: 30000 },
      { id: 3, name: "Headphones", price: 2000 },
      { id: 4, name: "Keyboard", price: 1500 },
    ];
  }, []);

  // ✅ Now dependency is stable
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  // ✅ useCallback already correct
  const handleProductSelect = useCallback((product) => {
    alert(`Selected product: ${product.name}`);
  }, []);

  return (
    <div className="app">
      <h1>React Performance Optimization</h1>

      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <hr />

      <ProductList
        products={products}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
}

export default App;
