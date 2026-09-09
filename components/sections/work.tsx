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
        title="AI assistance for legal workflows."
        intro="Featured experience at Morgan & Morgan, connecting AI capabilities to everyday legal work."
      />
      <article className="grid items-center gap-8 border-t border-ink/15 pt-8 md:grid-cols-[1.15fr_1fr] md:gap-12">
        <div className="flex flex-col items-start gap-5">
          <span className="eyebrow">{project.client}</span>
          <h3 className="font-display text-3xl leading-tight font-medium tracking-tight md:text-[42px]">
            Find answers. Trace sources. Draft in Word.
          </h3>
          <p className="max-w-lg text-lg leading-relaxed text-ink/75">
            Legal teams could retrieve information from documents, trace generated answers to source
            material, and use AI-assisted drafting inside Microsoft Word.
          </p>
          <p className="text-sm text-ink/65">{project.role}</p>
          <Link href={`/work/${project.slug}`} className="text-link mt-3">
            Read the project story <ArrowRightIcon />
          </Link>
        </div>
        <figure className="rounded-[20px] border border-ink/15 bg-navy-raised p-6 md:p-8">
          <p className="eyebrow mb-6">From documents to drafting</p>
          <ol>
            {[
              ["Documents", "Retrieve information from source material."],
              ["Answers you can check", "Follow an answer back to the documents behind it."],
              ["Drafting inside Word", "Use AI assistance where legal teams already write."],
            ].map(([title, body], index) => (
              <li key={title} className="relative flex gap-4 pb-7 last:pb-0">
                {index < 2 ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-9 bottom-1 left-4 border-l border-dashed border-teal/40"
                  />
                ) : null}
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full border border-teal/40 text-xs text-teal"
                >
                  {index + 1}
                </span>
                <div>
                  <h4 className="font-display text-xl font-medium">{title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 border-t border-ink/15 pt-4 text-sm leading-relaxed text-ink/70">
            <strong className="font-semibold text-ink">Quality checks for AI answers.</strong>{" "}
            Evaluation tools supported assessment of generated responses.
          </p>
          <figcaption className="mt-4 text-xs text-ink/60">
            Illustrative workflow · Not a product screenshot
          </figcaption>
        </figure>
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
