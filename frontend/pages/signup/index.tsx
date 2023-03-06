import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await axios
      .post("http://localhost:5050/api/login", {
        email,
        password,
      })
      .then((response) => {
        const data = response.data;
        setFirstname(`${data.user.firstname}`);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
      <div>
        <h1>Hello, {firstname}</h1>
      </div>
    </>
  );
};

export default SignUp;
