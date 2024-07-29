import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlaformsHook from '../hooks/platforms-hook';
import useGameQueryStore from '../store';

// interface Props {
// 	// onPlaformSelectedId: (platformId?:number) => void;
// 	selectedPlatformId?: number;
// }

export default function PlatformSelector() {
	const { data } = usePlaformsHook();
	const gameQuery = useGameQueryStore(s=>s.gameQuery)
	const platforms = data?.results
	const selectedPlatform = platforms.find(p => p.id === gameQuery.platformId)
	const setPlatformId = useGameQueryStore(s=>s.setPlatformId)
	

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
							onClick={() => setPlatformId(platform.id)}
						>
							{platform.name}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</>
	);
}
