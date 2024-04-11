import { useState } from "react";
import axios from "axios"; //Axios library to handle api calls
import "./Login.css";

const Login = () => {
  //Attributes to save and handle information about the user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    } catch (error) {
      //if the login finds some error
      console.error(error.resp.data);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        {/* Email field */}
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Password field */}
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Button to login  */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
