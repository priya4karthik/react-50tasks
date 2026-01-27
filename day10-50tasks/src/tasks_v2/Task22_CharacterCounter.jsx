import { useState } from 'react';

export default function Task22() {
  const [text, setText] = useState("");
  const limit = 50;

  return (
    <div>
      <textarea 
        rows="4" 
        onChange={(e) => setText(e.target.value)} 
        style={{ borderColor: text.length > limit ? '#ef4444' : '#e2e8f0' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
        <small style={{ color: text.length > limit ? '#ef4444' : '#64748b' }}>
          {text.length} / {limit} characters
        </small>
        {text.length > limit && <small style={{ color: '#ef4444' }}>Limit exceeded!</small>}
      </div>
    </div>
  );
}