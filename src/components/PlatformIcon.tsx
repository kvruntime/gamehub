import { HStack, Icon, Text } from '@chakra-ui/react';
import { Platform } from '../hooks/games-hook';
import {
	FaWindows,
	FaXbox,
	FaBox,
	FaApple,
	FaLinux,
	FaAndroid,
	FaPlaystation,
} from 'react-icons/fa';

import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Props {
	platforms: Platform[];
}

export default function PlatformIcon({ platforms }: Props) {
	const iconMaps: { [key: string]: IconType } = {
		playstation: FaPlaystation,
		xbox: FaXbox,
		pc: FaWindows,
		nitendo: SiNintendo,
		linux: FaLinux,
		ios: MdPhoneIphone,
		web: BsGlobe,
		android: FaAndroid,
		mac: FaApple
	};
	return (
		<>
			<HStack marginY={2}>
				{platforms.map((plaform) => (
					// <Text>{plaform.name}</Text>
					<Icon as={iconMaps[plaform.slug]} color="gray.500"/>
				))}
			</HStack>
		</>
	);
}
