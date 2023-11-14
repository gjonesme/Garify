import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import axios from "axios";
import MediaRow from "./MediaRow";

const Home = (props) => {
  const [featuredPlaylistData, setFeaturedPlaylistData] = useState({});

  useEffect(() => {
    axios({
      url: "https://api.spotify.com/v1/browse/featured-playlists",
      method: "get",
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
      params: {
        country: "US",
        limit: 50,
        locale: "en_US",
      },
    })
      .then((res) => {
        setFeaturedPlaylistData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.accessToken]);

  if (featuredPlaylistData.playlists) {
    return (
      <div className={classes.Home}>
        <MediaRow
          mediaType={`Playlists`}
          media={featuredPlaylistData}
          mediaLookup={"playlists"}
          setLink={props.setLink}
          headerName={featuredPlaylistData.message}
        />
      </div>
    );
  }
  return (
    <>
      <p>LOADING...</p>
    </>
  );
};

export default Home;
