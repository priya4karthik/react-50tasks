import { useState } from 'react';

export default function Task9() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{isLoggedIn ? "Welcome back, User! 👋" : "Please Log In 🔒"}</h2>
      <button 
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{ padding: '8px 16px', cursor: 'pointer' }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}