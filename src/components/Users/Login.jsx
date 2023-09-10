import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [message, setMessage] = useState('');
  const getServerUrl = () => {
    if (window.location.hostname === "localhost") {
      return "http://localhost:3000";
    }
    if (window.location.hostname === "dev.ein.gg") {
      return "https://dev-server.ein.gg";
    }

    if (window.location.hostname === "ein.gg") {
      return "https://server.ein.gg";
    }
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      login: login,
      password: password,
    };
    axios
      .post(getServerUrl() + "/users/login", user)
      .then((response) => {
        setMessage(response.data.message);
        console.log(response);
      })
      .catch((error) => {
        setMessage(error.response.data.message)
        console.log(error);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>login</label>
        <input type="text" value={login} onChange={handleLoginChange} />
        <label>password</label>
        <input type="text" value={password} onChange={handlePasswordChange} />
        <button type="submit">Submit</button>
      </form>
      {message}
    </>
  );
};

export default Login;
