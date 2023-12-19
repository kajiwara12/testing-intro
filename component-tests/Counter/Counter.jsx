import React, { useState, useEffect } from "react";

// Components rerender when:
// 1. Its internal state changes (setState)
// 2. The parent rerenders.

// Component lifecycle
// mount
// update
// unmount

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((oldCount) => oldCount + 1);
  const decrement = () => setCount((oldCount) => oldCount - 1);

  useEffect(() => {
    let id = setTimeout(() => {
      setCount((oldCount) => oldCount + 1);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <span data-testid="count">{count}</span>
    </div>
  );
};

export default Counter;
