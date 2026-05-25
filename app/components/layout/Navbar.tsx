"use client";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
  return (
        <nav className={`sticky top-0 z-30 transition-all duration-300 bg-[#F5F7FA] ${scrolled
            ? "bg-white "
            : "bg-[#F5F7FA]"
        }`}>
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <Logo />
          <NavLinks />
          <div className="hidden md:flex items-center gap-8">
            <Link href="/login" className="text-primary hover:text-primary-dark transition-colors">Login</Link>
            <Link href="/signup" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
              Get Started
            </Link>
          </div>

          <MobileMenu />

        </div>
      </div>
    </nav>
  );
}