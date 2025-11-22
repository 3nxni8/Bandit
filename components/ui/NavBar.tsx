"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import type { NavItem } from "@/types";

export const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Reservations", href: "/reservations" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-[var(--color-white)] text-[var(--color-black)] b]" role="banner">
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Nav Items - Center */}
            <nav
              aria-label="Primary"
              className="flex items-center gap-8 text-xs tracking-[0.25em] uppercase"
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

            {/* Get Table Button - Right */}
            <div className="flex-shrink-0">
              <Link
                href="/reservations"
                className="px-6 py-3 bg-[var(--color-red)] text-[var(--color-white)] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[var(--color-red)]/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-red)]"
              >
                Get Table
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Logo />
          <button
            aria-label="Toggle navigation"
            aria-controls="mobile-navigation"
            aria-expanded={isMobileNavOpen}
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
            className="p-2 rounded border border-[var(--border)] hover:bg-[var(--color-black)] hover:text-[var(--color-white)] active:scale-95 transition"
            type="button"
          >
            {isMobileNavOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile nav drawer */}
        {isMobileNavOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile Primary"
            className="border-t border-[var(--border)] bg-[var(--color-white)]"
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
              <Link
                href="/reservations"
                className="mt-2 px-6 py-3 bg-[var(--color-red)] text-[var(--color-white)] text-center text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[var(--color-red)]/90 transition-colors"
                onClick={() => setIsMobileNavOpen(false)}
              >
                Get Table
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

