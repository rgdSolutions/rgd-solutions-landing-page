import Image from "next/image";
import headshot from "@/public/images/ricardo-dalessandro.png";
import { about } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon, DownloadIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

export function About() {
  return (
    <Section id="about">
      <Reveal className="grid items-center gap-10 border-t border-ink/15 pt-10 md:grid-cols-[1.65fr_1fr] md:gap-14">
        <div className="flex flex-col items-start gap-6">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="max-w-[600px] font-display text-[34px] leading-[1.1] font-bold tracking-[-0.025em] md:text-[44px]">
            {about.title}
          </h2>
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="max-w-[580px] text-base leading-[1.7] text-ink/74 md:text-[18px]"
            >
              {paragraph}
            </p>
          ))}
          <ButtonLink href="#book-a-call" className="mt-2">
            {about.primaryCta} <ArrowRightIcon />
          </ButtonLink>
        </div>

        <div className="flex w-full max-w-[360px] flex-col gap-3.5 justify-self-center md:justify-self-end">
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
          <div>
            <p className="font-semibold">Ricardo D’Alessandro</p>
            <p className="mt-1 text-sm text-ink/70">Team lead</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 text-sm text-ink/70">
            {siteConfig.linkedinUrl ? (
              <a
                className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-teal"
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Ricardo on LinkedIn"
              >
                LinkedIn
              </a>
            ) : null}
            {siteConfig.githubUrl ? (
              <a
                className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-teal"
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Ricardo on GitHub"
              >
                GitHub
              </a>
            ) : null}
            <a
              className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4 hover:text-teal"
              href={siteConfig.resumePath}
              download
            >
              <DownloadIcon /> {about.resumeCta}
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
