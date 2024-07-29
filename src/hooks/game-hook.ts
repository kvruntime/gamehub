import { Game } from '../data';
import RawgClient from '../services/rawg-client';

import { useQuery } from "@tanstack/react-query"

const rawgClient = new RawgClient<Game>("/games")

const useGameHook = (slug: string) => useQuery<Game, Error>({
  queryKey: ["games", slug],
  queryFn: () => rawgClient.get(slug)
})

export default useGameHook;
