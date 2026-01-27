import { useState } from 'react';

export default function Task19() {
  const text = "React makes it painless to create interactive UIs. Design simple views for each state.";
  const [query, setQuery] = useState("");

  const getHighlightedText = (content, highlight) => {
    if (!highlight) return content;
    const parts = content.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === highlight.toLowerCase() 
        ? <mark key={i} style={{ background: '#fde047', padding: '0 2px' }}>{part}</mark> 
        : part
    );
  };

  return (
    <div>
      <input placeholder="Type to highlight..." onChange={(e) => setQuery(e.target.value)} style={{ marginBottom: '15px' }} />
      <p style={{ lineHeight: '1.6' }}>{getHighlightedText(text, query)}</p>
    </div>
  );
}