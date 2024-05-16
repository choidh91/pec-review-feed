import { IProduct } from '@/shared/types';

interface ProductPageProps {
  product: IProduct;
}

export const ProductPage = ({ product }: ProductPageProps) => {
  return <div className="w-full h-full bg-white pb-20">{product.name}</div>;
};
