// 6️⃣ Expense.ts 👉 Interface Definition (Data Model)
// Purpose: Defines the data structure of "expense data" for type hinting and type checking.
// This is one of TypeScript's advantages: it automatically suggests data formats during development and prevents passing incorrect types.

export interface Expense {
  id?: number;
  expenseId?: string;
  name: string;
  note: string;
  amount: string;
  date: string;
  category: string;
}
