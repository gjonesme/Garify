import React from "react";
import classes from "./TopArtist.module.css";

const TopArtist = (props) => {
  const imgSrc = props.queryResults.data.artists.items[0].images[2].url
    ? props.queryResults.data.artists.items[0].images[2].url
    : "";
  const artistName = props.queryResults.data.artists.items[0].name
    ? props.queryResults.data.artists.items[0].name
    : "";

  return (
    <div className={classes.TopResult}>
      <h2>Top result</h2>
      <div className={classes.TopArtist}>
        <img alt="top artist's image" src={imgSrc}></img>
        <h2>{artistName}</h2>
        <h5>ARTIST</h5>
      </div>
    </div>
  );
};

export default TopArtist;
