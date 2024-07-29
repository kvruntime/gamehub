import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
// interface Props {
// 	onSearch: (searchText: string) => void;
// }
export default function NavBar() {
	return (
		<>
			<HStack padding={'10px'}>
				<Link to={'/'}>
					<Image src={logo} boxSize={'60px'} objectFit={"cover"} />
					<Text>GameHub</Text>
				</Link>
				<SearchInput />
				<ColorModeSwitch />
			</HStack>
		</>
	);
}
