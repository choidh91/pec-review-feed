import { IReview } from '@/shared/types';

interface ReviewAlbumItemProps {
  review: IReview;
}

export const ReviewAlbumItem = ({ review }: ReviewAlbumItemProps) => {
  return (
    <div className="flex flex-col">
      <span>{'앨범'}</span>
      <span>{review.author.name}</span>
    </div>
  );
};
