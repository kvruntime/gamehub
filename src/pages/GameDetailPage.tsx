import { useParams } from 'react-router-dom';
import useGameHook from '../hooks/game-hook';
import { GridItem, Heading, Spinner } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
function GameDetailPage() {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGameHook(slug!);

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;

	return (
		<>
			<GridItem area={"main"}>
			<Heading>{game.name}</Heading>
			<ExpandableText>{game.description_raw}</ExpandableText>
			<GameAttributes game={game} />
			<GameTrailer gameId={game.id}/>
			</GridItem>
		</>
	);
}

export default GameDetailPage;
