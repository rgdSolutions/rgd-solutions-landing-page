import { hero, testimonials } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-[2] mx-auto max-w-[1600px] scroll-mt-24 px-5 pt-12 pb-10 md:px-20 md:pt-20 md:pb-16"
    >
      <div className="mx-auto max-w-[1120px] text-center">
        <div>
          <p className="eyebrow mb-6">{hero.eyebrow}</p>
          <h1 className="mx-auto max-w-[1050px] font-display text-[46px] leading-[1.02] font-semibold tracking-[-0.045em] text-balance md:text-[72px] wide:text-[88px]">
            {hero.headline}
          </h1>
          <p className="mx-auto mt-7 max-w-[760px] text-[17px] leading-relaxed text-ink/75 md:text-lg">
            {hero.subhead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <ButtonLink href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRightIcon />
            </ButtonLink>
            <ButtonLink variant="ghost" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
          <figure className="mx-auto mt-8 max-w-[760px] border-t border-ink/15 pt-5">
            <blockquote className="text-base leading-relaxed text-ink/80">
              “{testimonials.featured[0].excerpt}”
            </blockquote>
            <figcaption className="mt-2 text-sm text-ink/65">
              {testimonials.featured[0].name} · Engineering colleague
              <a
                href="#testimonials"
                className="ml-2 inline-flex min-h-11 items-center underline underline-offset-4"
              >
                Read recommendations
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
