import { useEffect, useState } from "react";
import httpClient from "../services/http-client";
import { AxiosError, CanceledError } from "axios";

export interface Platform {
  id: number,
  name: string,
  slug: string
}

export interface Genre {
  id: number;
  name: string;
}
interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenresHook = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isloading, setLoading] = useState(false);
  const controller = new AbortController();

  useEffect(() => {
    const fetchGenre = async () => {
      setLoading(true)
      try {
        const response = await httpClient.get<FetchGenreResponse>('/genres', { signal: controller.signal });
        setGenres(response.data.results);

        return () => controller.abort();
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
      } finally {
        setLoading(false)
      }
    };
    fetchGenre();
  }, []);

  return { genres, error , isloading}
}

export default useGenresHook;
