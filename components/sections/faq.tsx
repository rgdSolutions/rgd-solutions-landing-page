import { faq } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/section";

export function Faq() {
  return (
    <Section id="faq" className="grid items-start gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
      <SectionHeading eyebrow="A few useful answers" title="Working with us." />
      <div className="divide-y divide-ink/15 border-y border-ink/15">
        {faq.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 font-display text-xl font-medium [&::-webkit-details-marker]:hidden">
              {item.question}
              <span aria-hidden="true" className="text-2xl text-teal group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="pt-4 pb-2 text-base leading-relaxed text-ink/75">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
