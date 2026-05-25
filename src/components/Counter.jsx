import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');

  function Increment() {
    setError('');
    setCount(count + 1);
  }

  function Decrement() {
    if (count === 0) {
      setError('Non posso andare sotto lo 0');
      return;
    } else {
      setCount(count - 1);
    }
  }

  function reset() {
    setError('');
    setCount(0);
  }

  return (
    <div>
      <h2>Il conto è {count}</h2>
      <div className="m-3">
        <button className="mx-3 btn btn-primary" onClick={Increment}>
          +
        </button>

        <button className="btn  btn-primary" onClick={reset}>
          Reset
        </button>

        <button className="btn mx-3 btn-secondary" onClick={Decrement}>
          -
        </button>
        {error && (
          <div className=" mt-3 rounded bg-danger text-white">
            <p className="p-3">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Counter;
