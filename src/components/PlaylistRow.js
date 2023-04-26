import React from "react";
import classes from "./PlaylistRow.module.css";
import PlaylistCard from "./PlaylistCard";
import MediaCard from "./MediaCard";

const PlaylistRow = (props) => {
  if (props.playlists.items) {
    const playlistItems = props.playlists.items.slice(0,4).map((item) => {
      // console.log(item.id);
      return (
        <li key={item.id}>
          <PlaylistCard  item={item} />
        </li>
      );
    });
    return (
      <div className={classes.PlaylistRow}>
        <div className={classes.PlaylistRowHeader}>
          <h2>{props.message}</h2>
          <span>SEE ALL</span>
        </div>
        <ul className={classes.PlaylistItems}>{playlistItems}</ul>
      </div>
    );
  }

  //   if (props.message) {
  //     return (
  //       <div className={classes.playlistRow}>
  //         <h2>{props.message}</h2>
  //         <span>SEE ALL</span>
  //       </div>
  //     );
  //   }
  return <span>Loading Playlist Row</span>;
};

export default PlaylistRow;
