import { ReviewModeItem } from '@/features/reviewItem';
import { IReview } from '@/shared/api/review';
import { getLikeStatus } from '@/shared/api/review';
import { unstable_cache as nextCache } from 'next/cache';

interface ReviewItemProps {
  review: IReview;
}

function getCachedLikeStatus(reviewId: number) {
  const cachedOperation = nextCache(getLikeStatus, ['review-like-status'], {
    tags: [`like-review-${reviewId}`],
  });
  return cachedOperation(reviewId);
}

export const ReviewItem = async ({ review }: ReviewItemProps) => {
  const { liked, likeCount } = await getCachedLikeStatus(review.id);

  return <ReviewModeItem review={review} likeCount={likeCount} liked={liked} />;
};
