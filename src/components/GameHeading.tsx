import { Box, Heading } from '@chakra-ui/react';
import useGenreHook from '../hooks/genre-hook';
import usePlaformHook from '../hooks/platform-hook';
import useGameQueryStore from '../store';


export default function GameHeading() {
	const gameQuery=useGameQueryStore(s=>s.gameQuery)
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
