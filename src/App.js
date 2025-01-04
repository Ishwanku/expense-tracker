import React from "react";
import ExpenseTracker from "./expenseTracker";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseTracker />
    </div>
  );
};

export default App;
