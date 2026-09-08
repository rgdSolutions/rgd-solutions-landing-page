import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectMedia } from "@/content/project-media";
import { ProjectGallery } from "@/components/ui/project-gallery";
import { projects, projectReferences } from "@/content/projects";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { ProductWorkflow } from "@/components/ui/product-workflow";
import { ButtonLink } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const title = `${project.client}: ${project.title} | RGD Solutions`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${slug}` },
    openGraph: { title, description: project.summary, url: `/work/${slug}` },
    twitter: { title, description: project.summary },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <>
      <Nav home={false} />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-[1280px] px-5 py-12 md:px-20 md:py-20"
      >
        <Link href="/#work" className="text-link mb-10">
          ← Back to selected work
        </Link>
        <p className="eyebrow">
          {project.client} · {project.category}
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.06] font-semibold tracking-tight md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink/75">{project.overview}</p>
        <p className="mt-6 text-sm text-ink/65">{project.role}</p>
        <div className="my-12 grid items-start gap-10 border-t border-ink/15 pt-10 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <div className="flex flex-col gap-10">
            {project.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-2xl font-medium">{section.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink/75">{section.body}</p>
              </section>
            ))}
          </div>
          {slug === "morgan-and-morgan" ? (
            <ProductWorkflow />
          ) : project.stack.length > 0 ? (
            <aside className="rounded-xl border border-ink/15 p-7">
              <p className="eyebrow">Technology</p>
              <ul className="mt-5 space-y-3">
                {project.stack.map((item) => (
                  <li key={item} className="border-b border-ink/10 pb-3 text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </div>
        {slug === "morgan-and-morgan" ? (
          <p className="mb-10 text-sm text-ink/65">Technology: {project.stack.join(" · ")}</p>
        ) : null}
        {projectMedia[slug] ? (
          <section aria-label={`${project.client} product gallery`} className="mb-12">
            <h2 className="mb-6 font-display text-3xl">Inside the product</h2>
            <ProjectGallery media={projectMedia[slug]} />
          </section>
        ) : null}
        {projectReferences[slug] ? (
          <section className="mb-12 border-t border-ink/15 pt-8">
            <h2 className="font-display text-2xl">Product context & sources</h2>
            <p className="mt-3 text-sm text-ink/70">
              Published coverage provides product history and imagery. Engineering responsibilities
              are based on Ricardo’s account of his work.
            </p>
            <ul className="mt-4 space-y-2">
              {projectReferences[slug].map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link text-sm"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <section className="flex flex-col items-start gap-5 border-t border-ink/15 pt-10">
          <h2 className="font-display text-3xl">Building something similar?</h2>
          <p className="text-lg text-ink/75">
            Tell us where you are today and what you need to ship next.
          </p>
          <ButtonLink href="/#book-a-call">Discuss your project</ButtonLink>
        </section>
      </main>
      <Footer home={false} />
    </>
  );
}
