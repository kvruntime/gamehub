import { Game } from '../data';
import { Text, SimpleGrid, Box } from '@chakra-ui/react';
import DefinitionItem from './DefinitionItem';
import CriticScore from './CriticScore';

interface Props {
	game: Game;
}
export default function GameAttributes({ game }: Props) {
	return (
		<SimpleGrid as="dl" width={"50%"} columns={{base:2, md:4, lg:6}} minChildWidth={"20%"}>
			<Box>
				<DefinitionItem term="platforms">
					{game.parent_platforms?.map(({ platform }) => (
						<Text key={platform.id}>{platform.name}</Text>
					))}
				</DefinitionItem>
			</Box>
			<Box>
				<DefinitionItem term="genres">
					{game.genres?.map((genre) => (
						<Text key={genre.id}>{genre.name}</Text>
					))}
				</DefinitionItem>
			</Box>
			<Box>
				<DefinitionItem term="score">
					<CriticScore score={game.metacritic} />
				</DefinitionItem>
			</Box>
			<Box>
				<DefinitionItem term="publishers">
					{game.publishers?.map((p)=><Text key={p.id}>{p.name}</Text>)}
				</DefinitionItem>
			</Box>
		</SimpleGrid>
	);
}
