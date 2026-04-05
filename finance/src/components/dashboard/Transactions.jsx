import { useExpense } from "../../context/ExpenseContext";
import Card from "../ui/Card";

export default function Transactions() {
  const { transactions } = useExpense();

  return (
    <Card>
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-white/5 backdrop-blur-xl p-6 shadow-xl">

        {/* Glow Background */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/20 blur-3xl rounded-full"></div>

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-sm uppercase tracking-widest text-zinc-400">
            Recent Transactions
          </h2>
          <span className="text-xs text-zinc-500">
            {transactions.length} items
          </span>
        </div>

        {/* List */}
        <div className="space-y-3 max-h-[300px] overflow-auto pr-1">

          {transactions.map((t) => (
            <div
              key={t.id}
              className="group flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-300"
            >
              {/* Left Side */}
              <div className="flex items-center gap-3">
                
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 text-lg group-hover:scale-105 transition">
                  💳
                </div>

                {/* Title */}
                <div>
                  <p className="text-sm text-zinc-200">{t.title}</p>
                  <p className="text-xs text-white-500">Transaction</p>
                </div>
              </div>

              {/* Amount */}
              <div
                className={`text-sm font-semibold tabular-nums ${
                  t.amount < 0 ? "text-red-400" : "text-emerald-400"
                }`}
              >
                {t.amount > 0 ? "+" : ""}${t.amount}
              </div>
            </div>
          ))}

          {/* Empty State */}
          {transactions.length === 0 && (
            <div className="text-center text-zinc-500 text-sm py-6">
              No transactions yet
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}