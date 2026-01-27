import { useState } from 'react';
export default function Task5() {
  const [isOn, setIsOn] = useState(false);
  return (
    <button 
      onClick={() => setIsOn(!isOn)}
      style={{ padding: '10px 20px', backgroundColor: isOn ? '#22c55e' : '#ef4444', color: '#fff', border: 'none', borderRadius: '5px' }}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}