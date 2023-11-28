import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Input } from "@components/index.js";
import { signIn } from "@redux/auth/authOperations.js";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = { email, password };

    dispatch(signIn(user));

    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        required
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        required
        min={6}
        max={32}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit">Sign in</button>

      <p>
        You don't have an account?<Link to="register">Register now!</Link>
      </p>
    </form>
  );
};

export default LoginForm;
