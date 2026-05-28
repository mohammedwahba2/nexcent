import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { ArrowRight } from "lucide-react";

const company = [
  "About us",
  "Blog",
  "Contact us",
  "Pricing",
  "Testimonials",
];

const support = [
  "Help center",
  "Terms of service",
  "Legal",
  "Privacy policy",
  "Status",
];

const socials = [
  { name: "Instagram", icon: "/images/icons/instagram.svg", href: "#" },
  { name: "Dribbble", icon: "/images/icons/dribbble.svg", href: "#" },
  { name: "Twitter", icon: "/images/icons/twitter.svg", href: "#" },
  { name: "YouTube", icon: "/images/icons/youtube.svg", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#263238] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_2fr] gap-12">

          {/* Mobile Top */}
          <div className="md:hidden">
            <Logo footer />
          </div>

          {/* Desktop Left */}
          <div className="hidden md:block">
            <div className="mb-6">
              <Logo footer />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Copyright © 2020 Nexcent ltd. <br />
              All rights reserved
            </p>

            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary transition-colors duration-300 flex items-center justify-center"
                >
                  <Image
                    src={s.icon}
                    alt={s.name}
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 md:contents">

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">
                Company
              </h4>

              <ul className="flex flex-col gap-3">
                {company.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-white mb-4">
                Support
              </h4>

              <ul className="flex flex-col gap-3">
                {support.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Stay up to date
            </h4>

            <div className="flex overflow-hidden rounded-md border border-white/10">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/5 text-white text-sm px-4 py-3 outline-none placeholder:text-gray-500"
              />

              <button className="bg-primary hover:bg-primary-dark px-4 transition-all duration-300 flex items-center justify-center group">
                <ArrowRight
                  size={20}
                  className="text-white transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Bottom */}
        <div className="md:hidden mt-12 border-t border-white/10 pt-6 flex flex-col items-center text-center">
          
          <div className="flex gap-4 mb-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary transition-colors duration-300 flex items-center justify-center"
              >
                <Image
                  src={s.icon}
                  alt={s.name}
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
              </a>
            ))}
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Copyright © 2020 Nexcent ltd. <br />
            All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}