import React from "react";
import { useState, useEffect } from "react";
import classes from "./BrowsePage.module.css";
import axios from "axios";
import Card from "./Card";

const BrowsePage = (props) => {
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

    return (
        <>
          <div className={classes.SearchPage}>
            <h2>Browse all</h2>
            <ul>{itemList}</ul>
          </div>
        </>
      );
  }

  return (
    <>
      <div className={classes.SearchPage}>
        <h2>Loading</h2>
      </div>
    </>
  );
};

export default BrowsePage;
