import React, { useEffect } from "react";
import { useState } from "react";
import classes from "./Discography.module.css";
import axios from "axios";
import MediaRow from "./MediaRow";
import MediaCard from "./MediaCard";

const Discography = (props) => {
  const controller = new AbortController();
  const id = props.id;
  const numColumns = 5;

  const [discography, setDiscography] = useState([]);
  const [albumsActive, setAlbumsActive] = useState(true);
  const [singlesActive, setSinglesActive] = useState(false);
  const [compilationsActive, setCompilationsActive] = useState(false);
  const [group, setGroup] = useState("album");

  const onAlbumsClick = () => {
    setAlbumsActive(true);
    setSinglesActive(false);
    setCompilationsActive(false);
    setGroup("album");
  };
  const onSinglesClick = () => {
    setAlbumsActive(false);
    setSinglesActive(true);
    setCompilationsActive(false);
    setGroup("single");
  };
  const onCompilationsClick = () => {
    setAlbumsActive(false);
    setSinglesActive(false);
    setCompilationsActive(true);
    setGroup("compilation");
  };

  useEffect(() => {
    axios({
      url: `https://api.spotify.com/v1/artists/${id}/albums`,
      method: "get",
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
      params: {
        market: "US",
        // limit: 50,
        include_groups: group,
      },
      //   signal: controller.signal,
    })
      .then((res) => {
        // console.log(res);
        setDiscography(res.data.items);
        // setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });

    // return () => {
    //   controller.abort();
    // };
  }, [id, group]);

  const inactiveButtonColor = {
    backgroundColor: "black",
    color: "white",
  };

  const activeButtonColor = {
    backgroundColor: "white",
    color: "black",
  };

  const discs = discography.slice(0, numColumns).map((item) => {
    // console.log(item);
    // return <li>{item.name}</li>;
    return (
      <MediaCard
        key={item.id}
        discography={true}
        mediaItem={item}
        setLink={props.setLink}
        id={"cardId"}
      />
    );
  });

  return (
    <div className={classes.Discography}>
      <span style={{ padding: "10px" }}> Discography</span>
      <div style={{ padding: "10px" }}>
        <button
          style={albumsActive ? activeButtonColor : inactiveButtonColor}
          onClick={onAlbumsClick}
        >
          Albums
        </button>
        <button
          style={singlesActive ? activeButtonColor : inactiveButtonColor}
          onClick={onSinglesClick}
        >
          Singles and EPs
        </button>
        <button
          style={compilationsActive ? activeButtonColor : inactiveButtonColor}
          onClick={onCompilationsClick}
        >
          Compilations
        </button>
      </div>
      <ul className={classes.DiscographyList}>{discs}</ul>
      {/* <MediaRow
        mediaType={`Albums`}
        mediaLookup={"albums"}
        media={discography}
      /> */}
    </div>
  );
};

export default Discography;
