import { useState } from 'react';

export default function Task7() {
  const [color, setColor] = useState('#ffffff');

  const btnStyle = (bg) => ({
    padding: '10px 20px', 
    marginRight: '10px', 
    cursor: 'pointer',
    backgroundColor: bg,
    color: '#fff',
    border: 'none',
    borderRadius: '5px'
  });

  return (
    <div style={{ padding: '20px', backgroundColor: color, borderRadius: '8px', transition: '0.3s' }}>
      <h3 style={{ color: color === 'Blue' || color === 'Red' ? '#fff' : '#000' }}>
        Background: {color}
      </h3>
      <button onClick={() => setColor('Red')} style={btnStyle('Red')}>Red</button>
      <button onClick={() => setColor('Green')} style={btnStyle('Green')}>Green</button>
      <button onClick={() => setColor('Blue')} style={btnStyle('Blue')}>Blue</button>
      <button onClick={() => setColor('#ffffff')} style={{...btnStyle('#333'), color: '#fff'}}>Reset</button>
    </div>
  );
}