import React, { useEffect, useState } from "react";
import "./app.css";
import Header from "./components/header";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyB9M0P0mPAR8qH25zuEhOL41t40o0_Lu0A",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  });
  return (
    <>
      <Header />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
