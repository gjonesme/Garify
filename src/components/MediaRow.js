import React, { useEffect } from "react";
import classes from "./MediaRow.module.css";
import MediaCard from "./MediaCard";
import { Link } from "react-router-dom";

const MediaRow = (props) => {
  const numColumns = 5;
  const mediaType = props.media[props.mediaLookup] ? props.mediaType : "";

  // attempt at variable sizing like Spotify does it
  // const numColumns = getComputedStyle(
  //   document.documentElement
  // ).getPropertyValue("--column-count");
  // console.log("num columns: " + numColumns);

  console.log(props);
  const medias = props.media[props.mediaLookup]
    ? props.media[props.mediaLookup].items.slice(0, numColumns).map((item) => {
        // if (props.mediaType === "artist") {
        //   props.setLink(item.href);
        // }
        console.log(item);
        return (
          // <Link to={item.id}>
          <MediaCard
            key={item.id}
            mediaLookup={props.mediaLookup}
            mediaItem={item}
            setLink={props.setLink}
            id={"cardId"}
          />
          // </Link>
        );
      })
    : null;
  return (
    <div style={{ display: "grid" }}>
      {props.headerName ? <h2>{props.headerName}</h2> : <h2>{mediaType}</h2>}
      <div className={classes.MediaRow}>{medias}</div>
    </div>
  );
};

export default MediaRow;
