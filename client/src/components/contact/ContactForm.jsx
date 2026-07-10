import Button from "../ui/Button";

export default function ContactForm() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-10 shadow-lg">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Send an Enquiry
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Tell us about your order or enquiry. We'll get back to you as soon as
          possible.
        </p>

        <form className="mt-10 space-y-6">
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Email (Optional)
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Product / Occasion
            </label>

            <input
              type="text"
              placeholder="Example: Wedding, Festival, Birthday..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Tell us what you'd like to order..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
            ></textarea>

            <div className="pt-2">
              <Button className="w-full">Send Enquiry</Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
