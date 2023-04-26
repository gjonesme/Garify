import logo from "./logo.svg";
import config from "./config/config";
import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";
import Buffer from "buffer";
import qs from "qs";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import SearchPage from "./components/SearchPage";
import Home from "./components/Home";
import Library from "./icons/Library";
import SearchRouteTest from "./components/SearchRouteTest";
import axios from "axios";
import ArtistPage from "./components/ArtistPage";

function App() {
  // const [categories, setCategories] = useState({});
  const [accessToken, setAccessToken] = useState("");
  const [query, setQuery] = useState("");
  const [queryResults, setQueryResults] = useState("");
  const [link, setLink] = useState("");

  const client_id = config.client_id;
  const client_secret = config.client_secret;

  let buf = Buffer.Buffer.from(client_id + ":" + client_secret).toString(
    "base64"
  );

  let location = useLocation();

  useEffect(() => {
    const data = { grant_type: "client_credentials" };
    axios({
      method: "post",
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization: `Basic ${buf}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    })
      .then(function (response) {
        setAccessToken(response.data.access_token);
        console.log("access token: ");
        console.log(response.data.access_token);
        // return access_token;
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios({
      url: "https://api.spotify.com/v1/browse/categories",
      method: "get",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        country: "US",
        limit: 50,
        locale: "en_US",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken]);

  return (
    <div className="App">
      <div className="SideBar">
        <SideBar />
      </div>

      <div className="RightContainer">
        <TopBar
          accessToken={accessToken}
          location={location}
          setQuery={setQuery}
          setQueryResults={setQueryResults}
        />
        <Routes>
          <Route path="/" element={<Home accessToken={accessToken} />} />
          <Route
            path="search"
            element={
              <SearchPage
                accessToken={accessToken}
                query={query}
                queryResults={queryResults}
                setLink={setLink}
              />
            }
          ></Route>
          <Route
            path="artist/:artistId"
            element={<ArtistPage accessToken={accessToken} link={link} />}
          />
          <Route path="playlist/:playlistId" element={<ArtistPage />} />

          <Route path="collections" element={<Library />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
