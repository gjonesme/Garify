import React, { useState } from "react";
import classes from "./SearchResults.module.css";
import { useParams } from "react-router-dom";
import FilterBar from "./FilterBar";
import TopArtist from "./TopArtist";
import TopSongs from "./TopSongs";
// import ArtistRow from "./ArtistRow";
// import AlbumRow from "./AlbumRow";
// import PlaylistRow from "./PlaylistRow";
import MediaRow from "./MediaRow";

const SearchResults = (props) => {
  const [activeFilter, setActiveFilter] = useState("All");
  //   console.log(props.queryResults);
  if (props.queryResults.data) {
    return (
      <div className={classes.SearchResults}>
        <div>
          <FilterBar
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>
        <div className={classes.TopResults}>
          <TopArtist queryResults={props.queryResults} />
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
        />
        <MediaRow
          mediaType={`Playlists`}
          media={props.queryResults.data}
          mediaLookup={"playlists"}
        />
        <MediaRow
          mediaType={`Podcasts`}
          media={props.queryResults.data}
          mediaLookup={"shows"}
        />
        <MediaRow
          mediaType={`Episodes`}
          media={props.queryResults.data}
          mediaLookup={"episodes"}
        />
      </div>
    );
  } else {
    return (
      <div>
        <div>Filters</div>
        <div>Top Results</div>
        <div>
          <div>Arists</div>
          <div>Top Songs</div>
        </div>
        <div>Featuring Top Result Artist</div>
        <div>Artists</div>
        <div>Albums</div>
        <div>Playlists</div>
        <div>Podcasts</div>
        <div>Episodes</div>
        <div>Profiles</div>
      </div>
    );
  }
};

export default SearchResults;
