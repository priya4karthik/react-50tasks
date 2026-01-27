import { useState } from 'react';

export default function Task37() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button className="btn btn-secondary" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
          Hover me
        </button>
        {show && (
          <div style={{ position: 'absolute', bottom: '110%', left: '50%', transform: 'translateX(-50%)', background: '#1e293b', color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '12px', whiteSpace: 'nowrap' }}>
            Useful Info!
          </div>
        )}
      </div>
    </div>
  );
}