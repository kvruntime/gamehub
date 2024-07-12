import {
	HStack,
	List,
	ListItem,
	Image,
	Spinner,
	Button,
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
			<List paddingY={'10px'}>
				{data.map((g) => (
					<ListItem key={g.id} marginY={2}>
						<HStack>
							<Image
								boxSize={'32px'}
								src={getCroppedImageUrl(g.image_background)}
								borderRadius={8}
							/>
							<Button
								fontWeight={selectedGenre?.id === g?.id ? 'bold' : 'normal'}
								variant={'link'}
								fontSize={'lg'}
								textAlign={'left'}
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
