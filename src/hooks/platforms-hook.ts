import { useQuery } from '@tanstack/react-query';
import { FetchResponse, Platform } from '../data';
// import useHook from './generic-hook';
import httpClient from '../services/http-client';
import platforms from '../data/platforms';

const usePlaformsHook = () => useQuery({
  queryKey: ["plaforms"],
  queryFn: () => httpClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => res.data),
  // staleTime: 24 * 3600 * 1000
  initialData: {
    count: platforms.length,
    results: platforms,
    next: ""
  }
})


// const usePlaformsHook = () => useHook<Platform>("/platforms/lists/parents")
// const usePlaformsHook = () => useHook<Platform>("/platforms/lists/parents")
// const usePlaformsHook = () => ({ data: platforms, isLoading: true, error: null });
export default usePlaformsHook;
