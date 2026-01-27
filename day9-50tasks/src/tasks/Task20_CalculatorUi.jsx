export default function Task20() {
  const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'];

  return (
    <div style={{ maxWidth: '240px', margin: '0 auto', background: '#333', padding: '15px', borderRadius: '10px' }}>
      <div style={{ background: '#eee', padding: '10px', textAlign: 'right', marginBottom: '10px', borderRadius: '4px', fontSize: '1.2rem', minHeight: '30px' }}>
        0
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
        {buttons.map(btn => (
          <button key={btn} style={{ padding: '15px', cursor: 'pointer', borderRadius: '4px', border: 'none', fontWeight: 'bold' }}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}