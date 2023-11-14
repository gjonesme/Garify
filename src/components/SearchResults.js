import React, { useState } from "react";
import classes from "./SearchResults.module.css";
import { useParams, Link } from "react-router-dom";
import FilterBar from "./FilterBar";
import TopArtist from "./TopArtist";
import TopSongs from "./TopSongs";
// import ArtistRow from "./ArtistRow";
// import AlbumRow from "./AlbumRow";
// import PlaylistRow from "./PlaylistRow";
import MediaRow from "./MediaRow";
import MediaCard from "./MediaCard";

const SearchResults = (props) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const onLinkClickHandler = (e) => {
    console.log(e);
    props.setLink(props.queryResults.data.artists.items[0].href);
  };
  console.log(props.queryResults);
  if (props.queryResults.data) {
    if (activeFilter == "all") {
      return (
        <div className={classes.SearchResults}>
          <div className={classes.FilterBar}>
            <FilterBar
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </div>
          <div className={classes.TopResults}>
            <Link
              to={"/artist/" + props.queryResults.data.artists.items[0].id}
              onClick={onLinkClickHandler}
              style={{ textDecoration: "none", width: "40%" }}
            >
              <TopArtist queryResults={props.queryResults} />
            </Link>

            <div className={classes.TopSongs}>
              <TopSongs queryResults={props.queryResults} />
            </div>
          </div>
          <MediaRow
            mediaType={`Artists`}
            mediaLookup={"artists"}
            media={props.queryResults.data}
            setLink={props.setLink}
          />
          <MediaRow
            mediaType={`Albums`}
            mediaLookup={"albums"}
            media={props.queryResults.data}
            setLink={props.setLink}
          />
          <MediaRow
            mediaType={`Playlists`}
            media={props.queryResults.data}
            mediaLookup={"playlists"}
            setLink={props.setLink}
          />
          <MediaRow
            mediaType={`Podcasts`}
            media={props.queryResults.data}
            mediaLookup={"shows"}
            setLink={props.setLink}
          />
          <MediaRow
            mediaType={`Episodes`}
            media={props.queryResults.data}
            mediaLookup={"episodes"}
            setLink={props.setLink}
          />
          <MediaRow
            mediaType={`Audiobooks`}
            media={props.queryResults.data}
            mediaLookup={"audiobooks"}
            setLink={props.setLink}
          />
        </div>
      );
    } else {
      console.log(activeFilter);
      // console.log(props.queryResults.data[activeFilter].items);
      const itemList = props.queryResults.data[activeFilter].items.map(
        (item) => {
          <MediaCard mediaItem={item} />;
        }
      );
      return (
        <div className={classes.FilterBar}>
          <FilterBar
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <ul>{itemList}</ul>
        </div>
      );
    }
  } else {
    return <div></div>;
  }
};

export default SearchResults;
