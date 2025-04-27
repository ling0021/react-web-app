import apiClient from "../config/api-client";
import { Expense } from "../model/Expense";

// 4️⃣ expense-service.ts 👉 API Request Module (Service Layer)
// Purpose: Encapsulates all the logic for communicating with the backend.
// Used for "fetching the list of expenses from the backend".
export const getExpenses = () => {
  return apiClient.get<Expense[]>("/expenses");
};

export const getExpenseById = (expenseId: string) => {
  return apiClient.get<Expense>(`/expenses/${expenseId}`);
};

export const deleteExpenseByExpenseId = (expenseId: string) => {
  return apiClient.delete<void>(`/expenses/${expenseId}`);
};
