import { useState } from "react";
import axios from "axios";
import "./Register.css";
import { Navigate, Link } from "react-router-dom";

/* Creates a user with a first and last name, an email and a password */
const Register = () => {
  //State to handle the user fields needed
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State to manage redirection
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  //State to handle login errors
  const [error, setError] = useState(null);

  //Handles the submit of the user register
  const handleRegister = async (e) => {
    //So the page does not refresh
    e.preventDefault();
    try {
      const resp = await axios.post(
        "https://app.grupoerre.pt:1934/auth/create-user",
        { firstName, lastName, email, password }
      );
      //If the response is successful
      console.log(resp.data);
      //If the message from the backend is OK, go to dashboard
      if (resp.data.message === "OK") {
        //Set state to trigger redirection
        setRedirectToLogin(true);
      }
    } catch (error) {
      //If the response is not successful
      setError("Invalid email or password. Please try again.");
    }
  };

  //Redirects to the dashboard component:
  if (redirectToLogin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <h1 className="title-reg">Register Page</h1>
      <form onSubmit={handleRegister}>
        {/*First Name field */}
        <label>First Name:</label>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {/*Last Name field */}
        <label>Last Name:</label>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {/*Email field */}
        <label>Email:</label>
        <input
          type="text"
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
        <button type="submit">Register</button>
        {/*Display error message if there's an error */}
        {error && <p className="error-message">{error}</p>}
      </form>
      {/*Link to navigate to the login page */}
      <Link to="/">Already have an account? Login here</Link>
    </div>
  );
};

export default Register;
