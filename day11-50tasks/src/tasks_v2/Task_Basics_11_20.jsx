import React, { useState } from 'react';

const TaskBasics11to20 = () => {
  // Task 11: Reset logic
  const [resetCount, setResetCount] = useState(10);
  
  // Tasks 12-16: Input Handling & String methods
  const [userInput, setUserInput] = useState("");

  // Tasks 17-19: Mapping through Arrays
  const fruits = ["Apple", "Mango", "Banana", "Orange"];

  // Task 20: Conditional State
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="basics-grid">
      
      {/* SECTION 1: RESET LOGIC (Task 11) */}
      <div className="task-card">
        <h3 className="cat-title">State Reset (11)</h3>
        <div className="counter-ui">
          <h1>{resetCount}</h1>
          <div className="counter-controls">
            <button className="btn btn-secondary" onClick={() => setResetCount(resetCount + 1)}>+</button>
            <button className="btn btn-danger" onClick={() => setResetCount(0)}>Reset to 0</button>
          </div>
        </div>
      </div>

      {/* SECTION 2: INPUTS & STRINGS (12-16) */}
      <div className="task-card">
        <h3 className="cat-title">Input Binding (12-16)</h3>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Type to see magic..." 
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <div className="display-box" style={{ marginTop: '15px', fontSize: '13px' }}>
            <p><strong>Live:</strong> {userInput || "..."}</p>
            <p><strong>UPPER:</strong> {userInput.toUpperCase()}</p>
            <p><strong>lower:</strong> {userInput.toLowerCase()}</p>
          </div>
          <button className="btn btn-secondary" onClick={() => setUserInput("")}>Clear Input</button>
        </div>
      </div>

      {/* SECTION 3: LISTS & CONDITIONALS (17-20) */}
      <div className = "task-card">
        <h3 className="cat-title">Lists & Logic (17-20)</h3>
        <ul style={{ paddingLeft: '15px', marginBottom: '15px' }}>
          {fruits.map((item, index) => (
            <li key={index} style={{ fontSize: '14px', color: '#475569' }}>
              Item {index}: {item}
            </li>
          ))}
        </ul>
        <button 
          className={isLogged ? "btn btn-danger" : "btn btn-primary"} 
          onClick={() => setIsLogged(!isLogged)}
          style={{ width: '100%' }}
        >
          {isLogged ? "Logout" : "Login"}
        </button>
        {isLogged && <p style={{ textAlign: 'center', fontSize: '12px', color: '#16a34a', marginTop: '10px' }}>User is Online</p>}
      </div>

    </div>
  );
};

export default TaskBasics11to20;