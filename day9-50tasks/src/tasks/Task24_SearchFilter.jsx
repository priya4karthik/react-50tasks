import { useState } from 'react';

export default function Task24() {
  const items = ["Apple", "Samsung", "Google", "Microsoft", "Amazon", "Sony"];
  const [query, setQuery] = useState("");

  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search products..." value={query} 
        onChange={(e) => setQuery(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '15px' }} />
      <ul style={{ padding: 0 }}>
        {filteredItems.map(item => <li key={item} style={{ listStyle: 'none', padding: '5px 0' }}>📦 {item}</li>)}
      </ul>
    </div>
  );
}