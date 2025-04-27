import { useEffect, useState } from "react";
import { Expense } from "../model/Expense";
import { getExpenseById } from "../services/expense-service";

const useExpenseByExpenseId = (expenseId: string) => {
  const [expense, setExpense] = useState<Expense | undefined>();
  const [error, setError] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getExpenseById(expenseId)
      .then((response) => setExpense(response.data))
      .catch((error) => {
        setError(error.message);
        console.log("Error fetching expense details:", error);
      })
      .finally(() => setLoader(false));
  }, []);
  return { expense, error, isLoading, setLoader, setError };
};

export default useExpenseByExpenseId;
