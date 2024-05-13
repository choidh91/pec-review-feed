import { db } from '@/shared/api';

export const getReviews = async () => {
  const reviews = await db.review.findMany();

  return reviews;
};
