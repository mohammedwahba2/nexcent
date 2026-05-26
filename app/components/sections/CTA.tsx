"use client";

import { useInView } from "@/app/hooks/useInView";


export default function CTA() {
  const { ref, inView } = useInView();

  return (
    <section className="py-8 bg-[#F5F7FA]">
      <div
        ref={ref}
        className={`container mx-auto px-6 text-center ${
          inView ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight mb-8">
          Pellentesque suscipit <br /> fringilla libero eu.
        </h2>
        <button className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3.5 rounded-md transition-colors duration-300 cursor-pointer">
          Get a Demo →
        </button>
      </div>
    </section>
  );
}