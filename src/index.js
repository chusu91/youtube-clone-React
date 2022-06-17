import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import Youtube from "./service/youtube";
import YoutubeFetch from "./service/youtube-fetch";

const youtube = new YoutubeFetch(process.env.REACT_APP_YOUTUBE_API_KEY);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
