import { Platform } from '../data';
import { GameQuery } from '../layouts/AppLayout';
import useHook from './generic-hook';

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

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
