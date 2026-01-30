import React, { useState } from 'react';

export default function Chapter5() {
  const [url, setUrl] = useState(""); // Req 41
  const [activeTab, setActiveTab] = useState(1); // Req 42
  const [checks, setChecks] = useState([false, false]); // Req 44
  const [saved, setSaved] = useState(localStorage.getItem("note") || ""); // Req 48

  const saveToLocal = (val) => {
    setSaved(val);
    localStorage.setItem("note", val); // Req 47
  };

  const selectedCount = checks.filter(Boolean).length; // Req 45

  return (
    <div className="chapter-box">
      <h4>Storage & Advanced</h4>
      {/* Req 41 */}
      <input placeholder="Image URL" onChange={(e) => setUrl(e.target.value)} />
      {url && <img src={url} width="50" alt="preview" />}

      {/* Req 42, 43 */}
      <div className="tabs">
        <button className={activeTab === 1 ? "active-tab" : ""} onClick={() => setActiveTab(1)}>T1</button>
        <button className={activeTab === 2 ? "active-tab" : ""} onClick={() => setActiveTab(2)}>T2</button>
      </div>

      {/* Req 44, 45, 46 */}
      {checks.map((c, i) => (
        <input key={i} type="checkbox" checked={c} onChange={() => {
          const n = [...checks]; n[i] = !n[i]; setChecks(n);
        }} />
      ))}
      <p>Checks: {selectedCount}</p>
      {selectedCount > 0 && <button>Submit Selection</button>}

      {/* Req 47, 49 */}
      <input value={saved} onChange={(e) => saveToLocal(e.target.value)} placeholder="Persistent note..." />
      <button onClick={() => { localStorage.clear(); setSaved(""); }}>Clear Storage</button>
    </div>
  );
}