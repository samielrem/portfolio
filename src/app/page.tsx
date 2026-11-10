import { PageTransition } from "@/components/motion/page-transition";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <PageTransition>
      <main id="main">
        <Hero />
        <About />
      </main>
    </PageTransition>
  );
}
