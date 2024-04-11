import { useState } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  //State that keeps track if the user is logged in or not
  const [isLog, setIsLog] = useState(true);

  const toggleLog = () => {
    //change between login and register form
    setIsLog(!isLog);
  };

  return (
    <>
      <div>
        <h1 className="main-page">{isLog ? "Login Page" : "Register Page"}</h1>
        {isLog ? <Login /> : <Register />}
        <div className="btn-redirect">
          <button onClick={toggleLog}>
            {" "}
            {isLog
              ? "Don't have an account? Register here!"
              : "Already have an account. Click here!"}{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
