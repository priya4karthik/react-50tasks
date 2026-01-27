import React, { useState, useMemo } from 'react';
import './App.css';

// --- TASK IMPORTS ---
import TaskBasics1to10 from './tasks_v2/Task_Basics_1_10';
import TaskBasics11to20 from './tasks_v2/Task_Basics_11_20';
import TaskBasics21to30 from './tasks_v2/Task_Basics_21_30';
import TaskBasics31to40 from './tasks_v2/Task_Basics_31_40';
import TaskBasics41to50 from './tasks_v2/Task_Basics_41_50';
// Import your Phase 2 tasks here as well...

const App = () => {
  const [activeTask, setActiveTask] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const taskList = useMemo(() => [
    // --- FUNDAMENTALS (Phase 1) ---
    { id: 1, title: "Tasks 1-10", component: <TaskBasics1to10 />, cat: "Basics" },
    { id: 2, title: "Tasks 11-20", component: <TaskBasics11to20 />, cat: "Basics" },
    
    // Inside your useMemo taskList
{ id: 3, title: "Tasks 21-30", component: <TaskBasics21to30 />, cat: "Basics" },// --- ADVANCED (Phase 2) ---
    
{ id: 4, title: "Tasks 31-40", component: <TaskBasics31to40 />, cat: "Basics" },// Add your existing Phase 2 tasks here, starting from id 11 or 51
{ id: 5, title: "Tasks 41-50", component: <TaskBasics41to50 />, cat: "Basics" },  
], []);

  const filteredTasks = taskList.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      {/* 1. Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="brand-row">
            <h2 className="brand">React 50 Tasks</h2>
            <span className="count-pill">{taskList.length} Tasks</span>
          </div>
          <input 
            type="text" 
            placeholder="Search components..." 
            className="search-input"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <nav className="nav-list">
          {filteredTasks.map((task) => (
            <button
              key={task.id}
              onClick={() => setActiveTask(task.id)}
              className={`nav-item ${activeTask === task.id ? 'active' : ''}`}
            >
              <span className="task-badge">{task.id}</span>
              <div className="task-meta">
                <span className="task-label">{task.title}</span>
                <span className="task-category">{task.cat}</span>
              </div>
            </button>
          ))}
        </nav>
      </aside>

      {/* 2. Content */}
      <main className="content-area">
        <header className="content-header">
          <div>
            <span className="path">SYSTEM / {taskList.find(t => t.id === activeTask)?.cat}</span>
            <h1 className="current-task">
              {taskList.find(t => t.id === activeTask)?.title}
            </h1>
          </div>
          <div className="live-status">
            <span className="dot"></span> Online
          </div>
        </header>

        <section className="display-canvas">
          <div className="task-container-inner" key={activeTask}>
            {taskList.find(t => t.id === activeTask)?.component}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;