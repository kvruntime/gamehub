import { Game, Trailer } from '../data';
import RawgClient from '../services/rawg-client';

import { useQuery } from "@tanstack/react-query"


const useGameTrailer = (gameId: number) => {
  const rawgClient = new RawgClient<Trailer>(`/games/${gameId}/movies`)

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: ()=>rawgClient.getAll()
  })
}




export default useGameTrailer;
