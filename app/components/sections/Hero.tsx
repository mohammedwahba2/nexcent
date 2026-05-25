import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F5F7FA]  flex items-center overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center py-10 md:py-18 lg:py-24">
        <div className="animate-fade-in-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-4">
            Lessons and insights
            <span className="block text-primary">from 8 years</span>
          </h1>

          <p className="text-gray-dark text-sm md:text-base mb-8">
            Where to grow your business as a photographer: site or social media?
          </p>

          <button className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3.5 rounded-md transition-colors duration-300 cursor-pointer">
            Register
          </button>
        </div>

        <div className="flex justify-center md:justify-end animate-fade-in-right">
          <Image
            src="/images/hero.png"
            alt="Lessons and insights illustration"
            width={600}
            height={500}
            className="w-full h-auto max-h-64 md:max-h-full object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}