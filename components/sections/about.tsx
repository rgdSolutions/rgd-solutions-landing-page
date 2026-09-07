import Image from "next/image";
import headshot from "@/public/images/ricardo-dalessandro.png";
import { about } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { DownloadIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

export function About() {
  return (
    <Section id="about">
      <Reveal className="glass grid grid-cols-12 items-start gap-6 rounded-[28px] p-6 md:gap-10 md:p-12">
        <div className="col-span-12 flex flex-col gap-3.5 md:col-span-4 md:gap-4">
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] border border-white/[0.14]"
            style={{
              background:
                "radial-gradient(120% 90% at 50% 100%, rgba(63,210,199,0.32) 0%, rgba(240,143,160,0.16) 45%, rgba(7,15,31,0.2) 100%)",
            }}
          >
            <Image
              src={headshot}
              alt="Ricardo D'Alessandro"
              fill
              sizes="(min-width: 768px) 30vw, 100vw"
              className="object-cover object-top"
              placeholder="blur"
            />
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="glass-soft flex flex-col gap-0.5 rounded-[14px] px-4 py-3.5"
              >
                <span className="font-display text-[22px] leading-none font-bold">
                  {fact.value}
                </span>
                <span className="text-xs text-white/58">{fact.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 flex flex-col gap-[18px] md:col-span-8 md:gap-[22px]">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="font-display text-[34px] leading-[1.1] font-bold tracking-[-0.025em] md:text-[44px]">
            {about.title}
          </h2>
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="text-base leading-[1.7] text-white/74 md:text-[17px]"
            >
              {paragraph}
            </p>
          ))}
          <div className="flex flex-col gap-3 pt-1 md:flex-row md:items-center md:gap-3.5 md:pt-1.5">
            <ButtonLink href={siteConfig.resumePath} download className="w-full md:w-auto">
              <DownloadIcon strokeWidth={2.2} />
              {about.resumeCta}
            </ButtonLink>
            <div className="grid grid-cols-2 gap-3 md:flex md:gap-3.5">
              {siteConfig.linkedinUrl ? (
                <ButtonLink
                  variant="ghost"
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full px-3 md:w-auto md:px-6"
                >
                  LinkedIn
                </ButtonLink>
              ) : null}
              {siteConfig.githubUrl ? (
                <ButtonLink
                  variant="ghost"
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full px-3 md:w-auto md:px-6"
                >
                  GitHub
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
