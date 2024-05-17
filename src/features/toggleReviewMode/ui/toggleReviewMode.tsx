'use client';

import { useReviewModeStore } from '@/features/toggleReviewMode';
import { ReviewMode } from '../types';

export const ToggleReviewMode = () => {
  const reviewMode = useReviewModeStore((state) => state.reviewMode);

  const setReviewMode = useReviewModeStore((state) => state.setReviewMode);

  const handleChangeReviewMode = (reviewMode: ReviewMode) => {
    setReviewMode(reviewMode);
  };

  return (
    <div className="flex flex-row gap-2 p-6 ml-auto">
      <div className="flex items-center">
        <input
          checked={reviewMode === 'album'}
          id="album"
          type="radio"
          value="album"
          name="review-mode"
          onChange={() => handleChangeReviewMode('album')}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label htmlFor="album" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          앨범형
        </label>
      </div>
      <div className="flex items-center">
        <input
          checked={reviewMode === 'feed'}
          id="feed"
          type="radio"
          value="feed"
          name="review-mode"
          onChange={() => handleChangeReviewMode('feed')}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label htmlFor="feed" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          피드형
        </label>
      </div>
    </div>
  );
};
