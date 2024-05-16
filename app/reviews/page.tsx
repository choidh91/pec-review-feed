import { getReviews } from '@/entities/reviewList';
import { ReviewsPage } from '@/pages/reviewsPage';

export default async function Reviews() {
  const reviews = await getReviews();

  return <ReviewsPage reviews={reviews} />;
}
