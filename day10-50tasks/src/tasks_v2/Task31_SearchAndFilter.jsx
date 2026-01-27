import { useState } from 'react';

export default function Task31() {
  const items = [
    { name: 'iPhone', cat: 'Tech' }, { name: 'Bread', cat: 'Food' },
    { name: 'MacBook', cat: 'Tech' }, { name: 'Apple', cat: 'Food' }
  ];
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = items.filter(i => 
    (cat === "All" || i.cat === cat) && i.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input placeholder="Search..." onChange={e => setQuery(e.target.value)} />
      <div style={{ margin: '10px 0' }}>
        {["All", "Tech", "Food"].map(c => (
          <button key={c} className="btn btn-secondary" onClick={() => setCat(c)} style={{ marginRight: '5px' }}>{c}</button>
        ))}
      </div>
      {filtered.map(i => <div key={i.name}>{i.name} ({i.cat})</div>)}
    </div>
  );
}