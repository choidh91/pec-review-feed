import { IReview } from '@/shared/types';
import Image from 'next/image';
import Link from 'next/link';

interface ReviewFeedItemProps {
  review: IReview;
}

export const ReviewFeedItem = ({ review }: ReviewFeedItemProps) => {
  return (
    <div className="flex flex-col">
      <span>{'피드'}</span>
      <span>{review.author}</span>
      {/* <Link href={'/'}>{review.productName}</Link>

      <span>{review.content}</span>
      {review.photos?.map((photo, index) => <Image key={index} src={photo} alt="image" width={150} height={150} />)} */}
    </div>
  );
};
