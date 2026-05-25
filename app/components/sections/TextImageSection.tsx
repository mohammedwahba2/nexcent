"use client";
import { useInView } from "@/app/hooks/useInView";
import Image from "next/image";


interface TextImageSectionProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  reverse?: boolean;
  cta?: string;
}

export default function TextImageSection({
  image,
  imageAlt,
  title,
  description,
  reverse = false,
  cta = "Learn More",
}: TextImageSectionProps) {
  const { ref, inView } = useInView();

  return (
    <section className="py-10">
      <div
        ref={ref}
        className={`container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
          reverse ? "md:grid-flow-dense" : ""
        }`}
      >
        <div
          className={`flex justify-center ${
            reverse ? "md:col-start-2" : ""
          } ${inView ? (reverse ? "animate-fade-in-right" : "animate-fade-in-left") : "opacity-0"}`}
        >
          <Image
            src={image}
            alt={imageAlt}
            width={500}
            height={450}
            className="w-full max-h-60 md:max-h-full object-contain"
          />
        </div>

        <div
          className={`${
            reverse ? "md:col-start-1" : ""
          } ${inView ? (reverse ? "animate-fade-in-left" : "animate-fade-in-right") : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight mb-4">
            {title}
          </h2>
          <p className="text-gray-dark text-base leading-relaxed mb-8">
            {description}
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 cursor-pointer">
            {cta}
          </button>
        </div>
      </div>
    </section>
  );
}