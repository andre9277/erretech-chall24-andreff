import { useState } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  //state that keeps track if the user is logged in or not
  const [isLog, setIsLog] = useState(true);

  const toggleLog = () => {
    //change between login and register form
    setIsLog(!isLog);
  };

  return (
    <>
      <div>
        <h1>{isLog ? "Login" : "Register"}</h1>
        {isLog ? <Login /> : <Register />}
        <button onClick={toggleLog}>
          {" "}
          {isLog ? "Go to Register" : "Go to Login"}{" "}
        </button>
      </div>
    </>
  );
}

export default App;
