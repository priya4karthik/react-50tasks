import { useState } from 'react';

export default function Task9() {
  const [activeTab, setActiveTab] = useState('Profile');
  const tabs = {
    Profile: "User Profile Information and Settings.",
    Security: "Manage your passwords and two-factor auth.",
    Billing: "View your invoices and subscription plans."
  };

  return (
    <div>
      <div style={{ display: 'flex', background: '#f1f5f9', borderRadius: '8px', padding: '4px', marginBottom: '20px' }}>
        {Object.keys(tabs).map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{ flex: 1, background: activeTab === tab ? '#fff' : 'transparent', color: activeTab === tab ? '#3b82f6' : '#64748b', boxShadow: activeTab === tab ? '0 2px 4px rgba(0,0,0,0.1)' : 'none' }}>
            {tab}
          </button>
        ))}
      </div>
      <div style={{ padding: '10px' }}>{tabs[activeTab]}</div>
    </div>
  );
}