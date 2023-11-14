import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SideBar.module.css";
import NavItem from "./NavItem";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { Tooltip } from "react-tooltip";
const SideBar = (props) => {
  let activeStyle = {
    color: "#ffffff",
  };

  const searchOnClickHandler = (e) => {
    props.setQuery("");
  };
  return (
    <div className={classes.SideBar}>
      <nav>
        <ul className={classes.NavHeader}>
          <NavItem iconName="Spotify" />
        </ul>
        <ul className={classes.NavList}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <NavItem iconName="Home" label="Home" link="/" alt="/" />
          </NavLink>
          <NavLink
            to="search"
            onClick={searchOnClickHandler}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <NavItem iconName="Search" label="Search" link="/search" alt="/" />
          </NavLink>

          <NavLink
            // to="collections"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <NavItem
              iconName="Library"
              label="Your Library"
              link="/collections"
              alt="/"
            />
          </NavLink>
        </ul>
        <ul className={classes.NavPlaylists}>
          <a id="create-playlist">
            <NavItem iconName="CreatePlaylist" label="Create Playlist" />
          </a>
          <Tooltip
            className={classes.Tooltip}
            anchorSelect="#create-playlist"
            place="right"
            openOnClick
          >
            Log in to create your own playlists
          </Tooltip>

          <a id="liked-songs">
            <NavItem iconName="LikedSongs" label="Liked Songs" />{" "}
          </a>
          <Tooltip
            className={classes.Tooltip}
            anchorSelect="#liked-songs"
            place="right"
            openOnClick
          >
            Log in to save and view your liked songs
          </Tooltip>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
