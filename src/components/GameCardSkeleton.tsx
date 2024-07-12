import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

export default function GameCardSkeleton() {
	return (
		<>
			<Card width={"300px"} borderRadius={'10px'} overflow={'hidden'}>
				<Skeleton height={'200px'} />
				<CardBody>
					<SkeletonText />
				</CardBody>
			</Card>
		</>
	);
}
