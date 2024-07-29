import {
	HStack,
	List,
	ListItem,
	Image,
	Spinner,
	Button,
	Heading,
} from '@chakra-ui/react';
import useGenresHook from '../hooks/genres-hook';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

interface Props {
	// onSelectedGreneId: (genreId: number) => void;
	selectedGenreId?: number;
}

export default function GenreList({
	// onSelectedGreneId,
	selectedGenreId,
}: Props) {
	const { data, isLoading, error } = useGenresHook();
	const setGenreId=useGameQueryStore(s=>s.setGenreId)
	if (error) return null;
	if (isLoading) return <Spinner />;


	return (
		<>
			<Heading fontSize={'2xl'} marginBottom={3}>
				Genres
			</Heading>
			<List paddingY={'10px'}>
				{data?.results.map((g) => (
					<ListItem key={g.id} marginY={2}>
						<HStack>
							<Image
								boxSize={'32px'}
								src={getCroppedImageUrl(g.image_background)}
								borderRadius={8}
								objectFit={'cover'}
							/>
							<Button
								fontWeight={selectedGenreId === g?.id ? 'bold' : 'normal'}
								variant={'link'}
								fontSize={'lg'}
								textAlign={'left'}
								whiteSpace={'normal'}
								onClick={() => setGenreId(g.id)}
							>
								{g.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
}
