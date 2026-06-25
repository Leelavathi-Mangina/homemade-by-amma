import FeatureCard from "./FeatureCard";
import { WHY_CHOOSE_US } from "../../constants/features";

export default function WhyChooseUs() {
  return (
    <section className="bg-orange-50/40 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.2em] text-amber-700">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Homemade Quality You Can Trust
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Every product is prepared with care, hygiene and traditional recipes
            that bring the authentic taste of home.
          </p>

        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {WHY_CHOOSE_US.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}