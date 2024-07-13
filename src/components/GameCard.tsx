import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '../hooks/games-hook';
import PlatformIcon from './PlatformIcon';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	game: Game;
}
export default function GameCard({ game }: Props) {
	return (
		<>
			<Card>
				<Image src={getCroppedImageUrl(game.background_image)} />
				<CardBody>
					<HStack justifyContent={'space-between'} marginBottom={3}>
						<PlatformIcon
							platforms={game.parent_platforms.map((p) => p.platform)}
						/>
						<CriticScore score={game.metacritic} />
					</HStack>
					<Heading fontSize={'2xl'}>{game.name}</Heading>
				</CardBody>
			</Card>
		</>
	);
}
