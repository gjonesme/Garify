import React from "react";
import AlbumCard from "./AlbumCard";
import MediaCard from "./MediaCard";

const AlbumRow = (props) => {
//   console.log(props);
  const albums = props.albums
    ? props.albums.items.map((item) => <AlbumCard key={item.id} album={item} />)
    : null;
  return (
    <div>
      <h2>Albums</h2>
      <div style={style}>{albums}</div>
    </div>
  );
};

const style = {
  display: "flex",
  flexDirection: "row",
  overflow: "hidden",
};

export default AlbumRow;
