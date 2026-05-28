"use client";

import { useInView } from "@/app/hooks/useInView";
import { ArrowRight } from "lucide-react";


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
        <button className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3.5 rounded-md transition-all duration-300 cursor-pointer inline-flex items-center gap-2 group hover:-translate-y-0.5">
          Get a Demo

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </section>
  );
}