'use client';

import { ReviewItem } from '@/entities/reviewItem';
import { useReviewModeStore } from '@/features/toggleReviewMode';
import { IReview } from '@/shared/api/review';

interface ReviewListProps {
  reviews: IReview[];
}

export const ReviewList = ({ reviews }: ReviewListProps) => {
  const reviewMode = useReviewModeStore((state) => state.reviewMode);

  return (
    <div className="flex-1 overflow-auto">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} reviewMode={reviewMode} />
      ))}
    </div>
  );
};
