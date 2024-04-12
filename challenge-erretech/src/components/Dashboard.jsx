import Sidebar from "./Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="mn-dash">
        <h1>Dashboard Page</h1>
      </div>
    </div>
  );
};

export default Dashboard;
