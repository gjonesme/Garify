import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <img src={props.item.icons[0].url} alt={props.item.name}></img>
      <li>{props.item.name}</li>
    </div>
  );
};

export default Card;
