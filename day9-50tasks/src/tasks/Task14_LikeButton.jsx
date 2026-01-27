import { useState } from 'react';

export default function Task14() {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <button 
        onClick={() => setLikes(likes + 1)}
        style={{ fontSize: '1.5rem', padding: '10px 25px', borderRadius: '50px', border: '1px solid #ddd', cursor: 'pointer', backgroundColor: '#fdf2f2' }}
      >
        ❤️ {likes}
      </button>
      <p>Click to show some love!</p>
    </div>
  );
}