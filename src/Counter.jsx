import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    return setCount(count+1)
  }

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
}
