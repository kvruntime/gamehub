import React from 'react';
import {
	ChakraProvider,
	ColorModeScript,
} from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import './index.css';
import theme from './theme.ts';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { RouterProvider } from "react-router-dom"
import router from "./routing/index.tsx"

const queryClient = new QueryClient({})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<QueryClientProvider client={queryClient}>
				{/* <App /> */}
				<RouterProvider router={router}/>
				<ReactQueryDevtools />	
			</QueryClientProvider >
		</ChakraProvider>
	</React.StrictMode >,
);
