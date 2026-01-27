import { useState } from 'react';

export default function Task30() {
  const [activeTab, setActiveTab] = useState("Home");

  const content = {
    Home: "Welcome to the homepage of this dashboard.",
    About: "This app helps you learn React step-by-step.",
    Contact: "Reach out via the sidebar tasks!"
  };

  return (
    <div>
      <div style={{ display: 'flex', borderBottom: '1px solid #ddd' }}>
        {Object.keys(content).map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 20px', border: 'none', background: 'none', cursor: 'pointer',
              borderBottom: activeTab === tab ? '3px solid #3b82f6' : 'none',
              fontWeight: activeTab === tab ? 'bold' : 'normal'
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div style={{ padding: '20px' }}>{content[activeTab]}</div>
    </div>
  );
}