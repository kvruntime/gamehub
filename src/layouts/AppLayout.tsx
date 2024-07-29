import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
	return (
		<>
			<Grid marginX={3} marginY={2}
				// templateAreas={{
				// 	base: `"nav" "main"`,
				// 	lg: `"nav nav" " main"`,
				// 	// lg: `"nav nav" "aside main"`,
				// }}
				// templateColumns={{
				// 	base: '1fr',
				// 	lg: '1fr',
				// 	// lg: '200px 1fr',
				// }}
			>
				<GridItem >
					<NavBar />
				</GridItem>
				<Outlet />
			</Grid>
		</>
	);
}
