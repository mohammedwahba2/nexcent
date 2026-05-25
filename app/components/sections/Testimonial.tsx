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
];

export default function Testimonial() {
  const { ref, inView } = useInView();

  return (
    <section className=" py-12 md:py-20 bg-[#F5F7FA]">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-12 items-start">
          <div className="max-sm:hidden">

          </div>

          <div className={inView ? "animate-fade-in-right" : "opacity-0"}>
            <p className="text-gray-dark text-base leading-relaxed mb-3">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            <h4 className="text-primary font-bold text-lg">Tim Smith</h4>
            <p className="text-gray-dark text-sm mb-8">British Dragon Boat Racing Association</p>

            <div className="flex items-center gap-6 flex-wrap">
              {clients.map((client) => (
                <Image
                  key={client.name}
                  src={client.logo}
                  alt={client.name}
                  width={60}
                  height={30}
                  className="h-7 w-auto object-contain opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
              <a href="#" className="text-primary font-medium text-sm hover:underline whitespace-nowrap">
                Meet all customers →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}