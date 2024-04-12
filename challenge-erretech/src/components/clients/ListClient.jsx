/* Érre Technology - Challenge ‘24
Made by: André Ferreira 
Date: 12/04/2024*/

import "./ListClient.css";
import { Link } from "react-router-dom";

const ListClient = ({ clients }) => {
  return (
    <div>
      <h2>Client List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {/* Maps trough all the clients on the local store */}
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{client.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*Link to navigate to the dashboard page */}
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default ListClient;
