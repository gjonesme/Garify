import React from "react";
import Home from "./Home";
import Search from "./Search";
import Library from "./Library";
import CreatePlaylist from "./CreatePlaylist";
import LikedSongs from "./LikedSongs";
import Spotify from "./Spotify";
import Back from "./Back";
import Forward from "./Forward";

const Icon = (props) => {
  if (props.iconName === "Home") {
    return <Home />;
  } else if (props.iconName === "Search") {
    return <Search />;
  } else if (props.iconName === "Library") {
    return <Library />;
  } else if (props.iconName === "CreatePlaylist") {
    return <CreatePlaylist />;
  } else if (props.iconName === "LikedSongs") {
    return <LikedSongs />;
  } else if (props.iconName === "Spotify") {
    return <Spotify />;
  } else if (props.iconName === "Back") {
    return <Back />;
  } else if (props.iconName === "Forward") {
    return <Forward />;
  } else {
    return <div>No Icon Found</div>;
  }
};

export default Icon;
