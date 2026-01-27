export default function Task44() {
  const forecast = [
    { day: 'Mon', temp: 22, type: 'Sunny' },
    { day: 'Tue', temp: 18, type: 'Cloudy' },
    { day: 'Wed', temp: 25, type: 'Hot' }
  ];

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {forecast.map(f => (
        <div key={f.day} style={{ flex: 1, padding: '15px', background: '#f0f9ff', borderRadius: '8px', textAlign: 'center' }}>
          <strong>{f.day}</strong>
          <div style={{ fontSize: '1.5rem', margin: '10px 0' }}>{f.temp}°C</div>
          <small>{f.type}</small>
        </div>
      ))}
    </div>
  );
}