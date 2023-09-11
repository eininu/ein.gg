import React, { useEffect, useState } from "react";
import axios from "axios";
import getServerUrl from "../../serverUrl.js";

const Login = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const checkAPI = async () => {
      try {
        const response = await axios
          .get(getServerUrl() + "/", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((response) => {
            if (response.data.message === "Forbidden") {
              localStorage.removeItem("token");
            } else {
              window.location.href = "/secret";
            }
          });

        // if (response.status === 200) {
        //   console.log("API is working");
        // }
      } catch (error) {
        if (error.response) {
          // console.log("Server Error:", error.response.data.message);
          if (
            error.response.data.message ===
            "App isn't configured. Please create first user."
          ) {
            document.location.href = "/create-user";
          }
        } else if (error.request) {
          console.log("No answer from server:", error.request);
        } else {
          console.log("Error:", error.message);
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
      .post(getServerUrl() + "/users/login", user)
      .then((response) => {
        setMessage(response.data.message);
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        }
      })
      .catch((error) => {
        setMessage(error.response.data.message);
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
