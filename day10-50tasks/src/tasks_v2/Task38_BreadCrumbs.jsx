export default function Task38() {
  const paths = ["Home", "Products", "Laptops"];
  return (
    <nav style={{ display: 'flex', gap: '8px', color: '#94a3b8' }}>
      {paths.map((p, i) => (
        <span key={p}>
          <span style={{ color: i === paths.length - 1 ? '#0f172a' : 'inherit' }}>{p}</span>
          {i < paths.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
}