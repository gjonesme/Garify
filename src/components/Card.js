import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";
import useId from "../utils/useId";

const Card = (props) => {
  // const id = useId(props.item.href);
  return (
    <Link to={"/genre/" + props.item.id}>
      <div className={classes.Card}>
        <img src={props.item.icons[0].url} alt={props.item.name}></img>
        <li>{props.item.name}</li>
      </div>
    </Link>
  );
};

export default Card;
