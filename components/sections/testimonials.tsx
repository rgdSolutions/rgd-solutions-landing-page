import { testimonials } from "@/content/site";
import { QuoteIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function Testimonials() {
  const { featured, others } = testimonials;
  return (
    <Section id="testimonials" className="flex flex-col gap-7 md:gap-12">
      <SectionHeading
        eyebrow={testimonials.eyebrow}
        title={testimonials.title}
        intro={testimonials.intro}
      />
      <div className="grid grid-cols-12 gap-4 md:gap-5">
        <Reveal
          as="blockquote"
          className="glass col-span-12 flex flex-col gap-[18px] rounded-glass p-6 md:gap-[22px] md:px-11 md:py-10"
        >
          <QuoteIcon className="text-teal" />
          <p className="font-display text-[22px] leading-[1.4] font-medium tracking-[-0.01em] text-pretty md:text-[28px]">
            &quot;{featured.quote}&quot;
          </p>
          <footer className="flex flex-col gap-0.5">
            <span className="text-base font-bold">{featured.name}</span>
            <span className="text-sm text-white/58">{featured.role}</span>
          </footer>
        </Reveal>

        {others.map((item, index) => (
          <Reveal
            key={item.name}
            as="blockquote"
            delay={(index % 2) * 0.1}
            className="glass-soft col-span-12 flex flex-col gap-4 rounded-[22px] p-6 md:col-span-6 md:gap-[18px] md:p-8"
          >
            <p className="text-[17px] leading-[1.65] text-white/86">&quot;{item.quote}&quot;</p>
            <footer className="mt-auto flex flex-col gap-0.5">
              <span className="text-[15px] font-bold">{item.name}</span>
              <span className="text-[13px] text-white/58">{item.role}</span>
            </footer>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
