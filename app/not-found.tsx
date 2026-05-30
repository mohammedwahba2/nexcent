import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-bold text-dark mb-3">Page not found</h2>
      <p className="text-gray-500 text-base mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-md transition-colors duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
}