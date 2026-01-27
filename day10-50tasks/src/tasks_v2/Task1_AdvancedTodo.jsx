import { useState } from 'react';

export default function Task1() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);

  const addOrUpdate = () => {
    if (editingId) {
      setTodos(todos.map(t => t.id === editingId ? { ...t, text } : t));
      setEditingId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    }
    setText("");
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input value={text} onChange={(e) => setText(e.target.value)} style={{ flex: 1 }} />
        <button onClick={addOrUpdate}>{editingId ? "Update" : "Add"}</button>
      </div>
      <ul style={{ padding: 0, marginTop: '20px' }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', borderBottom: '1px solid #eee' }}>
            <input type="checkbox" checked={todo.completed} onChange={() => setTodos(todos.map(t => t.id === todo.id ? {...t, completed: !t.completed} : t))} />
            <span style={{ flex: 1, textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => { setEditingId(todo.id); setText(todo.text); }}>Edit</button>
            <button onClick={() => setTodos(todos.filter(t => t.id !== todo.id))} style={{ color: 'red' }}>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
}