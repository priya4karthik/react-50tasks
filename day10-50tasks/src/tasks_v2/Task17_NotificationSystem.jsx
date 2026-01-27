import { useState } from 'react';

export default function Task17() {
  const [show, setShow] = useState(false);

  const triggerNotify = () => {
    setShow(true);
    setTimeout(() => setShow(false), 3000);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button className="btn btn-primary" onClick={triggerNotify}>Save Changes</button>
      {show && (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', background: '#0f172a', color: 'white', padding: '12px 24px', borderRadius: '8px', boxShadow: '0 10px 15px rgba(0,0,0,0.2)', animation: 'slideIn 0.3s ease' }}>
          ✅ Settings saved successfully!
        </div>
      )}
    </div>
  );
}