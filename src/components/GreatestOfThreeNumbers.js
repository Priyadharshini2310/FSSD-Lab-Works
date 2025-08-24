import React, { useState } from 'react';

function GreatestOfThreeNumbers() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [greatest, setGreatest] = useState(null);
  const checkGreatest = () => {
    const num1 = parseInt(number1);
    const num2 = parseInt(number2);
    const num3 = parseInt(number3);

    if (isNaN(num1) || num1 < 0|| isNaN(num2) || num2 < 0 || isNaN(num3) || num3 < 0) {
      setGreatest(null); // Reset if input is invalid
      return;
    }   
    if(num1>num2 && num1>num3){
      setGreatest(num1);

    }
    else if(num2>num1 && num2>num3){
        setGreatest(num2);
    }
    else if(num3>num1 && num3>num2){
        setGreatest(num3);
    }
    else{
        setGreatest("All numbers are equal");
    }   
  };

  return (
    <div>
      <h2>Greatest of all three numbers</h2>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Enter a number1"
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Enter a number2"
      />
      <input
        type="number"
        value={number3}
        onChange={(e) => setNumber3(e.target.value)}
        placeholder="Enter a number3"
      />
      <button onClick={checkGreatest}>Check</button>

    
        <p>
            {greatest !== null ? `Greatest number is: ${greatest}` : ''}
          {/* {number} is {isArmstrong ? 'an Armstrong number' : 'not an Armstrong number'}. */}
        </p>

    </div>
  );
}

export default GreatestOfThreeNumbers;

