import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import axios from "axios";
import PlaylistBlock from "./PlaylistCard";
import PlaylistCard from "./PlaylistCard";
import PlaylistRow from "./PlaylistRow";

const Home = (props) => {
  const [message, setMessage] = useState("");
  const [playlists, setPlaylists] = useState({});
  const [featuredPlaylistData, setFeaturedPlaylistData] = useState({});
  const [focusPlaylistData, setFocusPlaylistData] = useState({});
  const [moodPlaylistData, setMoodPlaylistData] = useState({});
  const [newReleaseAlbumData, setNewReleaseAlbumData] = useState({});

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
        console.log(res);
        // setMessage(res.data.message);
        setFeaturedPlaylistData(res.data);
        //   setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.accessToken]);

  useEffect(() => {
    axios({
      url: "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists",
      method: "get",
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
      params: {
        country: "US",
        // limit: 50,
        locale: "en_US",
      },
    })
      .then((res) => {
        console.log(res);
        setFocusPlaylistData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.accessToken]);

  useEffect(() => {
    axios({
      url: "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFzHmL4tf05da/playlists",
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
        console.log(res);
        setMoodPlaylistData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.accessToken]);

  // useEffect(() => {
  //   axios({
  //     url: "https://api.spotify.com/v1/browse/new-releases",

  //     method: "get",
  //     headers: {
  //       Authorization: `Bearer ${props.accessToken}`,
  //     },
  //     params: {
  //       country: "US",
  //       // limit: 50,
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       setNewReleaseAlbumData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [props.accessToken]);

  if (
    featuredPlaylistData.playlists &&
    focusPlaylistData.playlists &&
    moodPlaylistData.playlists
  ) {
    return (
      <div className={classes.Home}>
        <PlaylistRow
          message={featuredPlaylistData.message}
          playlists={featuredPlaylistData.playlists}
        />
        <PlaylistRow message="Focus" playlists={focusPlaylistData.playlists} />
        <PlaylistRow message="Mood" playlists={moodPlaylistData.playlists} />
        {/* <PlaylistRow message={message} playlists={newReleaseAlbumData} /> */}
      </div>
    );
  }
  return (
    <>
      <p>{message}</p>
      <p>Row of recommended playlists</p>
      <PlaylistCard />
    </>
  );
};

export default Home;
