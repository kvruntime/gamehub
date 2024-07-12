import { Platform } from "../data";
import { GameQuery } from "../layouts/AppLayout";
import useHook from "./generic-hook";



export interface Game {
  id: number;
  name: string;
  background_image: string,
  parent_platforms: { platform: Platform }[]
  metacritic: number
}



const useGamesHook = (gameQuery:GameQuery|null) => useHook<Game>("/games", { params: { genres: gameQuery?.genre?.id, platforms: gameQuery?.platform?.id } },
  [gameQuery?.genre?.id, gameQuery?.platform?.id])
export default useGamesHook;
