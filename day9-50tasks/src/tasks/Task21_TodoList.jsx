import { useState } from 'react';

export default function Task21() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a task..." style={{ flex: 1, padding: '8px' }} />
        <button onClick={addTodo} style={{ backgroundColor: '#3b82f6', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '4px' }}>Add</button>
      </div>
      <ul style={{ marginTop: '20px', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}