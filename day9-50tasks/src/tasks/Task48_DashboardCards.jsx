export default function Task48() {
  const data = [
    { label: "Revenue", val: "$12k", color: "#dcfce7" },
    { label: "Users", val: "450", color: "#e0f2fe" },
    { label: "Errors", val: "2", color: "#fee2e2" }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '10px' }}>
      {data.map(card => (
        <div key={card.label} style={{ background: card.color, padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
          <small>{card.label}</small>
          <h3>{card.val}</h3>
        </div>
      ))}
    </div>
  );
}