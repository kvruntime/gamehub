import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

export default function ColorModeSwitch() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<HStack >
        <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}
        colorScheme='green'/>
				<Text whiteSpace={"nowrap"}>{colorMode === 'dark' ? 'Light' : 'Dark'} Mode</Text>
			</HStack>
		</>
	);
}
