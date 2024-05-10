'use client';

import { ToggleReviewsMode, useReviewsModeStore } from '@/src/features/toggleReviewsMode';

export const ReviewsPage = () => {
  const { reviewsMode } = useReviewsModeStore();

  return (
    <div className="w-full h-full bg-white">
      <ToggleReviewsMode mode={reviewsMode} />
    </div>
  );
};
