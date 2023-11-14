import React from "react";
import classes from "./PlaylistCard.module.css";

const PlaylistCard = (props) => {
  if (props.item) {
    // console.log(props.item.images[0].url)
    return (
      <>
        <div className={classes.PlaylistBlock}>
          <img
            src={props.item.images[0].url}
            alt="playlist image here"
            height={"175px"}
            width={"175px"}
          />
          <h3 className={classes.PlaylistName}>{props.item.name}</h3>
          <p>By: {props.item.owner.display_name}</p>
        </div>
      </>
    );
  }
  return <h1>LOADING</h1>;
};

export default PlaylistCard;
