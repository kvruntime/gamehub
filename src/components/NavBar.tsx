import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
export function NavBar() {
	return (
		<>
			<HStack justifyContent={'space-between'} padding={"10px"}>
				<div>
					<Image src={logo} boxSize={'60px'} />
					<Text>NavBar</Text>
				</div>
				<ColorModeSwitch />
			</HStack>
		</>
	);
}
