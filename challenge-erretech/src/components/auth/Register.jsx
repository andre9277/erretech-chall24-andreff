import { useState } from "react";
import axios from "axios";
import "./Register.css";

/* Creates a user with a first and last name, an email and a password */
const Register = () => {
  //state to handle the user fields needed
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Handles the submit of the user register
  const handleRegister = async (e) => {
    // so the page does not refresh
    e.preventDefault();
    try {
      const resp = await axios.post(
        "https://app.grupoerre.pt:1934/auth/create-user",
        { firstName, lastName, email, password }
      );
      //if the response is successful
      console.log(resp.data);
    } catch (error) {
      //if the response is not successful
      console.error(error.response.data);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleRegister}>
        {/* First Name field */}
        <label>First Name:</label>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {/* Last Name field */}
        <label>Last Name:</label>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {/* Email field */}
        <label>Email:</label>
        <input
          type="text"
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
