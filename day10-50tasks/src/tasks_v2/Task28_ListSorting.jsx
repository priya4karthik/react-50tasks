import { useState } from 'react';

export default function Task28() {
  const [items, setItems] = useState(['Orange', 'Apple', 'Banana', 'Mango']);

  const sortAZ = () => setItems([...items].sort());
  const sortZA = () => setItems([...items].sort().reverse());

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button className="btn btn-secondary" onClick={sortAZ}>A-Z</button>
        <button className="btn btn-secondary" onClick={sortZA}>Z-A</button>
      </div>
      {items.map(item => <div key={item} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{item}</div>)}
    </div>
  );
}