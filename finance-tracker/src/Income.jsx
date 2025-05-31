import React, { useState } from 'react'

function Income({ onAddIncome }) {
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const num = Number(amount);
    if (!desc || isNaN(num) || num <= 0) return;
    onAddIncome(num, desc);
    setAmount('');
    setDesc('');
  }

  return (
    <form onSubmit={handleSubmit} className="input-form income-form">
      <h4>Add Income</h4>
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button type="submit">Add Income</button>
    </form>
  )
}

export default Income