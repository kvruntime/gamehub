import { useQuery } from '@tanstack/react-query';
// import genres from '../data/genres';
import httpClient from '../services/http-client';
import { FetchResponse, Genre } from '../data';

// const useGenresHook = () => useHook<Genre>("/genres");
const useGenresHook = () => useQuery({
  queryKey: ["genres"],
  queryFn: () => httpClient.get<FetchResponse<Genre>>("/genres").then(res => res.data)
})
// const useGenresHook = () => ({ data: genres, error: null, isloading: false });
export default useGenresHook;
