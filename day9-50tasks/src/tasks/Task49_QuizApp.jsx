import { useState } from 'react';

export default function Task49() {
  const [msg, setMsg] = useState("Choose the correct answer!");
  const handleChoice = (isCorrect) => setMsg(isCorrect ? "Correct! ✅" : "Incorrect! ❌");

  return (
    <div>
      <p><strong>Question:</strong> Is React a Framework or a Library?</p>
      <button onClick={() => handleChoice(false)}>Framework</button>
      <button onClick={() => handleChoice(true)} style={{ marginLeft: '10px' }}>Library</button>
      <div style={{ marginTop: '20px', padding: '10px', border: '1px dashed #ccc' }}>{msg}</div>
    </div>
  );
}