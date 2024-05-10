import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ReviewsMode } from './types';

const StorageName = 'reviews-mode-storage';

interface State {
  reviewsMode: ReviewsMode;
}

const useReviewsModeStore = create(
  persist<State>(
    () => ({
      reviewsMode: 'album',
    }),
    {
      name: StorageName,
    },
  ),
);

export default useReviewsModeStore;
