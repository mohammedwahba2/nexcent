import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Nexcent — Membership Management Platform",
  description:
    "Nexcent helps membership organisations, national associations, and clubs manage their entire community in a single system. Automate renewals, payments.",
  metadataBase: new URL("https://nexcent-ochre.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Nexcent — Membership Management Platform",
    description:
      "Manage your entire community in a single system. Full automation of membership renewals and payments.",
    url: "https://nexcent-ochre.vercel.app/",
    siteName: "Nexcent",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexcent — Membership Management Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexcent",
    title: "Nexcent — Membership Management Platform",
    description:
      "Manage your entire community in a single system. Full automation of membership renewals and payments.",
    images: ["/images/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
