import React, { useState, useEffect} from "react";
import classes from "./SearchBar.module.css";

import SearchContext from "./SearchContext";

import axios from "axios";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState();

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
    props.setQuery(e.target.value);
    // console.log(e);
  };
  
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.spotify.com/v1/search",
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
        "Content-Type": "application/json",
      },
      params: {
        type: "album,artist,playlist,track,show,episode",
        q: searchValue,
        // include_external: "audio",
        limit: 20,
        market: "US",
      },
    })
      .then((res) => {
        // console.log(res);
        setSearchResults(res.data);
        props.setQueryResults(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(`run search on ${searchValue}`);
  }, [searchValue]);

  //   useEffect(() => {
  //     axios({
  //       method: "get",
  //       url: "https://api.spotify.com/v1/search?query=%7B%22searchValue%22%3A%22child%22%7D&type=artist&locale=en-US%2Cen%3Bq%3D0.9&offset=0&limit=20",
  //     //   url: "https://api.spotify.com/v1/me/shows?offset=0&limit=20",
  //       headers: { Authorization: `Bearer ${props.accessToken}` },
  //     })
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });

  return (
    <SearchContext.Provider value={searchResults}>
      <form className={classes.SearchBar}>
        <input
          placeholder="What do you want to listen to?"
          size="40"
          value={searchValue}
          onChange={onChangeHandler}
        ></input>
      </form>
    </SearchContext.Provider>
  );
};

export default SearchBar;

// export {SearchResultsContext};
