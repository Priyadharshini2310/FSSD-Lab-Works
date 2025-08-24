import React, { useState } from 'react';

function ArmstrongChecker() {
  const [number, setNumber] = useState('');
  const [isArmstrong, setIsArmstrong] = useState(null);

  const checkArmstrong = () => {
    const num = parseInt(number);

    if (isNaN(num) || num < 0) {
      setIsArmstrong(null); // Reset if input is invalid
      return;
    }

    const numStr = num.toString();
    const numDigits = numStr.length;
    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
      const digit = parseInt(numStr[i]);
      sum += Math.pow(digit, numDigits);
    }

    setIsArmstrong(sum === num);
  };

  return (
    <div>
      <h2>Armstrong Number Checker</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={checkArmstrong}>Check</button>

      {isArmstrong !== null && (
        <p>
          {number} is {isArmstrong ? 'an Armstrong number' : 'not an Armstrong number'}.
        </p>
      )}
    </div>
  );
}

export default ArmstrongChecker;

