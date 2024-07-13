import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
	return (
		<>
			<InputGroup>
				<InputLeftElement children={<FaSearch />} />
				<Input placeholder="Search a game" borderRadius={20} />
			</InputGroup>
		</>
	);
};
export default SearchInput;
