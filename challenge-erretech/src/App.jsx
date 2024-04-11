import { useState } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  //State that keeps track if the user is logged in or not
  const [isLog, setIsLog] = useState(true);

  const toggleLog = () => {
    //change between login and register form
    setIsLog(!isLog);
  };

  const handleLoginStatus = () => {
    setIsLog(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login isLog={isLog} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <div>
        {isLog ? <Login onLogin={handleLoginStatus} /> : <Register />}
        <div className="btn-redirect">
          <button onClick={toggleLog}>
            {" "}
            {isLog
              ? "Don't have an account? Register here!"
              : "Already have an account. Click here!"}{" "}
          </button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
