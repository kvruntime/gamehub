import { Text, SimpleGrid } from '@chakra-ui/react';
import useGamesHook from '../hooks/games-hook';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardBox from './GameCardBox';
import { GameQuery } from '../data';

interface Props {
	gameQuery: GameQuery | null;
}

export default function GameGrid({ gameQuery }: Props) {
	const { data, error, isLoading } = useGamesHook(
		// selectedGenre,
		// selectedPlatform,
		gameQuery,
	);
	const sekeletons = [1, 2, 3, 4, 5];

	if (error) return <Text>{error.message}</Text>;

	return (
		<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
			{isLoading &&
				sekeletons.map((s) => (
					<GameCardBox key={s}>
						<GameCardSkeleton key={s} />
					</GameCardBox>
				))}
			{data?.results.map((game) => (
				<GameCardBox key={game.id}>
					<GameCard key={game.id} game={game} />
				</GameCardBox>
			))}
		</SimpleGrid>
	);
}
