import React, { useState, useMemo } from 'react';

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function FactorialCalculator() {
  const [number, setNumber] = useState(1);
  const [otherState, setOtherState] = useState(false);

  const memoizedFactorial = useMemo(() => {
    return factorial(number);
  }, [number]);

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <div>Factorial: {memoizedFactorial}</div>
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
    </div>
  );
}

export default FactorialCalculator;
