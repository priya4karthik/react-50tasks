import { useState } from 'react';

export default function Task41() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (input.trim()) {
      setNotes([...notes, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '5px' }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Write a note..." style={{ flex: 1, padding: '8px' }} />
        <button onClick={addNote}>Add</button>
      </div>
      <div style={{ marginTop: '15px' }}>
        {notes.map(n => (
          <div key={n.id} style={{ background: '#fff9c4', padding: '10px', marginBottom: '5px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
            {n.text}
            <button onClick={() => setNotes(notes.filter(note => note.id !== n.id))} style={{ color: 'red', border: 'none', background: 'none' }}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}