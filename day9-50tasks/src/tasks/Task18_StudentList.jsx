export default function Task18() {
  const students = [
    { id: 101, name: "Alice Johnson" },
    { id: 102, name: "Bob Smith" },
    { id: 103, name: "Charlie Brown" },
    { id: 104, name: "Diana Prince" }
  ];

  return (
    <div>
      <h3 style={{ borderBottom: '2px solid #eee', pb: '5px' }}>Class Roster</h3>
      <ul style={{ paddingLeft: '20px' }}>
        {students.map(student => (
          <li key={student.id} style={{ margin: '8px 0', fontSize: '1.1rem' }}>
            {student.name} <small style={{ color: '#888' }}>(ID: {student.id})</small>
          </li>
        ))}
      </ul>
    </div>
  );
}