"use client";

import NavbarActions from "./NavbarActions";

import Logo from "../common/Logo";

import DesktopNav from "./DesktopNav";

import MobileMenuButton from "./MobileMenuButton";

import MobileMenu from "./MobileMenu";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <Logo />

        <DesktopNav />

        <NavbarActions />

        <MobileMenuButton onClick={() => setIsOpen((prev) => !prev)} />
      </nav>
      {isOpen && <MobileMenu />}
    </header>
  );
}
