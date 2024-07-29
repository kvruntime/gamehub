import { Heading, Text } from '@chakra-ui/react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import NavBar from "../components/NavBar"

export default function ErrorPage() {
	const error = useRouteError();
	return (
    <>
      <NavBar/>
			<Heading>Oops...</Heading>
			<Text>
				{isRouteErrorResponse(error)
					? 'This page does not exists'
					: 'An excepted error occured!'}
			</Text>
		</>
	);
}

