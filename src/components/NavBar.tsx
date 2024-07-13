import { Box, HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
interface Props {
	onSearch: (searchText: string) => void;
}
export default function NavBar({ onSearch }: Props) {
	return (
		<>
			<HStack padding={'10px'}>
				<Box >
					<Image src={logo} boxSize={'60px'} />
					<Text>GameHub</Text>
				</Box>
				<SearchInput onSearch={onSearch} />
				<ColorModeSwitch />
			</HStack>
		</>
	);
}
