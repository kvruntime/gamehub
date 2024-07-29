import { Text, Button } from '@chakra-ui/react';
import { ReactNode, useState } from 'react';

interface Props {
	children: string;
}

export default function ExpandableText({ children }: Props) {
	const [expanded, setExpanded] = useState(false);
	const limit = 300;

	if (children.length <= limit) return <Text>{children}</Text>;

	const summary = expanded ? children : children.substring(0, limit) + '...';
	return (
		<Text>
			{summary}
			<Button
				colorScheme="yellow"
				fontWeight={'bold'}
				onClick={() => setExpanded(!expanded)}
			>
				{expanded ? 'Show Less' : 'Read More'}
			</Button>
		</Text>
	);
}
