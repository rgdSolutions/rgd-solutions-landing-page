import { clients } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

export function Clients() {
  return (
    <section className="relative z-[2] px-5 pt-6 pb-16 md:px-20 md:pb-24">
      <Reveal className="glass-soft flex flex-col gap-[18px] rounded-[22px] p-[22px] md:gap-[22px] md:px-9 md:py-7">
        <span className="text-[13px] font-semibold tracking-[0.1em] text-white/[0.48] uppercase">
          {clients.label}
        </span>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-3.5 md:gap-x-10 md:gap-y-[18px]">
          {clients.primary.map((name) => (
            <li key={name} className="font-display text-lg font-bold text-white/90 md:text-xl">
              {name}
            </li>
          ))}
          {clients.secondary.map((name) => (
            <li
              key={name}
              className="font-display text-base font-semibold text-white/60 md:text-lg"
            >
              {name}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
