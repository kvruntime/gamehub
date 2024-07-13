import bullsEye from '../assets/bullseye.png';
import thumbsUp from '../assets/thumbs-up.png';
import meh from '../assets/meh.png';
import { Image, ImageProps } from '@chakra-ui/react';
interface Props {
	rating: number;
}
export default function Emoji({ rating }: Props) {
	if (rating < 3) return null;
	const emojiMap: { [key: number]: ImageProps } = {
		3: { src: meh, alt: 'meh' ,boxSize:'25px'},
		4: { src: thumbsUp, alt: 'recommanded' ,boxSize:'25px'},
		5: { src: bullsEye, alt: 'exceptional',boxSize:'35px' }
	};
	return <Image {...emojiMap[rating]} boxSize={'25px'} marginTop={1}/>;
}
