import { useState } from 'react';

export default function Task10() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Rating: {rating} / 5</h3>
      <div style={{ fontSize: '2.5rem', marginTop: '10px' }}>
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            style={{ cursor: 'pointer', color: star <= (hover || rating) ? '#fbbf24' : '#e2e8f0', transition: 'color 0.2s' }}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}