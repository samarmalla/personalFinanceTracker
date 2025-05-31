import { useState } from 'react'
import './App.css'
import Income from './Income'
import Expense from './Expense'
import Savings from './Savings'

function App() {
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const [savingsGoal, setSavingsGoal] = useState(0);

  function handleAddIncome(amount, desc) {
    setIncomeList([...incomeList, { amount, desc, id: Date.now() }]);
  }
  function handleAddExpense(amount, desc) {
    setExpenseList([...expenseList, { amount, desc, id: Date.now() }]);
  }
  function handleSetSavings(goal) {
    setSavingsGoal(goal);
  }
  function handleDeleteIncome(id) {
    setIncomeList(incomeList.filter(item => item.id !== id));
  }
  function handleDeleteExpense(id) {
    setExpenseList(expenseList.filter(item => item.id !== id));
  }

  const totalIncome = incomeList.reduce((sum, item) => sum + item.amount, 0);
  const totalExpense = expenseList.reduce((sum, item) => sum + item.amount, 0);
  const netBalance = totalIncome - totalExpense;
  const savingsProgress = savingsGoal > 0 ? Math.min((netBalance / savingsGoal) * 100, 100) : 0;

  return (
    <div className="app-container">
      <h1>Personal Finance Tracker</h1>
      <div className="summary-cards">
        <div className="summary-card income-card">
          <h3>Total Income</h3>
          <p>${totalIncome}</p>
        </div>
        <div className="summary-card expense-card">
          <h3>Total Expenses</h3>
          <p>${totalExpense}</p>
        </div>
        <div className="summary-card balance-card">
          <h3>Net Balance</h3>
          <p>${netBalance}</p>
        </div>
      </div>
      <div className="lists-row">
        <div className="list-section">
          <h4>Income List</h4>
          <ul>
            {incomeList.map(item => (
              <li key={item.id}>
                {item.desc}: <span className="income-amount">${item.amount}</span>
                <button onClick={() => handleDeleteIncome(item.id)} className="delete-btn">Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="list-section">
          <h4>Expense List</h4>
          <ul>
            {expenseList.map(item => (
              <li key={item.id}>
                {item.desc}: <span className="expense-amount">${item.amount}</span>
                <button onClick={() => handleDeleteExpense(item.id)} className="delete-btn">Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Income onAddIncome={handleAddIncome} />
      <Expense onAddExpense={handleAddExpense} />
      <Savings onSetSavings={handleSetSavings} savingsGoal={savingsGoal} progress={savingsProgress} />
    </div>
  )
}

export default App