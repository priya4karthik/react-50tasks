import { useState } from 'react';

export default function Task23() {
  const [show, setShow] = useState(false);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <input type={show ? "text" : "password"} placeholder="Enter password" style={{ padding: '8px' }} />
      <button onClick={() => setShow(!show)} style={{ cursor: 'pointer' }}>
        {show ? "🙈 Hide" : "👁️ Show"}
      </button>
    </div>
  );
}