import { Game } from '../data';
import { Text, SimpleGrid } from '@chakra-ui/react';
import DefinitionItem from './DefinitionItem';
import CriticScore from './CriticScore';

interface Props {
	game: Game;
}
export default function GameAttributes({ game }: Props) {
	return (
		<SimpleGrid as="dl">
			<DefinitionItem term="platforms">
				{game.parent_platforms?.map(({ platform }) => (
					<Text key={platform.id}>{platform.name}</Text>
				))}
			</DefinitionItem>
			<DefinitionItem term="genres">
				{game.genres?.map((genre) => (
					<Text key={genre.id}>{genre.name}</Text>
				))}
			</DefinitionItem>
			<DefinitionItem term="score">
				<CriticScore score={game.metacritic} />
			</DefinitionItem>
		</SimpleGrid>
	);
}
