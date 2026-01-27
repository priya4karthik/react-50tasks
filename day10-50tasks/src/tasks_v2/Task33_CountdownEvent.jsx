import { useState, useEffect } from 'react';

export default function Task33() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Event Starts In:</h2>
      <h1 style={{ fontSize: '4rem', color: '#ef4444' }}>{seconds}s</h1>
    </div>
  );
}