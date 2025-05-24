import * as Yup from "yup";

const expenseValidationSchema = Yup.object({
  name: Yup.string()
    .required("Expense name is required")
    .min(3, "Expense name must be at least 3 characters long"),
  amount: Yup.number()
    .required("Expense amount is required")
    .positive("Expense amount must be a positive number")
    .min(1, "Expense amount must be at least 1"),
  date: Yup.date()
    .required("Expense date is required")
    .max(new Date(), "Expense date cannot be in the future"),
  category: Yup.string().required("Expense category is required"),
});

export default expenseValidationSchema;
