import { useState } from 'react';

export default function Task36() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setData("Data loaded successfully!");
      setLoading(false);
    }, 2000);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button className="btn btn-primary" onClick={fetchData} disabled={loading}>
        {loading ? "Fetching..." : "Load Data"}
      </button>
      <div style={{ marginTop: '20px' }}>
        {loading && <div className="spinner"></div>}
        {data && !loading && <p style={{ color: '#16a34a' }}>{data}</p>}
      </div>
    </div>
  );
}