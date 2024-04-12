/* Érre Technology - Challenge ‘24
Made by: André Ferreira 
Date: 12/04/2024*/

import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddClient from "./components/clients/AddClient";
import ListClient from "./components/clients/ListClient";
import { useEffect, useState } from "react";

function App() {
  //State top manage local clients created
  const [clients, setClients] = useState([]);

  //Updates the client list whenever a new client is added, for example
  useEffect(() => {
    //Goes to the local storage and gets the clients
    const storedClients = localStorage.getItem("clients");
    if (storedClients) {
      setClients(JSON.parse(storedClients));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Default route is for the login component */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/add"
          element={<AddClient clients={clients} setClients={setClients} />}
        />
        <Route
          path="/dashboard/list"
          element={<ListClient clients={clients} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
