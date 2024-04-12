/* Érre Technology - Challenge ‘24
Made by: André Ferreira 
Date: 12/04/2024*/

import { useState } from "react";
import "./AddClient.css";
import { Link } from "react-router-dom";

const AddClient = ({ clients, setClients }) => {
  //State to manage new client added
  const [newClient, setNewClient] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  //State to show a success message when the user is added to the local list
  const [sucMessage, setSucMessage] = useState("");

  const handleAddClient = () => {
    //Validates if required fields are filled out properly
    if (!newClient.name || !newClient.email) {
      alert("Name and Email are required.");
      return;
    }

    //Add the new client to the list of clients
    const updatedClients = [...clients, newClient];
    setClients(updatedClients);

    //Save clients on the local browser store
    localStorage.setItem("clients", JSON.stringify(updatedClients));

    //Clear the form fields after the user is added
    setNewClient({
      name: "",
      email: "",
      phone: "",
      address: "",
    });

    //Set success message
    setSucMessage("Client added successfully");
  };

  //Handles the input change of the clients
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient({
      ...newClient,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <h2>Add Client</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/* Name */}
        <label> Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newClient.name}
          onChange={handleInputChange}
        />
        {/* Email */}
        <label> Email:</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={newClient.email}
          onChange={handleInputChange}
        />
        {/* Phone */}
        <label> Phone:</label>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={newClient.phone}
          onChange={handleInputChange}
        />
        {/* Address */}
        <label> Address:</label>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={newClient.address}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleAddClient}>
          Add client
        </button>
      </form>
      {sucMessage && <p className="succ-mess">{sucMessage}</p>}
      {/*Link to navigate to the dashboard page */}
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default AddClient;
