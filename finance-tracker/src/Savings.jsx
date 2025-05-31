import React, { useState } from 'react'

function Savings({ onSetSavings, savingsGoal, progress }) {
  const [goal, setGoal] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const num = Number(goal);
    if (isNaN(num) || num <= 0) return;
    onSetSavings(num);
    setGoal('');
  }

  return (
    <form onSubmit={handleSubmit} className="input-form savings-form">
      <h4>Savings Goal</h4>
      <input
        type="number"
        placeholder="Set your savings goal"
        value={goal}
        onChange={e => setGoal(e.target.value)}
      />
      <button type="submit">Set Goal</button>
      {savingsGoal > 0 && (
        <div style={{ marginTop: 10 }}>
          <strong>Goal: ${savingsGoal}</strong>
          <div className="savings-bar-bg">
            <div
              className="savings-bar-fill"
              style={{ width: `${progress}%` }}
            >
              {progress.toFixed(0)}%
            </div>
          </div>
        </div>
      )}
    </form>
  )
}

export default Savings