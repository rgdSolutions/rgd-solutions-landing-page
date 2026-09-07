import { hero } from "@/content/site";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon, DownloadIcon } from "@/components/ui/icons";

const delays = ["0.05s", "0.2s", "0.35s", "0.5s", "0.65s"] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-[2] scroll-mt-20 px-5 pt-16 pb-16 md:px-20 md:pt-24 md:pb-20"
    >
      <div className="grid grid-cols-12 items-end gap-6 md:gap-8">
        <div className="col-span-12 flex flex-col gap-6 md:col-span-8 md:gap-7">
          <span className="eyebrow reveal" style={{ animationDelay: delays[0] }}>
            {hero.eyebrow}
          </span>
          <h1
            className="reveal-slide font-display text-[40px] leading-[1.04] font-bold tracking-[-0.03em] text-pretty md:text-[72px]"
            style={{ animationDelay: delays[1] }}
          >
            {hero.headline}
          </h1>
          <p
            className="reveal max-w-[720px] text-[17px] leading-relaxed text-ink/[0.72] md:text-xl"
            style={{ animationDelay: delays[2] }}
          >
            {hero.subhead}
          </p>
          <div
            className="reveal flex flex-col gap-3 pt-1 md:flex-row md:items-center md:gap-3.5 md:pt-2"
            style={{ animationDelay: delays[3] }}
          >
            <ButtonLink href={hero.primaryCta.href} className="w-full md:w-auto">
              {hero.primaryCta.label}
              <ArrowRightIcon />
            </ButtonLink>
            <ButtonLink
              variant="ghost"
              href={siteConfig.resumePath}
              download
              className="w-full md:w-auto"
            >
              <DownloadIcon />
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
          <p
            className="reveal text-[15px] font-medium text-ink/[0.55]"
            style={{ animationDelay: delays[4] }}
          >
            {hero.proofLine}
          </p>
        </div>

        <div
          className="reveal col-span-12 flex flex-col gap-3 pt-2 md:col-span-4 md:gap-3.5 md:pt-0 md:pb-1.5"
          style={{ animationDelay: delays[3] }}
        >
          <div className="glass flex flex-col gap-1.5 rounded-[20px] px-6 py-5">
            <span className="font-display text-4xl leading-none font-bold tracking-[-0.02em] md:text-[40px]">
              {hero.stats.headline.value}
            </span>
            <span className="text-sm text-ink/[0.62]">{hero.stats.headline.label}</span>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-3.5">
            {hero.stats.small.map((stat) => (
              <div
                key={stat.label}
                className="glass-soft flex flex-col gap-1 rounded-glass-sm px-5 py-4"
              >
                <span className="font-display text-[26px] leading-none font-bold md:text-[28px]">
                  {stat.value}
                </span>
                <span className="text-[13px] text-ink/[0.58]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
