import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

interface Props {
	onSearch: (searchText: string) => void;
}

export default function SearchInput({ onSearch }: Props) {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<>
			<form
				method="post"
				onSubmit={(event) => {
					event.preventDefault();
					if (ref.current) onSearch(ref.current.value);
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
