import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../data';
import {
	FaWindows,
	FaXbox,
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
				{platforms.map((platform) => (
					// <Text>{plaform.name}</Text>
					<Icon as={iconMaps[platform.slug]} color="gray.500" key={platform.id}/>
				))}
			</HStack>
		</>
	);
}
