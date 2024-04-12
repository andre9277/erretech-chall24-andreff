import { Link } from "react-router-dom";
import "./Sidebar.css";
//import axios from "axios";

const Sidebar = () => {
  const handleLogout = () => {
    // Redirect to login page
    window.location.href = "/";
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-tit">Client Operations</h2>
      <ul className="sidebar-lst">
        <li className="sidebar-itm">
          <Link to="/dashboard/add" className="sidebar-lk">
            Add Client
          </Link>
        </li>
        <li className="sidebar-itm">
          <Link to="/dashboard/list" className="sidebar-lk">
            Client List
          </Link>
        </li>
        <li className="sidebar-itm">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
