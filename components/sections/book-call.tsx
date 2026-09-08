import { bookCall } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";
import { BookCallForm } from "./book-call-form";

export function BookCall() {
  const email = siteConfig.contactEmail;
  return (
    <Section id="book-a-call">
      <Reveal className="glass grid grid-cols-12 items-start gap-6 rounded-[28px] p-6 md:gap-12 md:p-14">
        <div className="col-span-12 flex flex-col gap-4 md:col-span-5 md:gap-[22px]">
          <span className="eyebrow">{bookCall.eyebrow}</span>
          <h2 className="font-display text-[38px] leading-[1.06] font-bold tracking-[-0.03em] md:text-[52px]">
            {bookCall.title}
          </h2>
          <p className="text-[17px] leading-[1.65] text-ink/74 md:text-lg">{bookCall.body}</p>
          {email ? (
            <div className="flex flex-col gap-1.5 md:pt-2">
              <span className="text-sm text-ink/70">{bookCall.preferEmail}</span>
              <a
                href={`mailto:${email}`}
                className="inline-flex min-h-11 items-center text-[17px] font-bold text-teal hover:text-ink"
              >
                {email}
              </a>
            </div>
          ) : null}
        </div>
        <div className="col-span-12 md:col-span-7">
          <BookCallForm contactEmail={email} />
        </div>
      </Reveal>
    </Section>
  );
}
