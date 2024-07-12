import { Grid, GridItem, Show } from '@chakra-ui/react';
import { NavBar } from '../components/NavBar';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import { useState } from 'react';
import { Genre } from '../data';
import useGamesHook from '../hooks/games-hook';

export default function AppLayout() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	// const { games, error, isloading } = useGamesHook(selectedGenre);

	const updateSelectedGenre = (genre: Genre) => {
		setSelectedGenre(genre);
	};

	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
				templateColumns={{
					base: '1fr',
					lg: '200px 1fr',
				}}
			>
				<GridItem area={'nav'}>
					<NavBar />
				</GridItem>
				<Show above="lg">
					<GridItem area={'aside'} padding={5}>
						<GenreList onSelectedGrene={updateSelectedGenre} />
					</GridItem>
				</Show>
				<GridItem area={'main'}>
					<GameGrid selectedGenre={selectedGenre} />
				</GridItem>
			</Grid>
		</>
	);
}
