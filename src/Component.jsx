import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((oldCount) => oldCount + 1);
  const decrement = () => setCount((oldCount) => oldCount - 1);

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <span data-testid="count">{count}</span>
    </div>
  );
};

export default Counter;
