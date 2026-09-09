import { hero } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-[2] mx-auto max-w-[1600px] scroll-mt-24 px-5 pt-12 pb-10 md:px-20 md:pt-20 md:pb-16"
    >
      <div className="max-w-[1000px]">
        <div>
          <p className="eyebrow mb-6">{hero.eyebrow}</p>
          <h1 className="max-w-[1000px] font-display text-[46px] leading-[1.02] font-semibold tracking-[-0.045em] text-balance md:text-[72px] wide:text-[88px]">
            {hero.headline}
          </h1>
          <p className="mt-7 max-w-[720px] text-[17px] leading-relaxed text-ink/75 md:text-lg">
            {hero.subhead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRightIcon />
            </ButtonLink>
            <ButtonLink variant="ghost" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
