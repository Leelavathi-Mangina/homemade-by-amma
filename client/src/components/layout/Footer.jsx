import Logo from "../common/Logo";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        {/* Brand */}

        <div>
          <h2 className="text-2xl font-bold text-white">Homemade by Amma</h2>

          <p className="mt-2 text-amber-400">Fresh • Homemade • Delicious</p>

          <p className="mt-6 max-w-sm leading-7 text-gray-300">
            Fresh homemade food prepared with love, tradition and quality
            ingredients for every celebration.
          </p>
        </div>

        {/* Navigation */}

        <FooterLinks />

        {/* Contact */}

        <FooterContact />
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-gray-400">
          © 2026 Homemade by Amma. All rights reserved. 
        </div>
      </div>
    </footer>
  );
}
