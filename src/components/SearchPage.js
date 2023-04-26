import React, { useEffect, useState } from "react";
import classes from "./SearchPage.module.css";
import { Routes, Route, useParams, Outlet } from "react-router-dom";
import BrowsePage from "./BrowsePage";
import Card from "./Card";
import axios from "axios";
import SearchResults from "./SearchResults";

const SearchPage = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios({
      url: "https://api.spotify.com/v1/browse/categories",
      method: "get",
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
      params: {
        country: "US",
        limit: 50,
      },
    })
      .then((res) => {
        // console.log(res);
        setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("SearchPage Rendered");
  }, []);

  if (categories.items) {
    const itemList = categories.items.map((item) => {
      return <Card key={item.id} item={item} />;
    });
  if (props.query != "") {
    return (
      <>
        <SearchResults query={props.query} queryResults={props.queryResults} setLink={props.setLink} />
      </>
    );
  } else {
    return (
      <>
        <div className={classes.SearchPage}>
          <h2>Browse all</h2>
          <ul>{itemList}</ul>
        </div>
      </>
    );
  }
    } else {
    return (
      <>
        <div>
          <h2>LOADING... </h2>
        </div>
      </>
    );
  }
};

export default SearchPage;
