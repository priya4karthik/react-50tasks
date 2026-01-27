import { useState } from 'react';

export default function Task26() {
  const [usd, setUsd] = useState(0);
  const rate = 0.92; // USD to EUR

  return (
    <div className="form-group">
      <label>Amount in USD ($)</label>
      <input type="number" value={usd} onChange={(e) => setUsd(e.target.value)} />
      <div style={{ marginTop: '20px', padding: '15px', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
        <h3 style={{ color: '#166534' }}>€ {(usd * rate).toFixed(2)} EUR</h3>
        <small>Current Rate: 1 USD = 0.92 EUR</small>
      </div>
    </div>
  );
}