import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: "$956",
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Tissue Paper",
      amount: "$156",
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Car Wash",
      amount: "$343",
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Dresses",
      amount: "$544",
      date: new Date(2021, 2, 28),
    },
  ];

  const saveExpenseDataHandler = (expense) => {
    console.log('App.js File')  
    console.log(expense)
  }

  return (
    <div className="App">
       <NewExpense onSaveExpense={saveExpenseDataHandler} />
       <Expenses items = {expenses} />
    </div>
  );
}

export default App;
