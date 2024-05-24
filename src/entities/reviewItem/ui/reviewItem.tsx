import { ReviewMode } from '@/features/toggleReviewMode/types';
import { IReview } from '@/shared/api/review';
import { getLikeStatus } from '@/shared/api/review';
import { unstable_cache as nextCache } from 'next/cache';
import { ReviewAlbumItem, ReviewFeedItem } from '@/entities/reviewItem';
import { likeReview, dislikeReview } from '@/features/likeReview';

interface ReviewItemProps {
  review: IReview;
  reviewMode: ReviewMode
}

function getCachedLikeStatus(reviewId: number) {
  const cachedOperation = nextCache(getLikeStatus, ['review-like-status'], {
    tags: [`like-review-${reviewId}`],
  });
  return cachedOperation(reviewId);
}

export const ReviewItem = async ({ review, reviewMode }: ReviewItemProps) => {
  const { liked, likeCount } = await getCachedLikeStatus(review.id);

//   const handleLike = async (liked: boolean) => {
//     if (liked) {
//       await dislikeReview(review.id);
//     } else {
//       await likeReview(review.id);
//     }
//   };

  if (reviewMode === 'album') {
    return <ReviewAlbumItem review={review} liked={liked} likeCount={likeCount}/>;
  }

  if (reviewMode === 'feed') {
    return <ReviewFeedItem review={review} liked={liked} likeCount={likeCount} />;
  }

  return null;
};
