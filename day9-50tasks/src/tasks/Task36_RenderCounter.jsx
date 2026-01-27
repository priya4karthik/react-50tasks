import { useState, useRef, useEffect } from 'react';

export default function Task36() {
  const [text, setText] = useState("");
  const [displayCount, setDisplayCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    // Increment the ref after every render
    renderCount.current = renderCount.current + 1;
    
    // Update a local state only to 'sync' the UI with the Ref
    // This avoids the "access during render" conflict
    setDisplayCount(renderCount.current);
  });

  return (
    <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
      <p style={{ color: '#666' }}>Type below to force the component to re-render.</p>
      
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type here..."
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />

      <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '5px' }}>
        <strong>Render Count:</strong> 
        <span style={{ fontSize: '1.5rem', marginLeft: '10px', color: '#3b82f6' }}>
          {displayCount}
        </span>
      </div>
    </div>
  );
}