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

export default getServerUrl;
