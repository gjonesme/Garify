import React from "react";
import styles from "./Track.module.css";

const Track = (props) => {
  const trackMinutes = Math.floor(props.trackData.duration_ms / 1000 / 60);
  const trackSeconds = Math.floor(
    props.trackData.duration_ms / 1000 -
      Math.floor(props.trackData.duration_ms / 1000 / 60) * 60
  );

  return (
    <li className={styles.Track}>
      <span className={styles.NumberItem}>{props.index + 1}</span>
      <img
        className={styles.Item}
        src={props.trackData.album.images[0].url}
        height="35px"
      ></img>
      <span className={styles.Item}>{props.trackData.name}</span>
      <span className={styles.Item}>
        {trackMinutes}:{trackSeconds < 10 ? "0" + trackSeconds : trackSeconds}
      </span>
    </li>
  );
};

export default Track;
