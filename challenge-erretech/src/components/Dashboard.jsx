/* Érre Technology - Challenge ‘24
Made by: André Ferreira 
Date: 12/04/2024*/

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
