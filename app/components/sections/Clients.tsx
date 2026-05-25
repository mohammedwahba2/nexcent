"use client";
import { useInView } from "@/app/hooks/useInView";
import Image from "next/image";


const clients = [
  { name: "Client 1", logo: "/images/clients/client1.svg" },
  { name: "Client 2", logo: "/images/clients/client2.svg" },
  { name: "Client 3", logo: "/images/clients/client3.svg" },
  { name: "Client 4", logo: "/images/clients/client4.svg" },
  { name: "Client 5", logo: "/images/clients/client5.svg" },
  { name: "Client 6", logo: "/images/clients/client6.svg" },
  { name: "Client 7", logo: "/images/clients/client1.svg" },
];

export default function Clients() {
  const { ref, inView } = useInView();

  return (
    <section className="py-10">
      <div className="container mx-auto px-4" ref={ref}>

        <div className={`text-center mb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-2">Our Clients</h2>
          <p className="text-gray-dark text-base">We have been working with some Fortune 500+ clients</p>
        </div>

        <div className="md:grid md:grid-cols-3 md:grid-cols-7 flex flex-wrap gap-8 items-center justify-items-center">
          {clients.map((client, i) => (
            <div
              key={client.name}
              className={`opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={40}
                className="h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}