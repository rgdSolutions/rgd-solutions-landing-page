import { siteConfig } from "@/lib/site-config";
import { testimonials } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/section";

export function Testimonials() {
  return (
    <Section id="testimonials" className="flex flex-col gap-8 md:gap-12">
      <SectionHeading
        eyebrow={testimonials.eyebrow}
        title={testimonials.title}
        intro={testimonials.intro}
      />
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.featured.map((item) => (
          <div key={item.name} className="flex flex-col border-t-2 border-teal/40 pt-6">
            <span className="mb-5 text-xs font-bold tracking-widest text-teal uppercase">
              {item.theme}
            </span>
            <blockquote className="flex flex-1 flex-col">
              <p className="font-display text-xl leading-relaxed">“{item.excerpt}”</p>
              <footer className="mt-auto pt-6">
                <p className="text-sm font-bold">{item.name}</p>
                <p className="mt-1 text-sm text-ink/65">{item.role}</p>
              </footer>
            </blockquote>
            <details className="mt-4">
              <summary className="min-h-11 cursor-pointer py-3 text-sm text-ink/75 underline underline-offset-4">
                Read full recommendation
              </summary>
              <p className="pt-2 text-sm leading-relaxed text-ink/75">“{item.quote}”</p>
            </details>
          </div>
        ))}
      </div>
      <details className="border-t border-ink/15 pt-4">
        <summary className="min-h-11 cursor-pointer py-3 text-sm text-ink/75">
          Three more recommendations
        </summary>
        <div className="grid gap-8 pt-5 md:grid-cols-3">
          {testimonials.supporting.map((item) => (
            <blockquote key={item.name}>
              <p className="text-base leading-relaxed text-ink/80">“{item.quote}”</p>
              <footer className="mt-4 text-sm">
                <p className="font-bold">{item.name}</p>
                <p className="text-ink/65">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </details>
      {siteConfig.linkedinUrl ? (
        <a
          href={`${siteConfig.linkedinUrl.replace(/\/$/, "")}/details/recommendations/`}
          target="_blank"
          rel="noreferrer"
          className="text-link inline-flex min-h-11 items-center self-start"
        >
          Read Ricardo’s recommendations on LinkedIn ↗
        </a>
      ) : null}
    </Section>
  );
}
