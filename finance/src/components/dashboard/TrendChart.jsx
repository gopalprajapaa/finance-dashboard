import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useExpense } from "../../context/ExpenseContext";
import Card from "../ui/Card";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip
);

export default function TrendChart() {
  const { transactions } = useExpense();

  const data = {
    labels: transactions.map((t) => t.date),
    datasets: [
      {
        data: transactions.map((t) => t.amount),
        fill: true,
        tension: 0.4, // smooth curve
        borderWidth: 2,
        pointRadius: 0,
        borderColor: "#8b5cf6",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(139, 92, 246, 0.4)");
          gradient.addColorStop(1, "rgba(139, 92, 246, 0.02)");
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0b0f19",
        borderColor: "#27272a",
        borderWidth: 1,
        padding: 10,
        displayColors: false,
        callbacks: {
          label: (ctx) => `$${ctx.parsed.y}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#71717a" },
      },
      y: {
        grid: { color: "rgba(255,255,255,0.05)" },
        ticks: { color: "#71717a" },
      },
    },
  };

  return (
    <Card>
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-white/5 backdrop-blur-xl p-6 shadow-xl">

        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/20 blur-3xl rounded-full"></div>

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm uppercase tracking-widest text-zinc-400">
            Monthly Trend
          </h2>
          <span className="text-xs text-zinc-500">
            {transactions.length} entries
          </span>
        </div>

        {/* Chart */}
        <div className="h-[220px]">
          <Line data={data} options={options} />
        </div>

      </div>
    </Card>
  );
}