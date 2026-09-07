import { About } from "@/components/sections/about";
import { BookCall } from "@/components/sections/book-call";
import { Clients } from "@/components/sections/clients";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Nav } from "@/components/sections/nav";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Work } from "@/components/sections/work";
import { Aurora } from "@/components/ui/aurora";
import { MotionProvider } from "@/components/ui/motion-provider";

export default function Home() {
  return (
    <MotionProvider>
      <div className="relative overflow-hidden bg-navy text-white">
        <Aurora />
        <Nav />
        <main>
          <Hero />
          <Clients />
          <Services />
          <Work />
          <Process />
          <About />
          <Testimonials />
          <BookCall />
        </main>
        <Footer />
      </div>
    </MotionProvider>
  );
}
