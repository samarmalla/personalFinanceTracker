import React, { useState } from 'react'

function Expense({ onAddExpense }) {
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const num = Number(amount);
    if (!desc || isNaN(num) || num <= 0) return;
    onAddExpense(num, desc);
    setAmount('');
    setDesc('');
  }

  return (
    <form onSubmit={handleSubmit} className="input-form expense-form">
      <h4>Add Expense</h4>
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
      <button type="submit">Add Expense</button>
    </form>
  )
}

export default Expense