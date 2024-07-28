import {
	Text,
	Button,
	SimpleGrid,
	Alert,
	AlertIcon,
	AlertDescription,
	AlertTitle,
} from '@chakra-ui/react';
import useGamesHook from '../hooks/games-hook';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardBox from './GameCardBox';
import { GameQuery } from '../data';
import React from 'react';

interface Props {
	gameQuery: GameQuery | null;
}

export default function GameGrid({ gameQuery }: Props) {
	const {
		data,
		error,
		isLoading,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useGamesHook(gameQuery);
	const sekeletons = [1, 2, 3, 4, 5];

	if (error)
		return (
			<Alert>
				<AlertIcon />
				<AlertTitle>{error.name}</AlertTitle>
				<AlertDescription>{error.message}</AlertDescription>
			</Alert>
		);

	return (
		<>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
				{isLoading &&
					sekeletons.map((s) => (
						<GameCardBox key={s}>
							<GameCardSkeleton key={s} />
						</GameCardBox>
					))}
				{data?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.results.map((game) => (
							<GameCardBox key={game.id}>
								<GameCard key={game.id} game={game} />
							</GameCardBox>
						))}
					</React.Fragment>
				))}
				{/* {data?.results.map((game) => (
				<GameCardBox key={game.id}>
					<GameCard key={game.id} game={game} />
				</GameCardBox>
			))} */}
			</SimpleGrid>
			{hasNextPage && (
				<Button marginY={10} padding={4} onClick={() => fetchNextPage()}>
					{isFetchingNextPage ? 'Loading...' : 'Load More'}
				</Button>
			)}
		</>
	);
}
