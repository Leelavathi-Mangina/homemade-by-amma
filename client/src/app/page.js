import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl p-6">
        <h1 className="mt-20 text-5xl font-bold">
          Welcome to Homemade by Amma
        </h1>

        <p className="mt-4 text-gray-600">
          Fresh homemade food for every celebration.
        </p>
      </main>
    </>
  );
}