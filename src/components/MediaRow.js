import React, { useEffect } from "react";
import classes from "./MediaRow.module.css";
import MediaCard from "./MediaCard";

const MediaRow = (props) => {
  // let numColumns = 1;

  const numColumns = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--column-count");
  console.log("num columns: " + numColumns);

  // useEffect(() => {
  //   const numColumns = getComputedStyle(
  //     document.documentElement
  //   ).getPropertyValue("--column-count");
  //   console.log("num columns: " + numColumns);
  // }, []);

  // console.log(props);
  const medias = props.media
    ? props.media[props.mediaLookup].items.slice(0, numColumns).map((item) => {
        if (props.mediaType === "artist") {
          props.setLink(item.href);
        }
        return (
          <MediaCard
            key={item.id}
            mediaLookup={props.mediaLookup}
            mediaItem={item}
            setLink={props.setLink}
          />
        );
      })
    : null;
  return (
    <div style={{ display: "grid" }}>
      <h2>{props.mediaType}</h2>
      <div className={classes.MediaRow}>{medias}</div>
    </div>
  );
};

export default MediaRow;
