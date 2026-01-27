import { useState, useEffect } from 'react';

export default function Task13() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => setTime((t) => t + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', fontFamily: 'monospace', color: '#1e293b' }}>
        {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}
      </h1>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
        <button className={isActive ? "btn btn-secondary" : "btn btn-primary"} onClick={() => setIsActive(!isActive)}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="btn btn-danger" onClick={() => { setTime(0); setIsActive(false); }}>Reset</button>
      </div>
    </div>
  );
}