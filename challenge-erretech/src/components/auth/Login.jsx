import { useState } from "react";
import axios from "axios"; //axios library to handle api calls

const Login = () => {
  //attributes to save and handle information about the user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    //to prevent the page to refresh
    e.preventDefault();
    try {
      const resp = await axios.post(
        "https://app.grupoerre.pt:1934/auth/login",
        { email, password }
      );
      //if the login is successful
      console.log(resp);
      //console.log(resp.data);
    } catch (error) {
      //if the login finds some error
      // console.error(error.resp.data);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {/* Email field */}
      <label>Email:</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/*   Password field */}
      <label>Password:</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* button to login  */}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
