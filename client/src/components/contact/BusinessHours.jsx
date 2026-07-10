export default function BusinessHours() {
  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-lg">

        <h2 className="text-center text-3xl font-bold text-gray-900">
          Order Information
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-gray-600">
          Every order is freshly prepared after confirmation to ensure the best
          taste and quality. Please review the information below before placing
          your order.
        </p>

        <div className="mt-10 space-y-6">

          <div className="flex gap-4">
            <span className="text-2xl">🍲</span>

            <div>
              <h3 className="font-semibold text-gray-900">
                Fresh Preparation
              </h3>

              <p className="mt-1 text-gray-600">
                Products are prepared only after your order is confirmed to
                maintain freshness and homemade quality.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-2xl">📅</span>

            <div>
              <h3 className="font-semibold text-gray-900">
                Advance Orders
              </h3>

              <p className="mt-1 text-gray-600">
                Please place bulk, festival, or special occasion orders in
                advance so we can prepare them with proper care.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-2xl">📞</span>

            <div>
              <h3 className="font-semibold text-gray-900">
                Order Confirmation
              </h3>

              <p className="mt-1 text-gray-600">
                Contact us by phone or WhatsApp to discuss your requirements.
                We'll confirm the preparation and delivery schedule after
                receiving your order.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}