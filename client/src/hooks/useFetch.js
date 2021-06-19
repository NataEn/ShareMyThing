import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [status, setStatus] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus("loading");
      const response = await axios.get(url).catch((err) => console.error(err));
      setData(response.data);
      setStatus("loaded");
    };

    fetchData();
  }, [url]);

  return [status, data];
}
