import React, { useState } from 'react';

// --- Task 47: Header Component ---
const Header = () => (
  <header style={{ padding: '10px', borderBottom: '2px solid #e2e8f0', marginBottom: '15px' }}>
    <h4 style={{ margin: 0, color: '#2563eb' }}>🚀 Lab Dashboard</h4>
  </header>
);

// --- Task 46: Footer Component ---
const Footer = () => (
  <footer style={{ marginTop: '20px', padding: '10px', fontSize: '12px', borderTop: '1px solid #e2e8f0', color: '#94a3b8' }}>
    © 2026 React Basics Lab. Task 46 Completed.
  </footer>
);

// --- Task 41 & 49: Simple Card Component ---
const InfoCard = ({ title, content }) => (
  <div className="task-card" style={{ border: '1px solid #e2e8f0', margin: '5px' }}>
    <h5 style={{ color: '#1e293b' }}>{title}</h5>
    <p style={{ fontSize: '13px', color: '#64748b' }}>{content}</p>
    <button className="btn btn-secondary" style={{ fontSize: '11px', padding: '4px 8px' }}>Action</button>
  </div>
);

const TaskBasics41to50 = () => {
  // Task 45: Total Clicks State
  const [totalClicks, setTotalClicks] = useState(0);

  return (
    <div className="basics-container">
      {/* Task 47: Header */}
      <Header />

      <div className="basics-grid">
        {/* SECTION 1: COMPONENT REUSE (41, 43, 44, 48, 49) */}
        <div className="task-card">
          <h3 className="cat-title">Reusability (41-49)</h3>
          <p style={{ fontSize: '12px', marginBottom: '10px' }}>Task 48: Rendering the same card 3 times with different props.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <InfoCard title="Feature A" content="Reusable component instance 1." />
            <InfoCard title="Feature B" content="Reusable component instance 2." />
            <InfoCard title="Feature C" content="Reusable component instance 3." />
          </div>
        </div>

        {/* SECTION 2: EVENT AGGREGATION (42-45) */}
        <div className="task-card">
          <h3 className="cat-title">Event Logic (42-45)</h3>
          <p>Total Dashboard Clicks: <strong>{totalClicks}</strong></p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px' }}>
            {/* Task 43 & 44: Multiple buttons with events */}
            <button className="btn btn-primary" onClick={() => setTotalClicks(totalClicks + 1)}>Button 1</button>
            <button className="btn btn-primary" onClick={() => setTotalClicks(totalClicks + 1)}>Button 2</button>
            <button className="btn btn-primary" onClick={() => setTotalClicks(totalClicks + 1)}>Button 3</button>
          </div>
          
          {/* Task 42: Conditional Rendering */}
          {totalClicks > 5 && (
            <div className="status-toast" style={{ marginTop: '15px', background: '#ecfdf5', color: '#059669' }}>
              🎯 Milestone: Over 5 clicks recorded!
            </div>
          )}
        </div>

        {/* SECTION 3: THE COMBINATION (Task 50) */}
        <div className="task-card">
          <h3 className="cat-title">The Hybrid (Task 50)</h3>
          <div className="form-group">
            <label>Combined Input & Output</label>
            <input 
              type="text" 
              placeholder="Type to sync..." 
              onChange={() => setTotalClicks(totalClicks + 1)} 
            />
            <div style={{ marginTop: '10px', padding: '10px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <small style={{ color: '#64748b' }}>Live Counter Integration:</small>
              <p>Interaction Count: {totalClicks}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Task 46: Footer */}
      <Footer />
    </div>
  );
};

export default TaskBasics41to50;