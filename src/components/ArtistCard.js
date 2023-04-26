import React from "react";
import classes from "./ArtistCard.module.css";

const ArtistCard = (props) => {
  console.log(props.artist);
  const imgSrc = props.artist.images[2] ? props.artist.images[2].url : null;
  const artistName = props.artist.name ? props.artist.name : "";

  return (
    <div className={classes.ArtistCard}>
      <img className={classes.ArtistCardImage} alt="top artist's image" src={imgSrc}></img>
      <h4>{artistName}</h4>
      <h5>ARTIST</h5>
    </div>
  );
};

const styles = {
  width: "200px",
  margin: "20px",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#121212",
  color: "white",
  borderRadius: "10px",
};

const stylesImg = {
  borderRadius: "50%",
  width: "150px",
};

export default ArtistCard;
