import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ReviewMode } from '../types';
import { REVIEW_MODE_STORAGE } from '@/shared/consts';

interface State {
  reviewMode: ReviewMode;
}

interface Actions {
  setReviewMode: (mode: ReviewMode) => void;
}

const initialState: State = {
  reviewMode: 'album',
};

const useReviewModeStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      setReviewMode: (mode: ReviewMode) => set({ reviewMode: mode }),
    }),
    {
      name: REVIEW_MODE_STORAGE,
    },
  ),
);

export default useReviewModeStore;
