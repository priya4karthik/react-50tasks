import { useState } from 'react';

export default function Task16() {
  const [show, setShow] = useState(false);
  const imgUrl = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200";

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={() => setShow(!show)} style={{ marginBottom: '15px' }}>
        {show ? "Hide Image" : "Show Image"}
      </button>
      <br />
      {show && <img src={imgUrl} alt="Cat" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} />}
    </div>
  );
}