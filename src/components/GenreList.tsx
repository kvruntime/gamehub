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
import { Genre } from '../data';

interface Props {
	onSelectedGrene: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

export default function GenreList({ onSelectedGrene, selectedGenre }: Props) {
	const { data, isloading, error } = useGenresHook();
	if (error) return null;
	if (isloading) return <Spinner />;
	return (
		<>
			<Heading fontSize={"2xl"} marginBottom={3}>Genres</Heading>
			<List paddingY={'10px'}>
				
				{data.map((g) => (
					<ListItem key={g.id} marginY={2}>
						<HStack>
							<Image
								boxSize={'32px'}
								src={getCroppedImageUrl(g.image_background)}
								borderRadius={8}
								objectFit={"cover"}
							/>
							<Button
								fontWeight={selectedGenre?.id === g?.id ? 'bold' : 'normal'}
								variant={'link'}
								fontSize={'lg'}
								textAlign={'left'}
								whiteSpace={"normal"}
								onClick={() => onSelectedGrene(g)}
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
