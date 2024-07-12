import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '../hooks/games-hook';
import PlatformIcon from './PlatformIcon';
import CriticScore from './CriticScore';

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
					<HStack justifyContent={'space-between'}>
						<PlatformIcon
							platforms={game.parent_platforms.map((p) => p.platform)}
						/>
						<CriticScore score={game.metacritic} />
					</HStack>
				</CardBody>
			</Card>
		</>
	);
}
