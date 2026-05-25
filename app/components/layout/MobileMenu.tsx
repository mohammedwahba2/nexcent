"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/service", label: "Service" },
  { href: "/feature", label: "Feature" },
  { href: "/product", label: "Product" },
  { href: "/testimonial", label: "Testimonial" },
  { href: "/faq", label: "FAQ" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <span className="block w-6 h-0.5 bg-dark" />
        <span className="block w-6 h-0.5 bg-dark" />
        <span className="block w-6 h-0.5 bg-dark" />
      </button>

      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl transition-transform duration-300 md:hidden flex flex-col ${
            open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="font-bold text-dark text-lg">Menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-gray-400 hover:text-dark transition-colors text-2xl leading-none"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6 gap-1 flex-1">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-dark hover:text-primary hover:bg-primary/5 transition-colors py-3 px-3 rounded-lg text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 px-6 py-6 border-t border-gray-100">
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="text-primary text-center py-2.5 border border-primary rounded-md text-sm font-medium hover:bg-primary/5 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            onClick={() => setOpen(false)}
            className="bg-primary text-white text-center py-2.5 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}