import { Text } from '@chakra-ui/react';
import useGamesHook from '../hooks/games-hook';

export default function GameGrid() {
  const { games, error } = useGamesHook();
  console.log(error)
	return (
		<>
			{error && <Text>{error}</Text>}
			<div>Game Grid</div>
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
}
