import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import HomePage from '../pages/HomePage';
import GameDetailPage from '../pages/GameDetailPage';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		errorElement: <ErrorPage/>,
		children: [
			{ path: '', element: <HomePage /> },
			{ path: 'games/:slug', element: <GameDetailPage /> },
		],
	},
]);

export default router;
