import React from "react";
import classes from "./SongCard.module.css";

import Heart from "../icons/Heart";
import Dots from "../icons/Dots";

const SongCard = (props) => {
  const songRuntimeSeconds = Math.floor(props.trackData.duration_ms / 1000);
  const songRuntimeMMSS = `${Math.floor(songRuntimeSeconds / 60)}:${(
    "0" +
    (songRuntimeSeconds % 60)
  ).slice(-2)}`;

  return (
    <div className={classes.SongCardContainer}>
      {props.index != null ? (
        <span className={classes.SongIndex}>{props.index + 1}</span>
      ) : (
        <span></span>
      )}

      <img
        className={classes.SongCardImage}
        src={props.trackData.album.images[2].url}
      ></img>
      <div className={classes.SongCard}>
        <div className={classes.SongTitleArtist}>
          <span>{props.trackData.name}</span>
          <div>
            {props.trackData.explicit ? (
              <span className={classes.Explicit}>E</span>
            ) : null}

            {props.includeArtist ? (
              <span>{props.trackData.artists[0].name}</span>
            ) : null}
          </div>
        </div>
        {/* <Heart/> */}
        <span>{songRuntimeMMSS}</span>
        {/* <Dots/> */}
      </div>
    </div>
  );
};

export default SongCard;
