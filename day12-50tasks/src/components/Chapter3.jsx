import React, { useState } from 'react';

// Req 25, 26, 27: Reusable Button
const MyButton = ({ text, onClick }) => <button className="custom-btn" onClick={onClick}>{text}</button>;

// Req 28, 29: Reusable Card
const InfoCard = ({ title, desc }) => (
  <div className="info-card"><b>{title}:</b> {desc}</div>
);

export default function Chapter3() {
  const [todos, setTodos] = useState([]); // Req 21
  const [filter, setFilter] = useState("All"); // Req 24

  const addTodo = () => setTodos([...todos, { id: Date.now(), text: "Task " + (todos.length + 1), done: false }]);
  const filtered = todos.filter(t => filter === "All" ? true : t.done === (filter === "Completed"));

  return (
    <div className="chapter-box">
      <h4>Todo & Reusable UI</h4>
      <MyButton text="Create Todo" onClick={addTodo} />
      
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
      </select>
      <p>Done: {todos.filter(t => t.done).length}</p> {/* Req 23 */}

      {filtered.map(todo => (
        <div key={todo.id}>
          <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
          <button onClick={() => setTodos(todos.map(t => t.id === todo.id ? {...t, done: !t.done} : t))}>✔</button>
        </div>
      ))}

      {/* Req 30: Render multiple cards */}
      <InfoCard title="Author" desc="Gemini" />
      <InfoCard title="Status" desc="Learning React" />
    </div>
  );
}