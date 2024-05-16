import { Review } from '@prisma/client';
import { IProduct, IUser } from '@/shared/types';

export type IReview = Review & {
  author: IUser;
  product: IProduct;
};
