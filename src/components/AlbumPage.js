import React, { useState, useEffect } from "react";
import useId from "../utils/useId";
import axios from "axios";
import classes from "./AlbumPage.module.css";
import SongCard from "./SongCard";
import TrackCard from "./TrackCard";
import Clock from "../icons/Clock";
import Play from "../icons/Play";
import Heart from "../icons/Heart";
import Dots from "../icons/Dots";
import { isCompositeComponent } from "react-dom/test-utils";

const AlbumPage = (props) => {
  const id = useId("album");
  const [album, setAlbum] = useState("");
  const controller = new AbortController();
  const albumType = album.album_type;
  const albumName = album.name;
  const totalTracks = album.total_tracks;

  useEffect(() => {
    axios({
      url: `https://api.spotify.com/v1/albums/${id}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
      params: {
        // market: "US",
        // limit: 50,
      },
      signal: controller.signal,
    })
      .then((res) => {
        console.log(res);
        setAlbum(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      controller.abort();
    };
  }, [id, props.accessToken]);

  const formatDate = (numericDate) => {
    const year = numericDate.slice(0, 4);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = numericDate.slice(5, 7);
    const day = numericDate.slice(8, 10);
    return months[parseInt(month) - 1] + " " + parseInt(day) + ", " + year;
  };

  const getTotalRuntime = () => {
    let totalRuntime = 0;
    for (const item of album.tracks.items) {
      totalRuntime += item.duration_ms;
    }
    return totalRuntime;
  };

  const formatTotalRuntime = (runtime_ms) => {
    const runtime_s = runtime_ms / 1000;
    if (runtime_s % (24 * 3600) != runtime_s) {
      return "over 24 hr";
    } else if (runtime_s % 3600 != runtime_s) {
      return `${Math.floor(runtime_s / 3600)} hr ${Math.floor(
        (runtime_s - 3600 * Math.floor(runtime_s / 3600)) / 60
      )} min`;
    } else if (runtime_s % 60 != runtime_s) {
      return `${Math.floor(runtime_s / 60)} min ${Math.floor(
        runtime_s - Math.floor(runtime_s / 60) * 60
      )} sec`;
    }
  };

  const formatTrackRuntime = (runtime_ms) => {
    const runtime_s = runtime_ms / 1000;
    return `${Math.floor(runtime_s / 60)}:${Math.floor(
      runtime_s - Math.floor(runtime_s / 60) * 60
    )}`;
  };

  if (album !== "") {
    return (
      <div>
        <div className={classes.AlbumBanner}>
          <img
            src={album.images[0].url}
            height={"175px"}
            width={"175px"}
            className={classes.AlbumImage}
          ></img>
          <div className={classes.AlbumInfo}>
            <span>{albumType}</span>
            <h1 className={classes.AlbumName}>{albumName}</h1>
            <div>
              <span>
                {album.artists.length > 1
                  ? "Various Artists"
                  : album.artists[0].name}
              </span>
              {/* <span> • {releaseDate.slice(0, 4)}</span> */}
              <span> • {album.release_date.slice(0, 4)}</span>
              <span> • {totalTracks} songs,</span>
              <span className={classes.Runtime}>
                {" "}
                {formatTotalRuntime(getTotalRuntime())}
              </span>
            </div>
          </div>
        </div>
        <div className={classes.ControlPanel}>
          <button className={classes.PlayButton}>
            <Play />
          </button>
          <button className={classes.LikeButton}>
            <Heart />
          </button>
          <button className={classes.LikeButton}>
            <Dots />
          </button>
        </div>
        <div className={classes.TrackListGrid}>
          <div className={classes.TrackListHeader}>
            <span className={classes.NumberHeader}>#</span>
            <span>Title</span>
            <span className={classes.Clock}>
              <Clock />
            </span>
          </div>
          <div className={classes.TrackList}>
            {album.tracks.items.map((track) => (
              <TrackCard track={track} key={track.id} />
            ))}
          </div>
        </div>
        <span className={classes.ReleaseDate}>
          {formatDate(album.release_date)}
        </span>
        <div className={classes.Copyrights}>
          {album.copyrights.map((copyright, index) => (
            <p key={index}>{copyright.text}</p>
          ))}
        </div>
      </div>
    );
  } else {
    return <div>no album found</div>;
  }
};

export default AlbumPage;
