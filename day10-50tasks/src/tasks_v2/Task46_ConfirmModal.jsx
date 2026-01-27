import { useState } from 'react';

export default function Task46() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button className="btn btn-danger" onClick={() => setShow(true)}>Delete Account</button>
      {show && (
        <div style={{ border: '1px solid red', padding: '20px', marginTop: '10px', borderRadius: '8px' }}>
          <p>Are you sure?</p>
          <button className="btn btn-danger" onClick={() => { alert('Deleted'); setShow(false); }}>Yes</button>
          <button className="btn btn-secondary" onClick={() => setShow(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}