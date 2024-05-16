import { Review, Product, User } from '@prisma/client';

export type IReview = Review & {
  author: User;
  product: Product;
};
