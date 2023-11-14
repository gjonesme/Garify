import React from "react";
import classes from "./TrackCard.module.css";

const TrackCard = (props) => {
  const formatDateAdded = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10).replace(/^0+/, "");
    const mths = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    if (mths[month - 1] + " " + day + ", " + year !== "Jan 1, 1970") {
      return mths[month - 1] + " " + day + ", " + year;
    }
  };

  if (props.playlistTrack) {
    const dateAdded = props.track.added_at;
    const songRuntimeSeconds = Math.floor(props.track.track.duration_ms / 1000);
    const songRuntimeMMSS = `${Math.floor(songRuntimeSeconds / 60)}:${(
      "0" +
      (songRuntimeSeconds % 60)
    ).slice(-2)}`;

    const artistNames = props.track.track.artists
      .map((artist) => artist.name)
      .join(", ");
    return (
      <div className={classes.PlaylistTrackCardGridContainer}>
        <span className={classes.TrackNumber}>{props.index + 1}</span>
        <div className={classes.TrackInfo}>
          <span className={classes.TrackName}>{props.track.track.name}</span>
          <div className={classes.TrackArtists}>
            {props.track.track.explicit ? (
              <span className={classes.Explicit}>E</span>
            ) : null}
            <span>{artistNames}</span>
          </div>
        </div>
        <div className={classes.AlbumNameContainer}>
          <span className={classes.AlbumName}>
            {props.track.track.album.name}
          </span>
        </div>

        <span className={classes.DateAdded}>{formatDateAdded(dateAdded)}</span>
        <span className={classes.TrackRuntime}>{songRuntimeMMSS}</span>
      </div>
    );
  } else {
    const songRuntimeSeconds = Math.floor(props.track.duration_ms / 1000);
    const songRuntimeMMSS = `${Math.floor(songRuntimeSeconds / 60)}:${(
      "0" +
      (songRuntimeSeconds % 60)
    ).slice(-2)}`;

    const artistNames = props.track.artists
      .map((artist) => artist.name)
      .join(", ");
    return (
      <div className={classes.TrackCardGridContainer}>
        <span className={classes.TrackNumber}>{props.track.track_number}</span>
        <div className={classes.TrackInfo}>
          <span>{props.track.name}</span>
          <div className={classes.TrackArtists}>
            {props.track.explicit ? (
              <span className={classes.Explicit}>E</span>
            ) : null}
            <span>{artistNames}</span>
          </div>
        </div>
        <span className={classes.TrackRuntime}>{songRuntimeMMSS}</span>
      </div>
    );
  }
};

export default TrackCard;
