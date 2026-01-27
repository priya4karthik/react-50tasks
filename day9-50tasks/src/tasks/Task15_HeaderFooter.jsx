const Header = () => (
  <header style={{ padding: '10px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '8px 8px 0 0' }}>
    <h3>App Header</h3>
  </header>
);

const Footer = () => (
  <footer style={{ padding: '10px', backgroundColor: '#1e293b', color: 'white', borderRadius: '0 0 8px 8px', marginTop: '20px' }}>
    <p>© 2026 My React Dashboard</p>
  </footer>
);

export default function Task15() {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
      <Header />
      <div style={{ padding: '20px' }}>
        <p>This is the main content area where your data goes.</p>
      </div>
      <Footer />
    </div>
  );
}