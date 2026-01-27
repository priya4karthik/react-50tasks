import { useState } from 'react';

export default function Task43() {
  const [show, setShow] = useState(false);
  return (
    <div className="form-group">
      <div style={{ display: 'flex', gap: '5px' }}>
        <input type={show ? "text" : "password"} placeholder="Password" />
        <button className="btn btn-secondary" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      </div>
    </div>
  );
}