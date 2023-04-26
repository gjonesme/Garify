import React, { useEffect, useState } from "react";
import axios from "axios";

const ArtistPage = (props) => {
  const [artist, setArtist] = useState();
  const [topTracks, setTopTracks] = useState();

  //will return albums, singles, appears_on, and compilations...
  const [artistAlbums, setArtistAlbums] = useState();
  const [artistSingles, setArtistSingles] = useState();
  const [artistCompilations, setArtistCompilations] = useState();
  const [artistAppearsOn, setArtistAppearsOn] = useState();
  const [artistFeatures, setArtistFeatures] = useState();
  const [relatedArtists, setRelatedArtists] = useState();

  useEffect(() => {
    // console.log("ARTIST LINK: " + props.link);
    axios({
      url: `${props.link}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
      params: {
        // country: "US",
        // limit: 50,
      },
    })
      .then((res) => {
        console.log(res);
        setArtist(res.data);
        // setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    // console.log("ARTIST LINK: " + props.link);
    axios({
      url: `${props.link}/top-tracks`,
      method: "get",
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
      params: {
        country: "US",
        // limit: 50,
        include_groups: "album",
      },
    })
      .then((res) => {
        console.log(res);
        setTopTracks(res.data);
        // setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    // console.log("ARTIST LINK: " + props.link);
    axios({
      url: `${props.link}/albums`,
      method: "get",
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
      params: {
        // country: "US",
        // limit: 50,
        include_groups: "album",
      },
    })
      .then((res) => {
        console.log(res);
        setArtistAlbums(res.data);
        // setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    // console.log("ARTIST LINK: " + props.link);
    axios({
      url: `${props.link}/albums`,
      method: "get",
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
      params: {
        // country: "US",
        // limit: 50,
        include_groups: "single",
      },
    })
      .then((res) => {
        console.log(res);
        setArtistSingles(res.data);
        // setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    // console.log("ARTIST LINK: " + props.link);
    axios({
      url: `${props.link}/albums`,
      method: "get",
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
      params: {
        // country: "US",
        // limit: 50,
        include_groups: "compilation",
      },
    })
      .then((res) => {
        console.log(res);
        setArtistCompilations(res.data);
        // setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    // console.log("ARTIST LINK: " + props.link);
    axios({
      url: `${props.link}/albums`,
      method: "get",
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
      params: {
        // country: "US",
        // limit: 50,
        include_groups: "appears_on",
      },
    })
      .then((res) => {
        console.log(res);
        setArtistAppearsOn(res.data);
        // setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (artist) {
    return (
      <div>
        <h1>{artist.name}</h1>
        <h4>XX monthly listeners</h4>
        <div>
            <h2>popular tracks</h2>
        </div>
        <div>
            <h2>Popular Releases</h2>
            <h2>Albums</h2>
            <h2>Singles and EPs</h2>
            <h2>Compilations</h2>
        </div>
      </div>
    );
  } else {
    return <h2>LOADING</h2>;
  }
};
export default ArtistPage;
