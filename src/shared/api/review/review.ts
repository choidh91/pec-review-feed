import { db } from '@/shared/api';

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
