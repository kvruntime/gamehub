import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import NavBar from '../components/NavBar';
import { Genre, Platform } from '../data';
import PlatformSelector from '../components/PlaformSelector';
import SortSelector from '../components/SortSelector';

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string | null;
	searchGame: string | null;
}

export default function AppLayout() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
					<NavBar
						onSearch={(search) =>
							setGameQuery({ ...gameQuery, searchGame: search })
						}
					/>
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
					<Flex marginBottom={5}>
						<Box marginRight={5}>
							<PlatformSelector
								onPlaformSelected={(platform) =>
									setGameQuery({ ...gameQuery, platform })
								}
								selectedPlatform={gameQuery?.platform}
							/>
						</Box>
						<SortSelector
							selectedSortOrder={gameQuery.sortOrder}
							onSelectSortOrder={(sortOrder) =>
								setGameQuery({ ...gameQuery, sortOrder })
							}
						/>
					</Flex>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</>
	);
}
