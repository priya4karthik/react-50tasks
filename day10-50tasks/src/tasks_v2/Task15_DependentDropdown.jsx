import { useState } from 'react';

export default function Task15() {
  const data = {
    Electronics: ['Laptop', 'Phone', 'Camera'],
    Clothing: ['Shirts', 'Pants', 'Shoes'],
  };

  const [category, setCategory] = useState('');
  const [product, setProduct] = useState('');

  return (
    <div className="form-group">
      <label>Category</label>
      <select value={category} onChange={(e) => { setCategory(e.target.value); setProduct(''); }}>
        <option value="">-- Select Category --</option>
        {Object.keys(data).map(cat => <option key={cat} value={cat}>{cat}</option>)}
      </select>

      <label style={{ marginTop: '15px' }}>Product</label>
      <select disabled={!category} value={product} onChange={(e) => setProduct(e.target.value)}>
        <option value="">-- Select Product --</option>
        {category && data[category].map(prod => <option key={prod} value={prod}>{prod}</option>)}
      </select>
      
      {product && <p style={{ marginTop: '15px', color: '#2563eb' }}>You are viewing: <strong>{product}</strong></p>}
    </div>
  );
}