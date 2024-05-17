import { getProduct } from '@/shared/api/product';

export const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await getProduct(Number(id));

  if (!product) {
    return <div>상품이 없습니다.</div>;
  }

  return <div className="w-full h-full bg-white pb-20">{product.name}</div>;
};
