import React, { useEffect, useState } from "react";
import classes from "./ArtistPage.module.css";
import axios from "axios";
import useId from "../utils/useId";
import PopularTracks from "./PopularTracks";
import Discography from "./Discography";
import artistImagePlaceholder from "../icons/user.png";

import TrackCard from "./TrackCard";

const ArtistPage = (props) => {
  const id = useId("artist");
  // console.log(id);
  const [artist, setArtist] = useState();
  const [topTracks, setTopTracks] = useState();
  const [discography, setDiscography] = useState();
  //will return albums, singles, appears_on, and compilations...
  const [artistAlbums, setArtistAlbums] = useState();
  const [artistSingles, setArtistSingles] = useState();
  const [artistCompilations, setArtistCompilations] = useState();
  const [artistAppearsOn, setArtistAppearsOn] = useState();
  const [artistFeatures, setArtistFeatures] = useState();
  const [relatedArtists, setRelatedArtists] = useState();

  const controller = new AbortController();

  useEffect(() => {
    axios({
      url: `https://api.spotify.com/v1/artists/${id}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
      params: {
        market: "US",
        // limit: 50,
      },
      signal: controller.signal,
    })
      .then((res) => {
        // console.log(res);
        setArtist(res.data);
        // setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });

    axios({
      url: `https://api.spotify.com/v1/artists/${id}/top-tracks`,
      method: "get",
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
      params: {
        market: "US",
        // limit: 50,
        // include_groups: "album",
      },
      signal: controller.signal,
    })
      .then((res) => {
        console.log(res);
        setTopTracks(res.data);
        // setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  if (artist && topTracks) {
    const artistImageSource = artist.images[0]
      ? artist.images[0].url
      : artistImagePlaceholder;
    return (
      <div>
        <div className={classes.ArtistBanner}>
          <img className={classes.ArtistImage} src={artistImageSource}></img>
          <h1>{artist.name}</h1>
          {/* <h4>XX monthly listeners</h4> */}
        </div>

        <PopularTracks topTracks={topTracks} />
        {/* <div className={classes.TrackList}>
          {topTracks.tracks.map((track) => (
            <TrackCard track={track} key={track.id} />
          ))}
        </div> */}
        <Discography id={id} accessToken={props.accessToken} />
        {/* <div>
          <h2>Albums</h2>
          <h2>Singles and EPs</h2>
          <h2>Compilations</h2>
        </div> */}
      </div>
    );
  } else {
    return <h2>LOADING</h2>;
  }
};
export default ArtistPage;
