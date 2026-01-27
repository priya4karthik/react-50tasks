// A small internal component that accepts props
const MyButton = ({ label, color, onClick }) => (
  <button 
    onClick={onClick}
    style={{ backgroundColor: color, color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', margin: '5px', cursor: 'pointer' }}
  >
    {label}
  </button>
);

export default function Task11() {
  return (
    <div>
      <h3>One Component, Three Uses:</h3>
      <MyButton label="Save" color="#22c55e" onClick={() => alert('Saved!')} />
      <MyButton label="Delete" color="#ef4444" onClick={() => alert('Deleted!')} />
      <MyButton label="Cancel" color="#64748b" onClick={() => alert('Cancelled!')} />
    </div>
  );
}