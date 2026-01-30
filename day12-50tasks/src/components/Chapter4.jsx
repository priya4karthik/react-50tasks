import React, { useState, useEffect } from 'react';

export default function Chapter4() {
  // --- STATE ---
  const [isLoading, setIsLoading] = useState(true); // Req 35
  const [isModalOpen, setIsModalOpen] = useState(false); // Req 31
  const [selectedFilter, setSelectedFilter] = useState("All"); // Req 33 & 34
  const [activeView, setActiveView] = useState("A"); // Req 39
  const [items] = useState([
    { id: 1, name: "Project Alpha", type: "Work" },
    { id: 2, name: "Gym Session", type: "Personal" },
    { id: 3, name: "Client Meeting", type: "Work" }
  ]);
  const [gallery] = useState([ // Req 40
    "https://picsum.photos/id/1/80", 
    "https://picsum.photos/id/2/80", 
    "https://picsum.photos/id/3/80"
  ]);

  // --- LIFECYCLE HOOKS ---

  // Req 35 & 37: Loading timer and Console log on load
  useEffect(() => {
    console.log("37. Component Loaded Successfully");
    const timer = setTimeout(() => {
      setIsLoading(false); // Req 35: Loading for 2 seconds
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Req 36 & 38: Doc Title and Log on State Change
  useEffect(() => {
    document.title = `View: ${activeView}`; // Req 36
    console.log(`38. State changed: activeView is now ${activeView}`);
  }, [activeView]);

  // --- RENDER ---

  // Req 35: Loading text display
  if (isLoading) {
    return (
      <div className="chapter-box">
        <h2 className="loading-animation">35. Loading content for 2 seconds...</h2>
      </div>
    );
  }

  // Filter logic for Req 33
  const filteredItems = items.filter(item => 
    selectedFilter === "All" ? true : item.type === selectedFilter
  );

  return (
    <div className="chapter-box">
      <h4>Tasks 31 - 40: Lifecycle, Modals & Filters</h4>

      {/* Req 31 & 32: Modal Logic */}
      <div className="section">
        <button onClick={() => setIsModalOpen(true)}>31. Show Modal</button>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Dashboard Modal</h3>
              <p>State is currently: Open</p>
              <button onClick={() => setIsModalOpen(false)}>32. Close Modal</button>
            </div>
          </div>
        )}
      </div>

      <hr />

      {/* Req 33 & 34: Dropdown Filter */}
      <div className="section">
        <label>33. Dropdown Filter: </label>
        <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
          <option value="All">All Items</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
        <p>34. Selected Value: <strong>{selectedFilter}</strong></p>
        <ul>
          {filteredItems.map(item => (
            <li key={item.id}>{item.name} ({item.type})</li>
          ))}
        </ul>
      </div>

      <hr />

      {/* Req 39: Toggle between two components */}
      <div className="section">
        <button onClick={() => setActiveView(activeView === "A" ? "B" : "A")}>
          39. Toggle Component
        </button>
        <div style={{ marginTop: '10px' }}>
          {activeView === "A" ? (
            <div className="card-a">Component A: Default View</div>
          ) : (
            <div className="card-b">Component B: Secondary View</div>
          )}
        </div>
      </div>

      <hr />

      {/* Req 40: Gallery */}
      <div className="section">
        <p><strong>40. Simple Image Gallery:</strong></p>
        <div style={{ display: 'flex', gap: '10px' }}>
          {gallery.map((img, i) => (
            <img key={i} src={img} alt="Gallery" style={{ borderRadius: '5px' }} />
          ))}
        </div>
      </div>
    </div>
  );
}