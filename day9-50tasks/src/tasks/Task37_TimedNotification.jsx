import { useState } from 'react';

export default function Task37() {
  const [show, setShow] = useState(false);

  const triggerAlert = () => {
    setShow(true);
    setTimeout(() => setShow(false), 3000);
  };

  return (
    <div>
      <button onClick={triggerAlert} disabled={show}>
        {show ? "Sending..." : "Click for Alert"}
      </button>

      {show && (
        <div style={{
          marginTop: '15px', padding: '10px', backgroundColor: '#3b82f6',
          color: 'white', borderRadius: '5px', animation: 'fade 0.5s'
        }}>
          Success! This will disappear in 3 seconds.
        </div>
      )}
    </div>
  );
}