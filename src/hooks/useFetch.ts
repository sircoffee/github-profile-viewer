import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export function useFetch<T = unknown>(url: string, opt: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<T | null>(null);

  useEffect(() => {
    axios
      .get(url, opt)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(true);
      });
  }, []);

  return { data, isFetching, error };
}
