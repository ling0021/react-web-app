import { Link, useNavigate, useParams } from "react-router-dom";
import CurrencyUtils from "../../utils/CurrencyUtils";
import DateUtils from "../../utils/DateUtils";
import useExpenseByExpenseId from "../../hooks/useExpenseByExpenseId";
import ConfirmDialog from "../../components/ConfirmDialog";
import { useState } from "react";
import { deleteExpenseByExpenseId } from "../../services/expense-service";

const ExpenseDetails = () => {
  const { expenseId } = useParams<{ expenseId: string }>();
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const navigate = useNavigate();
  if (!expenseId) {
    return <p className="text-danger">Invalid Expense Id</p>;
  }
  const { expense, error, isLoading, setLoader, setError } =
    useExpenseByExpenseId(expenseId);
  const handleCancel = () => {
    console.log("Cancel is clicked");
    setShowDialog(false);
  };
  const handleConfirm = () => {
    setLoader(true);
    deleteExpenseByExpenseId(expenseId)
      .then((response) => {
        if (response.status === 204) {
          navigate("/");
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => {
        setLoader(false);
        setShowDialog(false);
      });
  };

  return (
    <div className="container mt-2">
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      <div className="d-flex flex-row-reverse mb-2">
        <button
          className="btn btn-sm btn-danger"
          onClick={() => setShowDialog(true)}
        >
          Delete
        </button>
        <button
          className="btn btn-sm btn-warning mx-2"
          onClick={() => navigate(`/edit/${expenseId}`)}
        >
          Edit
        </button>
        <Link className="btn btn-sm btn-secondary" to="/">
          Back
        </Link>
      </div>
      <div className="card">
        <div className="card-body p-3">
          <table className="table table-borderless table-responsive">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{expense ? expense.name : "N/A"}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{expense ? expense.category : "N/A"}</td>
              </tr>
              <tr>
                <th>Amount</th>
                <td>
                  {expense
                    ? CurrencyUtils.formatCurrency(
                        parseFloat(expense.amount),
                        "USD"
                      )
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <th>Date</th>
                <td>
                  {expense
                    ? DateUtils.formatDateString(expense.date.toString())
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <th>Note</th>
                <td>{expense ? expense.note : "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ConfirmDialog
        title="Delete Expense"
        message="Are you sure you want to delete this expense?"
        show={showDialog}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default ExpenseDetails;
