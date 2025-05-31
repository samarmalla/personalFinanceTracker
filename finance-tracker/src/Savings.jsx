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
    <form onSubmit={handleSubmit}>
      <h4>Savings Goal</h4>
      <input
        type="number"
        placeholder="Set your savings goal"
        value={goal}
        onChange={e => setGoal(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <button type="submit">Set Goal</button>
      {savingsGoal > 0 && (
        <div style={{ marginTop: 10 }}>
          <strong>Goal: ${savingsGoal}</strong>
          <div style={{ background: '#eee', height: 20, width: 200, marginTop: 5 }}>
            <div style={{
              background: 'green',
              width: `${progress}%`,
              height: '100%',
              color: 'white',
              textAlign: 'center'
            }}>
              {progress.toFixed(0)}%
            </div>
          </div>
        </div>
      )}
    </form>
  )
}

export default Savings