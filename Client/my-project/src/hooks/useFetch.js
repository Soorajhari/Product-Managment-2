import React, { useState, useEffect } from "react";
import instance from "../utils/axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await instance.get(url);
      console.log(response);
      setData(response.data.data);
    } catch (error) {
      console.log(error.message);
      setError(response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    data,
    error,
  };
};

export default useFetch;
