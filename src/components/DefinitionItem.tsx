import { Box, GridItem, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
	term: string;
	children: ReactNode | ReactNode[];
}
export default function DefinitionItem({ term, children }: Props) {
	return (
		<>
			<GridItem area={'main'}>
				<Box marginY={5}>
					<Heading as={'dt'} fontSize={'md'} color={'gray.600'}>
						{term}
					</Heading>
					<dd>{children}</dd>
				</Box>
			</GridItem>
		</>
	);
}
