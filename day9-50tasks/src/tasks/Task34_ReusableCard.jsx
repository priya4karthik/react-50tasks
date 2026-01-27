const Card = ({ title, description, badge }) => (
  <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', width: '200px', margin: '10px', display: 'inline-block' }}>
    <span style={{ fontSize: '0.7rem', background: '#e0f2fe', color: '#0369a1', padding: '2px 6px', borderRadius: '10px' }}>{badge}</span>
    <h4>{title}</h4>
    <p style={{ fontSize: '0.9rem', color: '#666' }}>{description}</p>
  </div>
);

export default function Task34() {
  return (
    <div>
      <Card title="React Course" description="Learn hooks & state." badge="Popular" />
      <Card title="Node.js Guide" description="Server side logic." badge="New" />
    </div>
  );
}