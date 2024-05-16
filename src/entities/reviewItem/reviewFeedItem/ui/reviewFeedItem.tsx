import { IReview } from '@/shared/types';
import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/24/outline';

interface ReviewFeedItemProps {
  review: IReview;
}

export const ReviewFeedItem = ({ review }: ReviewFeedItemProps) => {
  return (
    <div className="p-2">
      <div className="flex-1 border-2 rounded-md p-2">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-bold text-lg">{review.author.name}</h3>
            <Link href={`/product/${review.productId}`}>
              <p className="font-bold text-base">{review.product.name}</p>
            </Link>
          </div>
        </div>
        <p className="text-base text-gray-700 dark:text-gray-300 mt-2">{review.content}</p>
        {review.photo && <Image src={review.photo} alt="image" width={150} height={150} />}
        <div className="flex flex-row items-center mt-2">
          <HeartIcon className="w-7 h-7" />
          <div className="flex items-center h-full ml-2">{review.like}</div>
        </div>
      </div>
    </div>
  );
};
