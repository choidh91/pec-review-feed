import { db } from '@/shared/api';
import { IReview } from '@/shared/api/review';

// 현재 로그인한 사용자가 최근에 본 카테고리를 가져온다.
const getUserRecentCategory = async () => {
  const user = await db.user.findUnique({
    where: { id: 1 },
    select: {
      recent_view_category1_id: true,
      recent_view_category2_id: true,
      recent_view_category3_id: true,
    },
  });

  return user;
};

// 카테고리에 해당되는 리뷰를 product의 view_count로 내림차순 정렬하여 가져온다.
const getReviewsByCategory = async (categoryId: number) => {
  const reviews = await db.review.findMany({
    where: {
      product: {
        categoryId,
      },
    },
    orderBy: {
      product: {
        view_count: 'desc',
      },
    },
    include: {
      product: true,
      author: true,
    },
  });

  return reviews;
};

// 특정 카테고리ID들을 제외한 리뷰를 가져온다.
const getRestReview = async (excludeCategoryIds: number[]) => {
  const reviews = await db.review.findMany({
    where: {
      product: {
        categoryId: {
          notIn: excludeCategoryIds,
        },
      },
    },
    orderBy: {
      product: {
        view_count: 'desc',
      },
    },
    include: {
      product: true,
      author: true,
    },
  });

  return reviews;
};

export const getReviews = async () => {
  const user = await getUserRecentCategory();

  let combinedReviews: IReview[] = [];

  if (user?.recent_view_category1_id) {
    const reviews1 = await getReviewsByCategory(user?.recent_view_category1_id);
    combinedReviews = combinedReviews.concat(reviews1);
  }

  if (user?.recent_view_category2_id) {
    const reviews2 = await getReviewsByCategory(user.recent_view_category2_id);
    combinedReviews = combinedReviews.concat(reviews2);
  }

  if (user?.recent_view_category3_id) {
    const reviews3 = await getReviewsByCategory(user.recent_view_category3_id);
    combinedReviews = combinedReviews.concat(reviews3);
  }

  const excludeCategoryIds = [
    user?.recent_view_category1_id,
    user?.recent_view_category2_id,
    user?.recent_view_category3_id,
  ].filter(Boolean) as number[];

  const restReviews = await getRestReview(excludeCategoryIds);
  combinedReviews = combinedReviews.concat(restReviews);

  return combinedReviews;
};
