import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

export default function ColorModeSwitch() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<HStack >
        <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}
        colorScheme='green'/>
				<Text>{colorMode === 'dark' ? 'Light' : 'Dark'} Mode</Text>
			</HStack>
		</>
	);
}
