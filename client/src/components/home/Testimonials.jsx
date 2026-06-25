import { TESTIMONIALS } from "../../constants/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-white to-orange-50/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-amber-700">
            Testimonials
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
            Loved by Our Customers
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Families trust Homemade by Amma for fresh homemade food prepared
            with love and care.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              location={testimonial.location}
              review={testimonial.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
