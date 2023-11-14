import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useId(page) {
  let location = useLocation();
  const [id, setId] = useState(null);

  console.log(location);
  console.log(
    location.pathname.substring(
      location.pathname.indexOf(page) + page.length + 1
    )
  );

  useEffect(() => {
    setId(
      location.pathname.substring(
        location.pathname.indexOf(page) + page.length + 1
      )
    );
  }, [location, page]);

  return id;
}
