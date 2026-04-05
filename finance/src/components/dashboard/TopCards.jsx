import { useExpense } from "../../context/ExpenseContext";
import Card from "../ui/Card";

export default function TopCards() {
  const { transactions } = useExpense();

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      
      {/* Expense Card */}
      <Card>
        <div className="relative p-5 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-red-500/10">
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-gray-400 tracking-wide">Total Expenses</h3>
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-red-500/20 text-red-400">
              💸
            </div>
          </div>
          <p className="mt-4 text-2xl font-bold text-red-400">
            ${Math.abs(expense)}
          </p>
        </div>
      </Card>

      {/* Income Card */}
      <Card>
        <div className="relative p-5 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-green-500/10">
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-gray-400 tracking-wide">Total Income</h3>
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-500/20 text-green-400">
              💰
            </div>
          </div>
          <p className="mt-4 text-2xl font-bold text-green-400">
            ${income}
          </p>
        </div>
      </Card>

      {/* Balance Card */}
      <Card>
        <div className="relative p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-600/5 border border-blue-500/20 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-blue-500/10">
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-gray-400 tracking-wide">Balance</h3>
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
              📊
            </div>
          </div>
          <p className="mt-4 text-2xl font-bold text-blue-400">
            ${income + expense}
          </p>
        </div>
      </Card>

    </div>
  );
}