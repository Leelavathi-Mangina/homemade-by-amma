import Link from "next/link";
import Button from "../ui/Button";

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-semibold uppercase tracking-[0.2em] text-amber-700">
          About Us
        </p>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          Homemade Food Prepared
          <br />
          With Love & Tradition
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          At Homemade by Amma, every order is freshly prepared after
          confirmation using traditional recipes, quality ingredients and the
          same care we use for our own family.
        </p>

        <div className="mt-10">
          <Link href="/products">
            <Button>Browse Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
