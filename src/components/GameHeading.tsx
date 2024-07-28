import { Box, Heading } from '@chakra-ui/react';
import { GameQuery } from '../data';
import useGenresHook from '../hooks/genres-hook';
import usePlaformsHook from '../hooks/platforms-hook';

interface Props {
	gameQuery: GameQuery;
}
export default function GameHeading({ gameQuery }: Props) {
	const { data: genres } = useGenresHook();
	const genre = genres.find((g) => g.id === gameQuery.genreId);
	const { data: platforms } = usePlaformsHook();
	const platform = platforms.results.find((p) => p.id === gameQuery.platformId);

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
