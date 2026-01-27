import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #ddd', marginBottom: '10px' }}>
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ cursor: 'pointer', padding: '10px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}
      >
        {question} <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div style={{ padding: '10px', color: '#555' }}>{answer}</div>}
    </div>
  );
};

export default function Task39() {
  return (
    <div>
      <FAQItem question="What is React?" answer="A JavaScript library for building user interfaces." />
      <FAQItem question="What is a Component?" answer="A reusable piece of UI that manages its own state." />
    </div>
  );
}