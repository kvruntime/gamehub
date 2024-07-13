import { Box, Heading } from '@chakra-ui/react';
import { GameQuery } from '../data';

interface Props {
	gameQuery: GameQuery;
}
export default function GameHeading({ gameQuery }: Props) {
	const heading = `${gameQuery.platform?.name||''} ${gameQuery.genre?.name||''} Games`;
	return (
		<Box marginBottom={5}>
			<Heading as={'h1'} fontWeight={"5xl"} marginY={5}>{heading}</Heading>
		</Box>
	);
}
