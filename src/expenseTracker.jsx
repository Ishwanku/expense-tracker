import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const ExpenseTracker = () => {
  const [wallet, setWallet] = useState(() => JSON.parse(localStorage.getItem("wallet")) || 5000);
  const [expenses, setExpenses] = useState(() => JSON.parse(localStorage.getItem("expenses")) || []);
  const [form, setForm] = useState({ title: "", amount: "", category: "", date: "" });
  const [isEditing, setIsEditing] = useState(null);

  useEffect(() => {
    localStorage.setItem("wallet", JSON.stringify(wallet));
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [wallet, expenses]);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddExpense = () => {
    const { title, amount, category, date } = form;
    const expenseAmount = parseFloat(amount);
    if (!title || !amount || !category || !date) return alert("All fields are required!");
    if (expenseAmount > wallet) return alert("Insufficient balance!");
    if (isEditing !== null) {
      const updatedExpenses = expenses.map((exp, idx) =>
        idx === isEditing ? { title, amount: expenseAmount, category, date } : exp
      );
      setExpenses(updatedExpenses);
      setIsEditing(null);
    } else {
      setExpenses([...expenses, { title, amount: expenseAmount, category, date }]);
    }
    setWallet(wallet - expenseAmount);
    setForm({ title: "", amount: "", category: "", date: "" });
  };

  const handleDelete = (idx) => {
    const expense = expenses[idx];
    setWallet(wallet + expense.amount);
    setExpenses(expenses.filter((_, i) => i !== idx));
  };

  const handleEdit = (idx) => {
    setForm(expenses[idx]);
    setIsEditing(idx);
  };

  const handleAddIncome = () => {
    const income = parseFloat(prompt("Enter income amount:"));
    if (isNaN(income) || income <= 0) return alert("Invalid amount!");
    setWallet(wallet + income);
  };

  const summaryData = Object.entries(
    expenses.reduce((acc, { category, amount }) => {
      acc[category] = (acc[category] || 0) + amount;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  return (
    <div>
      <h2>Wallet Balance: ${wallet.toFixed(2)}</h2>
      <button onClick={handleAddIncome}>Add Income</button>
      <div>
        <h3>Add Expense</h3>
        <input name="title" placeholder="Title" value={form.title} onChange={handleInputChange} />
        <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleInputChange} />
        <input name="category" placeholder="Category" value={form.category} onChange={handleInputChange} />
        <input name="date" type="date" value={form.date} onChange={handleInputChange} />
        <button onClick={handleAddExpense}>{isEditing !== null ? "Update Expense" : "Add Expense"}</button>
      </div>
      <h3>Expense List</h3>
      <ul>
        {expenses.map((expense, idx) => (
          <li key={idx}>
            {expense.title} - ${expense.amount} - {expense.category} - {expense.date}
            <button onClick={() => handleEdit(idx)}>Edit</button>
            <button onClick={() => handleDelete(idx)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Expense Summary</h3>
      <PieChart width={300} height={300}>
        <Pie data={summaryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
          {summaryData.map((entry, idx) => (
            <Cell key={idx} fill={["#8884d8", "#82ca9d", "#ffc658"][idx % 3]} />
          ))}
        </Pie>
      </PieChart>
      <h3>Expense Trends</h3>
      <BarChart width={300} height={200} data={summaryData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ExpenseTracker;
