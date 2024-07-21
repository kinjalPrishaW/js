import React, { useState, useCallback } from 'react';

const IncrementButton = React.memo(({ onIncrement }) => {
  console.log('Rendering IncrementButton');
  return <button onClick={onIncrement}>Increment</button>;
});

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <IncrementButton onIncrement={increment} />
    </div>
  );
}

export default Counter;
