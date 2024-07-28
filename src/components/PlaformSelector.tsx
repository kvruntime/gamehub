import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlaformsHook from '../hooks/platforms-hook';
import { Platform } from '../data';

interface Props {
	onPlaformSelectedId: (platformId?:number) => void;
	selectedPlatformId?: number;
}

export default function PlatformSelector({
	onPlaformSelectedId,
	selectedPlatformId,
}: Props) {
	// const { data } = usePlaformsHook();
	const { data } = usePlaformsHook();
	const platforms = data?.results
	const selectedPlatform = platforms.find(p => p.id===selectedPlatformId)

	if (!data) return <span>Plaforms(?)</span>;

	return (
		<>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					{selectedPlatform?.name || 'Platforms'}
				</MenuButton>
				<MenuList>
					{platforms?.map((platform) => (
						<MenuItem
							key={platform.id}
							onClick={() => onPlaformSelectedId(platform.id)}
						>
							{platform.name}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</>
	);
}
