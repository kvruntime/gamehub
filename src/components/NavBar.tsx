import { HStack, Image, Text } from '@chakra-ui/react';
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
				<div>
					<Image src={logo} boxSize={'60px'} />
					<Text>NavBar</Text>
				</div>
				<SearchInput onSearch={onSearch} />
				<ColorModeSwitch />
			</HStack>
		</>
	);
}
