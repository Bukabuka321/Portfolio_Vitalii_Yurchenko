import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    axios
      .post("http://localhost:5050/api/users", {
        firstname,
        lastname,
        email,
        password,
      })
      .then((response) => response.data);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Firstname"
          value={firstname}
          onChange={(event) => setFirstname(event.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Lastname "
          value={lastname}
          onChange={(event) => setLastname(event.target.value)}
        />
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;
