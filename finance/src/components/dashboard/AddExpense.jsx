import { useState } from "react";
import { useExpense } from "../../context/ExpenseContext";
import Card from "../ui/Card";

export default function AddExpense() {
  const { addTransaction } = useExpense();

  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "Food",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      ...form,
      amount: Number(form.amount),
    });

    setForm({ title: "", amount: "", category: "Food", date: "" });
  };

  return (
    <Card>
      <div className="space-y-5">
        
        {/* Header */}
        <h2 className="text-lg font-semibold text-white">
          Add New Transaction
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Title */}
          <div>
            <label className="text-xs text-white-400 mb-1 block">
              Title
            </label>
            <input
              placeholder="e.g. Grocery, Salary"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              className="w-full px-4 py-2.5 rounded-xl bg-white-950 border border-zinc-800 
              text-sm text-black placeholder-zinc-500 outline-none 
              focus:border-violet-500/60 transition"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="text-xs text-white-400 mb-1 block">
              Amount
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              value={form.amount}
              onChange={(e) =>
                setForm({ ...form, amount: e.target.value })
              }
              className="w-full px-4 py-2.5 rounded-xl bg-white-950 border border-zinc-800 
              text-sm text-black placeholder-zinc-500 outline-none 
              focus:border-violet-500/60 transition"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-xs text-white-400 mb-1 block">
              Category
            </label>
            <select
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
              className="w-full px-4 py-2.5 rounded-xl bg-white-950 border border-zinc-800 
              text-sm text-black outline-none focus:border-violet-500/60 transition"
            >
              <option>Food</option>
              <option>Travel</option>
              <option>Shopping</option>
              <option>Subscriptions</option>
              <option>Work</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="text-xs text-white-400 mb-1 block">
              Date
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
              className="w-full px-4 py-2.5 rounded-xl bg-white-950 border border-zinc-800 
              text-sm text-black outline-none focus:border-violet-500/60 transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-xl font-medium text-sm 
            bg-gradient-to-r from-violet-500 to-indigo-500 
            hover:opacity-90 transition shadow-lg shadow-violet-900/30"
          >
            Add Transaction
          </button>
        </form>
      </div>
    </Card>
  );
}