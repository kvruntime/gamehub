import { useEffect, useState } from "react";
import httpClient from "../services/http-client";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";
import { FetchResponse } from "../data";






const useHook = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isloading, setLoading] = useState(false);
  const controller = new AbortController();

  useEffect(() => {
    const fetchGenre = async () => {
      setLoading(true)
      try {
        const response = await httpClient.get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig
        });
        setData(response.data.results);

        return () => controller.abort();
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
      } finally {
        setLoading(false)
      }
    };
    fetchGenre();
  }, deps ? [...deps] : []);

  return { data, error, isloading }
}

export default useHook;
