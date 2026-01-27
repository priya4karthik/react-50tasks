import { useState } from 'react';

export default function Task8() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};
    if (!form.email.includes('@')) errs.email = "Invalid email address";
    if (form.password.length < 6) errs.password = "Password too short (min 6)";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert("Form Submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <p style={{ color: 'red', fontSize: '12px' }}>{errors.email}</p>
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} style={{ marginTop: '10px' }} />
      <p style={{ color: 'red', fontSize: '12px' }}>{errors.password}</p>
      <button type="submit" className="btn-primary" style={{ marginTop: '15px', width: '100%' }}>Submit</button>
    </form>
  );
}