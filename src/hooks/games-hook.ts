import { useEffect, useState } from "react";
import httpClient from "../services/http-client";
import { AxiosError, CanceledError } from "axios";

export interface Platform {
  id: number,
  name: string,
  slug: string
}

export interface Game {
  id: number;
  name: string;
  background_image: string,
  parent_platforms: { platform: Platform }[]
  metacritic: number
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGamesHook = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const controller = new AbortController();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await httpClient.get<FetchGamesResponse>('/games', { signal: controller.signal });
        setGames(response.data.results);

        return () => controller.abort();
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
      }
    };
    fetchGames();
  }, []);

  return { games, error }
}

export default useGamesHook;
