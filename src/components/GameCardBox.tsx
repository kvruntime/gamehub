import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}
export default function GameCardBox({ children }: Props) {
	return (
		<>
			<Box width={"300px"} borderRadius={'10px'} overflow={'hidden'}>{children}</Box>
		</>
	);
}
