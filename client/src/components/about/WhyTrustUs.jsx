import TrustCard from "./TrustCard";
import { TRUST_POINTS } from "../../constants/trust";

export default function WhyTrustUs() {
  return (
    <section className="bg-orange-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.2em] text-amber-700">
            Why Customers Trust Us
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
            Homemade Quality You Can Trust
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            Every order reflects our commitment to freshness,
            traditional recipes and customer satisfaction.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {TRUST_POINTS.map((point) => (
            <TrustCard
              key={point.id}
              icon={point.icon}
              title={point.title}
              description={point.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}