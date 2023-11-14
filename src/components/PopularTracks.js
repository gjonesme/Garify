import React from "react";
import { useState } from "react";
import Track from "./Track";
import classes from "./PopularTracks.module.css";
import SongCard from "./SongCard";

const PopularTracks = (props) => {
  const [showMore, setShowMore] = useState(false);
  console.log(props);
  const trackItems = props.topTracks.tracks.map((trackData, index) => (
    // <Track key={trackData.id} trackData={trackData} index={index} />
    <SongCard trackData={trackData} index={index} key={trackData.id} />
  ));

  const onClickHandler = (e) => {
    setShowMore((showMore) => !showMore);
  };

  if (props.topTracks) {
    return (
      <div className={classes.PopularTracks}>
        <h3 style={{ paddingLeft: "10px" }}>Popular</h3>
        <ul className={classes.PopularTracksList}>
          {showMore ? trackItems : trackItems.slice(0, 5)}
        </ul>
        <button onClick={onClickHandler}>
          {showMore ? "Show less" : "See more"}
        </button>
      </div>
    );
  } else {
    return <h2>loading</h2>;
  }
};

export default PopularTracks;
