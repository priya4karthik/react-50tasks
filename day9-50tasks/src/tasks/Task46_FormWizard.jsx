import { useState } from 'react';

export default function Task46() {
  const [step, setStep] = useState(1);
  return (
    <div>
      <div style={{ height: '5px', background: '#eee', marginBottom: '20px' }}>
        <div style={{ width: step === 1 ? '50%' : '100%', height: '100%', background: '#3b82f6' }}></div>
      </div>
      {step === 1 ? (
        <div><h3>Step 1: Contact</h3><input placeholder="Email" style={{ width: '100%' }} /></div>
      ) : (
        <div><h3>Step 2: Security</h3><input type="password" placeholder="Password" style={{ width: '100%' }} /></div>
      )}
      <div style={{ marginTop: '20px' }}>
        {step > 1 && <button onClick={() => setStep(step - 1)}>Back</button>}
        {step < 2 && <button onClick={() => setStep(step + 1)}>Next</button>}
      </div>
    </div>
  );
}