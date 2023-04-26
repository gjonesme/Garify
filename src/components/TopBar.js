import React from "react";
import { Route } from "react-router-dom";
import classes from "./TopBar.module.css";
import Icon from "../icons/Icon";
import SearchBar from "./SearchBar";
import SearchPage from "./SearchPage";

const TopBar = (props) => {
  return (
    <nav className={classes.TopBar}>
      <div>
        <ul>
          <li>
            <Icon iconName="Back" />
          </li>
          <li>
            <Icon iconName="Forward" />
          </li>
          {props.location.pathname === "/search" && (
            <li>
              <SearchBar
                accessToken={props.accessToken}
                setQuery={props.setQuery}
                setQueryResults={props.setQueryResults}
              />
            </li>
          )}
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <button className={classes.button}>Sign Up</button>
          </li>
          <li>
            <button
              className={`${classes.button} ${classes.buttonHighlighted}`}
            >
              Log In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
