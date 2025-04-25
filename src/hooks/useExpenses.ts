import { useEffect, useState } from "react";
import { getExpenses } from "../services/expense-service";
import { Expense } from "../model/Expense";
// 2️⃣ useExpenses.ts 👉 Custom Hook (Logic Layer)
// Purpose: Encapsulates the logic for "fetching expense data".
// This makes Dashboard.tsx cleaner, focusing only on "rendering data" without worrying about "where the data comes from".
// Uses React's lifecycle hook useEffect to automatically trigger the API request after the component loads.

const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  useEffect(() => {
    setLoader(true);
    getExpenses()
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setLoader(false));
  }, []);
  return { expenses, error, isLoading };
};

export default useExpenses;
