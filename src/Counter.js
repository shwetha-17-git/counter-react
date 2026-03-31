import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  function increment(){
    setCount(count + 1);
  }
  function decrement(){
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function reset(){
    setCount(0);
  }
  return (<div className="counter">
      <h1>Counter: {count}</h1>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;