import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Client Operations</h2>
      <ul>
        <li>
          <Link to="/dashboard/add">Add Client</Link>
        </li>
        <li>
          <Link to="/dashboard/list">Client List</Link>
        </li>
        {/* Add links for edit and delete operations */}
      </ul>
    </div>
  );
};

export default Sidebar;
