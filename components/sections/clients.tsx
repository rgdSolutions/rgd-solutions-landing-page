import type { CSSProperties } from "react";
import { clients, type Client } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

/**
 * Official logos are single-colour SVGs used as a CSS mask over `currentColor`,
 * so they pick up the same ink tint as a text fallback in both themes.
 * Boxes are 85% of the desktop size below `md`.
 */
export function ClientMark({ client }: { client: Client }) {
  if (!client.logo) {
    return <li className="font-display text-lg font-bold md:text-xl">{client.name}</li>;
  }

  const { src, width, height } = client.logo;
  const style = {
    "--logo-w": `${width}px`,
    "--logo-h": `${height}px`,
    maskImage: `url(${src})`,
    WebkitMaskImage: `url(${src})`,
  } as CSSProperties;

  return (
    <li>
      <span
        role="img"
        aria-label={client.name}
        style={style}
        className="block h-[calc(var(--logo-h)*0.85)] w-[calc(var(--logo-w)*0.85)] bg-current mask-center mask-no-repeat mask-contain md:h-(--logo-h) md:w-(--logo-w)"
      />
    </li>
  );
}

export function Clients() {
  return (
    <section className="relative z-[2] px-5 pt-6 pb-16 md:px-20 md:pb-24">
      <Reveal className="glass-soft flex flex-col gap-[18px] rounded-[22px] p-[22px] md:gap-[22px] md:px-9 md:py-7">
        <span className="text-[13px] font-semibold tracking-[0.1em] text-ink/[0.48] uppercase">
          {clients.label}
        </span>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-3.5 text-ink/90 md:gap-x-10 md:gap-y-[18px]">
          {clients.items.map((client) => (
            <ClientMark key={client.name} client={client} />
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
