import React, { useState } from 'react';

// --- Tasks 28, 29, 30: Child Component to demonstrate Props ---
const ChildComponent = ({ message }) => (
  <div className="status-toast" style={{ marginTop: '10px', background: '#fef3c7', color: '#92400e', borderColor: '#fde68a' }}>
    <small>Child Component (Prop Value):</small>
    <p><strong>{message}</strong></p>
  </div>
);

const TaskBasics21to30 = () => {
  // Task 21: Background Color State
  const [bgColor, setBgColor] = useState("#ffffff");

  // Tasks 22-23: Button Disable State
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  // Tasks 24-25: Image Visibility
  const [showImage, setShowImage] = useState(true);

  // Tasks 26-27: Simple Form Logic
  const [username, setUsername] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setSubmittedName(username);
  };

  return (
    <div className="basics-grid" style={{ backgroundColor: bgColor, transition: '0.3s', borderRadius: '16px', padding: '10px' }}>
      
      {/* SECTION 1: STYLE & UI CONTROL (21-23) */}
      <div className="task-card">
        <h3 className="cat-title">UI Controls (21-23)</h3>
        <button 
          className="btn btn-secondary" 
          onClick={() => setBgColor(bgColor === "#ffffff" ? "#6ea5dd" : "#ffffff")}
          style={{ marginBottom: '10px', width: '100%' }}
        >
          Toggle Card Background
        </button>
        
        <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
          <button className="btn btn-primary" disabled={isBtnDisabled}>
            Target Button
          </button>
          <button className="btn btn-danger" onClick={() => setIsBtnDisabled(true)}>Disable</button>
          <button className="btn btn-secondary" onClick={() => setIsBtnDisabled(false)}>Enable</button>
        </div>
      </div>

      {/* SECTION 2: MEDIA & FORMS (24-27) */}
      <div className="task-card">
        <h3 className="cat-title">Media & Forms (24-27)</h3>
        <button className="btn btn-secondary" onClick={() => setShowImage(!showImage)} style={{ width: '100%', marginBottom: '10px' }}>
          {showImage ? "Hide Image" : "Show Image"}
        </button>
        
        {showImage && (
          <img 
            src="https://picsum.photos/id/237/150/100" 
            alt="React Lab" 
            style={{ borderRadius: '8px', width: '100%', marginBottom: '15px' }} 
          />
        )}

        <form onSubmit={handleLogin} className="form-group">
          <input 
            type="text" 
            placeholder="Enter Username" 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <button className="btn btn-primary" style={{ marginTop: '8px', width: '100%' }}>Login</button>
        </form>
        {submittedName && <p style={{ fontSize: '12px', marginTop: '8px' }}>Logged in as: <b>{submittedName}</b></p>}
      </div>

      {/* SECTION 3: PROPS & COMPONENTS (28-30) */}
      <div className="task-card">
        <h3 className="cat-title">Props & Components (28-30)</h3>
        <p style={{ fontSize: '13px', color: '#64748b' }}>
          Task 28: Rendering two components side-by-side.
        </p>
        
        {/* Task 29 & 30: Passing and Displaying Props */}
        <ChildComponent message="Hello from Parent Props!" />
        <ChildComponent message={username || "Type in form to change me!"} />
      </div>

    </div>
  );
};

export default TaskBasics21to30;