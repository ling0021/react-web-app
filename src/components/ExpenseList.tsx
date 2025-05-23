import { Link } from "react-router-dom";
import { Expense } from "../model/Expense";
import CurrencyUtils from "../utils/CurrencyUtils";
import DateUtils from "../utils/DateUtils";

interface Props {
  expenses: Expense[];
}

// 3️⃣ ExpenseList.tsx 👉 List Component (Presentation Layer)
// Purpose: Focuses on displaying the data in a table format.
// Uses the map method to iterate over the passed-in expenses array.
// Uses expenseId as the key (note: this is not the database id, but a unique identifier returned by the backend).
const ExpenseList = ({ expenses }: Props) => {
  return (
    // <div>
    //   <table border={1}>
    //     <thead>
    //       <tr>
    //         <th>Title</th>
    //         <th>Amount</th>
    //         <th>Date</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {expenses.map((expense) => (
    //         <tr key={expense.expenseId}>
    //           <td>{expense.name}</td>
    //           <td>{expense.amount}</td>
    //           <td>{expense.date}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div className="card">
      <h5 className="card-header">
        Expense
        <span className="float-end">Amount</span>
      </h5>
      <div className="card-body">
        {expenses.map((expense) => (
          <Link
            key={expense.expenseId}
            to={`/view/${expense.expenseId}`}
            style={{ textDecoration: "none" }}
          >
            <div className="d-flex justify-content-between border-bottom-1 p-3 text-dark">
              <div className="card-title m-0">
                <h5>{expense.name}</h5>
                <span className="fst-italic">
                  {DateUtils.formatDateString(expense.date.toString())}
                </span>
              </div>
              <div className="card-subtitle">
                <span className="badge rounded-pill app-primary-bg-color">
                  {CurrencyUtils.formatCurrency(
                    parseFloat(expense.amount),
                    "USD"
                  )}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
