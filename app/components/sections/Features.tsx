"use client";
import { useInView } from "@/app/hooks/useInView";
import Image from "next/image";


const features = [
  {
    icon: "/images/icons/membership.svg",
    title: "Membership Organisations",
    desc: "Our membership management software provides full automation of membership renewals and payments.",
  },
  {
    icon: "/images/icons/national.svg",
    title: "National Associations",
    desc: "Our membership management software provides full automation of membership renewals and payments.",
  },
  {
    icon: "/images/icons/clubs.svg",
    title: "Clubs And Groups",
    desc: "Our membership management software provides full automation of membership renewals and payments.",
  },
];

export default function Features() {
  const { ref, inView } = useInView();

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6" ref={ref}>

        <div className={`text-center mb-10 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-2">
            Manage your entire community <br className="hidden md:block" />
            in a single system
          </h2>
          <p className="text-gray-dark text-base">Who is Nextcent suitable for?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-18 lg:gap-28">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center text-center  ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-16 h-16 bg-primary-light  rounded-tl-3xl rounded-br-3xl flex items-center justify-center mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">{feature.title}</h3>
              <p className="text-gray-dark text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}