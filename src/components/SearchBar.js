import React, { useState, useEffect } from "react";
import classes from "./SearchBar.module.css";

import SearchContext from "./SearchContext";

import axios from "axios";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState();
  const debouncedSearchValue = useDebouncedSearchValue(searchValue);

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
    props.setQuery(e.target.value);
    // console.log(e);
  };

  function useDebouncedSearchValue(value, time = 250) {
    const [debouncedSearchValue, setDebouncedSearchValue] = useState();
    useEffect(() => {
      const timeout = setTimeout(() => {
        setDebouncedSearchValue(value);
      }, time);

      return () => {
        clearTimeout(timeout);
      };
    }, [value, time]);

    return debouncedSearchValue;
  }

  useEffect(() => {
    if (debouncedSearchValue) {
      axios({
        method: "get",
        url: "https://api.spotify.com/v1/search",
        headers: {
          Authorization: `Bearer ${props.accessToken}`,
          "Content-Type": "application/json",
        },
        params: {
          type: "album,artist,playlist,track,show,episode,audiobook",
          q: debouncedSearchValue,
          // include_external: "audio",
          limit: 20,
          market: "US",
        },
      })
        .then((res) => {
          setSearchResults(res.data);
          props.setQueryResults(res);
        })
        .catch((err) => {
          console.log(err);
        });
      // console.log(`run search on ${searchValue}`);
    }
  }, [debouncedSearchValue]);

  return (
    <SearchContext.Provider value={searchResults}>
      <form className={classes.SearchBar}>
        {/* <Search className={classes.SearchIcon} /> */}
        <input
          placeholder="What do you want to listen to?"
          size="40"
          value={searchValue}
          onChange={onChangeHandler}
          className={classes.InputField}
        ></input>
      </form>
    </SearchContext.Provider>
  );
};

export default SearchBar;

// export {SearchResultsContext};
