import React, { useState } from 'react';

export default function Chapter1() {
  // --- STATE ---
  const [count, setCount] = useState(0); // Req 1
  const [text, setText] = useState(""); // Req 6 & 7
  const [isDarkText, setIsDarkText] = useState(true); // Req 4
  const [items] = useState([ // Req 9
    { id: 1, name: "React Basics" },
    { id: 2, name: "State Management" },
    { id: 3, name: "Props & Hooks" }
  ]);

  // --- LOGIC ---
  // Req 5: Greeting based on time
  const getGreeting = () => {
    const hours = new Date().getHours();
    return hours < 12 ? "Good Morning" : "Good Evening";
  };

  return (
    <div className="chapter-box">
      {/* Req 5: Greeting Message */}
      <h3 style={{ borderBottom: '1px solid #ddd' }}>{getGreeting()}!</h3>

      {/* Req 4: Toggle Text Color */}
      <div className="section" style={{ color: isDarkText ? "#000" : "#999" }}>
        <p>This text color is currently: <strong>{isDarkText ? "Dark" : "Light"}</strong></p>
        <button onClick={() => setIsDarkText(!isDarkText)}>4. Toggle Text Color</button>
      </div>

      <hr />

      {/* Req 1, 2, 3: Counter Logic */}
      <div className="section">
        <p>Current Count: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>1. + (Increment)</button>
        {/* Req 2: Disable decrement button when count is zero */}
        <button 
          onClick={() => setCount(count - 1)} 
          disabled={count === 0}
        >
          2. - (Decrement)
        </button>
        {/* Req 3: Show reached limit message */}
        {count > 10 && <p className="warning">3. Count reached limit</p>}
      </div>

      <hr />

      {/* Req 6, 7, 8: Input Character Logic */}
      <div className="section">
        <label>Input (Max 20 chars): </label>
        <input 
          type="text"
          value={text}
          maxLength={20} // Req 7: Limit to 20
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here..."
        />
        {/* Req 6: Show input length */}
        <p>6. Input Length: {text.length}</p>
        {/* Req 8: Show remaining characters */}
        <p>8. Remaining Characters: {20 - text.length}</p>
      </div>

      <hr />

      {/* Req 9, 10: List Logic */}
      <div className="section">
        <p><strong>9. List Items:</strong></p>
        {/* Req 10: Show "No items available" if empty */}
        {items.length === 0 ? (
          <p>10. No items available</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}