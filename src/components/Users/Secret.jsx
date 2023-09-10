import React, { useState } from "react";
import axios from "axios";

const Secret = () => {
  const [message, setMessage] = useState("Forbidden");
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

  axios
    .get(getServerUrl() + "/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((response) => {
      setMessage(response.data.message);
    });

  return <p>{message}</p>;
};

export default Secret;
