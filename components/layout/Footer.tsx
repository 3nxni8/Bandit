"use client";

import Link from "next/link";
import { Logo } from "../ui/Logo";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Reservations", href: "/reservations" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="w-full bg-[var(--color-black)] text-[var(--color-white)] border-t border-[var(--border)]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* Brand Section */}
          <div className="space-y-4">
            <div className="invert">
              <Logo />
            </div>
            <p className="text-sm text-[var(--color-white)]/70 leading-relaxed max-w-xs">
              Experience exceptional dining in the heart of the city. Where culinary artistry meets sophisticated ambiance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-[var(--color-red)]">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--color-white)]/70 hover:text-[var(--color-red)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-[var(--color-red)]">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm text-[var(--color-white)]/70 hover:text-[var(--color-red)] transition-colors group"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </a>
              <a
                href="mailto:info@boardroombandit.com"
                className="flex items-center gap-2 text-sm text-[var(--color-white)]/70 hover:text-[var(--color-red)] transition-colors group"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@boardroombandit.com</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-[var(--color-white)]/70">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>123 Main Street<br />New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-[var(--color-red)]">
              Hours
            </h3>
            <div className="text-sm text-[var(--color-white)]/70 space-y-1 mb-6">
              <p>Monday - Thursday: 5PM - 10PM</p>
              <p>Friday - Saturday: 5PM - 11PM</p>
              <p>Sunday: 4PM - 9PM</p>
            </div>

            <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-[var(--color-red)]">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 border border-[var(--color-white)]/20 rounded hover:border-[var(--color-red)] hover:text-[var(--color-red)] transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-white)]/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-white)]/50">
            <p>&copy; {currentYear} Boardroom Bandit. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[var(--color-red)] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[var(--color-red)] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;