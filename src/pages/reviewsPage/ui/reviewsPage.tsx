'use client';

import { ToggleReviewMode, useReviewModeStore } from '@/features/toggleReviewMode';
import { ReviewAlbumItem, ReviewFeedItem } from '@/entities/reviewItem';

import { IReview } from '@/shared/types';

interface ReviewsPageProps {
  reviews: IReview[];
}

export const ReviewsPage = ({ reviews }: ReviewsPageProps) => {
  const reviewMode = useReviewModeStore((state) => state.reviewMode);

  return (
    <div className="w-full h-full bg-white">
      <div className="flex flex-col">
        <ToggleReviewMode mode={reviewMode} />
        {reviewMode === 'album' && reviews.map((review) => <ReviewAlbumItem key={review.id} review={review} />)}
        {reviewMode === 'feed' && reviews.map((review) => <ReviewFeedItem key={review.id} review={review} />)}
      </div>
    </div>
  );
};
