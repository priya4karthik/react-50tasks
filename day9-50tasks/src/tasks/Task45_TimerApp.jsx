import { useState, useEffect } from 'react';

export default function Task45() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTime(prev => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem' }}>{time}s</h1>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)} style={{ margin: '0 10px' }}>Stop</button>
      <button onClick={() => {setRunning(false); setTime(0)}}>Reset</button>
    </div>
  );
}