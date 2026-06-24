"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "transition-colors duration-200",
        isActive
          ? "font-semibold text-amber-700"
          : "text-gray-700 hover:text-amber-700"
      )}
    >
      {children}
    </Link>
  );
}