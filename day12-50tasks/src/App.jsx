import React from 'react';
import './App.css';
import Chapter1 from './components/Chapter1';
import Chapter2 from './components/Chapter2';
import Chapter3 from './components/Chapter3';
import Chapter4 from './components/Chapter4';
import Chapter5 from './components/Chapter5';

function App() {
  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <h1>React 50 Tasks Dashboard-Day 12</h1>
      </header>
      
      <div className="dashboard-grid">
        <section className="dashboard-item">
          <h2>Task 1 to 10: Basics</h2>
          <Chapter1 />
        </section>
        
        <section className="dashboard-item">
          <h2>Task 11 to 20: Lists & Math</h2>
          <Chapter2 />
        </section>
        
        <section className="dashboard-item">
          <h2>Task 21 to 30: Todos & Props</h2>
          <Chapter3 />
        </section>
        
        <section className="dashboard-item">
          <h2>Task 31 to 40: Lifecycle & UI</h2>
          <Chapter4 />
        </section>
        
        <section className="dashboard-item">
          <h2>Task 41 to 50: Advanced & Storage</h2>
          <Chapter5 />
        </section>
      </div>
    </div>
  );
}

export default App;