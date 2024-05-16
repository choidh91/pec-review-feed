'use server';

import { db } from '@/shared/api';
import { revalidateTag } from 'next/cache';

export const likeReview = async (reviewId: number) => {
  try {
    await db.like.create({
      data: {
        userId: 1,
        reviewId,
      },
    });

    revalidateTag(`like-review-${reviewId}`);
  } catch (e) {}
};

export const dislikeReview = async (reviewId: number) => {
  try {
    await db.like.delete({
      where: {
        id: {
          userId: 1,
          reviewId,
        },
      },
    });

    revalidateTag(`like-review-${reviewId}`);
  } catch (e) {}
};
