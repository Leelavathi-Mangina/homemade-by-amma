"use client";

import { Menu } from "lucide-react";

export default function MobileMenuButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden"
      aria-label="Open navigation menu"
    >
      <Menu size={28} />
    </button>
  );
}
