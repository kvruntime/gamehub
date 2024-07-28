import { FetchResponse, Game, GameQuery } from '../data';
import RawgClient from '../services/rawg-client';

import {  useInfiniteQuery } from "@tanstack/react-query"




// const useGamesHook = (gameQuery: GameQuery | null) =>
// 	useHook<Game>(
// 		'/games',
// 		{
// 			params: {
// 				genres: gameQuery?.genre?.id,
// 				platforms: gameQuery?.platform?.id,
// 				ordering: gameQuery?.sortOrder,
// 				search: gameQuery?.searchGame,
// 			},
// 		},
// 		[
// 			gameQuery?.genre?.id,
// 			gameQuery?.platform?.id,
// 			gameQuery?.sortOrder,
// 			gameQuery?.searchGame,
// 		],
// 	);
const rawgClient = new RawgClient<Game>("/games")

// const useGamesHook = (gameQuery: GameQuery | null) => useQuery<FetchResponse<Game>, Error, FetchResponse<Game>>({
// 	queryKey: ["games", gameQuery],
// 	queryFn: () => rawgClient.getAll(
// 		{
// 			params: {
// 				genres: gameQuery?.genre?.id,
// 				platforms: gameQuery?.platform?.id,
// 				ordering: gameQuery?.sortOrder,
// 				search: gameQuery?.searchGame,
// 			},
// 		},
// 	)
// })

const useGamesHook = (gameQuery: GameQuery | null) => useInfiniteQuery<FetchResponse<Game>, Error>({
	queryKey: ["game-query", gameQuery],
	initialPageParam: 1,
	queryFn: ({ pageParam }) => rawgClient.getAll({
		params: {
			genres: gameQuery?.genreId,
			platforms: gameQuery?.platformId,
			ordering: gameQuery?.sortOrder,
			search: gameQuery?.searchGame,
			page: pageParam
		}
	}),
	getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length : undefined
})



export default useGamesHook;
