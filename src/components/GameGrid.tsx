import { Text, SimpleGrid } from '@chakra-ui/react';
import useGamesHook from '../hooks/games-hook';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardBox from './GameCardBox';
import { Genre } from '../data';

interface Props {
	selectedGenre: Genre | null;
}

export default function GameGrid({ selectedGenre }: Props) {
	const { data, error, isloading } = useGamesHook(selectedGenre);
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
