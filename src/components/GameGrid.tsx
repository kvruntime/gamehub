import { Text, SimpleGrid } from '@chakra-ui/react';
import useGamesHook from '../hooks/games-hook';
import GameCard from './GameCard';

export default function GameGrid() {
	const { games, error } = useGamesHook();
	console.log(error);
	return (
		<>
			{error && <Text>{error}</Text>}
			<div>Game Grid</div>

			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
}
