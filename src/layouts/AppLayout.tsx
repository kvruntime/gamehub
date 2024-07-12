import { Grid, GridItem, Show } from '@chakra-ui/react';

export default function AppLayout() {
	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
			>
				<GridItem area={'nav'} bg={'red'}>
					Nav
				</GridItem>
				<Show above="lg">
					<GridItem area={'aside'} bg={'gold'}>
						Aside
					</GridItem>
				</Show>
				<GridItem area={'main'} bg={'coral'}>
					Main
				</GridItem>
			</Grid>
		</>
	);
}
