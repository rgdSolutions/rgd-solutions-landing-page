import { work } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { AccentBadge, Section, SectionHeading } from "@/components/ui/section";

const spanClass = {
  wide: "md:col-span-7",
  narrow: "md:col-span-5",
} as const;

const titleClass = {
  wide: "text-[26px] md:text-[30px]",
  narrow: "text-[24px] md:text-[26px]",
} as const;

export function Work() {
  return (
    <Section id="work" className="flex flex-col gap-7 md:gap-12">
      <SectionHeading eyebrow={work.eyebrow} title={work.title} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        {work.items.map((item, index) => (
          <Reveal
            key={item.client}
            as="article"
            delay={(index % 2) * 0.1}
            className={`glass flex flex-col gap-5 rounded-glass p-6 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-teal/45 motion-reduce:transform-none motion-reduce:transition-none md:gap-[22px] md:p-9 ${spanClass[item.span]}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4">
              <span className="font-display text-[22px] font-semibold">{item.client}</span>
              <AccentBadge
                accent={item.accent}
                className="rounded-pill px-3.5 py-2 text-[13px] font-bold whitespace-nowrap"
              >
                {item.stat}
              </AccentBadge>
            </div>
            <h3
              className={`font-display leading-[1.2] font-semibold tracking-[-0.015em] ${titleClass[item.span]}`}
            >
              {item.title}
            </h3>
            <p className="text-base leading-[1.65] text-white/70">{item.body}</p>
            <span className="mt-auto text-[13px] font-semibold text-white/50">{item.stack}</span>
          </Reveal>
        ))}
      </div>
      <Reveal className="glass-soft flex flex-col gap-3.5 rounded-[20px] px-6 py-[22px] md:px-8 md:py-[26px]">
        <span className="text-[13px] font-bold tracking-[0.1em] text-white/[0.48] uppercase">
          {work.moreLabel}
        </span>
        <p className="text-[15px] leading-[1.8] text-white/[0.68]">{work.more}</p>
      </Reveal>
    </Section>
  );
}
