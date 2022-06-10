import React from "react";

const VideoItem = ({ video }) => {
  return (
    <li>
      <h1>{video.snippet.title}</h1>
    </li>
  );
};

export default VideoItem;
