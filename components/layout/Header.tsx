"use client";

import { useState } from "react";
import { UtilityBar } from "../ui/UtilityBar";
import { Logo } from "../ui/Logo";
import { Menu } from "lucide-react";
import Link from "next/link";
import type { NavItem } from "@/types";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Reservations", href: "/reservations" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-[var(--color-white)] text-[var(--color-black)] border-b border-[var(--border)]" role="banner">
      {/* Top Utility Row - hidden on small screens, visible md+ */}
      <div className="hidden md:block">
        <UtilityBar />
      </div>

      {/* Mobile top bar: logo left, menu button right (md:hidden) */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <Logo />
        <button
          aria-label="Toggle navigation"
          aria-controls="primary-navigation"
          aria-expanded={isMobileNavOpen}
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
          className="p-2 rounded border border-[var(--border)] hover:bg-[var(--color-black)] hover:text-[var(--color-white)] active:scale-95 transition"
          type="button"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 lg:px-8">
          <nav
            id="primary-navigation"
            aria-label="Primary"
            className="pb-6 flex items-center justify-center gap-8 text-xs tracking-[0.25em] uppercase flex-wrap"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[var(--color-red)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-red)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {isMobileNavOpen && (
        <nav
          id="primary-navigation"
          aria-label="Mobile Primary"
          className="md:hidden border-b border-[var(--border)] bg-[var(--color-white)]"
        >
          <div className="px-4 py-3 flex flex-col gap-3 text-sm tracking-[0.2em] uppercase">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[var(--color-red)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-red)]"
                onClick={() => setIsMobileNavOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;