import { useState, useEffect } from 'react';

export default function Task5() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('app-theme') === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('app-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div style={{ 
      padding: '40px', 
      borderRadius: '8px',
      backgroundColor: isDark ? '#333' : '#eee', 
      color: isDark ? '#fff' : '#000',
      transition: '0.3s'
    }}>
      <h3>Theme is {isDark ? "Dark" : "Light"}</h3>
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
      <p>Refresh the page and notice the color stays!</p>
    </div>
  );
}