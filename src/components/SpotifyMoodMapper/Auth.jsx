import React, { useEffect, useState } from "react";

const SpotifyAuth = () => {
  const configureRedirectUri = () => {
    if (window.location.hostname === "localhost") {
      return "http://localhost:3000/spotify-mood-mapper/";
    }
    if (window.location.hostname === "dev.ein.gg") {
      return "https://dev.ein.gg/spotify-mood-mapper/";
    }

    if (window.location.hostname === "ein.gg") {
      return "https://ein.gg/spotify-mood-mapper/";
    }
  };

  const [token, setToken] = useState(null);
  const client_id = "3899a4d2dd44403e80359c516c7668bb";
  const redirect_uri = configureRedirectUri();
  const scopes = "user-library-read";
  const [songsData, setSongsData] = useState([]);

  useEffect(() => {
    // При монтировании компонента проверяем URL на наличие токена
    const hash = window.location.hash
      .substring(1)
      .split("&")
      .reduce(function (initial, item) {
        if (item) {
          var parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});
    window.location.hash = "";

    if (hash.access_token) {
      setToken(hash.access_token);
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetch("https://api.spotify.com/v1/me/tracks", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setSongsData(data.items);
          // console.log(data);
        });
    }
  }, [token]);

  // useEffect(() => {
  //   console.log(songsData);
  // }, [songsData]);

  const buttonHandler = () => {
    window.location = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&scope=${encodeURIComponent(
      scopes
    )}&redirect_uri=${encodeURIComponent(redirect_uri)}`;
  };

  return (
    <>
      {songsData.length === 0 && (
        <button
          onClick={buttonHandler}
          type="button"
          className="text-[#191414] bg-[#1DB954] hover:bg-[#FFFFFF] hover:border-2 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#FFFFFF] mr-2 mb-2 mt-2"
        >
          <img
            className="w-5 h-5 mr-2 -ml-1"
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-black-17.png"
            alt=""
            data-encore-id="image"
          />
          Sign in with Spotify
        </button>
      )}
      <ul>
        {songsData.map((el, index) => {
          // console.log(el);

          return (
            <li key={index} className={"text-black dark:text-white"}>
              {el.track.artists.map((artist, artistsIndex) => {
                let artistsSeparator = el.track.artists.length > 1 ? ", " : "";
                if (el.track.artists.length - 1 === artistsIndex) {
                  artistsSeparator = "";
                }

                return artist.name + artistsSeparator;
              })}{" "}
              - {el.track.name}{" "}
              <span
                className={
                  "text-xs text-gray-900 dark:text-gray-500 hidden md:inline"
                }
              >
                {el["added_at"]}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SpotifyAuth;
