import Link from "next/link";
import Button from "../ui/Button";

export default function AboutCTA() {
  return (
    <section className="bg-amber-700 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-extrabold">
          Bring Homemade Taste to Your Table
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-amber-100">
          Explore our homemade sweets, snacks, pickles and flours, freshly
          prepared after every order with quality ingredients and traditional
          recipes.
        </p>

        <div className="mt-10">
          <Link href="/products">
            <Button className="bg-amber-800 hover:bg-amber-900">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
