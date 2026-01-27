import { useState } from 'react';

export default function Task18() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', role: 'Developer' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-group">
      <input name="firstName" placeholder="First Name" onChange={handleChange} style={{ marginBottom: '10px' }} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} style={{ marginBottom: '10px' }} />
      <select name="role" onChange={handleChange}>
        <option>Developer</option>
        <option>Designer</option>
        <option>Manager</option>
      </select>
      <pre style={{ background: '#f1f5f9', padding: '10px', marginTop: '10px', borderRadius: '5px' }}>
        {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  );
}