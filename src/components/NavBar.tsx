import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
export function NavBar() {
	return (
		<>
			<HStack  padding={"10px"}>
				<div>
					<Image src={logo} boxSize={'60px'} />
					<Text>NavBar</Text>
				</div>
				<SearchInput/>
				<ColorModeSwitch />
			</HStack>
		</>
	);
}
