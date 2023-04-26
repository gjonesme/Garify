import React from "react";
import { Outlet, useParams } from "react-router-dom";

const SearchRouteTest = () => {
  let params = useParams();
  return (
    <>
      <Outlet />
      <h1>Search Route : {params}</h1>
    </>
  );
};

export default SearchRouteTest;
