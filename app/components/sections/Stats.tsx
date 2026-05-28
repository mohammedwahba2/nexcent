"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "@/app/hooks/useInView";


const stats = [
  { icon: "/images/icons/members.svg", value: 2245341, label: "Members" },
  { icon: "/images/icons/events.svg", value: 46328, label: "Clubs" },
  { icon: "/images/icons/events.svg", value: 828867, label: "Event Bookings" },
  { icon: "/images/icons/payments.svg", value: 1926436, label: "Payments" },
];

function CountUp({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Stats() {
  const { ref, inView } = useInView();

  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={inView ? "animate-fade-in-left" : "opacity-0"}>
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight mb-3">
              Helping a local <br />
              <span className="text-primary">business reinvent itself</span>
            </h2>
            <p className="text-gray-dark text-base">
              We reached here with our hard work and dedication
            </p>
          </div>

          <div
            className={`grid grid-cols-2 gap-8 ${
              inView ? "animate-fade-in-right" : "opacity-0"
            }`}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-wrap items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark">
                    <CountUp target={stat.value} inView={inView} />
                  </div>
                  <div className="text-gray-dark text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}