import { useState } from 'react';

export default function Task12() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label style={{ fontSize: '1.1rem', cursor: 'pointer' }}>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={(e) => setIsChecked(e.target.checked)} 
        />
        Check to see warning
      </label>

      {isChecked && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fee2e2', color: '#b91c1c', borderLeft: '5px solid #ef4444', borderRadius: '4px' }}>
          <strong>⚠️ Warning:</strong> You have checked the box. Proceed with caution!
        </div>
      )}
    </div>
  );
}