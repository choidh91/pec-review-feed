'use server';

import { db } from '@/shared/api';
import { unstable_cache as nextCache } from 'next/cache';

export const getLikeStatus = async (reviewId: number) => {
  const likeCount = await db.like.count({
    where: {
      reviewId,
    },
  });

  const liked = await db.like.findUnique({
    where: {
      id: {
        userId: 1,
        reviewId,
      },
    },
  });

  return {
    likeCount,
    liked: Boolean(liked),
  };
};

export const getCachedLikeStatus = (reviewId: number) => {
  const cachedOperation = nextCache(getLikeStatus, ['review-like-status'], {
    tags: [`like-review-${reviewId}`],
  });
  return cachedOperation(reviewId);
};
