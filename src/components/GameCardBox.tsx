import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}
export default function GameCardBox({ children }: Props) {
	return (
		<>
			<Box _hover={{
				transform: "scale(1.03)",
				transition: "transform .1s ease-in"
			}}  borderRadius={'10px'} overflow={'hidden'}>{children}</Box>
		</>
	);
}
