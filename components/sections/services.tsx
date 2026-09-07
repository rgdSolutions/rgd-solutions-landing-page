import { services } from "@/content/site";
import { AiIcon, DevicesIcon, TeamIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { AccentBadge, Section, SectionHeading, Tag } from "@/components/ui/section";

const icons = {
  ai: AiIcon,
  devices: DevicesIcon,
  team: TeamIcon,
} as const;

export function Services() {
  return (
    <Section id="services" className="flex flex-col gap-7 md:gap-12">
      <SectionHeading eyebrow={services.eyebrow} title={services.title} intro={services.intro} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {services.items.map((item, index) => {
          const Icon = icons[item.icon];
          return (
            <Reveal
              key={item.title}
              as="article"
              delay={index * 0.1}
              className="glass flex flex-col gap-5 rounded-glass p-6 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-teal/45 motion-reduce:transform-none motion-reduce:transition-none md:p-8"
            >
              <AccentBadge
                accent={item.accent}
                className="flex size-12 items-center justify-center rounded-[14px]"
              >
                <Icon />
              </AccentBadge>
              <h3 className="font-display text-[24px] font-semibold tracking-[-0.01em] md:text-[26px]">
                {item.title}
              </h3>
              <p className="text-base leading-[1.65] text-ink/70">{item.body}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
