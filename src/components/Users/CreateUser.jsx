import React, { useEffect, useState } from "react";
import axios from "axios";
import getServerUrl from "../../serverUrl.js";

const createUser = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const checkAPI = async () => {
      try {
        const response = await axios.get(getServerUrl() + "/", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        if (response.status === 200) {
          document.location.href = "/login";
        }
      } catch (error) {
        if (error.response.status === 403) {
          document.location.href = "/login";
        }
      }
    };

    checkAPI();
  }, [message]);

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
      .post(getServerUrl() + "/users/create", user)
      .then((response) => {
        setMessage(response.data.message);
        console.log(response);
      })
      .catch((error) => {
        setMessage(error.response.data.message);
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

export default createUser;
