import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SideBar.module.css";
import NavItem from "./NavItem";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

const MainNav = () => {
  let activeStyle = {
    color: "#ffffff",
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
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <NavItem iconName="Search" label="Search" link="/search" alt="/" />
          </NavLink>

          <NavLink to="collections"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            <NavItem
              iconName="Library"
              label="Your Library"
              link="/collections"
              alt="/"
            />
          </NavLink>
        </ul>
        <ul className={classes.NavPlaylists}>
          <NavItem iconName="CreatePlaylist" label="Create Playlist" />
          <NavItem iconName="LikedSongs" label="Liked Songs" />
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
