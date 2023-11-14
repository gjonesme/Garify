import React from "react";

const FilterButton = (props) => {
  const onClickHandler = (e) => {
    props.setActiveFilter(props.filter);
  };
  const buttonStyle =
    props.activeFilter == props.filter ? activeStyle : inactiveStyle;
  return (
    <button style={buttonStyle} onClick={onClickHandler}>
      {props.filterName}
    </button>
  );
};

const activeStyle = {
  margin: "0px 5px",
  padding: "10px",
  border: "none",
  borderRadius: "20px",
  fontSize: "1em",
  minWidth: "45px",
  backgroundColor: "#fff",
  color: "#000",
};
const inactiveStyle = {
  margin: "0px 5px",
  padding: "10px",
  border: "none",
  borderRadius: "20px",
  fontSize: "1em",
  minWidth: "45px",
  backgroundColor: "#242424",
  color: "#fff",
};

export default FilterButton;
