import React from "react";
import styles from "./video_item.module.css";
const VideoItem = ({ video: { snippet } }) => (
  <li className={styles.container}>
    <div className={styles.video}>
      <img
        className={styles.thumbnail}
        src={snippet.thumbnails.medium.url}
        alt="video tumbnail"
      />

      <div className={styles.metadata}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </div>
  </li>
  //decontructing the props!
  //video props 안의 snippet으로 바로 접근. 아래 코드 절약됨
  //or just props 전달, props.video.video.snippet.title이래해도됨
);

export default VideoItem;
