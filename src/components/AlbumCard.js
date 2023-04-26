import React from "react";
import classes from "./AlbumCard.module.css";

const AlbumCard = (props) => {
//   console.log(props.album);
  const imgSrc = props.album.images[2] ? props.album.images[2].url : null;
  const albumName = props.album.name ? props.album.name : "";
  const artistName = props.album.artists[0].name
    ? props.album.artists[0].name
    : "";
    const releaseYear = props.album.release_date.slice(0,4);

  return (
    <div className={classes.AlbumCard}>
      <img className={classes.AlbumCardImage} alt="top album's image" src={imgSrc}></img>
      <h4>{albumName}</h4>
      <h5>{releaseYear} - {artistName}</h5>
    </div>
  );
};

const styles = {
  width: "200px",
  margin: "20px",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "black",
  color: "white",
  borderRadius: "10px",
};

const stylesImg = {
  borderRadius: "5px",
  width: "150px",
};

export default AlbumCard;
