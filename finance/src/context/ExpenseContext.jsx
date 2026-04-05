import { createContext, useContext, useState } from "react";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]
  );

  const addTransaction = (tx) => {
    setTransactions([...transactions, { ...tx, id: Date.now() }]);
  };

  return (
    <ExpenseContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => useContext(ExpenseContext);