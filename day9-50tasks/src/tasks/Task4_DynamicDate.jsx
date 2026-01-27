export default function Task4() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  return <p>Today is: <strong>{today}</strong></p>;
}