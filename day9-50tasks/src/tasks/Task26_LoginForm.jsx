import { useState } from 'react';

export default function Task26() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      alert("Login Successful!");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input 
        type="text" 
        placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '8px', width: '100%', marginBottom: '10px' }}
      />
      {error && <p style={{ color: 'red', fontSize: '0.8rem' }}>{error}</p>}
      <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#3b82f6', color: '#fff', border: 'none' }}>
        Login
      </button>
    </form>
  );
}