import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import HomePage from '../pages/HomePage';
import GameDetailPage from '../pages/GameDetailPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		errorElement: (
			<div>
				{' '}
				<h1>Ooops...</h1> <p>Error happens!!</p>
			</div>
		),
		children: [
			{ path: '', element: <HomePage /> },
			{ path: 'games/:id', element: <GameDetailPage /> },
		],
	},
]);

export default router;
