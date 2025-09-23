import { useEffect, useState, useRef } from "react";
let ref;
export const useJsonFetch = () => {
  const [jsondata, setJsondata] = useState({});

  const getJsondata = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await resp.json();
    setJsondata(data);
  };
  useEffect(() => {
    getJsondata();
  }, []);
  return {
    jsondata,
  };
};

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const getDetails = async () => {
    setLoading(true);
    const resp = await fetch(url);
    const details = await resp.json();
    setData(details);
    setLoading(false);
  };
  useEffect(() => {
    getDetails();
  }, [url]); //if dependency array is empty it will run only once but if we give it url value it will run every time url changes
  return {
    data,
    loading,
  };
};

export const usePrev = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export const useDebounce = (fetch) => {
  ref = useRef();
  const func = () => {
    clearTimeout(ref.current);
    ref.current = setTimeout(fetch, 500);
  };
  return func;
};
