import { Game, GameQuery } from '../data';

import useHook from './generic-hook';


const useGamesHook = (gameQuery: GameQuery | null) =>
	useHook<Game>(
		'/games',
		{
			params: {
				genres: gameQuery?.genre?.id,
				platforms: gameQuery?.platform?.id,
				ordering: gameQuery?.sortOrder,
				search: gameQuery?.searchGame,
			},
		},
		[
			gameQuery?.genre?.id,
			gameQuery?.platform?.id,
			gameQuery?.sortOrder,
			gameQuery?.searchGame,
		],
	);
export default useGamesHook;
