import { HOME_FEATURED_PRODUCTS } from "../../../constants/products";
import ProductDetails from "../../../components/products/ProductDetails";


export default async function ProductDetailsPage({ params }) {

  const { slug } = await params;


  const product = HOME_FEATURED_PRODUCTS.find(
    (item) => item.slug === slug
  );


  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }


  return (
    <ProductDetails product={product} />
  );
}