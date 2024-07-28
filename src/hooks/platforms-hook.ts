import { useQuery } from '@tanstack/react-query';
import { FetchResponse, Platform } from '../data';
// import useHook from './generic-hook';
import httpClient from '../services/http-client';

const plaformQuery = () => useQuery({
  queryKey: ["plaforms"],
  queryFn: () => httpClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => res.data),
  staleTime: 24 * 3600 * 1000
})


// const usePlaformsHook = () => useHook<Platform>("/platforms/lists/parents")
// const usePlaformsHook = () => useHook<Platform>("/platforms/lists/parents")
// const usePlaformsHook = () => ({ data: platforms, isLoading: true, error: null });
export default plaformQuery;
