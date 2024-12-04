import React, { Children, createContext, useState } from "react";
import EditExpense from "../screens/EditExpense";

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
    const filterNewItem = allExpenses.filter((item) => item.id !== id);
    setAllExpenses([...filterNewItem]);
  };
  // const HandleEdit = (id) => {
  //   console.log("edited id ", id);
  //   return <EditExpense />;
  // };

  console.log(allExpenses);

  const info = {
    HandleExpense,
    HandleBudget,
    budget,
    allExpenses,
    HandleDelete,
    // HandleEdit,
  };
  return (
    <ExpenseContext.Provider value={info}>{children}</ExpenseContext.Provider>
  );
}
