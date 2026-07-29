const ORDER_STEPS = [
  "Pending",
  "Confirmed",
  "Preparing",
  "Shipped",
  "Delivered",
];

export default function OrderTimeline({ currentStatus }) {
  const currentIndex = ORDER_STEPS.indexOf(currentStatus);

  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-8 text-2xl font-bold">
        Order Progress
      </h2>

      <div className="space-y-0">
        {ORDER_STEPS.map((step, index) => {
          const completed = index < currentIndex;
          const current = index === currentIndex;

          return (
            <div
              key={step}
              className="flex items-start gap-5"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold transition-all
                  ${
                    completed
                      ? "bg-green-600 text-white"
                      : current
                      ? "bg-amber-600 text-white ring-4 ring-amber-100"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {completed ? "✓" : current ? "●" : "○"}
                </div>

                {index !== ORDER_STEPS.length - 1 && (
                  <div
                    className={`w-1 h-12
                    ${
                      completed
                        ? "bg-green-600"
                        : "bg-gray-300"
                    }`}
                  />
                )}
              </div>

              <div className="pt-2">
                <p
                  className={`text-base font-semibold
                  ${
                    completed
                      ? "text-green-700"
                      : current
                      ? "text-amber-700"
                      : "text-gray-500"
                  }`}
                >
                  {step}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {completed
                    ? "Completed"
                    : current
                    ? "Current Status"
                    : "Upcoming"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}