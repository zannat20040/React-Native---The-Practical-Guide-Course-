import React, { Children, createContext, useState } from "react";

export const ExpenseContext = createContext();

export default function ExpenseProvider({ children }) {
  const [allExpenses, setAllExpenses] = useState([]);
  const [budget, setBudget] = useState(null);

  const HandleExpense = (data) => {
    setAllExpenses((prev) => [...prev, data]);
  };
  const HandleBudget = (data) => {
    setBudget(data);
  };
  const HandleDelete = (id) => {
    console.log("deleted id ", id);
  };

  const info = {
    HandleExpense,
    HandleBudget,
    budget,
    allExpenses,
    HandleDelete,
  };
  return (
    <ExpenseContext.Provider value={info}>{children}</ExpenseContext.Provider>
  );
}
