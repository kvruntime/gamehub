import { SimpleGrid , Image} from '@chakra-ui/react';
import useGameScreenshots from '../hooks/screenshots-hook';

interface Props {
	gameId: number;
}
export default function GameScreenshots({ gameId }: Props) {
	const { data, error, isLoading } = useGameScreenshots(gameId);

	if (isLoading) return null;
	if (error) throw error;

	return (
		<>
      <SimpleGrid
        spacing={2}
        marginY={5}
				columns={{
					base: 1,
					md: 2,
				}}
      >
      {data?.results.map(file=> <Image key={file.id} src={file.image}/>)}
      </SimpleGrid>
		</>
	);
}
