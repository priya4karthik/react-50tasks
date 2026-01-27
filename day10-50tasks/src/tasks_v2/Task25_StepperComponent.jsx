import { useState } from 'react';

export default function Task25() {
  const [step, setStep] = useState(1);
  const steps = ["Account", "Personal", "Success"];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        {steps.map((s, i) => (
          <div key={s} style={{ color: step > i ? '#3b82f6' : '#cbd5e1', fontWeight: 'bold' }}>{s}</div>
        ))}
      </div>
      <div style={{ height: '100px', background: '#f8fafc', padding: '20px', borderRadius: '8px' }}>
        Step {step}: {steps[step - 1]} content goes here.
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button className="btn btn-secondary" disabled={step === 1} onClick={() => setStep(step - 1)}>Back</button>
        <button className="btn btn-primary" onClick={() => step < 3 ? setStep(step + 1) : alert('Finished!')}>
          {step === 3 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}