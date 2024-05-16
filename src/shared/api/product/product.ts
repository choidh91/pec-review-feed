import { db } from '@/shared/api';

export const getProduct = async (id: number) => {
  const product = db.product.findUnique({
    where: {
      id,
    },
  });

  return product;
};
