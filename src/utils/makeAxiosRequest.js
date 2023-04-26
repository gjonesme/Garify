import react, { useEffect } from "react";
import axios from "axios";

const makeAxiosRequest = (endpoint, accessToken) => {
  const controller = new AbortController();
  axios({
    url: `${endpoint}`,
    method: "get",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      // country: "US",
      // limit: 50,
    },
  })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  controller.abort();
};
