import { process } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { AccentBadge, Section, SectionHeading } from "@/components/ui/section";

export function Process() {
  return (
    <Section className="flex flex-col gap-7 md:gap-12">
      <SectionHeading eyebrow={process.eyebrow} title={process.title} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {process.steps.map((step, index) => (
          <Reveal
            key={step.title}
            delay={index * 0.1}
            className="glass-soft flex flex-col gap-4 rounded-[22px] p-6 md:gap-[18px] md:p-[30px]"
          >
            <AccentBadge
              accent={step.accent}
              className="flex size-11 items-center justify-center rounded-pill font-display text-lg font-bold"
            >
              {index + 1}
            </AccentBadge>
            <h3 className="font-display text-[22px] font-semibold md:text-2xl">{step.title}</h3>
            <p className="text-base leading-[1.65] text-ink/70">{step.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
