import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [bumping, setBumping] = useState(false);

  // Trigger a quick scale animation on the number
  const triggerBump = () => {
    setBumping(true);
    setTimeout(() => setBumping(false), 150);
  };

  const handleIncrement = () => {
    setCount(prev => prev + 1);
    triggerBump();
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
      triggerBump();
    }
  };

  const handleReset = () => {
    setCount(0);
    triggerBump();
  };

  const isZero = count === 0;

  return (
    <div className="wrapper">
      {/* Decorative blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="card">
        <p className="label">Counter Application</p>

        {/* Counter value */}
        <div
          className={`count-display ${bumping ? 'bump' : ''} ${isZero ? 'zero' : ''}`}
        >
          {count}
        </div>

        {/* Conditional message */}
        <p className={`status-msg ${isZero ? 'visible' : 'hidden'}`}>
          ⚠ Minimum limit reached
        </p>

        <div className="divider" />

        {/* Buttons */}
        <div className="btn-row">
          <button className="btn btn-decrement" onClick={handleDecrement} disabled={isZero}>
            − Decrement
          </button>
          <button className="btn btn-increment" onClick={handleIncrement}>
            + Increment
          </button>
          <button className="btn btn-reset" onClick={handleReset} title="Reset to zero">
            Reset
          </button>
        </div>

        <p className="footer-hint">Count cannot go below 0</p>
      </div>
    </div>
  );
}

export default Counter;
