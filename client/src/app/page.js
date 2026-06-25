import Hero from "../components/home/Hero";
import CategoriesPreview from "../components/home/CategoriesPreview";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategoriesPreview />
      <FeaturedProducts />
      <WhyChooseUs />
    </main>
  );
}