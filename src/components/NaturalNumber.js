import React from 'react';
function NaturalNumbers({ count }) {
  const numbers = [];
  for (let i = 1; i <= count; i++) {
    numbers.push(i);
  }

  return (
    <div>
      <h2>Natural Numbers up to {count}</h2>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default NaturalNumbers;