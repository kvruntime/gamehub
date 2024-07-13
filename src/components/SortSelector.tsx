import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	selectedSortOrder: string | null;
}

export default function SortSelector({
	onSelectSortOrder,
	selectedSortOrder,
}: Props) {
	const sortOrders = [
		{ value: '', label: 'Relevance' },
		{ value: 'name', label: 'Name' },
		{ value: '-released', label: 'Release Date' },
		{ value: '-added', label: 'Added' },
		{ value: '-rating', label: 'Average rating' },
		{ value: '-metacritic', label: 'Popularity' },
	];

	const currentSortOrder = sortOrders.find(
		(o) => o.value === selectedSortOrder,
	);

	return (
		<>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					Order by: {currentSortOrder?.label || "Relevante"}
				</MenuButton>
				<MenuList>
					{sortOrders.map((order) => (
						<MenuItem
							key={order.value}
							value={order.value}
							onClick={() => onSelectSortOrder(order.value)}
						>
							{order.label}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</>
	);
}
