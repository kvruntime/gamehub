import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import {Link} from "react-router-dom"
import PlatformIcon from './PlatformIcon';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';
import { Game } from '../data';

interface Props {
	game: Game;
}
export default function GameCard({ game }: Props) {
	return (
		<>
			<Card >
				<Image src={getCroppedImageUrl(game.background_image)} />
				<CardBody>
					<HStack justifyContent={'space-between'} marginBottom={3}>
						{game.parent_platforms?.length > 0 && (
							<PlatformIcon
								platforms={game.parent_platforms.map((p) => p.platform)}
							/>
						)}
						<CriticScore score={game.metacritic} />
					</HStack>
					<Heading fontSize={'2xl'}>
						<Link to={'/games/' + game.slug }> 
						{game.name} <Emoji rating={game.rating_top} />
						</Link>
					</Heading>
				</CardBody>
			</Card>
		</>
	);
}
