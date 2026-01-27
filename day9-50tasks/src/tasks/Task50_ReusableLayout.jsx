const SidebarWrapper = ({ children }) => (
  <div style={{ display: 'flex', minHeight: '100px', border: '2px solid #3b82f6' }}>
    <div style={{ width: '50px', background: '#3b82f6' }}></div>
    <div style={{ flex: 1, padding: '15px' }}>{children}</div>
  </div>
);

export default function Task50() {
  return (
    <SidebarWrapper>
      <h2>Task 50 Complete!</h2>
      <p>This content is inside a reusable layout component.</p>
    </SidebarWrapper>
  );
}