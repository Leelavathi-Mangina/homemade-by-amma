import ProductDetails from "../../../components/products/ProductDetails";
import { getProductBySlug } from "../../../lib/api/product";

export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;

  try {
    const product = await getProductBySlug(slug);

    return <ProductDetails product={product} />;
  } catch (error) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }
}