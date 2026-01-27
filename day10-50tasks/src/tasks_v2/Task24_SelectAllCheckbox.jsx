import { useState } from 'react';

export default function Task24() {
  const items = ["Item 1", "Item 2", "Item 3"];
  const [selected, setSelected] = useState([]);

  const toggleAll = () => {
    setSelected(selected.length === items.length ? [] : items);
  };

  const toggleOne = (item) => {
    setSelected(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  return (
    <div>
      <label style={{ fontWeight: 'bold' }}>
        <input type="checkbox" checked={selected.length === items.length} onChange={toggleAll} /> Select All
      </label>
      <hr />
      {items.map(item => (
        <div key={item}>
          <input type="checkbox" checked={selected.includes(item)} onChange={() => toggleOne(item)} /> {item}
        </div>
      ))}
    </div>
  );
}