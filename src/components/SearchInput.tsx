import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import useGameQueryStore from '../store';

// interface Props {
// 	onSearch: (searchText: string) => void;
// }

export default function SearchInput() {
	const ref = useRef<HTMLInputElement>(null);
	
	const setSearchText =useGameQueryStore(s=>s.setSearchText)

	return (
		<>
			<form
				method="post"
				onSubmit={(event) => {
					event.preventDefault();
					// if (ref.current) onSearch(ref.current.value);
					if (ref.current) setSearchText(ref.current.value);
				}}
			>
				<InputGroup>
					<InputLeftElement children={<FaSearch />} />
					<Input ref={ref} placeholder="Search a game" borderRadius={20} />
				</InputGroup>
			</form>
		</>
	);
}
