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
import SearchResults from "./components/SearchResults";
import Home from "./components/Home";
import Library from "./icons/Library";
import SearchRouteTest from "./components/SearchRouteTest";
import axios from "axios";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import PlaylistPage from "./components/PlaylistPage";
import GenrePage from "./components/GenrePage";

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
        // return access_token;
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div className="SideBar">
        <SideBar setQuery={setQuery} />
      </div>

      <div className="RightContainer">
        <TopBar
          accessToken={accessToken}
          location={location}
          query={query}
          setQuery={setQuery}
          setQueryResults={setQueryResults}
          setLink={setLink}
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
            path="search/:queryId"
            element={
              <SearchResults
                accessToken={accessToken}
                queryResults={queryResults}
                setLink={setLink}
              />
            }
          ></Route>
          <Route
            path="artist/:artistId"
            element={<ArtistPage accessToken={accessToken} link={link} />}
          />
          <Route
            path="album/:albumId"
            element={<AlbumPage accessToken={accessToken} link={link} />}
          />
          <Route
            path="playlist/:playlistId"
            element={<PlaylistPage accessToken={accessToken} link={link} />}
          />
          <Route
            path="genre/:playlistId"
            element={<GenrePage accessToken={accessToken} link={link} />}
          />

          <Route path="collections" element={<Library />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
