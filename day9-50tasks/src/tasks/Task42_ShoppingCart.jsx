import { useState } from 'react';

export default function Task42() {
  const [items, setItems] = useState([
    { id: 1, name: 'Laptop', price: 999, qty: 1 },
    { id: 2, name: 'Mouse', price: 25, qty: 1 }
  ]);

  const updateQty = (id, change) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, qty: Math.max(0, item.qty + change) } : item
    ));
  };

  const total = items.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div>
      {items.map(item => (
        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', borderBottom: '1px solid #eee' }}>
          <span>{item.name} (${item.price})</span>
          <div>
            <button onClick={() => updateQty(item.id, -1)}>-</button>
            <span style={{ margin: '0 10px' }}>{item.qty}</span>
            <button onClick={() => updateQty(item.id, 1)}>+</button>
          </div>
        </div>
      ))}
      <h3 style={{ textAlign: 'right', marginTop: '10px' }}>Total: ${total}</h3>
    </div>
  );
}