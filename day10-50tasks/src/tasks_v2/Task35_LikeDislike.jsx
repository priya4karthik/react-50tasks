import { useState } from 'react';

export default function Task35() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <button onClick={() => setLikes(likes + 1)} className="btn btn-secondary">👍 {likes}</button>
      <button onClick={() => setDislikes(dislikes + 1)} className="btn btn-secondary">👎 {dislikes}</button>
    </div>
  );
}