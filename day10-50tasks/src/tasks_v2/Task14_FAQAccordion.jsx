import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: '10px', overflow: 'hidden' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: '100%', padding: '15px', textAlign: 'left', background: 'white', display: 'flex', justifyContent: 'space-between', fontWeight: '600' }}
      >
        {question} <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div style={{ padding: '15px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', color: '#475569' }}>{answer}</div>}
    </div>
  );
};

export default function Task14() {
  return (
    <div>
      <FAQItem question="What is React?" answer="A JavaScript library for building user interfaces." />
      <FAQItem question="How does state work?" answer="State allows components to manage and respond to dynamic data." />
    </div>
  );
}