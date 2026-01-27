import { useState } from 'react';

export default function Task40() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select an option");

  const handleSelect = (val) => {
    setSelected(val);
    setIsOpen(false); // The "Auto-close" logic
  };

  return (
    <div style={{ position: 'relative', width: '200px' }}>
      <button onClick={() => setIsOpen(!isOpen)} style={{ width: '100%' }}>
        {selected} ▼
      </button>
      
      {isOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#fff', border: '1px solid #ddd', zIndex: 10 }}>
          {["Profile", "Settings", "Logout"].map(item => (
            <div 
              key={item} 
              onClick={() => handleSelect(item)}
              style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #eee' }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}