import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlaformsHook from '../hooks/platforms-hook';

export default function PlatformSelector() {
	const { data } = usePlaformsHook();
	return (
		<>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					Plaforms
				</MenuButton>
				<MenuList>
					{data.map((platform) => (
						<MenuItem key={platform.id}>{platform.name}</MenuItem>
					))}
				</MenuList>
			</Menu>
		</>
	);
}
