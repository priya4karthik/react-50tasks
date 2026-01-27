import { useState } from 'react';

export default function Task40() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <button className="btn btn-secondary" onClick={() => setOpen(!open)}>Menu ☰</button>
      {open && <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
        <span>Home</span><span>About</span>
      </div>}
    </nav>
  );
}