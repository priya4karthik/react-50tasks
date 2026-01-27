import { useState } from 'react';

export default function Task49() {
  const [expenses, setExpenses] = useState([]);
  const [amt, setAmt] = useState("");

  return (
    <div>
      <input type="number" value={amt} onChange={e => setAmt(e.target.value)} placeholder="Amount" />
      <button onClick={() => { setExpenses([...expenses, Number(amt)]); setAmt(""); }}>Add Expense</button>
      <h4>Total: ${expenses.reduce((a, b) => a + b, 0)}</h4>
    </div>
  );
}