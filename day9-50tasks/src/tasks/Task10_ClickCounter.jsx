import { useState } from 'react';

export default function Task10() {
  const [clicks, setClicks] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <div 
        onClick={() => setClicks(clicks + 1)}
        style={{
          width: '150px', height: '150px', lineHeight: '150px',
          margin: '0 auto', backgroundColor: '#6366f1', color: 'white',
          borderRadius: '50%', cursor: 'pointer', fontSize: '2rem',
          userSelect: 'none', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)'
        }}
      >
        {clicks}
      </div>
      <p style={{ marginTop: '10px' }}>Click the circle to count!</p>
    </div>
  );
}