import React, { useState } from 'react';

const TaskBasics31to40 = () => {
  // Task 31: Text Color State
  const [textColor, setTextColor] = useState("#0f172a");

  // Task 33-34: Single Button Counter + Even/Odd
  const [count, setCount] = useState(0);

  // Task 35: Toggle Text
  const [toggle, setToggle] = useState(true);

  // Task 36-37: Checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Task 38: Dropdown
  const [selected, setSelected] = useState("React");

  // Task 39: Heading Change
  const [heading, setHeading] = useState("Original Heading");

  return (
    <div className="basics-grid">
      
      {/* SECTION 1: STYLING & TOGGLES (31-35) */}
      <div className="task-card">
        <h3 className="cat-title">Style & Toggles (31-35)</h3>
        
        {/* Task 31: Inline Style */}
        <p style={{ color: textColor, fontWeight: 'bold' }}>
          Task 31: Dynamic Color Text
        </p>
        <button className="btn btn-secondary" onClick={() => setTextColor(textColor === "#3b82f6" ? "#0f172a" : "#3b82f6")}>
          Change Color
        </button>

        <hr style={{ margin: '15px 0', opacity: 0.1 }} />

        {/* Task 33-34: Counter Logic */}
        <div style={{ textAlign: 'center' }}>
          <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
            Count is: {count}
          </button>
          <p style={{ fontSize: '12px', marginTop: '5px' }}>
            Number is: <strong>{count % 2 === 0 ? "Even" : "Odd"}</strong>
          </p>
        </div>

        <hr style={{ margin: '15px 0', opacity: 0.1 }} />

        {/* Task 35: Toggle Text */}
        <button className="btn btn-outline" onClick={() => setToggle(!toggle)}>
          {toggle ? "ON" : "OFF"}
        </button>
      </div>

      {/* SECTION 2: FORM ELEMENTS (36-38) */}
      <div className="task-card">
        <h3 className="cat-title">Form Elements (36-38)</h3>
        
        {/* Task 36-37: Checkbox */}
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
          <span>Show Secret Message</span>
        </label>
        {isChecked && <div className="status-toast" style={{ marginTop: '10px' }}>Task 37: Message Unlocked! 🔓</div>}

        <hr style={{ margin: '15px 0', opacity: 0.1 }} />

        {/* Task 38: Dropdown */}
        <label className="task-label">Select Framework:</label>
        <select 
          className="search-input" 
          style={{ marginTop: '5px' }}
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="React">React</option>
          <option value="Vue">Vue</option>
          <option value="Angular">Angular</option>
        </select>
        <p style={{ fontSize: '13px', marginTop: '8px' }}>Selected: <strong>{selected}</strong></p>
      </div>

      {/* SECTION 3: CONDITIONAL LOGIC (39-40) */}
      <div className="task-card">
        <h3 className="cat-title">Logic (39-40)</h3>
        
        {/* Task 39: Heading State */}
        <h4>{heading}</h4>
        <button className="btn btn-secondary" style={{ width: '100%', marginTop: '10px' }} onClick={() => setHeading("Updated Heading! ✨")}>
          Update Heading
        </button>

        <hr style={{ margin: '15px 0', opacity: 0.1 }} />

        {/* Task 40: Ternary Operator Message */}
        <div style={{ textAlign: 'center', padding: '10px', background: isChecked ? '#f0fdf4' : '#fef2f2', borderRadius: '8px' }}>
          {isChecked ? "System is Active (Ternary)" : "System is Idle (Ternary)"}
        </div>
      </div>

    </div>
  );
};

export default TaskBasics31to40;