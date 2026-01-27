export default function Task17() {
  const hours = new Date().getHours();
  let greeting = "";
  let color = "";

  if (hours < 12) {
    greeting = "Good Morning! ☀️";
    color = "#f59e0b";
  } else if (hours < 18) {
    greeting = "Good Afternoon! ☁️";
    color = "#3b82f6";
  } else {
    greeting = "Good Evening! 🌙";
    color = "#1e293b";
  }

  return (
    <div style={{ padding: '20px', borderRadius: '8px', backgroundColor: color, color: '#fff', textAlign: 'center' }}>
      <h2>{greeting}</h2>
      <p>The current hour is: {hours}:00</p>
    </div>
  );
}