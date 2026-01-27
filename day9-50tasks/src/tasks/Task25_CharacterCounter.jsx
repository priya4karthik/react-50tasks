import { useState } from 'react';

export default function Task25() {
  const [text, setText] = useState("");
  const limit = 100;

  return (
    <div>
      <textarea 
        style={{ width: '100%', height: '100px', padding: '10px' }}
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p style={{ color: text.length > limit ? 'red' : 'black', textAlign: 'right' }}>
        {text.length} / {limit} characters
      </p>
    </div>
  );
}