import { useState } from 'react';

export default function Task45() {
  const [history, setHistory] = useState([]);
  const [query, setQuery] = useState("");

  const addSearch = () => {
    if (query) setHistory([query, ...history.slice(0, 4)]);
    setQuery("");
  };

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === 'Enter' && addSearch()} />
      <div style={{ marginTop: '10px' }}>
        {history.map((h, i) => <span key={i} style={{ marginRight: '10px', fontSize: '12px', background: '#f1f5f9', padding: '4px' }}>{h}</span>)}
      </div>
    </div>
  );
}