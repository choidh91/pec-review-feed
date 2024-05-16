import { db } from '@/shared/api';

export const checkLikedReview = async (reviewId: number) => {
  const like = await db.like.findFirst({
    where: {
      userId: 1,
      reviewId,
    },
  });

  return !!like;
};
