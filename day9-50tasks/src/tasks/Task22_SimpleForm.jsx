import { useState } from 'react';

export default function Task22() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
          onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <input type="email" placeholder="Email" style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
          onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div style={{ marginTop: '15px', padding: '10px', background: '#f0fdf4', borderRadius: '4px' }}>
          <p><strong>Submitted Name:</strong> {submitted.name}</p>
          <p><strong>Submitted Email:</strong> {submitted.email}</p>
        </div>
      )}
    </div>
  );
}