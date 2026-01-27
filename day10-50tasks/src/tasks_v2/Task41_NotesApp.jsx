import { useState, useEffect } from 'react';

export default function Task41() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem('notes')) || []);
  const [text, setText] = useState("");

  useEffect(() => localStorage.setItem('notes', JSON.stringify(notes)), [notes]);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a note..." />
      <button className="btn btn-primary" onClick={() => { setNotes([...notes, text]); setText(""); }}>Add</button>
      <ul>{notes.map((n, i) => <li key={i}>{n}</li>)}</ul>
    </div>
  );
}