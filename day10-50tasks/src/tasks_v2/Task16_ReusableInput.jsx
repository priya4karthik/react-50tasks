const CustomInput = ({ label, error, ...props }) => (
  <div className="form-group" style={{ marginBottom: '15px' }}>
    <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#475569' }}>{label}</label>
    <input 
      className={`input ${error ? 'error' : ''}`} 
      style={{ border: error ? '1px solid #ef4444' : '1px solid #e2e8f0' }}
      {...props} 
    />
    {error && <small style={{ color: '#ef4444', marginTop: '4px' }}>{error}</small>}
  </div>
);

export default function Task16() {
  return (
    <div>
      <CustomInput label="USERNAME" placeholder="Enter username" />
      <CustomInput label="EMAIL" type="email" placeholder="error@example.com" error="Email is already taken" />
    </div>
  );
}