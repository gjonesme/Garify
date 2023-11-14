import React from "react";
import classes from "./MediaCard.module.css";

import { Link } from "react-router-dom";

import artistImagePlaceholder from "../icons/user.png";

const MediaCard = (props) => {
  // console.log(props.mediaItem);

  const type = props.mediaItem.type;

  let title, id, imageSource, description;

  const linkClickHandler = (e) => {
    props.setLink(props.mediaItem.href);
    console.log("LINK SET TO: " + props.mediaItem.href);
  };

  switch (type) {
    case "artist":
      title = props.mediaItem.name;
      imageSource = props.mediaItem.images[0]
        ? props.mediaItem.images[0].url
        : artistImagePlaceholder;
      // props.mediaItem.images[0].url ?
      description = "ARTIST";
      id = props.mediaItem.id;
      break;
    case "album":
      title = props.mediaItem.name;
      imageSource = props.mediaItem.images[0].url;
      description = props.discography
        ? props.mediaItem.release_date.slice(0, 4) +
          " - " +
          props.mediaItem.album_type
        : props.mediaItem.artists[0].name;
      id = props.mediaItem.id;
      break;
    case "playlist":
      title = props.mediaItem.name;
      imageSource = props.mediaItem.images[0]
        ? props.mediaItem.images[0].url
        : artistImagePlaceholder;
      description = props.mediaItem.owner.display_name;
      id = props.mediaItem.id;
      break;
    case "show":
      title = props.mediaItem.name;
      imageSource = props.mediaItem.images[0].url;
      description = props.mediaItem.publisher;
      id = props.mediaItem.id;
      break;
    case "episode":
      title = props.mediaItem.name;
      imageSource = props.mediaItem.images[0].url;
      description = props.mediaItem.release_date;
      id = props.mediaItem.id;
      break;
    case "disc":
      title = props.mediaItem.name;
      imageSource = props.mediaItem.images[0].url;
      description = props.mediaItem.release_date + props.mediaItem.album_type;
      id = props.mediaItem.id;
      break;
    case "audiobook":
      title = props.mediaItem.name;
      imageSource = props.mediaItem.images[0].url;
      description = props.mediaItem.authors[0].name;
      id = props.mediaItem.id;
      break;
    default:
      title = "not defined";
      imageSource = "not defined";
      description = "not defined";
      id = "not defined";
      break;
  }

  if (props.mediaItem) {
    // props.setLink(props.mediaItem.href);
    return (
      <Link
        to={`/${type}/${id}`}
        className={classes.MediaCardLink}
        onClick={linkClickHandler}
      >
        <div className={classes.MediaCard}>
          <img
            className={classes.MediaCardImage}
            style={{
              borderRadius: type === "artist" ? "50%" : "5px",
            }}
            src={imageSource}
            alt="media image here"
          />
          <h3 className={classes.Title}>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    );
  }
  return <h1>LOADING</h1>;
};

const cardStyle = {
  color: "#ffffff",
  backgroundColor: "#121212",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

export default MediaCard;
