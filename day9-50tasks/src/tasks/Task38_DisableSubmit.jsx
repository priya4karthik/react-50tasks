import { useState } from 'react';

export default function Task38() {
  const [form, setForm] = useState({ name: "", email: "", bio: "" });

  const isInvalid = !form.name || !form.email || !form.bio;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <textarea placeholder="Bio" onChange={e => setForm({...form, bio: e.target.value})} />
      
      <button 
        disabled={isInvalid}
        style={{ backgroundColor: isInvalid ? '#ccc' : '#22c55e', cursor: isInvalid ? 'not-allowed' : 'pointer' }}
      >
        Submit Form
      </button>
      {isInvalid && <small style={{ color: 'red' }}>* Please fill all fields</small>}
    </div>
  );
}