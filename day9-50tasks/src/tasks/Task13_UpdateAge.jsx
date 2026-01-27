import { useState } from 'react';

export default function Task13() {
  const [age, setAge] = useState(25);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>User Age: {age}</h2>
      <button onClick={() => setAge(age + 1)} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Increase Age
      </button>
      <button onClick={() => setAge(age - 1)} style={{ padding: '10px 20px', marginLeft: '10px', cursor: 'pointer' }}>
        Decrease Age
      </button>
    </div>
  );
}