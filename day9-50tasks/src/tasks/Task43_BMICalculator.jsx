import { useState } from 'react';

export default function Task43() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

  return (
    <div style={{ textAlign: 'center' }}>
      <div>Height: {height} cm <input type="range" min="100" max="250" value={height} onChange={e => setHeight(e.target.value)} /></div>
      <div style={{ margin: '15px 0' }}>Weight: {weight} kg <input type="range" min="30" max="200" value={weight} onChange={e => setWeight(e.target.value)} /></div>
      <div style={{ padding: '20px', background: '#3b82f6', color: '#fff', borderRadius: '10px' }}>
        <h2>BMI: {bmi}</h2>
      </div>
    </div>
  );
}