import { getProduct } from '@/shared/api/product';
import { ProductPage } from '@/pages/product';

export default async function Product({ params: { id } }: { params: { id: string } }) {
  const product = await getProduct(Number(id));

  if (!product) {
    return <div>상품이 없습니다.</div>;
  }

  return <ProductPage product={product} />;
}
