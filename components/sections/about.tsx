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
      <Reveal className="grid grid-cols-12 items-start gap-8 border-t border-ink/15 pt-10 md:gap-10">
        <div className="col-span-12 flex flex-col gap-[18px] md:col-span-8 md:gap-[22px]">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="font-display text-[34px] leading-[1.1] font-bold tracking-[-0.025em] md:text-[44px]">
            {about.title}
          </h2>
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="text-base leading-[1.7] text-ink/74 md:text-[17px]"
            >
              {paragraph}
            </p>
          ))}
          <div className="flex flex-wrap gap-3 pt-1 md:flex-row md:items-center md:gap-3.5 md:pt-1.5">
            <ButtonLink
              href={siteConfig.resumePath}
              download
              variant="ghost"
              className="w-full md:w-auto"
            >
              <DownloadIcon strokeWidth={2.2} />
              {about.resumeCta}
            </ButtonLink>
            <div className="flex flex-wrap gap-3 md:flex md:gap-3.5">
              {siteConfig.linkedinUrl ? (
                <ButtonLink
                  variant="ghost"
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full px-3 md:w-auto md:px-6"
                >
                  Ricardo on LinkedIn
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
                  Ricardo on GitHub
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>

        <div className="col-span-12 flex flex-col gap-3.5 md:col-start-10 md:col-span-3 md:gap-4">
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] border border-ink/[0.14]"
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
          <p className="text-sm text-ink/70">Ricardo D’Alessandro · Team lead</p>
        </div>
      </Reveal>
    </Section>
  );
}
