import { Spinner } from '@chakra-ui/react';
import useGameTrailer from '../hooks/trailer-hook';
interface Props {
	gameId: number;
}
export default function GameTrailer({ gameId }: Props) {
	const { data, error, isLoading } = useGameTrailer(gameId);

	if (isLoading) return <Spinner />;

	if (error) throw error;
	const first = data?.results[0];
	if (!first) return null;

	return (
		<>
			<video src={first.data[480]} poster={first.preview} controls></video>
		</>
	);
}
