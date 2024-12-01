import React, { Children, createContext, useState } from "react";

export const ExpenseContext = createContext();

export default function ExpenseProvider({ children }) {
  const [allExpenses, setAllExpenses] = useState([]);

  const HandleExpense = (data) => {
    setAllExpenses((prev) => [...prev, data]);
  };
  console.log(allExpenses);

  const info = {
    HandleExpense,
  };
  return (
    <ExpenseContext.Provider value={info}>{children}</ExpenseContext.Provider>
  );
}
