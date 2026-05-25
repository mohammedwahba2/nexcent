import Clients from "./components/sections/Clients";
import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";


export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Features />
    </main>
  );
}