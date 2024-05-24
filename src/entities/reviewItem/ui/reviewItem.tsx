'use client';

import { ReviewMode } from '@/features/toggleReviewMode/types';
import { IReview, getCachedLikeStatus } from '@/shared/api/review';
import { ReviewAlbumItem, ReviewFeedItem } from '@/entities/reviewItem';
import { likeReview, dislikeReview } from '@/features/likeReview';
import { useState, useEffect } from 'react';
import { BottomSheetDialog } from '@/shared/ui/bottomSheetDialog';

interface ReviewItemProps {
  review: IReview;
  reviewMode: ReviewMode;
}

export const ReviewItem = ({ review, reviewMode }: ReviewItemProps) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const getLikeStatus = () => {
    getCachedLikeStatus(review.id).then((data) => {
      setLikeCount(data.likeCount);
      setLiked(data.liked);
    });
  };

  useEffect(() => {
    getLikeStatus();
  }, []);

  const handleLike = async (liked: boolean) => {
    if (liked) {
      await dislikeReview(review.id);
    } else {
      await likeReview(review.id);
    }
    getLikeStatus();
  };

  return (
    <>
      {reviewMode === 'album' && (
        <ReviewAlbumItem
          review={review}
          liked={liked}
          likeCount={likeCount}
          onToggleLike={handleLike}
          onShowDetail={() => setShowDetail(true)}
        />
      )}
      {reviewMode === 'feed' && (
        <ReviewFeedItem
          review={review}
          liked={liked}
          likeCount={likeCount}
          onToggleLike={handleLike}
          onShowDetail={() => setShowDetail(true)}
        />
      )}
      {showDetail && (
        <BottomSheetDialog title={'리뷰 상세'} content={review.content} onClose={() => setShowDetail(false)} />
      )}
    </>
  );
};
