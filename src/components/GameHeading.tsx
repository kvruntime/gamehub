import { Box, Heading } from '@chakra-ui/react';
import { GameQuery } from '../data';
import useGenreHook from '../hooks/genre-hook';
import usePlaformHook from '../hooks/platform-hook';

interface Props {
	gameQuery: GameQuery;
}
export default function GameHeading({ gameQuery }: Props) {
	const genre = useGenreHook(gameQuery.genreId)
	const platform = usePlaformHook(gameQuery.platformId)

	const heading = `${platform?.name || ''} ${
		genre?.name || ''
	} Games`;
	return (
		<Box marginBottom={5}>
			<Heading as={'h1'} fontWeight={'5xl'} marginY={5}>
				{heading}
			</Heading>
		</Box>
	);
}
