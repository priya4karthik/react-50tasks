import { useState } from 'react';

export default function Task50() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const filtered = items.filter(i => i.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <input placeholder="Add Item" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => { setItems([...items, text]); setText(""); }}>Add</button>
      <hr />
      <input placeholder="Search list..." onChange={e => setSearch(e.target.value)} />
      <ul>{filtered.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>
  );
}