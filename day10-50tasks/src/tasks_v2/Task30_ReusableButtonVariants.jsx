const Button = ({ variant, children, ...props }) => {
  const styles = {
    padding: '8px 16px',         // Controlled padding
    height: '40px',              // Fixed height for consistency
    display: 'inline-flex',      // Keeps it from stretching
    alignItems: 'center',        // Centers text vertically
    justifyContent: 'center',    // Centers text horizontally
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
    transition: '0.2s',
    border: 'none',
    // Variant specific colors
    ...(variant === 'primary' && { background: '#3b82f6', color: 'white' }),
    ...(variant === 'outline' && { background: 'transparent', border: '1px solid #3b82f6', color: '#3b82f6' }),
    ...(variant === 'ghost' && { background: 'transparent', color: '#64748b' })
  };

  return <button style={styles} {...props}>{children}</button>;
};

export default function Task30() {
  return (
    <div style={{ 
      display: 'flex', 
      gap: '12px', 
      alignItems: 'center',   // Prevents buttons from stretching to container height
      justifyContent: 'center',
      minHeight: '100px' 
    }}>
      <Button variant="primary">Submit</Button>
      <Button variant="outline">Back</Button>
      <Button variant="ghost">Skip</Button>
    </div>
  );
}