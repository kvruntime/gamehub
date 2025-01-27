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


export default usePlaformsHook;
