import { useState } from 'react';

export default function Task6() {
  const [text, setText] = useState("");

  return (
    <div>
      <input 
        type="text" 
        placeholder="Type something..." 
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }}
      />
      <p style={{ marginTop: '15px', fontSize: '1.2rem', color: '#3b82f6' }}>
        <strong>Live Preview:</strong> {text || "Start typing..."}
      </p>
    </div>
  );
}