import { Genre } from "../data";
import useHook from "./generic-hook";

// export interface Platform {
//   id: number,
//   name: string,
//   slug: string
// }




const useGenresHook = () => useHook<Genre>("/genres");
export default useGenresHook;
