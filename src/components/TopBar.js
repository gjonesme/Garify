import React from "react";

import classes from "./TopBar.module.css";
import Icon from "../icons/Icon";
import SearchBar from "./SearchBar";
import { Tooltip } from "react-tooltip";

const TopBar = (props) => {
  return (
    <nav className={classes.TopBar}>
      <div>
        <ul>
          <li className={classes.ArrowButton}>
            <Icon iconName="Back" />
          </li>
          <li className={classes.ArrowButton}>
            <Icon iconName="Forward" />
          </li>
          {props.location.pathname === "/search" && (
            <li>
              <SearchBar
                accessToken={props.accessToken}
                query={props.query}
                setQuery={props.setQuery}
                setQueryResults={props.setQueryResults}
                setLink={props.setLink}
              />
            </li>
          )}
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a id="signup-button">
              <button className={classes.button}>Sign Up</button>
            </a>
            <Tooltip
              className={classes.Tooltip}
              anchorSelect="#signup-button"
              openOnClick={true}
            >
              This project is for educational purposes only. To sign up for
              Spotify, go to open.spotify.com
            </Tooltip>
          </li>
          <li>
            <a id="login-button">
              <button
                className={`${classes.button} ${classes.buttonHighlighted}`}
              >
                Log In
              </button>
            </a>
            <Tooltip
              className={classes.Tooltip}
              anchorSelect="#login-button"
              openOnClick={true}
            >
              This project is for educational purposes only, to log in to
              Spotify, go to open.spotify.com
            </Tooltip>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
