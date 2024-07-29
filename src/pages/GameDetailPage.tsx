import { useParams } from 'react-router-dom';
import useGameHook from '../hooks/game-hook';
import { SimpleGrid,GridItem, Heading, Spinner } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import GameScreenshots from '../components/GameScreenshots';
function GameDetailPage() {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGameHook(slug!);

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;

	return (
		<>
			<SimpleGrid columns={{base:1, md:2, lg:2}} >
				<GridItem>
					<Heading>{game.name}</Heading>
					<ExpandableText>{game.description_raw}</ExpandableText>
					<GameAttributes game={game} />
				</GridItem>
				<GridItem>
					<GameTrailer gameId={game.id} />
					<GameScreenshots gameId={game.id} />
				</GridItem>
			</SimpleGrid>
		</>
	);
}

export default GameDetailPage;
