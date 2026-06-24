import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-col leading-none"
      aria-label="Homemade by Amma Home"
    >
      <span className="text-2xl font-extrabold tracking-tight text-amber-700">
        Homemade by Amma
      </span>

      <span className="text-xs tracking-wide text-gray-500 uppercase">
        Fresh • Homemade • Delicious
      </span>
    </Link>
  );
}