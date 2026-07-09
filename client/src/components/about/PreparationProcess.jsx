import ProcessCard from "./ProcessCard";
import { PROCESS_STEPS } from "../../constants/process";

export default function PreparationProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.2em] text-amber-700">
            Our Process
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
            How We Prepare Every Order
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            Freshness is our promise. Every product is prepared only
            after your order is confirmed.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {PROCESS_STEPS.map((step) => (
            <ProcessCard
              key={step.id}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}