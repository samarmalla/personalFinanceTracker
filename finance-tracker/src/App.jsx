import { useState } from 'react'
import Income from './Income'
import Expense from './Expense'
import Savings from './Savings'

function App() {
  // State for lists and totals
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const [savingsGoal, setSavingsGoal] = useState(0);

  // Add new income
  function handleAddIncome(amount, desc) {
    setIncomeList([...incomeList, { amount, desc, id: Date.now() }]);
  }

  // Add new expense
  function handleAddExpense(amount, desc) {
    setExpenseList([...expenseList, { amount, desc, id: Date.now() }]);
  }

  // Set savings goal
  function handleSetSavings(goal) {
    setSavingsGoal(goal);
  }

  // Delete income/expense by id
  function handleDeleteIncome(id) {
    setIncomeList(incomeList.filter(item => item.id !== id));
  }
  function handleDeleteExpense(id) {
    setExpenseList(expenseList.filter(item => item.id !== id));
  }

  // Calculations
  const totalIncome = incomeList.reduce((sum, item) => sum + item.amount, 0);
  const totalExpense = expenseList.reduce((sum, item) => sum + item.amount, 0);
  const netBalance = totalIncome - totalExpense;
  const savingsProgress = savingsGoal > 0 ? Math.min((netBalance / savingsGoal) * 100, 100) : 0;

  return (
    <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
      <h1 style={{ color: 'purple', border: '2px solid purple', textAlign: 'center' }}>Personal Finance Tracker</h1>
      <br />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <h3>Total Income: ${totalIncome}</h3>
          <ul>
            {incomeList.map(item => (
              <li key={item.id}>
                {item.desc}: ${item.amount}
                <button onClick={() => handleDeleteIncome(item.id)} style={{ marginLeft: 8 }}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Total Expenses: ${totalExpense}</h3>
          <ul>
            {expenseList.map(item => (
              <li key={item.id}>
                {item.desc}: ${item.amount}
                <button onClick={() => handleDeleteExpense(item.id)} style={{ marginLeft: 8 }}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h3>Net Balance: ${netBalance}</h3>
      <br />
      <Income onAddIncome={handleAddIncome} />
      <Expense onAddExpense={handleAddExpense} />
      <Savings onSetSavings={handleSetSavings} savingsGoal={savingsGoal} progress={savingsProgress} />
    </div>
  )
}

export default App