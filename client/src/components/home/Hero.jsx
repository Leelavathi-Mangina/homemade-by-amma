import Link from "next/link";
import { Leaf, ChefHat, PartyPopper } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#FFF8F1] to-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-amber-700">
              Homemade with Love
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Authentic Homemade Food
              <br />
              Prepared Fresh for Every Celebration
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Traditional sweets, crunchy snacks, homemade pickles, fresh flours
              and festive specials prepared with quality ingredients, hygiene
              and the love of Amma.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <Leaf className="h-5 w-5 text-amber-700" />
                <span className="text-gray-700">Fresh Quality Ingredients</span>
              </div>

              <div className="flex items-center gap-3">
                <ChefHat className="h-5 w-5 text-amber-700" />
                <span className="text-gray-700">Hygienically Homemade</span>
              </div>

              <div className="flex items-center gap-3">
                <PartyPopper className="h-5 w-5 text-amber-700" />
                <span className="text-gray-700">
                  Perfect for Weddings & Celebrations
                </span>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/products">
                <Button className="px-8 py-4 text-base">
                  Explore Homemade Products
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative flex aspect-square w-full max-w-lg items-center justify-center overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-amber-100"></div>

              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-orange-100"></div>

              <div className="relative z-10 text-center">
                <div className="text-6xl">🍲</div>

                <h3 className="mt-4 text-xl font-semibold text-gray-700">
                  Your Homemade Delights
                </h3>

                <p className="mt-2 text-gray-400">
                  Real product photographs
                  <br />
                  coming soon...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
