import { useState } from 'react';

export default function Task48() {
  const [color, setColor] = useState("#3b82f6");
  return (
    <div style={{ textAlign: 'center' }}>
      <input type="color" value={color} onChange={e => setColor(e.target.value)} />
      <div style={{ width: '100px', height: '100px', background: color, margin: '10px auto', borderRadius: '50%' }}></div>
      <code>{color}</code>
    </div>
  );
}