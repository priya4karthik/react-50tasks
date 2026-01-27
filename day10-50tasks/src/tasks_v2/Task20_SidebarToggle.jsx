import { useState } from 'react';

export default function Task20() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display: 'flex', border: '1px solid #e2e8f0', borderRadius: '12px', height: '200px', overflow: 'hidden' }}>
      <div style={{ width: collapsed ? '60px' : '150px', background: '#0f172a', transition: '0.3s', padding: '15px', color: 'white' }}>
        <button onClick={() => setCollapsed(!collapsed)} style={{ background: 'white', border: 'none', width: '30px', borderRadius: '4px' }}>{collapsed ? '→' : '←'}</button>
        {!collapsed && <p style={{ marginTop: '20px' }}>Menu Items</p>}
      </div>
      <div style={{ flex: 1, padding: '20px' }}>Main Content Area</div>
    </div>
  );
}