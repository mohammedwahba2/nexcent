"use client";

import { useInView } from "@/app/hooks/useInView";
import { ArrowRight } from "lucide-react";


const posts = [
  {
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    href: "#",
  },
  {
    title: "What are your safeguarding responsibilities and how can you manage them?",
    href: "#",
  },
  {
    title: "Revamping the Membership Model with Triathlon Australia",
    href: "#",
  },
];

export default function Blog() {
  const { ref, inView } = useInView();

  return (
    <section className="py-10 bg-white">
      <div ref={ref} className="container mx-auto px-6">

        <div className={`text-center mb-16 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-2">
            Caring is the new marketing
          </h2>
          <p className="text-gray-dark text-base max-w-lg mx-auto leading-relaxed">
            The Nexcent blog is the best place to read about the latest membership insights,
            trends and more. See who's joining the community, read about how our community
            are increasing their membership income and lot's more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {posts.map((post, i) => (
            <div
              key={post.title}
              className={`bg-gray-50 rounded-2xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <p className="text-dark font-medium text-base leading-relaxed mb-6">
                {post.title}
              </p>
              
              <a
                href={post.href}
                className="text-primary font-semibold text-sm hover:text-primary-dark transition-colors flex items-center gap-2 group"
              >
                Read More

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>  
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}