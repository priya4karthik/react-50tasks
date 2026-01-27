import { useState } from 'react';

export default function Task47() {
  const [rating, setRating] = useState(null);
  const feedback = ["😞", "😐", "😊", "🔥"];

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Rate your experience:</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {feedback.map((emoji, i) => (
          <button key={i} onClick={() => setRating(emoji)} style={{ fontSize: '2rem', border: 'none', background: rating === emoji ? '#ddd' : 'none', cursor: 'pointer', borderRadius: '50%' }}>
            {emoji}
          </button>
        ))}
      </div>
      {rating && <p style={{ marginTop: '20px' }}>You selected: {rating}</p>}
    </div>
  );
}