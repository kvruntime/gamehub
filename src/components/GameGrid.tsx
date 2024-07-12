import { Text, SimpleGrid } from '@chakra-ui/react';
import useGamesHook from '../hooks/games-hook';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

export default function GameGrid() {
	const { games, error, isloading } = useGamesHook();
	const sekeletons = [1, 2, 3, 4, 5];
	console.log(error);
	return (
		<>
			{error && <Text>{error}</Text>}

			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
				{isloading && sekeletons.map((s) => <GameCardSkeleton key={s} />)}
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
}
