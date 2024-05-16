import { IReview } from '@/shared/types';
import Image from 'next/image';
import Link from 'next/link';
// import { HeartIcon } from '@heroicons/react/24/Outline';

interface ReviewFeedItemProps {
  review: IReview;
}

export const ReviewFeedItem = ({ review }: ReviewFeedItemProps) => {
  return (
    <div className="flex flex-col p-4 border-b-2">
      <span>{review.author.name}</span>
      <Link href={'/'}>
        <span className="font-bold">{review.product.name}</span>
      </Link>
      <span>{review.content}</span>
      {review.photo && <Image src={review.photo} alt="image" width={150} height={150} />}
      {/* <HeartIcon className="w-7 h-7" /> */}
    </div>
  );
};
