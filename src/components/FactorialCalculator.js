import React, { useState } from 'react';

function FactorialCalculator() {
  const [number, setNumber] = useState('');
  const [factorialResult, setFactorialResult] = useState(null);

  // You can choose either iterative or recursive factorial function
  const calculateFactorial = (n) => {
    if (n < 0) {
      return "Factorial is not defined for negative numbers.";
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const handleCalculate = () => {
    const num = parseInt(number);
    if (!isNaN(num)) {
      setFactorialResult(calculateFactorial(num));
    } else {
      setFactorialResult("Please enter a valid number.");
    }
  };

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleCalculate}>Calculate Factorial</button>
      {factorialResult !== null && (
        <p>Factorial: {factorialResult}</p>
      )}
    </div>
  );
}

export default FactorialCalculator;