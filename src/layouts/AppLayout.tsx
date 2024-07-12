import { Grid, GridItem, Show } from '@chakra-ui/react';
import { NavBar } from '../components/NavBar';
import GameGrid from '../components/GameGrid';

export default function AppLayout() {
	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
			>
				<GridItem area={'nav'}>
					<NavBar />
				</GridItem>
				<Show above="lg">
					<GridItem area={'aside'}>Aside</GridItem>
				</Show>
				<GridItem area={'main'}>
					<GameGrid />
				</GridItem>
			</Grid>
		</>
	);
}
