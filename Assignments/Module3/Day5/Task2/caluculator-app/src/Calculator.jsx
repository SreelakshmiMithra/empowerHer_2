import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [results, setResults] = useState([]);

  const performCalculation = () => {
    const number1 = Number(num1);
    const number2 = Number(num2);
    let result;

    if (operation === "add") {
      result = number1 + number2;
    } else if (operation === "subtract") {
      result = number1 - number2;
    } else if (operation === "multiply") {
      result = number1 * number2;
    }

    setResults([...results, result]);
  };

  return (
    <div className="calculator">
      <h2>Basic Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
      </select>

      <button onClick={performCalculation}>Perform Action</button>
      <div className="results">
        <h3>Results:</h3>
        <ul>
        {results.map((res, index) => (
        <li key={index}>{res}</li>
        ))}
        </ul>
      </div>

    </div>


  )


}


    
  

export default Calculator;
