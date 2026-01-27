import { useState } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div className="task-wrapper" style={{ maxWidth: '400px' }}>
        <h3>{title}</h3>
        <hr style={{ margin: '15px 0' }} />
        {children}
        <button onClick={onClose} className="btn-secondary" style={{ marginTop: '20px', width: '100%' }}>Close</button>
      </div>
    </div>
  );
};

export default function Task6() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)} className="btn-primary">Open Reusable Modal</button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Confirmation">
        <p>This modal is a reusable component. You can pass any content here as children!</p>
      </Modal>
    </div>
  );
}