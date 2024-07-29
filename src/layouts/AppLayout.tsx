import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import NavBar from '../components/NavBar';
import PlatformSelector from '../components/PlaformSelector';
import SortSelector from '../components/SortSelector';
import GameHeading from '../components/GameHeading';
import useGameQueryStore from '../store';

export default function AppLayout() {
	// const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	const { gameQuery } =
		useGameQueryStore();

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
							// onSelectedGreneId={(genreId) => setGenreId(genreId)}
							selectedGenreId={gameQuery?.genreId}
						/>
					</GridItem>
				</Show>
				<GridItem area={'main'}>
					<Box paddingLeft={3}>
						<GameHeading />
						<Flex marginBottom={5}>
							<Box marginRight={5}>
								<PlatformSelector
									// onPlaformSelectedId={(platformId) =>
									// 	setPlatformId(platformId)
									// }
									// selectedPlatformId={gameQuery?.platformId}
								/>
							</Box>
							<SortSelector
								// selectedSortOrder={gameQuery.sortOrder}
								// onSelectSortOrder={(sortOrder) => setSortOrder(sortOrder)}
							/>
						</Flex>
					</Box>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</>
	);
}
