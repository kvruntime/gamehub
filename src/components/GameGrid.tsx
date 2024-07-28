import {
	Text,
	Button,
	SimpleGrid,
	Alert,
	AlertIcon,
	AlertDescription,
	AlertTitle,
	Spinner,
} from '@chakra-ui/react';
import useGamesHook from '../hooks/games-hook';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardBox from './GameCardBox';
import { GameQuery } from '../data';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
	gameQuery: GameQuery | null;
}

export default function GameGrid({ gameQuery }: Props) {
	const { data, error, isLoading, fetchNextPage, hasNextPage } =
		useGamesHook(gameQuery);
	const sekeletons = [1, 2, 3, 4, 5];
	const fetchGameCount =
		data?.pages.reduce((total, page) => page.results.length + total, 0) || 0;

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
			<InfiniteScroll
				dataLength={fetchGameCount}
				hasMore={!!hasNextPage}
				next={fetchNextPage}
				loader={<Spinner />}
			>
				<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
					{isLoading &&
						sekeletons.map((s) => (
							<GameCardBox key={s}>
								<GameCardSkeleton key={s} />
							</GameCardBox>
						))}
					{data?.pages &&
						data?.pages?.length > 0 &&
						data?.pages.map((page, index) => (
							<React.Fragment key={index}>
								{page.results.map((game) => (
									<GameCardBox key={game.id}>
										<GameCard key={game.id} game={game} />
									</GameCardBox>
								))}
							</React.Fragment>
						))}
				</SimpleGrid>
			</InfiniteScroll>
		</>
	);
}
