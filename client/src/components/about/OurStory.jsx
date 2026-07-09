export default function OurStory() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="flex h-96 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-100 to-amber-100 text-8xl transition-transform duration-300 hover:scale-[1.02]">
          👩‍🍳
        </div>

        <div>
          <p className="font-semibold uppercase tracking-[0.2em] text-amber-700">
            Our Story
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
            Bringing Homemade Tradition
            <br />
            To Every Family
          </h2>

          <p className="mt-8 leading-8 text-gray-600">
            Homemade by Amma was created with a simple mission — to bring
            authentic homemade food prepared with love, traditional recipes and
            quality ingredients to every family. Every order is freshly prepared
            only after confirmation to ensure freshness, taste and quality.
          </p>

          <div className="mt-10 space-y-4">
            <div>✅ Freshly prepared after every order</div>

            <div>✅ Traditional family recipes</div>

            <div>✅ Quality ingredients</div>

            <div>✅ Hygienic homemade preparation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
