import { useState } from 'react';
export default function Task3() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+ Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>- Decrement</button>
    </div>
  );
}