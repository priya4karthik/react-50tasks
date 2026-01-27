import { useState } from 'react';

export default function Task47() {
  const [text, setText] = useState("");
  return (
    <div>
      <textarea value={text} onChange={e => setText(e.target.value)} />
      <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
        <button onClick={() => setText(text.toUpperCase())}>UPPER</button>
        <button onClick={() => setText(text.toLowerCase())}>lower</button>
        <button onClick={() => setText("")}>Clear</button>
      </div>
    </div>
  );
}