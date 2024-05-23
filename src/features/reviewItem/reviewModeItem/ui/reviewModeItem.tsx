'use client';

import { useReviewModeStore } from '@/features/toggleReviewMode';
import { ReviewAlbumItem, ReviewFeedItem } from '@/entities/reviewItem';
import { IReview } from '@/shared/api/review';
import { likeReview, dislikeReview } from '@/features/likeReview';

interface ReviewModeItemProps {
  review: IReview;
  liked: boolean;
  likeCount: number;
}

export const ReviewModeItem = ({ review, likeCount, liked }: ReviewModeItemProps) => {
  const reviewMode = useReviewModeStore((state) => state.reviewMode);

  const handleLike = async (liked: boolean) => {
    if (liked) {
      await dislikeReview(review.id);
    } else {
      await likeReview(review.id);
    }
  };

  if (reviewMode === 'album') {
    return <ReviewAlbumItem review={review} liked={liked} likeCount={likeCount} onToggleLike={handleLike} />;
  }

  if (reviewMode === 'feed') {
    return <ReviewFeedItem review={review} liked={liked} likeCount={likeCount} onToggleLike={handleLike} />;
  }

  return null;
};
