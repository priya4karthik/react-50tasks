import { useState } from 'react';

export default function Task27() {
  const [darkMode, setDarkMode] = useState(false);

  const themeStyle = {
    backgroundColor: darkMode ? '#1e293b' : '#f8fafc',
    color: darkMode ? '#f8fafc' : '#1e293b',
    padding: '40px',
    borderRadius: '8px',
    textAlign: 'center',
    transition: '0.3s'
  };

  return (
    <div style={themeStyle}>
      <h3>{darkMode ? "Dark Mode Active" : "Light Mode Active"}</h3>
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}