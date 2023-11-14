import React, { useEffect, useState } from "react";
import useId from "../utils/useId";
import axios from "axios";
import MediaCard from "./MediaCard";
import MediaRow from "./MediaRow";
import classes from "./GenrePage.module.css";

const GenrePage = (props) => {
  const id = useId("genre");
  const [genre, setGenre] = useState();
  const controller = new AbortController();
  useEffect(() => {
    axios({
      url: `https://api.spotify.com/v1/browse/categories/${id}/playlists`,
      method: "get",
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
      params: {
        market: "US",
        // limit: 50,
      },
      signal: controller.signal,
    })
      .then((res) => {
        console.log(res);
        setGenre(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  if (genre && genre.playlists) {
    // console.log(genre.playlists.items);
    const playlists = genre.playlists.items
      .filter((x) => !!x)
      .map((item) => {
        return item ? <MediaCard mediaItem={item} /> : <span></span>;
      });
    return <div className={classes.GenrePage}>{playlists}</div>;
  } else {
    return <div>GENRE PAGE</div>;
  }
};

export default GenrePage;
