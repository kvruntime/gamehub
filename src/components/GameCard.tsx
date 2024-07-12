import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import { Game } from '../hooks/games-hook';
import PlatformIcon from './PlatformIcon';

interface Props {
	game: Game;
}
export default function GameCard({ game }: Props) {
	return (
		<>
			<Card borderRadius={'10px'} overflow={'hidden'}>
				<Image src={game.background_image} />
				<CardBody>
					<Heading fontSize={'2xl'}>{game.name}</Heading>
					<PlatformIcon
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
				</CardBody>
			</Card>
		</>
	);
}
