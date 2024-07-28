import { FetchResponse, Game, GameQuery } from '../data';
import RawgClient from '../services/rawg-client';

import { useQuery } from "@tanstack/react-query"




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
const useGamesHook = (gameQuery: GameQuery | null) => useQuery<FetchResponse<Game>, Error, FetchResponse<Game>>({
	queryKey: ["games"],
	queryFn: () => rawgClient.getAll({
		params: {
			genres: gameQuery?.genre?.id,
			platforms: gameQuery?.platform?.id,
			ordering: gameQuery?.sortOrder,
			search: gameQuery?.searchGame,
		}
	},

	)
})
// const useGamesHook = (gameQuery: GameQuery | null) => useQuery<FetchResponse<Game>, Error, FetchResponse<Game>>({
// 	queryKey: ["games", gameQuery],
// 	queryFn: () => httpClient.get<FetchResponse<Game>>("/games",
// 		{
// 			params: {
// 				genres: gameQuery?.genre?.id,
// 				platforms: gameQuery?.platform?.id,
// 				ordering: gameQuery?.sortOrder,
// 				search: gameQuery?.searchGame,
// 			},
// 		},
// 	).then(res => res.data)
// })
export default useGamesHook;
