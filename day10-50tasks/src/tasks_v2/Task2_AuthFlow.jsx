import { useState } from 'react';

export default function Task2() {
  const [user, setUser] = useState(null);

  return (
    <div style={{ textAlign: 'center' }}>
      {user ? (
        <div>
          <h2>Welcome, {user}! 👋</h2>
          <button onClick={() => setUser(null)}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please Sign In</h2>
          <button onClick={() => setUser("AdminUser")}>Login as Admin</button>
        </div>
      )}
    </div>
  );
}