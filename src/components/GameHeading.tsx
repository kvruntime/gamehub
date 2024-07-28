import { Box, Heading } from '@chakra-ui/react';
import { GameQuery } from '../data';
import useGenresHook from '../hooks/genres-hook';

interface Props {
	gameQuery: GameQuery;
}
export default function GameHeading({ gameQuery }: Props) {
	const {data} = useGenresHook();
	const genre = data.find(g => g.id === gameQuery.genreId)
	
	const heading = `${gameQuery.platform?.name||''} ${genre?.name || ''} Games`;
	return (
		<Box marginBottom={5}>
			<Heading as={'h1'} fontWeight={"5xl"} marginY={5}>{heading}</Heading>
		</Box>
	);
}
