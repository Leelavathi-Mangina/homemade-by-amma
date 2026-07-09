import ValueCard from "./ValueCard";
import { VALUES } from "../../constants/values";

export default function OurValues() {
  return (
    <section className="bg-orange-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.2em] text-amber-700">
            Our Values
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
            What Makes Homemade by Amma Special
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            Every product reflects our commitment to freshness,
            traditional cooking and customer satisfaction.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {VALUES.map((value) => (
            <ValueCard
              key={value.id}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}