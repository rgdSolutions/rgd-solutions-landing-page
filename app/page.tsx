import { About } from "@/components/sections/about";
import { BookCall } from "@/components/sections/book-call";
import { Clients } from "@/components/sections/clients";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Nav } from "@/components/sections/nav";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { FeaturedWork, Work } from "@/components/sections/work";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-navy text-ink">
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Clients />
        <FeaturedWork />
        <Services />
        <Work />
        <Process />
        <Testimonials />
        <About />
        <Faq />
        <BookCall />
      </main>
      <Footer />
    </div>
  );
}
