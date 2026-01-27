import { useState } from 'react';

export default function Task42() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div style={{ textAlign: 'center' }}>
      {isLogged ? <h2>Welcome back, User!</h2> : <h2>Please log in.</h2>}
      <button className="btn btn-primary" onClick={() => setIsLogged(!isLogged)}>
        {isLogged ? "Logout" : "Login"}
      </button>
    </div>
  );
}