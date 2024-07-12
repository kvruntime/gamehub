import { Text, SimpleGrid } from '@chakra-ui/react';
import useGamesHook from '../hooks/games-hook';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardBox from './GameCardBox';
import { GameQuery } from '../layouts/AppLayout';

interface Props {
	gameQuery: GameQuery| null;
}

export default function GameGrid({ gameQuery }: Props) {
	const { data, error, isloading } = useGamesHook(
		// selectedGenre,
		// selectedPlatform,
		gameQuery
	);
	const sekeletons = [1, 2, 3, 4, 5];
	return (
		<>
			{error && <Text>{error}</Text>}

			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={5}>
				{isloading &&
					sekeletons.map((s) => (
						<GameCardBox key={s}>
							<GameCardSkeleton key={s} />
						</GameCardBox>
					))}
				{data.map((game) => (
					<GameCardBox key={game.id}>
						<GameCard key={game.id} game={game} />
					</GameCardBox>
				))}
			</SimpleGrid>
		</>
	);
}
