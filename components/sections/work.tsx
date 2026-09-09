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
  const featured = projects.find((project) => project.slug === "launchdarkly")!;
  const supporting = ["cnn", "d-id", "astrocade"].map((slug) =>
    projects.find((project) => project.slug === slug)!,
  );
  return (
    <Section id="more-work" className="flex flex-col gap-10">
      <SectionHeading eyebrow="Selected projects" title="Engineering behind the experience." />
      <article className="grid items-center gap-8 border-t border-ink/15 pt-8 split:grid-cols-[0.8fr_1.2fr] split:gap-16">
        <div className="flex flex-col items-start gap-5">
          <p className="eyebrow">{featured.client}</p>
          <h3 className="font-display text-3xl leading-tight font-medium md:text-4xl">
            {featured.title}
          </h3>
          <p className="max-w-lg text-lg leading-relaxed text-ink/75">{featured.summary}</p>
          <p className="text-sm text-ink/65">{featured.role}</p>
          <Link href={`/work/${featured.slug}`} className="text-link">
            Explore LaunchDarkly <ArrowRightIcon />
          </Link>
        </div>
        <div className="min-w-0 [&_img]:mx-auto [&_img]:w-[90%]">
          <ProjectGallery
            media={projectMedia.launchdarkly!}
            limit={1}
            imageHref="/work/launchdarkly"
          />
        </div>
      </article>
      <div className="grid gap-10 lg:grid-cols-3">
        {supporting.map((project) => (
          <article
            key={project.slug}
            className="flex min-w-0 flex-col items-start gap-4 border-t border-ink/15 pt-6"
          >
            <p className="eyebrow">{project.client}</p>
            <h3 className="font-display text-2xl leading-tight font-medium">{project.title}</h3>
            <p className="text-base leading-relaxed text-ink/75">{project.summary}</p>
            <Link href={`/work/${project.slug}`} className="text-link">
              Explore {project.client} <ArrowRightIcon />
            </Link>
            <div className="mt-2 w-full [&_img]:max-h-[320px] [&_img]:object-contain">
              <ProjectGallery
                media={projectMedia[project.slug]!}
                limit={1}
                imageHref={`/work/${project.slug}`}
              />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
