import { IReview } from '@/shared/api/review';
import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';

interface ReviewFeedItemProps {
  review: IReview;
  liked: boolean;
  likeCount: number;
  onToggleLike?: (value: boolean) => void;
}

export const ReviewFeedItem = ({ review, liked, likeCount, onToggleLike }: ReviewFeedItemProps) => {
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

        {review.photo && (
          <div className="size-36 flex items-center">
            <Image src={review.photo} alt="image" width={150} height={150} priority />
          </div>
        )}
        <div className="flex flex-row items-center mt-2">
          <button
            onClick={() => {
              onToggleLike?.(liked);
            }}
          >
            {liked ? <SolidHeartIcon className="w-7 h-7" /> : <OutlineHeartIcon className="w-7 h-7" />}
          </button>
          <div className="flex items-center h-full ml-2">{likeCount}</div>
        </div>
      </div>
    </div>
  );
};
