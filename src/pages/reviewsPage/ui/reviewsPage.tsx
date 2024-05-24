import { ToggleReviewMode } from '@/features/toggleReviewMode';
import { getReviews } from '@/entities/reviewList';
import { ReviewList } from '@/features/reviewList';

export async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <div className="w-full h-full bg-white pb-20">
      <div className="flex flex-col h-full">
        <ToggleReviewMode />
        <div className="flex-1 overflow-auto">
          <ReviewList reviews={reviews} />
        </div>
      </div>
    </div>
  );
}
