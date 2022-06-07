import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function LoginForm({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const currentUser = {
      username,
      password,
    };
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentUser),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Username</Form.Label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Label htmlFor="password">Password</Form.Label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </Form>
      {errors ? errors.map((err) => <p key={err}>{err}</p>) : null}
    </>
  );
}

export default LoginForm;
