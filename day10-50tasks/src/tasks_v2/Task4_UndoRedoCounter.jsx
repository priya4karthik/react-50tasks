import { useState } from 'react';

export default function Task4() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([0]);
  const [pointer, setPointer] = useState(0);

  const updateCount = (val) => {
    const newCount = count + val;
    const newHistory = history.slice(0, pointer + 1);
    setHistory([...newHistory, newCount]);
    setPointer(newHistory.length);
    setCount(newCount);
  };

  const undo = () => {
    if (pointer > 0) {
      setPointer(pointer - 1);
      setCount(history[pointer - 1]);
    }
  };

  const redo = () => {
    if (pointer < history.length - 1) {
      setPointer(pointer + 1);
      setCount(history[pointer + 1]);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{count}</h1>
      <button onClick={() => updateCount(1)}>+1</button>
      <button onClick={() => updateCount(-1)}>-1</button>
      <hr />
      <button onClick={undo} disabled={pointer === 0}>Undo</button>
      <button onClick={redo} disabled={pointer === history.length - 1}>Redo</button>
    </div>
  );
}