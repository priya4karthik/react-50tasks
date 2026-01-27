import { useState } from 'react';

export default function Task29() {
  const questions = [
    { q: "What is 2 + 2?", a: "4" },
    { q: "React is a library?", a: "Yes" }
  ];
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);

  const handleAnswer = (choice) => {
    if (choice === questions[index].a) setScore(score + 1);
    setIndex(index + 1);
  };

  if (index >= questions.length) return <h3>Final Score: {score} / {questions.length}</h3>;

  return (
    <div>
      <h3>{questions[index].q}</h3>
      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        {["4", "Yes", "No"].map(btn => (
          <button key={btn} className="btn btn-primary" onClick={() => handleAnswer(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
}