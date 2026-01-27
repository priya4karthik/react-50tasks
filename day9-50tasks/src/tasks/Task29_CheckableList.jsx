import { useState } from 'react';

export default function Task29() {
  const [items, setItems] = useState([
    { id: 1, text: "Buy Milk", done: false },
    { id: 2, text: "Clean Room", done: false },
    { id: 3, text: "Finish React Tasks", done: true },
  ]);

  const toggleDone = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, done: !item.done } : item
    ));
  };

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {items.map(item => (
        <li key={item.id} 
            onClick={() => toggleDone(item.id)}
            style={{ 
              padding: '10px', cursor: 'pointer',
              textDecoration: item.done ? 'line-through' : 'none',
              color: item.done ? '#94a3b8' : '#1e293b'
            }}>
          {item.done ? "✅" : "⬜"} {item.text}
        </li>
      ))}
    </ul>
  );
}