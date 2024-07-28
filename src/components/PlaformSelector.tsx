import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlaformsHook from '../hooks/platforms-hook';
import { Platform } from '../data';

interface Props {
	onPlaformSelected: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

export default function PlatformSelector({
	onPlaformSelected,
	selectedPlatform,
}: Props) {
	// const { data } = usePlaformsHook();
	const { data } = usePlaformsHook();
	const plaforms=data?.results
	if (!data) return <span>Plaforms(?)</span>;

	return (
		<>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					{selectedPlatform?.name || 'Platforms'}
				</MenuButton>
				<MenuList>
					{plaforms?.map((platform) => (
						<MenuItem
							key={platform.id}
							onClick={() => onPlaformSelected(platform)}
						>
							{platform.name}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</>
	);
}
