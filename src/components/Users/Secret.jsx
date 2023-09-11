import React, { useState } from "react";
import axios from "axios";
import getServerUrl from "../../serverUrl.js";

const Secret = () => {
  const [message, setMessage] = useState("Forbidden");

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
