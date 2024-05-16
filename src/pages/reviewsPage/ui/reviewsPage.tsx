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
    <div className="w-full h-full bg-white pb-20">
      <div className="flex flex-col h-full">
        <ToggleReviewMode mode={reviewMode} />
        <div className="flex-1 overflow-auto">
          {reviewMode === 'album' && reviews.map((review) => <ReviewAlbumItem key={review.id} review={review} />)}
          {reviewMode === 'feed' && reviews.map((review) => <ReviewFeedItem key={review.id} review={review} />)}
        </div>
      </div>
    </div>
  );
};
