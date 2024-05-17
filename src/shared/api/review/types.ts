import { Review } from '@prisma/client';
import { IProduct } from '../product';
import { IUser } from '../user';

export type IReview = Review & {
  author: IUser;
  product: IProduct;
};
