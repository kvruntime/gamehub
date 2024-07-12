import { Genre, Platform } from "../data";
import useHook from "./generic-hook";



export interface Game {
  id: number;
  name: string;
  background_image: string,
  parent_platforms: { platform: Platform }[]
  metacritic: number
}



const useGamesHook = (selectedGenre: Genre | null) => useHook<Game>("/games", { params: { genres: selectedGenre?.id } }, [selectedGenre?.id])
export default useGamesHook;
