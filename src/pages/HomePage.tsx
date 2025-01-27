import { Show, GridItem, Box, Flex, Grid } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlaformSelector';
import SortSelector from '../components/SortSelector';
import GameHeading from '../components/GameHeading';
import useGameQueryStore from '../store';

export default function HomePage() {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);
	return (
		<>
			<Grid
				templateAreas={{
					base: `"main"`,
					lg: `"aside main"`,
				}}
				templateColumns={{
					base: '1fr',
					lg: '200px 1fr',
				}}
			>
				<Show above="lg">
					<GridItem area={'aside'} padding={5}>
						<GenreList />
					</GridItem>
				</Show>
				<GridItem area={'main'}>
					<Box paddingLeft={3}>
						<GameHeading />
						<Flex marginBottom={5}>
							<Box marginRight={5}>
								<PlatformSelector />
							</Box>
							<SortSelector />
						</Flex>
					</Box>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</>
	);
}
