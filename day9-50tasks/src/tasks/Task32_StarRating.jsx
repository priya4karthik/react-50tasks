import { useState } from 'react';

export default function Task32() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      <h3>Rating: {rating} stars</h3>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          style={{
            cursor: 'pointer',
            fontSize: '2rem',
            color: star <= (hover || rating) ? '#ffc107' : '#e4e5e9'
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}