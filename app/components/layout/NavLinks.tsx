import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/service", label: "Service" },
  { href: "/feature", label: "Feature" },
  { href: "/product", label: "Product" },
  { href: "/testimonial", label: "Testimonial" },
  { href: "/faq", label: "FAQ" },
];

export default function NavLinks() {
  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-dark hover:text-primary transition-colors font-500"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}