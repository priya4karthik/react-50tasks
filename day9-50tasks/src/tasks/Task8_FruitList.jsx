export default function Task8() {
  const fruits = ["🍎 Apple", "🍌 Banana", "🍒 Cherry", "🥭 Mango", "🍇 Grapes"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index} style={{ padding: '5px 0', fontSize: '1.1rem', listStyle: 'none' }}>
          {fruit}
        </li>
      ))}
    </ul>
  );
}