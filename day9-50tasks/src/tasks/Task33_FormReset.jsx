import { useState } from 'react';

export default function Task33() {
  const initialForm = { user: "", feedback: "" };
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.user}!`);
    setForm(initialForm); // Resets the inputs
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Username" 
        value={form.user} 
        onChange={e => setForm({...form, user: e.target.value})}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <textarea 
        placeholder="Feedback" 
        value={form.feedback} 
        onChange={e => setForm({...form, feedback: e.target.value})}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <button type="submit">Submit & Reset</button>
    </form>
  );
}