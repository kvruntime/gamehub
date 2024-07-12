import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import { NavBar } from '../components/NavBar';
import { Genre, Platform } from '../data';
import PlatformSelector from '../components/PlaformSelector';

interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
}

export default function AppLayout() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
		null,
	);

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
						<GenreList
							onSelectedGrene={(genre) => setGameQuery({ ...gameQuery, genre })}
							selectedGenre={gameQuery?.genre}
						/>
					</GridItem>
				</Show>
				<GridItem area={'main'}>
					<PlatformSelector
						onPlaformSelected={(platform) =>
							setGameQuery({ ...gameQuery, platform })
						}
						selectedPlatform={selectedPlatform}
					/>
					<GameGrid
						selectedGenre={gameQuery?.genre}
						selectedPlatform={gameQuery?.platform}
					/>
				</GridItem>
			</Grid>
		</>
	);
}
