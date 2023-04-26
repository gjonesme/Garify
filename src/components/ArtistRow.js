import React from "react";
import ArtistCard from "./ArtistCard";

const ArtistRow = (props) => {
  //   console.log(props);
  const artists = props.artists
    ? props.artists.items.map((item) => (
        <ArtistCard key={item.id} artist={item} />
      ))
    : null;
  return (
    <div>
      <h2>Artists</h2>
      <div style={style}>{artists}</div>
    </div>
  );
};

const style = {
  display: "flex",
  flexDirection: "row",
  overflow: "hidden",
};

export default ArtistRow;
