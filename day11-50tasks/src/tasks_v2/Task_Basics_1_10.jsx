import React, { useState } from 'react';

const TaskBasics1to10 = () => {
  // Tasks 6 & 7: Message States
  const [message, setMessage] = useState("Hello React (Task 1)");
  const [isVisible, setIsVisible] = useState(true);

  // Tasks 8, 9, 10: Counter Logic
  const [count, setCount] = useState(0);

  return (
    <div className="basics-grid">
      {/* SECTION 1: STATIC & COMPONENT DISPLAY (Tasks 1-4) */}
      <div className="task-card">
        <h3 className="cat-title">Static Display (1-4)</h3>
        <div className="display-box">
          <p><strong>Message:</strong> {message}</p>
          <p><strong>Name:</strong> Gemini Developer</p>
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
          <hr style={{ margin: '10px 0', opacity: 0.2 }} />
          <p style={{ fontSize: '12px', color: '#64748b' }}>
            Task 2: Functional component rendered within the grid.
          </p>
        </div>
      </div>

      {/* SECTION 2: INTERACTION & TOGGLES (Tasks 5-7) */}
      <div className="task-card">
        <h3 className="cat-title">Interaction (5-7)</h3>
        <div className="button-stack">
          {/* Task 6: Change text */}
          <button className="btn btn-secondary" onClick={() => setMessage("Text Updated! ✅")}>
            Task 6: Change Heading
          </button>

          {/* Task 5 & 7: Show/Hide */}
          <button className="btn btn-primary" onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "Task 7: Hide Text" : "Task 7: Show Text"}
          </button>

          {isVisible && (
            <div className="status-toast animate-fade">
              Visible Text Below Button (Task 5)
            </div>
          )}
        </div>
      </div>

      {/* SECTION 3: THE COUNTER (Tasks 8-10) */}
      <div className="task-card counter-card">
        <h3 className="cat-title">State Management (8-10)</h3>
        <div className="counter-ui">
          <div className="count-display">
            <span>Current Value</span>
            <h1>{count}</h1>
          </div>
          <div className="counter-controls">
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
              Increase (Task 9)
            </button>
            <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
              Decrease (Task 10)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBasics1to10;