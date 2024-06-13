import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(10);
  const handleClick = () => {
    setCount(count + 10);
  };

  return (
    <>
      <button
        id="addButton"
        onClick={handleClick}
      >
        +
      </button>
      <span>{count}</span>
      <button
        id="deductButton"
        onClick={handleClick}
      >
        -
      </button>
    </>
  );
};
