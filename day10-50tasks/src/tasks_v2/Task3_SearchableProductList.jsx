import { useState } from 'react';

export default function Task3() {
  const products = ["iPhone 15", "MacBook Pro", "AirPods", "iPad Air", "Apple Watch"];
  const [query, setQuery] = useState("");

  const filtered = products.filter(p => p.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input 
        placeholder="Search products..." 
        onChange={(e) => setQuery(e.target.value)} 
        style={{ width: '100%', marginBottom: '15px', padding: '10px' }}
      />
      {filtered.length > 0 ? (
        filtered.map(p => <div key={p} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>📦 {p}</div>)
      ) : <p>No products found.</p>}
    </div>
  );
}