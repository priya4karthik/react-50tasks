import { useState } from 'react';

export default function Task11() {
  const [cart, setCart] = useState([
    { id: 1, name: 'Wireless Mouse', price: 25, qty: 1 },
    { id: 2, name: 'Mechanical Keyboard', price: 75, qty: 1 },
  ]);

  const updateQty = (id, delta) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
    ));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      {cart.map(item => (
        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
          <div>
            <div style={{ fontWeight: '600' }}>{item.name}</div>
            <div style={{ fontSize: '12px', color: '#64748b' }}>${item.price} each</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button className="btn btn-secondary" style={{ padding: '4px 10px' }} onClick={() => updateQty(item.id, -1)}>-</button>
            <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>{item.qty}</span>
            <button className="btn btn-secondary" style={{ padding: '4px 10px' }} onClick={() => updateQty(item.id, 1)}>+</button>
          </div>
        </div>
      ))}
      <div style={{ marginTop: '20px', textAlign: 'right', borderTop: '2px solid #f1f5f9', paddingTop: '15px' }}>
        <span style={{ color: '#64748b' }}>Total Amount:</span>
        <h2 style={{ color: '#2563eb' }}>${total.toFixed(2)}</h2>
      </div>
    </div>
  );
}