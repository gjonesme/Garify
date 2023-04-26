import React from "react";
import classes from "./NavItem.module.css";
// import Home from "../icons/Home";
import Icon from "../icons/Icon";

const NavItem = (props) => {
  // console.log(props.iconName)
  return (
    <li className={classes.NavItem}>
      <Icon iconName = {props.iconName}/>
      {/* <a href={props.link}>{props.label}</a> */}
      <span href={props.link}>{props.label}</span>
    </li>
  );
};

export default NavItem;
