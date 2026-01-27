import { useState } from 'react';

export default function Task39() {
  const imgs = ["https://picsum.photos/id/10/300/150", "https://picsum.photos/id/20/300/150"];
  const [idx, setIdx] = useState(0);
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={imgs[idx]} alt="slide" style={{ borderRadius: '10px' }} />
      <div>
        <button className="btn" onClick={() => setIdx((idx + 1) % imgs.length)}>Next Image</button>
      </div>
    </div>
  );
}