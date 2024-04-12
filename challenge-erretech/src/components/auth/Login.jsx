import { useState } from "react";
import axios from "axios"; //Axios library to handle api calls
import "./Login.css";
import { Navigate, Link } from "react-router-dom";

const Login = () => {
  //Attributes to save and handle information about the user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //State to handle login errors
  const [error, setError] = useState(null);

  //State to manage redirection
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  //State to manage login/logout permissions
  const [token, setToken] = useState("");

  const handleLogin = async (e) => {
    //To prevent the page to refresh
    e.preventDefault();
    try {
      const resp = await axios.post(
        "https://app.grupoerre.pt:1934/auth/login",
        { email, password }
      );
      //console.log(resp); -> check the response from the postman
      //If the login is successful
      console.log(resp.data);

      //If the message from the backend is OK, go to dashboard
      if (resp.data.message === "OK") {
        //Set state to trigger redirection
        setRedirectToDashboard(true);
      }

      //Saves the token
      setToken(resp.data.token);
      console.log("resp.data.token", resp.data.token);
      // Call the callback function passed from the parent component
    } catch (error) {
      //if the login finds some error
      setError("Invalid email or password. Please try again.");
    }
  };

  //Redirects to the dashboard component:
  if (redirectToDashboard) {
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

      {/*Link to navigate to the register page */}
      <div className="lk-reg">
        <Link to="/register">Go to Register</Link>
      </div>
    </div>
  );
};

export default Login;
