import { testimonials } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/section";

const excerpts = [
  {
    ...testimonials.featured,
    excerpt:
      "He's an excellent communicator, he's able to speak clearly and concisely about the status of his work or when onboarding new developers.",
    theme: "Clear communication",
  },
  {
    ...testimonials.others[0],
    excerpt:
      "He was able to quickly become familiar with and contribute to our codebase, was excellent at communicating his task progress, and was very proactive when finding himself blocked and reaching out as needed to unblock himself.",
    theme: "Quick to contribute",
  },
  {
    ...testimonials.others[1],
    excerpt:
      "He was responsive, helpful, and reliable, coming through in a pinch on several occasions.",
    theme: "Someone to count on",
  },
];
export function Testimonials() {
  return (
    <Section id="testimonials" className="flex flex-col gap-8 md:gap-12">
      <SectionHeading
        eyebrow={testimonials.eyebrow}
        title={testimonials.title}
        intro={testimonials.intro}
      />
      <div className="grid gap-8 md:grid-cols-3">
        {excerpts.map((item) => (
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
          Two more recommendations
        </summary>
        <div className="grid gap-8 pt-5 md:grid-cols-2">
          {testimonials.others.slice(2).map((item) => (
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
    </Section>
  );
}
