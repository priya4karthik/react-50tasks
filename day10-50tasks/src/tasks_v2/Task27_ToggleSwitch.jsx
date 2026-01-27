import { useState } from 'react';

export default function Task27() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <div 
        onClick={() => setEnabled(!enabled)}
        style={{ 
          width: '50px', height: '26px', background: enabled ? '#3b82f6' : '#cbd5e1', 
          borderRadius: '15px', position: 'relative', cursor: 'pointer', transition: '0.3s' 
        }}
      >
        <div style={{ 
          width: '20px', height: '20px', background: 'white', borderRadius: '50%',
          position: 'absolute', top: '3px', left: enabled ? '27px' : '3px', transition: '0.3s'
        }} />
      </div>
      <span>Notifications are <strong>{enabled ? 'ON' : 'OFF'}</strong></span>
    </div>
  );
}