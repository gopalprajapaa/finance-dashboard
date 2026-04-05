import TopCards from "../components/dashboard/TopCards";
import TrendChart from "../components/dashboard/TrendChart";
import Transactions from "../components/dashboard/Transactions";
import AddExpense from "../components/dashboard/AddExpense";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      <TopCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrendChart />
        <Transactions />
      </div>

      <AddExpense />
    </div>
  );
};

export default Dashboard;