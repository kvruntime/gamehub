import { Platform } from '../data';
import useHook from './generic-hook';

const usePlaformsHook = () => useHook<Platform>("/platforms/lists/parents")
// const usePlaformsHook = () => ({ data: platforms, isLoading: true, error: null });
export default usePlaformsHook;
