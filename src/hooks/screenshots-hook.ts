import { Screenshot } from '../data';
import RawgClient from '../services/rawg-client';

import { useQuery } from "@tanstack/react-query"


const useGameScreenshots = (gameId: number) => {
  const rawgClient = new RawgClient<Screenshot>(`/games/${gameId}/screenshots`)

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: ()=>rawgClient.getAll()
  })
}




export default useGameScreenshots;
