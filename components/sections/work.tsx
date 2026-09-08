import Link from "next/link";
import { projectMedia } from "@/content/project-media";
import { ProjectGallery } from "@/components/ui/project-gallery";
import { projects } from "@/content/projects";
import { Section, SectionHeading } from "@/components/ui/section";
import { ArrowRightIcon } from "@/components/ui/icons";

export function FeaturedWork() {
  const project = projects[0];
  return (
    <Section id="work" className="flex flex-col gap-8">
      <SectionHeading
        eyebrow="Selected experience"
        title="Built for real work."
        intro="A closer look at the products Ricardo has helped build—and the experience behind our team."
      />
      <article className="grid overflow-hidden rounded-[24px] border border-teal/25 bg-navy-raised md:grid-cols-[1.15fr_1fr]">
        <div className="flex flex-col items-start gap-5 p-6 md:p-12">
          <span className="eyebrow">{project.client}</span>
          <h3 className="font-display text-3xl leading-tight font-medium tracking-tight md:text-[42px]">
            {project.title}
          </h3>
          <p className="max-w-lg text-lg leading-relaxed text-ink/75">{project.summary}</p>
          <p className="text-sm text-ink/65">{project.role}</p>
          <Link href={`/work/${project.slug}`} className="text-link mt-3">
            Read the project story <ArrowRightIcon />
          </Link>
        </div>
        <div className="flex flex-col justify-center gap-0 border-t border-teal/20 bg-teal/5 px-6 py-5 md:border-t-0 md:border-l md:px-10">
          {[
            ["01", "Answers with provenance", "Document retrieval connected to source material."],
            [
              "02",
              "Quality that can be evaluated",
              "An evaluation harness with five judge models.",
            ],
            ["03", "AI inside the workflow", "Demand-letter generation and drafting in Word."],
          ].map(([number, title, body]) => (
            <div key={number} className="flex gap-4 border-b border-ink/10 py-6 last:border-0">
              <span className="pt-1 font-mono text-sm text-teal">{number}</span>
              <div>
                <h4 className="font-display text-xl font-medium">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </Section>
  );
}

export function Work() {
  return (
    <Section id="more-work" className="flex flex-col gap-8">
      <SectionHeading eyebrow="Web & mobile" title="More product experience." />
      <div className="flex flex-col gap-12">
        {projects
          .filter((project) => projectMedia[project.slug])
          .map((project) => (
            <article
              key={project.slug}
              className="grid items-center gap-8 border-t border-ink/15 pt-8 split:grid-cols-[0.8fr_1.2fr] split:gap-16"
            >
              <div className="flex flex-col items-start gap-5">
                <p className="eyebrow">{project.client}</p>
                <h3 className="font-display text-3xl leading-tight font-medium md:text-4xl">
                  {project.title}
                </h3>
                <p className="max-w-lg text-lg leading-relaxed text-ink/75">{project.summary}</p>
                <p className="text-sm text-ink/65">{project.role}</p>
                <Link href={`/work/${project.slug}`} className="text-link">
                  Explore {project.client} <ArrowRightIcon />
                </Link>
              </div>
              <div
                className={`min-w-0 ${project.slug === "launchdarkly" ? "[&_img]:mx-auto [&_img]:w-[90%]" : ""}`}
              >
                <ProjectGallery
                  media={projectMedia[project.slug]!}
                  limit={project.slug === "cnn" || project.slug === "launchdarkly" ? 1 : 2}
                />
              </div>
            </article>
          ))}
      </div>
    </Section>
  );
}
