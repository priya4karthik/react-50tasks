import { useState } from 'react';

export default function Task31() {
  const [isOpen, setIsOpen] = useState(false);

  const overlayStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
    justifyContent: 'center', alignItems: 'center', zIndex: 1000
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <div style={overlayStyle}>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', textAlign: 'center' }}>
            <h2>Modal Title</h2>
            <p>This is a simple modal popup!</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}