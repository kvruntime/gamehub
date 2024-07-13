import genres from '../data/genres';

// const useGenresHook = () => useHook<Genre>("/genres");
const useGenresHook = () => ({ data: genres, error: null, isloading: false });
export default useGenresHook;
