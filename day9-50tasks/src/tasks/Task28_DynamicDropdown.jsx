import { useState } from 'react';

export default function Task28() {
  const [selected, setSelected] = useState("");
  const options = ["React", "Vue", "Angular", "Svelte"];

  return (
    <div>
      <select 
        value={selected} 
        onChange={(e) => setSelected(e.target.value)}
        style={{ padding: '10px', width: '100%', borderRadius: '5px' }}
      >
        <option value="">-- Choose a Framework --</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      {selected && <p style={{ marginTop: '15px' }}>You selected: <strong>{selected}</strong></p>}
    </div>
  );
}