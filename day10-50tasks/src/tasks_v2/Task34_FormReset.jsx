import { useState } from 'react';

export default function Task34() {
  const initialState = { name: '', email: '', message: '' };
  const [form, setForm] = useState(initialState);

  return (
    <div>
      <input value={form.name} placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input value={form.email} placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} style={{ marginTop: '10px' }} />
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button className="btn btn-primary">Submit</button>
        <button className="btn btn-danger" onClick={() => setForm(initialState)}>Clear All</button>
      </div>
    </div>
  );
}