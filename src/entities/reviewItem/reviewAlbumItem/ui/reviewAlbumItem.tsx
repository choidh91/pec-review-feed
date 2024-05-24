import { IReview } from '@/shared/api/review';
import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';

interface ReviewAlbumItemProps {
  review: IReview;
  liked: boolean;
  likeCount: number;
  onToggleLike?: (value: boolean) => void;
}

export const ReviewAlbumItem = ({ review, liked, likeCount, onToggleLike }: ReviewAlbumItemProps) => {
  return (
    <div className="flex flex-col border-2">
      <h3 className="font-bold text-lg">{review.author.name}</h3>
      {review.photo && (
        <div className="size-36 flex items-center">
          <Image src={review.photo} alt="image" width={150} height={150} priority />
        </div>
      )}
      <p className="text-base text-gray-700 dark:text-gray-300 mt-2">{review.content}</p>
      <div className="flex flex-row items-center mt-2">
        <button
          onClick={() => {
            onToggleLike?.(liked);
          }}
        >
          {liked ? <SolidHeartIcon className="w-7 h-7" /> : <OutlineHeartIcon className="w-7 h-7" />}
        </button>
        <div className="flex items-center h-full ">{likeCount}</div>
        <Link href={`/product/${review.productId}`}>
          <p className="font-bold text-base ml-2">{review.product.name}</p>
        </Link>
      </div>
    </div>
  );
};
