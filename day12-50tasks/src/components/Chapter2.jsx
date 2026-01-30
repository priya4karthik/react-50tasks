import React, { useState } from 'react';

export default function Chapter2() {
  const [list, setList] = useState([]); // Req 11
  const [input, setInput] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(null); // Req 15
  const [num, setNum] = useState(0); // Req 20

  const handleAdd = () => {
    if (!input) return;
    setList([...list, input]);
    setInput(""); // Req 12
  };

  return (
    <div className="chapter-box">
      <h4>Dynamic List & Math</h4>
      {/* Req 11, 13, 14, 19 */}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd} disabled={!input}>Add</button>
      <button onClick={() => setList(list.slice(0, -1))}>Remove Last</button>

      {/* Req 17, 18 */}
      <p>Total Items: {list.length}</p>
      {list.length > 5 && <p className="warning">List count exceeds 5!</p>}

      <ul>
        {list.map((item, i) => (
          <li 
            key={i} 
            className={selectedIdx === i ? "selected" : ""} 
            onClick={() => setSelectedIdx(selectedIdx === i ? null : i)} // Req 16
          >
            {item} <button onClick={() => setList(list.filter((_, idx) => idx !== i))}>x</button>
          </li>
        ))}
      </ul>

      {/* Req 20 */}
      <div className="section">
        <input type="number" placeholder="Number to square" onChange={(e) => setNum(e.target.value)} />
        <p>Square: {num * num}</p>
      </div>
    </div>
  );
}