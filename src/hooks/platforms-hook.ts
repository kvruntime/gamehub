import { Platform } from "../data";
import useHook from "./generic-hook";


const usePlaformsHook = () => useHook<Platform>("/platforms/lists/parents")
export default usePlaformsHook