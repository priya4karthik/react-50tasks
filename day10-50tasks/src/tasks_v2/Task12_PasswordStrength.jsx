import { useState } from 'react';

export default function Task12() {
  const [password, setPassword] = useState('');
  
  const getStrength = (pw) => {
    if (pw.length === 0) return { label: 'Empty', color: '#e2e8f0', width: '0%' };
    if (pw.length < 6) return { label: 'Weak', color: '#ef4444', width: '33%' };
    if (pw.match(/[A-Z]/) && pw.match(/[0-9]/)) return { label: 'Strong', color: '#22c55e', width: '100%' };
    return { label: 'Medium', color: '#f59e0b', width: '66%' };
  };

  const strength = getStrength(password);

  return (
    <div className="form-group">
      <label style={{ fontSize: '12px', fontWeight: 'bold' }}>SECURE PASSWORD</label>
      <input 
        type="password" 
        className="input" 
        placeholder="Enter password..." 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '3px', marginTop: '10px', overflow: 'hidden' }}>
        <div style={{ width: strength.width, height: '100%', background: strength.color, transition: '0.3s' }}></div>
      </div>
      <small style={{ color: strength.color, fontWeight: 'bold', marginTop: '5px' }}>{strength.label}</small>
    </div>
  );
}