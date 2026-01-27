import { useState, useEffect } from 'react';

export default function Task19() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {loading ? (
        <div className="spinner">⌛ Loading Data...</div>
      ) : (
        <h2 style={{ color: '#22c55e' }}>✅ Data Loaded Successfully!</h2>
      )}
    </div>
  );
}