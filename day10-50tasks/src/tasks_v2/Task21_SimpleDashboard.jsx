const StatCard = ({ label, value, color }) => (
  <div style={{ flex: 1, padding: '20px', borderRadius: '12px', background: 'white', border: `1px solid #e2e8f0`, borderLeft: `4px solid ${color}` }}>
    <small style={{ color: '#64748b', fontWeight: 'bold' }}>{label}</small>
    <h2 style={{ margin: '5px 0' }}>{value}</h2>
  </div>
);

export default function Task21() {
  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      <StatCard label="USERS" value="1,284" color="#3b82f6" />
      <StatCard label="REVENUE" value="$4,500" color="#22c55e" />
      <StatCard label="ALERTS" value="12" color="#ef4444" />
    </div>
  );
}