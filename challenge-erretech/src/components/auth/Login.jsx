import { useState } from "react";
import axios from "axios"; //Axios library to handle api calls
import "./Login.css";
import { Navigate } from "react-router-dom";

const Login = ({ isLog }) => {
  //Attributes to save and handle information about the user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //State to know if the user is logged in or logged out
  //----const [isLoggedIn, setIsLoggedIn] = useState(false);

  //State to handle login errors
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    //To prevent the page to refresh
    e.preventDefault();
    try {
      const resp = await axios.post(
        "https://app.grupoerre.pt:1934/auth/login",
        { email, password }
      );
      //console.log(resp); -> check the response from the postman
      //if the login is successful
      console.log(resp.data);
      //setIsLoggedIn(true);
    } catch (error) {
      //if the login finds some error
      setError("Invalid email or password. Please try again.");
    }
  };

  //If the user is able to login, go to dashboard component
  console.log(isLog);
  if (isLog === true) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="container">
      <h1 className="title-log">Login Page</h1>
      <form onSubmit={handleLogin}>
        {/*Email field */}
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/*Password field */}
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/*Button to login  */}
        <button type="submit">Login</button>

        {/*Display error message if there's an error */}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
