// 1️⃣ Dashboard.tsx 👉 Page Component (UI Layer)
// Purpose: This is a UI component used to combine UI elements.
// It uses the custom hook useExpenses() to fetch the "expense data" and then passes it to the child component ExpenseList to render the table.
// It also displays the loading text (isLoading) or error message (error) based on the loading state or any errors that occur.
import ExpenseList from "../../components/ExpenseList";
import useExpenses from "../../hooks/useExpenses";

// Dashboard.tsx
// ├── uses useExpenses()             // Custom Hook
// │    └── calls getExpenses()       // API request
// │         └── uses apiClient       // axios configuration
// └── renders ExpenseList            // Renders data table
const Dashboard = () => {
  const { expenses, error, isLoading } = useExpenses();
  return (
    <div className="container">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Dashboard;
