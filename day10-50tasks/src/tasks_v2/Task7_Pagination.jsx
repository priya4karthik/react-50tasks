import { useState } from 'react';

export default function Task7() {
  const items = Array.from({ length: 25 }, (_, i) => `Product Item #${i + 1}`);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = items.slice(firstIndex, lastIndex);

  return (
    <div>
      {currentItems.map(item => <div key={item} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{item}</div>)}
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {[1, 2, 3, 4, 5].map(num => (
          <button key={num} onClick={() => setCurrentPage(num)} className={currentPage === num ? 'btn-primary' : 'btn-secondary'}>
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}