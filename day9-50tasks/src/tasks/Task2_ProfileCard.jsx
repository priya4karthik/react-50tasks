export default function Task2() {
  const user = { name: "Jane Doe", role: "Software Engineer", img: "https://i.pravatar.cc/150?u=jane" };
  return (
    <div style={{ textAlign: 'center', maxWidth: '200px' }}>
      <img src={user.img} alt="profile" style={{ borderRadius: '50%', width: '100px' }} />
      <h3>{user.name}</h3>
      <p style={{ color: '#64748b' }}>{user.role}</p>
    </div>
  );
}