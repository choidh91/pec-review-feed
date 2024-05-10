'use client';

import { useReviewsModeStore } from '@/src/features/toggleReviewsMode';
import { ReviewsMode } from '../model/types';

interface ToggleReviewsModeProps {
  mode: ReviewsMode;
}

export const ToggleReviewsMode = ({ mode }: ToggleReviewsModeProps) => {
  const handleChangeReviewsMode = (reviewsMode: ReviewsMode) => {
    useReviewsModeStore.setState({
      reviewsMode,
    });
  };

  return (
    <div className="flex flex-row gap-2 float-end p-6">
      <div className="flex items-center">
        <input
          checked={mode === 'album'}
          id="album"
          type="radio"
          value="album"
          name="reviews-mode"
          onChange={() => handleChangeReviewsMode('album')}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label htmlFor="album" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          앨범형
        </label>
      </div>
      <div className="flex items-center">
        <input
          checked={mode === 'feed'}
          id="feed"
          type="radio"
          value="feed"
          name="reviews-mode"
          onChange={() => handleChangeReviewsMode('feed')}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label htmlFor="feed" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          피드형
        </label>
      </div>
    </div>
  );
};
