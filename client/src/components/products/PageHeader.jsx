export default function PageHeader({
  title,
  description,
}) {
  return (
    <section className="bg-orange-50 py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <h1 className="text-4xl font-extrabold text-gray-900">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          {description}
        </p>

      </div>
    </section>
  );
}