import { useState } from 'react';

export default function Task32() {
  const [showEmail, setShowEmail] = useState(true);
  const data = [{ id: 1, name: "John", email: "john@example.com" }];

  return (
    <div>
      <button onClick={() => setShowEmail(!showEmail)} className="btn btn-secondary">
        {showEmail ? "Hide Email" : "Show Email"}
      </button>
      <table style={{ width: '100%', marginTop: '20px', textAlign: 'left' }}>
        <thead>
          <tr><th>ID</th><th>Name</th>{showEmail && <th>Email</th>}</tr>
        </thead>
        <tbody>
          {data.map(u => (
            <tr key={u.id}><td>{u.id}</td><td>{u.name}</td>{showEmail && <td>{u.email}</td>}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}