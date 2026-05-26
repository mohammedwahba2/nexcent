import Blog from "./components/sections/Blog";
import Clients from "./components/sections/Clients";
import CTA from "./components/sections/CTA";
import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Testimonial from "./components/sections/Testimonial";
import TextImageSection from "./components/sections/TextImageSection";


export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Nexcent",
            url: "https://nexcent-ochre.vercel.app/",
            description:
              "Membership management platform for organisations, associations, and clubs.",
            publisher: {
              "@type": "Organization",
              name: "Nexcent",
              logo: {
                "@type": "ImageObject",
                url: "https://nexcent-ochre.vercel.app//images/logo.svg",
              },
            },
            datePublished: "2024-01-01",
            dateModified: new Date().toISOString().split("T")[0],
          }),
        }}
      />

      <Hero />
      <Clients />
      <Features />
      <TextImageSection
          image="/images/pixelgrade.svg"
          imageAlt="Pixelgrade illustration"
          title="The unseen of spending three years at Pixelgrade"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
          reverse={false}
        />
        <Stats />
        <TextImageSection
          image="/images/footer-design.svg"
          imageAlt="Footer design illustration"
          title="How to design your site footer like we did"
          description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
          reverse={false}
        />
        <Testimonial />
        <Blog />
        <CTA />
    </main>
  );
}