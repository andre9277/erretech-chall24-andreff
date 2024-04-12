import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddClient from "./components/clients/AddClient";
import ListClient from "./components/clients/ListClient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route is for the login component */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/add" element={<AddClient />} />
        <Route path="/dashboard/list" element={<ListClient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
