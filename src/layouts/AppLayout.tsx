import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import NavBar from '../components/NavBar';
import { GameQuery } from '../data';
import PlatformSelector from '../components/PlaformSelector';
import SortSelector from '../components/SortSelector';
import GameHeading from '../components/GameHeading';

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
							onSelectedGreneId={(genreId) => setGameQuery({ ...gameQuery, genreId: genreId })}
							selectedGenreId={gameQuery?.genreId}
						/>
					</GridItem>
				</Show>
				<GridItem area={'main'}>
					<Box paddingLeft={3}>
						<GameHeading gameQuery={gameQuery} />
						<Flex marginBottom={5}>
							<Box marginRight={5}>
								<PlatformSelector
									onPlaformSelectedId={(platformId) =>
										setGameQuery({ ...gameQuery, platformId: platformId })
									}
									selectedPlatformId={gameQuery?.platformId}
								/>
							</Box>
							<SortSelector
								selectedSortOrder={gameQuery.sortOrder}
								onSelectSortOrder={(sortOrder) =>
									setGameQuery({ ...gameQuery, sortOrder })
								}
							/>
						</Flex>
					</Box>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</>
	);
}
