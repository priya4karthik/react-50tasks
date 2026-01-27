import { useState } from 'react';

export default function Task35() {
  const images = [
    "https://picsum.photos/id/10/300/200",
    "https://picsum.photos/id/20/300/200",
    "https://picsum.photos/id/30/300/200"
  ];
  const [index, setIndex] = useState(0);

  const nextImg = () => setIndex((index + 1) % images.length);
  const prevImg = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={images[index]} alt="Gallery" style={{ borderRadius: '8px' }} />
      <div style={{ marginTop: '10px' }}>
        <button onClick={prevImg}>Previous</button>
        <span style={{ margin: '0 15px' }}>{index + 1} / {images.length}</span>
        <button onClick={nextImg}>Next</button>
      </div>
    </div>
  );
}