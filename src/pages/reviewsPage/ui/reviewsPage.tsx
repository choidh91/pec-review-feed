import { ToggleReviewMode } from '@/features/toggleReviewMode';
import { ReviewItem } from '@/features/reviewItem';
import { getReviews } from '@/entities/reviewList';

export async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <div className="w-full h-full bg-white pb-20">
      <div className="flex flex-col h-full">
        <ToggleReviewMode />
        <div className="flex-1 overflow-auto">
          {reviews.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
