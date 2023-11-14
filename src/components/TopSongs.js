import React from "react";
import classes from "./TopSongs.module.css";

import SongCard from "./SongCard";

const TopSongs = (props) => {
  const trackItems = props.queryResults.data.tracks.items
    .slice(0, 4)
    .map((track) => {
      //   console.log(track);
      return <SongCard key={track.id} trackData={track} includeArtist={true} />;
    });

  return (
    <div className={classes.TopSongsContainer}>
      <h2>Songs</h2>
      <div className={classes.TopSongs}>{trackItems}</div>
    </div>
  );
};

export default TopSongs;
