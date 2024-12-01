import React, { Children, createContext, useState } from "react";

export const ExpenseContext = createContext();

export default function ExpenseProvider({ children }) {
  const [allExpenses, setAllExpenses] = useState([]);
  const [budget, setBudget] = useState({});

  const HandleExpense = (data) => {
    setAllExpenses((prev) => [...prev, data]);
  };
  const HandleBudget = (data) => {
    setBudget(data);
  };

  console.log(budget);

  const info = {
    HandleExpense,
    HandleBudget,
  };
  return (
    <ExpenseContext.Provider value={info}>{children}</ExpenseContext.Provider>
  );
}
