import React , { useState } from "react";
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpenses/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "$956",
    date: new Date(2021, 2, 28)
  },
  {
    id: "e2",
    title: "Tissue Paper",
    amount: "$156",
    date: new Date(2021, 2, 28)
  },
  {
    id: "e3",
    title: "Car Wash",
    amount: "$343",
    date: new Date(2021, 2, 28)
  },
  {
    id: "e4",
    title: "Dresses",
    amount: "$544",
    date: new Date(2021, 2, 28)
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  

  const saveExpenseDataHandler = (expense) => {
      setExpenses((prevExpenses) => { return [ expense, ...prevExpenses]})
  }

  

  return (
    <div className="App">
       <NewExpense onSaveExpense={saveExpenseDataHandler} />
       <Expenses items = {expenses} />
    </div>
  );
}

export default App;
