import { Platform } from '../data';
import platforms from '../data/platforms';
import useHook from './generic-hook';

const usePlaformsHook = () => useHook<Platform>("/platforms/lists/parents")
// const usePlaformsHook = () => ({ data: platforms, isLoading: true, error: null });
export default usePlaformsHook;
