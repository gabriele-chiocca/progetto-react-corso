import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Il conto è {count}</h2>
      <div className="m-3">
        <button className="mx-3 btn btn-primary" onClick={Increment}>
          +
        </button>

        <button className="btn btn-secondary" onClick={Decrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
